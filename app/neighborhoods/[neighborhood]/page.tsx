import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, ArrowRight, Building2 } from "lucide-react";
import Link from "next/link";

import { neighborhoods, neighborhoodServices, getNeighborhoodBySlug } from "@/server/neighborhoods-data";
import type { Metadata } from 'next';

interface NeighborhoodPageProps {
  params: Promise<{ neighborhood: string }>;
}

export async function generateMetadata({ params }: NeighborhoodPageProps): Promise<Metadata> {
  const { neighborhood: neighborhoodSlug } = await params;
  const neighborhood = getNeighborhoodBySlug(neighborhoodSlug);
  
  if (!neighborhood) {
    return { title: 'Not Found' };
  }
  
  return {
    title: `Event Staffing in ${neighborhood.name}, ${neighborhood.city} | AirFresh Marketing`,
    description: `Professional event staffing and brand ambassadors in ${neighborhood.name}, ${neighborhood.city}. Local expertise and reliable service.`,
    openGraph: {
      type: 'website',
      title: `Event Staffing in ${neighborhood.name} | AirFresh Marketing`,
      description: `Professional event staffing in ${neighborhood.name}, ${neighborhood.city}.`,
      url: `https://www.airfreshmarketing.com/neighborhoods/${neighborhoodSlug}`,
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Event Staffing in ${neighborhood.name}`,
      description: `Professional event staffing in ${neighborhood.name}, ${neighborhood.city}.`,
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/neighborhoods/${neighborhoodSlug}`,
    },
  };
}

export async function generateStaticParams() {
  return neighborhoods.map(n => ({ neighborhood: n.slug }));
}

export default async function NeighborhoodPage({ params }: NeighborhoodPageProps) {
  const { neighborhood: neighborhoodSlug } = await params;
  const neighborhood = getNeighborhoodBySlug(neighborhoodSlug);

  if (!neighborhood) {
    notFound();
  }

  const faqs = [
    {
      question: `What event staffing services are available in ${neighborhood.name}, ${neighborhood.city}?`,
      answer: `AirFresh Marketing provides brand ambassadors, event staff, promotional models, street teams, product sampling, and more in ${neighborhood.name}, ${neighborhood.city}. Our staff have local knowledge of the area's venues, regulations, and audience demographics.`
    },
    {
      question: `How do I book event staff in ${neighborhood.name}?`,
      answer: `Contact AirFresh Marketing at (303) 720-6060 or request a free quote online. Tell us about your event date, venue in ${neighborhood.name}, number of staff needed, and any special requirements. We'll provide a custom proposal within 24 hours.`
    },
    {
      question: `What venues does AirFresh staff in ${neighborhood.name}?`,
      answer: `We staff events at all major venues in ${neighborhood.name} including ${neighborhood.venues.slice(0, 3).join(', ')}, and more. Whether it's a pop-up shop, corporate event, or brand activation, we have experienced local staff ready to represent your brand.`
    },
  ];

  // Structured data with LocalBusiness schema
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MarketingAgency"],
        "@id": `https://www.airfreshmarketing.com/neighborhoods/${neighborhoodSlug}#business`,
        "name": `AirFresh Marketing - ${neighborhood.name}, ${neighborhood.city}`,
        "description": `Professional event staffing and brand ambassadors in ${neighborhood.name}, ${neighborhood.city}. Local expertise and reliable service.`,
        "url": `https://www.airfreshmarketing.com/neighborhoods/${neighborhoodSlug}`,
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
          "@type": "Place",
          "name": `${neighborhood.name}, ${neighborhood.city}`
        },
        "priceRange": "$$$"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://www.airfreshmarketing.com/locations" },
          { "@type": "ListItem", "position": 3, "name": `${neighborhood.name}, ${neighborhood.city}`, "item": `https://www.airfreshmarketing.com/neighborhoods/${neighborhoodSlug}` }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
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
    <div className="min-h-screen pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-primary to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6" />
              <span className="uppercase tracking-wide text-sm font-semibold text-white/80">
                {neighborhood.city}, {neighborhood.state}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Event Staffing in {neighborhood.name}
            </h1>
            <p className="text-xl mb-8 text-white/90">
              {neighborhood.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <a href="tel:+13037206060"><Phone className="mr-2 h-5 w-5" />303-720-6060</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our Services in {neighborhood.name}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {neighborhoodServices.map((service) => (
            <Card key={service.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Professional {service.name.toLowerCase()} for events in {neighborhood.name}, {neighborhood.city}.
                </p>
                <Link href={`/neighborhoods/${neighborhoodSlug}/${service.slug}`}>
                  <Button className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Venues */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Popular Venues in {neighborhood.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {neighborhood.venues.map((venue, index) => (
              <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                <Building2 className="h-5 w-5 text-primary" />
                <span className="font-medium">{venue}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Event Types We Staff in {neighborhood.name}
        </h2>
        <div className="flex flex-wrap justify-center gap-3">
          {neighborhood.eventTypes.map((type, index) => (
            <span key={index} className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium">
              {type}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Event Staffing in {neighborhood.name} FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your {neighborhood.name} Event?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get a free quote for professional event staffing
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
