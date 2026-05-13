import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, ArrowRight, Building2, CheckCircle, Users, Star } from "lucide-react";
import Link from "next/link";
import { industries, cities, getIndustryBySlug, getCityBySlug } from "@/server/industry-city-data";
import { portfolioCaseStudies } from "@/server/portfolio-case-studies";
import type { Metadata } from 'next';

interface IndustryCityPageProps {
  params: Promise<{ industry: string; city: string }>;
}

export async function generateMetadata({ params }: IndustryCityPageProps): Promise<Metadata> {
  const { industry: industrySlug, city: citySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);
  const city = getCityBySlug(citySlug);
  
  if (!industry || !city) {
    return { title: 'Not Found' };
  }
  
  return {
    title: `${industry.name} Event Marketing in ${city.name}, ${city.state} | AirFresh Marketing`,
    description: `${industry.name} event marketing & staffing in ${city.name}, ${city.state}. Brand ambassadors, event staff & experiential marketing. Get a quote.`,
    alternates: {
      canonical: `https://www.airfreshmarketing.com/industries/${industrySlug}/${citySlug}`,
    },
  };
}

export async function generateStaticParams() {
  const params: { industry: string; city: string }[] = [];
  
  industries.forEach(industry => {
    cities.forEach(city => {
      params.push({
        industry: industry.slug,
        city: city.slug
      });
    });
  });
  
  return params;
}

export default async function IndustryCityPage({ params }: IndustryCityPageProps) {
  const { industry: industrySlug, city: citySlug } = await params;
  const industry = getIndustryBySlug(industrySlug);
  const city = getCityBySlug(citySlug);

  if (!industry || !city) {
    notFound();
  }

  const quoteHref = (intent: string) => `/get-quote?source=industry-${industrySlug}-${citySlug}&intent=${intent}`;

  // Find related case studies
  const relatedCaseStudies = portfolioCaseStudies.filter(cs => 
    cs.industry?.toLowerCase().includes(industry.name.toLowerCase().split(' ')[0]) ||
    cs.markets?.some(m => m.toLowerCase().includes(city.name.toLowerCase()))
  ).slice(0, 3);

  const services = [
    {
      name: 'Brand Ambassadors',
      slug: 'brand-ambassadors',
      description: `Professional brand ambassadors for ${industry.name.toLowerCase()} events in ${city.name}`
    },
    {
      name: 'Event Staffing',
      slug: 'event-staffing',
      description: `Experienced event staff for ${industry.name.toLowerCase()} conferences and trade shows`
    },
    {
      name: 'Trade Show Staff',
      slug: 'trade-show-staff',
      description: `Expert trade show representatives for ${industry.name.toLowerCase()} exhibitions`
    },
    {
      name: 'Experiential Marketing',
      slug: 'experiential-marketing',
      description: `Immersive brand experiences for ${industry.name.toLowerCase()} audiences`
    }
  ];

  const benefits = [
    `Deep understanding of ${industry.name.toLowerCase()} industry needs`,
    `Local ${city.name} market expertise and connections`,
    `Pre-vetted, professional staff with relevant experience`,
    `Flexible staffing for events of any size`,
    `Comprehensive training on your brand and products`,
    `Real-time reporting and performance tracking`
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-primary to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6" />
              <span className="uppercase tracking-wide text-sm font-semibold text-white/80">
                {industry.name} • {city.name}, {city.state}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {industry.name} Event Marketing in {city.name}
            </h1>
            <p className="text-xl mb-8 text-white/90">
              {industry.description} in {city.name}, {city.state}. Professional staffing and experiential marketing services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
                <Link href={quoteHref('hero')}>Get Free Quote</Link>
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
          {industry.name} Marketing Services in {city.name}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card key={service.slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{service.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={`/cities/${citySlug}/${service.slug}`}>
                  <Button variant="outline" className="w-full">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Air Fresh for {industry.name} Events
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {relatedCaseStudies.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Related Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedCaseStudies.map((cs) => (
              <Card key={cs.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{cs.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4">{cs.tagline}</p>
                  <Link href={`/portfolio/${cs.id}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      View Case Study
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Stats */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">20+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-gray-600">{industry.name} Events</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-gray-600">Cities Nationwide</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your {industry.name} Event in {city.name}?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get a free quote for professional event staffing and marketing services
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href={quoteHref('final-cta')}>Get Free Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <a href="tel:+13037206060"><Phone className="mr-2 h-5 w-5" />Call Now</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
