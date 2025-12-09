import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@radix-ui/react-label"
import { Link, useNavigate } from "react-router-dom"
import { useState, type FormEvent } from "react"
import show from '@/assets/show.png'
import hide from '@/assets/hide.png'
import '@/index.css'

interface Login {
    email: string,
    password: string
}

const API_BASE_URL = import.meta.env.VITE_API_URL

export default function Login() {
    const [visivel, setVisivel] = useState<boolean>(false)
    const [emailInput, setEmailInput] = useState("")
    const [senhaInput, setSenhaInput] = useState("")
    const navigate = useNavigate()

    const ShowHide = () => setVisivel((prev) => !prev)

    const handleLogin = async (e: FormEvent) => {
            e.preventDefault()
    
            const data: Login = ({
                email: emailInput,
                password: senhaInput
            })
    
            try {
                const response = await fetch(`${API_BASE_URL}/login`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(data)
                })
    
                const json = await response.json()
    
                console.log(response.status)
                console.log(json)
    
                if (!response.ok) {
                    alert("Erro ao fazer login!")
                    return
                }

                localStorage.setItem("token", json.token)
                
                if (json.user && json.user.id) {
                    localStorage.setItem("empresaId", json.user.id)
                    navigate(`/profile/${json.user.id}`)
                } else {
                    navigate("/empresas") 
                }
    
            } catch (err) {
                console.log(err)
                alert("Erro")
                return
            }
        }

    return(
        <>
            <div className="flex flex-1 justify-center items-center min-w-screen min-h-screen text-white font-poppins p-2">
                <div className="bg-azul-claro max-w-lg mx-auto w-[500px] p-6 sm:p-8 rounded-2xl shadow-lg">
                    <form onSubmit={handleLogin}>
                        <FieldGroup>
                            <FieldSet>
                                <FieldLegend className="text-center">Login</FieldLegend>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel className="pl-3" htmlFor="login-email">Email</FieldLabel>
                                        <Input
                                            id="register-email"
                                            placeholder="Email"
                                            value={emailInput}
                                            onChange={(e) => setEmailInput(e.target.value)}
                                            required
                                        />
                                    </Field>
                                    <Field className="relative">
                                        <FieldLabel className="pl-3" htmlFor="login-password">Senha</FieldLabel>
                                        <Input
                                            id="register-password"
                                            placeholder="Senha" required
                                            type={visivel ? "text" : "password"}
                                            value={senhaInput}
                                            onChange={(e) => setSenhaInput(e.target.value)}
                                        />

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
                                    Ainda não possui uma conta? <Link to='/registro' className="text-azul-escuro font-medium hover:text-verde-claro hover:underline hover:decoration-solid transition">Registre-se</Link>
                                </Label>

                            </div>
                        </FieldGroup>
                    </form>
                </div>
            </div>
        </>
    )
}