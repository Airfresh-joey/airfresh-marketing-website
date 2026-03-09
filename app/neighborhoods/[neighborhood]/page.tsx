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

  return (
    <div className="min-h-screen pt-16">
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
