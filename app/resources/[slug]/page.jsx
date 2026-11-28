import { notFound } from 'next/navigation';
import EditorialArticle from '@/components/EditorialArticle';
import { getPublishedEditorialEntry } from '@/lib/editorial';
import { pageMeta } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const entry = getPublishedEditorialEntry('blog', slug);
  if (!entry) {
    return pageMeta({ title: 'Article not found | Tanumanasa', description: 'This article is not available.', path: `/resources/${slug}`, noindex: true });
  }
  return pageMeta({
    title: `${entry.title} | Tanumanasa`,
    description: entry.summary,
    path: `/resources/${entry.slug}`,
    type: 'article',
  });
}

export default async function BlogArticlePage({ params }) {
  const { slug } = await params;
  const entry = getPublishedEditorialEntry('blog', slug);
  if (!entry) notFound();

  return <EditorialArticle entry={entry} backHref="/resources" backLabel="resources" />;
}
