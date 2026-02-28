import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Square, Users, ArrowRight, CheckCircle, Phone, Building } from "lucide-react";
import SEO from "@/components/SEO";
import { venues, getVenueBySlug } from "@/server/venues-data";
import type { Metadata } from 'next';

interface VenueServicePageProps {
  params: Promise<{ slug: string; service: string }>;
}

const services = [
  {
    slug: 'brand-ambassadors',
    name: 'Brand Ambassadors',
    description: 'Professional brand representatives for booth engagement, product education, and lead generation at trade shows and conventions.',
    benefits: [
      'Trained product experts who understand your brand',
      'Engaging personality and professional appearance',
      'Real-time reporting and lead capture',
      'Flexible scheduling to match event hours'
    ],
    pricing: 'Starting at $35/hour per ambassador'
  },
  {
    slug: 'trade-show-staff',
    name: 'Trade Show Staff',
    description: 'Experienced booth staff, lead scanners, and product demonstrators specialized in trade show environments.',
    benefits: [
      'Lead capture and qualification expertise',
      'Product demonstration skills',
      'Booth traffic management',
      'Technical product knowledge'
    ],
    pricing: 'Starting at $38/hour per staff member'
  },
  {
    slug: 'event-staff',
    name: 'Event Staff',
    description: 'Reliable staff for registration, check-in, crowd management, and general event support.',
    benefits: [
      'Registration and check-in management',
      'Crowd control and wayfinding',
      'VIP area management',
      'General event support'
    ],
    pricing: 'Starting at $28/hour per staff member'
  },
  {
    slug: 'hospitality-staff',
    name: 'Hospitality Staff',
    description: 'VIP hosts, servers, bartenders, and guest services professionals for premium hospitality experiences.',
    benefits: [
      'Professional service training',
      'VIP guest management',
      'Beverage service certified',
      'Upscale event experience'
    ],
    pricing: 'Starting at $32/hour per staff member'
  },
  {
    slug: 'promotional-models',
    name: 'Promotional Models',
    description: 'Attractive, professional models for product launches, photo opportunities, and high-profile booth activations.',
    benefits: [
      'Professional appearance and demeanor',
      'Experience with photo/video shoots',
      'Product demonstration skills',
      'Social media amplification'
    ],
    pricing: 'Starting at $45/hour per model'
  },
  {
    slug: 'product-demonstrators',
    name: 'Product Demonstrators',
    description: 'Trained specialists who can effectively demonstrate and explain your products to trade show attendees.',
    benefits: [
      'Technical product training',
      'Live demonstration skills',
      'Q&A handling expertise',
      'Lead qualification'
    ],
    pricing: 'Starting at $40/hour per demonstrator'
  },
  {
    slug: 'registration-staff',
    name: 'Registration Staff',
    description: 'Efficient staff for check-in, badge scanning, attendee management, and registration desk operations.',
    benefits: [
      'Registration system proficiency',
      'Fast check-in processing',
      'Attendee assistance',
      'Problem resolution'
    ],
    pricing: 'Starting at $26/hour per staff member'
  },
  {
    slug: 'lead-generators',
    name: 'Lead Generators',
    description: 'Proactive staff focused on engaging attendees, qualifying leads, and driving booth traffic.',
    benefits: [
      'Proactive attendee engagement',
      'Lead qualification expertise',
      'Booth traffic driving',
      'Data capture proficiency'
    ],
    pricing: 'Starting at $35/hour per staff member'
  },
  {
    slug: 'convention-staffing',
    name: 'Convention Staffing',
    description: 'Complete convention staffing solutions including booth staff, demo specialists, and event support personnel.',
    benefits: [
      'Full-service convention support',
      'Experienced trade show professionals',
      'Flexible team sizing',
      'Multi-day event coverage'
    ],
    pricing: 'Starting at $32/hour per staff member'
  },
  {
    slug: 'event-management',
    name: 'Event Management',
    description: 'On-site event coordination and management to ensure seamless execution of your venue activations.',
    benefits: [
      'Professional event coordination',
      'Vendor and staff management',
      'Timeline and logistics oversight',
      'Problem resolution expertise'
    ],
    pricing: 'Starting at $50/hour for event managers'
  },
  {
    slug: 'experiential-marketing',
    name: 'Experiential Marketing',
    description: 'Immersive brand experiences and interactive activations designed for convention and venue environments.',
    benefits: [
      'Memorable brand experiences',
      'Interactive engagement tactics',
      'Social media integration',
      'Measurable ROI tracking'
    ],
    pricing: 'Custom pricing based on activation scope'
  },
  {
    slug: 'sampling-teams',
    name: 'Sampling Teams',
    description: 'Professional product sampling specialists trained to engage attendees and drive trial at events.',
    benefits: [
      'High-volume sampling capacity',
      'Brand messaging expertise',
      'Lead capture capabilities',
      'Health and safety compliance'
    ],
    pricing: 'Starting at $30/hour per team member'
  }
];

export async function generateStaticParams() {
  const params: { slug: string; service: string }[] = [];

  venues.forEach(venue => {
    services.forEach(service => {
      params.push({
        slug: venue.slug,
        service: service.slug
      });
    });
  });

  return params;
}

// Generate metadata for SEO (server-side)
export async function generateMetadata({ params }: VenueServicePageProps): Promise<Metadata> {
  const { slug, service: serviceSlug } = await params;
  const venue = getVenueBySlug(slug);
  const service = services.find(s => s.slug === serviceSlug);
  
  if (!venue || !service) {
    return { title: 'Service Not Found' };
  }
  
  return {
    title: `${service.name} for ${venue.shortName} | ${venue.city} Event Staffing`,
    description: `Professional ${service.name.toLowerCase()} for events at ${venue.name} in ${venue.city}, ${venue.state}. ${service.description}`,
    keywords: `${service.name.toLowerCase()} ${venue.shortName}, ${venue.city} ${service.name.toLowerCase()}, ${venue.name} staffing`,
    openGraph: {
      title: `${service.name} at ${venue.shortName} | AirFresh Marketing`,
      description: `Professional ${service.name.toLowerCase()} for ${venue.name} in ${venue.city}.`,
      url: `https://www.airfreshmarketing.com/venues/${slug}/${serviceSlug}`,
      type: 'website',
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} at ${venue.shortName} | AirFresh Marketing`,
      description: `Professional ${service.name.toLowerCase()} for ${venue.name}.`,
      images: ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/venues/${slug}/${serviceSlug}`,
    },
  };
}

export default async function VenueServicePage({ params }: VenueServicePageProps) {
  const { slug, service: serviceSlug } = await params;
  const venue = getVenueBySlug(slug);
  const service = services.find(s => s.slug === serviceSlug);

  if (!venue || !service) {
    notFound();
  }

  const pageTitle = `${service.name} for ${venue.shortName} | ${venue.city} Event Staffing`;
  const pageDescription = `Professional ${service.name.toLowerCase()} for events at ${venue.name} in ${venue.city}, ${venue.state}. ${service.description}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.name} for ${venue.name}`,
    "description": pageDescription,
    "provider": {
      "@type": "Organization",
      "name": "AirFresh Marketing",
      "url": "https://airfreshmarketing.com"
    },
    "areaServed": {
      "@type": "City",
      "name": venue.city
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={`${service.name.toLowerCase()}, ${venue.name} staffing, ${venue.city} trade show staff, convention center staffing`}
        structuredData={structuredData}
        canonical={`https://airfreshmarketing.com/venues/${venue.slug}/${service.slug}`}
      />

      {/* Hero Section */}
      <section className="relative h-[450px] lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={venue.image}
            alt={`${service.name} at ${venue.name}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 pointer-events-none" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge className="bg-primary text-white">{service.name}</Badge>
                <Badge className="bg-white/20 text-white">Tier {venue.tier}</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {service.name} at {venue.shortName}
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-200">
                {service.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/90 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{venue.city}, {venue.stateAbbrev}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Square className="w-5 h-5" />
                  <span>{venue.exhibitSpace}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>{venue.meetingRooms} rooms</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  <Link href="/contact">
                    Get Staffing Quote
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white/20">
                  <a href="tel:3037206060">
                    <Phone className="w-4 h-4 mr-2" />
                    (303) 720-6060
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">{service.name} at {venue.name}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                AirFresh Marketing provides professional {service.name.toLowerCase()} specifically experienced
                with events at {venue.name}. Our {venue.city}-based team understands the unique layout,
                logistics, and requirements of {venue.shortName}, ensuring seamless execution for your
                trade show, convention, or corporate event.
              </p>

              <h3 className="text-2xl font-bold mb-4">What You Get</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">Why {venue.shortName}?</h3>
              <p className="text-gray-700 mb-4">
                {venue.description}
              </p>
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h4 className="font-bold mb-3">Major Events at This Venue</h4>
                <div className="flex flex-wrap gap-2">
                  {venue.majorEvents.map((event, index) => (
                    <Badge key={index} variant="secondary">
                      {event}
                    </Badge>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4">Our Process</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-bold">Consultation</h4>
                    <p className="text-gray-600">We discuss your event goals, staffing needs, and brand requirements.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-bold">Team Selection</h4>
                    <p className="text-gray-600">We hand-pick staff who match your brand and have experience at {venue.shortName}.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-bold">Training</h4>
                    <p className="text-gray-600">Your team receives comprehensive product and brand training before the event.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-bold">Execution & Reporting</h4>
                    <p className="text-gray-600">We deliver exceptional service with real-time updates and post-event reporting.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Pricing Card */}
              <Card className="bg-gradient-to-br from-indigo-50 to-purple-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Pricing</h3>
                  <p className="text-2xl font-bold text-indigo-600 mb-2">{service.pricing}</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Custom quotes available for multi-day events and large teams.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Custom Quote</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Venue Info Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Venue Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">{venue.name}</p>
                      <p className="text-gray-600 text-sm">{venue.address}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Exhibit Space</p>
                        <p className="font-medium">{venue.exhibitSpace}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Meeting Rooms</p>
                        <p className="font-medium">{venue.meetingRooms}</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/venues/${venue.slug}`}
                    className="mt-4 inline-flex items-center text-primary text-sm font-medium"
                  >
                    View all staffing options <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>

              {/* Other Services */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Other Services</h3>
                  <div className="space-y-2">
                    {services.filter(s => s.slug !== service.slug).slice(0, 5).map((s) => (
                      <Link
                        key={s.slug}
                        href={`/venues/${venue.slug}/${s.slug}`}
                        className="block text-gray-600 hover:text-primary transition-colors"
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book {service.name}?
          </h2>
          <p className="text-xl mb-8 text-indigo-50">
            Secure your team for {venue.shortName}. We recommend booking early
            to ensure availability for popular events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
              <Link href="/contact">
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
