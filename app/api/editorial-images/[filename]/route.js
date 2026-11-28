import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { EDITORIAL_IMAGE_DIR } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const imageTypes = {
  jpg: 'image/jpeg',
  png: 'image/png',
  webp: 'image/webp',
};

const validFilename = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\.(jpg|png|webp)$/;

export async function GET(_request, { params }) {
  const { filename } = await params;
  const match = validFilename.exec(filename);
  if (!match) return new Response(null, { status: 404 });

  let image;
  try {
    image = await readFile(path.join(EDITORIAL_IMAGE_DIR, filename));
  } catch (error) {
    if (error.code === 'ENOENT') return new Response(null, { status: 404 });
    throw error;
  }

  return new Response(image, {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
      'Content-Type': imageTypes[match[1]],
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
