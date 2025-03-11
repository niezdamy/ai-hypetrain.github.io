"use client";

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/navigation';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useTranslations } from 'next-intl';

export function LanguageSwitcher() {
  const t = useTranslations('language');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => switchLocale('en')}
          className={locale === 'en' ? 'bg-muted' : ''}
        >
          {t('en')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => switchLocale('pl')}
          className={locale === 'pl' ? 'bg-muted' : ''}
        >
          {t('pl')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
