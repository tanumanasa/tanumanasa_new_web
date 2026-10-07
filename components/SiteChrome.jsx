'use client';
import { usePathname } from 'next/navigation';
import { FaArrowUp } from 'react-icons/fa6';

/* Renders the public site chrome everywhere except the private /admin area. */
export default function SiteChrome({ header, footer, effects, children }) {
  const path = usePathname() || '/';
  if (path === '/admin' || path.startsWith('/admin/')) return children;
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      {header}
      <main id="main">{children}</main>
      {footer}
      {effects}
      <button
        type="button"
        className="tm-top-button"
        aria-label="Scroll to hero section"
        title="Scroll to hero section"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FaArrowUp aria-hidden="true" focusable="false" />
      </button>
    </>
  );
}
