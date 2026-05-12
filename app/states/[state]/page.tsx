import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, ArrowRight, Building, Users } from "lucide-react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { states, stateServices, getStateBySlug } from "@/server/states-data";
import type { Metadata } from 'next';

interface StatePageProps {
  params: Promise<{ state: string }>;
}

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);
  
  if (!state) {
    return { title: 'State Not Found' };
  }
  
  return {
    title: `Event Staffing & Marketing Services in ${state.name} | AirFresh Marketing`,
    description: `Professional event staffing and brand ambassadors in ${state.name}. Serving all major cities with local expertise.`,
    openGraph: {
      type: 'website',
      title: `Event Staffing in ${state.name} | AirFresh Marketing`,
      description: `Professional event staffing and brand ambassadors in ${state.name}.`,
      url: `https://www.airfreshmarketing.com/states/${stateSlug}`,
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Event Staffing in ${state.name}`,
      description: `Professional event staffing and brand ambassadors in ${state.name}.`,
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/states/${stateSlug}`,
    },
  };
}

export async function generateStaticParams() {
  return states.map(state => ({ state: state.slug }));
}

export default async function StatePage({ params }: StatePageProps) {
  const { state: stateSlug } = await params;
  const state = getStateBySlug(stateSlug);

  if (!state) {
    notFound();
  }

  const quoteHref = (intent: string) => `/get-quote?source=state-${stateSlug}&intent=${intent}`;

  const faqs = [
    {
      question: `What event staffing services does AirFresh Marketing offer in ${state.name}?`,
      answer: `AirFresh Marketing provides brand ambassadors, event staffing, street teams, promotional models, experiential marketing, convention staffing, product sampling, event management, and hospitality staff throughout ${state.name}. We serve ${state.majorCities.join(', ')} and all other cities statewide.`
    },
    {
      question: `How quickly can you staff events in ${state.name}?`,
      answer: `We maintain a network of trained staff across ${state.name} and can typically deploy teams within 48-72 hours for standard requests. For larger activations in ${state.majorCities[0]} or other major cities, we recommend 2-4 weeks lead time for optimal results.`
    },
    {
      question: `What industries do you serve in ${state.name}?`,
      answer: `In ${state.name}, we have deep expertise serving the ${state.industries.join(', ')} industries. Our brand ambassadors and event staff understand these sectors and can represent your brand authentically to ${state.name} consumers.`
    },
    {
      question: `How much does event staffing cost in ${state.name}?`,
      answer: `Event staffing rates in ${state.name} vary based on the type of staff, event duration, and location. Brand ambassadors typically start at $25-35/hour, with specialized roles like promotional models or bilingual staff at higher rates. Contact us for a free custom quote.`
    },
    {
      question: `Do you provide event staff training for ${state.name} campaigns?`,
      answer: `Yes, all AirFresh Marketing staff in ${state.name} receive comprehensive training including brand-specific product knowledge, customer engagement techniques, and GPS-verified check-ins. We also provide video training modules and on-site team leads for quality assurance.`
    }
  ];

  // Structured data with LocalBusiness + FAQPage schema
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "MarketingAgency"],
        "@id": `https://www.airfreshmarketing.com/states/${stateSlug}#business`,
        "name": `AirFresh Marketing - ${state.name}`,
        "description": `Professional event staffing, brand ambassadors, and experiential marketing services throughout ${state.name}.`,
        "url": `https://www.airfreshmarketing.com/states/${stateSlug}`,
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
          "@type": "State",
          "name": state.name
        },
        "priceRange": "$$$"
      },
      {
        "@type": "Service",
        "name": `Event Staffing & Marketing Services in ${state.name}`,
        "description": state.description,
        "provider": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "url": "https://www.airfreshmarketing.com"
        },
        "areaServed": {
          "@type": "State",
          "name": state.name
        }
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

      <Breadcrumbs items={[{ label: "Locations", href: "/locations" }, { label: state.name }]} />

      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-primary to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Building className="h-6 w-6" />
              <span className="uppercase tracking-wide text-sm font-semibold text-white/80">{state.abbreviation}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Event Staffing in {state.name}
            </h1>
            <p className="text-xl mb-8 text-white/90">
              {state.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href={quoteHref("hero")}>Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <a href="tel:+13037206060"><Phone className="mr-2 h-5 w-5" />303-720-6060</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">{state.population}</div>
              <div className="text-gray-600">Population</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">{state.majorCities.length}+</div>
              <div className="text-gray-600">Cities Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">{state.industries.length}</div>
              <div className="text-gray-600">Key Industries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Services in {state.name}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {stateServices.map((service) => (
            <Card key={service.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={`/states/${stateSlug}/${service.slug}`}>
                  <Button className="w-full">
                    {service.name} in {state.name}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Cities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Cities We Serve in {state.name}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {state.majorCities.map((city, index) => {
              const citySlug = city.toLowerCase().replace(/\s+/g, '-');
              return (
                <Link key={index} href={`/cities/${citySlug}`} className="group">
                  <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="font-medium group-hover:text-primary transition-colors">{city}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Event Staffing in {state.name} FAQ</h2>
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
            Ready to Get Started in {state.name}?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contact us for a free quote on event staffing and marketing services
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Link href={quoteHref("final-cta")}>Get Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
