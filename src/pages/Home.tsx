import { Header_Public } from '@/components/Header/header_public'
import Footer from '../components/Footer'
import '../index.css'
import { Link } from 'react-router-dom'

function Home() {
    return(
        <>
            <div className='flex flex-col items-center gap-15 min-h-screen text-white font-poppins'>
                <Header_Public />

                <main className="flex flex-1 flex-wrap justify-center items-center gap-14 pt-15 pb-15">
                    <Link to='/pesquisa' className="text-black font-semibold text-base hover:text-verde-claro transition">Pesquisa</Link>

                </main>

                <Footer />
            </div>
        </>
    )
}

export default Home