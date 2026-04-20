import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/thank-you', '/legal/voided-check', '/legal/wire', '/legal/w9', '/legal/ach'],
      },
    ],
    sitemap: 'https://www.airfreshmarketing.com/sitemap.xml',
    host: 'https://www.airfreshmarketing.com',
  }
}
