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
  Zap
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";

// FAQ Item component
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

export default function CityPage() {
  const [match, params] = useRoute("/city/:cityName");
  const citySlug = params?.cityName || "denver";

  // Fetch city data from API
  const { data: cityData, isLoading } = useQuery({
    queryKey: ['/api/cities', citySlug],
    queryFn: async () => {
      const response = await fetch(`/api/cities/${citySlug}`);
      if (!response.ok) throw new Error('Failed to fetch city data');
      return response.json();
    }
  });

  // Format city name for display
  const displayName = cityData?.city || citySlug
    .split('-')
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const stateName = cityData?.state || '';

  // Generate dynamic FAQs for the city
  const cityFAQs = [
    {
      question: `What experiential marketing services does AirFresh offer in ${displayName}?`,
      answer: `AirFresh Marketing provides comprehensive experiential marketing services in ${displayName} including brand activations, product sampling, event staffing, street team marketing, promotional models, trade show support, guerilla marketing, and corporate event production. Our ${displayName} team has local market expertise and access to a network of professional brand ambassadors throughout the ${displayName} metropolitan area.`
    },
    {
      question: `How much does it cost to hire brand ambassadors in ${displayName}?`,
      answer: `Brand ambassador costs in ${displayName} vary based on event type, duration, and required skills. Typical rates range from $25-50/hour for standard activations, with specialized roles like bilingual ambassadors or product specialists commanding higher rates. We provide transparent pricing and can scale to any budget. Contact us for a custom quote for your ${displayName} campaign.`
    },
    {
      question: `How quickly can you staff an event in ${displayName}?`,
      answer: `We maintain an active roster of vetted brand ambassadors in ${displayName} and can typically staff events with 48-72 hours notice for standard activations. For larger events or specialized requirements, we recommend 1-2 weeks lead time. Rush staffing is available for urgent needs in the ${displayName} area.`
    },
    {
      question: `What industries do you serve in ${displayName}?`,
      answer: `AirFresh Marketing serves all major industries in ${displayName} including technology, consumer packaged goods, automotive, healthcare, retail, food & beverage, sports & entertainment, and financial services. We've executed campaigns for Fortune 500 companies and startups alike throughout ${displayName} and ${stateName}.`
    },
    {
      question: `Do you provide event staffing for trade shows and conventions in ${displayName}?`,
      answer: `Yes, we specialize in trade show and convention staffing for ${displayName} events. Our services include booth staff, product demonstrators, lead generation specialists, registration assistants, and promotional teams. We have extensive experience at major ${displayName} venues and convention centers.`
    },
    {
      question: `What makes AirFresh different from other marketing agencies in ${displayName}?`,
      answer: `AirFresh Marketing combines 20+ years of nationwide experience with deep local market knowledge in ${displayName}. We're a full-service agency handling everything in-house—from strategy and creative to staffing and execution. Our ${displayName} clients benefit from dedicated account management, real-time reporting, and proven results across 300+ brand partnerships.`
    }
  ];

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `https://airfreshmarketing.com/city/${citySlug}#localbusiness`,
        "name": `AirFresh Marketing - ${displayName}`,
        "image": cityData?.images?.hero || "https://airfreshmarketing.com/images/og-image.jpg",
        "url": `https://airfreshmarketing.com/city/${citySlug}`,
        "telephone": cityData?.phone || "(303) 720-6060",
        "priceRange": "$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": cityData?.address || "1580 N. Logan St. Suite 660",
          "addressLocality": displayName,
          "addressRegion": stateName,
          "postalCode": cityData?.zip || "",
          "addressCountry": "US"
        },
        "geo": cityData?.latitude ? {
          "@type": "GeoCoordinates",
          "latitude": cityData.latitude,
          "longitude": cityData.longitude
        } : undefined,
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "areaServed": cityData?.serviceAreas || [displayName],
        "serviceType": [
          "Experiential Marketing",
          "Brand Ambassadors",
          "Event Staffing",
          "Product Sampling",
          "Trade Show Staffing"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `https://airfreshmarketing.com/city/${citySlug}#faq`,
        "mainEntity": cityFAQs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      },
      {
        "@type": "Service",
        "@id": `https://airfreshmarketing.com/city/${citySlug}#service`,
        "name": `Experiential Marketing Services in ${displayName}`,
        "provider": {
          "@type": "Organization",
          "name": "AirFresh Marketing"
        },
        "areaServed": {
          "@type": "City",
          "name": displayName
        },
        "serviceType": "Experiential Marketing Agency",
        "description": `Professional experiential marketing, brand ambassadors, and event staffing services in ${displayName}, ${stateName}. Full-service agency with local expertise.`
      }
    ]
  };

  // Stats for social proof
  const stats = [
    { value: "20+", label: "Years Experience" },
    { value: "300+", label: "Brands Served" },
    { value: "10,000+", label: "Events Executed" },
    { value: "40+", label: "Markets Nationwide" }
  ];

  // Service cards
  const services = [
    {
      title: "Brand Ambassadors",
      description: `Professional brand representatives for events, sampling, and promotions throughout ${displayName}.`,
      link: "/services/brand-ambassadors",
      icon: Users
    },
    {
      title: "Event Staffing",
      description: `Reliable, trained staff for trade shows, corporate events, and activations in ${displayName}.`,
      link: "/services/convention-staffing",
      icon: Briefcase
    },
    {
      title: "Experiential Marketing",
      description: `Immersive brand experiences that create lasting connections with ${displayName} consumers.`,
      link: "/services/experiential-marketing",
      icon: Zap
    },
    {
      title: "Product Sampling",
      description: `Strategic product sampling campaigns reaching your target audience across ${displayName}.`,
      link: "/services/product-sampling",
      icon: Target
    },
    {
      title: "Street Teams",
      description: `High-energy street team marketing for grassroots brand awareness in ${displayName}.`,
      link: "/services/street-teams",
      icon: TrendingUp
    },
    {
      title: "Promotional Models",
      description: `Professional promotional talent for trade shows, launches, and events in ${displayName}.`,
      link: "/services/promotional-models",
      icon: Star
    }
  ];

  if (isLoading) {
    return (
      <div className="pt-16">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-500"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={`Experiential Marketing Agency in ${displayName}, ${stateName} | Brand Ambassadors & Event Staffing`}
        description={`AirFresh Marketing is ${displayName}'s premier experiential marketing agency. Professional brand ambassadors, event staffing, product sampling & activations. 20+ years experience, 300+ brands served. Get a free quote.`}
        structuredData={structuredData}
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section
          className="relative py-24 md:py-32 bg-cover bg-center"
          style={{
            backgroundImage: cityData?.images?.hero
              ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${cityData.images.hero})`
              : 'linear-gradient(135deg, #0891b2 0%, #1e40af 100%)'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                <MapPin className="w-4 h-4 mr-2" />
                {displayName}, {stateName}
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Experiential Marketing Agency in{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {displayName}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mb-8">
                Professional brand ambassadors, event staffing, and experiential marketing campaigns that connect your brand with {displayName} audiences.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  asChild
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl"
                >
                  <Link href="/contact">
                    Get a Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white px-8 py-6 text-lg font-semibold rounded-full"
                >
                  <a href={`tel:${cityData?.phone || '3037206060'}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call {displayName} Team
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

        {/* Trust Badges */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-cyan-500" />
                <span className="font-medium">Trusted by Fortune 500 Brands</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-cyan-500" />
                <span className="font-medium">Background-Checked Staff</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-cyan-500" />
                <span className="font-medium">Local {displayName} Team</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Experiential Marketing Services in {displayName}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Full-service experiential marketing solutions tailored to the {displayName} market. From brand ambassadors to large-scale activations, we handle it all.
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

        {/* Location Info */}
        {cityData && (
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Why Choose AirFresh for {displayName} Marketing?
                  </h2>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Local Market Expertise",
                        description: `Deep understanding of ${displayName} demographics, venues, and consumer behavior.`
                      },
                      {
                        title: "Vetted Brand Ambassadors",
                        description: `Access to ${displayName}'s top talent—background-checked, trained, and brand-ready.`
                      },
                      {
                        title: "Full-Service Execution",
                        description: "Strategy, creative, staffing, and logistics handled entirely in-house."
                      },
                      {
                        title: "Real-Time Reporting",
                        description: "Live data and comprehensive post-campaign analytics for every activation."
                      },
                      {
                        title: "Nationwide Scale",
                        description: `Launch in ${displayName} today, expand to 40+ markets tomorrow.`
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex gap-4">
                        <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.title}</h4>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Card className="border-cyan-200 sticky top-24">
                    <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-t-lg">
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="w-5 h-5" />
                        {displayName} Office
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-cyan-500 mt-0.5" />
                          <div>
                            <p className="font-medium">{cityData.address}</p>
                            <p className="text-gray-600">{cityData.city}, {cityData.state} {cityData.zip}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-cyan-500" />
                          <a href={`tel:${cityData.phone}`} className="font-medium hover:text-cyan-600">
                            {cityData.phone}
                          </a>
                        </div>

                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-cyan-500" />
                          <span className="text-gray-600">Mon-Fri: 9:00 AM - 6:00 PM</span>
                        </div>

                        <div className="pt-4 border-t">
                          <p className="font-medium text-gray-900 mb-2">Service Areas:</p>
                          <p className="text-gray-600 text-sm">
                            {cityData.serviceAreas?.slice(0, 6).join(' • ')}
                          </p>
                        </div>

                        <Button asChild className="w-full bg-cyan-500 hover:bg-cyan-600 mt-4">
                          <Link href="/contact">
                            Contact {displayName} Team
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Local Updates */}
        {cityData?.localUpdates && cityData.localUpdates.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Recent {displayName} Highlights
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cityData.localUpdates.map((update: string, index: number) => (
                  <Card key={index} className="border-gray-200">
                    <CardContent className="p-6 flex gap-4">
                      <Star className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                      <p className="text-gray-700">{update}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About {displayName} Marketing Services
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about experiential marketing in {displayName}.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8">
              {cityFAQs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Activate Your Brand in {displayName}?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free consultation with our {displayName} team. We'll create a custom experiential marketing strategy for your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-cyan-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-xl"
              >
                <Link href="/contact">
                  Get Your Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/50 bg-transparent hover:bg-white/10 text-white px-8 py-6 text-lg font-semibold rounded-full"
              >
                <Link href="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
