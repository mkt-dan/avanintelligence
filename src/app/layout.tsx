import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { siteConfig, getCanonicalUrl } from '@/config/site';

export const metadata: Metadata = {
  title: 'Avan Intelligence - Redefining Knowledge, Together',
  description: siteConfig.description,
  keywords: [
    'knowledge network',
    'scientific research',
    'learning platform',
    'adaptive learning',
    'philosophy',
    'neuroscience',
    'community learning',
  ],
  authors: [
    {
      name: 'Avan Intelligence',
      url: siteConfig.url,
    },
  ],
  creator: 'Avan Intelligence',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Avan Intelligence - Redefining Knowledge, Together',
    description: siteConfig.description,
    images: [
      {
        url: getCanonicalUrl('/og-image.png'),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Avan Intelligence - Redefining Knowledge, Together',
    description: siteConfig.description,
    creator: '@avanintelligence',
    images: [getCanonicalUrl('/og-image.png')],
  },
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
