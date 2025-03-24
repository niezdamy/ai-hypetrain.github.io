"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  Row,
} from "@tanstack/react-table"
import { ChevronDown, ChevronsUpDown, FileDown, Smartphone, Menu } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useTranslations } from "next-intl"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { DateRangePicker } from "@/components/ui/date-range-picker"
import { CostsCardView } from "@/components/costs/costs-card-view"
import { exportToCsv } from "@/lib/export-utils"
import { Cost } from "@/lib/costs"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  searchPlaceholder?: string
  locale: string
}

export function DataTable<TData, TValue>({
  columns,
  data,
  searchPlaceholder,
  locale,
}: DataTableProps<TData, TValue>) {
  const t = useTranslations("Costs")
  const [sorting, setSorting] = React.useState<SortingState>([
    { id: "date", desc: true }
  ])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [viewMode, setViewMode] = React.useState<'table' | 'card'>('table')

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
  })

  // Define available page sizes
  const pageSizeOptions = [5, 10, 15, 20, 25, 50]
  
  // Helper function to format dates for filtering
  const formatDateForFilter = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  // Handle date range filter
  const handleDateRangeChange = (range: { from?: Date; to?: Date }) => {
    if (range?.from && range?.to) {
      // Set date filter in format that works with TanStack Table's date filtering
      table.getColumn("date")?.setFilterValue([
        formatDateForFilter(range.from),
        formatDateForFilter(range.to)
      ])
    } else {
      table.getColumn("date")?.setFilterValue(undefined)
    }
  };

  // Export current filtered data to CSV
  const handleExport = () => {
    const exportData = table.getFilteredRowModel().rows.map(row => row.original)
    // Use type assertion to ensure correct export type
    exportToCsv(exportData as object[], `ai-costs-export-${new Date().toISOString().split('T')[0]}`)
  }

  return (
    <div className="w-full">
      {/* Mobile view/table toggle */}
      <div className="flex md:hidden justify-end mb-4">
        <Button 
          variant="outline" 
          onClick={() => setViewMode(viewMode === 'table' ? 'card' : 'table')}
          className="flex items-center"
        >
          {viewMode === 'table' ? <Smartphone className="mr-2 h-4 w-4" /> : <Menu className="mr-2 h-4 w-4" />}
          {viewMode === 'table' ? t("cardView") : t("tableView")}
        </Button>
      </div>

      <div className="flex flex-col md:flex-row gap-3 py-4 justify-between">
        <div className="flex flex-col md:flex-row gap-3">
          <Input
            placeholder={searchPlaceholder || t("searchCosts")}
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <Select
            value={(table.getColumn("type")?.getFilterValue() as string) ?? ""}
            onValueChange={(value) => 
              table.getColumn("type")?.setFilterValue(value === "all" ? "" : value)
            }
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder={t("filterByType")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t("allTypes")}</SelectItem>
              <SelectItem value="Monthly subscription">{locale === 'pl' ? "Subskrypcja miesięczna" : "Monthly subscription"}</SelectItem>
              <SelectItem value="Token-based">{locale === 'pl' ? "Opłata za tokeny" : "Token-based"}</SelectItem>
              <SelectItem value="One-time purchase">{locale === 'pl' ? "Zakup jednorazowy" : "One-time purchase"}</SelectItem>
              <SelectItem value="Infrastructure">{locale === 'pl' ? "Infrastruktura" : "Infrastructure"}</SelectItem>
            </SelectContent>
          </Select>
          <div className="hidden md:block">
            <DateRangePicker
              onChange={(dateRange) => handleDateRangeChange(dateRange || { from: undefined, to: undefined })}
              placeholder={t("selectDateRange")}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            onClick={handleExport}
            className="flex items-center"
          >
            <FileDown className="mr-2 h-4 w-4" />
            {t("export")}
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                {t("columns")} <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      {/* Mobile card view */}
      {viewMode === 'card' ? (
        <CostsCardView 
          rows={table.getRowModel().rows} 
          locale={locale} 
        />
      ) : (
        /* Table view */
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    {t("noResults")}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      )}
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {t("showingRecords", { 
            from: table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1, 
            to: Math.min(
              (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
              table.getFilteredRowModel().rows.length
            ),
            total: table.getFilteredRowModel().rows.length 
          })}
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">{t("rowsPerPage")}:</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {pageSizeOptions.map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {t("previous")}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {t("next")}
          </Button>
        </div>
      </div>
    </div>
  )
}
