import { Header_Public } from '@/components/Header/header_public'
import Footer from '../components/Footer'
import '../index.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface DestaqueData {
    nomeEmpresa: string
    local: string,
    email: string
    isFederada: boolean
    mesReferencia: string
    faturamento: number
    numeroProjetos: number
    csat: number
    indiceCluster: number
}

const API_BASE_URL = import.meta.env?.VITE_API_URL

export default function Home() {
    const [destaque, setDestaque] = useState<DestaqueData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        //TESTAR SEM DB

        const dadosTeste: DestaqueData = {
            nomeEmpresa: "Friburgo Jr",
            local: "Nova Friburgo",
            email: "frijr@ej.com",
            isFederada: true,
            mesReferencia: new Date().toISOString(),
            faturamento: 15450.00,
            numeroProjetos: 12,
            csat: 9.8,
            indiceCluster: 5
        }

        setTimeout(() => {
        setDestaque(dadosTeste)
        setLoading(false)
        }, 800)
        
        // fetch(`${API_BASE_URL}/destaque`)
        // .then(response => {
        //     if (response.ok) return response.json()
        //     throw new Error('Falha ao buscar dados')
        // })
        // .then(data => {
        //     setDestaque(data)
        //     setLoading(false)
        // })
        // .catch(err => {
        //     console.error(err)
        //     setLoading(false)
        // })
    }, [])

    const formatMoney = (value: number) => {
        return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
    }
    
    return(
        <>
            <div className='flex flex-col items-center gap-15 min-h-screen text-white font-poppins'>
                <Header_Public />

                <main className="flex flex-1 flex-col items-center justify-center p-8">            
                    <h1 className="text-3xl text-azul-claro font-bold tracking-widest mb-3">
                        Destaque do Mês
                    </h1>
                    
                    {loading ? (
                    <div className="border border-black p-8 w-full max-w-4xl flex items-center gap-8 animate-pulse">
                        <div className="w-48 h-48 bg-gray-200 shrink-0"></div>
                        <div className="flex-1 space-y-4">
                            <div className="h-6 bg-gray-200 w-1/2"></div>
                            <div className="h-4 bg-gray-200 w-3/4"></div>
                            <div className="h-4 bg-gray-200 w-1/4"></div>
                        </div>
                    </div>
                    ) : destaque && (
                    <div className="border border-black rounded-[22px] p-8 w-full max-w-4xl flex flex-col md:flex-row items-center md:items-start gap-8 bg-azul-escuro">
                        
                        <div className="w-48 h-48 bg-gray-300 flex items-center justify-center text-center shrink-0">
                            <span className="text-gray-600 font-medium">Logo da EJ</span>
                        </div>

                        <div className="flex flex-col flex-1 gap-2 w-full text-left">
                            <h2 className="text-3xl font-bold uppercase tracking-wide mb-1">
                                {destaque.nomeEmpresa}
                            </h2>
                            
                            <div className="space-y-1 text-lg">
                                <p>
                                    <span className="font-semibold">Localidade:</span> {destaque.local}
                                </p>
                                <p>
                                    <span className="font-semibold">Índice Cluster:</span> {destaque.indiceCluster}
                                </p>
                                <p>
                                    <span className="font-semibold">Faturamento:</span> {formatMoney(Number(destaque.faturamento))}
                                </p>
                                <p>
                                    <span className="font-semibold">CSAT:</span> {Number(destaque.csat).toFixed(1)}
                                </p>
                                <p>
                                    <span className="font-semibold">Projetos:</span> {destaque.numeroProjetos}
                                </p>
                                <p className="text-sm text-gray-600 mt-2">
                                    {destaque.isFederada ? 'Federada' : 'Não Federada'} 
                                </p>
                            </div>
                            
                            <div className="mt-4">
                                <Link to="/profile" className="text-azul-claro underline font-semibold hover:text-verde-claro">
                                    Ver detalhes completos
                                </Link>
                            </div>
                        </div>

                    </div>
                    )}
                </main>
                <Footer />
            </div>
        </>
    )
}