/**
 * Post-build script: Fix _routes.json for Cloudflare Pages
 *
 * The @astrojs/cloudflare adapter automatically puts prerendered locale paths
 * in the exclude list. But /eng/*, /en/*, /converter are NOT valid static paths
 * — they're redirect-only paths handled by middleware. When Cloudflare sees
 * these in exclude, it tries to serve a static file (which doesn't exist) → 404.
 *
 * This script removes redirect-only paths from the exclude list so that
 * Cloudflare invokes the worker (middleware) for these paths instead.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const ROUTES_JSON_PATH = fileURLToPath(new URL('./dist/_routes.json', import.meta.url));

// Patterns that must NOT be in exclude — they have no static files, only middleware redirects
const REDIRECT_ONLY_PATTERNS = [
  '/eng/*',
  '/en/*',
  '/converter/*',
  '/converter',
];

try {
  const routesJson = JSON.parse(readFileSync(ROUTES_JSON_PATH, 'utf-8'));

  const originalExclude = [...routesJson.exclude];
  routesJson.exclude = routesJson.exclude.filter(
    (pattern) => !REDIRECT_ONLY_PATTERNS.includes(pattern)
  );

  const removed = originalExclude.filter(
    (pattern) => !routesJson.exclude.includes(pattern)
  );

  writeFileSync(ROUTES_JSON_PATH, JSON.stringify(routesJson, null, 2), 'utf-8');

  console.log('✅ _routes.json fixed:');
  console.log(`   Removed from exclude: ${removed.join(', ')}`);
  console.log(`   Include count: ${routesJson.include.length}`);
  console.log(`   Exclude count: ${routesJson.exclude.length}`);
} catch (err) {
  console.error('❌ Failed to fix _routes.json:', err.message);
  process.exit(1);
}
