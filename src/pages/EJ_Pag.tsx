import { Header_Private } from '@/components/Header/hearder_private'
import Footer from '@/components/Footer'
import '@/index.css'
import rio_junior_logo from '@/assets/rio_junior_logo.png'
import { Button } from '@/components/ui/button'
import { Link, useParams } from "react-router-dom"
import { ArrowLeftIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { PerformanceChart } from '@/components/Grafico/Grafico'
import CardIndicador from '@/components/CardIndicador'

const API_BASE_URL = import.meta.env.VITE_API_URL

interface ResultadoMensal {
  mesReferencia: string
  numeroProjetos: number
  faturamento: number
  numeroMembros: number
  csat: number
  engajamentoMej: number
  fatorColaborativo: number
  indiceCluster: number
}

interface EjData {
  id: string
  nome: string
  local: string
  faculdade: string
  email: string
  federada: boolean
  resultados: ResultadoMensal[]
}

export default function Ej_Pag() {
  const { id } = useParams()
  const [ejDados, setEjDados] = useState<EjData | null>(null)

  useEffect(() => {
    async function carregarDados() {
      const token = localStorage.getItem("token")

      const response = await fetch(`${API_BASE_URL}/empresas/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const data = await response.json()
      setEjDados(data)
    }

    if (id) carregarDados()
  }, [id])

  if (!ejDados) {
    return <p>Carregando...</p>
  }

  function calcularPerformance(resultado: ResultadoMensal) {
    return Number(
      resultado.csat *
      resultado.engajamentoMej *
      resultado.faturamento *
      resultado.fatorColaborativo *
      100
    )
  }

  const ultimoResultado = ejDados.resultados[ejDados.resultados.length - 1]

  const chartData = ejDados.resultados.map((r) => ({
    month: new Date(r.mesReferencia).toLocaleString("pt-BR", { month: "short" }),
    performance: calcularPerformance(r)
  }))

  const mesFormatado = new Date(ultimoResultado.mesReferencia)
    .toLocaleString("pt-BR", { month: "long", year: "numeric" })

  return (
    <div className='flex flex-col items-center min-h-screen font-inter'>
      <Header_Private />

      <main className="flex flex-1 flex-col items-start w-full px-0 md:px-6 py-5 
        lg:gap-20 gap-5">

        <Button asChild className='bg-verde-claro hover:bg-[#667d19] 
          font-poppins text-white font-semibold text-xl md:text-2xl'>
          <Link to='/empresas'><ArrowLeftIcon/>Voltar</Link>
        </Button>

        <div className='w-full flex flex-col px-9 lg:px-30 lg:flex-row md:gap-5'>
          

          <div className='lg:w-1/3 xl:w-1/4'>
            <div className='bg-card border rounded-lg shadow-sm p-4 md:p-5 h-full'>
              <div className='flex flex-col items-center gap-3 md:gap-4 h-full'>

                <div className='w-28 h-28 md:w-32 md:h-32 flex items-center justify-center'>
                  <img 
                    src={rio_junior_logo} 
                    className='w-full h-full object-contain'
                    alt="Logo da Empresa"
                  />
                </div>

                <div className='w-full text-center grow'>
                  <h1 className='text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2'>
                    {ejDados.nome}
                  </h1>

                  <div className='space-y-2 text-sm'>
                    <div className='flex flex-col items-center'>
                      <span className='font-medium text-muted-foreground text-xs'>Universidade:</span>
                      <span className='text-foreground text-sm'>{ejDados.faculdade}</span>
                    </div>

                    <div className='flex flex-col items-center'>
                      <span className='font-medium text-muted-foreground text-xs'>Email:</span>
                      <span className='text-foreground text-sm'>{ejDados.email}</span>
                    </div>

                    <div className='flex flex-col items-center'>
                      <span className='font-medium text-muted-foreground text-xs'>Projetos:</span>
                      <span className='text-foreground text-sm'>{ultimoResultado.numeroProjetos}</span>
                    </div>

                    <div className='flex flex-col items-center'>
                      <span className='font-medium text-muted-foreground text-xs'>Membros:</span>
                      <span className='text-foreground text-sm'>{ultimoResultado.numeroMembros}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className='flex justify-center lg:w-2/3 xl:w-3/4 mt-4 lg:mt-0 lg:pl-2'>
            <div className='w-full h-full'>
              <PerformanceChart 
                regua={ultimoResultado.indiceCluster}
                data={chartData}
              />
            </div>
          </div>

        </div>

        <div className='w-full grid grid-cols-1 gap-18 sm:grid-cols-2 md:max-w-[87%]
          md:grid-cols-4 py-5 md:place-self-center'>

          <CardIndicador 
            valor={`R$ ${Number(ultimoResultado.faturamento).toLocaleString("pt-BR")}`}
            titulo='Faturamento'
            mes={mesFormatado}
          />

          <CardIndicador 
            valor={Number(ultimoResultado.csat)}
            titulo='CSAT'
            mes={mesFormatado}
          />

          <CardIndicador
            valor={`${Number(ultimoResultado.engajamentoMej)}%`}
            titulo='Engajamento'
            mes={mesFormatado}
          />

          <CardIndicador
            valor={`${Number(ultimoResultado.fatorColaborativo)}%`}
            titulo='Colab'
            mes={mesFormatado}
          />

        </div>

      </main>

      <Footer />
    </div>
  )
}
