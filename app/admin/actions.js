'use server';
import { randomUUID } from 'node:crypto';
import { mkdir, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { redirect } from 'next/navigation';
import { headers } from 'next/headers';
import { EDITORIAL_IMAGE_DIR, getDb, nowIso } from '@/lib/db';
import { EDITORIAL_KINDS } from '@/lib/editorial';
import { STATUSES } from '@/lib/config';
import { clean, clientIp, ipHash, rateLimit } from '@/lib/security';
import { clearAdmin, getAdmin, setAdmin, verifyPassword } from '@/lib/session';

const MAX_EDITORIAL_IMAGE_BYTES = 5 * 1024 * 1024;
const EDITORIAL_IMAGE_FILENAME = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\.(jpg|png|webp)$/;

async function storeEditorialImage(file) {
  if (!file) return { filename: null, invalid: false };
  if (typeof file !== 'object' || typeof file.arrayBuffer !== 'function') return { filename: null, invalid: true };
  if (file.size === 0) return { filename: null, invalid: false };
  if (file.size > MAX_EDITORIAL_IMAGE_BYTES) return { filename: null, invalid: true };

  const buffer = Buffer.from(await file.arrayBuffer());
  const type = file.type;
  const isJpeg = type === 'image/jpeg' && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff;
  const isPng = type === 'image/png' && buffer.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  const isWebp = type === 'image/webp'
    && buffer.toString('ascii', 0, 4) === 'RIFF'
    && buffer.toString('ascii', 8, 12) === 'WEBP';
  if (buffer.length !== file.size || (!isJpeg && !isPng && !isWebp)) {
    return { filename: null, invalid: true };
  }

  const extension = isJpeg ? 'jpg' : isPng ? 'png' : 'webp';
  const filename = `${randomUUID()}.${extension}`;
  await mkdir(EDITORIAL_IMAGE_DIR, { recursive: true });
  await writeFile(path.join(EDITORIAL_IMAGE_DIR, filename), buffer, { flag: 'wx' });
  return { filename, invalid: false };
}

async function removeEditorialImage(filename) {
  if (!filename) return;
  if (!EDITORIAL_IMAGE_FILENAME.test(filename)) {
    console.error('Skipped removal of an invalid editorial image filename.');
    return;
  }
  try {
    await unlink(path.join(EDITORIAL_IMAGE_DIR, filename));
  } catch (error) {
    if (error.code !== 'ENOENT') console.error('Failed to remove editorial image:', error);
  }
}

async function requireAdmin() {
  if (!(await getAdmin())) redirect('/admin/login');
}

function getEditorialConfig(kind) {
  return Object.hasOwn(EDITORIAL_KINDS, kind) ? EDITORIAL_KINDS[kind] : null;
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

export async function saveEditorialContent(formData) {
  await requireAdmin();
  const kind = String(formData.get('kind') || '');
  const config = getEditorialConfig(kind);
  if (!config) redirect('/admin');

  const rawId = String(formData.get('id') || '');
  const id = rawId ? Number(rawId) : 0;
  if (rawId && (!Number.isSafeInteger(id) || id < 1)) redirect(`${config.route}?error=invalid`);
  const title = clean(String(formData.get('title') || ''), 180);
  const category = clean(String(formData.get('category') || ''), 60);
  const summary = clean(String(formData.get('summary') || ''), 500);
  const body = clean(String(formData.get('body') || ''), 50000);
  const slug = clean(String(formData.get('slug') || ''), 120)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
  const published = formData.get('published') === '1' ? 1 : 0;
  const returnPath = `${config.route}${id ? `?edit=${id}` : '?new=1'}`;

  if (!title || !category || !summary || !body || !slug) redirect(`${returnPath}&error=invalid`);
  if (kind === 'news' && slug === 'tanumanasa-building-sovereign-multilingual-ai-for-bharat') redirect(`${returnPath}&error=slug`);

  const db = getDb();
  const duplicate = db.prepare('SELECT id FROM editorial_content WHERE kind = ? AND slug = ? AND id != ?').get(kind, slug, id);
  if (duplicate) redirect(`${returnPath}&error=slug`);

  const existing = id
    ? db.prepare('SELECT published_at, image_filename FROM editorial_content WHERE id = ? AND kind = ?').get(id, kind)
    : null;
  if (id && !existing) redirect(`${config.route}?error=not-found`);

  const imageUpload = kind === 'blog'
    ? await storeEditorialImage(formData.get('image'))
    : { filename: null, invalid: false };
  if (imageUpload.invalid) redirect(`${returnPath}&error=image`);

  const now = nowIso();
  const imageFilename = imageUpload.filename || existing?.image_filename || null;
  try {
    if (id) {
      const publishedAt = published ? existing.published_at || now : existing.published_at;
      db.prepare(`
        UPDATE editorial_content
        SET slug = ?, category = ?, title = ?, summary = ?, body = ?, image_filename = ?, published = ?, updated_at = ?, published_at = ?
        WHERE id = ? AND kind = ?
      `).run(slug, category, title, summary, body, imageFilename, published, now, publishedAt, id, kind);
    } else {
      db.prepare(`
        INSERT INTO editorial_content (kind, slug, category, title, summary, body, image_filename, published, created_at, updated_at, published_at)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `).run(kind, slug, category, title, summary, body, imageFilename, published, now, now, published ? now : null);
    }
  } catch (error) {
    await removeEditorialImage(imageUpload.filename);
    throw error;
  }

  if (imageUpload.filename && existing?.image_filename) await removeEditorialImage(existing.image_filename);
  redirect(`${config.route}?saved=1`);
}

export async function setEditorialPublished(formData) {
  await requireAdmin();
  const kind = String(formData.get('kind') || '');
  const config = getEditorialConfig(kind);
  const id = Number(formData.get('id'));
  if (!config || !Number.isSafeInteger(id) || id < 1) redirect('/admin');

  const published = formData.get('published') === '1' ? 1 : 0;
  const now = nowIso();
  const result = getDb().prepare(`
    UPDATE editorial_content
    SET published = ?, updated_at = ?, published_at = CASE WHEN ? = 1 AND published_at IS NULL THEN ? ELSE published_at END
    WHERE id = ? AND kind = ?
  `).run(published, now, published, now, id, kind);

  if (!result.changes) redirect(`${config.route}?error=not-found`);
  redirect(`${config.route}?saved=1`);
}

export async function deleteEditorialContent(formData) {
  await requireAdmin();
  const kind = String(formData.get('kind') || '');
  const config = getEditorialConfig(kind);
  const id = Number(formData.get('id'));
  if (!config || !Number.isSafeInteger(id) || id < 1) redirect('/admin');

  const db = getDb();
  const entry = db.prepare('SELECT image_filename FROM editorial_content WHERE id = ? AND kind = ?').get(id, kind);
  if (!entry) redirect(`${config.route}?error=not-found`);
  db.prepare('DELETE FROM editorial_content WHERE id = ? AND kind = ?').run(id, kind);
  await removeEditorialImage(entry.image_filename);
  redirect(`${config.route}?removed=1`);
}
