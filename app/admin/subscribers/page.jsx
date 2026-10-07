import { redirect } from 'next/navigation';
import { getAdmin } from '@/lib/session';
import { getDb } from '@/lib/db';
import AdminNav, { fmtDate } from '../AdminNav';
import { removeSubscriber } from '../actions';

export const dynamic = 'force-dynamic';

export default async function SubscribersPage({ searchParams }) {
  if (!(await getAdmin())) redirect('/admin/login');
  const sp = (await searchParams) || {};
  const db = getDb();
  const subs = db.prepare('SELECT * FROM subscribers ORDER BY id DESC LIMIT 2000').all();
  const active = subs.filter((s) => s.status === 'active').length;
  const all = db.prepare('SELECT COUNT(*) AS n FROM enquiries').get().n;

  return (
    <>
      <AdminNav active="subscribers" enquiries={all} subscribers={active} />
      <main>
        {sp.removed && <p className="alert ok">Subscriber removed.</p>}
        <h1>Newsletter subscribers</h1>
        <p className="muted">{active} active · <a href="/admin/export?type=subscribers">Export CSV</a></p>
        <div className="tablewrap">
          <table>
            <thead><tr><th>Email</th><th>Status</th><th>Source</th><th>Since</th><th /></tr></thead>
            <tbody>
              {!subs.length && <tr><td colSpan={5} className="muted">No subscribers yet.</td></tr>}
              {subs.map((s) => (
                <tr key={s.id}>
                  <td>{s.email}</td><td>{s.status}</td><td>{s.source}</td><td>{fmtDate(s.created_at)}</td>
                  <td>
                    <form action={removeSubscriber}>
                      <input type="hidden" name="id" value={s.id} />
                      <button className="danger" type="submit">Remove</button>
                    </form>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
