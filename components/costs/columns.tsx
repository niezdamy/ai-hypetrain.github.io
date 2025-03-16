"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowDown, ArrowUp, ArrowUpDown, Star } from "lucide-react"
import { Link } from "@/navigation"
import { Button } from "@/components/ui/button"
import { Cost } from "@/lib/costs"
import { useTranslations } from "next-intl"

// A component to render satisfaction stars
export function SatisfactionStars({ level }: { level: number }) {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < level ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

// Format a date string to a more readable format
function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

// Create columns with translations support
export function createColumns(locale: string): ColumnDef<Cost>[] {
  return [
  {
    id: "index",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          #
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      )
    },
    cell: ({ row }) => {
      // Use the row index + 1 to display the row number
      return <div className="text-center font-medium">{row.index + 1}</div>
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {locale === 'pl' ? 'Data' : 'Date'}
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div>{formatDate(row.getValue("date"))}</div>
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {locale === 'pl' ? 'Nazwa' : 'Name'}
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      )
    },
    cell: ({ row, table }) => {
      const cost = row.original
      // Use the locale passed to the columns function
      
      return cost.relatedPostSlug ? (
        <Link 
          href={`/${locale}/blog/${cost.relatedPostSlug}`}
          className="text-primary hover:underline"
        >
          {cost.name}
        </Link>
      ) : (
        <span>{cost.name}</span>
      )
    },
  },
  {
    accessorKey: "type",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {locale === 'pl' ? 'Typ' : 'Type'}
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      )
    },
    cell: ({ row }) => {
      // Translate the type for Polish locale if needed
      let type = row.getValue("type") as string;
      if (locale === 'pl') {
        const translations: Record<string, string> = {
          "Monthly subscription": "Subskrypcja miesięczna",
          "Token-based": "Opłata za tokeny",
          "One-time purchase": "Zakup jednorazowy",
          "Infrastructure": "Infrastruktura"
        };
        type = translations[type] || type;
      }
      return <div>{type}</div>
    },
  },
  {
    accessorKey: "amount",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {locale === 'pl' ? 'Kwota' : 'Amount'}
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      )
    },
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("amount")}</div>
    },
  },
  {
    accessorKey: "comment",
    header: ({ column }) => locale === 'pl' ? 'Komentarz' : 'Comment',
    cell: ({ row }) => {
      // Translate the comments for Polish locale
      let comment = row.getValue("comment") as string;
      if (locale === 'pl') {
        // Basic translations for sample data. In a real app, this would come from translation files
        const translations: Record<string, string> = {
          "Great tool for writing!":                 "Świetne narzędzie do pisania!",
          "Expensive but worth it":                 "Drogie, ale warte swojej ceny",
          "Limited capabilities":                   "Ograniczone możliwości",
          "Amazing for code generation":            "Niesamowite do generowania kodu",
          "Waste of money":                         "Strata pieniędzy",
          "Helpful for brainstorming":              "Pomocne przy burzy mózgów",
          "Good overall experience":                "Dobre ogólne wrażenia",
          "Loved the UI and experience":            "Świetny interfejs i wrażenia",
          "Too complex for everyday use":           "Zbyt złożone do codziennego użytku",
          "Exactly what I needed":                  "Dokładnie to, czego potrzebowałem"
        };
        comment = translations[comment] || comment;
      }
      return <div className="max-w-[300px] truncate" title={comment}>{comment}</div>
    },
  },
  {
    accessorKey: "satisfactionLevel",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {locale === 'pl' ? 'Satysfakcja' : 'Satisfaction'}
          {column.getIsSorted() === "asc" ? (
            <ArrowUp className="ml-2 h-4 w-4" />
          ) : column.getIsSorted() === "desc" ? (
            <ArrowDown className="ml-2 h-4 w-4" />
          ) : (
            <ArrowUpDown className="ml-2 h-4 w-4" />
          )}
        </Button>
      )
    },
    cell: ({ row }) => {
      return <SatisfactionStars level={row.getValue("satisfactionLevel")} />
    },
  },
];
}
