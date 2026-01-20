import { cities } from '../cities-data';
import { usaEvents } from '../usa-events-data';
import { venues } from '../venues-data';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://airfreshmarketing.com';
const TODAY = new Date().toISOString().split('T')[0];

// Service types for city-service combinations
const services = [
  'brand-ambassadors',
  'convention-staffing',
  'event-management',
  'experiential-marketing',
  'guerilla-marketing',
  'marketing-mascots',
  'promotional-models',
  'street-team-marketing'
];

// Service types for event-service combinations (based on common event staffing needs)
const eventServices = [
  'brand-ambassadors',
  'event-staff',
  'promotional-models',
  'trade-show-staff',
  'sampling-teams',
  'hospitality-staff',
  'street-teams',
  'vip-hosts',
  'registration-staff',
  'product-demonstrators'
];

// Service types for venue-service combinations
const venueServices = [
  'event-staffing',
  'brand-ambassadors',
  'trade-show-staff',
  'hospitality-staff',
  'registration-staff',
  'promotional-models',
  'convention-staffing',
  'sampling-teams'
];

// Core pages with priorities
const corePages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/portfolio', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'daily' },
  { path: '/careers', priority: '0.7', changefreq: 'weekly' },
  { path: '/discovery-call', priority: '0.7', changefreq: 'monthly' },
];

// Service pages
const servicePages = [
  '/services/brand-ambassadors',
  '/services/street-teams',
  '/services/experiential-marketing',
  '/services/promotional-models',
  '/services/convention-staffing',
  '/services/marketing-mascots',
  '/services/guerilla-marketing',
  '/services/nationwide-brand-ambassadors',
  '/services/video-production',
  '/services/product-sampling',
  '/services/brand-activation',
  '/services/event-marketing',
];

// Legal pages
const legalPages = [
  '/legal/terms-and-conditions',
  '/legal/contractor-agreement',
  '/legal/privacy-policy',
];

// Portfolio/Case study pages
const portfolioPages = [
  '/portfolio/premier-protein',
  '/portfolio/netflix-stranger-things',
  '/portfolio/mrbeast-burger-launch',
  '/portfolio/microsoft-xbox-activation',
  '/portfolio/mac-cosmetics-masterclass',
];

function generateSitemapXml(): string {
  let urls: string[] = [];

  // Add core pages
  for (const page of corePages) {
    urls.push(`  <url>
    <loc>${BASE_URL}${page.path}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);
  }

  // Add service pages
  for (const page of servicePages) {
    urls.push(`  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`);
  }

  // Add legal pages
  for (const page of legalPages) {
    urls.push(`  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>`);
  }

  // Add portfolio pages
  for (const page of portfolioPages) {
    urls.push(`  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  }

  // Add city pages
  for (const city of cities) {
    urls.push(`  <url>
    <loc>${BASE_URL}/city/${city.slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  }

  // Add city-service combinations
  for (const city of cities) {
    for (const service of services) {
      urls.push(`  <url>
    <loc>${BASE_URL}/city-services/${city.slug}-${service}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`);
    }
  }

  // Add events directory page
  urls.push(`  <url>
    <loc>${BASE_URL}/events</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);

  // Add event pages
  for (const event of usaEvents) {
    urls.push(`  <url>
    <loc>${BASE_URL}/events/${event.slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${event.tier === 1 ? '0.8' : event.tier === 2 ? '0.7' : '0.6'}</priority>
  </url>`);
  }

  // Add event-service combinations (only for Tier 1 and Tier 2 events to keep sitemap manageable)
  for (const event of usaEvents.filter(e => e.tier <= 2)) {
    for (const service of eventServices) {
      urls.push(`  <url>
    <loc>${BASE_URL}/events/${event.slug}/${service}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`);
    }
  }

  // Add venues directory page
  urls.push(`  <url>
    <loc>${BASE_URL}/venues</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`);

  // Add venue pages
  for (const venue of venues) {
    urls.push(`  <url>
    <loc>${BASE_URL}/venues/${venue.slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`);
  }

  // Add venue-service combinations
  for (const venue of venues) {
    for (const service of venueServices) {
      urls.push(`  <url>
    <loc>${BASE_URL}/venues/${venue.slug}/${service}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`);
    }
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return sitemap;
}

// Generate and save sitemap
const sitemap = generateSitemapXml();
const outputPath = path.join(__dirname, '../../client/public/sitemap.xml');

fs.writeFileSync(outputPath, sitemap);

// Count URLs
const urlCount = (sitemap.match(/<url>/g) || []).length;
const cityCount = cities.length;
const cityServiceCount = cities.length * services.length;
const eventCount = usaEvents.length;
const tier1and2Events = usaEvents.filter(e => e.tier <= 2).length;
const eventServiceCount = tier1and2Events * eventServices.length;
const venueCount = venues.length;
const venueServiceCount = venues.length * venueServices.length;

console.log(`✓ Sitemap generated successfully!`);
console.log(`  - Total URLs: ${urlCount}`);
console.log(`  - Core pages: ${corePages.length}`);
console.log(`  - Service pages: ${servicePages.length}`);
console.log(`  - Legal pages: ${legalPages.length}`);
console.log(`  - Portfolio pages: ${portfolioPages.length}`);
console.log(`  - City pages: ${cityCount}`);
console.log(`  - City-service pages: ${cityServiceCount}`);
console.log(`  - Event pages: ${eventCount}`);
console.log(`  - Event-service pages: ${eventServiceCount}`);
console.log(`  - Venue pages: ${venueCount}`);
console.log(`  - Venue-service pages: ${venueServiceCount}`);
console.log(`  - Output: ${outputPath}`);
