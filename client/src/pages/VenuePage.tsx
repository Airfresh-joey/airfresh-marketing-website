import { useRoute, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  Star,
  Briefcase,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Building2,
  Target,
  Zap,
  Calendar,
  ExternalLink,
  SquareStack,
  Landmark
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";
import ContactForm from "@/components/ContactForm";

interface Venue {
  slug: string;
  name: string;
  shortName: string;
  city: string;
  state: string;
  stateAbbrev: string;
  address: string;
  squareFootage: string;
  exhibitSpace: string;
  meetingRooms: number;
  description: string;
  features: string[];
  majorEvents: string[];
  nearbyAttractions: string[];
  transportInfo: string;
  website: string;
  latitude: number;
  longitude: number;
  image: string;
  tier: 1 | 2 | 3;
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-cyan-600 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-cyan-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-4 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function VenuePage() {
  const [match, params] = useRoute("/venues/:slug");
  const venueSlug = params?.slug || "";

  const { data: venue, isLoading, error } = useQuery<Venue>({
    queryKey: ['/api/venues', venueSlug],
    queryFn: async () => {
      const response = await fetch(`/api/venues/${venueSlug}`);
      if (!response.ok) throw new Error('Failed to fetch venue data');
      return response.json();
    },
    enabled: !!venueSlug
  });

  if (!match) return null;

  if (isLoading) {
    return (
      <div className="pt-16">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
        </div>
      </div>
    );
  }

  if (error || !venue) {
    return (
      <div className="pt-16">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Venue Not Found</h2>
            <p className="text-gray-600 mb-4">The venue you're looking for doesn't exist.</p>
            <Button asChild>
              <Link href="/venues">Browse All Venues</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const venueFAQs = [
    {
      question: `What event staffing services does AirFresh provide at ${venue.name}?`,
      answer: `AirFresh Marketing provides comprehensive event staffing services at ${venue.name} including brand ambassadors, trade show staff, promotional models, product demonstrators, registration personnel, lead capture specialists, and hospitality staff. Our ${venue.city} team has extensive experience working at ${venue.shortName} and understands the venue's layout, logistics, and requirements.`
    },
    {
      question: `How much does event staffing cost at ${venue.name}?`,
      answer: `Event staffing costs at ${venue.name} vary based on event duration, staff requirements, and specialization needed. Typical rates range from $25-50/hour for standard trade show staff, with specialized roles commanding higher rates. We provide transparent, competitive pricing for all ${venue.city} events. Contact us for a custom quote.`
    },
    {
      question: `How far in advance should I book staff for events at ${venue.shortName}?`,
      answer: `For major events at ${venue.name}, we recommend booking 2-4 weeks in advance for standard staffing needs. For large-scale activations during major shows like ${venue.majorEvents[0] || 'trade shows'}, booking 4-6 weeks ahead ensures you get the best talent. Rush staffing is available for urgent needs with 48-72 hours notice.`
    },
    {
      question: `Does AirFresh have experience with events at ${venue.name}?`,
      answer: `Yes, AirFresh Marketing has extensive experience staffing events at ${venue.name} and throughout ${venue.city}. We've supported brands at major shows including ${venue.majorEvents.slice(0, 3).join(', ')} and many other events. Our team knows the venue intimately and can help navigate logistics, load-in procedures, and local requirements.`
    },
    {
      question: `What types of events does AirFresh staff at ${venue.shortName}?`,
      answer: `We staff all types of events at ${venue.name} including trade shows, conventions, corporate conferences, product launches, brand activations, consumer expos, and private events. Whether you need booth staff, product specialists, or experiential marketing teams, we have the expertise to deliver results at ${venue.shortName}.`
    },
    {
      question: `Can AirFresh help with experiential marketing activations at ${venue.name}?`,
      answer: `Absolutely. Beyond staffing, AirFresh Marketing provides full-service experiential marketing at ${venue.name} including activation design, brand ambassador programs, product sampling campaigns, interactive experiences, and comprehensive event production. We handle strategy, creative, staffing, and execution for memorable brand experiences.`
    }
  ];

  const services = [
    {
      title: "Trade Show Staffing",
      description: `Professional booth staff, product demonstrators, and lead capture specialists for events at ${venue.shortName}.`,
      link: "/services/convention-staffing",
      icon: Briefcase
    },
    {
      title: "Brand Ambassadors",
      description: `Engaging, trained brand representatives to connect with attendees at ${venue.name}.`,
      link: "/services/brand-ambassadors",
      icon: Users
    },
    {
      title: "Product Sampling",
      description: `Strategic product sampling and demonstration campaigns to maximize ROI at ${venue.city} events.`,
      link: "/services/product-sampling",
      icon: Target
    },
    {
      title: "Experiential Marketing",
      description: `Immersive brand activations that create memorable experiences at ${venue.shortName}.`,
      link: "/services/experiential-marketing",
      icon: Zap
    },
    {
      title: "Promotional Models",
      description: `Professional promotional talent for booth presence and brand visibility at ${venue.name}.`,
      link: "/services/promotional-models",
      icon: Star
    },
    {
      title: "Event Production",
      description: `Full-service event production and logistics support for ${venue.city} conventions.`,
      link: "/services/event-production",
      icon: Calendar
    }
  ];

  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "300+", label: "Brands Served" },
    { value: "10,000+", label: "Events Staffed" },
    { value: "50+", label: "Convention Centers" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://airfreshmarketing.com/venues/${venue.slug}#service`,
        "name": `AirFresh Marketing - ${venue.name} Event Staffing`,
        "url": `https://airfreshmarketing.com/venues/${venue.slug}`,
        "telephone": "(303) 720-6060",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": venue.city,
          "addressRegion": venue.stateAbbrev,
          "addressCountry": "US"
        },
        "areaServed": {
          "@type": "Place",
          "name": venue.name,
          "address": venue.address
        },
        "serviceType": [
          "Event Staffing",
          "Trade Show Staff",
          "Brand Ambassadors",
          "Convention Staffing"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://airfreshmarketing.com/venues/${venue.slug}#faq`,
        "mainEntity": venueFAQs.map(faq => ({
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
    <>
      <SEO
        title={`Event Staffing at ${venue.name} | Trade Show Staff ${venue.city}, ${venue.stateAbbrev}`}
        description={`Professional event staffing, brand ambassadors & trade show staff for ${venue.name} in ${venue.city}. AirFresh Marketing provides experienced convention staff for ${venue.majorEvents[0] || 'major events'} and more. Get a free quote.`}
        structuredData={structuredData}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section
          className="relative py-24 md:py-32 bg-cover bg-center"
          style={{
            backgroundImage: venue.image
              ? `url(${venue.image})`
              : 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumbs */}
              <nav className="flex mb-6" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                  <li>
                    <Link href="/" className="text-gray-300 hover:text-white text-sm">Home</Link>
                  </li>
                  <li>
                    <span className="mx-2 text-gray-500">/</span>
                    <Link href="/venues" className="text-gray-300 hover:text-white text-sm">Venues</Link>
                  </li>
                  <li>
                    <span className="mx-2 text-gray-500">/</span>
                    <span className="text-white text-sm">{venue.shortName}</span>
                  </li>
                </ol>
              </nav>

              <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                <Landmark className="w-4 h-4 mr-2" />
                {venue.city}, {venue.stateAbbrev}
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Event Staffing at{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {venue.name}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-4">
                Professional trade show staff, brand ambassadors, and experiential marketing for events at {venue.shortName}.
              </p>

              <p className="text-lg text-white/70 max-w-3xl mb-8">
                {venue.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl"
                >
                  <a href="#contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white px-8 py-6 text-lg font-semibold rounded-full"
                >
                  <a href="tel:3037206060">
                    <Phone className="mr-2 h-5 w-5" />
                    Call (303) 720-6060
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Venue Quick Facts */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <SquareStack className="w-8 h-8 text-cyan-500" />
                <div>
                  <p className="text-sm text-gray-500">Exhibit Space</p>
                  <p className="font-semibold text-gray-900">{venue.exhibitSpace}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="w-8 h-8 text-cyan-500" />
                <div>
                  <p className="text-sm text-gray-500">Meeting Rooms</p>
                  <p className="font-semibold text-gray-900">{venue.meetingRooms}+</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-8 h-8 text-cyan-500" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold text-gray-900">{venue.city}, {venue.stateAbbrev}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-8 h-8 text-cyan-500" />
                <div>
                  <p className="text-sm text-gray-500">Tier</p>
                  <p className="font-semibold text-gray-900">
                    {venue.tier === 1 ? "Premier Venue" : venue.tier === 2 ? "Major Venue" : "Regional Venue"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services at {venue.shortName}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Full-service event staffing and experiential marketing solutions for {venue.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Link key={index} href={service.link}>
                  <Card className="h-full border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Major Events Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Major Events at {venue.shortName}
                </h2>
                <p className="text-gray-600 mb-6">
                  AirFresh Marketing has experience staffing these major events and many more at {venue.name}:
                </p>
                <div className="space-y-3">
                  {venue.majorEvents.map((event, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{event}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h3 className="font-semibold text-gray-900 mb-3">Venue Features</h3>
                  <div className="flex flex-wrap gap-2">
                    {venue.features.map((feature, index) => (
                      <Badge key={index} variant="secondary" className="bg-gray-100">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <Card className="border-cyan-200 sticky top-24">
                  <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-t-lg">
                    <CardTitle className="flex items-center gap-2">
                      <Landmark className="w-5 h-5" />
                      Venue Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-cyan-500 mt-0.5" />
                        <div>
                          <p className="font-medium">{venue.name}</p>
                          <p className="text-gray-600 text-sm">{venue.address}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <SquareStack className="w-5 h-5 text-cyan-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Total Space</p>
                          <p className="text-gray-600 text-sm">{venue.squareFootage}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <TrendingUp className="w-5 h-5 text-cyan-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Transportation</p>
                          <p className="text-gray-600 text-sm">{venue.transportInfo}</p>
                        </div>
                      </div>

                      <div className="pt-4 border-t">
                        <p className="font-medium text-gray-900 mb-2">Nearby Attractions:</p>
                        <p className="text-gray-600 text-sm">
                          {venue.nearbyAttractions.join(' • ')}
                        </p>
                      </div>

                      <a
                        href={venue.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Venue Website
                      </a>

                      <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600 mt-4">
                        <a href="#contact">
                          Get Event Staffing Quote
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose AirFresh for {venue.shortName} Events?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Local Expertise</h3>
                  <p className="text-gray-600">
                    Our {venue.city} team knows {venue.shortName} inside and out—from load-in logistics to the best local hotels and restaurants for your team.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Vetted Talent</h3>
                  <p className="text-gray-600">
                    Access our network of background-checked, trained brand ambassadors and event staff based in {venue.city} and surrounding areas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-cyan-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                  <p className="text-gray-600">
                    With 20+ years of experience and 300+ brand partnerships, we deliver measurable results at {venue.name} events.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about event staffing at {venue.name}.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
              {venueFAQs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Get Your Free {venue.shortName} Staffing Quote
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Tell us about your upcoming event at {venue.name} and we'll create a custom staffing proposal.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <ContactForm />
            </div>
          </div>
        </section>

        {/* Related Venues CTA */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              We Staff Events at 50+ Convention Centers Nationwide
            </h3>
            <p className="text-gray-600 mb-6">
              From {venue.city} to venues across the country, AirFresh Marketing provides professional event staffing everywhere.
            </p>
            <div className="flex gap-4 justify-center">
              <Button asChild variant="outline">
                <Link href="/venues">Browse All Venues</Link>
              </Button>
              <Button asChild>
                <Link href="/services/convention-staffing">
                  Convention Staffing Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
