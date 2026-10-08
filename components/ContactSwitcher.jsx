'use client';
import { useEffect, useState } from 'react';
import ContactForm from './ContactForm';

const LI = 'https://www.linkedin.com/company/tanumanasa/';
const INTENTS = [
  ['enterprise', 'Enterprise AI Consulting', 'Strategy, agents, cloud, adoption', 'Book an enterprise consultation', 'Use case you want to solve', 'e.g. Multilingual document search for our field teams'],
  ['demo', 'Product Demo', 'Antariksha.ai, Vichayan AI, AI Agents', 'Request a product demo', 'Product of interest', 'Antariksha.ai, Vichayan AI or Enterprise AI Agents'],
  ['partnership', 'Partnerships', 'Government, institutions, ecosystem', 'Explore a partnership', 'Organisation type / programme', 'e.g. State mission, PSU, ecosystem partner'],
  ['research', 'Research Collaboration', 'Universities, datasets, joint papers', 'Propose a research collaboration', 'Research area or languages', 'e.g. Odia speech datasets, evaluation methods'],
  ['startup', 'Startup Support', 'Ecosystem, incubation, co-building', 'Connect on startup support', 'Your startup and stage', 'e.g. Seed-stage agritech, Bhubaneswar'],
   ['media', 'Media Enquiries', 'Press, interviews, press kit', 'Reach the media desk', 'Publication and deadline', 'e.g. The Hindu, by Friday'],
];

export default function ContactSwitcher() {
  const [key, setKey] = useState('enterprise');
  const [prefill, setPrefill] = useState('');

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const k = p.get('intent');
    if (k && INTENTS.some((i) => i[0] === k)) setKey(k);
    const pre = p.get('role') || p.get('product');
    if (pre) setPrefill(pre.slice(0, 200));
  }, []);

  const cur = INTENTS.find((i) => i[0] === key);

  return (
    <div style={{ background: '#F5ECE2' }}>
      <div
        style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 32px 100px', display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 56, alignItems: 'start' }}
        data-cols="2" data-wrap="" data-sec=""
      >
        <div style={{ minWidth: 0 }}>
          <div id="intent-label" style={{ fontSize: '11.5px', letterSpacing: '0.24em', color: '#8A6534', marginBottom: 18, fontWeight: 600 }}>I&apos;M HERE FOR…</div>
          <div className="tm-intents" role="group" aria-labelledby="intent-label">
            {INTENTS.map(([k, t, s]) => (
              <button key={k} type="button" className="tm-intent" aria-pressed={k === key} onClick={() => setKey(k)}>
                <span className="dot" aria-hidden="true" />
                <span><span className="t">{t}</span><span className="s">{s}</span></span>
              </button>
            ))}
          </div>
          <div style={{ marginTop: 36, borderTop: '1px solid #E4D3C3', paddingTop: 26 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#8A6534', marginBottom: 12, fontWeight: 600 }}>COMPANY DETAILS</div>
            <address style={{ fontStyle: 'normal', fontSize: '14.5px', lineHeight: 1.75, color: '#6B4E5E' }}>
              Tanumanasa Research Pvt. Ltd.<br />3rd Floor, Tower-A<br />Odisha Startup Incubation Centre (O-HUB)<br />SEZ Road, Bhubaneswar 751024<br />Odisha, India<br />
              <a href="mailto:hello@tanumanasa.com" style={{ fontWeight: 600 }}>contact@tanumanasa.com</a>
              {' · '}
              <a href={LI} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600 }}>LinkedIn<span className="sr-only"> (opens in a new tab)</span></a>
            </address>
          </div>
        </div>
        <div style={{ background: '#fff', border: '1px solid #EFE6DB', borderRadius: 16, padding: '40px 36px', minWidth: 0 }} data-formcard="">
          <div style={{ fontSize: 11, letterSpacing: '0.2em', color: '#920D54', marginBottom: 6, textTransform: 'uppercase', fontWeight: 700 }} aria-live="polite">
            Enquiry · {cur[1]}
          </div>
          <h2 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 27, lineHeight: 1.25, color: '#2A1620', margin: '0 0 24px', fontWeight: 600 }}>{cur[3]}</h2>
          <ContactForm id="ct" intent={key} detailLabel={cur[4]} detailPlaceholder={cur[5]} detailValue={prefill} rows={5} />
        </div>
      </div>
    </div>
  );
}
