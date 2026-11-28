import Link from 'next/link';

export default function EditorialArticle({ entry, backHref, backLabel }) {
  const paragraphs = entry.body.split(/\r?\n\s*\r?\n/).map((text) => text.trim()).filter(Boolean);
  const date = new Date(entry.published_at).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata',
  });

  return (
    <main style={{ background: '#FFFDFB' }}>
      <article style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 32px 110px' }}>
        <Link href={backHref} className="tm-link">← Back to {backLabel}</Link>
        <div style={{ fontFamily: 'Manrope,sans-serif', fontSize: '11.5px', letterSpacing: '0.26em', color: '#97713E', margin: '38px 0 20px' }}>
          {entry.category.toUpperCase()} · {date}
        </div>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: '52px', lineHeight: '1.08', color: '#2A1620', margin: '0 0 22px', fontWeight: '600', letterSpacing: '-0.015em' }}>{entry.title}</h1>
        <p style={{ fontFamily: 'Manrope,sans-serif', fontSize: '19px', lineHeight: '1.7', color: '#6B4E5E', margin: '0 0 42px' }}>{entry.summary}</p>
        {entry.image_filename && (
          <div className="editorial-article-cover">
            <img src={`/api/editorial-images/${encodeURIComponent(entry.image_filename)}`} alt={entry.title} />
          </div>
        )}
        <div style={{ fontFamily: 'Manrope,sans-serif', fontSize: '17px', lineHeight: '1.85', color: '#402832' }}>
          {paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
        </div>
      </article>
    </main>
  );
}
