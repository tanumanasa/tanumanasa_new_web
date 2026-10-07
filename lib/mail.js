import nodemailer from 'nodemailer';

let transport;
function getTransport() {
  if (transport !== undefined) return transport;
  if (!process.env.SMTP_HOST) return (transport = null);
  transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: process.env.SMTP_USER ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS?.replace(/\s+/g, '') } : undefined,
  });
  return transport;
}

export async function sendMail({ to, subject, text, replyTo }) {
  const t = getTransport();
  if (!t) {
    console.warn(`[mail] SMTP not configured — skipped "${subject}" to ${to}`);
    return false;
  }
  try {
    const info = await t.sendMail({
      from: { name: process.env.MAIL_FROM_NAME || 'Tanumanasa Research', address: process.env.MAIL_FROM || process.env.SMTP_USER || 'no-reply@tanumanasa.com' },
      to,
      subject,
      text,
      replyTo: replyTo || undefined,
    });
    console.log(`[mail] sent message to ${to} (${info.messageId || 'accepted by SMTP server'})`);
    return true;
  } catch (e) {
    console.error(`[mail] send failed to ${to}:`, e.message);
    return false;
  }
}

export const autoreplyEnabled = () => process.env.SEND_AUTOREPLY !== 'false';
