import { Header_Private } from '@/components/Header/hearder_private'
import Footer from '@/components/Footer'
import '@/index.css'

export default function User() {
    return (
        <>
            <div className='flex flex-col items-center gap-15 min-h-screen font-poppins'>
                <Header_Private />

                <main className="flex flex-1 flex-col justify-center items-center gap-14 ">
                    
                </main>

                <Footer />
            </div>
        </>
    )
}