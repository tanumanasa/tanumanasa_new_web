import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getAdmin } from '@/lib/session';
import { getDb } from '@/lib/db';
import { INTENTS, STATUSES } from '@/lib/config';
import AdminNav, { fmtDate } from '../AdminNav';
import { deleteEnquiry, updateEnquiry } from '../actions';

export const dynamic = 'force-dynamic';

export default async function EnquiryPage({ searchParams }) {
  if (!(await getAdmin())) redirect('/admin/login');
  const sp = (await searchParams) || {};
  const id = Number(sp.id);
  const db = getDb();
  const item = id ? db.prepare('SELECT * FROM enquiries WHERE id = ?').get(id) : null;
  if (item && item.status === 'new') {
    db.prepare("UPDATE enquiries SET status = 'progress' WHERE id = ? AND status = 'new'").run(item.id);
    item.status = 'progress';
  }
  const all = db.prepare('SELECT COUNT(*) AS n FROM enquiries').get().n;
  const subs = db.prepare("SELECT COUNT(*) AS n FROM subscribers WHERE status = 'active'").get().n;

  return (
    <>
      <AdminNav active="enquiries" enquiries={all} subscribers={subs} />
      <main>
        <p><Link href="/admin">← All enquiries</Link></p>
        {!item ? <p>Enquiry not found.</p> : (
          <>
            {sp.saved && <p className="alert ok">Enquiry #{item.id} updated.</p>}
            <h1>#{item.id} · {item.name}</h1>
            <p className="muted">{INTENTS[item.intent] || item.intent} · {fmtDate(item.created_at)} · <span className={`pill s-${item.status}`}>{STATUSES[item.status]}</span></p>
            <div className="grid2">
              <div className="card">
                <dl>
                  <dt>Email</dt><dd><a href={`mailto:${item.email}?subject=${encodeURIComponent(`Re: your enquiry #${item.id}`)}`}>{item.email}</a></dd>
                  <dt>Phone</dt><dd>{item.phone ? <a href={`tel:${item.phone.replace(/[^+0-9]/g, '')}`}>{item.phone}</a> : '—'}</dd>
                  <dt>Organisation</dt><dd>{item.organisation || '—'}</dd>
                  <dt>Detail</dt><dd>{item.detail || '—'}</dd>
                  <dt>Submitted from</dt><dd>{item.page || '—'}</dd>
                  <dt>Email delivered</dt><dd>{item.email_sent ? 'Yes' : 'No — check SMTP settings'}</dd>
                </dl>
                <div className="msg">{item.message}</div>
              </div>
              <div className="card">
                <form action={updateEnquiry} className="stack">
                  <input type="hidden" name="id" value={item.id} />
                  <label htmlFor="st"><b>Status</b></label>
                  <select id="st" name="status" defaultValue={item.status}>
                    {Object.entries(STATUSES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
                  </select>
                  <label htmlFor="nt"><b>Internal notes</b></label>
                  <textarea id="nt" name="notes" rows={6} defaultValue={item.notes || ''} />
                  <button type="submit">Save</button>
                </form>
                <form action={deleteEnquiry} style={{ marginTop: 14 }}>
                  <input type="hidden" name="id" value={item.id} />
                  <button className="danger" type="submit">Delete enquiry</button>
                </form>
              </div>
            </div>
          </>
        )}
      </main>
    </>
  );
}
