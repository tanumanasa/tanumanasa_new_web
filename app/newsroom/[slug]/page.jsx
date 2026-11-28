import { notFound } from 'next/navigation';
import EditorialArticle from '@/components/EditorialArticle';
import { getPublishedEditorialEntry } from '@/lib/editorial';
import { pageMeta } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = getPublishedEditorialEntry('news', slug);
  if (!entry) {
    return pageMeta({ title: 'News item not found | Tanumanasa', description: 'This newsroom item is not available.', path: `/newsroom/${slug}`, noindex: true });
  }
  return pageMeta({
    title: `${entry.title} | Tanumanasa Newsroom`,
    description: entry.summary,
    path: `/newsroom/${entry.slug}`,
    type: 'article',
  });
}

export default async function NewsroomArticlePage({ params }) {
  const { slug } = await params;
  const entry = getPublishedEditorialEntry('news', slug);
  if (!entry) notFound();

  return <EditorialArticle entry={entry} backHref="/newsroom" backLabel="newsroom" />;
}
