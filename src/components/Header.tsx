import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, } from "@/components/ui/navigation-menu"
import logo_rio_jr_branca from '../assets/logo_rio_jr_branca.png'
import { Link } from "react-router-dom"
import '../index.css'

export function Header() {

    return (
        <>
            <header className="bg-azul-claro inset-x-0 rounded-4xl shadow-md mt-3 w-[98%] overflow-visible">
                <div className="flex items-center justify-between h-[70px] px-4">
                    <img src={ logo_rio_jr_branca } alt="logo" className='h-12 w-48' />
                    <div className="flex gap-5">
                        <NavigationMenu className=" hidden md:block relative z-50">
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>List</NavigationMenuTrigger>
                                    <NavigationMenuContent className="bg-azul-claro">
                                        <ul className="grid w-[300px] gap-4">
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link to="/">
                                                        <div className="font-medium">Components</div>
                                                        <div className="text-muted-foreground">Browse all components in the library.</div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link to="/">
                                                        <div className="font-medium">Documentation</div>
                                                        <div className="text-muted-foreground">Learn how to use the library.</div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link to="/">
                                                        <div className="font-medium">Blog</div>
                                                        <div className="text-muted-foreground">Read our latest blog posts.</div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        <button className="py-2 px-4 border-2 border-verde-claro rounded-3xl text-white font-semibold text-base hover:bg-verde-claro duration-300">Fazer Login</button>
                        <button className='py-2 px-4 border-2 border-verde-claro rounded-3xl text-white font-semibold text-base hover:bg-verde-claro duration-300'>Registrar-se</button>
                    </div>
                </div>
            </header>
        </>
    )
}

// mudar fonte e tamanho do texto dos botoes
// em telas menores, abrir um menu
