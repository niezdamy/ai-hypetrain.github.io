"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeroSectionProps = {
  title: string;
  subtitle: string;
  ctaText: string;
};

export function HeroSection({ title, subtitle, ctaText }: HeroSectionProps) {
  // Function to scroll to posts section
  const scrollToPosts = () => {
    const element = document.getElementById("latest-posts");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">{title}</h1>
        <p className="mt-3 text-xl text-muted-foreground sm:mt-5">
          {subtitle}
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <a href="#latest-posts" onClick={(e) => {
                e.preventDefault();
                scrollToPosts();
              }}>
              {ctaText} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
