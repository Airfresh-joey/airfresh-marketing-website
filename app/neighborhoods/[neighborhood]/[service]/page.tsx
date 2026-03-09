import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, ArrowRight, Building2, CheckCircle } from "lucide-react";
import Link from "next/link";
import { neighborhoods, neighborhoodServices, getNeighborhoodBySlug } from "@/server/neighborhoods-data";
import type { Metadata } from 'next';

interface NeighborhoodServicePageProps {
  params: Promise<{ neighborhood: string; service: string }>;
}

export async function generateMetadata({ params }: NeighborhoodServicePageProps): Promise<Metadata> {
  const { neighborhood: neighborhoodSlug, service: serviceSlug } = await params;
  const neighborhood = getNeighborhoodBySlug(neighborhoodSlug);
  const service = neighborhoodServices.find(s => s.slug === serviceSlug);
  
  if (!neighborhood || !service) {
    return { title: 'Not Found' };
  }
  
  return {
    title: `${service.name} in ${neighborhood.name}, ${neighborhood.city} | AirFresh Marketing`,
    description: `Professional ${service.name.toLowerCase()} in ${neighborhood.name}, ${neighborhood.city}. Local expertise and reliable staff.`,
    openGraph: {
      type: 'website',
      title: `${service.name} in ${neighborhood.name} | AirFresh Marketing`,
      description: `Professional ${service.name.toLowerCase()} in ${neighborhood.name}, ${neighborhood.city}.`,
      url: `https://www.airfreshmarketing.com/neighborhoods/${neighborhoodSlug}/${serviceSlug}`,
      images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.name} in ${neighborhood.name}`,
      description: `Professional ${service.name.toLowerCase()} in ${neighborhood.name}, ${neighborhood.city}.`,
    },
    alternates: {
      canonical: `https://www.airfreshmarketing.com/neighborhoods/${neighborhoodSlug}/${serviceSlug}`,
    },
  };
}

export async function generateStaticParams() {
  const params: { neighborhood: string; service: string }[] = [];
  
  neighborhoods.forEach(neighborhood => {
    neighborhoodServices.forEach(service => {
      params.push({
        neighborhood: neighborhood.slug,
        service: service.slug
      });
    });
  });
  
  return params;
}

export default async function NeighborhoodServicePage({ params }: NeighborhoodServicePageProps) {
  const { neighborhood: neighborhoodSlug, service: serviceSlug } = await params;
  const neighborhood = getNeighborhoodBySlug(neighborhoodSlug);
  const service = neighborhoodServices.find(s => s.slug === serviceSlug);

  if (!neighborhood || !service) {
    notFound();
  }

  const benefits = [
    `Local ${neighborhood.name} market expertise`,
    `Staff who know the ${neighborhood.city} area`,
    `Understanding of ${neighborhood.name}'s unique culture`,
    `Reliable, professional ${service.name.toLowerCase()}`,
    `Flexible scheduling for your events`,
    `Background-checked and trained team members`
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-r from-primary to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6" />
              <span className="uppercase tracking-wide text-sm font-semibold text-white/80">
                {neighborhood.name} • {neighborhood.city}, {neighborhood.state}
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {service.name} in {neighborhood.name}
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

      {/* Why This Neighborhood */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why {service.name} in {neighborhood.name}?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Local Expertise</h3>
            <p className="text-gray-600 mb-6">
              {neighborhood.name} has its own unique character and audience. Our {service.name.toLowerCase()} understand the local culture, know the venues, and connect authentically with the community.
            </p>
            <h3 className="text-xl font-semibold mb-4">Key Venues</h3>
            <ul className="space-y-2">
              {neighborhood.venues.map((venue, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-primary" />
                  <span>{venue}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Popular Event Types</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {neighborhood.eventTypes.map((type, index) => (
                <span key={index} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {type}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-semibold mb-4">Why Choose Us</h3>
            <ul className="space-y-2">
              {benefits.slice(0, 4).map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Other Services in {neighborhood.name}
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {neighborhoodServices.filter(s => s.slug !== serviceSlug).map((s) => (
              <Link key={s.slug} href={`/neighborhoods/${neighborhoodSlug}/${s.slug}`}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardContent className="p-4 text-center">
                    <p className="font-medium">{s.name}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need {service.name} in {neighborhood.name}?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Get a free quote for professional event staff in {neighborhood.city}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Get Free Quote</Link>
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
