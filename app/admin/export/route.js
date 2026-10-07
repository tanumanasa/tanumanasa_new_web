import { getAdmin } from '@/lib/session';
import { getDb } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const cell = (v) => {
  let s = v == null ? '' : String(v);
  if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; // spreadsheet formula-injection guard
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export async function GET(req) {
  if (!(await getAdmin())) return new Response('Unauthorized', { status: 401 });
  const type = new URL(req.url).searchParams.get('type') === 'subscribers' ? 'subscribers' : 'enquiries';
  const sql = type === 'subscribers'
    ? 'SELECT id, email, status, source, created_at FROM subscribers ORDER BY id DESC'
    : 'SELECT id, created_at, intent, status, name, organisation, email, phone, detail, message, email_sent, notes, page FROM enquiries ORDER BY id DESC';
  const rows = getDb().prepare(sql).all();
  const cols = rows[0] ? Object.keys(rows[0]) : [];
  const csv = '\uFEFF' + [cols.join(','), ...rows.map((r) => cols.map((c) => cell(r[c])).join(','))].join('\r\n');
  return new Response(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="tanumanasa-${type}-${new Date().toISOString().slice(0, 10)}.csv"`,
      'Cache-Control': 'no-store',
    },
  });
}
