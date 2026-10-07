'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { checkField, getToken, postJSON } from '@/lib/client-form';

const RULES = {
  name: ['text', { required: true, min: 2 }],
  email: ['email', { required: true }],
  phone: ['tel', {}],
  message: ['text', { required: true, min: 10 }],
  consent: ['checkbox', { required: true }],
};
const blank = (detail = '') => ({ name: '', organisation: '', email: '', phone: '', detail, message: '', consent: false, contactFax: '' });

function Field({ id, label, required, error, children, labelId }) {
  return (
    <div className="tm-field">
      <label htmlFor={id} id={labelId}>
        {label}
        {required && <span className="req" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && <span className="tm-err" id={id + '-err'}>{error}</span>}
    </div>
  );
}

export default function ContactForm({
  id = 'cf',
  intent = 'enterprise',
  detailLabel = 'Detail',
  detailPlaceholder = '',
  detailValue = '',
  messageLabel = 'Your message',
  buttonLabel = 'Send enquiry',
  rows = 4,
}) {
  const [v, setV] = useState(() => blank(detailValue));
  const [err, setErr] = useState({});
  const [status, setStatus] = useState(null);
  const [busy, setBusy] = useState(false);
  const refs = useRef({});

  useEffect(() => { getToken(); }, []);
  useEffect(() => { if (detailValue) setV((s) => ({ ...s, detail: detailValue })); }, [detailValue]);
  useEffect(() => { setStatus(null); }, [intent]);

  const check = (k, val) => (RULES[k] ? checkField(RULES[k][0], val, RULES[k][1]) : '');
  const bind = (k) => ({
    id: `${id}-${k}`,
    name: k,
    ref: (el) => { refs.current[k] = el; },
    'aria-invalid': err[k] ? 'true' : 'false',
    'aria-describedby': err[k] ? `${id}-${k}-err` : undefined,
    onChange: (e) => {
      const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
      setV((s) => ({ ...s, [k]: val }));
      if (err[k]) setErr((x) => ({ ...x, [k]: check(k, val) }));
    },
    onBlur: (e) => { if (err[k]) setErr((x) => ({ ...x, [k]: check(k, e.target.type === 'checkbox' ? e.target.checked : e.target.value) })); },
  });

  async function onSubmit(e) {
    e.preventDefault();
    if (busy) return; // no double submits
    const errs = {};
    for (const k of Object.keys(RULES)) { const m = check(k, v[k]); if (m) errs[k] = m; }
    setErr(errs);
    const first = Object.keys(errs)[0];
    if (first) {
      refs.current[first]?.focus();
      setStatus({ state: 'error', text: 'Please check the highlighted fields.' });
      return;
    }
    setBusy(true);
    setStatus(null);
    const r = await postJSON('/api/contact', { ...v, intent, page: window.location.pathname });
    setBusy(false);
    if (r.ok) {
      setV(blank(detailValue));
      setErr({});
      setStatus({ state: 'ok', text: r.message });
    } else {
      if (r.errors) setErr(r.errors);
      setStatus({ state: 'error', text: r.message });
    }
  }

  return (
    <form className="tm-form" onSubmit={onSubmit} noValidate>
      <div className="tm-hp" aria-hidden="true">
        <label htmlFor={`${id}-contact-fax`}>Leave this field empty</label>
        <input id={`${id}-contact-fax`} name="contact_fax" type="text" tabIndex={-1} autoComplete="off" value={v.contactFax} onChange={(e) => setV((s) => ({ ...s, contactFax: e.target.value }))} />
      </div>
      <div className="tm-row">
        <Field id={`${id}-name`} label="Full name" required error={err.name}>
          <input {...bind('name')} className="tm-input" type="text" autoComplete="name" maxLength={120} value={v.name} required />
        </Field>
        <Field id={`${id}-organisation`} label="Organisation">
          <input {...bind('organisation')} className="tm-input" type="text" autoComplete="organization" maxLength={160} value={v.organisation} />
        </Field>
      </div>
      <div className="tm-row">
        <Field id={`${id}-email`} label="Work email" required error={err.email}>
          <input {...bind('email')} className="tm-input" type="email" autoComplete="email" maxLength={190} value={v.email} required />
        </Field>
        <Field id={`${id}-phone`} label="Phone" error={err.phone}>
          <input {...bind('phone')} className="tm-input" type="tel" autoComplete="tel" maxLength={25} placeholder="+91 …" value={v.phone} />
        </Field>
      </div>
      <Field id={`${id}-detail`} label={detailLabel}>
        <input {...bind('detail')} className="tm-input" type="text" maxLength={300} placeholder={detailPlaceholder} value={v.detail} />
      </Field>
      <Field id={`${id}-message`} label={messageLabel} required error={err.message}>
        <textarea {...bind('message')} className="tm-input" rows={rows} minLength={10} maxLength={5000} value={v.message} required />
      </Field>
      <label className="tm-check">
        <input {...bind('consent')} type="checkbox" checked={v.consent} required />
        <span>
          I agree to Tanumanasa storing my details to respond to this enquiry, as described in the <Link href="/privacy">Privacy Policy</Link>.
          <span className="req" aria-hidden="true"> *</span>
        </span>
        {err.consent && <span className="tm-err" id={`${id}-consent-err`}>{err.consent}</span>}
      </label>
      <button type="submit" className="tm-btn tm-btn-lg" disabled={busy}>{busy ? 'Sending…' : buttonLabel}</button>
      <p className="tm-status" role="status" aria-live="polite" data-state={status?.state}>{status?.text || ''}</p>
     </form>
  );
}
