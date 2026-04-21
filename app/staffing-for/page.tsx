import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Users, ArrowRight, Calendar, Star, Phone, Trophy, Zap } from 'lucide-react';
import { eventPages } from '@/server/eventPages';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Event Staffing Services for Major Events & Festivals | Air Fresh Marketing',
  description: 'Event staffing services for 50+ major events including CES, SXSW, Coachella, Comic-Con, and more. Professional brand ambassadors, promotional models, and event staff nationwide.',
  keywords: 'event staffing, festival staffing, conference staffing, trade show staffing, brand ambassadors for events, event staff agency',
  openGraph: {
    type: 'website',
    title: 'Event Staffing for 50+ Major Events | Air Fresh Marketing',
    description: 'Professional event staffing for CES, SXSW, Coachella, Comic-Con, and 50+ major events nationwide.',
    url: 'https://www.airfreshmarketing.com/staffing-for',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: 'https://www.airfreshmarketing.com/staffing-for',
  },
};

export default function EventStaffingIndex() {
  // Group events by region/type for better organization
  const musicFestivals = eventPages.filter(e =>
    ['coachella', 'ultra-music-festival', 'ultra-music-festival-miami', 'edc-las-vegas', 'edc-orlando', 'electric-daisy-carnival-orlando', 'rolling-loud', 'electric-forest', 'firefly-music-festival', 'bonnaroo', 'bonnaroo-music-festival', 'austin-city-limits', 'austin-city-limits-festival', 'lollapalooza', 'governors-ball', 'life-is-beautiful', 'iheartradio-music-festival', 'outside-lands', 'pitchfork-music-festival', 'jazz-fest', 'cma-fest', 'hangout-fest', 'carolina-country-music-fest', 'riot-fest', 'movement-detroit', 'tortuga-music-festival', 'summerfest', 'boston-calling', 'bottlerock-napa-valley', 'welcome-to-rockville', 'iii-points', 'shaky-knees', 'made-in-america', 'wonderfront', 'aftershock-festival', 'faster-horses', 'something-in-the-water', 'forecastle-festival', 'electric-zoo', 'levitate-music-festival', 'watershed-festival', 'camp-flog-gnaw', 'when-we-were-young', 'buku-festival', 'kaaboo-festival', 'voodoo-fest', 'okeechobee-festival', 'day-n-vegas', 'lovers-and-friends-festival', 'sonic-temple', 'just-like-heaven', 'two-step-inn', 'dreamville-festival', 'hinterland-music-festival', 'elements-festival', 'beyond-wonderland', 'new-orleans-jazz-heritage-festival', 'san-francisco-outside-lands', 'savannah-music-festival'].includes(e.slug)
  );
  const techConferences = eventPages.filter(e =>
    ['ces', 'sxsw', 'south-by-southwest', 'aws-reinvent', 'e3', 'dreamforce', 'nab-show', 'himss'].includes(e.slug)
  );
  const conventions = eventPages.filter(e =>
    ['comic-con', 'sdcc', 'comic-con-san-diego', 'san-diego-comic-con', 'nycc', 'comic-con-new-york', 'anime-expo', 'pax-west', 'pax-east', 'kcon-la', 'vidcon', 'complexcon', 'twitchcon', 'fan-expo-dallas'].includes(e.slug)
  );
  const tradeShows = eventPages.filter(e =>
    ['nrf-big-show', 'natural-products-expo', 'la-auto-show', 'detroit-auto-show', 'art-basel-miami', 'sema', 'magic-las-vegas', 'nab-show', 'cedia-expo', 'new-york-auto-show', 'chicago-auto-show', 'nra-show', 'namm-show', 'arnold-sports-festival'].includes(e.slug)
  );
  const foodCulture = eventPages.filter(e =>
    ['taste-of-chicago', 'south-beach-wine-food-festival', 'essence-fest', 'essence-festival', 'nyfw', 'new-york-fashion-week', 'tribeca-festival', 'tribeca-film-festival', 'sundance-film-festival', 'burning-man', 'miami-art-week', 'stagecoach', 'mardi-gras', 'rose-bowl', 'houston-rodeo', 'san-diego-county-fair', 'kentucky-derby', 'nba-all-star-weekend', 'boston-marathon', 'grammy-awards', 'new-years-eve-times-square', 'state-fair-of-texas', 'national-western-stock-show', 'minnesota-state-fair', 'la-pride-festival', 'albuquerque-balloon-fiesta', 'oregon-country-fair', 'memphis-in-may', 'portland-rose-festival', 'tulsa-state-fair'].includes(e.slug)
  );
  const sportsMajor = eventPages.filter(e =>
    ['super-bowl', 'nba-all-star', 'f1-las-vegas', 'miami-grand-prix', 'kentucky-derby', 'nfl-draft', 'pga-tour', 'pga-championship', 'world-cup-2026', 'daytona-500', 'indy-500', 'boston-marathon', 'chicago-marathon', 'rose-bowl', 'indianapolis-500', 'new-york-marathon', 'us-open-tennis', 'world-series', 'masters-golf-tournament', 'winter-x-games', 'daytona-bike-week', 'americas-cup', 'detroit-grand-prix', 'tough-mudder', 'sturgis-motorcycle-rally', 'san-antonio-stock-show-rodeo'].includes(e.slug)
  );

  // Catch any not categorized
  const allCategorized = [...musicFestivals, ...techConferences, ...sportsMajor, ...conventions, ...tradeShows, ...foodCulture];
  const other = eventPages.filter(e => !allCategorized.some(c => c.slug === e.slug));

  const categories = [
    { name: 'Music Festivals', icon: '🎵', events: musicFestivals, description: 'Festival staffing for the biggest music events in the country' },
    { name: 'Tech Conferences', icon: '💻', events: techConferences, description: 'Professional staff for technology summits and expos' },
    { name: 'Sports & Championships', icon: '🏆', events: sportsMajor, description: 'Event staff for major sporting events and championships' },
    { name: 'Pop Culture Conventions', icon: '🎮', events: conventions, description: 'Brand ambassadors and promo models for fan conventions' },
    { name: 'Trade Shows & Expos', icon: '📊', events: tradeShows, description: 'Booth staff and lead generation teams for trade shows' },
    { name: 'Food, Film & Culture', icon: '🎬', events: foodCulture, description: 'Staffing for cultural festivals, film festivals, and food events' },
  ];

  if (other.length > 0) {
    categories.push({ name: 'More Events', icon: '⭐', events: other, description: 'Additional premier events we staff nationwide' });
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Event Staffing Services - Major Events Directory",
    "description": "Professional event staffing for 50+ major events, festivals, conferences, and trade shows across the United States.",
    "numberOfItems": eventPages.length,
    "itemListElement": eventPages.map((event, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": event.h1,
        "url": `https://www.airfreshmarketing.com/staffing-for/${event.slug}`,
        "description": event.metaDescription,
        "areaServed": {
          "@type": "City",
          "name": event.city
        },
        "provider": {
          "@type": "Organization",
          "name": "Air Fresh Marketing",
          "url": "https://www.airfreshmarketing.com"
        }
      }
    }))
  };

  return (
    <div className="pt-16 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-cyan-900 to-blue-900">
        <div className="absolute inset-0 bg-[url('/images/hero-experiential.jpg')] bg-cover bg-center opacity-15" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-0">
              <Calendar className="w-4 h-4 mr-1" />
              {eventPages.length}+ Events Nationwide
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Event Staffing for Major Events & Festivals
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Air Fresh Marketing provides professional event staffing for {eventPages.length}+ premier events
              across the United States. From brand ambassadors to promotional models, we deliver
              reliable, trained staff for every major event.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                <Link href="/get-quote">
                  <Phone className="w-5 h-5 mr-2" />
                  Get a Free Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10">
                <Link href="/services">
                  View All Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-cyan-600">{eventPages.length}+</p>
              <p className="text-sm text-gray-600">Major Events</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-600">200+</p>
              <p className="text-sm text-gray-600">Cities Nationwide</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-600">15K+</p>
              <p className="text-sm text-gray-600">Staff Deployed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-cyan-600">99%</p>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Categories */}
      {categories.filter(c => c.events.length > 0).map((category) => (
        <section key={category.name} className="py-16 odd:bg-gray-50 even:bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </h2>
              <p className="text-gray-600">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.events.map((event) => (
                <Link
                  key={event.slug}
                  href={`/staffing-for/${event.slug}`}
                  className="group"
                >
                  <Card className="h-full transition-all duration-200 group-hover:shadow-lg group-hover:border-cyan-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">
                          {event.h1.replace(' Staffing', '')}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-500 transition-colors flex-shrink-0 ml-2" />
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.city}, {event.stateAbbrev}
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                        {event.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {event.staffTypes.slice(0, 3).map((type) => (
                          <Badge key={type} variant="secondary" className="text-xs">
                            {type}
                          </Badge>
                        ))}
                        {event.staffTypes.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{event.staffTypes.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Trophy className="w-12 h-12 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don&apos;t See Your Event? We Still Staff It.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Air Fresh Marketing provides staffing for events of all sizes across the country.
            Contact us for a custom staffing plan tailored to your event.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-cyan-700 hover:bg-gray-100">
              <Link href="/get-quote">
                Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white/40 hover:bg-white/10">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Explore Our Services</h2>
          <div className="flex flex-wrap justify-center gap-2">
            <Link href="/event-staffing-agency" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Event Staffing Agency</Link>
            <Link href="/brand-ambassador-agency" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Brand Ambassador Agency</Link>
            <Link href="/experiential-marketing-agency" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Experiential Marketing Agency</Link>
            <Link href="/promotional-staffing-agency" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Promotional Staffing</Link>
            <Link href="/corporate-event-staffing" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Corporate Event Staffing</Link>
            <Link href="/hire-brand-ambassadors" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Hire Brand Ambassadors</Link>
            <Link href="/services/trade-show-staffing" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Trade Show Staffing</Link>
            <Link href="/services/food-beverage-sampling" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Food & Beverage Sampling</Link>
            <Link href="/pricing" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Pricing</Link>
            <Link href="/compare" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Compare Agencies</Link>
            <Link href="/blog" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Blog</Link>
            <Link href="/locations" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">All 200+ Locations</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
