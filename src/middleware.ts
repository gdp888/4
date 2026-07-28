/**
 * Astro Middleware
 *
 * Redirects are handled by public/_redirects (Cloudflare edge-level).
 * This middleware is reserved for future server-side logic
 * (e.g., geo-based locale detection, A/B testing, etc.)
 *
 * For now — pass through to the page.
 */
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  // No server-side redirect logic — all handled by _redirects at edge level
  return next();
});
