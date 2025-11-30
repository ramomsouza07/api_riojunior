import { Field, FieldGroup, FieldLabel, FieldLegend, FieldSeparator, FieldSet, } from "@/components/ui/field"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@radix-ui/react-label"
import '@/index.css'

export default function Registro() {
    return(
        <>
            <div className="bg-azul-claro max-w-lg mx-auto w-[500px] p-6 sm:p-8 rounded-2xl shadow-lg">
                <form className="">
                    <FieldGroup>
                        <FieldSet>
                            <FieldLegend className="text-center">Registre-se</FieldLegend>
                            <FieldGroup>
                                <Field>
                                    <FieldLabel className="pl-3" htmlFor="checkout-7j9-card-name-43j">Nome</FieldLabel>
                                    <Input
                                    id="checkout-7j9-card-name-43j"
                                    placeholder="Nome"
                                    required
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel className="pl-3" htmlFor="checkout-7j9-card-number-uw1">Email</FieldLabel>
                                    <Input
                                    id="checkout-7j9-card-number-uw1"
                                    placeholder="Email"
                                    required
                                    />
                                </Field>
                                <Field>
                                    <FieldLabel className="pl-3" htmlFor="checkout-7j9-card-number-uw1">Senha</FieldLabel>
                                    <Input
                                    id="checkout-7j9-card-number-uw1"
                                    placeholder="Senha"
                                    required
                                    />
                                </Field>
                            </FieldGroup>
                        </FieldSet>
                        <FieldSeparator />
                        <div className="flex flex-col justify-center items-center gap-8">
                            <Field orientation="horizontal" className="flex flex-col sm:flex-row gap-4 justify-center w-full">
                                <Button type="submit" className="bg-verde-claro active:scale-95 sm:w-auto">Entrar</Button>
                                <Button variant="outline" type="button" className="sm:w-auto">Retornar a Página Inicial</Button>
                            </Field>
                            <Label>Já possui uma conta? <a className="text-azul-escuro font-medium hover:text-verde-claro duration-150">Login</a></Label>
                        </div>
                    </FieldGroup>
                </form>
            </div>
        </>
    )
}

/*
                                <div className="grid grid-cols-3 gap-4">
                                    <Field>
                                        <FieldLabel htmlFor="checkout-exp-day-ts6">Dia</FieldLabel>
                                        <Select defaultValue="">
                                            <SelectTrigger id="checkout-exp-day-ts6">
                                            <SelectValue placeholder="DD" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="01">01</SelectItem>
                                                <SelectItem value="02">02</SelectItem>
                                                <SelectItem value="03">03</SelectItem>
                                                <SelectItem value="04">04</SelectItem>
                                                <SelectItem value="05">05</SelectItem>
                                                <SelectItem value="06">06</SelectItem>
                                                <SelectItem value="07">07</SelectItem>
                                                <SelectItem value="08">08</SelectItem>
                                                <SelectItem value="09">09</SelectItem>
                                                <SelectItem value="10">10</SelectItem>
                                                <SelectItem value="11">11</SelectItem>
                                                <SelectItem value="12">12</SelectItem>
                                                <SelectItem value="13">13</SelectItem>
                                                <SelectItem value="14">14</SelectItem>
                                                <SelectItem value="15">15</SelectItem>
                                                <SelectItem value="16">16</SelectItem>
                                                <SelectItem value="17">17</SelectItem>
                                                <SelectItem value="18">18</SelectItem>
                                                <SelectItem value="19">19</SelectItem>
                                                <SelectItem value="20">20</SelectItem>
                                                <SelectItem value="21">21</SelectItem>
                                                <SelectItem value="22">22</SelectItem>
                                                <SelectItem value="23">23</SelectItem>
                                                <SelectItem value="24">24</SelectItem>
                                                <SelectItem value="25">25</SelectItem>
                                                <SelectItem value="26">26</SelectItem>
                                                <SelectItem value="27">27</SelectItem>
                                                <SelectItem value="28">28</SelectItem>
                                                <SelectItem value="29">29</SelectItem>
                                                <SelectItem value="30">30</SelectItem>
                                                <SelectItem value="31">31</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="checkout-exp-month-ts6">Mês</FieldLabel>
                                        <Select defaultValue="">
                                            <SelectTrigger id="checkout-exp-month-ts6">
                                                <SelectValue placeholder="MM" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="01">01</SelectItem>
                                                <SelectItem value="02">02</SelectItem>
                                                <SelectItem value="03">03</SelectItem>
                                                <SelectItem value="04">04</SelectItem>
                                                <SelectItem value="05">05</SelectItem>
                                                <SelectItem value="06">06</SelectItem>
                                                <SelectItem value="07">07</SelectItem>
                                                <SelectItem value="08">08</SelectItem>
                                                <SelectItem value="09">09</SelectItem>
                                                <SelectItem value="10">10</SelectItem>
                                                <SelectItem value="11">11</SelectItem>
                                                <SelectItem value="12">12</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="checkout-7j9-exp-year-f59">Ano</FieldLabel>
                                        <Select defaultValue="">
                                            <SelectTrigger id="checkout-7j9-exp-year-f59">
                                                <SelectValue placeholder="YYYY" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="2017">2017</SelectItem>
                                                <SelectItem value="2018">2018</SelectItem>
                                                <SelectItem value="2019">2019</SelectItem>
                                                <SelectItem value="2020">2020</SelectItem>
                                                <SelectItem value="2021">2021</SelectItem>
                                                <SelectItem value="2022">2022</SelectItem>
                                                <SelectItem value="2023">2023</SelectItem>
                                                <SelectItem value="2024">2024</SelectItem>
                                                <SelectItem value="2025">2025</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </Field>
                                </div>
*/