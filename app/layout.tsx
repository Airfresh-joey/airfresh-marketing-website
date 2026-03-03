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