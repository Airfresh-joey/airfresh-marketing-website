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
    unoptimized: process.env.NODE_ENV === 'development',
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,
  },

  // Redirects from old routes if needed
  async redirects() {
    return [
      {
        source: '/projects/case-studies',
        destination: '/case-studies',
        permanent: true,
      },
    ]
  },

  // Webpack configuration for aliases
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
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
  output: 'standalone',
}

export default nextConfig;