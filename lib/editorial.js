import { getDb } from './db';

export const EDITORIAL_KINDS = {
  blog: { label: 'Blogs', route: '/admin/blogs', publicRoute: '/resources', category: 'Blog' },
  news: { label: 'Newsroom', route: '/admin/newsroom', publicRoute: '/newsroom', category: 'Press Releases' },
};

export function getEditorialEntries(kind) {
  return getDb()
    .prepare('SELECT * FROM editorial_content WHERE kind = ? ORDER BY updated_at DESC, id DESC')
    .all(kind);
}

export function getPublishedEditorialEntries(kind) {
  return getDb()
    .prepare('SELECT * FROM editorial_content WHERE kind = ? AND published = 1 ORDER BY published_at DESC, id DESC')
    .all(kind);
}

export function getPublishedEditorialEntry(kind, slug) {
  return getDb()
    .prepare('SELECT * FROM editorial_content WHERE kind = ? AND slug = ? AND published = 1')
    .get(kind, slug);
}

export function editorialCards(kind) {
  const config = EDITORIAL_KINDS[kind];
  if (!config) throw new Error(`Unknown editorial content kind: ${kind}`);
  return getPublishedEditorialEntries(kind).map((entry) => ({
    cat: entry.category,
    date: new Date(entry.published_at || entry.updated_at).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      timeZone: 'Asia/Kolkata',
    }),
    title: entry.title,
    blurb: entry.summary,
    image: entry.image_filename ? `/api/editorial-images/${encodeURIComponent(entry.image_filename)}` : null,
    url: `${config.publicRoute}/${entry.slug}`,
    cta: kind === 'blog' ? 'Read article' : 'Read announcement',
  }));
}
