import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import dynamic from 'next/dynamic'
import NavigationClean from '@/components/NavigationClean'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Providers from '@/app/providers'

// Lazy load Toaster - only needed when toast is triggered
const Toaster = dynamic(() => import('@/components/ui/toaster').then(mod => ({ default: mod.Toaster })), { ssr: false })

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const metadata: Metadata = {
  title: 'Air Fresh Marketing - Experiential Marketing & Brand Activation',
  description: 'Professional experiential marketing and brand activation services',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
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
            <NavigationClean />
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