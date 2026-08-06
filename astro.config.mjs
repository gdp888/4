import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://opnchat.net',
  output: 'static',
  prefetch: {
    defaultStrategy: 'viewport',
  },
  trailingSlash: 'always',
  // Redirects handled by vercel.json (Vercel edge-level)
  // No redirects here — single source of truth to avoid duplication
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'id', 'ru', 'de', 'ar'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES',
          pt: 'pt-BR',
          id: 'id-ID',
          ru: 'ru-RU',
          de: 'de-DE',
          ar: 'ar-SA',
        },
      },
    }),
  ],
});
