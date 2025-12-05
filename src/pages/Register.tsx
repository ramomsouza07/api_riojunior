import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@radix-ui/react-label"
import { Link } from "react-router-dom"
import { useState } from "react"
import show from '@/assets/show.png'
import hide from '@/assets/hide.png'
import '@/index.css'

export default function Register() {
    const [visivel, setVisivel] = useState<boolean>(false)
    
        const ShowHide = () => setVisivel((prev) => !prev)

    return(
        <>
            <div className="flex flex-1 justify-center items-center min-h-screen text-white font-poppins p-2">
                <div className="bg-azul-claro max-w-lg mx-auto w-[500px] p-6 sm:p-8 rounded-2xl shadow-lg">
                    <form className="">
                        <FieldGroup>
                            <FieldSet>
                                <FieldLegend className="text-center">Registre-se</FieldLegend>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel className="pl-3" htmlFor="register-name">Nome</FieldLabel>
                                        <Input id="register-name" placeholder="Nome" required />
                                    </Field>
                                    <Field>
                                        <FieldLabel className="pl-3" htmlFor="register-email">Email</FieldLabel>
                                        <Input id="register-email" placeholder="Email" required />
                                    </Field>
                                    <Field className="relative">
                                        <FieldLabel className="pl-3" htmlFor="register-password">Senha</FieldLabel>
                                        <Input id="register-password" placeholder="Senha" required type={visivel ? "text" : "password"} />

                                        <div onClick={ShowHide}  className="absolute inset-y-10 right-3 max-w-6 h-6 flex justify-end cursor-pointer ">
                                            {visivel ? (
                                                <img src={ hide } alt="senha" className="h-6 w-6" />
                                            ) : (
                                                <img src={ show } alt="senha" className="h-6 w-6" />
                                            )}
                                        </div>

                                    </Field>
                                </FieldGroup>
                            </FieldSet>
                            <FieldSeparator />
                            <div className="flex flex-col justify-center items-center gap-8">

                                <Field orientation="horizontal" className="flex gap-4 justify-center w-full">
                                    <Button asChild variant="outline" type="button" className="flex-1 active:scale-95">
                                        <Link to="/" className="block h-full w-full text-center">Retornar à Página Inicial</Link>
                                    </Button>
                                    <Button type="submit" className="bg-verde-claro active:scale-95 flex-1">Entrar</Button>
                                </Field>

                                <Label className="text-center">
                                    Já possui uma conta? <Link to='/login' className="text-azul-escuro font-medium hover:text-verde-claro hover:underline hover:decoration-solid transition">Login</Link>
                                </Label>

                            </div>
                        </FieldGroup>
                    </form>
                </div>
            </div>
        </>
    )
}
