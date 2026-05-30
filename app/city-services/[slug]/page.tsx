import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, CheckCircle, Star, Phone, ArrowRight, Users, TrendingUp, Award, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import { serviceTypes } from "@/server/city-services-data";
import { cityLocations } from "@/server/city-data";
import { cities as allCitiesData } from "@/server/cities-data";
import { portfolioCaseStudies } from "@/server/portfolio-case-studies";
import { getCityServiceContent } from "@/server/city-service-content";
import type { Metadata } from 'next';

interface CityServicePageProps {
  params: Promise<{ slug: string }>;
}

// Helper function to parse slug for metadata
function parseSlugForMeta(slug: string) {
  for (const service of serviceTypes) {
    if (slug.endsWith(`-${service.slug}`)) {
      const citySlug = slug.replace(`-${service.slug}`, '');
      return { citySlug, serviceSlug: service.slug, service };
    }
  }
  return null;
}

// Format city name from slug
function formatCityNameMeta(citySlug: string) {
  return citySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Generate metadata for SEO (server-side)
export async function generateMetadata({ params }: CityServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const parsed = parseSlugForMeta(slug);
  
  if (!parsed) {
    return { title: 'Service Not Found' };
  }
  
  const cityName = formatCityNameMeta(parsed.citySlug);
  const serviceName = parsed.service.name;

  // Check for enriched content
  const enriched = getCityServiceContent(slug);
  // Use absolute title to prevent Next.js template from appending "| AirFresh Marketing" again.
  // Fallback title: clean "Service City | AirFresh Marketing" (≤60 chars for full Google display).
  const absoluteTitle = enriched
    ? enriched.metaTitle
    : `${serviceName} ${cityName} | AirFresh Marketing`;
  // Fallback description: concise, keyword-first, <155 chars, strong CTR hook.
  const description = enriched
    ? enriched.metaDescription
    : `${parsed.service.title} in ${cityName} · AirFresh Marketing. 500+ national brands served. GPS-tracked staff, 24-hr response. Free quote.`;

  return {
    title: { absolute: absoluteTitle },
    description,
    keywords: `${serviceName.toLowerCase()} ${cityName}, ${cityName} ${serviceName.toLowerCase()}, ${parsed.service.keywords.join(', ')}`,
    openGraph: {
      title: `${serviceName} ${cityName} | AirFresh Marketing`,
      description,
      url: `https://www.airfreshmarketing.com/city-services/${slug}`,
      type: 'website',
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${serviceName} ${cityName} | AirFresh Marketing`,
      description,
      images: ['/images/og-image.jpg'],
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/city-services/${slug}`,
    },
  };
}

// Generate static params for all city-service combinations
// Uses ALL cities from cities-data.ts to match sitemap URLs
export async function generateStaticParams() {
  const paths: { slug: string }[] = [];

  // Use all cities from the cities-data.ts file (158 cities)
  // This ensures all sitemap URLs resolve to actual pages
  for (const city of allCitiesData) {
    for (const service of serviceTypes) {
      paths.push({
        slug: `${city.slug}-${service.slug}`
      });
    }
  }

  return paths;
}

// Helper function to parse slug
function parseSlug(slug: string) {
  // Find the service type that matches the end of the slug
  for (const service of serviceTypes) {
    if (slug.endsWith(`-${service.slug}`)) {
      const citySlug = slug.replace(`-${service.slug}`, '');
      return { citySlug, serviceSlug: service.slug };
    }
  }
  return null;
}

// Helper function to format city name
function formatCityName(citySlug: string) {
  return citySlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default async function CityServicePage({ params }: CityServicePageProps) {
  const { slug } = await params;
  const parsed = parseSlug(slug);

  if (!parsed) {
    notFound();
  }

  const { citySlug, serviceSlug } = parsed;
  const service = serviceTypes.find(s => s.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  // Find city data if available
  const cityData = cityLocations.find(
    location => location.city.toLowerCase().replace(/\s+/g, '-') === citySlug
  );

  // Check for enriched city-specific content
  const enriched = getCityServiceContent(slug);
  const cityName = enriched ? enriched.cityName : formatCityName(citySlug);

  // SEO: Exact keyword phrase format (per Ben's requirements)
  const keywordPhrase = enriched ? enriched.h1 : `${service.name} ${cityName}`;
  const pageTitle = `${keywordPhrase} | Professional ${service.name} Services | AirFresh Marketing`;
  const pageDescription = `${keywordPhrase} services from AirFresh Marketing. ${service.description} Contact us for professional ${service.name.toLowerCase()} in ${cityName} today.`;
  const quoteHref = (intent: string) => `/get-quote?source=${slug}&intent=${intent}`;

  // Get hero image for service with fallback
  const serviceImages: Record<string, string> = {
    'brand-ambassadors': '/images/heroes/mac-cosmetics-promotional-models.jpeg',
    'street-teams': '/images/heroes/la-kings-street-teams.jpeg',
    'experiential-marketing': '/images/heroes/mac-cosmetics-experiential-marketing.jpeg',
    'event-management': '/images/heroes/mac-cosmetics-event-management.jpeg',
    'product-sampling': '/images/heroes/mac-cosmetics.jpg',
    'guerilla-marketing': '/images/heroes/sxsw-event-all-services.jpeg',
    'convention-staffing': '/images/heroes/sxsw-event-all-services.jpeg',
    'marketing-mascots': '/images/heroes/la-kings-street-teams.jpeg',
    'promotional-models': '/images/heroes/mac-cosmetics-promotional-models.jpeg',
    'retail-marketing': '/images/heroes/mac-cosmetics.jpg',
    'campus-marketing': '/images/heroes/sxsw-event-all-services.jpeg',
    'field-marketing': '/images/heroes/mac-cosmetics-experiential-marketing.jpeg',
    'mobile-tours': '/images/heroes/la-kings-street-teams.jpeg',
    'pop-up-events': '/images/heroes/mac-cosmetics-event-management.jpeg',
    'pr-stunts': '/images/heroes/sxsw-event-all-services.jpeg'
  };

  const heroImage = serviceImages[serviceSlug] || '/images/heroes/mac-cosmetics-promotional-models.jpeg';

  // Verify image exists by checking if we have a valid service image
  const hasHeroImage = serviceImages[serviceSlug] !== undefined;

  // Structured data with LocalBusiness, Service, and FAQPage schemas
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MarketingAgency"],
        "@id": `https://www.airfreshmarketing.com/city-services/${slug}#business`,
        "name": `AirFresh Marketing - ${keywordPhrase}`,
        "description": pageDescription,
        "url": `https://www.airfreshmarketing.com/city-services/${slug}`,
        "telephone": "+1-303-720-6060",
        "email": "hello@airfreshmarketing.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1580 N. Logan St., Suite 660",
          "addressLocality": "Denver",
          "addressRegion": "CO",
          "postalCode": "80203",
          "addressCountry": "US"
        },
        "sameAs": [
          "https://twitter.com/AirFreshMktg",
          "https://www.linkedin.com/company/airfreshmarketing",
          "https://www.instagram.com/airfreshmarketing"
        ],
        "areaServed": {
          "@type": "City",
          "name": cityName
        },
        "priceRange": "$$$"
      },
      {
        "@type": "Service",
        "name": keywordPhrase,
        "description": service.description,
        "provider": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "url": "https://www.airfreshmarketing.com"
        },
        "areaServed": {
          "@type": "City",
          "name": cityName
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": service.name, "item": `https://www.airfreshmarketing.com/services/${service.slug}` },
          { "@type": "ListItem", "position": 3, "name": `${service.name} ${cityName}`, "item": `https://www.airfreshmarketing.com/city-services/${slug}` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": enriched ? enriched.faqs.map(faq => ({
          "@type": "Question" as const,
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer" as const,
            "text": faq.answer
          }
        })) : [
          {
            "@type": "Question",
            "name": `How do I get started with ${service.name.toLowerCase()} in ${cityName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Contact AirFresh Marketing for a free consultation. We'll discuss your campaign goals, target audience, and timeline, then provide a customized proposal for ${service.name.toLowerCase()} in ${cityName}.`
            }
          },
          {
            "@type": "Question",
            "name": `What makes AirFresh Marketing the best choice for ${service.name.toLowerCase()} in ${cityName}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `With years of experience and a proven track record, AirFresh Marketing delivers professional ${service.name.toLowerCase()} services throughout ${cityName}. Our local expertise, trained staff, and data-driven approach ensure measurable results for your campaign.`
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: pageTitle || "Service" }]} />

      {/* Hero Section */}
      <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={keywordPhrase}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none" />
        <div className="relative h-full flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center">
            {/* SEO: H1 with exact keyword phrase at beginning */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
              {keywordPhrase}
            </h1>
            {/* SEO: First sentence with exact keyword phrase */}
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg">
              {enriched ? enriched.heroDescription : `${keywordPhrase} services are available year-round from AirFresh Marketing. ${service.description}`}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href={quoteHref('hero')}>
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="tel:+13037206060">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
            </div>
            {cityData && (
              <div className="flex items-center justify-center text-white/80">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Serving {cityName} and surrounding areas</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Enriched Content Sections (when city-specific content exists) */}
      {enriched ? (
        <>
          {/* Unique body sections with rich prose */}
          {enriched.sections.map((section, index) => (
            <section key={index} className={`py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${index % 2 === 1 ? 'bg-gray-50' : ''}`}>
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold mb-6">{section.heading}</h2>
                <p className="text-gray-700 leading-relaxed">{section.content}</p>
              </div>
            </section>
          ))}

          {/* Local Venues & Events Grid */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                {keywordPhrase} - Popular Venues & Events
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      Top Venues in {enriched.cityName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {enriched.localVenues.map((venue, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{venue}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <Star className="h-5 w-5 text-primary" />
                      Popular Events in {enriched.cityName}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {enriched.localEvents.map((event, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span>{event}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Pricing Note */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">{enriched.cityName} Market Pricing</h3>
                <p className="text-gray-700">{enriched.pricingNote}</p>
                <Link href="/pricing" className="text-primary hover:underline mt-2 inline-block font-medium">
                  View Full Pricing Guide →
                </Link>
              </CardContent>
            </Card>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                {keywordPhrase} - Proven Results
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">5,000+</div>
                  <div className="text-gray-600">Vetted Professionals</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">425%</div>
                  <div className="text-gray-600">Average ROI</div>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">300+</div>
                  <div className="text-gray-600">National Brands Served</div>
                </div>
                <div className="text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">48hr</div>
                  <div className="text-gray-600">Rapid Deployment</div>
                </div>
              </div>
            </div>
          </section>

          {/* Areas Served */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Areas Served in {enriched.cityName}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
                  {enriched.areasServed.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section - Enriched (10 FAQs for Google rich results) */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                {keywordPhrase} - Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {enriched.faqs.map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Internal Links - SEO cross-linking */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-xl">Explore More {enriched.cityName} Marketing Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Link href={`/cities/${citySlug}`} className="flex items-center gap-2 text-primary hover:underline font-medium">
                    <MapPin className="h-4 w-4" />
                    All Services in {enriched.cityName}
                  </Link>
                  <Link href={`/services/${serviceSlug}`} className="flex items-center gap-2 text-primary hover:underline font-medium">
                    <Star className="h-4 w-4" />
                    {enriched.serviceName} Nationwide
                  </Link>
                  <Link href="/pricing" className="flex items-center gap-2 text-primary hover:underline font-medium">
                    <ArrowRight className="h-4 w-4" />
                    View Pricing Guide
                  </Link>
                  <Link href="/technology" className="flex items-center gap-2 text-primary hover:underline font-medium">
                    <ArrowRight className="h-4 w-4" />
                    Our Technology Platform
                  </Link>
                  <Link href="/compare/atn-event-staffing" className="flex items-center gap-2 text-primary hover:underline font-medium">
                    <ArrowRight className="h-4 w-4" />
                    AirFresh vs ATN Event Staffing
                  </Link>
                  <Link href="/compare/elev8-staffing" className="flex items-center gap-2 text-primary hover:underline font-medium">
                    <ArrowRight className="h-4 w-4" />
                    AirFresh vs Elev8 Staffing
                  </Link>
                </div>
              </CardContent>
            </Card>
          </section>
        </>
      ) : (
        <>
          {/* Generic Service Benefits - fallback for non-enriched cities */}
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">
                  <h2>{keywordPhrase} - Why Choose AirFresh Marketing?</h2>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Local Market Expertise</h3>
                      <p className="text-gray-600">Deep understanding of {cityName}&apos;s unique market dynamics and consumer behaviors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Experienced Team</h3>
                      <p className="text-gray-600">Trained professionals with proven track records in {service.name.toLowerCase()}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Rapid Deployment</h3>
                      <p className="text-gray-600">Quick mobilization of resources for time-sensitive campaigns in {cityName}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Measurable Results</h3>
                      <p className="text-gray-600">Data-driven approach with detailed reporting and ROI tracking</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* SEO: Additional content paragraph to reach 350+ words */}
          <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p>
                {keywordPhrase} is one of the most effective ways to connect with your target audience and drive meaningful engagement.
                At AirFresh Marketing, we specialize in providing top-tier {service.name.toLowerCase()} services throughout {cityName} and the surrounding areas.
                Our team of experienced professionals understands the unique characteristics of the {cityName} market and tailors every campaign to maximize your brand&apos;s impact.
              </p>
              <p>
                Whether you&apos;re launching a new product, building brand awareness, or driving foot traffic to your {cityName} location,
                our {service.name.toLowerCase()} team delivers results. We&apos;ve helped hundreds of brands achieve their marketing goals through
                strategic activations, engaging consumer interactions, and measurable outcomes. From downtown {cityName} to suburban neighborhoods,
                we have the local expertise and national resources to execute campaigns of any scale.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">
                {keywordPhrase} - Proven Results
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">50,000+</div>
                  <div className="text-gray-600">Consumers Engaged</div>
                </div>
                <div className="text-center">
                  <TrendingUp className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">425%</div>
                  <div className="text-gray-600">Average ROI</div>
                </div>
                <div className="text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <div className="text-gray-600">Successful Campaigns</div>
                </div>
                <div className="text-center">
                  <Clock className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          {cityData && (
            <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Service Areas in {cityName} Metro</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    {cityData.serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          )}
        </>
      )}

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            More Services in {cityName}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceTypes
              .filter(s => s.slug !== serviceSlug)
              .slice(0, 6)
              .map((relatedService) => (
                <Card key={relatedService.slug} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{relatedService.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedService.description}
                    </p>
                    <Link href={`/city-services/${citySlug}-${relatedService.slug}`}>
                      <Button variant="outline" className="w-full">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          {service.name} Success Stories
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          See how we've helped brands achieve remarkable results with {service.name.toLowerCase()} campaigns
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {portfolioCaseStudies
            .filter(cs => cs.services?.some(s => s.toLowerCase().includes(service.name.toLowerCase().split(' ')[0])) || cs.featured)
            .slice(0, 3)
            .map((caseStudy) => (
              <Card key={caseStudy.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                {caseStudy.heroImage && (
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={caseStudy.heroImage}
                      alt={caseStudy.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-lg">{caseStudy.name}</CardTitle>
                  <p className="text-sm text-gray-500">{caseStudy.industry}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {caseStudy.tagline}
                  </p>
                  <Link href={`/case-studies/${caseStudy.id}`}>
                    <Button variant="outline" className="w-full">
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/case-studies">
            <Button variant="outline" size="lg">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Launch Your {service.name} Campaign in {cityName}?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get started with a free consultation and custom proposal
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href={quoteHref('final-cta')}>
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href={cityData ? `tel:${cityData.phone.replace(/\D/g, '')}` : 'tel:+13037206060'}>
                <Phone className="mr-2 h-5 w-5" />
                {cityData ? cityData.phone : '303-720-6060'}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}