"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { Cost, getTotalCost } from "@/lib/costs"

interface CostsSummaryProps {
  costs: Cost[]
  locale: string
}

export function CostsSummary({ costs, locale }: CostsSummaryProps) {
  const t = useTranslations("Costs")
  const [timeSpent, setTimeSpent] = React.useState<number>(0)
  const [moneyEarned, setMoneyEarned] = React.useState<number>(0)
  
  // Calculate total spent
  const totalCost = costs.reduce((sum, cost) => sum + parseFloat(cost.amount.toString()), 0)
  
  React.useEffect(() => {
    const loadExtraData = async () => {
      const data = await getTotalCost()
      setTimeSpent(data.timeSpent)
      setMoneyEarned(data.moneyEarned)
    }
    loadExtraData()
  }, [])
  
  // Calculate costs by type
  const costsByType = costs.reduce((acc, cost) => {
    const type = cost.type as string
    acc[type] = (acc[type] || 0) + parseFloat(cost.amount.toString())
    return acc
  }, {} as Record<string, number>)
  
  // Format amounts with locale
  const formatter = new Intl.NumberFormat(locale === 'pl' ? 'pl-PL' : 'en-US', {
    style: 'currency',
    currency: 'USD',
  })
  
  return (
    <div className="mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="p-4 border rounded-lg shadow-sm bg-card">
          <h3 className="text-sm font-medium text-muted-foreground">{t("totalSpent")}</h3>
          <p className="text-2xl font-bold">{formatter.format(totalCost)}</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm bg-card">
          <h3 className="text-sm font-medium text-muted-foreground">{t("timeSpent")}</h3>
          <p className="text-2xl font-bold">{timeSpent}h</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm bg-card">
          <h3 className="text-sm font-medium text-muted-foreground">{t("moneyEarned")}</h3>
          <p className="text-2xl font-bold">{formatter.format(moneyEarned)}</p>
        </div>
        
        {/* Cost by type summary cards */}
        {Object.entries(costsByType).map(([type, amount]) => {
          // Translate the type for Polish locale if needed
          let displayType = type;
          if (locale === 'pl') {
            const translations: Record<string, string> = {
              "Monthly subscription": "Subskrypcja miesięczna",
              "Token-based": "Opłata za tokeny",
              "One-time purchase": "Zakup jednorazowy",
              "Infrastructure": "Infrastruktura"
            };
            displayType = translations[type] || type;
          }
          
          return (
            <div key={type} className="p-4 border rounded-lg shadow-sm bg-card">
              <h3 className="text-sm font-medium text-muted-foreground">{displayType}</h3>
              <p className="text-2xl font-bold">{formatter.format(amount)}</p>
              <p className="text-sm text-muted-foreground">
                {((amount / totalCost) * 100).toFixed(1)}% {t("ofTotal")}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  )
}
