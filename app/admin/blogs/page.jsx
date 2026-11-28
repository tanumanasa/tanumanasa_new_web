import EditorialManager from '../EditorialManager';

export const dynamic = 'force-dynamic';

export default function BlogsAdminPage({ searchParams }) {
  return <EditorialManager kind="blog" searchParams={searchParams} />;
}
