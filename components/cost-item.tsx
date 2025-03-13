"use client";

import { Calendar, DollarSign, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@/navigation";
import { Cost } from "@/lib/costs";
import { useTranslations } from "next-intl";

interface CostItemProps {
  cost: Cost;
  locale: string;
}

export function CostItem({ cost, locale }: CostItemProps) {
  const t = useTranslations();
  
  // Generate stars based on satisfaction level
  const renderSatisfactionStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`h-4 w-4 ${i < cost.satisfactionLevel ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`} 
        />
      );
    }
    return stars;
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{cost.date}</span>
            </div>
            
            <h3 className="text-lg font-medium mb-1">
              {cost.relatedPostSlug ? (
                <Link 
                  href={`/${locale}/blog/${cost.relatedPostSlug}`} 
                  className="hover:underline text-primary"
                >
                  {cost.name}
                </Link>
              ) : (
                cost.name
              )}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-3">{cost.comment}</p>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="flex items-center mb-2">
              <DollarSign className="h-4 w-4 mr-1 text-green-600" />
              <span className="text-lg font-semibold">{cost.amount}</span>
            </div>
            
            <div className="flex">
              {renderSatisfactionStars()}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
