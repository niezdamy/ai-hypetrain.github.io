"use client";

import { StatsCounter } from "@/components/stats-counter";

type StatsCounterSectionProps = {
  title: string;
  totalTime: string;
  totalHours: number;
  totalCost: string;
  totalCostValue: number;
  totalIncome: string;
  totalIncomeValue: number;
};

export function StatsCounterSection({
  title,
  totalTime,
  totalHours,
  totalCost,
  totalCostValue,
  totalIncome,
  totalIncomeValue
}: StatsCounterSectionProps) {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <StatsCounter
          totalTime={totalTime}
          totalHours={totalHours}
          totalCost={totalCost}
          totalCostValue={totalCostValue}
          totalIncome={totalIncome}
          totalIncomeValue={totalIncomeValue}
        />
      </div>
    </section>
  );
}
