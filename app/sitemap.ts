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

const redirectSourcePaths = new Set([
  '/projects/case-studies',
  '/about-us',
  '/contact-us',
  '/projects',
  '/talent',
  '/join',
  '/convention-centers',
  '/brand-ambassadors',
  '/street-team-marketing',
  '/experiential-marketing',
  '/promotional-models',
  '/event-staff',
  '/event-staffing',
  '/privacy',
  '/terms',
  '/convention-staffing',
  '/marketing-mascots',
  '/guerilla-marketing',
  '/nationwide-brand-ambassadors',
  '/video-production',
  '/discovery-call',
  '/joey-calendar',
  '/brand-ambassador-order-form',
  '/brand-surveys-and-market-sampling',
  '/interactive-vending-machine',
  '/production-map',
  '/blog/event-staffing-texas-complete-market-guide-2026',
  '/blog/brand-ambassador-programs-college-campuses',
  '/blog/festival-brand-activation-los-angeles',
  '/blog/guerrilla-marketing-ideas-that-actually-work-real-examples',
  '/blog/experiential-marketing-case-studies',
  '/blog/top-event-staffing-agencies-trade-shows-2026',
  '/street-team',
  '/case-studies/netflix',
  '/case-studies/microsoft',
  '/services/product-sampling',
  '/cities/new-york',
])

const redirectSourcePatterns = [
  /^\/projects\/[^/]+$/,
  /^\/locations\/[^/]+$/,
  /^\/locations\/brand-ambassadors-[^/]+$/,
  /^\/city-services\/.+-street-team-marketing$/,
  /^\/portfolio\/[^/]+$/,
  /^\/city-services\/new-york-(?:brand-ambassadors|experiential-marketing|street-teams|promotional-models|sampling|convention-staffing|event-management)$/,
  /^\/cities\/new-york\/(?:brand-ambassadors|experiential-marketing|street-team-marketing|promotional-models|product-sampling|convention-staffing|trade-show-marketing|event-marketing)$/,
  /^\/cities\/[^/]+\/(?:brand-ambassadors|event-marketing|experiential-marketing|trade-show-marketing|convention-staffing|promotional-models|street-teams|sampling|event-staffing|trade-show-staff|street-team-marketing|product-sampling)$/,
  /^\/industries\/(?:tech|healthcare|financial|retail|sports|entertainment|beauty|real-estate|food-beverage)\/[^/]+$/,
]

function isRedirectSourceUrl(url: string) {
  const pathname = new URL(url).pathname.replace(/\/$/, '') || '/'
  return redirectSourcePaths.has(pathname) || redirectSourcePatterns.some(pattern => pattern.test(pathname))
}

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

const highIntentCityServicePages = new Set([
  'denver-brand-ambassadors',
  'denver-sampling',
  'las-vegas-convention-staffing',
  'las-vegas-brand-ambassadors',
  'los-angeles-brand-ambassadors',
  'san-diego-guerilla-marketing',
  'new-york-city-brand-ambassadors',
  'miami-brand-ambassadors',
])

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
    // Batch 185 event pages
    { url: `${DOMAIN}/staffing-for/memphis-in-may`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/portland-rose-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/san-antonio-stock-show-rodeo`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/tulsa-state-fair`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/savannah-music-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    // Batch 180 event pages
    { url: `${DOMAIN}/staffing-for/albuquerque-balloon-fiesta`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/sturgis-motorcycle-rally`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/firefly-music-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/new-york-auto-show`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/oregon-country-fair`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    // Batch 175 event pages
    { url: `${DOMAIN}/staffing-for/national-western-stock-show`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/minnesota-state-fair`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/detroit-grand-prix`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/la-pride-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/tough-mudder`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    // Batch 170 event pages
    { url: `${DOMAIN}/staffing-for/winter-x-games`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/chicago-marathon`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/daytona-bike-week`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/pax-east`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/americas-cup`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    // Batch 165 event pages
    { url: `${DOMAIN}/staffing-for/coachella`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/boston-marathon`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/comic-con-new-york`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/south-by-southwest`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/lollapalooza`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    // Batch 160 event pages
    { url: `${DOMAIN}/staffing-for/kentucky-derby`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/san-diego-comic-con`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/burning-man`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/rose-bowl`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/nba-all-star-weekend`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    // Batch 155 event pages
    { url: `${DOMAIN}/staffing-for/grammy-awards`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/world-series`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/masters-golf-tournament`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/new-years-eve-times-square`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/state-fair-of-texas`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    // Batch 150 event pages
    { url: `${DOMAIN}/staffing-for/us-open-tennis`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/new-orleans-jazz-heritage-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/indianapolis-500`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/san-francisco-outside-lands`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/new-york-marathon`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    // Batch 145 event pages
    { url: `${DOMAIN}/staffing-for/pga-championship`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/comic-con-san-diego`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/austin-city-limits-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/tribeca-film-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/electric-daisy-carnival-orlando`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    // Batch 140 event pages
    { url: `${DOMAIN}/staffing-for/bonnaroo-music-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/boston-marathon`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/burning-man`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/new-york-fashion-week`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/rose-bowl`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    // Batch 135 event pages
    { url: `${DOMAIN}/staffing-for/ultra-music-festival-miami`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/kentucky-derby`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/new-york-auto-show`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/nba-all-star-weekend`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/south-by-southwest`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    // Batch 130 event pages
    { url: `${DOMAIN}/staffing-for/summerfest`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/governors-ball`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/art-basel-miami`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/san-diego-county-fair`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/lollapalooza`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
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
    { url: `${DOMAIN}/staffing-for/mardi-gras`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/nycc`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/pitchfork-music-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/indy-500`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/houston-rodeo`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/hangout-fest`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/carolina-country-music-fest`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/nra-show`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/riot-fest`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/movement-detroit`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/tortuga-music-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/summerfest`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/namm-show`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/boston-calling`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/bottlerock-napa-valley`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/welcome-to-rockville`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/iii-points`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/shaky-knees`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/made-in-america`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/wonderfront`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/aftershock-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/faster-horses`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/something-in-the-water`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/forecastle-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/electric-zoo`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/levitate-music-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/watershed-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/camp-flog-gnaw`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/when-we-were-young`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/buku-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/kaaboo-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/voodoo-fest`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/okeechobee-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/day-n-vegas`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/twitchcon`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/lovers-and-friends-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/sonic-temple`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/just-like-heaven`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/two-step-inn`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/dreamville-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/arnold-sports-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/hinterland-music-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/elements-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/fan-expo-dallas`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/beyond-wonderland`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/electric-forest`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/life-is-beautiful`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/pax-west`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/essence-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/new-york-fashion-week`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/bonnaroo`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/outside-lands`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/complexcon`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/austin-city-limits`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/nycc`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/burning-man`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/stagecoach`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/houston-rodeo`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/mardi-gras`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/vidcon`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/e3`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/south-beach-wine-food-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/taste-of-chicago`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/tribeca-festival`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${DOMAIN}/staffing-for/sema`, lastModified: today, changeFrequency: 'monthly', priority: 0.85 },
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
      const cityServiceSlug = `${citySlug}-${serviceSlug}`
      const isHighIntent = highIntentCityServicePages.has(cityServiceSlug)

      cityServicePages.push({
        url: `${DOMAIN}/city-services/${cityServiceSlug}`,
        lastModified: today,
        changeFrequency: 'weekly' as const,
        priority: isHighIntent ? 0.9 : 0.7
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

  const indexablePages = allPages.filter(page => !isRedirectSourceUrl(page.url))
  const redirectedSourceCount = allPages.length - indexablePages.length

  if (redirectedSourceCount > 0) {
    console.log(`- Redirect sources removed: ${redirectedSourceCount}`)
  }

  const pagesByUrl = new Map<string, MetadataRoute.Sitemap[number]>()
  indexablePages.forEach(page => {
    if (!pagesByUrl.has(page.url)) {
      pagesByUrl.set(page.url, page)
    }
  })

  const uniquePages = Array.from(pagesByUrl.values())
  const duplicateCount = indexablePages.length - uniquePages.length

  if (duplicateCount > 0) {
    console.log(`- Duplicates removed: ${duplicateCount}`)
  }

  return uniquePages
}
