import { Header } from '@/components/Header'
import Footer from '../components/Footer'
import '../index.css'
import Registro from './Registro'

function Home() {
    return(
        <>
            <div className='flex flex-col items-center gap-15 min-h-screen text-white font-poppins'>
                <Header />

                <main className="flex flex-1 flex-wrap justify-center items-center gap-14 pt-15 pb-15">
                    <Registro />
                </main>

                <Footer />
            </div>
        </>
    )
}

export default Home