import EditorialManager from '../EditorialManager';

export const dynamic = 'force-dynamic';

export default function NewsroomAdminPage({ searchParams }) {
  return <EditorialManager kind="news" searchParams={searchParams} />;
}
