import { SITE_URL } from '@/lib/config';
import { JOBS } from '@/lib/jobs';
import { EDITORIAL_KINDS, getPublishedEditorialEntries } from '@/lib/editorial';

export const dynamic = 'force-dynamic';

// Replace with real dates (ideally from your CMS / git / DB) so that
// lastModified only changes when the content actually changes.
const BUILD_DATE = new Date();

/**
 * Central route config: one place to control SEO signals per page.
 * priority: 0.0–1.0 (relative importance within YOUR site)
 * changeFrequency: hint only; Google largely ignores it but Bing/others use it
 */
const STATIC_ROUTES = [
  // Core brand + product pages
  { path: '/',            priority: 1.0, changeFrequency: 'weekly' },
  { path: '/products',    priority: 0.9, changeFrequency: 'weekly' },
  { path: '/antariksha',  priority: 0.9, changeFrequency: 'weekly' },
  { path: '/vichayan',    priority: 0.9, changeFrequency: 'weekly' },
  { path: '/agents',      priority: 0.9, changeFrequency: 'weekly' },
  { path: '/cloud',       priority: 0.8, changeFrequency: 'monthly' },
  { path: '/enterprise',  priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries',  priority: 0.8, changeFrequency: 'monthly' },

  // Trust, company and thought-leadership pages
  { path: '/about',          priority: 0.7, changeFrequency: 'monthly' },
  { path: '/research',       priority: 0.8, changeFrequency: 'weekly' },
  { path: '/vision',         priority: 0.6, changeFrequency: 'monthly' },
  { path: '/responsible-ai', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/partners',       priority: 0.6, changeFrequency: 'monthly' },
  { path: '/resources',      priority: 0.7, changeFrequency: 'weekly' },

  // News
  { path: '/newsroom', priority: 0.8, changeFrequency: 'weekly' },
  {
    path: '/newsroom/tanumanasa-building-sovereign-multilingual-ai-for-bharat',
    priority: 0.7,
    changeFrequency: 'yearly',
  },

  // Conversion + hiring
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/careers', priority: 0.7, changeFrequency: 'weekly' },

  // Utility / legal (low priority, rarely change)
  { path: '/privacy',  priority: 0.2, changeFrequency: 'yearly' },
  { path: '/terms',    priority: 0.2, changeFrequency: 'yearly' },
  { path: '/site-map', priority: 0.2, changeFrequency: 'yearly' },
];

const toAbsolute = (path) => new URL(path, SITE_URL).toString();

export default function sitemap() {
  const staticEntries = STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: toAbsolute(path),
    lastModified: BUILD_DATE,
    changeFrequency,
    priority,
  }));

  const jobEntries = (JOBS ?? [])
    .filter((job) => job?.slug && job.active !== false) // skip closed roles if you track that
    .map((job) => ({
      url: toAbsolute(`/careers/${job.slug}`),
      // Use the job's own date if you have one: job.updatedAt / job.postedAt
      lastModified: job.updatedAt ? new Date(job.updatedAt) : BUILD_DATE,
      changeFrequency: 'weekly',
      priority: 0.5,
    }));

  const editorialEntries = Object.entries(EDITORIAL_KINDS).flatMap(([kind, config]) =>
    getPublishedEditorialEntries(kind).map((entry) => ({
      url: toAbsolute(`${config.publicRoute}/${entry.slug}`),
      lastModified: new Date(entry.updated_at),
      changeFrequency: 'monthly',
      priority: kind === 'news' ? 0.7 : 0.6,
    }))
  );

  // De-duplicate by URL (keeps the first occurrence)
  const seen = new Set();
  return [...staticEntries, ...jobEntries, ...editorialEntries].filter(({ url }) => {
    if (seen.has(url)) return false;
    seen.add(url);
    return true;
  });
}