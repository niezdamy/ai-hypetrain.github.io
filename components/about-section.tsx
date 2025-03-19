"use client";

import { ArrowRight, Clock, DollarSign, PiggyBank } from "lucide-react";
import { Link } from "@/navigation";
import { Button } from "@/components/ui/button";

type AboutSectionProps = {
  title: string;
  description1: string;
  description2: string;
  timeTrackingTitle: string;
  timeTrackingDescription: string;
  costAnalysisTitle: string;
  costAnalysisDescription: string;
  revenueReportsTitle: string;
  revenueReportsDescription: string;
  ctaText: string;
  ctaButtonText: string;
  contactPath: string;
  locale: string;
};

export function AboutSection({
  title,
  description1,
  description2,
  timeTrackingTitle,
  timeTrackingDescription,
  costAnalysisTitle,
  costAnalysisDescription,
  revenueReportsTitle,
  revenueReportsDescription,
  ctaText,
  ctaButtonText,
  contactPath,
  locale
}: AboutSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground mb-6">{title}</h2>
        <p className="text-lg text-muted-foreground mb-6">
          {description1}
        </p>
        <p className="text-lg text-muted-foreground">
          {description2}
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <Clock className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">{timeTrackingTitle}</h3>
            <p className="text-muted-foreground">{timeTrackingDescription}</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <DollarSign className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">{costAnalysisTitle}</h3>
            <p className="text-muted-foreground">{costAnalysisDescription}</p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border">
            <PiggyBank className="h-8 w-8 text-primary mb-4" />
            <h3 className="text-xl font-medium mb-2">{revenueReportsTitle}</h3>
            <p className="text-muted-foreground">{revenueReportsDescription}</p>
          </div>
        </div>

        {/* CTA section removed for consistency */}
      </div>
    </section>
  );
}
