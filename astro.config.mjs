import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt', 'id'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    // Root → English WhatsApp (default landing page)
    '/': '/whatsapp/',

    // Old /en/* URLs → root-level (EN without prefix, as per Google recommendation)
    '/en/whatsapp/': '/whatsapp/',
    '/en/telegram/': '/telegram/',
    '/en/disclaimer/': '/disclaimer/',
    '/en/blog/': '/blog/',

    // Old root-level WhatsApp language pages → new /{lang}/whatsapp/
    '/es/': '/es/whatsapp/',
    '/pt/': '/pt/whatsapp/',
    '/id/': '/id/whatsapp/',

    // Old Telegram pages
    '/telegram/': '/telegram/',      // already root, but explicit
    '/es/telegram/': '/es/telegram/', // already correct, but explicit

    // Old Disclaimer
    '/disclaimer': '/disclaimer/',

    // Old Blog pages → root-level blog
    '/blog/': '/blog/',
    '/blog/whatsapp-direct-message': '/blog/whatsapp-direct-message',
    '/blog/whatsapp-click-to-chat-guide': '/blog/whatsapp-click-to-chat-guide',
    '/blog/whatsapp-without-saving-number': '/blog/whatsapp-without-saving-number',
  },
});
