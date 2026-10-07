import { SITE_URL } from './config';

const OG_IMAGE = { url: '/assets/og-image.png', width: 1200, height: 630, alt: "Tanumanasa Research — foundation models for India's languages" };

export function pageMeta({ title, description, path = '/', type = 'website', noindex = false }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true, 'max-image-preview': 'large' },
    openGraph: { title, description, url: SITE_URL + path, type, siteName: 'Tanumanasa Research', locale: 'en_IN', images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE.url] },
  };
}
