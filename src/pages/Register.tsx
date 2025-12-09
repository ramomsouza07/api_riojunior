import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, } from "@/components/ui/field"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@radix-ui/react-label"
import { Link, useNavigate } from "react-router-dom"
import { useState, type FormEvent } from "react"
import show from '@/assets/show.png'
import hide from '@/assets/hide.png'

interface Registro {
    nome: string,
    email: string,
    password: string,
    local: string,
    faculdade: string,
    federada: boolean | null
}

const API_BASE_URL = import.meta.env.VITE_API_URL

export default function Register() {
    const [visivel, setVisivel] = useState<boolean>(false)
    const [nomeInput, setNomeInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [senhaInput, setSenhaInput] = useState("")
    const [localInput, setLocalInput] = useState("")
    const [faculdadeInput, setFaculdadeInput] = useState("")
    const [federadaInput, setFederadaInput] = useState<boolean | null>(null)

    const ShowHide = () => setVisivel((prev) => !prev)
    const navigate = useNavigate()
    
    const handleRegister = async (e: FormEvent) => {
        e.preventDefault()

        const data: Registro = ({
            nome: nomeInput,
            email: emailInput,
            password: senhaInput,
            local: localInput,
            faculdade: faculdadeInput,
            federada: federadaInput
        })

        try {
            const response = await fetch(`${API_BASE_URL}/user`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            })

            const json = await response.json()

            console.log(response.status)
            console.log(json)

            if (!response.ok) {
                alert("Erro ao registrar!")
                return
            }

            const loginResponse = await fetch(`${API_BASE_URL}/login`, {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: emailInput,
                    password: senhaInput
                })
            })

            const loginJson = await loginResponse.json()

            if (loginResponse.ok) {
                localStorage.setItem("token", loginJson.token)
                
                if (loginJson.user && loginJson.user.id) {
                    localStorage.setItem("empresaId", loginJson.user.id)
                    navigate("/empresas")
                } else {
                    navigate("/empresas")
                }
            } else {
                alert("Conta criada com sucesso! Faça login para continuar.")
                navigate("/login")
            }

        } catch (err) {
            alert("Erro")
        }
    }

    return(
        <>
            <div className="flex flex-1 justify-center items-center min-h-screen text-white font-poppins p-2">
                <div className="bg-azul-claro max-w-lg mx-auto w-[500px] p-6 sm:p-8 rounded-2xl shadow-lg">
                    <form onSubmit={handleRegister}>
                        <FieldGroup>
                            <FieldSet>
                                <FieldLegend className="text-center">Registre-se</FieldLegend>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel className="pl-3">Nome</FieldLabel>
                                        <Input 
                                            id="register-name"
                                            placeholder="Nome"
                                            value={nomeInput}
                                            onChange={(e) => setNomeInput(e.target.value)}
                                            required
                                        />
                                    </Field>
                                    <Field>
                                        <FieldLabel className="pl-3">Email</FieldLabel>
                                        <Input
                                            id="register-email"
                                            placeholder="Email"
                                            value={emailInput}
                                            onChange={(e) => setEmailInput(e.target.value)}
                                            required
                                        />
                                    </Field>
                                    <Field className="relative">
                                        <FieldLabel className="pl-3">Senha</FieldLabel>
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
                            <div className="grid grid-cols-3 gap-4">
                                <Field>
                                    <FieldLabel className="pl-1">Cidade</FieldLabel>
                                    <Input
                                        id="cidade"
                                        placeholder="Cidade"
                                        value={localInput}
                                        onChange={(e) => setLocalInput(e.target.value)}
                                        required
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel className="pl-1">Faculdade</FieldLabel>
                                    <Input
                                        id="faculdade"
                                        placeholder="Sigla"
                                        value={faculdadeInput}
                                        onChange={(e) => setFaculdadeInput(e.target.value)}
                                        required
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel className="pl-1">Federada</FieldLabel>
                                    <Select
                                        value={federadaInput === null ? "" : String(federadaInput)}
                                        onValueChange={ (value) => setFederadaInput(value === "true") }
                                    >
                                        <SelectTrigger id="federada" className="bg-azul-escuro">
                                            <SelectValue placeholder="Selecione" />
                                        </SelectTrigger>
                                        
                                        <SelectContent className="bg-azul-escuro text-white">
                                            <SelectItem value="true">Sim</SelectItem>
                                            <SelectItem value="false">Não</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </Field>
                            </div>
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
