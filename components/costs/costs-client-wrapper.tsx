"use client"

import * as React from "react"
import { Cost, getCosts } from "@/lib/costs"
import { CostsTable } from "@/components/costs/costs-table"
import { AddCostForm } from "@/components/costs/add-cost-form"
import { useTranslations } from "next-intl"

interface CostsClientWrapperProps {
  initialCosts: Cost[]
  locale: string
  searchPlaceholder?: string
}

export function CostsClientWrapper({ 
  initialCosts, 
  locale,
  searchPlaceholder 
}: CostsClientWrapperProps) {
  const t = useTranslations("Costs")
  const [costs, setCosts] = React.useState<Cost[]>(initialCosts)
  
  // Function to refresh costs data from the server/local storage
  const refreshCosts = async () => {
    try {
      const freshCosts = await getCosts()
      // Sort costs by date (newest first)
      const sortedCosts = [...freshCosts].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      )
      setCosts(sortedCosts)
    } catch (error) {
      console.error("Failed to refresh costs:", error)
    }
  }
  
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">{t("allCosts")}</h2>
        {/* Add New Cost button hidden for now as the site is static */}
        {/* <AddCostForm onCostAdded={refreshCosts} locale={locale} /> */}
      </div>
      
      <CostsTable 
        data={costs} 
        locale={locale}
        searchPlaceholder={searchPlaceholder}
      />
    </div>
  )
}
