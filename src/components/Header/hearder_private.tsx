import logo_rio_jr_branca from '@/assets/logo_rio_jr_branca.png'
import { Link } from 'react-router-dom'
import '@/index.css'

export function Header_Private() {

    return (
        <>
            <header className="bg-azul-claro inset-x-0 rounded-3xl shadow-md mt-3 w-[98%] overflow-visible">
                <div className="flex items-center justify-between h-16 px-4">
                    <img src={ logo_rio_jr_branca } alt="logo" className='h-12 auto' />
                    <div className="flex gap-5">
                        <Link to='/' className="py-2 px-4 border-2 border-verde-claro rounded-2xl text-white font-semibold text-base hover:bg-verde-claro duration-300">Sair</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

// passar esse header pro mesmo estilo do public