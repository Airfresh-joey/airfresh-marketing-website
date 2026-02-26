import { MetadataRoute } from 'next'
import { usaEvents } from '@/server/usa-events-data'
import { venues } from '@/server/venues-data'
import { cities as citiesData } from '@/server/cities-data'

const DOMAIN = 'https://www.airfreshmarketing.com'

// Services available for events and venues
const eventServices = [
  'brand-ambassadors',
  'event-staff',
  'promotional-models',
  'trade-show-staff',
  'hospitality-staff',
  'street-teams',
  'sampling-teams',
  'festival-staff'
]

const venueServices = [
  'brand-ambassadors',
  'convention-staffing',
  'event-management',
  'experiential-marketing',
  'trade-show-staff',
  'hospitality-staff',
  'promotional-models',
  'sampling-teams'
]

// Cities with dedicated pages (from app/cities/[slug]/page.tsx)
const citySlugs = [
  'new-york', 'los-angeles', 'chicago', 'miami', 'denver',
  'san-francisco', 'austin', 'atlanta', 'san-diego', 'seattle',
  'portland', 'phoenix', 'las-vegas', 'dallas', 'houston',
  'charlotte', 'nashville', 'minneapolis', 'detroit', 'boston',
  'philadelphia', 'washington'
]

// City service types
const cityServiceTypes = [
  'brand-ambassadors',
  'convention-staffing',
  'event-management',
  'experiential-marketing',
  'guerilla-marketing',
  'marketing-mascots',
  'mobile-tours',
  'product-sampling',
  'promotional-models',
  'street-teams',
  'trade-shows'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0]

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${DOMAIN}/`, lastModified: today, changeFrequency: 'daily', priority: 1.0 },
    { url: `${DOMAIN}/about`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMAIN}/services`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${DOMAIN}/services/experiential-marketing`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${DOMAIN}/services/brand-ambassadors`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${DOMAIN}/services/street-teams`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${DOMAIN}/services/convention-staffing`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${DOMAIN}/services/event-management`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${DOMAIN}/services/sampling`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${DOMAIN}/services/promotional-models`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${DOMAIN}/contact`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMAIN}/blog`, lastModified: today, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${DOMAIN}/portfolio`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${DOMAIN}/case-studies`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${DOMAIN}/careers`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${DOMAIN}/locations`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${DOMAIN}/events`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${DOMAIN}/venues`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
  ]

  // City pages - using /cities/ route
  const cityPages: MetadataRoute.Sitemap = citySlugs.map(slug => ({
    url: `${DOMAIN}/cities/${slug}`,
    lastModified: today,
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }))

  // City-service combo pages
  const cityServicePages: MetadataRoute.Sitemap = []
  const allCitySlugs = new Set<string>()

  // Add cities from cities-data.ts
  citiesData.forEach(city => {
    allCitySlugs.add(city.slug)
  })

  // Generate city-service URLs
  allCitySlugs.forEach(citySlug => {
    cityServiceTypes.forEach(serviceSlug => {
      cityServicePages.push({
        url: `${DOMAIN}/city-services/${citySlug}-${serviceSlug}`,
        lastModified: today,
        changeFrequency: 'weekly' as const,
        priority: 0.7
      })
    })
  })

  // Event pages
  const eventPages: MetadataRoute.Sitemap = usaEvents.map(event => ({
    url: `${DOMAIN}/events/${event.slug}`,
    lastModified: today,
    changeFrequency: 'weekly' as const,
    priority: event.tier === 1 ? 0.9 : event.tier === 2 ? 0.8 : 0.7
  }))

  // Event + Service combo pages
  const eventServicePages: MetadataRoute.Sitemap = []
  usaEvents.forEach(event => {
    eventServices.forEach(service => {
      eventServicePages.push({
        url: `${DOMAIN}/events/${event.slug}/${service}`,
        lastModified: today,
        changeFrequency: 'weekly' as const,
        priority: 0.6
      })
    })
  })

  // Venue pages
  const venuePages: MetadataRoute.Sitemap = venues.map(venue => ({
    url: `${DOMAIN}/venues/${venue.slug}`,
    lastModified: today,
    changeFrequency: 'weekly' as const,
    priority: venue.tier === 1 ? 0.9 : venue.tier === 2 ? 0.8 : 0.7
  }))

  // Venue + Service combo pages
  const venueServicePages: MetadataRoute.Sitemap = []
  venues.forEach(venue => {
    venueServices.forEach(service => {
      venueServicePages.push({
        url: `${DOMAIN}/venues/${venue.slug}/${service}`,
        lastModified: today,
        changeFrequency: 'weekly' as const,
        priority: 0.6
      })
    })
  })

  // State pages
  const states = [
    'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado',
    'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho',
    'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana',
    'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota',
    'mississippi', 'missouri', 'montana', 'nebraska', 'nevada',
    'new-hampshire', 'new-jersey', 'new-mexico', 'new-york-state', 'north-carolina',
    'north-dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania',
    'rhode-island', 'south-carolina', 'south-dakota', 'tennessee', 'texas',
    'utah', 'vermont', 'virginia', 'washington-state', 'west-virginia',
    'wisconsin', 'wyoming', 'district-of-columbia'
  ]

  const statePages: MetadataRoute.Sitemap = states.map(state => ({
    url: `${DOMAIN}/states/${state}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...cityPages,
    ...cityServicePages,
    ...eventPages,
    ...eventServicePages,
    ...venuePages,
    ...venueServicePages,
    ...statePages
  ]

  console.log(`Sitemap generated with ${allPages.length} URLs:`)
  console.log(`- Static pages: ${staticPages.length}`)
  console.log(`- City pages: ${cityPages.length}`)
  console.log(`- City-service pages: ${cityServicePages.length}`)
  console.log(`- Event pages: ${eventPages.length}`)
  console.log(`- Event-service pages: ${eventServicePages.length}`)
  console.log(`- Venue pages: ${venuePages.length}`)
  console.log(`- Venue-service pages: ${venueServicePages.length}`)
  console.log(`- State pages: ${statePages.length}`)

  return allPages
}
