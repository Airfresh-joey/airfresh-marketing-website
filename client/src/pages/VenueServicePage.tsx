import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin, Building, Users, CheckCircle, Phone, ArrowRight,
  Star, ChevronRight, Briefcase, Award, Clock, Shield, SquareStack
} from "lucide-react";

interface VenueServiceData {
  venue: {
    slug: string;
    name: string;
    shortName: string;
    city: string;
    state: string;
    stateAbbrev: string;
    address: string;
    exhibitSpace: string;
    meetingRooms: number;
    description: string;
    majorEvents: string[];
    image: string;
    tier: number;
  };
  service: {
    slug: string;
    name: string;
  };
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  benefits: string[];
  typicalRoles: string[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
  };
}

const serviceImages: Record<string, string> = {
  'brand-ambassadors': 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=85',
  'event-staff': 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&q=85',
  'promotional-models': 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1920&q=85',
  'trade-show-staff': 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=1920&q=85',
  'sampling-teams': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920&q=85',
  'hospitality-staff': 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85',
  'registration-staff': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=85',
  'product-demonstrators': 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1920&q=85',
  'conference-staffing': 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=85',
  'experiential-marketing': 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=85',
  'catering-staff': 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=85',
  'technical-support': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=85'
};

const allVenueServices = [
  'Brand Ambassadors',
  'Event Staff',
  'Trade Show Staff',
  'Registration Staff',
  'Hospitality Staff',
  'Product Demonstrators',
  'Promotional Models',
  'Conference Staffing',
  'Sampling Teams',
  'Catering Staff'
];

export default function VenueServicePage() {
  const { slug, service } = useParams<{ slug: string; service: string }>();

  const { data, isLoading, error } = useQuery<VenueServiceData>({
    queryKey: ['/api/venues', slug, 'service', service],
    queryFn: async () => {
      const response = await fetch(`/api/venues/${slug}/service/${service}`);
      if (!response.ok) throw new Error('Failed to fetch service data');
      return response.json();
    },
    enabled: !!slug && !!service
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-gray-600">Loading service details...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white">
        <div className="text-center max-w-md mx-auto px-4">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The service page you're looking for doesn't exist.</p>
          <div className="flex gap-4 justify-center">
            <Link href="/venues">
              <Button variant="outline">View All Venues</Button>
            </Link>
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { venue, service: serviceInfo, title, metaDescription, heroTitle, heroSubtitle, description, benefits, typicalRoles, cta } = data;

  const heroImage = serviceImages[serviceInfo.slug] || venue.image;

  const otherServices = allVenueServices
    .filter(s => s.toLowerCase().replace(/\s+/g, '-') !== serviceInfo.slug)
    .slice(0, 5);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": serviceInfo.name,
        "name": `${serviceInfo.name} at ${venue.name}`,
        "description": description,
        "provider": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "url": "https://airfreshmarketing.com"
        },
        "areaServed": {
          "@type": "City",
          "name": venue.city
        }
      },
      {
        "@type": "Place",
        "name": venue.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": venue.address,
          "addressLocality": venue.city,
          "addressRegion": venue.state,
          "addressCountry": "US"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Venues", "item": "https://airfreshmarketing.com/venues" },
          { "@type": "ListItem", "position": 3, "name": venue.shortName, "item": `https://airfreshmarketing.com/venues/${venue.slug}` },
          { "@type": "ListItem", "position": 4, "name": serviceInfo.name, "item": `https://airfreshmarketing.com/venues/${venue.slug}/${serviceInfo.slug}` }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title={title}
        description={metaDescription}
        keywords={`${serviceInfo.name}, ${venue.name}, ${venue.city} convention center staffing, venue staffing`}
        structuredData={structuredData}
        canonical={`https://airfreshmarketing.com/venues/${venue.slug}/${serviceInfo.slug}`}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section
          className="relative py-24 md:py-32 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <nav className="flex items-center text-sm text-white/70 mb-6 flex-wrap">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/venues" className="hover:text-white">Venues</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href={`/venues/${venue.slug}`} className="hover:text-white">{venue.shortName}</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white">{serviceInfo.name}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <Badge className="mb-4 bg-cyan-500/90 text-white">
                {serviceInfo.name}
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                {heroTitle}
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                {heroSubtitle}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-white/80">
                  <MapPin className="w-5 h-5 mr-2" />
                  {venue.city}, {venue.stateAbbrev}
                </div>
                <div className="flex items-center text-white/80">
                  <SquareStack className="w-5 h-5 mr-2" />
                  {venue.exhibitSpace}
                </div>
                <div className="flex items-center text-white/80">
                  <Building className="w-5 h-5 mr-2" />
                  {venue.meetingRooms} Meeting Rooms
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                    <Phone className="w-5 h-5 mr-2" />
                    Get a Free Quote
                  </Button>
                </Link>
                <Link href={`/venues/${venue.slug}`}>
                  <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20">
                    View Venue Details
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Professional {serviceInfo.name} at {venue.shortName}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {description}
                  </p>

                  {/* Benefits */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Why Choose AirFresh for {serviceInfo.name}?
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                        >
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Typical Roles */}
                  {typicalRoles && typicalRoles.length > 0 && (
                    <div className="mb-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Roles We Staff
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {typicalRoles.map((role, index) => (
                          <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Venue Info Card */}
                  <Card className="border-2 border-cyan-200 bg-cyan-50/50">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Building className="w-5 h-5 text-cyan-600" />
                        About {venue.shortName}
                      </h3>
                      <p className="text-gray-600 mb-4">{venue.description}</p>
                      <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
                        <div>
                          <p className="font-medium text-gray-900">Location</p>
                          <p>{venue.address}</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Exhibit Space</p>
                          <p>{venue.exhibitSpace}</p>
                          <p>{venue.meetingRooms} meeting rooms</p>
                        </div>
                      </div>
                      {venue.majorEvents && venue.majorEvents.length > 0 && (
                        <div className="mt-4">
                          <p className="font-medium text-gray-900 mb-2">Major Events Hosted</p>
                          <p className="text-gray-600">{venue.majorEvents.slice(0, 3).join(', ')}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* CTA Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="sticky top-24"
                >
                  <Card className="border-2 border-primary shadow-xl">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {cta.title}
                      </h3>
                      <p className="text-gray-600 mb-6">
                        {cta.description}
                      </p>
                      <Link href="/contact">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white" size="lg">
                          <Phone className="w-5 h-5 mr-2" />
                          {cta.buttonText}
                        </Button>
                      </Link>
                      <p className="text-center text-sm text-gray-500 mt-4">
                        Free consultation - No obligation
                      </p>
                    </CardContent>
                  </Card>

                  {/* Other Services */}
                  <Card className="mt-6">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-gray-900 mb-4">
                        Other Services at {venue.shortName}
                      </h4>
                      <div className="space-y-2">
                        {otherServices.map((otherService, index) => {
                          const otherSlug = otherService.toLowerCase().replace(/\s+/g, '-');
                          return (
                            <Link
                              key={index}
                              href={`/venues/${venue.slug}/${otherSlug}`}
                            >
                              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                <span className="text-gray-700">{otherService}</span>
                                <ArrowRight className="w-4 h-4 text-gray-400" />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Staff Your Next Event at {venue.shortName}
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get professional {serviceInfo.name.toLowerCase()} experienced with {venue.shortName}'s layout and requirements. Contact us today for a free quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8">
                    <Phone className="w-5 h-5 mr-2" />
                    Request Staff Quote
                  </Button>
                </Link>
                <a href="tel:+18001234567">
                  <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20 px-8">
                    Call: 1-800-123-4567
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
