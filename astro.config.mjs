import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'id'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    // Old root-level WhatsApp pages → new /{lang}/whatsapp/
    '/': '/en/whatsapp/',
    '/es/': '/es/whatsapp/',
    '/pt/': '/pt/whatsapp/',
    '/id/': '/id/whatsapp/',

    // Old English Telegram (was /telegram/, now /en/telegram/)
    '/telegram/': '/en/telegram/',

    // Old English Disclaimer (was /disclaimer, now /en/disclaimer/)
    '/disclaimer': '/en/disclaimer/',

    // Old Blog pages (were /blog/, now /en/blog/)
    '/blog/': '/en/blog/',
    '/blog/whatsapp-direct-message': '/en/blog/whatsapp-direct-message',
    '/blog/whatsapp-click-to-chat-guide': '/en/blog/whatsapp-click-to-chat-guide',
    '/blog/whatsapp-without-saving-number': '/en/blog/whatsapp-without-saving-number',
  },
});
