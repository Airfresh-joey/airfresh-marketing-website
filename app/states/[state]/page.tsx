import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, ArrowRight, Building, Users } from "lucide-react";
import Link from "next/link";
import SEO from "@/components/SEO";
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

  return (
    <div className="min-h-screen pt-16">
      <SEO
        title={`Event Staffing & Marketing Services in ${state.name} | AirFresh Marketing`}
        description={`Professional event staffing, brand ambassadors, and experiential marketing services throughout ${state.name}.`}
        pageType="service"
        canonical={`https://www.airfreshmarketing.com/states/${stateSlug}`}
      />

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
                <Link href="/contact">Get Free Quote</Link>
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
            {state.majorCities.map((city, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-sm">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">{city}</span>
              </div>
            ))}
          </div>
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
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
