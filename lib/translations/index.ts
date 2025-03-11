import { en } from './en';
import { pl } from './pl';

export const translations = {
  en,
  pl
};

export type Locale = keyof typeof translations;
export type TranslationKey = keyof typeof en;

export function getTranslation(locale: Locale, key: string): any {
  const keys = key.split('.');
  let translation: any = translations[locale];
  
  for (const k of keys) {
    if (!translation[k]) {
      // If translation is missing, fall back to English
      let fallback = translations.en;
      for (const fallbackKey of keys) {
        fallback = fallback[fallbackKey];
        if (!fallback) break;
      }
      return fallback || key;
    }
    translation = translation[k];
  }
  
  return translation;
}
