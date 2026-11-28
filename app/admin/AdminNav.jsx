import Link from 'next/link';
import { FiBookOpen, FiExternalLink, FiHome, FiInbox, FiLogOut, FiRadio, FiUsers } from 'react-icons/fi';
import AdminMenuDropdown from './AdminMenuDropdown';
import { logout } from './actions';

export default function AdminNav({ active, enquiries, subscribers }) {
  return (
    <aside className="adm-bar">
      <Link className="adm-brand" href="/admin" aria-label="Tanumanasa Admin home">
        <img src="/assets/logo.png" alt="" width={38} height={38} />
        <span><b>TANUMANASA</b><small>ADMIN CONSOLE</small></span>
      </Link>

      <AdminMenuDropdown>
        <span className="adm-nav-label">WORKSPACE</span>
        <nav className="adm-nav" aria-label="Admin">
          <Link className={`adm-nav-item ${active === 'enquiries' ? 'on' : ''}`} href="/admin" aria-current={active === 'enquiries' ? 'page' : undefined}>
            <FiHome aria-hidden="true" /><span>Dashboard</span>
          </Link>
          <Link className={`adm-nav-item ${active === 'all' ? 'on' : ''}`} href="/admin/submissions" aria-current={active === 'all' ? 'page' : undefined}>
            <FiInbox aria-hidden="true" /><span>All submissions</span><span className="adm-count">{enquiries + subscribers}</span>
          </Link>
          <Link className={`adm-nav-item ${active === 'subscribers' ? 'on' : ''}`} href="/admin/subscribers" aria-current={active === 'subscribers' ? 'page' : undefined}>
            <FiUsers aria-hidden="true" /><span>Subscribers</span><span className="adm-count">{subscribers}</span>
          </Link>
        </nav>

        <span className="adm-nav-label adm-nav-label-secondary">PUBLISHING</span>
        <nav className="adm-nav" aria-label="Content management">
          <Link className={`adm-nav-item ${active === 'blogs' ? 'on' : ''}`} href="/admin/blogs" aria-current={active === 'blogs' ? 'page' : undefined}>
            <FiBookOpen aria-hidden="true" /><span>Blogs</span>
          </Link>
          <Link className={`adm-nav-item ${active === 'newsroom' ? 'on' : ''}`} href="/admin/newsroom" aria-current={active === 'newsroom' ? 'page' : undefined}>
            <FiRadio aria-hidden="true" /><span>Newsroom</span>
          </Link>
        </nav>

        <div className="adm-nav-bottom">
          <a className="adm-nav-item" href="/" target="_blank" rel="noopener noreferrer">
            <FiExternalLink aria-hidden="true" /><span>View website</span>
          </a>
          <form action={logout}>
            <button className="adm-nav-item adm-signout" type="submit"><FiLogOut aria-hidden="true" /><span>Sign out</span></button>
          </form>
        </div>
      </AdminMenuDropdown>
    </aside>
  );
}

export function fmtDate(iso) {
  const d = new Date(iso);
  return isNaN(d) ? iso : d.toLocaleString('en-IN', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' });
}
