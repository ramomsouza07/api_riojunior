import { CartesianGrid, Line, LineChart, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "Um gráfico de indicadores com métricas"

const chartConfig = {
  performance: {
    label: "Índice de Cluster: ",
    color: "var(--color-verde-claro)",
  },
} satisfies ChartConfig

interface GraficoProps{
  regua: number
}

export function PerformanceChart({regua}:GraficoProps) {
  const chartData = [
    { month: "Janeiro", performance: 186000 },
    { month: "Fevereiro", performance: 305000 },
    { month: "Março", performance: 237000 },
    { month: "Abril", performance: 73000 },
    { month: "Maio", performance: 209000 },
    { month: "Junho", performance: 214000 },
  ]
  
  const currentValue = 214
  const currentMonth = "Junho"

  return (
    <div className="w-full flex justify-center lg:justify-end">
      <Card className="w-full max-w-[95%] md:max-w-full lg:max-w-[85%] xl:max-w-[80%] ">
        <CardHeader className="pb-2 pt-4 px-4">
          <CardTitle className="text-lg">Índice de Cluster</CardTitle>
          <CardDescription className="text-xs">Desempenho da empresa nos últimos meses</CardDescription>
        </CardHeader>
        
        <CardContent className="p-3">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="lg:w-2/5">
              <div className="h-full flex flex-col justify-center space-y-4">
                <div>
                  <h3 className="text-sm text-muted-foreground mb-1">Última Atualização</h3>
                  <p className="text-base font-medium text-foreground">{currentMonth}</p>
                </div>
                
                <div>
                  <h3 className="text-sm text-muted-foreground mb-1">Régua de Cluster</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-muted-foreground">cluster</span>
                    <span className="text-2xl font-bold text-foreground">{regua}</span>      
                  </div>
                </div>
                
                <div className="bg-muted/30 rounded p-3">
                  <p className="text-xs text-muted-foreground leading-tight">
                    Este indicador mede o desempenho geral da empresa com base em múltiplos fatores de avaliação.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/5">
              <div className="h-[200px]">
                <ChartContainer className="w-full h-full" config={chartConfig}>
                  <LineChart
                    data={chartData}
                    margin={{ left: 15, right: 15, top: 10, bottom: 20 }}
                  >
                    <CartesianGrid vertical={false} strokeDasharray="2 2" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                      fontSize={11}
                    />
                    <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                    <Line
                      dataKey="performance"
                      type="linear"
                      stroke="var(--color-verde-claro)"
                      strokeWidth={2}
                      dot={{ r: 3, fill: "var(--color-verde-claro)" }}
                    />
                  </LineChart>
                </ChartContainer>
              </div>
              
              <div className="mt-2 pt-2 border-t">
                <div className="flex items-center gap-1 text-xs">
                  <div className="h-2 w-2 rounded-full bg-verde-claro"></div>
                  <span className="text-muted-foreground">Evolução do Índice de Cluster</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}