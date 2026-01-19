import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

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
      {
        source: '/(.*)',
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
      { source: '/event-staff', destination: '/services/event-staff', permanent: true },
      { source: '/event-staffing', destination: '/services/event-staffing', permanent: true },
      { source: '/privacy', destination: '/legal/privacy-policy', permanent: true },
      { source: '/terms', destination: '/legal/terms-and-conditions', permanent: true },
      { source: '/cities/:cityName', destination: '/city/:cityName', permanent: true },
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

export default nextConfig;