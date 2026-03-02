import { MetadataRoute } from 'next'
import { usaEvents } from '@/server/usa-events-data'
import { venues } from '@/server/venues-data'
import { cities as citiesData } from '@/server/cities-data'
import { serviceTypes } from '@/server/city-services-data'
import { enhancedCaseStudies } from '@/server/case-studies-data'
import { industries } from '@/server/industries-data'
import { states, stateServices } from '@/server/states-data'
import { industries as industryList, cities as industryCities } from '@/server/industry-city-data'
import { neighborhoods, neighborhoodServices } from '@/server/neighborhoods-data'
import { portfolioCaseStudies } from '@/server/portfolio-case-studies'

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
    // Blog posts
    { url: `${DOMAIN}/blog/how-to-hire-brand-ambassadors`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/trade-show-marketing-strategies`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/what-is-experiential-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/street-marketing-examples`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/brand-ambassador-marketing-bringing-brands-to-life-on-the-ground`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/how-to-choose-the-right-experiential-agency-for-your-brand`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/why-top-brands-choose-professional-event-staffing-companies`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/how-street-teams-can-make-your-grand-opening-a-success-with-air-fresh-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/how-street-team-marketing-helped-grubhub-deliver-more-than-just-food`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/trade-show-staffing-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/product-sampling-campaigns-that-convert`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/experiential-marketing-roi`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/brand-ambassador-training-secrets`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/festival-marketing-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/sports-event-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/pop-up-shop-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/automotive-event-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/alcohol-beverage-promotions`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/guerrilla-marketing-tactics`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/event-staffing-checklist`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/denver-event-marketing-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/world-cup-2026-marketing-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/olympics-2028-la-marketing-opportunities`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/trade-show-lead-generation-tips`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/brand-activation-ideas-2026`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/event-staffing-rates-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/super-bowl-marketing-playbook`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/new-york-event-marketing-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/los-angeles-brand-activation-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/chicago-event-staffing-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/miami-experiential-marketing-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/texas-event-marketing-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/atlanta-event-marketing-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/ces-trade-show-staffing-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/sxsw-marketing-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/nfl-draft-marketing-opportunities`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/retail-grand-opening-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/convention-staffing-tips`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/influencer-event-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/case-studies/peelz-citrus`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/grocery-store-sampling-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/festival-marketing-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/automotive-marketing-events`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/beer-wine-spirits-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/tech-product-launch-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/healthcare-event-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/college-campus-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/sports-marketing-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/pop-up-shop-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/b2b-event-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/mobile-marketing-tours`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/guerrilla-marketing-tactics`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/event-roi-measurement`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/hiring-brand-ambassadors-checklist`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/seasonal-marketing-calendar`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/virtual-hybrid-events`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/experiential-marketing-trends-2026`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/crisis-management-events`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/brand-ambassador-training`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/trade-show-booth-design`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/event-photography-tips`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/sustainable-event-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/multi-city-campaign-management`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/beverage-sampling-best-practices`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/food-truck-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/launch-party-planning`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/holiday-marketing-campaigns`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/fitness-wellness-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/gaming-esports-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/pet-industry-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/cannabis-marketing-compliance`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/luxury-brand-activations`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/nonprofit-event-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/convention-center-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/qr-code-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/street-team-management`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/music-festival-sponsorship`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/product-demonstration-techniques`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/event-staffing-agencies-vs-direct-hire`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/event-marketing-budgeting`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/social-media-event-integration`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/conference-networking-events`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/promotional-model-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/experiential-retail-design`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/brand-activation-case-study-tips`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/event-insurance-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/multilingual-event-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/weather-contingency-planning`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/celebrity-event-appearances`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/experiential-marketing-kpis`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/sampling-compliance-regulations`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/corporate-event-planning`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/award-show-activations`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/brand-ambassador-retention`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/convention-floor-navigation`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/brand-activation-trends-2027`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/food-sampling-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/popup-store-operations`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/event-check-in-technology`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/automotive-ride-and-drive`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/customer-appreciation-events`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/event-staffing-software`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/brand-experience-design`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/event-marketing-glossary`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/we-staffed-500-events-heres-what-we-learned`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/truth-about-trade-show-booth-staff`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/brand-ambassador-day-in-life`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/experiential-marketing-failures`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/how-much-should-event-staffing-cost`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/small-budget-big-impact-activations`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/what-brands-get-wrong-about-sampling`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/why-your-trade-show-booth-isnt-working`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/future-of-experiential-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/f1-miami-grand-prix-marketing-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/f1-las-vegas-grand-prix-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/super-bowl-2027-marketing-opportunities`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/sxsw-brand-activation-complete-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/coachella-brand-marketing-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/ces-survival-guide-brands`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/nba-all-star-weekend-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/comic-con-brand-activation-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/new-york-fashion-week-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/art-basel-miami-brand-activations`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/kentucky-derby-brand-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/austin-event-marketing-local-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/denver-event-marketing-mile-high-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/chicago-brand-activation-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/how-to-choose-event-staffing-agency`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/worst-brand-activations-lessons`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/world-cup-2026-brand-marketing-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/olympics-2028-los-angeles-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/brand-ambassador-vs-influencer`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/event-staff-no-show-problem`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/trade-show-lead-generation-secrets`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/first-event-activation-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/hispanic-market-event-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/beer-brand-activation-playbook`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/music-festival-brand-activation`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/automotive-event-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/beauty-brand-activation-strategies`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/tech-product-launch-events`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/food-beverage-sampling-guide`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/cannabis-event-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/healthcare-pharma-event-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/sports-marketing-events`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/hotel-hospitality-events`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/college-campus-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/nonprofit-event-staffing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/luxury-brand-activation`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/brand-ambassador-training`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/retail-activation-strategies`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/event-staffing-technology`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/crisis-management-events`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/seasonal-event-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/multilingual-event-staff`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/sustainable-event-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/influencer-event-integration`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/b2b-event-marketing`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/pop-up-shop-strategies`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/blog/night-market-activations`, lastModified: today, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${DOMAIN}/portfolio`, lastModified: today, changeFrequency: 'weekly', priority: 0.8 },
    // Individual portfolio case studies
    ...portfolioCaseStudies.map(cs => ({
      url: `${DOMAIN}/portfolio/${cs.id}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.75
    })),
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

  return allPages
}
