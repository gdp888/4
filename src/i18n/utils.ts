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
 * Other locales are prefixed: /es/whatsapp/, /pt/telegram/, etc.
 * All paths end with a trailing slash for consistency.
 */
export function getLocalizedPath(lang: Lang, path: string = 'whatsapp'): string {
  let result: string;
  if (lang === defaultLang) {
    result = `/${path}`.replace(/\/+/g, '/');
  } else {
    result = `/${lang}/${path}`.replace(/\/+/g, '/');
  }
  // Ensure trailing slash (root '/' already has it)
  if (!result.endsWith('/')) {
    result += '/';
  }
  return result;
}

export function getAlternateUrl(lang: Lang, path: string = 'whatsapp'): string {
  const base = 'https://opnchat.net';
  return base + getLocalizedPath(lang, path);
}
