import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, CheckCircle, Phone, ArrowRight, Users, TrendingUp, Award, Building, Star, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { states, stateServices, getStateBySlug, getStateServiceBySlug } from "@/server/states-data";
import { portfolioCaseStudies } from "@/server/portfolio-case-studies";
import type { Metadata } from 'next';

interface StateServicePageProps {
  params: Promise<{ state: string; service: string }>;
}

export async function generateMetadata({ params }: StateServicePageProps): Promise<Metadata> {
  const { state: stateSlug, service: serviceSlug } = await params;
  const state = getStateBySlug(stateSlug);
  const service = getStateServiceBySlug(serviceSlug);
  
  if (!state || !service) {
    return { title: 'Service Not Found' };
  }
  
  return {
    title: `${service.name} in ${state.name}`,
    description: `${service.name} services throughout ${state.name}. Local expertise across all major cities.`,
    openGraph: {
      type: 'website',
      title: `${service.name} in ${state.name} | AirFresh Marketing`,
      description: `Professional ${service.name.toLowerCase()} services across ${state.name}.`,
      url: `https://www.airfreshmarketing.com/states/${stateSlug}/${serviceSlug}`,
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} in ${state.name}`,
      description: `Professional ${service.name.toLowerCase()} services across ${state.name}.`,
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/states/${stateSlug}/${serviceSlug}`,
    },
  };
}

export async function generateStaticParams() {
  const paths: { state: string; service: string }[] = [];
  for (const state of states) {
    for (const service of stateServices) {
      paths.push({ state: state.slug, service: service.slug });
    }
  }
  return paths;
}

export default async function StateServicePage({ params }: StateServicePageProps) {
  const { state: stateSlug, service: serviceSlug } = await params;
  const state = getStateBySlug(stateSlug);
  const service = getStateServiceBySlug(serviceSlug);

  if (!state || !service) {
    notFound();
  }

  const keywordPhrase = `${service.name} ${state.name}`;
  const quoteHref = (intent: string) => `/get-quote?source=state-${stateSlug}-${serviceSlug}&intent=${intent}`;

  const faqs = [
    {
      question: `How do I hire ${service.name.toLowerCase()} in ${state.name}?`,
      answer: `Contact AirFresh Marketing for ${service.name.toLowerCase()} in ${state.name}. We provide trained, professional staff across ${state.majorCities.join(', ')} and all other cities statewide. Request a free quote online or call (303) 720-6060.`
    },
    {
      question: `What does ${service.name.toLowerCase()} cost in ${state.name}?`,
      answer: `${service.name} rates in ${state.name} depend on event duration, team size, and specific requirements. We offer competitive pricing with no hidden fees. Contact us for a customized quote for your ${state.name} campaign.`
    },
    {
      question: `Do you provide ${service.name.toLowerCase()} in ${state.majorCities[0]}?`,
      answer: `Yes, AirFresh Marketing provides ${service.name.toLowerCase()} in ${state.majorCities[0]} and throughout ${state.name}. We have a local network of trained professionals ready to represent your brand in any ${state.name} market.`
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": `${service.name} in ${state.name}`,
        "provider": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "telephone": "+1-303-720-6060"
        },
        "areaServed": {
          "@type": "State",
          "name": state.name
        },
        "description": service.description
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

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Building className="h-6 w-6" />
              <span className="text-white/80 uppercase tracking-wide text-sm font-semibold">Statewide Coverage</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.name} in {state.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {service.description} We serve {state.majorCities.slice(0, 4).join(', ')}, and all cities throughout {state.name}.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href={quoteHref("hero")}>Get Free Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                <a href="tel:+13037206060">
                  <Phone className="mr-2 h-5 w-5" />
                  Call: 303-720-6060
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Trust Strip */}
      <section className="bg-white border-b border-gray-100 py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold text-gray-900">4.9/5</span>
              <span>avg client rating</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span className="font-semibold text-gray-900">300+</span>
              <span>national brands served</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" />
              <span className="font-semibold text-gray-900">5,000+</span>
              <span>vetted staff nationwide</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span className="font-semibold text-gray-900">24-hr</span>
              <span>quote turnaround</span>
            </div>
            <div className="hidden md:block h-4 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="font-semibold text-gray-900">20+ years</span>
              <span>in experiential marketing</span>
            </div>
          </div>
        </div>
      </section>

      {/* State Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{state.population}</div>
              <div className="text-gray-600">Population</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{state.majorCities.length}+</div>
              <div className="text-gray-600">Major Cities Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{state.industries.length}</div>
              <div className="text-gray-600">Key Industries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">{keywordPhrase} - Why Choose AirFresh Marketing?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Statewide Coverage</h3>
                  <p className="text-gray-600">We serve all major cities in {state.name} including {state.majorCities.join(', ')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Local Market Expertise</h3>
                  <p className="text-gray-600">{state.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Industry Specialists</h3>
                  <p className="text-gray-600">Experience with {state.name}'s key industries: {state.industries.join(', ')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Rapid Deployment</h3>
                  <p className="text-gray-600">Quick mobilization of trained staff anywhere in {state.name}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mid-body CTA */}
      <section className="py-10 bg-primary/5 border-y border-primary/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-lg font-semibold text-gray-900">
              Ready to hire {service.name.toLowerCase()} in {state.name}?
            </p>
            <p className="text-gray-600 mt-1">
              Tell us about your campaign and get a free quote within 24 hours.
            </p>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <Link href={quoteHref("mid-body")}>Get Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* Cities Served */}
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

      {/* Other Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Other Services in {state.name}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {stateServices
            .filter(s => s.slug !== serviceSlug)
            .slice(0, 6)
            .map((relatedService) => (
              <Card key={relatedService.slug} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{relatedService.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-2">{relatedService.description}</p>
                  <Link href={`/states/${stateSlug}/${relatedService.slug}`}>
                    <Button variant="outline" className="w-full">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">{service.name} Success Stories</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            See how we've helped brands achieve results with {service.name.toLowerCase()} campaigns
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioCaseStudies
              .filter(cs => cs.featured)
              .slice(0, 3)
              .map((caseStudy) => (
                <Card key={caseStudy.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                  {caseStudy.heroImage && (
                    <div className="relative h-48 bg-gray-100">
                      <Image src={caseStudy.heroImage} alt={caseStudy.name} fill className="object-cover" />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-1">{caseStudy.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{caseStudy.industry}</p>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">{caseStudy.tagline}</p>
                    <Link href={`/case-studies/${caseStudy.id}`}>
                      <Button variant="outline" size="sm" className="w-full">View Case Study</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">{service.name} in {state.name} FAQ</h2>
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
            Ready for {service.name} in {state.name}?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get a free quote for your next campaign in {state.name}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href={quoteHref("final-cta")}>Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="tel:+13037206060">Call: 303-720-6060</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
