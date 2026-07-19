import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/**
 * Get the URL path for a given language and service.
 * Default locale (en) has NO prefix — lives at root.
 * Other locales are prefixed: /es/whatsapp, /pt/telegram, etc.
 */
export function getLocalizedPath(lang: Lang, path: string = 'whatsapp'): string {
  if (lang === defaultLang) {
    return `/${path}`.replace(/\/+/g, '/');
  }
  return `/${lang}/${path}`.replace(/\/+/g, '/');
}

export function getAlternateUrl(lang: Lang, path: string = 'whatsapp'): string {
  const base = 'https://opnchat.net';
  return base + getLocalizedPath(lang, path);
}
