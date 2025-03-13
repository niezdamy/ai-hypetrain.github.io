"use client"

import * as React from "react"
import { Cost } from "@/lib/costs"
import { DataTable } from "@/components/costs/data-table"
import { createColumns } from "@/components/costs/columns"

interface CostsTableProps {
  data: Cost[]
  locale: string
  searchPlaceholder?: string
}

export function CostsTable({ 
  data, 
  locale,
  searchPlaceholder 
}: CostsTableProps) {
  // Create columns on the client side
  const columns = React.useMemo(() => createColumns(locale), [locale])
  
  return (
    <DataTable
      columns={columns}
      data={data}
      searchPlaceholder={searchPlaceholder}
    />
  )
}
