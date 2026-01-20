import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin, Calendar, Users, CheckCircle, Phone, ArrowRight,
  Star, ChevronRight, Briefcase, Award, Clock, Shield
} from "lucide-react";

interface EventServiceData {
  event: {
    id: string;
    slug: string;
    name: string;
    city: string;
    state: string;
    venue: string;
    dates?: string;
    month: string;
    attendees: string;
    heroImage: string;
    relevantServices: string[];
  };
  service: {
    slug: string;
    name: string;
    isRelevant: boolean;
  };
  title: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  benefits: string[];
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
  'street-teams': 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=85',
  'vip-hosts': 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1920&q=85',
  'registration-staff': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1920&q=85',
  'product-demonstrators': 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1920&q=85',
  'festival-activation': 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1920&q=85',
  'conference-staffing': 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&q=85',
  'experiential-marketing': 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=85',
  'promotional-staff': 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=1920&q=85',
  'catering-staff': 'https://images.unsplash.com/photo-1555244162-803834f70033?w=1920&q=85',
  'technical-support': 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=85'
};

const serviceIcons: Record<string, React.ReactNode> = {
  'brand-ambassadors': <Users className="w-6 h-6" />,
  'event-staff': <Briefcase className="w-6 h-6" />,
  'promotional-models': <Star className="w-6 h-6" />,
  'trade-show-staff': <Award className="w-6 h-6" />,
  'sampling-teams': <Users className="w-6 h-6" />,
  'hospitality-staff': <Star className="w-6 h-6" />,
  'street-teams': <Users className="w-6 h-6" />,
  'vip-hosts': <Star className="w-6 h-6" />,
  'registration-staff': <Clock className="w-6 h-6" />,
  'product-demonstrators': <Briefcase className="w-6 h-6" />,
  'festival-activation': <Star className="w-6 h-6" />,
  'conference-staffing': <Briefcase className="w-6 h-6" />,
  'experiential-marketing': <Award className="w-6 h-6" />,
  'promotional-staff': <Users className="w-6 h-6" />,
  'catering-staff': <Star className="w-6 h-6" />,
  'technical-support': <Shield className="w-6 h-6" />
};

export default function EventServicePage() {
  const { slug, service } = useParams<{ slug: string; service: string }>();

  const { data, isLoading, error } = useQuery<EventServiceData>({
    queryKey: ['/api/events', slug, 'service', service],
    queryFn: async () => {
      const response = await fetch(`/api/events/${slug}/service/${service}`);
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
            <Link href="/events">
              <Button variant="outline">View All Events</Button>
            </Link>
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const { event, service: serviceInfo, title, metaDescription, heroTitle, heroSubtitle, description, benefits, cta } = data;

  const heroImage = serviceImages[serviceInfo.slug] || event.heroImage;

  const otherServices = event.relevantServices
    .filter(s => s.toLowerCase().replace(/\s+/g, '-') !== serviceInfo.slug)
    .slice(0, 4);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": serviceInfo.name,
        "name": `${serviceInfo.name} for ${event.name}`,
        "description": description,
        "provider": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "url": "https://airfreshmarketing.com"
        },
        "areaServed": {
          "@type": "City",
          "name": event.city
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Events", "item": "https://airfreshmarketing.com/events" },
          { "@type": "ListItem", "position": 3, "name": event.name, "item": `https://airfreshmarketing.com/events/${event.slug}` },
          { "@type": "ListItem", "position": 4, "name": serviceInfo.name, "item": `https://airfreshmarketing.com/events/${event.slug}/${serviceInfo.slug}` }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title={title}
        description={metaDescription}
        keywords={`${serviceInfo.name}, ${event.name}, ${event.city} event staffing, ${event.name} staffing`}
        structuredData={structuredData}
        canonical={`https://airfreshmarketing.com/events/${event.slug}/${serviceInfo.slug}`}
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
            <nav className="flex items-center text-sm text-white/70 mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href="/events" className="hover:text-white">Events</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <Link href={`/events/${event.slug}`} className="hover:text-white">{event.name}</Link>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-white">{serviceInfo.name}</span>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <Badge className="mb-4 bg-primary/90 text-white">
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
                  {event.city}, {event.state}
                </div>
                <div className="flex items-center text-white/80">
                  <Calendar className="w-5 h-5 mr-2" />
                  {event.dates || event.month}
                </div>
                <div className="flex items-center text-white/80">
                  <Users className="w-5 h-5 mr-2" />
                  {event.attendees} attendees
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                    <Phone className="w-5 h-5 mr-2" />
                    Get a Free Quote
                  </Button>
                </Link>
                <Link href={`/events/${event.slug}`}>
                  <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20">
                    View Event Details
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
                    Professional {serviceInfo.name} for {event.name}
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

                  {/* Event Info Card */}
                  <Card className="border-2 border-primary/20 bg-primary/5">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        About {event.name}
                      </h3>
                      <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
                        <div>
                          <p className="font-medium text-gray-900">Location</p>
                          <p>{event.venue}</p>
                          <p>{event.city}, {event.state}</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Date</p>
                          <p>{event.dates || event.month}</p>
                          <p className="text-primary font-medium">{event.attendees} expected</p>
                        </div>
                      </div>
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
                        {serviceIcons[serviceInfo.slug] || <Users className="w-6 h-6 text-primary" />}
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
                  {otherServices.length > 0 && (
                    <Card className="mt-6">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-gray-900 mb-4">
                          Other Services for {event.name}
                        </h4>
                        <div className="space-y-2">
                          {otherServices.map((otherService, index) => {
                            const otherSlug = otherService.toLowerCase().replace(/\s+/g, '-');
                            return (
                              <Link
                                key={index}
                                href={`/events/${event.slug}/${otherSlug}`}
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
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Staff Your {event.name} Experience?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Get professional {serviceInfo.name.toLowerCase()} trained specifically for {event.name}. Contact us today for a free quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8">
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
