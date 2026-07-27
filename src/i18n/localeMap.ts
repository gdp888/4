import type { Lang } from './ui';

/** ISO 639-1 → BCP 47 locale codes for og:locale / hreflang */
export const localeMap: Record<Lang, string> = {
  en: 'en_US',
  es: 'es_ES',
  pt: 'pt_BR',
  id: 'id_ID',
  ru: 'ru_RU',
  ar: 'ar_SA',
  de: 'de_DE',
};

/** BCP 47 locale codes for date formatting */
export const dateLocaleMap: Record<Lang, string> = {
  en: 'en-US',
  es: 'es-ES',
  pt: 'pt-BR',
  id: 'id-ID',
  ru: 'ru-RU',
  ar: 'ar-SA',
  de: 'de-DE',
};
