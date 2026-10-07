'use server';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { getDb } from '@/lib/db';
import { STATUSES } from '@/lib/config';
import { clean, clientIp, ipHash, rateLimit } from '@/lib/security';
import { clearAdmin, getAdmin, setAdmin, verifyPassword } from '@/lib/session';

async function requireAdmin() {
  if (!(await getAdmin())) redirect('/admin/login');
}

export async function login(formData) {
  const ip = clientIp(await headers());
  if (!rateLimit(ipHash(ip), 'admin_login', 8, 900)) redirect('/admin/login?error=locked');
  const user = String(formData.get('user') || '');
  const pass = String(formData.get('password') || '');
  if (!verifyPassword(user, pass)) redirect('/admin/login?error=1');
  await setAdmin(user);
  redirect('/admin');
}

export async function logout() {
  await clearAdmin();
  redirect('/admin/login');
}

export async function updateEnquiry(formData) {
  await requireAdmin();
  const id = Number(formData.get('id'));
  const status = String(formData.get('status') || '');
  if (!STATUSES[status] || !id) redirect('/admin');
  getDb().prepare('UPDATE enquiries SET status = ?, notes = ? WHERE id = ?').run(status, clean(String(formData.get('notes') || ''), 4000), id);
  redirect(`/admin/enquiry?id=${id}&saved=1`);
}

export async function deleteEnquiry(formData) {
  await requireAdmin();
  getDb().prepare('DELETE FROM enquiries WHERE id = ?').run(Number(formData.get('id')));
  redirect('/admin?deleted=1');
}

export async function removeSubscriber(formData) {
  await requireAdmin();
  getDb().prepare('DELETE FROM subscribers WHERE id = ?').run(Number(formData.get('id')));
  redirect('/admin/subscribers?removed=1');
}
