import {
  Card,
  CardContent,
} from "@/components/ui/card"

import '@/index.css'

interface CardIndicadorProps {
  valor: string | number
  titulo: string
  mes: string
}

export default function CardIndicador({ valor, titulo, mes }: CardIndicadorProps){
    return(
        <Card className="sm:mx-6 mx-15 md:mx-0 border-none shadow-lg">
            <CardContent className="flex flex-col text-center">
                <h1 className="font-bold text-2xl">{valor}</h1>
                <h2 className="font-medium underline">{titulo}</h2>
                <p className="text-sm">{mes}</p>
            </CardContent>
        </Card>
    )
}