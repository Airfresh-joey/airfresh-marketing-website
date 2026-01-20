import { useParams, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin, Calendar, Users, Building, Briefcase, CheckCircle,
  Phone, ArrowRight, Hotel, Plane, Car, Star, ChevronRight
} from "lucide-react";

interface USAEvent {
  id: string;
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  city: string;
  state: string;
  venue: string;
  month: string;
  dates?: string;
  attendees: string;
  industry: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroSubtitle: string;
  description: string;
  relevantServices: string[];
  nearbyHotels: string[];
  localAttractions: string[];
  transportation: string;
  staffingNeeds: string[];
  typicalRoles: string[];
  heroImage: string;
  featured?: boolean;
  tier: number;
}

export default function EventPage() {
  const { slug } = useParams<{ slug: string }>();

  const { data: event, isLoading, error } = useQuery<USAEvent>({
    queryKey: ['/api/events', slug],
    queryFn: async () => {
      const response = await fetch(`/api/events/${slug}`);
      if (!response.ok) throw new Error('Failed to fetch event');
      return response.json();
    },
    enabled: !!slug
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-6">The event you're looking for doesn't exist.</p>
          <Link href="/events">
            <Button>View All Events</Button>
          </Link>
        </div>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Event",
        "name": event.name,
        "description": event.description,
        "startDate": event.dates,
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
        "organizer": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "url": "https://airfreshmarketing.com"
        }
      },
      {
        "@type": "Service",
        "serviceType": "Event Staffing",
        "name": `${event.name} Event Staffing`,
        "description": `Professional event staffing services for ${event.name} in ${event.city}`,
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
          { "@type": "ListItem", "position": 3, "name": event.name, "item": `https://airfreshmarketing.com/events/${event.slug}` }
        ]
      }
    ]
  };

  const categoryColors: Record<string, string> = {
    sports: "bg-green-500",
    festival: "bg-purple-500",
    conference: "bg-blue-500",
    convention: "bg-orange-500",
    expo: "bg-cyan-500",
    cultural: "bg-pink-500"
  };

  return (
    <>
      <SEO
        title={event.title}
        description={event.metaDescription}
        keywords={event.keywords.join(', ')}
        structuredData={structuredData}
        canonical={`https://airfreshmarketing.com/events/${event.slug}`}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section
          className="relative py-24 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${event.heroImage})`
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-white/70 text-sm mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/events" className="hover:text-white">Events</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white">{event.name}</span>
            </nav>

            <div className="flex flex-wrap gap-3 mb-6">
              <Badge className={`${categoryColors[event.category] || 'bg-gray-500'} text-white`}>
                {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
              </Badge>
              <Badge variant="outline" className="border-white/50 text-white">
                {event.subcategory}
              </Badge>
              {event.featured && (
                <Badge className="bg-yellow-500 text-black">
                  <Star className="w-3 h-3 mr-1" /> Featured
                </Badge>
              )}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold text-white mb-4"
            >
              {event.heroTitle}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-white/90 max-w-3xl mb-8"
            >
              {event.heroSubtitle}
            </motion.p>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 text-white/90 mb-8">
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
              <div className="flex items-center gap-2">
                <Building className="w-5 h-5" />
                <span>{event.venue}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <a href="/contact">Get Staffing Quote</a>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20">
                <a href="tel:3037206060">
                  <Phone className="w-4 h-4 mr-2" />
                  (303) 720-6060
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">{event.attendees}</div>
                <div className="text-gray-600">Expected Attendees</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">{event.relevantServices.length}</div>
                <div className="text-gray-600">Services Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">{event.typicalRoles.length}+</div>
                <div className="text-gray-600">Staff Roles</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* About the Event */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">About {event.name}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{event.description}</p>
                </div>

                {/* Our Services */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Staffing Services for {event.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.relevantServices.map((service, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-4 flex items-center gap-3">
                          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                          <span className="font-medium">{service}</span>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Staffing Needs */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">What We Staff</h2>
                  <p className="text-gray-600 mb-6">
                    Our experienced team provides professional staff for all aspects of {event.name}:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {event.staffingNeeds.map((need, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{need}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typical Roles */}
                <div>
                  <h2 className="text-3xl font-bold mb-6">Typical Staff Roles</h2>
                  <div className="flex flex-wrap gap-3">
                    {event.typicalRoles.map((role, index) => (
                      <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                        {role}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Local Guide */}
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h2 className="text-3xl font-bold mb-6">{event.city} Event Guide</h2>

                  {/* Hotels */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Hotel className="w-5 h-5 text-primary" />
                      Where to Stay
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {event.nearbyHotels.map((hotel, index) => (
                        <div key={index} className="flex items-center gap-2 text-gray-700">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {hotel}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Transportation */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Plane className="w-5 h-5 text-primary" />
                      Getting There
                    </h3>
                    <p className="text-gray-700">{event.transportation}</p>
                  </div>

                  {/* Attractions */}
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary" />
                      Local Attractions
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {event.localAttractions.map((attraction, index) => (
                        <Badge key={index} variant="outline">
                          {attraction}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Sidebar */}
              <div className="space-y-6">
                {/* Contact Card */}
                <Card className="sticky top-24 bg-gradient-to-br from-primary to-primary/80 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Need Staff for {event.name}?</h3>
                    <p className="mb-6 text-white/90">
                      Get a custom staffing quote for your {event.name} activation or experience.
                    </p>
                    <div className="space-y-3">
                      <Button asChild className="w-full bg-white text-primary hover:bg-gray-100">
                        <a href="/contact">Request Quote</a>
                      </Button>
                      <Button asChild variant="outline" className="w-full border-white text-white hover:bg-white/10">
                        <a href="tel:3037206060">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Event Details */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Event Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Calendar className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">When</div>
                          <div className="text-gray-600">{event.dates || event.month}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">Where</div>
                          <div className="text-gray-600">{event.venue}</div>
                          <div className="text-gray-600">{event.city}, {event.state}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">Attendance</div>
                          <div className="text-gray-600">{event.attendees}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Briefcase className="w-5 h-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">Industry</div>
                          <div className="text-gray-600">{event.industry}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Why AirFresh?</h3>
                    <div className="space-y-3">
                      {[
                        "15+ years event staffing experience",
                        "Trained & vetted professionals",
                        "On-site management available",
                        "Flexible scheduling",
                        "Nationwide coverage"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Staff {event.name}?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Contact us today for a custom staffing solution for your {event.name} activation, booth, or experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <a href="/contact">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20">
                <a href="/events">View All Events</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
