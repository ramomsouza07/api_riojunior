import rio_junior_logo from '@/assets/rio_junior_logo.png'
import { Link } from 'react-router-dom'
import '@/index.css'

interface CardEJProps {
    nome: string,
    logo: string,
    local: string,
    faculdade: string
}

export function CardEJ({ nome, logo, local, faculdade }: CardEJProps) {
    return (
        <div className='rounded-xl shadow-lg '>
            <div className='p-5 flex flex-col items-center'>
                <div className='rounded-xl overflow-hidden h-20 w-20'>
                    <img src={ rio_junior_logo } alt="logo" />
                </div>
                <h5 className='text-black text-xl font-medium mt-3'>{nome}</h5>
                <p className='text-gray-700 text-base mt-3'>{faculdade}</p>
                <p className='text-gray-500 text-sm mt-1'>{local}</p>
                <Link to='/usuario/:id' className='px-3 py-1 rounded-lg font-semibold text-center bg-azul-escuro/40 text-azul-escuro mt-4 hover:bg-azul-escuro/30 active:scale-95 cursor-pointer'>Ver mais</Link>
            </div>            

        </div>
    )
}

// colocar alt da img como o nome da EJ (props)