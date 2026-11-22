// Vercel injects VERCEL_PROJECT_PRODUCTION_URL (host only, no protocol) at build time.
// SITE_URL can override it (e.g. for a custom domain); localhost is the dev fallback.
const host = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl =
  process.env.SITE_URL ?? (host ? `https://${host}` : "http://localhost:3000");

export const routes = ["/", "/projects", "/experience", "/education", "/skills", "/about", "/contact"];
