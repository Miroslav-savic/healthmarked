import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const geist = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const SITE_NAME = 'HealthBlog';
const SITE_DESC = 'Evidence-based health articles written by medical experts across cardiology, oncology, nutrition, neurology, and more.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
  description: SITE_DESC,
  robots: { index: true, follow: true },
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@healthblog',
  },
};

function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-emerald-600 tracking-tight">
          HealthBlog
        </Link>
        <nav className="flex items-center gap-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
          <Link href="/search" className="hover:text-emerald-600 transition-colors">Search</Link>
          <Link href="/about" className="hover:text-emerald-600 transition-colors">About</Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-bold text-emerald-600 text-lg mb-2">HealthBlog</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Evidence-based health information reviewed by board-certified physicians. For informational purposes only — not a substitute for professional medical advice.
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-700 text-sm mb-3">Categories</p>
            <ul className="space-y-1 text-sm text-gray-500">
              {['cardiology','neurology','nutrition','mental-health','oncology','dermatology'].map((slug) => (
                <li key={slug}>
                  <Link href={`/${slug}`} className="hover:text-emerald-600 capitalize">
                    {slug.replace('-', ' ')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-semibold text-gray-700 text-sm mb-3">Information</p>
            <ul className="space-y-1 text-sm text-gray-500">
              <li><Link href="/about" className="hover:text-emerald-600">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-600">Contact</Link></li>
              <li><Link href="/disclaimer" className="hover:text-emerald-600">Medical Disclaimer</Link></li>
              <li><Link href="/privacy" className="hover:text-emerald-600">Privacy Policy</Link></li>
              <li><Link href="/search" className="hover:text-emerald-600">Search Articles</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© {year} HealthBlog. All rights reserved.</p>
          <p>Content is for informational purposes only. Always consult a healthcare professional.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESC,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESC,
  };

  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="bg-white text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
