'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  ['/about', 'About'],
  ['/antariksha', 'Antariksha.ai'],
  'PRODUCTS',
  ['/research', 'Research'],
  ['/enterprise', 'Enterprise'],
  ['/industries', 'Industries'],
  ['/careers', 'Careers'],
  ['/vision', 'Vision'],
];
const PRODUCTS = [
  ['/antariksha', 'Antariksha.ai', "Foundation models for India's languages"],
  ['/agents', 'Enterprise AI Agents', 'Production agents for real workflows'],
  ['/products', 'All products', 'Compare the product family'],
];
const MOBILE_PRODUCTS = PRODUCTS.filter(([href]) => href !== '/agents');
const PRODUCT_PATHS = ['/products', '/agents'];
const COMPANY = [
  ['/careers', 'Careers'],
  ['/resources', 'Resources'],
  ['/contact', 'Contact'],
];

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    setMobileProductsOpen(PRODUCT_PATHS.includes(path));
    setMobileCompanyOpen(COMPANY.some(([href]) => href === path));
  }, [path]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onResize = () => { if (window.innerWidth > 1100) setOpen(false); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); document.body.style.overflow = ''; };
  }, [open]);
  useEffect(() => {
    let previousY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      if (open || currentY <= 8) {
        setHeaderHidden(false);
      } else if (currentY > previousY + 2) {
        setHeaderHidden(true);
      } else if (currentY < previousY - 2) {
        setHeaderHidden(false);
      }
      previousY = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [open]);

  const cur = (h) => (path === h ? 'page' : undefined);
  const prodCur = PRODUCT_PATHS.includes(path) ? 'page' : undefined;

  return (
    <header className={`tm-header${headerHidden ? ' tm-header-hidden' : ''}`}>
      <div className="tm-header-in">
        <Link href="/" className="tm-brand" aria-label="Tanumanasa Research — home">
          <img src="/assets/logo-76.png" alt="" width={38} height={38} />
          <span><span className="tm-brand-name">TANUMANASA</span><span className="tm-brand-sub">RESEARCH</span></span>
        </Link>

        <nav className="tm-nav" aria-label="Main">
          {NAV.map((n) =>
            n === 'PRODUCTS' ? (
              <div className="tm-dd" key="products">
                <Link href="/products" aria-current={prodCur}>Products</Link>
                <div className="tm-dd-menu">
                  {PRODUCTS.map(([h, t, s]) => (
                    <Link key={h} href={h}>{t}<small>{s}</small></Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={n[0]} href={n[0]} aria-current={cur(n[0])}>{n[1]}</Link>
            )
          )}
        </nav>

        <Link href="/contact?intent=enterprise" className="tm-btn tm-cta">Book a consultation</Link>

        <button
          type="button" className="tm-burger" aria-expanded={open} aria-controls="tm-mobile-nav" onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <span className="bars" aria-hidden="true" />
        </button>
      </div>

      <div id="tm-mobile-nav" className={`tm-mnav${open ? ' tm-mnav-open' : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          <Link href="/" aria-current={cur('/')}>Home</Link>
          <Link href="/about" aria-current={cur('/about')}>About</Link>
          <div className="mobile-group">
            <button
              type="button"
              className="lbl mobile-group-toggle"
              aria-expanded={mobileProductsOpen}
              aria-controls="tm-mobile-products"
              onClick={() => setMobileProductsOpen((value) => !value)}
            >
              PRODUCTS<span aria-hidden="true" />
            </button>
            <div id="tm-mobile-products" className={`sub${mobileProductsOpen ? ' sub-open' : ''}`} aria-hidden={!mobileProductsOpen}>
              {MOBILE_PRODUCTS.map(([h, t]) => <Link key={h} href={h} aria-current={cur(h)}>{t}</Link>)}
            </div>
          </div>
          <div className="mobile-group">
            <button
              type="button"
              className="lbl mobile-group-toggle"
              aria-expanded={mobileCompanyOpen}
              aria-controls="tm-mobile-company"
              onClick={() => setMobileCompanyOpen((value) => !value)}
            >
              COMPANY<span aria-hidden="true" />
            </button>
            <div id="tm-mobile-company" className={`sub${mobileCompanyOpen ? ' sub-open' : ''}`} aria-hidden={!mobileCompanyOpen}>
              {COMPANY.map(([h, t]) => <Link key={h} href={h} aria-current={cur(h)}>{t}</Link>)}
            </div>
          </div>
          <Link href="/contact?intent=enterprise" className="tm-btn">Book a consultation</Link>
        </nav>
      </div>
    </header>
  );
}
