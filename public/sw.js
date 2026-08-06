const CACHE_NAME = 'opnchat-cache-v9';

// All supported locales — 'en' lives at root, others have /<lang>/ prefix
const LOCALES = ['en', 'es', 'pt', 'id', 'ru', 'de', 'ar'];

// All tool slugs (excluding 'blog' which is handled separately)
// Source of truth: src/pages/<slug>/index.astro + src/pages/[lang]/<slug>/index.astro
const TOOLS = [
  'whatsapp',
  'wa-link',
  'wa-widget',
  'whatsapp-text-formatter',
  'quick-replies',
  'broadcast',
  'telegram',
  'tg-link',
  'viber',
  'signal',
  'fancy-text',
  'word-counter',
  'notepad',
  'qr-code',
  'password',
  'unit-converter',
  'timezone',
  'meeting-scheduler',
  'emoji-picker',
];

// Helper: build URL path for a (locale, tool) pair
// English is at root: /whatsapp/
// Other locales: /es/whatsapp/
function urlFor(locale, tool) {
  return locale === 'en' ? `/${tool}/` : `/${locale}/${tool}/`;
}

// Helper: build hub URL for a locale
function hubUrl(locale) {
  return locale === 'en' ? '/' : `/${locale}/`;
}

// Build the full precache list
const precacheUrls = [
  // Hub pages for all locales
  ...LOCALES.map(hubUrl),

  // Tool pages for all locales × all tools
  ...LOCALES.flatMap(locale => TOOLS.map(tool => urlFor(locale, tool))),

  // Blog index for all locales
  ...LOCALES.map(locale => locale === 'en' ? '/blog/' : `/${locale}/blog/`),

  // Static assets
  '/icon-192.svg',
  '/icon-512.svg',
  '/icon-maskable-192.svg',
  '/icon-maskable-512.svg',
  '/favicon.svg',
  '/manifest.json',
  '/robots.txt',
  '/llms.txt',

  // Fonts
  '/fonts/Inter-Regular.woff2',
  '/fonts/Inter-Medium.woff2',
  '/fonts/Inter-SemiBold.woff2',
  '/fonts/Inter-Bold.woff2',
  // Cairo (Arabic) — loaded only on /ar/ pages but cached for offline use
  '/fonts/Cairo-Regular.woff2',
  '/fonts/Cairo-Medium.woff2',
  '/fonts/Cairo-SemiBold.woff2',
  '/fonts/Cairo-Bold.woff2',

  // Legal / info pages
  '/disclaimer/',
  '/privacy/',
  '/es/disclaimer/',
  '/es/privacy/',
  '/pt/disclaimer/',
  '/pt/privacy/',
  '/id/disclaimer/',
  '/id/privacy/',
  '/ru/disclaimer/',
  '/ru/privacy/',
  '/de/disclaimer/',
  '/de/privacy/',
  '/ar/disclaimer/',
  '/ar/privacy/',
];

// Install — precache key resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(precacheUrls))
      .catch((err) => {
        // If any single URL fails to cache, log but don't fail the install —
        // the network-first fetch handler will still cache them on-demand.
        console.warn('[SW] Some precache URLs failed:', err);
      })
  );
  self.skipWaiting();
});

// Activate — clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[SW] Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch — network first, fallback to cache (good for static sites: fresh content when online,
// cached content when offline)
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.startsWith(self.location.origin)) return;

  // Skip non-HTTP(s) protocols (e.g. viber://, signal.me — these are deep links, not fetchable)
  if (!event.request.url.startsWith('http')) return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Only cache successful, basic (same-origin) responses
        if (response.ok && response.type === 'basic') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
