import { Header_Private } from '@/components/Header/hearder_private'
import Footer from '@/components/Footer'
import { Search } from 'lucide-react'
import '@/index.css'
import { CardEJ } from '@/components/CardEJ'

interface PesquisaProps {
    nome: string,
    logo: string,

}

export default function Pesquisa() {
    return (
        <>
            <div className='flex flex-col items-center gap-15 min-h-screen font-poppins'>
                <Header_Private />

                <main className="flex flex-1 flex-col justify-center items-center gap-14 ">

                        <form className="flex justify-center items-center h-12 gap-5">
                            <input className='w-80 h-12 pl-4 border-3 border-verde-claro rounded-xl focus:outline-none focus:border-4 text-azul-escuro font-medium transition'
                                type="text"
                                placeholder="Nome da EJ..."
                            />
                            <button className='hidden sm:block bg-verde-claro font-medium text-xl h-12 px-3 rounded-xl text-white cursor-pointer active:scale-95' type="submit">
                                <Search />
                            </button>
                        </form>

                        <div className="flex flex-wrap justify-center gap-15 mt-5">
                            <CardEJ />
                            <CardEJ />
                            <CardEJ />
                            <CardEJ />
                            
                        </div>


                </main>

                <Footer />
            </div>
        </>
    )
}
