import Link from 'next/link';
import { FaGithub, FaLinkedinIn, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { SiHuggingface } from 'react-icons/si';
import SubscribeForm from './SubscribeForm';

const SOCIAL = [
  ['LinkedIn', 'https://www.linkedin.com/company/tanumanasa/', FaLinkedinIn],
  ['X', 'https://x.com/tanumanasa_', FaXTwitter],
  ['Hugging Face', 'https://huggingface.co/tanumanasa', SiHuggingface],
  ['GitHub', 'https://github.com/tanumanasa', FaGithub],
  ['YouTube', 'https://youtube.com/@tanumanasa', FaYoutube],
];
const COLS = [
  ['Company', [['/about', 'About'], ['/vision', 'Founder Vision'], ['/careers', 'Careers'], ['/newsroom', 'Newsroom'], ['/partners', 'Partners'], ['/contact', 'Contact']]],
  ['Products', [['/antariksha', 'Antariksha.ai'], ['/vichayan', 'Vichayan AI'], ['/agents', 'Enterprise AI Agents'], ['/products', 'All products']]],
  ['Capabilities', [['/research', 'Research Lab'], ['/enterprise', 'Enterprise AI'], ['/cloud', 'AWS & Cloud'], ['/industries', 'Industries']]],
  ['Resources', [['/resources#insights', 'Insights'], ['/resources#product-briefs', 'Product briefs'], ['/resources#guides', 'Guides'], ['https://huggingface.co/tanumanasa', 'Hugging Face'], ['https://github.com/tanumanasa', 'GitHub']]],
];
const ext = (h) => /^https?:/.test(h);

export default function Footer() {
  return (
    <footer className="tm-footer">
      <div className="tm-footer-in">
        <div className="tm-footer-grid">
          <div>
            <Link href="/" className="tm-brand" aria-label="Tanumanasa Research — home">
              <img src="/assets/logo-76.png" alt="" width={38} height={38} loading="lazy" />
              <span><span className="tm-brand-name">TANUMANASA</span><span className="tm-brand-sub">RESEARCH</span></span>
            </Link>
            <p className="tagline">Building India&apos;s foundation models — from Odisha, for India, for the world.</p>
            <SubscribeForm id="foot" source="footer" />
            <div className="tm-social">
              {SOCIAL.map(([n, u, Icon]) => (
                <a key={n} href={u} target="_blank" rel="noopener noreferrer" aria-label={n} title={n}>
                  <Icon aria-hidden="true" focusable="false" />
                  <span className="sr-only">{n} (opens in a new tab)</span>
                </a>
              ))}
            </div>
          </div>
          {COLS.map(([title, links]) => (
            <nav key={title} aria-label={title}>
              <p className="tm-fh">{title.toUpperCase()}</p>
              <ul>
                {links.map(([h, l]) => (
                  <li key={h}>
                    {ext(h)
                      ? <a href={h} target="_blank" rel="noopener noreferrer">{l}<span className="sr-only"> (opens in a new tab)</span></a>
                      : <Link href={h}>{l}</Link>}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
       <div className="tm-footer-bottom">
          <span>© {new Date().getFullYear()} Tanumanasa Research Pvt. Ltd.</span>
          <address>3rd Floor, Tower-A, Odisha Startup Incubation Centre (O-HUB), SEZ Road, Bhubaneswar 751024, Odisha, India</address>
          <nav aria-label="Legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/responsible-ai">Responsible AI</Link>
            <Link href="/site-map">Sitemap</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
