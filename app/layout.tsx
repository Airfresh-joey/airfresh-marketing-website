import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'
import NavigationWrapper from '@/components/NavigationWrapper'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Providers from '@/app/providers'

// Lazy load Toaster - only needed when toast is triggered
const Toaster = dynamic(() => import('@/components/ui/toaster').then(mod => ({ default: mod.Toaster })))

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.airfreshmarketing.com'),
  title: {
    default: 'Air Fresh Marketing - Experiential Marketing & Brand Activation',
    template: '%s | AirFresh Marketing'
  },
  description: 'Professional experiential marketing and brand activation services. Brand ambassadors, street teams, product sampling, and event staffing nationwide.',
  keywords: ['experiential marketing', 'brand ambassadors', 'event staffing', 'street teams', 'product sampling', 'brand activation', 'guerrilla marketing', 'promotional models'],
  authors: [{ name: 'AirFresh Marketing' }],
  creator: 'AirFresh Marketing',
  publisher: 'AirFresh Marketing',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AirFresh Marketing',
    title: 'Air Fresh Marketing - Experiential Marketing & Brand Activation',
    description: 'Professional experiential marketing and brand activation services. Brand ambassadors, street teams, product sampling, and event staffing nationwide.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AirFresh Marketing - Experiential Marketing Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AirFreshMktg',
    creator: '@AirFreshMktg',
    title: 'Air Fresh Marketing - Experiential Marketing & Brand Activation',
    description: 'Professional experiential marketing and brand activation services nationwide.',
    images: ['/images/og-image.jpg'],
  },
  // NOTE: Do NOT set a default canonical here - each page must set its own
  // canonical in its metadata to prevent duplicate content issues
  verification: {
    google: 'k0VaTORraaOp5KktJQiGMnCXyxZa_R2vlcnUsqKHBwA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to external origins for faster resource loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://analytics.ahrefs.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        {/* Preload hero images for fast LCP */}
        <link
          rel="preload"
          href="/images/hero-poster-mobile.jpg"
          as="image"
          media="(max-width: 767px)"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/images/hero-poster-desktop.jpg"
          as="image"
          media="(min-width: 768px)"
        />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["LocalBusiness", "MarketingAgency"],
              "name": "AirFresh Marketing",
              "alternateName": "Air Fresh Marketing",
              "url": "https://www.airfreshmarketing.com",
              "logo": "https://www.airfreshmarketing.com/images/airfresh-logo.svg",
              "image": "https://www.airfreshmarketing.com/images/og-image.jpg",
              "description": "Professional experiential marketing, brand ambassadors, event staffing, and brand activation services nationwide. GPS-verified staff, video training, real-time reporting.",
              "telephone": "+1-303-720-6060",
              "email": "hello@airfreshmarketing.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1580 N. Logan St., Suite 660",
                "addressLocality": "Denver",
                "addressRegion": "CO",
                "postalCode": "80203",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.7392,
                "longitude": -104.9903
              },
              "areaServed": { "@type": "Country", "name": "United States" },
              "priceRange": "$$-$$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              "sameAs": [
                "https://www.linkedin.com/company/airfreshmarketing",
                "https://www.facebook.com/AirFreshMarketing",
                "https://twitter.com/AirFreshMktg",
                "https://www.instagram.com/airfreshmarketing"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Event Staffing & Marketing Services",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Brand Ambassadors" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Event Staffing" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Experiential Marketing" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Convention Staffing" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Product Sampling" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Street Teams" } }
                ]
              }
            })
          }}
        />
        <Providers>
          <GoogleAnalytics />
          <div className="min-h-screen flex flex-col">
            <NavigationWrapper />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster />
        </Providers>
      </body>
    </html>
  )
}