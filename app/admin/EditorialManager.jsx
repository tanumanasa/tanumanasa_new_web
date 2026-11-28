import Link from 'next/link';
import { FiEdit2, FiExternalLink, FiEye, FiEyeOff, FiFileText, FiTrash2 } from 'react-icons/fi';
import { redirect } from 'next/navigation';
import { getAdmin } from '@/lib/session';
import { getDb } from '@/lib/db';
import { EDITORIAL_KINDS, getEditorialEntries } from '@/lib/editorial';
import AdminNav, { fmtDate } from './AdminNav';
import ConfirmSubmitButton from './ConfirmSubmitButton';
import { deleteEditorialContent, saveEditorialContent, setEditorialPublished } from './actions';

const errorMessages = {
  invalid: 'Please complete every field and use a URL-safe slug.',
  slug: 'That slug is already in use for this section.',
  'not-found': 'The content entry could not be found.',
  image: 'Choose a JPEG, PNG, or WebP image smaller than 5 MB.',
};

export default async function EditorialManager({ kind, searchParams }) {
  if (!(await getAdmin())) redirect('/admin/login');
  const config = EDITORIAL_KINDS[kind];
  if (!config) throw new Error(`Unknown editorial content kind: ${kind}`);

  const sp = (await searchParams) || {};
  const db = getDb();
  const entries = getEditorialEntries(kind);
  const editingId = Number(sp.edit) || 0;
  const editing = editingId
    ? db.prepare('SELECT * FROM editorial_content WHERE id = ? AND kind = ?').get(editingId, kind)
    : null;
  const enquiries = db.prepare('SELECT COUNT(*) AS n FROM enquiries').get().n;
  const subscribers = db.prepare("SELECT COUNT(*) AS n FROM subscribers WHERE status = 'active'").get().n;
  const active = kind === 'blog' ? 'blogs' : 'newsroom';
  const showForm = sp.new === '1' || Boolean(editingId);

  return (
    <>
      <AdminNav active={active} enquiries={enquiries} subscribers={subscribers} />
      <main>
        {sp.saved && <p className="alert ok">Content saved.</p>}
        {sp.removed && <p className="alert ok">Content deleted.</p>}
        {sp.error && !showForm && <p className="alert err" role="alert">{errorMessages[sp.error] || 'Unable to complete that action.'}</p>}
        <div className="editorial-heading">
          <div>
            <h1>{config.label}</h1>
            <p className="muted">Create, edit and publish content on the public {kind === 'blog' ? 'Resources' : 'Newsroom'} page.</p>
          </div>
          <Link className="btn" href={`${config.route}?new=1`} scroll={false}>+ New {kind === 'blog' ? 'blog post' : 'news item'}</Link>
        </div>

        {entries.length ? (
          <div className="tablewrap editorial-tablewrap">
            <table className="editorial-table">
              <thead><tr><th>Title</th><th>Status</th><th>Updated</th><th>Actions</th></tr></thead>
              <tbody>
                {entries.map((entry) => {
                  const publicPath = `/${kind === 'blog' ? 'resources' : 'newsroom'}/${entry.slug}`;
                  return (
                    <tr key={entry.id}>
                      <td>
                        <div className="editorial-title-cell">
                          <span className="editorial-entry-icon"><FiFileText aria-hidden="true" /></span>
                          <span className="editorial-title-copy">
                            <b>{entry.title}</b>
                            {entry.published
                              ? <Link className="editorial-slug" href={publicPath} target="_blank" rel="noopener noreferrer">{publicPath}<FiExternalLink aria-hidden="true" /></Link>
                              : <span className="editorial-slug">{publicPath}</span>}
                          </span>
                        </div>
                      </td>
                      <td data-label="Status">
                        <span className={`editorial-status ${entry.published ? 'is-published' : 'is-draft'}`}>
                          <span className="editorial-status-dot" />{entry.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td data-label="Updated"><time dateTime={entry.updated_at}>{fmtDate(entry.updated_at)}</time></td>
                      <td data-label="Actions">
                        <div className="editorial-actions">
                          <Link className="editorial-action editorial-action-edit" href={`${config.route}?edit=${entry.id}`} scroll={false} aria-label={`Edit ${entry.title}`} title="Edit">
                            <FiEdit2 aria-hidden="true" /><span>Edit</span>
                          </Link>
                          <form action={setEditorialPublished}>
                            <input type="hidden" name="id" value={entry.id} />
                            <input type="hidden" name="kind" value={kind} />
                            <input type="hidden" name="published" value={entry.published ? '0' : '1'} />
                            <button
                              className={`editorial-action editorial-action-toggle ${entry.published ? '' : 'is-publish'}`}
                              type="submit"
                              aria-label={`${entry.published ? 'Unpublish' : 'Publish'} ${entry.title}`}
                              title={entry.published ? 'Unpublish' : 'Publish'}
                            >
                              {entry.published ? <FiEyeOff aria-hidden="true" /> : <FiEye aria-hidden="true" />}
                              <span>{entry.published ? 'Unpublish' : 'Publish'}</span>
                            </button>
                          </form>
                          <form action={deleteEditorialContent}>
                            <input type="hidden" name="id" value={entry.id} />
                            <input type="hidden" name="kind" value={kind} />
                            <ConfirmSubmitButton
                              className="editorial-action editorial-action-delete"
                              ariaLabel={`Delete ${entry.title}`}
                              confirmMessage={`Delete "${entry.title}"? This action cannot be undone.`}
                            >
                              <FiTrash2 aria-hidden="true" /><span>Delete</span>
                            </ConfirmSubmitButton>
                          </form>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <section className="editorial-empty">
            <div className="editorial-empty-icon"><FiFileText aria-hidden="true" /></div>
            <p className="editorial-empty-label">CONTENT LIBRARY</p>
            <h2>No {kind === 'blog' ? 'blog posts' : 'news items'} yet</h2>
            <p className="editorial-empty-copy">Add a title, summary, and article body to get started. Drafts stay private until you publish.</p>
            <Link className="btn" href={`${config.route}?new=1`} scroll={false}>+ Create your first {kind === 'blog' ? 'blog post' : 'news item'}</Link>
            <p className="editorial-empty-note">Existing curated cards remain visible on the public page.</p>
          </section>
        )}
      </main>
      {showForm && (
        <div className="editorial-modal-backdrop">
          <section className="card editorial-modal" role="dialog" aria-modal="true" aria-labelledby="editorial-modal-title">
            <div className="editorial-modal-heading">
              <h2 id="editorial-modal-title">{editing ? 'Edit content' : `New ${kind === 'blog' ? 'blog post' : 'news item'}`}</h2>
              <Link className="editorial-modal-close" href={config.route} aria-label="Close dialog">×</Link>
            </div>
            {sp.error && <p className="alert err" role="alert">{errorMessages[sp.error] || 'Unable to complete that action.'}</p>}
            {editingId > 0 && !editing && <p className="alert err">This entry was not found.</p>}
            <form action={saveEditorialContent} className="stack">
              <input type="hidden" name="kind" value={kind} />
              {editing && <input type="hidden" name="id" value={editing.id} />}
              <label htmlFor="editorial-title">Title</label>
              <input id="editorial-title" name="title" required maxLength={180} defaultValue={editing?.title || ''} />

              <label htmlFor="editorial-slug">URL slug</label>
              <input id="editorial-slug" name="slug" required maxLength={120} pattern="[A-Za-z0-9-]+" title="Use letters, numbers, and hyphens." defaultValue={editing?.slug || ''} />

              <label htmlFor="editorial-category">Category</label>
              <input id="editorial-category" name="category" required maxLength={60} defaultValue={editing?.category || config.category} />

              <label htmlFor="editorial-summary">Summary</label>
              <textarea id="editorial-summary" name="summary" required maxLength={500} rows={3} defaultValue={editing?.summary || ''} />

              {kind === 'blog' && (
                <>
                  {editing?.image_filename && (
                    <div className="editorial-image-preview">
                      <img src={`/api/editorial-images/${editing.image_filename}`} alt={`Current cover for ${editing.title}`} />
                      <span>Current cover image</span>
                    </div>
                  )}
                  <label htmlFor="editorial-image">Cover image <span className="muted">(JPEG, PNG or WebP · max 5 MB)</span></label>
                  <input id="editorial-image" name="image" type="file" accept="image/jpeg,image/png,image/webp" />
                  <p className="editorial-image-help">{editing?.image_filename ? 'Leave this blank to keep the current image.' : 'Optional. Add a cover image for the resource card and article page.'}</p>
                </>
              )}

              <label htmlFor="editorial-body">Article body <span className="muted">(plain text; separate paragraphs with a blank line)</span></label>
              <textarea id="editorial-body" name="body" required maxLength={50000} rows={12} defaultValue={editing?.body || ''} />

              <label className="editorial-publish">
                <input type="checkbox" name="published" value="1" defaultChecked={Boolean(editing?.published)} />
                Publish on the public site
              </label>

              <div className="editorial-form-actions">
                <button type="submit">Save content</button>
                <Link className="btn ghost" href={config.route}>Cancel</Link>
              </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
