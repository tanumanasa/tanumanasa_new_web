import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getAdmin } from '@/lib/session';
import { getDb } from '@/lib/db';
import { INTENTS, STATUSES } from '@/lib/config';
import AdminNav, { fmtDate } from './AdminNav';

export const dynamic = 'force-dynamic';
const PER = 50;

export default async function AdminHome({ searchParams }) {
  if (!(await getAdmin())) redirect('/admin/login');
  const sp = (await searchParams) || {};
  const db = getDb();

  const counts = { all: 0 };
  for (const k of Object.keys(STATUSES)) counts[k] = 0;
  for (const r of db.prepare('SELECT status, COUNT(*) AS n FROM enquiries GROUP BY status').all()) { counts[r.status] = r.n; counts.all += r.n; }
  const subs = db.prepare("SELECT COUNT(*) AS n FROM subscribers WHERE status = 'active'").get().n;

  const fIntent = INTENTS[sp.intent] ? sp.intent : '';
  const fStatus = STATUSES[sp.status] ? sp.status : '';
  const q = String(sp.q || '').slice(0, 100);
  const page = Math.max(1, parseInt(sp.p || '1', 10) || 1);

  const where = [];
  const args = [];
  if (fIntent) { where.push('intent = ?'); args.push(fIntent); }
  if (fStatus) { where.push('status = ?'); args.push(fStatus); }
  if (q) { where.push('(name LIKE ? OR email LIKE ? OR organisation LIKE ? OR message LIKE ?)'); args.push(`%${q}%`, `%${q}%`, `%${q}%`, `%${q}%`); }
  const w = where.length ? 'WHERE ' + where.join(' AND ') : '';
  const total = db.prepare(`SELECT COUNT(*) AS n FROM enquiries ${w}`).get(...args).n;
  const list = db.prepare(`SELECT id, created_at, intent, name, organisation, email, status, email_sent FROM enquiries ${w} ORDER BY id DESC LIMIT ${PER} OFFSET ${(page - 1) * PER}`).all(...args);
  const pages = Math.max(1, Math.ceil(total / PER));
  const qs = (over) => '?' + new URLSearchParams({ ...(fIntent && { intent: fIntent }), ...(fStatus && { status: fStatus }), ...(q && { q }), ...over }).toString();

  return (
    <>
      <AdminNav active="enquiries" enquiries={counts.all} subscribers={subs} />
      <main>
        {sp.deleted && <p className="alert ok">Enquiry deleted.</p>}
        <h1>Enquiries</h1>
        <div className="stats">
          <Link className="stat" href="/admin"><b>{counts.all}</b><span>All</span></Link>
          {Object.entries(STATUSES).map(([k, v]) => <Link key={k} className="stat" href={`/admin?status=${k}`}><b>{counts[k]}</b><span>{v}</span></Link>)}
        </div>
        <form className="filters" method="get">
          <select name="intent" defaultValue={fIntent} aria-label="Enquiry type">
            <option value="">All types</option>
            {Object.entries(INTENTS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
          <select name="status" defaultValue={fStatus} aria-label="Status">
            <option value="">Any status</option>
            {Object.entries(STATUSES).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
          </select>
          <input name="q" defaultValue={q} placeholder="Search name, email, message" aria-label="Search" />
          <button type="submit">Filter</button>
          <a className="btn ghost" href="/admin/export?type=enquiries">Export CSV</a>
        </form>
        <div className="tablewrap">
          <table>
            <thead><tr><th>#</th><th>Received</th><th>Type</th><th>From</th><th>Status</th><th>Email</th></tr></thead>
            <tbody>
              {!list.length && <tr><td colSpan={6} className="muted">No enquiries yet.</td></tr>}
              {list.map((r, index) => (
                <tr key={r.id}>
                  <td><Link href={`/admin/enquiry?id=${r.id}`}>#{(page - 1) * PER + index + 1}</Link></td>
                  <td>{fmtDate(r.created_at)}</td>
                  <td>{INTENTS[r.intent] || r.intent}</td>
                  <td><Link href={`/admin/enquiry?id=${r.id}`}><b>{r.name}</b></Link><br /><span className="muted">{r.email}{r.organisation ? ` · ${r.organisation}` : ''}</span></td>
                  <td><span className={`pill s-${r.status}`}>{STATUSES[r.status] || r.status}</span></td>
                  <td>{r.email_sent ? 'Sent' : <span className="muted">Not sent</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {pages > 1 && (
          <div className="pager">
            {page > 1 && <Link className="btn ghost" href={qs({ p: page - 1 })}>← Newer</Link>}
            <span className="muted">Page {page} of {pages}</span>
            {page < pages && <Link className="btn ghost" href={qs({ p: page + 1 })}>Older →</Link>}
          </div>
        )}
      </main>
    </>
  );
}
