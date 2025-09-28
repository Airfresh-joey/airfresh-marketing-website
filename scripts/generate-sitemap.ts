import { cities } from '../server/cities-data';
import { getAllCities } from '../server/city-data';
import { serviceTypes } from '../server/city-services-data';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://www.airfreshmarketing.com';

// Static pages
const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.9', changefreq: 'monthly' },
  { url: '/services', priority: '0.9', changefreq: 'weekly' },
  { url: '/services/experiential-marketing', priority: '0.8', changefreq: 'weekly' },
  { url: '/services/brand-strategy', priority: '0.8', changefreq: 'weekly' },
  { url: '/services/event-production', priority: '0.8', changefreq: 'weekly' },
  { url: '/contact', priority: '0.9', changefreq: 'monthly' },
  { url: '/blog', priority: '0.7', changefreq: 'weekly' },
  { url: '/portfolio', priority: '0.8', changefreq: 'weekly' },
  { url: '/case-studies', priority: '0.8', changefreq: 'weekly' },
  { url: '/talent', priority: '0.7', changefreq: 'monthly' },
  { url: '/projects/brand-activations', priority: '0.7', changefreq: 'weekly' },
  { url: '/projects/corporate-events', priority: '0.7', changefreq: 'weekly' },
];

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${DOMAIN}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Add all city pages
  const allCities = getAllCities();
  allCities.forEach(city => {
    const slug = city.city.toLowerCase().replace(/\s+/g, '-');
    sitemap += `
  <url>
    <loc>${DOMAIN}/city/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // Add additional city pages from cities-data
  cities.forEach(city => {
    sitemap += `
  <url>
    <loc>${DOMAIN}/city/${city.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // Add city-service pages
  let cityServiceCount = 0;
  const uniqueCitySlugs = new Set();

  // Get unique city slugs from both sources
  allCities.forEach(city => {
    uniqueCitySlugs.add(city.city.toLowerCase().replace(/\s+/g, '-'));
  });
  cities.forEach(city => {
    uniqueCitySlugs.add(city.slug);
  });

  // Generate city-service URLs for each city and service combination
  uniqueCitySlugs.forEach(citySlug => {
    serviceTypes.forEach(service => {
      sitemap += `
  <url>
    <loc>${DOMAIN}/city-services/${citySlug}-${service.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
      cityServiceCount++;
    });
  });

  sitemap += `
</urlset>`;

  // Save sitemap
  const outputPath = path.join(__dirname, '..', 'client', 'public', 'sitemap.xml');
  fs.writeFileSync(outputPath, sitemap);

  console.log(`Sitemap generated successfully:`);
  console.log(`- ${allCities.length + cities.length} city pages`);
  console.log(`- ${cityServiceCount} city-service pages`);
  console.log(`- Total: ${allCities.length + cities.length + cityServiceCount} location pages`);
  console.log(`Saved to: ${outputPath}`);

  // Also generate a robots.txt if it doesn't exist
  const robotsPath = path.join(__dirname, '..', 'client', 'public', 'robots.txt');
  const robotsContent = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;

  fs.writeFileSync(robotsPath, robotsContent);
  console.log('robots.txt updated');
}

generateSitemap();