import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Calendar, Users, ArrowRight, CheckCircle, Phone, Star } from "lucide-react";
import SEO from "@/components/SEO";
import { usaEvents, getEventBySlug } from "@/server/usa-events-data";

interface EventServicePageProps {
  params: Promise<{ slug: string; service: string }>;
}

const services = [
  {
    slug: 'brand-ambassadors',
    name: 'Brand Ambassadors',
    description: 'Professional brand representatives to engage your audience and drive meaningful connections with your target market.',
    benefits: [
      'Trained product experts who understand your brand',
      'Engaging personality and professional appearance',
      'Real-time reporting and lead capture',
      'Flexible scheduling to match event hours'
    ],
    pricing: 'Starting at $35/hour per ambassador'
  },
  {
    slug: 'event-staff',
    name: 'Event Staff',
    description: 'Experienced staff for registration, check-in, crowd management, and general event support.',
    benefits: [
      'Registration and check-in management',
      'Crowd control and wayfinding',
      'VIP area management',
      'General event support'
    ],
    pricing: 'Starting at $28/hour per staff member'
  },
  {
    slug: 'promotional-models',
    name: 'Promotional Models',
    description: 'Attractive, professional models for product launches, photo opportunities, and high-profile activations.',
    benefits: [
      'Professional appearance and demeanor',
      'Experience with photo/video shoots',
      'Product demonstration skills',
      'Social media amplification'
    ],
    pricing: 'Starting at $45/hour per model'
  },
  {
    slug: 'trade-show-staff',
    name: 'Trade Show Staff',
    description: 'Booth staff, lead scanners, and product demonstrators specialized in trade show environments.',
    benefits: [
      'Lead capture and qualification',
      'Product demonstration expertise',
      'Booth traffic management',
      'Technical product knowledge'
    ],
    pricing: 'Starting at $38/hour per staff member'
  },
  {
    slug: 'hospitality-staff',
    name: 'Hospitality Staff',
    description: 'VIP hosts, servers, bartenders, and guest services professionals for premium experiences.',
    benefits: [
      'Professional service training',
      'VIP guest management',
      'Beverage service certified',
      'Upscale event experience'
    ],
    pricing: 'Starting at $32/hour per staff member'
  },
  {
    slug: 'street-teams',
    name: 'Street Teams',
    description: 'High-energy teams for guerrilla marketing, sampling, and grassroots brand activations.',
    benefits: [
      'High-energy brand engagement',
      'Guerrilla marketing expertise',
      'GPS-tracked sampling routes',
      'Real-time photo documentation'
    ],
    pricing: 'Starting at $30/hour per team member'
  },
  {
    slug: 'sampling-teams',
    name: 'Sampling Teams',
    description: 'Product sampling specialists trained to drive trial, collect feedback, and build brand awareness.',
    benefits: [
      'Food handling certified',
      'Consumer engagement training',
      'Data collection capabilities',
      'Inventory management'
    ],
    pricing: 'Starting at $28/hour per sampler'
  },
  {
    slug: 'festival-staff',
    name: 'Festival Staff',
    description: 'Experienced festival and outdoor event personnel who thrive in high-energy environments.',
    benefits: [
      'Outdoor event experience',
      'Long-shift endurance',
      'Crowd engagement skills',
      'Weather-flexible scheduling'
    ],
    pricing: 'Starting at $30/hour per staff member'
  }
];

export async function generateStaticParams() {
  const params: { slug: string; service: string }[] = [];

  usaEvents.forEach(event => {
    services.forEach(service => {
      params.push({
        slug: event.slug,
        service: service.slug
      });
    });
  });

  return params;
}

export default async function EventServicePage({ params }: EventServicePageProps) {
  const { slug, service: serviceSlug } = await params;
  const event = getEventBySlug(slug);
  const service = services.find(s => s.slug === serviceSlug);

  if (!event || !service) {
    notFound();
  }

  const pageTitle = `${service.name} for ${event.name} | AirFresh Marketing`;
  const pageDescription = `Professional ${service.name.toLowerCase()} staffing for ${event.name} in ${event.city}, ${event.state}. ${service.description}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.name} for ${event.name}`,
    "description": pageDescription,
    "provider": {
      "@type": "Organization",
      "name": "AirFresh Marketing",
      "url": "https://airfreshmarketing.com"
    },
    "areaServed": {
      "@type": "City",
      "name": event.city
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={`${service.name.toLowerCase()}, ${event.name} staffing, ${event.city} event staff, ${event.category} staffing`}
        structuredData={structuredData}
        canonical={`https://airfreshmarketing.com/events/${event.slug}/${service.slug}`}
      />

      {/* Hero Section */}
      <section className="relative h-[450px] lg:h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={event.heroImage}
            alt={`${service.name} for ${event.name}`}
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
                <Badge className="bg-white/20 text-white">{event.category}</Badge>
                {event.featured && (
                  <Badge className="bg-yellow-500 text-black">
                    <Star className="w-3 h-3 mr-1" /> Featured
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {service.name} for {event.name}
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-200">
                {service.description}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-white/90 mb-8">
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
                  <span>{event.attendees}</span>
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
              <h2 className="text-3xl font-bold mb-6">{service.name} at {event.name}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                AirFresh Marketing provides professional {service.name.toLowerCase()} specifically trained
                for events like {event.name}. Our team understands the unique requirements of {event.category}
                events and delivers exceptional results for brands looking to make an impact at {event.venue}.
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

              <h3 className="text-2xl font-bold mb-4">Why Choose AirFresh for {event.name}?</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Local Expertise:</strong> Our {event.city}-area team knows the venue
                    and understands the local market dynamics.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Event-Specific Training:</strong> Every team member receives
                    customized training for {event.category} events and your specific brand.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Real-Time Reporting:</strong> Get live updates, photos, and metrics
                    throughout your activation.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">
                    <strong>Reliability Guaranteed:</strong> We maintain backup staff and
                    comprehensive contingency planning.
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              {/* Pricing Card */}
              <Card className="bg-gradient-to-br from-cyan-50 to-blue-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Pricing</h3>
                  <p className="text-2xl font-bold text-cyan-600 mb-2">{service.pricing}</p>
                  <p className="text-gray-600 text-sm mb-4">
                    Custom quotes available for multi-day activations and large teams.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contact">Get Custom Quote</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Event Info Card */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Event Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">{event.name}</p>
                      <p className="text-gray-600 text-sm">{event.venue}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{event.dates || event.month}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>{event.city}, {event.state}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  <Link
                    href={`/events/${event.slug}`}
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
                        href={`/events/${event.slug}/${s.slug}`}
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
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book {service.name}?
          </h2>
          <p className="text-xl mb-8 text-cyan-50">
            Secure your team for {event.name} today. We recommend booking early
            to ensure availability for this popular event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
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
