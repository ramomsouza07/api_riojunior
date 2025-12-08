import logo_rio_jr_branca from '@/assets/logo_rio_jr_branca.png'
import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import '@/index.css'

export function Header_Private() {

    return (
        <>
            <header className="bg-azul-claro inset-x-0 rounded-3xl shadow-md mt-3 w-[98%] overflow-visible">
                <div className="flex items-center justify-between h-16 px-4 gap-2">
                    <Link to="/"><img src={logo_rio_jr_branca} className="max-h-12 w-auto" /></Link>

                    <Button asChild className="py-1.5 px-4 text-white text-lg font-medium bg-verde-claro hover:bg-verde-claro/70 rounded-xl active:scale-95 transition-all" size="sm">
                        <Link to="/">Sair</Link>
                    </Button>
                </div>
            </header>
        </>
    )
}

// passar esse header pro mesmo estilo do public