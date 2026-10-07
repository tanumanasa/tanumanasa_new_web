import './admin.css';

export const metadata = { title: 'Admin · Tanumanasa Research', robots: { index: false, follow: false } };

export default function AdminLayout({ children }) {
  return <div className="adm">{children}</div>;
}
