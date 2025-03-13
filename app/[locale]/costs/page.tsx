import { DollarSign, TrendingUp } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getCosts, getTotalCost, getAverageSatisfaction } from "@/lib/costs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CostsTable } from "@/components/costs/costs-table";

interface CostsPageProps {
  params: {
    locale: string;
  };
}

export default async function CostsPage({ params: { locale } }: CostsPageProps) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const t = await getTranslations("Costs");
  const costs = await getCosts();
  const { total, currency } = await getTotalCost();
  const avgSatisfaction = await getAverageSatisfaction();
  
  // For demo purposes, we'll sort costs by date (newest first)
  const sortedCosts = [...costs].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">{t("title")}</h1>
      <p className="text-xl text-muted-foreground mb-8">{t("description")}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* Total Costs Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t("totalCosts")}
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {currency}{total.toFixed(2)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {t("totalCostsDescription")}
            </p>
          </CardContent>
        </Card>
        
        {/* Average Satisfaction Card */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {t("averageSatisfaction")}
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {avgSatisfaction.toFixed(1)} / 5
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              {t("averageSatisfactionDescription")}
            </p>
          </CardContent>
        </Card>
      </div>
      
      <h2 className="text-2xl font-bold mb-6">{t("allCosts")}</h2>
      <CostsTable 
        data={sortedCosts} 
        locale={locale}
        searchPlaceholder={t("searchCosts")}
      />
    </div>
  );
}

// Generate static params for all locales
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'pl' }
  ];
}
