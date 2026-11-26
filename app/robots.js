import { SITE_URL } from '@/lib/config';

const BASE_URL = SITE_URL.replace(/\/+$/, ''); // guard against trailing slash

// Paths no crawler should touch. Keep this list minimal and real.
const restrictedPaths = [
  '/admin',
  '/api/',
  '/_next/data/',
  '/*?*utm_',        // tracking-parameter duplicates
  '/*?*sessionid=',
  '/*?*ref=',
];

const publicRules = (userAgent) => ({
  userAgent,
  allow: '/',
  disallow: restrictedPaths,
});

/**
 * 1) AI TRAINING / DATA-SCRAPING crawlers: blocked.
 *    These collect content for model training or bulk scraping.
 */
const blockedTrainingCrawlers = [
  'GPTBot',
  'CCBot',
  'Google-Extended',
  'anthropic-ai',
  'ClaudeBot',
  'Applebot-Extended',
  'meta-externalagent',
  'Bytespider',
  'cohere-ai',
  'omgili',
  'AI2Bot',
  'PetalBot',
  'Scrapy',
  'AmazonAdBot',
];

/**
 * 2) AI SEARCH / ANSWER-ENGINE crawlers: these decide whether your brand
 *    appears in ChatGPT Search, Perplexity, Claude, Gemini answers, etc.
 *    For a company that wants visibility, ALLOW these (recommended).
 *    Move any you want blocked into the list above.
 */
const allowedAiSearchCrawlers = [
  'OAI-SearchBot',
  'PerplexityBot',
  'Claude-SearchBot',
  'DuckAssistBot',
  'Amazonbot',
];

/**
 * 3) AI USER-TRIGGERED fetchers: fetch a page only when a real person asks
 *    the assistant about it. Blocking them means users can't ask AI
 *    tools about your site. Allowed by default.
 */
const allowedAiUserFetchers = [
  'ChatGPT-User',
  'Perplexity-User',
  'Claude-User',
  'meta-externalfetcher',
  'MistralAI-User',
];

export default function robots() {
  return {
    rules: [
      // Default for all crawlers (Google, Bing, etc.)
      publicRules('*'),

      // Allowed AI search + user-triggered fetchers
      ...allowedAiSearchCrawlers.map(publicRules),
      ...allowedAiUserFetchers.map(publicRules),

      // Blocked AI training / scraping bots
      { userAgent: blockedTrainingCrawlers, disallow: '/' },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}