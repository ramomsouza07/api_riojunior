import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Field } from "@/components/ui/field"
import { Header_Private } from '@/components/Header/hearder_private'
import { useEffect, useState, type FormEvent } from 'react'
import Footer from '@/components/Footer'
import { Search } from 'lucide-react'
import { CardEJ } from '@/components/CardEJ'
import '@/index.css'

interface EJprops {
    nome: string,
    logo: string,
    local: string,
    faculdade: string,
    federada: boolean | null,
    tipo: string
}

const API_BASE_URL = import.meta.env.VITE_API_URL

export default function Pesquisa() {
    const [busca, setBusca] = useState("")
    const [tipo, setTipo] = useState("")
    const [filtro, setFiltro] = useState("")
    const [ejs, setEjs] = useState<EJprops[]>([])

    useEffect(() => {
        async function carregarEJs() {
            try {
                const token = localStorage.getItem("token")

                if (!token) {
                    console.log("Token não encontrado!")
                    return
                }

                const response = await fetch(`${API_BASE_URL}/user`, {
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })

                const data = await response.json()
                setEjs(data)

                console.log("EJs:", data)

            } catch (err) {
                console.log("Erro ao carregar as EJs:", err)
            }
        }
        carregarEJs()
    }, [])

    function fazerBusca(e: FormEvent) {
        e.preventDefault()
    }

    function selecionarTipo(tipo: string) {
        setTipo(tipo)
    }
    
    function Filtrar(tipo: string) {
        setFiltro(tipo)
    }

    const cidades = [...new Set(ejs.map(ej => ej.local))].filter(Boolean).sort()

    const EJsFiltradas = ejs.filter((ej) => {
        const termoBusca = busca.toLowerCase()
        const matchBusca = ej.nome.toLowerCase().includes(termoBusca) || (ej.local && ej.local.toLowerCase().includes(termoBusca))

        let matchFiltro = true

        if (filtro === "todas") {
            matchFiltro = true
        } else if (filtro === "federadas") {
            matchFiltro = ej.federada === true
        } else {
            matchFiltro = ej.local === filtro
        }

        return matchBusca && matchFiltro
    })
        
    return (
        <>
            <div className='flex flex-col items-center gap-15 min-h-screen font-poppins'>
                <Header_Private />

                <main className="flex flex-1 flex-col justify-center items-center gap-14 ">

                        <form className="flex justify-center items-center h-12 gap-5">
                            <div className='relative flex'>
                                <input className='w-80 h-12 pl-4 border-3 border-verde-claro rounded-xl focus:outline-none focus:border-4 text-azul-escuro font-medium transition'
                                    type="text"
                                    placeholder="Nome da EJ..."
                                    value={busca}
                                    onChange={(e) => setBusca(e.target.value)}
                                />
                                <Search className='absolute top-3.5 right-3 h-5 w-5 text-verde-claro cursor-pointer' onClick={fazerBusca} />
                            </div>
                            <Field className="">
                                <Select onValueChange={setFiltro} value={filtro}>
                                    <SelectTrigger id="filtro" className="bg-verde-claro border-none text-white">
                                        <SelectValue placeholder="Filtro" />
                                    </SelectTrigger>
                                    
                                    <SelectContent className="bg-verde-claro border-none text-white">
                                        <SelectItem value="todas">Todas</SelectItem>
                                        <SelectItem value="federadas">Federadas</SelectItem>

                                        {cidades.map(cidade => (
                                            <SelectItem key={String(cidade)} value={String(cidade)}>
                                                {String(cidade)}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                    
                                </Select>
                            </Field>
                        </form>

                        <div className="flex flex-wrap justify-center gap-15 mt-5">
                            {EJsFiltradas.length > 0 ? (
                                EJsFiltradas.map((ej, index) => (
                                    <CardEJ
                                        key={index}
                                        nome={ej.nome}
                                        logo={ej.logo}
                                        local={ej.local}
                                        faculdade={ej.faculdade}
                                    />
                                ))
                            ) : (
                                <p className="text-gray-500">Nenhuma empresa encontrada com esses filtros.</p>
                            )}
                        </div>

                </main>

                <Footer />
            </div>
        </>
    )
}

// <SelectItem value="">Todas</SelectItem>
