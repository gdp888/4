import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  i18n: {
    defaultLocale: 'eng',
    locales: ['eng', 'esp', 'por', 'ind'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    // Old WhatsApp English pages → new /eng/whatsapp/
    '/': '/eng/whatsapp/',
    '/es/': '/esp/whatsapp/',
    '/pt/': '/por/whatsapp/',
    '/id/': '/ind/whatsapp/',

    // Old Telegram pages → new /{lang}/telegram/
    '/telegram/': '/eng/telegram/',
    '/es/telegram/': '/esp/telegram/',
    '/pt/telegram/': '/por/telegram/',
    '/id/telegram/': '/ind/telegram/',

    // Old Disclaimer pages → new /{lang}/disclaimer/
    '/disclaimer': '/eng/disclaimer/',
    '/es/disclaimer': '/esp/disclaimer/',
    '/pt/disclaimer': '/por/disclaimer/',
    '/id/disclaimer': '/ind/disclaimer/',

    // Old Blog pages → new /eng/blog/
    '/blog/': '/eng/blog/',
    '/blog/whatsapp-direct-message': '/eng/blog/whatsapp-direct-message',
    '/blog/whatsapp-click-to-chat-guide': '/eng/blog/whatsapp-click-to-chat-guide',
    '/blog/whatsapp-without-saving-number': '/eng/blog/whatsapp-without-saving-number',
  },
});
