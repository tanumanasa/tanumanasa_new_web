import './globals.css';
import { SITE_URL } from '@/lib/config';
import SiteChrome from '@/components/SiteChrome';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Effects from '@/components/Effects';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Tanumanasa Research', template: '%s' },
  applicationName: 'Tanumanasa Research',
  authors: [{ name: 'Tanumanasa Research Pvt. Ltd.' }],
  icons: { icon: '/favicon.png', apple: '/assets/apple-touch-icon.png' },
  formatDetection: { telephone: false },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#920D54',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700&family=Noto+Sans+Devanagari&display=swap"
        />
      </head>
      <body>
        <SiteChrome header={<Header />} footer={<Footer />} effects={<Effects />}>
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}
