import { Header_Private } from '@/components/Header/hearder_private'
import Footer from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label' 
import { Link } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'
import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const indicadoresSchema = z.object({
  numeroProjetos: z.number().int().min(0, "O número de projetos deve ser não-negativo."),
  faturamento: z.number().min(0, "O faturamento deve ser não-negativo."),
  numeroMembros: z.number().int().min(0, "O número de membros deve ser não-negativo."),
  csat: z.number().min(0, "CSAT inválido.").max(10, "CSAT máximo 10.0").or(z.number().min(0).max(100)),
  engajamentoMej: z.number().min(0).max(1, "Engajamento deve ser entre 0 e 1 (ou use porcentagem, ex: 0.85)"),
  fatorColaborativo: z.number().min(0).max(1, "Fator Colaborativo deve ser entre 0 e 1"),
  indiceCluster: z.number().int().min(0, "Índice de Cluster deve ser inteiro e não-negativo"),
})

type IndicadoresForm = z.infer<typeof indicadoresSchema>

const API_BASE_URL = import.meta.env.VITE_API_URL

export default function IndicadoresFormPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<IndicadoresForm>({
    resolver: zodResolver(indicadoresSchema),
    defaultValues: {
      numeroProjetos: 0,
      faturamento: 0,
      numeroMembros: 0,
      csat: 0,
      engajamentoMej: 0,
      fatorColaborativo: 0,
      indiceCluster: 0,
    }
  })

  async function onSubmit(data: IndicadoresForm) {
    setIsSubmitting(true)
    const token = localStorage.getItem("token")
    const empresaId = localStorage.getItem("empresaId")

    console.log("Token encontrado:", !!token) // true ou false
    console.log("Empresa ID encontrado:", empresaId)

    if (!token || !empresaId) {
        alert("Erro de Autenticação: Você precisa estar logado para enviar indicadores.")
        setIsSubmitting(false)
        return
    }

    const payload = {
      ...data,
      empresaId: empresaId,
      numeroProjetos: Number(data.numeroProjetos),
      faturamento: Number(data.faturamento),
      numeroMembros: Number(data.numeroMembros),
      csat: Number(data.csat),
      engajamentoMej: Number(data.engajamentoMej),
      fatorColaborativo: Number(data.fatorColaborativo),
      indiceCluster: Number(data.indiceCluster),
    }

    try {
      const response = await fetch(`${API_BASE_URL}/indicador`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      })

      if (response.status === 409) {
          alert("Conflito de Mês: Já existem indicadores cadastrados para o mês atual. Você só pode cadastrar um por mês.")
          return
      }

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.error || `Erro ao cadastrar indicadores: Status ${response.status}`;
        throw new Error(errorMessage)
      }

      alert("Sucesso! Indicadores cadastrados com sucesso para o mês atual.")
      form.reset()

    } catch (error) {
      console.error(error)
        alert(`Erro no Cadastro: ${error instanceof Error ? error.message : "Erro interno."}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='flex flex-col items-center min-h-screen font-inter text-white'> 
      <Header_Private />

      <main className="flex flex-1 flex-col items-start w-full px-0 md:px-6 py-5 lg:gap-5 gap-5">
        
        <div className='w-full px-9 md:px-6'>
          <Button asChild className='bg-verde-claro hover:bg-[#667d19] font-poppins text-white font-semibold text-xl md:text-2xl'>
            <Link to='/empresas'><ArrowLeftIcon/>Voltar</Link>
          </Button>
        </div>

        <div className='w-full max-w-4xl mx-auto px-9 md:px-6 py-8 bg-azul-claro border border-white/50 rounded-2xl shadow-lg'>
          
          <h1 className='text-3xl font-bold text-white mb-6'>Cadastro de Indicadores Mensais</h1>
          <p className='text-white/70 mb-8'>
            Informe as métricas de desempenho da sua EJ para o mês atual.
          </p>

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              
              <div>
                <Label htmlFor="numeroProjetos">Número de Projetos Concluídos</Label>
                <Input 
                  id="numeroProjetos" 
                  type="number"
                  step="1"
                  {...form.register("numeroProjetos", { valueAsNumber: true })} 
                  disabled={isSubmitting}
                  className='border border-white/50 text-white placeholder:text-white/50 focus:border-verde-claro' 
                />
                {form.formState.errors.numeroProjetos && <p className="text-red-300 text-sm mt-1">{form.formState.errors.numeroProjetos.message}</p>}
              </div>

              <div>
                <Label htmlFor="faturamento">Faturamento Total (R$)</Label>
                <Input 
                  id="faturamento" 
                  type="number"
                  step="0.01"
                  {...form.register("faturamento", { valueAsNumber: true })} 
                  disabled={isSubmitting}
                  className='border border-white/50 text-white placeholder:text-white/50 focus:border-verde-claro'
                />
                {form.formState.errors.faturamento && <p className="text-red-300 text-sm mt-1">{form.formState.errors.faturamento.message}</p>}
              </div>

              <div>
                <Label htmlFor="numeroMembros">Número de Membros Ativos</Label>
                <Input 
                  id="numeroMembros" 
                  type="number"
                  step="1"
                  {...form.register("numeroMembros", { valueAsNumber: true })} 
                  disabled={isSubmitting}
                  className='border border-white/50 text-white placeholder:text-white/50 focus:border-verde-claro'
                />
                {form.formState.errors.numeroMembros && <p className="text-red-300 text-sm mt-1">{form.formState.errors.numeroMembros.message}</p>}
              </div>

              <div>
                <Label htmlFor="csat">CSAT (0 a 10)</Label>
                <Input 
                  id="csat" 
                  type="number"
                  step="0.1"
                  {...form.register("csat", { valueAsNumber: true })} 
                  disabled={isSubmitting}
                  className='border border-white/50 text-white placeholder:text-white/50 focus:border-verde-claro'
                />
                {form.formState.errors.csat && <p className="text-red-300 text-sm mt-1">{form.formState.errors.csat.message}</p>}
              </div>

              <div>
                <Label htmlFor="engajamentoMej">Engajamento MEJ (0.00 a 1.00)</Label>
                <Input 
                  id="engajamentoMej" 
                  type="number"
                  step="0.01"
                  {...form.register("engajamentoMej", { valueAsNumber: true })} 
                  disabled={isSubmitting}
                  className='border border-white/50 text-white placeholder:text-white/50 focus:border-verde-claro'
                />
                {form.formState.errors.engajamentoMej && <p className="text-red-300 text-sm mt-1">{form.formState.errors.engajamentoMej.message}</p>}
              </div>

              <div>
                <Label htmlFor="fatorColaborativo">Fator Colaborativo (0.00 a 1.00)</Label>
                <Input 
                  id="fatorColaborativo" 
                  type="number"
                  step="0.01"
                  {...form.register("fatorColaborativo", { valueAsNumber: true })} 
                  disabled={isSubmitting}
                  className='border border-white/50 text-white placeholder:text-white/50 focus:border-verde-claro'
                />
                {form.formState.errors.fatorColaborativo && <p className="text-red-300 text-sm mt-1">{form.formState.errors.fatorColaborativo.message}</p>}
              </div>
              
              <div>
                <Label htmlFor="indiceCluster">Índice de Cluster</Label>
                <Input 
                  id="indiceCluster" 
                  type="number"
                  step="1"
                  {...form.register("indiceCluster", { valueAsNumber: true })} 
                  disabled={isSubmitting}
                  className='border border-white/50 text-white placeholder:text-white/50 focus:border-verde-claro'
                />
                {form.formState.errors.indiceCluster && <p className="text-red-300 text-sm mt-1">{form.formState.errors.indiceCluster.message}</p>}
              </div>

            </div>

            <Button 
              type="submit" 
              className='w-full bg-verde-claro hover:bg-[#667d19] font-poppins text-white font-semibold text-lg active:scale-95'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Cadastrar Indicadores'}
            </Button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}