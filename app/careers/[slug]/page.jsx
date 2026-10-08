import { notFound } from 'next/navigation';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import { getJob, JOBS } from '@/lib/jobs';
import { pageMeta } from '@/lib/seo';

export function generateStaticParams() {
  return JOBS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const job = getJob(params.slug);
  if (!job) return {};
  return pageMeta({
    title: `${job.title} | Careers at Tanumanasa`,
    description: `${job.summary}. Apply to join Tanumanasa Research.`,
    path: `/careers/${job.slug}`,
  });
}

export default function JobPage({ params }) {
  const job = getJob(params.slug);
  if (!job) notFound();

  return (
    <main style={{ background: '#FFFDFB' }}>
      <section style={{ background: '#F5ECE2', borderBottom: '1px solid #EFE6DB' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '100px 32px 80px' }}>
          <Link href="/careers" className="tm-link">← All open positions</Link>
          <div style={{ fontFamily: 'Manrope,sans-serif', fontSize: 11.5, letterSpacing: '.24em', color: '#97713E', margin: '28px 0 16px' }}>{job.category.toUpperCase()}</div>
          <h1 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 52, lineHeight: 1.1, color: '#2A1620', margin: '0 0 18px', maxWidth: 800 }}>{job.title}</h1>
          <p style={{ fontFamily: 'Manrope,sans-serif', fontSize: 18, lineHeight: 1.65, color: '#6B4E5E', margin: 0, maxWidth: 700 }}>{job.summary}</p>
          <div style={{ fontFamily: 'Manrope,sans-serif', fontSize: 13, color: '#75606C', marginTop: 24 }}>{job.location} · {job.type}</div>
        </div>
      </section>
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 32px 110px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }} data-cols="2" data-wrap="" data-sec="">
        <div style={{ fontFamily: 'Manrope,sans-serif', color: '#6B4E5E', lineHeight: 1.75 }}>
          {job.introduction?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {job.languages && (
            <>
              <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#2A1620', fontSize: 30, margin: '46px 0 18px' }}>Languages of interest</h2>
              <ul>{job.languages.map((language) => <li key={language}>{language}</li>)}</ul>
            </>
          )}
          <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#2A1620', fontSize: 30, margin: '0 0 18px' }}>What you&apos;ll do</h2>
          <ul>{job.duties.map((item) => <li key={item}>{item}</li>)}</ul>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", color: '#2A1620', fontSize: 30, margin: '46px 0 18px' }}>What you&apos;ll bring</h2>
          <ul>{job.requirements.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div style={{ background: '#fff', border: '1px solid #EFE6DB', borderRadius: 16, padding: '36px 32px' }} data-formcard="">
          <div style={{ fontFamily: 'Manrope,sans-serif', fontSize: 11, letterSpacing: '.2em', color: '#920D54', marginBottom: 8 }}>APPLICATION</div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 28, color: '#2A1620', margin: '0 0 22px' }}>Apply for this role</h2>
          <ContactForm
            id={`job-${job.slug}`}
            intent="careers"
            detailLabel="Role"
            detailValue={job.title}
            detailPlaceholder={job.title}
            messageLabel="Application note (include a CV, LinkedIn or portfolio link)"
            buttonLabel="Submit application"
            rows={6}
          />
        </div>
      </section>
    </main>
  );
}
