import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Use Turbopack (Next.js 16 default)
  turbopack: {
    root: path.resolve(__dirname),
  },
  
  // Experimental CSS optimization
  experimental: {
    optimizeCss: true,
  },

  // Handle image optimization
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'storage.googleapis.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
      { protocol: 'https', hostname: 'logo.clearbit.com' }
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 2592000, // 30 days
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
      // Search Console opportunities: older high-impression blog URLs should resolve to live, relevant pages.
      { source: '/blog/event-staffing-texas-complete-market-guide-2026', destination: '/blog/texas-event-marketing-guide', permanent: true },
      { source: '/blog/brand-ambassador-programs-college-campuses', destination: '/blog/college-marketing', permanent: true },
      { source: '/blog/festival-brand-activation-los-angeles', destination: '/blog/festival-marketing-guide', permanent: true },
      { source: '/blog/guerrilla-marketing-ideas-that-actually-work-real-examples', destination: '/blog/guerrilla-marketing-examples', permanent: true },
      { source: '/blog/experiential-marketing-case-studies', destination: '/blog/experiential-marketing-roi-case-studies', permanent: true },
      { source: '/blog/top-event-staffing-agencies-trade-shows-2026', destination: '/blog/promotional-staff-trade-shows-hiring-guide', permanent: true },
      // Critical 404 fixes from Google Ads audit (Feb 2026)
      { source: '/street-team', destination: '/services/street-teams', permanent: true },
      { source: '/locations/:city', destination: '/cities/:city', permanent: true },
      { source: '/locations/brand-ambassadors-:city', destination: '/cities/:city', permanent: true },
      // Case study short URL redirects
      { source: '/case-studies/netflix', destination: '/case-studies/netflix-activations', permanent: true },
      { source: '/case-studies/microsoft', destination: '/case-studies/microsoft-events', permanent: true },
      // City-services slug consolidation (old slugs → new standard slugs)
      { source: '/city-services/:city-street-team-marketing', destination: '/city-services/:city-street-teams', permanent: true },
      // Portfolio to case-studies redirects (March 2026 crawl fix)
      // Specific slug mappings for old portfolio URLs that don't match new case study IDs
      { source: '/portfolio/beer-samplings', destination: '/case-studies/beer-samplings-national', permanent: true },
      { source: '/portfolio/byoma', destination: '/case-studies/byoma-skincare', permanent: true },
      { source: '/portfolio/ted-talk', destination: '/case-studies/ted-talk-events', permanent: true },
      { source: '/portfolio/wagamama', destination: '/case-studies/wagamama-launch', permanent: true },
      { source: '/portfolio/williams-racing', destination: '/case-studies/williams-racing-f1', permanent: true },
      { source: '/portfolio/formula-one', destination: '/case-studies/formula-1-las-vegas', permanent: true },
      { source: '/portfolio/clarins', destination: '/case-studies/clarins-beauty', permanent: true },
      { source: '/portfolio/starbucks', destination: '/case-studies/starbucks-seasonal', permanent: true },
      { source: '/portfolio/microsoft-nrf', destination: '/case-studies/microsoft-events', permanent: true },
      { source: '/portfolio/microsoft', destination: '/case-studies/microsoft-events', permanent: true },
      { source: '/portfolio/mac-cosmetics', destination: '/case-studies/mac-cosmetics-campaign', permanent: true },
      { source: '/portfolio/mrbeast', destination: '/case-studies/mrbeast-events', permanent: true },
      { source: '/portfolio/grubhub', destination: '/case-studies/grubhub-campaign', permanent: true },
      { source: '/portfolio/netflix', destination: '/case-studies/netflix-activations', permanent: true },
      { source: '/portfolio/premier-protein', destination: '/case-studies/premier-protein-sampling', permanent: true },
      // Portfolio slugs without matching case studies - redirect to main page
      { source: '/portfolio/apple-camp-grizzly', destination: '/case-studies', permanent: true },
      { source: '/portfolio/nissan-nfl-draft', destination: '/case-studies', permanent: true },
      { source: '/portfolio/pride-activations', destination: '/case-studies', permanent: true },
      { source: '/portfolio/peelz-citrus', destination: '/case-studies', permanent: true },
      // Catch-all for any other portfolio slugs
      { source: '/portfolio/:slug', destination: '/case-studies/:slug', permanent: true },
      // NYC canonical service redirects. Keep these exact so /new-york-city-* never loops.
      { source: '/city-services/new-york-brand-ambassadors', destination: '/city-services/new-york-city-brand-ambassadors', permanent: true },
      { source: '/city-services/new-york-experiential-marketing', destination: '/city-services/new-york-city-experiential-marketing', permanent: true },
      { source: '/city-services/new-york-street-teams', destination: '/city-services/new-york-city-street-teams', permanent: true },
      { source: '/city-services/new-york-promotional-models', destination: '/city-services/new-york-city-promotional-models', permanent: true },
      { source: '/city-services/new-york-sampling', destination: '/city-services/new-york-city-sampling', permanent: true },
      { source: '/city-services/new-york-convention-staffing', destination: '/city-services/new-york-city-convention-staffing', permanent: true },
      { source: '/city-services/new-york-event-management', destination: '/city-services/new-york-city-event-management', permanent: true },
      { source: '/cities/new-york/brand-ambassadors', destination: '/city-services/new-york-city-brand-ambassadors', permanent: true },
      { source: '/cities/new-york/experiential-marketing', destination: '/city-services/new-york-city-experiential-marketing', permanent: true },
      { source: '/cities/new-york/street-team-marketing', destination: '/city-services/new-york-city-street-teams', permanent: true },
      { source: '/cities/new-york/promotional-models', destination: '/city-services/new-york-city-promotional-models', permanent: true },
      { source: '/cities/new-york/product-sampling', destination: '/city-services/new-york-city-sampling', permanent: true },
      { source: '/cities/new-york/convention-staffing', destination: '/city-services/new-york-city-convention-staffing', permanent: true },
      { source: '/cities/new-york/trade-show-marketing', destination: '/city-services/new-york-city-convention-staffing', permanent: true },
      { source: '/cities/new-york/event-marketing', destination: '/city-services/new-york-city-event-management', permanent: true },
      // City+service routes → city-services combined slug format
      { source: '/cities/:city/brand-ambassadors', destination: '/city-services/:city-brand-ambassadors', permanent: true },
      { source: '/cities/:city/event-marketing', destination: '/city-services/:city-event-management', permanent: true },
      { source: '/cities/:city/experiential-marketing', destination: '/city-services/:city-experiential-marketing', permanent: true },
      { source: '/cities/:city/trade-show-marketing', destination: '/city-services/:city-convention-staffing', permanent: true },
      { source: '/cities/:city/convention-staffing', destination: '/city-services/:city-convention-staffing', permanent: true },
      { source: '/cities/:city/promotional-models', destination: '/city-services/:city-promotional-models', permanent: true },
      { source: '/cities/:city/street-teams', destination: '/city-services/:city-street-teams', permanent: true },
      { source: '/cities/:city/sampling', destination: '/city-services/:city-sampling', permanent: true },
      // Legacy/variant service slug redirects
      { source: '/cities/:city/event-staffing', destination: '/city-services/:city-event-management', permanent: true },
      { source: '/cities/:city/trade-show-staff', destination: '/city-services/:city-convention-staffing', permanent: true },
      { source: '/cities/:city/trade-show-marketing', destination: '/city-services/:city-convention-staffing', permanent: true },
      { source: '/cities/:city/street-team-marketing', destination: '/city-services/:city-street-teams', permanent: true },
      { source: '/cities/:city/product-sampling', destination: '/city-services/:city-sampling', permanent: true },
      // Services page slug fix
      { source: '/services/product-sampling', destination: '/services/sampling', permanent: true },
      // Common city slug variations
      { source: '/cities/new-york', destination: '/cities/new-york-city', permanent: true },
      // NOTE: Removed '/city-services/new-york-:service' redirect - it was causing infinite loops
      // because 'new-york-city-brand-ambassadors' matched as service='city-brand-ambassadors'
      // Old industry slug redirects (industry-city-data.ts was updated to match industries-data.ts)
      { source: '/industries/tech/:city', destination: '/industries/technology/:city', permanent: true },
      { source: '/industries/healthcare/:city', destination: '/industries/healthcare-pharma/:city', permanent: true },
      { source: '/industries/financial/:city', destination: '/industries/financial-services/:city', permanent: true },
      { source: '/industries/retail/:city', destination: '/industries/fashion-retail/:city', permanent: true },
      { source: '/industries/sports/:city', destination: '/industries/sports-entertainment/:city', permanent: true },
      { source: '/industries/entertainment/:city', destination: '/industries/sports-entertainment/:city', permanent: true },
      { source: '/industries/beauty/:city', destination: '/industries/cpg-consumer-goods/:city', permanent: true },
      { source: '/industries/real-estate/:city', destination: '/industries/cpg-consumer-goods/:city', permanent: true },
      { source: '/industries/food-beverage/:city', destination: '/industries/alcohol-beverage/:city', permanent: true },
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
