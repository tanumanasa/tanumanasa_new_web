/* Browser-side helpers shared by every form */
export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const PHONE_RE = /^[+0-9 ()\-]{7,20}$/;
export const FALLBACK_EMAIL = 'hello@tanumanasa.com';

let tokenPromise = null;
export function getToken() {
  if (!tokenPromise) {
    tokenPromise = fetch('/api/csrf', { cache: 'no-store', credentials: 'same-origin' })
      .then((r) => (r.ok ? r.json() : {}))
      .then((j) => j.token || '')
      .catch(() => { tokenPromise = null; return ''; });
  }
  return tokenPromise;
}

export async function postJSON(url, data) {
  try {
    const token = await getToken();
    const res = await fetch(url, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'X-CSRF-Token': token },
      body: JSON.stringify(data),
    });
    const j = await res.json().catch(() => ({}));
    if (res.status === 403) tokenPromise = null;
    if (!res.ok || !j.ok) {
      return { ok: false, errors: j.errors, message: j.message || 'Something went wrong. Please try again in a moment.' };
    }
    return j;
  } catch {
    return { ok: false, message: `We could not reach the server. Check your connection and try again, or email ${FALLBACK_EMAIL}.` };
  }
}

export function checkField(kind, value, { required = false, min = 0 } = {}) {
  const v = typeof value === 'string' ? value.trim() : value;
  if (required && !v) return kind === 'checkbox' ? 'Please tick this box to continue.' : 'This field is required.';
  if (!v) return '';
  if (kind === 'email' && !EMAIL_RE.test(v)) return 'Enter a valid email address.';
  if (kind === 'tel' && !PHONE_RE.test(v)) return 'Enter a valid phone number (digits, spaces, + and - only).';
  if (min && v.length < min) return `Please write at least ${min} characters.`;
  return '';
}
