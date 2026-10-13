import './admin.css';

export const metadata = {
  title: 'Admin · Tanumanasa Research',
  description: 'Private administration area for managing Tanumanasa Research website enquiries and newsletter subscribers.',
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }) {
  return <div className="adm">{children}</div>;
}
