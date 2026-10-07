# Tanumanasa Research — Website (Next.js + Node.js)

React front end (Next.js 15, server-rendered for SEO) with a Node.js API for the contact, demo,
early-access, careers and newsletter forms, plus a private admin panel. Mobile-first and responsive
from 320px phones to large desktops.

## Quick start (local)
```bash
npm install
cp .env.example .env.local        # fill in values (SMTP optional for local testing)
npm run hash-password             # paste the output into .env.local as ADMIN_PASSWORD_HASH
npm run dev                       # http://localhost:3000
```
Without SMTP settings, forms still save to the database; emails are logged to the console instead.

## Project structure
```
app/
  layout.jsx            Root layout: fonts, metadata, header/footer (via SiteChrome)
  page.jsx              Home          →  /
  about/ antariksha/ products/ vichayan/ agents/ research/ enterprise/ cloud/
  industries/ partners/ vision/ newsroom/ careers/ resources/ contact/
  privacy/ terms/ responsible-ai/ site-map/        (one page.jsx each)
  not-found.jsx         404 page
  sitemap.js, robots.js /sitemap.xml and /robots.txt (generated)
  api/csrf|contact|subscribe|unsubscribe/route.js  Node API
  admin/                Admin panel: /admin, /admin/enquiry?id=, /admin/subscribers, /admin/export
components/
  Header.jsx            Desktop nav + Products dropdown + mobile menu (hamburger)
  Footer.jsx            Links, social, newsletter
  ContactForm.jsx       Reusable enquiry form (validation, states, CSRF)
  ContactSwitcher.jsx   Contact page enquiry-type chooser (?intent=careers&role=… prefill)
  SubscribeForm.jsx     Newsletter form
  CardList.jsx          Newsroom / Resources cards with filters (#hash deep-links)
  Effects.jsx           Star fields + scroll-reveal animations
lib/
  content.js            ← EDIT to publish news and resources
  config.js             Enquiry types, limits, recipients
  db.js                 SQLite (better-sqlite3)
  security.js           CSRF, origin check, rate limit, sanitising
  mail.js               Nodemailer (SMTP)
  session.js            Admin session + password check
  seo.js                Per-page metadata helper
public/                 Logos, supporter logos, icons, share image
deploy/nginx.conf       Reverse-proxy + HTTPS config
Dockerfile, ecosystem.config.cjs (PM2)
```
Old `.html` URLs (e.g. `/About.html`) redirect permanently to the new clean URLs.

## Deploy on a VPS (Ubuntu — DigitalOcean, AWS Lightsail/EC2, Hostinger VPS)
```bash
# 1. Node 20 + build tools
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs build-essential nginx
sudo npm i -g pm2

# 2. App
git clone <your repo> /var/www/tanumanasa && cd /var/www/tanumanasa
npm ci
cp .env.example .env.production.local   # fill in real values; set DATA_DIR=/var/lib/tanumanasa
sudo mkdir -p /var/lib/tanumanasa && sudo chown $USER /var/lib/tanumanasa
npm run build
pm2 start ecosystem.config.cjs && pm2 save && pm2 startup

# 3. HTTPS
sudo cp deploy/nginx.conf /etc/nginx/sites-available/tanumanasa.com
sudo ln -s /etc/nginx/sites-available/tanumanasa.com /etc/nginx/sites-enabled/
sudo certbot --nginx -d tanumanasa.com -d www.tanumanasa.com
sudo nginx -t && sudo systemctl reload nginx
```
Point the domain's A records (`@` and `www`) at the server's IP first.

### Docker alternative
```bash
docker build -t tanumanasa-web .
docker run -d --name tanumanasa -p 3000:3000 --env-file .env.production.local -v tanumanasa-data:/data tanumanasa-web
```

### Hosting notes
- Needs a **persistent disk** for the SQLite database (VPS, Docker volume, Render/Railway with a volume).
- Serverless hosts (e.g. Vercel) have no persistent disk — to host there, swap `lib/db.js` for a hosted
  database (Postgres/Turso). Ask and this can be adapted.
- Run a **single instance** (SQLite). Back up `DATA_DIR/tanumanasa.sqlite` regularly.

## Environment variables
See `.env.example`. Required in production: `SITE_URL`, `APP_SECRET`, `DATA_DIR`, `SMTP_*`, `MAIL_FROM`,
`MAIL_TO`, `ADMIN_USER`, `ADMIN_PASSWORD_HASH`. Optional per-type inboxes: `MAIL_TO_CAREERS`, `MAIL_TO_MEDIA`, …

## Security built in
Double-submit CSRF token (httpOnly, SameSite=Strict) · Origin check · honeypot + minimum fill-time trap ·
per-IP rate limiting (salted IP hashes only) · duplicate-submission detection · server-side validation &
sanitising · parameterised SQL · React output escaping · CSV formula-injection guard · scrypt admin
password, signed session cookie scoped to /admin, login throttling · CSP, HSTS, X-Frame-Options,
nosniff, Referrer-Policy and Permissions-Policy headers.

## Before launch — needs your input
- Approved founder biography and photo (`app/about/page.jsx`)
- SMTP credentials and real inbox addresses
- Written permission to display each supporter logo
- Legal review of Privacy Policy and Terms of Use
