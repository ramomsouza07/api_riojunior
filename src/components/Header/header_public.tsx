import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, } from "@/components/ui/navigation-menu"
import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { BookOpenIcon, InfoIcon, LifeBuoyIcon } from "lucide-react"
import logo_rio_jr_branca from '@/assets/logo_rio_jr_branca.png'
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import "@/index.css"

type DescriptionItem = {
  to: string,
  label: string,
  description: string
}

type IconItem = {
  to: string,
  label: string,
  icon: "BookOpenIcon" | "LifeBuoyIcon" | "InfoIcon"
}

type NavigationLink =
  | {
      to: string,
      label: string,
      submenu?: false
    }
  | {
      label: string,
      submenu: true,
      type: "description",
      items: DescriptionItem[]
    }
  | {
      label: string,
      submenu: true,
      type: "icon",
      items: IconItem[]
    }

const navigationLinks: NavigationLink[] = [
  { to: "/", label: "Home" },
  {
    label: "Features",
    submenu: true,
    type: "description",
    items: [
      {
        to: "/pesquisa",
        label: "Components",
        description: "Browse all components in the library.",
      },
      {
        to: "#",
        label: "Documentation",
        description: "Learn how to use the library.",
      },
      {
        to: "#",
        label: "Templates",
        description: "Pre-built layouts for common use cases.",
      },
    ],
  },
  {
    label: "About",
    submenu: true,
    type: "icon",
    items: [
      { label: "Getting Started", to: "#", icon: "BookOpenIcon" },
      { label: "Tutorials", to: "#", icon: "LifeBuoyIcon" },
      { label: "About Us", to: "#", icon: "InfoIcon" }
    ]
  }
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

                            <PopoverContent align="start" className="w-64 p-2 md:hidden bg-azul-claro text-white border-2 border-azul-escuro">
                                <NavigationMenu className="max-w-none *:w-full">
                                    <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                                        {navigationLinks.map((link) => (
                                            <NavigationMenuItem key={link.label} className="w-full">
                                                {!link.submenu ? (
                                                    <NavigationMenuLink asChild>
                                                        <Link to={link.to} className="block py-1.5 text-sm">{link.label}</Link>
                                                    </NavigationMenuLink>
                                                ) : (
                                                <>
                                                    <div className="text-base px-2 py-1.5 font-normal">{link.label}</div>
                                                    <ul className="pl-2 space-y-1">
                                                        {link.items.map((item) => (
                                                            <li key={item.label}>
                                                                <NavigationMenuLink asChild>
                                                                    <Link to={item.to} className="block py-1.5 text-sm text-white/80 rounded-xl">{item.label}</Link>
                                                                </NavigationMenuLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </>
                                                )}
                                            </NavigationMenuItem>
                                        ))}
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </PopoverContent>
                        </Popover>

                        <div className="flex items-center gap-6">
                            <Link to="/"><img src={logo_rio_jr_branca} className="h-12 w-auto" /></Link>
                        </div>

                        <NavigationMenu className="max-md:hidden">
                            <NavigationMenuList className="gap-2">
                                {navigationLinks.map((link) => (
                                    <NavigationMenuItem key={link.label} className="pl-5">
                                        {!link.submenu ? (
                                            <NavigationMenuLink asChild>
                                                <Link to={link.to} className="px-2 py-1.5 font-medium hover:scale-105 hover:bg-white/10 rounded-md transition-all duration-100">{link.label}</Link>
                                            </NavigationMenuLink>
                                        ) : (
                                        <>
                                            <NavigationMenuTrigger className="bg-transparent px-2 py-1.5 font-medium hover:scale-105 hover:bg-white/10 rounded-md transition-all duration-100">{link.label}</NavigationMenuTrigger>
                                            <NavigationMenuContent className="p-3 bg-azul-claro rounded-xl z-50">
                                                <ul className={cn( link.type === "description" ? "min-w-64 space-y-2" : "min-w-48 space-y-1" )} >
                                                    {link.items.map((item) => (
                                                        <li key={item.label}>
                                                            <NavigationMenuLink asChild>
                                                                <Link to={item.to} className="flex items-start gap-2 p-2 hover:bg-white/10 rounded-md transition">

                                                                    {link.type === "icon" && "icon" in item && (
                                                                        <div className="flex items-center gap-2">
                                                                            {item.icon === "BookOpenIcon" && (
                                                                                <BookOpenIcon aria-hidden="true" className="text-foreground opacity-60" size={16} />
                                                                            )}
                                                                            {item.icon === "LifeBuoyIcon" && (
                                                                                <LifeBuoyIcon aria-hidden="true" className="text-foreground opacity-60" size={16} />
                                                                            )}
                                                                            {item.icon === "InfoIcon" && (
                                                                                <InfoIcon aria-hidden="true" className="text-foreground opacity-60" size={16} />
                                                                            )}
                                                                            <span>{item.label}</span>
                                                                        </div>
                                                                    )}

                                                                    {link.type === "description" ? (
                                                                    <div>
                                                                        <div className="font-medium">{item.label}</div>
                                                                        <p className="text-xs text-white/70">{item.description}</p>
                                                                    </div>
                                                                    ) : (
                                                                        !link.type ||
                                                                            (link.type !== "icon" && link.type !== "description" && (
                                                                                <span>{item.label}</span>
                                                                                
                                                                            ))
                                                                    )}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </NavigationMenuContent>
                                        </>
                                        )}
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

/*
<Link to="/login">
                            <button className="py-1.5 px-4 text-base font-medium hover:bg-white/20 rounded-xl active:scale-95 transition-all cursor-pointer">Login</button>
                        </Link>
                        <Link to="/registro">
                            <button className="py-1.5 px-4 text-lg font-medium bg-verde-claro hover:bg-verde-claro/70 rounded-xl active:scale-95 transition-all cursor-pointer">Registrar-se</button>
                        </Link>
*/



/*
<header className="bg-azul-claro inset-x-0 rounded-3xl shadow-md mt-3 w-[98%] overflow-visible">
                <div className="flex items-center justify-between h-[70px] px-4">
                    <img src={ logo_rio_jr_branca } alt="logo" className='h-12 w-auto' />
                    <div className="flex items-center gap-6">
                        <Link to='/pesquisa' className="text-white font-semibold text-base hover:text-verde-claro transition">Pesquisa</Link>

                        <NavigationMenu className="hidden md:block relative z-50">
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="block p-2 rounded-lg hover:bg-white/10 transition">List</NavigationMenuTrigger>
                                    <NavigationMenuContent className="bg-azul-claro border-3 border-verde-claro shadow-md rounded-2xl p-4">
                                        <ul className="grid w-[260px] gap-3">
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link to="/" className="block p-2 rounded-lg hover:bg-white/10 transition">
                                                        <div className="text-base font-semibold">Components</div>
                                                        <div className="text-sm opacity-80">Browse all components in the library.</div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link to="/" className="block p-2 rounded-lg hover:bg-white/10 transition">
                                                        <div className="text-base font-semibold">Documentation</div>
                                                        <div className="text-sm opacity-80">Learn how to use the library.</div>
                                                    </Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link to="/" className="block p-2 rounded-lg hover:bg-white/10 transition">
                                                        <div className="text-base font-semibold">Blog</div>
                                                        <div className="text-sm opacity-80">Read our latest blog posts.</div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        <Link to='/login' className="py-2 px-4 border-2 border-verde-claro rounded-2xl text-white font-semibold text-base hover:bg-verde-claro transition">Fazer Login</Link>
                        <Link to='/registro' className='py-2 px-4 border-2 border-verde-claro rounded-2xl text-white font-semibold text-base hover:bg-verde-claro transition'>Registrar-se</Link>
                    </div>
                </div>
            </header>

*/