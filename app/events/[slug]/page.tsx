import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, Users, ArrowRight, CheckCircle, Star, Phone, Hotel, Landmark, Car, Building } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import { usaEvents, getEventBySlug } from "@/server/usa-events-data";

// Helper to convert date strings to ISO 8601 format (with time component for Google compliance)
function toISO8601(dateStr: string | undefined, year?: number): string {
  if (!dateStr) return new Date().toISOString();
  
  // Try to parse dates like "February 8, 2026" or "July 14 - July 30, 2028"
  const months: Record<string, string> = {
    'january': '01', 'february': '02', 'march': '03', 'april': '04',
    'may': '05', 'june': '06', 'july': '07', 'august': '08',
    'september': '09', 'october': '10', 'november': '11', 'december': '12',
    'jan': '01', 'feb': '02', 'mar': '03', 'apr': '04', 'jun': '06',
    'jul': '07', 'aug': '08', 'sep': '09', 'oct': '10', 'nov': '11', 'dec': '12'
  };
  
  // Handle range dates - take the first date
  const firstDate = dateStr.split('-')[0].trim();
  
  // Try to match "Month Day, Year" or "Month Day"
  const match = firstDate.match(/([a-zA-Z]+)\s+(\d+),?\s*(\d{4})?/);
  if (match) {
    const month = months[match[1].toLowerCase()];
    const day = match[2].padStart(2, '0');
    const yr = match[3] || year || new Date().getFullYear();
    // Return full ISO 8601 datetime format (Google requires time component)
    return `${yr}-${month}-${day}T00:00:00`;
  }
  
  // Fallback - return current date in ISO format
  return new Date().toISOString();
}

// Helper to get end date from range (returns ISO 8601 datetime)
function getEndDate(dateStr: string | undefined, year?: number): string | null {
  if (!dateStr || !dateStr.includes('-')) return null;
  
  const months: Record<string, string> = {
    'january': '01', 'february': '02', 'march': '03', 'april': '04',
    'may': '05', 'june': '06', 'july': '07', 'august': '08',
    'september': '09', 'october': '10', 'november': '11', 'december': '12',
    'jan': '01', 'feb': '02', 'mar': '03', 'apr': '04', 'jun': '06',
    'jul': '07', 'aug': '08', 'sep': '09', 'oct': '10', 'nov': '11', 'dec': '12'
  };
  
  const parts = dateStr.split('-');
  if (parts.length < 2) return null;
  
  const secondDate = parts[1].trim();
  const match = secondDate.match(/([a-zA-Z]+)\s+(\d+),?\s*(\d{4})?/);
  if (match) {
    const month = months[match[1].toLowerCase()];
    const day = match[2].padStart(2, '0');
    const yr = match[3] || year || new Date().getFullYear();
    // Return full ISO 8601 datetime format with end of day time
    return `${yr}-${month}-${day}T23:59:59`;
  }
  
  return null;
}

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

const services = [
  { slug: 'brand-ambassadors', name: 'Brand Ambassadors', description: 'Professional brand representatives to engage your audience' },
  { slug: 'event-staff', name: 'Event Staff', description: 'Experienced staff for registration, check-in, and event support' },
  { slug: 'promotional-models', name: 'Promotional Models', description: 'Attractive, professional models for product launches and activations' },
  { slug: 'trade-show-staff', name: 'Trade Show Staff', description: 'Booth staff, lead scanners, and product demonstrators' },
  { slug: 'hospitality-staff', name: 'Hospitality Staff', description: 'VIP hosts, servers, and guest services professionals' },
  { slug: 'street-teams', name: 'Street Teams', description: 'High-energy teams for guerrilla marketing and sampling' },
  { slug: 'sampling-teams', name: 'Sampling Teams', description: 'Product sampling specialists to drive trial and awareness' },
  { slug: 'festival-staff', name: 'Festival Staff', description: 'Experienced festival and outdoor event personnel' }
];

export async function generateStaticParams() {
  return usaEvents.map(event => ({
    slug: event.slug
  }));
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  // Parse dates for structured data (ISO 8601 format required by Google)
  const startDateISO = toISO8601(event.dates || event.month);
  const endDateISO = getEndDate(event.dates);
  
  const eventFaqs = [
    {
      question: `How much does event staffing cost for ${event.name}?`,
      answer: `Event staffing rates for ${event.name} depend on the number of staff, roles required, shift length, and campaign complexity. Typical rates range from $30 to $75 per hour per staff member. AirFresh Marketing provides all-inclusive pricing covering recruitment, training, GPS check-in, on-site management, and post-event reporting. Contact us at (303) 720-6060 for a custom quote.`
    },
    {
      question: `How far in advance should I book staff for ${event.name}?`,
      answer: `We recommend booking 4-6 weeks before ${event.name} for optimal talent selection. For large-scale activations requiring 10+ staff members, 6-8 weeks is ideal. We can accommodate rush requests with as little as 1 week notice depending on availability. The earlier you book, the better selection of experienced ${event.city} talent you will have.`
    },
    {
      question: `What types of staff does AirFresh provide for ${event.name}?`,
      answer: `AirFresh Marketing provides brand ambassadors, promotional models, product demonstrators, lead capture specialists, registration staff, hospitality hosts, street teams, and on-site managers for ${event.name}. Every staff member completes brand-specific video training and must pass a knowledge quiz before the event. We match talent based on your brand, audience, and activation goals.`
    },
    {
      question: `How do you ensure staff reliability at ${event.name}?`,
      answer: `Every AirFresh staff member checks in via our GPS-enabled mobile app at the start of their shift, verifying location and arrival time. We maintain backup staff in ${event.city} who can be deployed within hours. On-site managers monitor performance throughout the event. Our consistent on-time arrival rate exceeds 99% across all events.`
    },
    {
      question: `Do you provide on-site management for ${event.name}?`,
      answer: `Yes, on-site management is included for all ${event.name} staffing engagements above minimum team size. Our event managers handle staff check-ins, enforce brand standards, monitor performance, manage breaks, troubleshoot issues, and serve as your single point of contact at ${event.venue}. They provide daily recap reports with engagement metrics.`
    }
  ];

  const eventSchema: Record<string, unknown> = {
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": startDateISO,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": event.venue,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": event.city,
        "addressRegion": event.state,
        "addressCountry": "US"
      }
    },
    "image": event.heroImage ? `https://www.airfreshmarketing.com${event.heroImage}` : undefined,
    "organizer": {
      "@type": "Organization",
      "name": "AirFresh Marketing",
      "url": "https://www.airfreshmarketing.com"
    },
    "performer": {
      "@type": "Organization",
      "name": event.name
    }
  };

  // Add endDate if it's a multi-day event
  if (endDateISO) {
    eventSchema.endDate = endDateISO;
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      eventSchema,
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Events", "item": "https://www.airfreshmarketing.com/events" },
          { "@type": "ListItem", "position": 3, "name": event.name, "item": `https://www.airfreshmarketing.com/events/${event.slug}` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": eventFaqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="pt-16 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Breadcrumbs items={[{ label: "Events", href: "/events" }, { label: event.name }]} />

      {/* Hero Section */}
      <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={event.heroImage}
            alt={`Brand ambassadors and event staffing at ${event.name} in ${event.city}, ${event.state}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="bg-primary text-white">{event.category}</Badge>
                <Badge className="bg-white/20 text-white">{event.subcategory}</Badge>
                {event.featured && (
                  <Badge className="bg-yellow-500 text-black">
                    <Star className="w-3 h-3 mr-1" /> Featured Event
                  </Badge>
                )}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {event.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-200">
                {event.heroSubtitle}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/90">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{event.city}, {event.state}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>{event.dates || event.month}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{event.attendees} attendees</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  <Link href="/get-quote">
                    Get Staffing Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                  <a href="tel:3037206060">
                    <Phone className="w-4 h-4 mr-2" />
                    Call (303) 720-6060
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">About {event.name}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {event.description}
              </p>

              <h3 className="text-2xl font-bold mb-4">Venue Information</h3>
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Building className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-lg">{event.venue}</h4>
                      <p className="text-gray-600">{event.city}, {event.state}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold mb-4">Typical Staffing Needs</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {event.staffingNeeds.map((need, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{need}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Quick Info Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Event Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">When</p>
                      <p className="text-gray-600">{event.dates || event.month}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Where</p>
                      <p className="text-gray-600">{event.venue}</p>
                      <p className="text-gray-500 text-sm">{event.city}, {event.state}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Expected Attendance</p>
                      <p className="text-gray-600">{event.attendees}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Nearby Hotels */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Hotel className="w-5 h-5" />
                    Nearby Hotels
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.nearbyHotels.map((hotel, index) => (
                      <li key={index} className="text-gray-600 text-sm">{hotel}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Local Attractions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Landmark className="w-5 h-5" />
                    Local Attractions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {event.localAttractions.map((attraction, index) => (
                      <li key={index} className="text-gray-600 text-sm">{attraction}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Transportation */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="w-5 h-5" />
                    Getting There
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{event.transportation}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Staffing Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Staffing Services for {event.name}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Professional event staff tailored to your specific needs at {event.name}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.filter(service =>
              event.relevantServices.some(rs =>
                rs.toLowerCase().includes(service.name.toLowerCase().split(' ')[0]) ||
                service.name.toLowerCase().includes(rs.toLowerCase().split(' ')[0])
              )
            ).slice(0, 8).map((service) => (
              <Link key={service.slug} href={`/events/${event.slug}/${service.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-2">{service.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <span className="text-primary text-sm font-medium flex items-center">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Services for This Event */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold mb-4 text-gray-900">All Staffing Services for {event.name}</h3>
          <div className="flex flex-wrap gap-2">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/events/${event.slug}/${service.slug}`}
                className="px-3 py-1.5 text-sm text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded border border-gray-200 transition-colors"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Roles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Typical Roles We Staff</h2>
          <div className="flex flex-wrap gap-3">
            {event.typicalRoles.map((role, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-base">
                {role}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">{event.name} Staffing FAQ</h2>
          <div className="space-y-6">
            {eventFaqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold mb-6 text-center text-gray-900">Explore More Resources</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <Link href="/pricing" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium text-center p-3 bg-white rounded-lg shadow-sm">Event Staffing Pricing</Link>
            <Link href="/technology" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium text-center p-3 bg-white rounded-lg shadow-sm">Our Technology Platform</Link>
            <Link href="/case-studies" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium text-center p-3 bg-white rounded-lg shadow-sm">Client Case Studies</Link>
            <Link href="/services/brand-ambassadors" className="text-cyan-600 hover:text-cyan-800 hover:underline text-sm font-medium text-center p-3 bg-white rounded-lg shadow-sm">Brand Ambassador Services</Link>
          </div>
        </div>
      </section>

      {/* Related Local Pages */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-6">Explore Event Staffing in {event.city}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href={`/cities/${event.city.toLowerCase().replace(/\s+/g, '-')}`} className="group">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                    Event Staffing in {event.city}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">All services in {event.city}</p>
                </CardContent>
              </Card>
            </Link>
            <Link href={`/states/${event.state.toLowerCase().replace(/\s+/g, '-')}`} className="group">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                    Event Staffing in {event.state}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">Statewide coverage</p>
                </CardContent>
              </Card>
            </Link>
            <Link href="/guides/best-event-staffing-agency" className="group">
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-5">
                  <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">
                    Best Event Staffing Agency Guide
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">2026 comprehensive comparison</p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Staff for {event.name}?
          </h2>
          <p className="text-xl mb-8 text-cyan-50">
            Get a custom staffing quote for your activation at {event.name}.
            Our experienced team is ready to make your event a success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              <Link href="/get-quote">
                Get Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <a href="tel:3037206060">
                <Phone className="w-4 h-4 mr-2" />
                Call (303) 720-6060
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
