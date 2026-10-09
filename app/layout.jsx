import './globals.css';
import { SITE_URL } from '@/lib/config';
import SiteChrome from '@/components/SiteChrome';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Effects from '@/components/Effects';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'Tanumanasa Research', template: '%s' },
  description: "Tanumanasa Research builds foundation models for India's languages and develops responsible AI for enterprises.",
  applicationName: 'Tanumanasa Research',
  authors: [{ name: 'Tanumanasa Research Pvt. Ltd.' }],
  icons: { icon: '/favicon.png', apple: '/assets/apple-touch-icon.png' },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Tanumanasa Research',
    locale: 'en_IN',
    title: 'Tanumanasa Research',
    description: "Tanumanasa Research builds foundation models for India's languages and develops responsible AI for enterprises.",
    url: '/',
    images: [{
      url: '/assets/og-image.png',
      width: 1200,
      height: 630,
      alt: "Tanumanasa Research — foundation models for India's languages",
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tanumanasa Research',
    description: "Tanumanasa Research builds foundation models for India's languages and develops responsible AI for enterprises.",
    images: ['/assets/og-image.png'],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
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
