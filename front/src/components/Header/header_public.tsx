import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, } from "@/components/ui/navigation-menu"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import logo_rio_jr_branca from '@/assets/logo_rio_jr_branca.png'
import icone_rio_jr_branco from '@/assets/icone_rio_jr_branco.png'
import { InfoIcon, FileText } from "lucide-react"
import { HashLink } from 'react-router-hash-link'
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import "@/index.css"

const navigationLinks = [
  { to: "/", label: "Home" },
  { to: "/#sobre-api", label: "Sobre API" },
  { to: "/#tutorial", label: "Tutorial" }
]

export function Header_Public() {
    return (
        <>                      
            <header className="border-b px-4 md:px-6 bg-azul-claro inset-x-0 rounded-3xl shadow-md mt-3 w-[98%] overflow-visible">
                <div className="flex h-16 items-center justify-between gap-4">

                    <div className="flex items-center gap-2">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button className="group size-8 md:hidden" size="icon" variant="ghost">
                                    
                                    <svg className="pointer-events-none" fill="none" height={20} width={20} stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" >
                                        <path d="M4 12L20 12" className="-translate-y-[7px] origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]" />
                                        <path d="M4 12H20" className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45" />
                                        <path d="M4 12H20" className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]" />
                                    </svg>
                                </Button>
                            </PopoverTrigger>

                            <PopoverContent align="start" className="w-64 p-2 md:hidden bg-azul-claro text-white border-2 border-white">
                                <NavigationMenu className="max-w-none *:w-full" >
                                    <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                                        {navigationLinks.map((link) => (
                                            <NavigationMenuItem key={link.label} className="w-full">
                                                <NavigationMenuLink asChild>
                                                    <HashLink smooth to={link.to} className="flex-row items-center block px-2 py-1.5 font-medium hover:scale-105 hover:bg-white/10 rounded-md transition-all duration-100">
                                                        {link.label === "Tutorial" && (
                                                            <InfoIcon className="w-4 h-4 text-white/80" />
                                                        )}{link.label === "Sobre API" && (
                                                            <FileText className="w-4 h-4 text-white/80" />
                                                        )}
                                                        <span>{link.label}</span>
                                                    </HashLink>
                                                </NavigationMenuLink>
                                            </NavigationMenuItem>
                                        ))}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </PopoverContent>
                        </Popover>

                        <div className="flex items-center gap-6">
                            <Link to="/" className="hidden md:block"><img src={logo_rio_jr_branca} alt="logo" className="max-h-12 w-auto" /></Link>
                            <Link to="/" className="block md:hidden"><img src={icone_rio_jr_branco} alt="logo" className="max-h-12 w-auto" /></Link>
                        </div>

                        <NavigationMenu className="max-md:hidden">
                            <NavigationMenuList className="gap-2">
                                {navigationLinks.map((link) => (
                                    <NavigationMenuItem key={link.label} className="pl-5 relative">
                                        <NavigationMenuLink asChild>
                                            <HashLink smooth to={link.to} className="flex-row items-center block py-1.5 text-sm gap-2 p-2 hover:bg-white/10 rounded-md transition">
                                                {link.label === "Tutorial" && (
                                                    <InfoIcon className="w-4 h-4 text-white/80" />
                                                )}
                                                {link.label === "Sobre API" && (
                                                    <FileText className="w-4 h-4 text-white/80" />
                                                )}
                                                {link.label}
                                            </HashLink>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="flex items-center gap-4">
                        <Button asChild className="py-1.5 px-4 text-base font-medium hover:bg-white/20 rounded-xl active:scale-95 transition-all" size="sm" variant="ghost">
                            <Link to="/login">Login</Link>
                        </Button>
                        <Button asChild className="py-1.5 px-4 text-lg font-medium bg-verde-claro hover:bg-verde-claro/70 rounded-xl active:scale-95 transition-all" size="sm">
                            <Link to="/registro">Registre-se</Link>
                        </Button>
                    </div>

                </div>
            </header>
        </>
    )
}