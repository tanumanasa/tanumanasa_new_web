'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { CONTENT } from '@/lib/content';

const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

function Card({ item }) {
  const inner = (
    <>
      <div className="meta">
        <span className="cat">{item.cat}</span>
        {item.date && <span className="date">{item.date}</span>}
        {item.meta && <span className="date">{item.meta}</span>}
      </div>
      <h3>{item.title}</h3>
      <p>{item.blurb}</p>
      {item.url && <span className="go">{(item.cta || 'Read more') + ' →'}</span>}
    </>
  );
  if (!item.url) return <article className="tm-card">{inner}</article>;
  if (/^https?:/i.test(item.url)) {
    return <a className="tm-card" href={item.url} target="_blank" rel="noopener noreferrer">{inner}<span className="sr-only"> (opens in a new tab)</span></a>;
  }
  return <Link className="tm-card" href={item.url}>{inner}</Link>;
}

export default function CardList({ kind, label = 'Filter' }) {
  const items = CONTENT[kind] || [];
  const cats = useMemo(() => ['All', ...Array.from(new Set(items.map((i) => i.cat)))], [items]);
  const [active, setActive] = useState('All');

  useEffect(() => {
    const fromHash = () => cats.find((c) => slug(c) === window.location.hash.slice(1));
    const m = fromHash();
    if (m) setActive(m);
    const onHash = () => { const x = fromHash(); if (x) setActive(x); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [cats]);

  function choose(c) {
    setActive(c);
    const url = c === 'All' ? window.location.pathname + window.location.search : '#' + slug(c);
    window.history.replaceState(null, '', url);
  }

  const list = active === 'All' ? items : items.filter((i) => i.cat === active);

  return (
    <>
      <div className="tm-filters" role="toolbar" aria-label={label}>
        {cats.map((c) => (
          <button key={c} type="button" className="tm-chip" aria-pressed={c === active} onClick={() => choose(c)}>{c}</button>
        ))}
      </div>
      <div className="tm-grid3" style={{ marginTop: 36 }} aria-live="polite">
        {list.length ? list.map((i) => <Card key={i.title} item={i} />) : <p className="tm-empty">Nothing here yet — check back soon.</p>}
      </div>
    </>
  );
}
