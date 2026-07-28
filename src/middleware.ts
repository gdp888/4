/**
 * Astro Middleware — 301 redirects for legacy URLs
 * 
 * Handles:
 * - /eng/ → /en/  (old English prefix, was deprecated)
 * - /converter/ → /unit-converter/  (old slug, Google found 404s)
 * - Trailing slash enforcement handled by Astro config (trailingSlash: 'always')
 */
import { defineMiddleware } from 'astro:middleware';

const redirects: Record<string, string> = {
  // Old "eng" prefix → redirect to "en" (default locale, no prefix)
  '/eng': '/',
  '/eng/': '/',
  '/eng/whatsapp': '/whatsapp/',
  '/eng/whatsapp/': '/whatsapp/',
  '/eng/wa-link': '/wa-link/',
  '/eng/wa-link/': '/wa-link/',
  '/eng/wa-widget': '/wa-widget/',
  '/eng/wa-widget/': '/wa-widget/',
  '/eng/telegram': '/telegram/',
  '/eng/telegram/': '/telegram/',
  '/eng/tg-link': '/tg-link/',
  '/eng/tg-link/': '/tg-link/',
  '/eng/qr-code': '/qr-code/',
  '/eng/qr-code/': '/qr-code/',
  '/eng/password': '/password/',
  '/eng/password/': '/password/',
  '/eng/unit-converter': '/unit-converter/',
  '/eng/unit-converter/': '/unit-converter/',
  '/eng/whatsapp-text-formatter': '/whatsapp-text-formatter/',
  '/eng/whatsapp-text-formatter/': '/whatsapp-text-formatter/',
  '/eng/fancy-text': '/fancy-text/',
  '/eng/fancy-text/': '/fancy-text/',
  '/eng/word-counter': '/word-counter/',
  '/eng/word-counter/': '/word-counter/',
  '/eng/notepad': '/notepad/',
  '/eng/notepad/': '/notepad/',
  '/eng/timezone': '/timezone/',
  '/eng/timezone/': '/timezone/',
  '/eng/emoji-picker': '/emoji-picker/',
  '/eng/emoji-picker/': '/emoji-picker/',
  '/eng/blog': '/blog/',
  '/eng/blog/': '/blog/',
  '/eng/disclaimer': '/disclaimer/',
  '/eng/disclaimer/': '/disclaimer/',
  '/eng/privacy': '/privacy/',
  '/eng/privacy/': '/privacy/',

  // Old "converter" slug → correct "unit-converter"
  '/converter': '/unit-converter/',
  '/converter/': '/unit-converter/',
  '/ru/converter': '/ru/unit-converter/',
  '/ru/converter/': '/ru/unit-converter/',
  '/es/converter': '/es/unit-converter/',
  '/es/converter/': '/es/unit-converter/',
  '/pt/converter': '/pt/unit-converter/',
  '/pt/converter/': '/pt/unit-converter/',
  '/id/converter': '/id/unit-converter/',
  '/id/converter/': '/id/unit-converter/',
  '/de/converter': '/de/unit-converter/',
  '/de/converter/': '/de/unit-converter/',
  '/ar/converter': '/ar/unit-converter/',
  '/ar/converter/': '/ar/unit-converter/',
};

export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url);
  const path = url.pathname;

  // Check if this path needs a redirect
  const redirectTarget = redirects[path];
  if (redirectTarget) {
    return context.redirect(redirectTarget, 301);
  }

  // Also check for /en/ prefix (old URL pattern — en is default, no prefix needed)
  // Match: /en/* → /* (strip the /en prefix)
  if (path.startsWith('/en/') || path === '/en') {
    const newPath = path.replace(/^\/en/, '') || '/';
    // Ensure trailing slash
    const finalPath = newPath.endsWith('/') ? newPath : newPath + '/';
    return context.redirect(finalPath, 301);
  }

  // No redirect needed — continue to the page
  return next();
});
