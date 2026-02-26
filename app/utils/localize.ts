import type { Locale } from "@/i18n/routing";

export interface LocalizedString {
  pt: string;
  en: string;
}

export function localize(field: LocalizedString, locale: Locale): string {
  return field[locale];
}
