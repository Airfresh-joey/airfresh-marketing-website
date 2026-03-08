import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Square, Users, ArrowRight, CheckCircle, Phone, ExternalLink, Landmark, Car, Calendar, Building } from "lucide-react";
import SEO from "@/components/SEO";
import { venues, getVenueBySlug } from "@/server/venues-data";
import type { Metadata } from 'next';

interface VenuePageProps {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO (server-side)
export async function generateMetadata({ params }: VenuePageProps): Promise<Metadata> {
  const { slug } = await params;
  const venue = getVenueBySlug(slug);
  
  if (!venue) {
    return { title: 'Venue Not Found' };
  }
  
  return {
    title: `${venue.shortName} Event Staffing & Brand Ambassadors | ${venue.city}`,
    description: `Professional event staffing and brand ambassadors for ${venue.name} in ${venue.city}, ${venue.state}. Trade show staff, promotional models, and convention staffing.`,
    keywords: `${venue.shortName} staffing, ${venue.city} event staff, ${venue.name} brand ambassadors, convention staffing ${venue.city}`,
    openGraph: {
      title: `${venue.shortName} Event Staffing | AirFresh Marketing`,
      description: `Professional event staffing for ${venue.name} in ${venue.city}.`,
      url: `https://www.airfreshmarketing.com/venues/${slug}`,
      type: 'website',
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${venue.shortName} Event Staffing | AirFresh Marketing`,
      description: `Professional event staffing for ${venue.name} in ${venue.city}.`,
      images: ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/venues/${slug}`,
    },
  };
}

// Services matching sitemap venueServices for consistent internal linking
const services = [
  { slug: 'brand-ambassadors', name: 'Brand Ambassadors', description: 'Professional brand representatives for booth engagement' },
  { slug: 'convention-staffing', name: 'Convention Staffing', description: 'Full-service convention and trade show staffing solutions' },
  { slug: 'event-management', name: 'Event Management', description: 'Registration, check-in, and general event support' },
  { slug: 'experiential-marketing', name: 'Experiential Marketing', description: 'Interactive brand activations and immersive experiences' },
  { slug: 'trade-show-staff', name: 'Trade Show Staff', description: 'Booth staff, lead scanners, and product demonstrators' },
  { slug: 'hospitality-staff', name: 'Hospitality Staff', description: 'VIP hosts, servers, and guest services' },
  { slug: 'promotional-models', name: 'Promotional Models', description: 'Professional models for high-profile activations' },
  { slug: 'sampling-teams', name: 'Sampling Teams', description: 'Product sampling and demonstration specialists' }
];

export async function generateStaticParams() {
  return venues.map(venue => ({
    slug: venue.slug
  }));
}

export default async function VenuePage({ params }: VenuePageProps) {
  const { slug } = await params;
  const venue = getVenueBySlug(slug);

  if (!venue) {
    notFound();
  }

  const pageTitle = `${venue.name} Staffing | Event Staff for ${venue.shortName} | AirFresh Marketing`;
  const pageDescription = `Professional event staffing for ${venue.name} in ${venue.city}, ${venue.state}. Trade show staff, brand ambassadors, and hospitality teams for conventions and events at ${venue.shortName}.`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `AirFresh Marketing - ${venue.name} Staffing`,
    "description": pageDescription,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": venue.address.split(',')[0],
      "addressLocality": venue.city,
      "addressRegion": venue.state,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": venue.latitude,
      "longitude": venue.longitude
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={`${venue.name} staffing, ${venue.city} event staff, ${venue.shortName} trade show staff, convention center staffing, ${venue.city} brand ambassadors`}
        structuredData={structuredData}
        canonical={`https://airfreshmarketing.com/venues/${venue.slug}`}
      />

      {/* Hero Section */}
      <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={venue.image}
            alt={venue.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />
        </div>
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-white/20 text-white border-0">
                Tier {venue.tier} Convention Center
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                {venue.name} Staffing
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-gray-200">
                Professional event staffing for trade shows, conventions, and corporate events at {venue.shortName}
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
                  <span>{venue.meetingRooms} meeting rooms</span>
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
                    Call (303) 720-6060
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{venue.squareFootage}</div>
              <div className="text-indigo-200 text-sm">Total Space</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{venue.exhibitSpace}</div>
              <div className="text-indigo-200 text-sm">Exhibit Space</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">{venue.meetingRooms}</div>
              <div className="text-indigo-200 text-sm">Meeting Rooms</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">Tier {venue.tier}</div>
              <div className="text-indigo-200 text-sm">Venue Ranking</div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Description */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">About {venue.name}</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {venue.description}
              </p>

              <h3 className="text-2xl font-bold mb-4">Venue Features</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {venue.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4">Major Events at {venue.shortName}</h3>
              <div className="flex flex-wrap gap-2">
                {venue.majorEvents.map((event, index) => (
                  <Badge key={index} variant="secondary" className="px-3 py-1">
                    {event}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Location Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{venue.address}</p>
                  <a
                    href={venue.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:underline"
                  >
                    Visit Website <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </CardContent>
              </Card>

              {/* Transportation Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Car className="w-5 h-5" />
                    Getting There
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{venue.transportInfo}</p>
                </CardContent>
              </Card>

              {/* Nearby Attractions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Landmark className="w-5 h-5" />
                    Nearby Attractions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {venue.nearbyAttractions.map((attraction, index) => (
                      <li key={index} className="text-gray-600 text-sm">{attraction}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Staffing Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Staffing Services at {venue.shortName}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Professional event staff for trade shows, conventions, and corporate events
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link key={service.slug} href={`/venues/${venue.slug}/${service.slug}`}>
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

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Why Choose AirFresh for {venue.shortName}?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Building className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Venue Expertise</h3>
                <p className="text-gray-600">
                  Our team has extensive experience staffing events at {venue.name}.
                  We know the layout, logistics, and unique requirements of this venue.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Local Talent Pool</h3>
                <p className="text-gray-600">
                  We maintain a network of trained event professionals in {venue.city}
                  ready to represent your brand with excellence.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Calendar className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Flexible Scheduling</h3>
                <p className="text-gray-600">
                  From single-day activations to multi-week trade shows, we scale
                  to meet your staffing needs at any event at {venue.shortName}.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                <p className="text-gray-600">
                  Our clients trust us for consistent, high-quality staffing that
                  drives engagement and delivers measurable ROI.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Staff at {venue.shortName}?
          </h2>
          <p className="text-xl mb-8 text-indigo-50">
            Get a custom staffing quote for your event at {venue.name}.
            Our team is ready to make your activation a success.
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
