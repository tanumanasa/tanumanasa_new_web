import Link from 'next/link';
import { logout } from './actions';

export default function AdminNav({ active, enquiries, subscribers }) {
  return (
    <header className="adm-bar">
      <img src="/assets/logo-76.png" alt="" width={34} height={34} />
      <b>TANUMANASA</b><span className="muted">Admin</span>
      <nav aria-label="Admin">
        <Link className={`tab ${active === 'all' ? 'on' : ''}`} href="/admin/submissions">All submissions</Link>
        <Link className={`tab ${active === 'enquiries' ? 'on' : ''}`} href="/admin">Enquiries ({enquiries})</Link>
        <Link className={`tab ${active === 'subscribers' ? 'on' : ''}`} href="/admin/subscribers">Subscribers ({subscribers})</Link>
        <a className="tab" href="/" target="_blank" rel="noopener noreferrer">View site</a>
        <form action={logout}><button className="ghost" type="submit">Sign out</button></form>
      </nav>
    </header>
  );
}

export function fmtDate(iso) {
  const d = new Date(iso);
  return isNaN(d) ? iso : d.toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' });
}
