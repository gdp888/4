import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'id', 'ru'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
