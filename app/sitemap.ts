import { MetadataRoute } from 'next'
import { usaEvents } from '@/server/usa-events-data'
import { venues } from '@/server/venues-data'
import { cities as citiesData } from '@/server/cities-data'
import { serviceTypes } from '@/server/city-services-data'
import { portfolioCaseStudies } from '@/server/portfolioCaseStudies'
import { industries } from '@/server/industries-data'
import { states, stateServices } from '@/server/states-data'
import { industries as industryList, cities as industryCities } from '@/server/industry-city-data'
import { neighborhoods, neighborhoodServices } from '@/server/neighborhoods-data'
import { blogPosts } from '@/server/blogPosts'
import fs from 'fs'
import path from 'path'

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
    { url: `${DOMAIN}/pricing`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${DOMAIN}/contact`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMAIN}/blog`, lastModified: today, changeFrequency: 'weekly', priority: 0.7 },
    // Blog posts - dynamically generated from blogPosts data
    ...blogPosts.map(post => {
      let lastMod = today
      try {
        const d = new Date(post.date)
        if (!isNaN(d.getTime())) lastMod = d.toISOString().split('T')[0]
      } catch {}
      return {
        url: `${DOMAIN}/blog/${post.slug}`,
        lastModified: lastMod,
        changeFrequency: 'monthly' as const,
        priority: 0.7
      }
    }),
    // Static blog pages (not in blogPosts array) - auto-discovered from app/blog/ directories
    ...(() => {
      const dynamicSlugs = new Set(blogPosts.map(p => p.slug))
      try {
        const blogDir = path.join(process.cwd(), 'app', 'blog')
        return fs.readdirSync(blogDir)
          .filter(d => d !== '[slug]' && !dynamicSlugs.has(d) && fs.existsSync(path.join(blogDir, d, 'page.tsx')))
          .map(slug => ({
            url: `${DOMAIN}/blog/${slug}`,
            lastModified: today,
            changeFrequency: 'monthly' as const,
            priority: 0.7
          }))
      } catch { return [] }
    })(),
    { url: `${DOMAIN}/portfolio`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    // Note: Individual portfolio pages redirect to /case-studies/, so we don't include them in sitemap
    { url: `${DOMAIN}/case-studies`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    // Individual case study pages (using portfolioCaseStudies which powers the actual pages)
    ...portfolioCaseStudies.map(cs => ({
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
    { url: `${DOMAIN}/technology`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/locations`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    // Pillar/guide pages (high-value, long-form content)
    { url: `${DOMAIN}/guides/best-event-staffing-agency`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${DOMAIN}/guides/event-staffing-101`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${DOMAIN}/guides/brand-ambassador-hiring-guide`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    // High-intent local search pages
    { url: `${DOMAIN}/event-staffing-near-me`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    // Event staffing hub page
    { url: `${DOMAIN}/staffing-for`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    // Venue/event-specific staffing pages (high-intent keywords)
    { url: `${DOMAIN}/staffing-for/ces`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/sema`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/coachella`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/f1-las-vegas`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMAIN}/staffing-for/nab-show`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/natural-products-expo`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/world-cup-2026`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${DOMAIN}/staffing-for/magic-las-vegas`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/sxsw`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/comic-con`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/super-bowl`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMAIN}/staffing-for/art-basel-miami`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/lollapalooza`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/edc-las-vegas`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/nyfw`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/essence-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/complexcon`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/pga-tour`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/austin-city-limits`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/outside-lands`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/dreamforce`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/burning-man`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/cedia-expo`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/bonnaroo`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/stagecoach`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/new-york-auto-show`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/vidcon`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/nrf-big-show`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/chicago-auto-show`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/miami-art-week`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/ultra-music-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/governors-ball`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/life-is-beautiful`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/rolling-loud`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/iheartradio-music-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/anime-expo`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/edc-orlando`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/firefly-music-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/electric-forest`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/la-auto-show`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/himss`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/sundance-film-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/tribeca-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/aws-reinvent`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/south-beach-wine-food-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/kcon-la`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/pax-west`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/taste-of-chicago`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/essence-fest`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/detroit-auto-show`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/sdcc`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/nba-all-star`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/kentucky-derby`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/nfl-draft`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/e3`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/miami-grand-prix`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/jazz-fest`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/daytona-500`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/cma-fest`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/rose-bowl`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/events`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${DOMAIN}/venues`, lastModified: today, changeFrequency: 'weekly', priority: 0.9 },
    // Competitor comparison pages (high-intent "vs" keywords)
    { url: `${DOMAIN}/compare`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${DOMAIN}/compare/alt-terrain`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/attack-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/atn-event-staffing`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${DOMAIN}/compare/elev8-staffing`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${DOMAIN}/compare/hype-agency`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/cea-staffing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/ignite-productions`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/assist-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/kinetic-events`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/mosaic-experiential`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/pro-motion-staffing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/advantage-solutions`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/allied-experiential`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/team-enterprises`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/encore-nationwide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/2x4-experiential`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/fusion-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/event-strategy-group`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/sparks-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/grammy-staffing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/next-level-promotions`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/lime-media`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/modern-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/compare/nparallel`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    // Additional pages
    { url: `${DOMAIN}/get-quote`, lastModified: today, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${DOMAIN}/team`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/resources`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/partners`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/partners/venues`, lastModified: today, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${DOMAIN}/partners/agencies`, lastModified: today, changeFrequency: 'monthly', priority: 0.65 },
    { url: `${DOMAIN}/checklist/event-planning`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/tools/roi-calculator`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/services/luxury-brand-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${DOMAIN}/services/retail-activations`, lastModified: today, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${DOMAIN}/services/trade-show-staffing`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${DOMAIN}/services/food-beverage-sampling`, lastModified: today, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${DOMAIN}/event-staffing-agency`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${DOMAIN}/hire-brand-ambassadors`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${DOMAIN}/brand-ambassador-agency`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${DOMAIN}/experiential-marketing-agency`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${DOMAIN}/promotional-staffing-agency`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${DOMAIN}/corporate-event-staffing`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${DOMAIN}/event-marketing-agency`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${DOMAIN}/brand-activation-agency`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${DOMAIN}/field-marketing-agency`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${DOMAIN}/guerrilla-marketing-agency`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${DOMAIN}/product-sampling-agency`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${DOMAIN}/mobile-marketing-tours`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${DOMAIN}/careers/experience-manager`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/careers/technical-intern`, lastModified: today, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${DOMAIN}/legal/privacy-policy`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${DOMAIN}/legal/terms-and-conditions`, lastModified: today, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // City pages - using /cities/ route
  const cityPages: MetadataRoute.Sitemap = citySlugs.map(slug => ({
    url: `${DOMAIN}/cities/${slug}`,
    lastModified: today,
    changeFrequency: 'weekly' as const,
    priority: 0.8
  }))

  // City + service detail pages (cities/[slug]/[service]) - 8 cities × 8 services
  const cityDetailServiceSlugs = ['brand-ambassadors', 'experiential-marketing', 'street-team-marketing', 'promotional-models', 'convention-staffing', 'product-sampling', 'event-marketing', 'trade-show-marketing']
  const cityDetailSlugs = ['new-york', 'los-angeles', 'chicago', 'miami', 'denver', 'san-francisco', 'austin', 'atlanta', 'boston', 'houston', 'philadelphia', 'new-orleans', 'orlando']
  const cityDetailServicePages: MetadataRoute.Sitemap = []
  cityDetailSlugs.forEach(city => {
    cityDetailServiceSlugs.forEach(service => {
      cityDetailServicePages.push({
        url: `${DOMAIN}/cities/${city}/${service}`,
        lastModified: today,
        changeFrequency: 'monthly' as const,
        priority: 0.7
      })
    })
  })

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

  // State pages - all 50 states + DC
  const statePages: MetadataRoute.Sitemap = states.map(state => ({
    url: `${DOMAIN}/states/${state.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  // State + Service combo pages (51 states × 9 services = 459 pages)
  const stateServicePages: MetadataRoute.Sitemap = []
  states.forEach(state => {
    stateServices.forEach(service => {
      stateServicePages.push({
        url: `${DOMAIN}/states/${state.slug}/${service.slug}`,
        lastModified: today,
        changeFrequency: 'monthly' as const,
        priority: 0.65
      })
    })
  })

  // Industry + City combo pages (10 industries × 40 cities = 400 pages)
  const industryCityPages: MetadataRoute.Sitemap = []
  industryList.forEach(industry => {
    industryCities.forEach(city => {
      industryCityPages.push({
        url: `${DOMAIN}/industries/${industry.slug}/${city.slug}`,
        lastModified: today,
        changeFrequency: 'monthly' as const,
        priority: 0.65
      })
    })
  })

  // Neighborhood pages (36 neighborhoods)
  const neighborhoodMainPages: MetadataRoute.Sitemap = neighborhoods.map(n => ({
    url: `${DOMAIN}/neighborhoods/${n.slug}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.7
  }))

  // Neighborhood + Service combo pages (36 neighborhoods × 5 services = 180 pages)
  const neighborhoodServicePages: MetadataRoute.Sitemap = []
  neighborhoods.forEach(neighborhood => {
    neighborhoodServices.forEach(service => {
      neighborhoodServicePages.push({
        url: `${DOMAIN}/neighborhoods/${neighborhood.slug}/${service.slug}`,
        lastModified: today,
        changeFrequency: 'monthly' as const,
        priority: 0.65
      })
    })
  })

  // Combine all pages
  const allPages = [
    ...staticPages,
    ...cityPages,
    ...cityDetailServicePages,
    ...cityServicePages,
    ...eventPages,
    ...eventServicePages,
    ...venuePages,
    ...venueServicePages,
    ...statePages,
    ...stateServicePages,
    ...industryCityPages,
    ...neighborhoodMainPages,
    ...neighborhoodServicePages
  ]

  console.log(`Sitemap generated with ${allPages.length} URLs:`)
  console.log(`- Static pages: ${staticPages.length}`)
  console.log(`- City pages: ${cityPages.length}`)
  console.log(`- City detail service pages: ${cityDetailServicePages.length}`)
  console.log(`- City-service pages: ${cityServicePages.length}`)
  console.log(`- Event pages: ${eventPages.length}`)
  console.log(`- Event-service pages: ${eventServicePages.length}`)
  console.log(`- Venue pages: ${venuePages.length}`)
  console.log(`- Venue-service pages: ${venueServicePages.length}`)
  console.log(`- State pages: ${statePages.length}`)
  console.log(`- State-service pages: ${stateServicePages.length}`)
  console.log(`- Industry-city pages: ${industryCityPages.length}`)
  console.log(`- Neighborhood pages: ${neighborhoodMainPages.length}`)
  console.log(`- Neighborhood-service pages: ${neighborhoodServicePages.length}`)

  return allPages
}
