'use client';
import { useEffect, useState } from 'react';
import { checkField, getToken, postJSON } from '@/lib/client-form';

export default function SubscribeForm({ id = 'sub', source = 'website', hideLabel = false }) {
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => { getToken(); }, []);

  async function onSubmit(e) {
    e.preventDefault();
    if (busy) return;
    const m = checkField('email', email, { required: true });
    setError(m);
    if (m) { setStatus({ state: 'error', text: m }); e.currentTarget.querySelector('input[type=email]')?.focus(); return; }
    setBusy(true);
    setStatus(null);
    const r = await postJSON('/api/subscribe', { email, source, website: hp });
    setBusy(false);
    if (r.ok) { setEmail(''); setStatus({ state: 'ok', text: r.message }); }
    else setStatus({ state: 'error', text: r.message });
  }

  return (
    <form className="tm-form" onSubmit={onSubmit} noValidate style={{ gap: 8 }}>
      <div className="tm-hp" aria-hidden="true">
        <label htmlFor={`${id}-website`}>Leave this field empty</label>
        <input id={`${id}-website`} type="text" tabIndex={-1} autoComplete="off" value={hp} onChange={(e) => setHp(e.target.value)} />
      </div>
      <label htmlFor={`${id}-email`} className={hideLabel ? 'sr-only' : 'tm-fh'} style={hideLabel ? undefined : { margin: 0 }}>
        {hideLabel ? 'Email address' : 'NEWSLETTER'}
      </label>
      <div className="tm-sub">
        <input
          id={`${id}-email`} name="email" type="email" className="tm-input" required autoComplete="email" placeholder="you@organisation.in"
          value={email} onChange={(e) => { setEmail(e.target.value); if (error) setError(''); }} aria-invalid={error ? 'true' : 'false'}
        />
        <button type="submit" className="tm-btn" disabled={busy}>{busy ? '…' : 'Subscribe'}</button>
      </div>
      <p className="tm-status" role="status" aria-live="polite" data-state={status?.state}>{status?.text || ''}</p>
    </form>
  );
}
