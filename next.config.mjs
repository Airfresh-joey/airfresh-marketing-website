import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Use Turbopack (Next.js 16 default)
  turbopack: {},
  
  // Experimental CSS optimization
  experimental: {
    optimizeCss: true,
  },

  // Handle image optimization
  images: {
    domains: [
      'localhost',
      'images.unsplash.com',
      'plus.unsplash.com',
      'storage.googleapis.com',
      'lh3.googleusercontent.com',
      'logo.clearbit.com'
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  },

  // Security headers
  async headers() {
    return [
      // Allow iframe embedding for portfolio page (for proposal-dashboard integration)
      {
        source: '/portfolio',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Content-Security-Policy', value: "frame-ancestors 'self' https://proposal-dashboard-blond.vercel.app https://*.vercel.app http://localhost:*" },
        ],
      },
      // Allow iframe embedding for case study pages
      {
        source: '/case-studies/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Content-Security-Policy', value: "frame-ancestors 'self' https://proposal-dashboard-blond.vercel.app https://*.vercel.app http://localhost:*" },
        ],
      },
      // Default security headers for all other pages
      {
        source: '/((?!portfolio|case-studies).*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },

  // Redirects from old routes
  async redirects() {
    return [
      // Redirect non-www to www (fixes duplicate content issues)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'airfreshmarketing.com' }],
        destination: 'https://www.airfreshmarketing.com/:path*',
        permanent: true,
      },
      { source: '/projects/case-studies', destination: '/case-studies', permanent: true },
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/projects', destination: '/portfolio', permanent: true },
      { source: '/projects/:id', destination: '/portfolio/:id', permanent: true },
      { source: '/talent', destination: '/careers', permanent: true },
      { source: '/join', destination: '/careers', permanent: true },
      { source: '/convention-centers', destination: '/venues', permanent: true },
      { source: '/brand-ambassadors', destination: '/services/brand-ambassadors', permanent: true },
      { source: '/street-team-marketing', destination: '/services/street-teams', permanent: true },
      { source: '/experiential-marketing', destination: '/services/experiential-marketing', permanent: true },
      { source: '/promotional-models', destination: '/services/promotional-models', permanent: true },
      { source: '/event-staff', destination: '/services/event-management', permanent: true },
      { source: '/event-staffing', destination: '/services/event-management', permanent: true },
      // Legal page redirects (pages now exist at /legal/*)
      { source: '/privacy', destination: '/legal/privacy-policy', permanent: true },
      { source: '/terms', destination: '/legal/terms-and-conditions', permanent: true },
      // Additional old Webflow URLs
      { source: '/convention-staffing', destination: '/services/convention-staffing', permanent: true },
      { source: '/marketing-mascots', destination: '/services', permanent: true }, // No dedicated mascots page
      { source: '/guerilla-marketing', destination: '/services/street-teams', permanent: true }, // Closest match
      { source: '/nationwide-brand-ambassadors', destination: '/services/brand-ambassadors', permanent: true },
      { source: '/video-production', destination: '/services', permanent: true },
      { source: '/discovery-call', destination: '/contact', permanent: true },
      { source: '/joey-calendar', destination: '/contact', permanent: true },
      { source: '/brand-ambassador-order-form', destination: '/contact', permanent: true },
      { source: '/brand-surveys-and-market-sampling', destination: '/services', permanent: true },
      { source: '/interactive-vending-machine', destination: '/services', permanent: true },
      { source: '/production-map', destination: '/locations', permanent: true },
      // Critical 404 fixes from Google Ads audit (Feb 2026)
      { source: '/street-team', destination: '/services/street-teams', permanent: true },
      { source: '/locations/:city', destination: '/cities/:city', permanent: true },
      { source: '/locations/brand-ambassadors-:city', destination: '/cities/:city', permanent: true },
      // Case study short URL redirect
      { source: '/case-studies/netflix', destination: '/case-studies/netflix-stranger-things-popup', permanent: true },
      // City-services slug consolidation (old slugs → new standard slugs)
      { source: '/city-services/:city-street-team-marketing', destination: '/city-services/:city-street-teams', permanent: true },
      // Portfolio to case-studies redirects (March 2026 crawl fix)
      { source: '/portfolio/:slug', destination: '/case-studies/:slug', permanent: true },
    ]
  },

  // Webpack configuration for aliases
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@/components': path.resolve(__dirname, 'components'),
      '@/lib': path.resolve(__dirname, 'lib'),
      '@/server': path.resolve(__dirname, 'server'),
      '@shared': path.resolve(__dirname, 'shared'),
      '@assets': path.resolve(__dirname, 'attached_assets'),
    }
    return config
  },

  // Output configuration for deployment
  // output: 'standalone', // Commented out for Vercel deployment
}

export default nextConfig;// Cache bust: 1771814978
