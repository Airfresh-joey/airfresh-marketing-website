import { MetadataRoute } from 'next'
import { usaEvents } from '@/server/usa-events-data'
import { venues } from '@/server/venues-data'
import { cities as citiesData } from '@/server/cities-data'
import { serviceTypes } from '@/server/city-services-data'
import { enhancedCaseStudies } from '@/server/case-studies-data'
import { industries } from '@/server/industries-data'

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

// Cities with dedicated pages - now uses ALL cities from cities-data.ts
const citySlugs = citiesData.map(city => city.slug)

// City service types - use actual service slugs from city-services-data.ts
const cityServiceTypes = serviceTypes.map(s => s.slug)

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
    // Static blog posts
    { url: `${DOMAIN}/blog/how-to-hire-brand-ambassadors`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/trade-show-marketing-strategies`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/what-is-experiential-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/portfolio`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${DOMAIN}/case-studies`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    // Individual case study pages
    ...enhancedCaseStudies.map(cs => ({
      url: `${DOMAIN}/case-studies/${cs.id}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.85
    })),
    { url: `${DOMAIN}/careers`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${DOMAIN}/industries`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    // Individual industry pages
    ...industries.map(ind => ({
      url: `${DOMAIN}/industries/${ind.slug}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.8
    })),
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

  // State pages - only include states that have actual pages
  // Page slugs use abbreviations: ca, ny, tx, fl, il, co, ga, wa
  const states = ['ca', 'ny', 'tx', 'fl', 'il', 'co', 'ga', 'wa']

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
