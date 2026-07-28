import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://opnchat.net',
  output: 'server',
  adapter: cloudflare(),
  prefetch: {
    defaultStrategy: 'viewport',
  },
  trailingSlash: 'always',
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
