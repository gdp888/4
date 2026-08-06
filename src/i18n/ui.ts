export const languages = {
  en: 'English',
  es: 'Español',
  pt: 'Português',
  id: 'Bahasa Indonesia',
  ru: 'Русский',
  de: 'Deutsch',
  ar: 'العربية',
};

export const langCodes = {
  en: 'ENG',
  es: 'ESP',
  pt: 'POR',
  id: 'IND',
  ru: 'RUS',
  de: 'DEU',
  ar: 'ARA',
};

export const defaultLang = 'en';

export type Lang = keyof typeof languages;

// Per-language translations — imported from locales/*.ts for build perf + DX
import en from './locales/en';
import es from './locales/es';
import pt from './locales/pt';
import id from './locales/id';
import ru from './locales/ru';
import de from './locales/de';
import ar from './locales/ar';

export const ui = { en, es, pt, id, ru, de, ar } as const;
