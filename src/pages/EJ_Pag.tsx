import { Header_Private } from '@/components/Header/hearder_private'
import Footer from '@/components/Footer'
import '@/index.css'
import rio_junior_logo from '@/assets/rio_junior_logo.png'
import { Button } from '@/components/ui/button'
import { Link } from "react-router-dom"
import { ArrowLeftIcon } from 'lucide-react'
import { PerformanceChart } from '@/components/Grafico/Grafico'
import CardIndicador from '@/components/CardIndicador' 

export default function Ej_Pag(){
    return(
        <>
            <div className='flex flex-col items-center min-h-screen font-inter'>
                <Header_Private />

                <main className="flex flex-1 flex-col items-start w-full px-0 md:px-6 py-5 
                lg:gap-20 gap-5">
                    <Button asChild className='bg-verde-claro hover:bg-[#667d19] 
                    font-poppins text-white font-semibold text-xl md:text-2xl'>
                        <Link to='/'><ArrowLeftIcon/>Voltar</Link>
                    </Button>

                    <div className=' w-full flex flex-col px-9 lg:px-30 lg:flex-row md:gap-5'>
                        <div className=' lg:w-1/3 xl:w-1/4'>
                            <div className='bg-card border rounded-lg shadow-sm p-4 md:p-5 h-full'>
                                <div className='flex flex-col items-center gap-3 md:gap-4 h-full'>
                                    <div className='w-28 h-28 md:w-32 md:h-32 flex items-center justify-center'>
                                        <img 
                                            src={rio_junior_logo} 
                                            className='w-full h-full object-contain'
                                            alt="Logo da Empresa Júnior"
                                        />
                                    </div>
                                    
                                    <div className='w-full text-center grow'>
                                        <h1 className='text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-2'>
                                            Nome da EJ
                                        </h1>
                                        
                                        <div className='space-y-2 text-sm'>
                                            <div className='flex flex-col items-center'>
                                                <span className='font-medium text-muted-foreground text-xs'>Universidade:</span>
                                                <span className='text-foreground text-sm'>Universidade Exemplo</span>
                                            </div>
                                            
                                            <div className='flex flex-col items-center'>
                                                <span className='font-medium text-muted-foreground text-xs'>Email:</span>
                                                <span className='text-foreground text-sm'> email@email.com</span>
                                            </div>
                                            
                                            <div className='flex flex-col items-center'>
                                                <span className='font-medium text-muted-foreground text-xs'>Telefone:</span>
                                                <span className='text-foreground text-sm'>(00) 0000-0000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-center lg:w-2/3 xl:w-3/4 mt-4 lg:mt-0 lg:pl-2 '>
                            <div className='w-full h-full'>
                                <PerformanceChart/>
                            </div>
                        </div>
                    </div>

                    <div className='w-full grid grid-cols-1 gap-18 sm:grid-cols-2 md:max-w-[87%]
                    md:grid-cols-4 py-5 md:place-self-center'>
                        <CardIndicador/>
                        <CardIndicador/>
                        <CardIndicador/>
                        <CardIndicador/>

                    </div>
                </main>

                <Footer />
            </div>
        </>
    )
}