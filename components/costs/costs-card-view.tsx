"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { type ColumnDef, Row } from "@tanstack/react-table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "@/navigation"
import { SatisfactionStars } from "@/components/costs/columns"
import { Cost } from "@/lib/costs"

interface CostsCardViewProps<TData> {
  rows: Row<TData>[]
  locale: string
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export function CostsCardView<TData>({ 
  rows, 
  locale 
}: CostsCardViewProps<TData>) {
  const t = useTranslations("Costs")
  
  return (
    <div className="grid grid-cols-1 gap-4 md:hidden">
      {rows.map((row) => {
        const cost = row.original as Cost
        
        // Translate the type for Polish locale if needed
        let type = cost.type;
        if (locale === 'pl') {
          const translations: Record<string, string> = {
            "Monthly subscription": "Subskrypcja miesięczna",
            "Token-based": "Opłata za tokeny",
            "One-time purchase": "Zakup jednorazowy",
            "Infrastructure": "Infrastruktura"
          }
          type = translations[type] || type
        }
        
        // Translate comment
        let comment = cost.comment
        if (locale === 'pl') {
          const translations: Record<string, string> = {
            "Great tool for writing!": "Świetne narzędzie do pisania!",
            "Expensive but worth it": "Drogie, ale warte swojej ceny",
            "Limited capabilities": "Ograniczone możliwości",
            "Amazing for code generation": "Niesamowite do generowania kodu",
            "Waste of money": "Strata pieniędzy",
            "Helpful for brainstorming": "Pomocne przy burzy mózgów",
            "Good overall experience": "Dobre ogólne wrażenia",
            "Loved the UI and experience": "Świetny interfejs i wrażenia",
            "Too complex for everyday use": "Zbyt złożone do codziennego użytku",
            "Exactly what I needed": "Dokładnie to, czego potrzebowałem"
          }
          comment = translations[comment] || comment
        }
        
        return (
          <Card key={row.id} className="shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-center">
                {cost.relatedPostSlug ? (
                  <Link 
                    href={`/${locale}/blog/${cost.relatedPostSlug}`}
                    className="text-primary hover:underline font-medium"
                  >
                    {cost.name}
                  </Link>
                ) : (
                  <CardTitle className="text-base font-medium">{cost.name}</CardTitle>
                )}
                <span className="text-sm text-muted-foreground">{formatDate(cost.date)}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <div>
                  <span className="text-muted-foreground mr-1">
                    {locale === 'pl' ? 'Typ:' : 'Type:'}
                  </span> 
                  {type}
                </div>
                <div>
                  <span className="text-muted-foreground mr-1">
                    {locale === 'pl' ? 'Kwota:' : 'Amount:'}
                  </span> 
                  <span className="font-medium">{cost.amount}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-muted-foreground mr-1">
                    {locale === 'pl' ? 'Satysfakcja:' : 'Satisfaction:'}
                  </span> 
                  <SatisfactionStars level={cost.satisfactionLevel} />
                </div>
                {comment && (
                  <div className="col-span-2 mt-2 pt-2 border-t">
                    {comment}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
