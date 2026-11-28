import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getAdmin } from '@/lib/session';
import { getDb } from '@/lib/db';
import { INTENTS, STATUSES } from '@/lib/config';
import AdminNav, { fmtDate } from '../AdminNav';

export const dynamic = 'force-dynamic';

export default async function SubmissionsPage() {
  if (!(await getAdmin())) redirect('/admin/login');
  const db = getDb();
  const enquiries = db.prepare('SELECT id, created_at, intent, name, email, status, email_sent FROM enquiries ORDER BY id DESC LIMIT 100').all();
  const subscribers = db.prepare('SELECT id, created_at, email, status, source FROM subscribers ORDER BY id DESC LIMIT 100').all();
  const enquiryCount = db.prepare('SELECT COUNT(*) AS n FROM enquiries').get().n;
  const subscriberCount = db.prepare("SELECT COUNT(*) AS n FROM subscribers WHERE status = 'active'").get().n;

  return (
    <>
      <AdminNav active="all" enquiries={enquiryCount} subscribers={subscriberCount} />
      <main>
        <h1>All submissions</h1>
        <p className="muted">Contact forms appear under enquiries. Newsletter forms appear under subscribers.</p>

        <h2>Enquiries ({enquiryCount})</h2>
        <div className="tablewrap">
          <table>
            <thead><tr><th>S.No.</th><th>Received</th><th>Type</th><th>From</th><th>Status</th><th>Email</th></tr></thead>
            <tbody>
              {!enquiries.length && <tr><td colSpan={6} className="muted">No enquiries yet.</td></tr>}
              {enquiries.map((row, index) => (
                <tr key={`enquiry-${row.id}`}>
                  <td data-label="S.No."><Link href={`/admin/enquiry?id=${row.id}`}>S.No.{index + 1}</Link></td>
                  <td data-label="Received">{fmtDate(row.created_at)}</td>
                  <td data-label="Type">{INTENTS[row.intent] || row.intent}</td>
                  <td data-label="From"><Link href={`/admin/enquiry?id=${row.id}`}><b>{row.name}</b></Link><br /><span className="muted">{row.email}</span></td>
                  <td data-label="Status"><span className={`pill s-${row.status}`}>{STATUSES[row.status] || row.status}</span></td>
                  <td data-label="Email">{row.email_sent ? 'Sent' : <span className="muted">Not sent</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Newsletter subscribers ({subscriberCount})</h2>
        <div className="tablewrap">
          <table>
            <thead><tr><th>Email</th><th>Status</th><th>Source</th><th>Subscribed</th></tr></thead>
            <tbody>
              {!subscribers.length && <tr><td colSpan={4} className="muted">No subscribers yet.</td></tr>}
              {subscribers.map((row) => (
                <tr key={`subscriber-${row.id}`}>
                  <td data-label="Email">{row.email}</td>
                  <td data-label="Status">{row.status}</td>
                  <td data-label="Source">{row.source}</td>
                  <td data-label="Subscribed">{fmtDate(row.created_at)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}