import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import '@/index.css'

export default function CardIndicador(){
    return(
        <Card className="sm:mx-6 mx-15 md:mx-0">
            <CardContent className="flex flex-col text-center">
                <h1 className=" font-bold text-2xl">40k</h1>
                <h2 className="font-medium underline">Faturamento</h2>
                <p className="text-sm">Junho</p>
            </CardContent>
        </Card>
    )
}