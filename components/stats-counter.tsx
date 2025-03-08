import { Clock, DollarSign, PiggyBank } from "lucide-react"
import CountUp from "react-countup"
import { Card, CardContent } from "@/components/ui/card"

interface StatsCounterProps {
  totalTime: string
  totalHours: number
  totalCost: string
  totalCostValue: number
  totalIncome: string
  totalIncomeValue: number
}

export function StatsCounter({
  totalTime,
  totalHours,
  totalCost,
  totalCostValue,
  totalIncome,
  totalIncomeValue,
}: StatsCounterProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="overflow-hidden border-2 border-primary/20">
        <CardContent className="p-0">
          <div className="bg-primary/10 p-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Total Time Invested</h3>
              <div className="flex items-center mt-1 text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">Across all projects</span>
              </div>
            </div>
            <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl font-bold">
              <CountUp end={totalHours} duration={2.5} suffix=" hours" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">{totalTime}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-2 border-primary/20">
        <CardContent className="p-0">
          <div className="bg-primary/10 p-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Total Investment</h3>
              <div className="flex items-center mt-1 text-muted-foreground">
                <DollarSign className="h-4 w-4 mr-1" />
                <span className="text-sm">All project costs</span>
              </div>
            </div>
            <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
              <DollarSign className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl font-bold">
              <CountUp end={totalCostValue} duration={2.5} prefix="$" decimals={0} />
            </div>
            <p className="text-sm text-muted-foreground mt-2">{totalCost}</p>
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden border-2 border-primary/20">
        <CardContent className="p-0">
          <div className="bg-primary/10 p-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Total Revenue</h3>
              <div className="flex items-center mt-1 text-muted-foreground">
                <PiggyBank className="h-4 w-4 mr-1" />
                <span className="text-sm">Income generated</span>
              </div>
            </div>
            <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center">
              <PiggyBank className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="p-6 text-center">
            <div className="text-3xl font-bold">
              <CountUp end={totalIncomeValue} duration={2.5} prefix="$" decimals={0} />
            </div>
            <p className="text-sm text-muted-foreground mt-2">{totalIncome}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

