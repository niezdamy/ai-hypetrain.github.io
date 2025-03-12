import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "Kontakt | AI Hypetrain",
};

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'pl' }];
}

export const dynamic = 'force-static';

export default async function KontaktPage({ params }: { params: { locale: string } }) {
  setRequestLocale(params.locale);
  
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold text-foreground">Kontakt</h1>
      <p className="mt-4 text-xl text-muted-foreground">This is the Kontakt page of AI Hypetrain.</p>
    </div>
  );
}
