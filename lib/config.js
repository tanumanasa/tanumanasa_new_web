export const SITE_URL = (process.env.SITE_URL || 'https://www.tanumanasa.com').replace(/\/$/, '');

export const INTENTS = {
  enterprise: 'Enterprise AI Consulting',
  demo: 'Product Demo',
  'early-access': 'Antariksha.ai Early Access',
  partnership: 'Partnerships',
  research: 'Research Collaboration',
  startup: 'Startup Support',
  careers: 'Careers',
  media: 'Media Enquiry',
  general: 'General',
};

export const STATUSES = { new: 'New', progress: 'In progress', closed: 'Closed', spam: 'Spam' };

export function recipientFor(intent) {
  const key = 'MAIL_TO_' + intent.toUpperCase().replace(/-/g, '_');
  return process.env[key] || process.env.MAIL_TO || 'aryankumarsingh8340@gmail.com';
}

export const LIMITS = {
  contactMax: 5,
  subscribeMax: 5,
  windowSec: 3600,
  minFillMs: 0,
};
