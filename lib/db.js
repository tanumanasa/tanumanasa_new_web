import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';

export const DATA_DIR = path.resolve(process.env.DATA_DIR || path.join(process.cwd(), 'data'));

const SCHEMA = `
CREATE TABLE IF NOT EXISTS enquiries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  created_at TEXT NOT NULL,
  intent TEXT NOT NULL,
  name TEXT NOT NULL,
  organisation TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  detail TEXT,
  message TEXT NOT NULL,
  page TEXT,
  ip_hash TEXT,
  user_agent TEXT,
  fingerprint TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  email_sent INTEGER NOT NULL DEFAULT 0,
  notes TEXT
);
CREATE INDEX IF NOT EXISTS idx_enq_fp ON enquiries(fingerprint, created_at);
CREATE TABLE IF NOT EXISTS subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  created_at TEXT NOT NULL,
  source TEXT,
  ip_hash TEXT,
  status TEXT NOT NULL DEFAULT 'active'
);
CREATE TABLE IF NOT EXISTS hits (ip_hash TEXT NOT NULL, action TEXT NOT NULL, ts INTEGER NOT NULL);
CREATE INDEX IF NOT EXISTS idx_hits ON hits(ip_hash, action, ts);
`;

export function getDb() {
  if (globalThis.__tmDb) return globalThis.__tmDb;
  fs.mkdirSync(DATA_DIR, { recursive: true });
  const db = new Database(path.join(DATA_DIR, 'tanumanasa.sqlite'));
  db.pragma('journal_mode = WAL');
  db.pragma('busy_timeout = 5000');
  db.exec(SCHEMA);
  globalThis.__tmDb = db;
  return db;
}

export const nowIso = () => new Date().toISOString().replace(/\.\d{3}Z$/, 'Z');
