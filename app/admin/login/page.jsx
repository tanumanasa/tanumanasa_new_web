import { redirect } from 'next/navigation';
import { login } from '../actions';
import { adminConfigured, getAdmin } from '@/lib/session';

export const dynamic = 'force-dynamic';

export default async function LoginPage({ searchParams }) {
  if (await getAdmin()) redirect('/admin');
  const sp = await searchParams;
  const error = sp?.error === 'locked' ? 'Too many attempts. Try again in 15 minutes.' : sp?.error ? 'Incorrect username or password.' : '';
  return (
    <div className="auth">
      <p><img src="/assets/logo-76.png" alt="" width={48} height={48} /></p>
      <h1>Sign in</h1>
      <p className="muted">Tanumanasa website admin</p>
      {!adminConfigured() ? (
        <div className="alert err">
          Admin is not configured yet. Set <code>ADMIN_USER</code> and <code>ADMIN_PASSWORD_HASH</code> in your environment
          (run <code>npm run hash-password</code> to create the hash), then restart the server.
        </div>
      ) : (
        <>
          {error && <p className="alert err" role="alert">{error}</p>}
          <form action={login}>
            <label htmlFor="u">Username</label>
            <input id="u" name="user" required autoComplete="username" />
            <label htmlFor="p">Password</label>
            <input id="p" name="password" type="password" required autoComplete="current-password" />
            <button type="submit">Sign in</button>
          </form>
        </>
      )}
    </div>
  );
}
