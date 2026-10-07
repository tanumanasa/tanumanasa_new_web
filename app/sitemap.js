import { SITE_URL } from '@/lib/config';
import { JOBS } from '@/lib/jobs';

const ROUTES = [
  ['/', 1.0, 'weekly'], ['/antariksha', 0.9, 'weekly'], ['/products', 0.9, 'monthly'], ['/vichayan', 0.9, 'monthly'], ['/agents', 0.9, 'monthly'],
  ['/about', 0.8, 'monthly'], ['/research', 0.8, 'monthly'], ['/enterprise', 0.8, 'monthly'], ['/contact', 0.8, 'yearly'],
  ['/cloud', 0.7, 'monthly'], ['/industries', 0.7, 'monthly'], ['/vision', 0.7, 'yearly'], ['/newsroom', 0.7, 'weekly'],
  ['/careers', 0.7, 'weekly'], ['/resources', 0.7, 'weekly'], ['/partners', 0.6, 'monthly'], ['/responsible-ai', 0.4, 'yearly'],
  ['/privacy', 0.3, 'yearly'], ['/terms', 0.3, 'yearly'], ['/site-map', 0.2, 'monthly'],
];

export default function sitemap() {
  const lastModified = new Date();
  const routes = [
    ...ROUTES,
    ...JOBS.map(({ slug }) => [`/careers/${slug}`, 0.6, 'weekly']),
  ];
  return routes.map(([path, priority, changeFrequency]) => ({ url: SITE_URL + path, lastModified, changeFrequency, priority }));
}
