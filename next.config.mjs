const isProd = process.env.NODE_ENV === 'production';

const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'" + (isProd ? '' : " 'unsafe-eval'"),
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data: blob:",
  "connect-src 'self'" + (isProd ? '' : ' ws: wss:'),
  "frame-src 'self' https://www.google.com",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "object-src 'none'",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  ...(isProd ? [{ key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' }] : []),
];

// Old static-site URLs keep working (and keep their search ranking)
const legacy = {
  'index.html': '/', 'About.html': '/about', 'AntarikshaAI.html': '/antariksha', 'Research.html': '/research',
  'Products.html': '/products', 'Vichayan.html': '/vichayan', 'Agents.html': '/agents', 'Enterprise.html': '/enterprise',
  'Cloud.html': '/cloud', 'Industries.html': '/industries', 'Partners.html': '/partners', 'Vision.html': '/vision',
  'Newsroom.html': '/newsroom', 'Careers.html': '/careers', 'Resources.html': '/resources', 'Contact.html': '/contact',
  'Privacy.html': '/privacy', 'Terms.html': '/terms', 'ResponsibleAI.html': '/responsible-ai', 'sitemap.html': '/site-map',
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  serverExternalPackages: ['better-sqlite3'],
  eslint: { ignoreDuringBuilds: true },
  async headers() {
    return [
      { source: '/(.*)', headers: securityHeaders },
      { source: '/assets/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, immutable' }] },
    ];
  },
  async redirects() {
    return Object.entries(legacy).map(([from, to]) => ({ source: '/' + from, destination: to, permanent: true }));
  },
};

export default nextConfig;
