'use client'

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SEO from "@/components/SEO";
import { industries, getIndustryBySlug } from "@/server/industries-data";
import { cities as industryCities } from "@/server/industry-city-data";
import {
  CheckCircle,
  Target,
  Zap,
  ArrowRight,
  Phone,
  Building2,
  Users,
  Award,
  TrendingUp
} from "lucide-react";

export default function IndustryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": industry.name + " Marketing Services",
    "provider": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    },
    "description": industry.description,
    "areaServed": "United States"
  };

  return (
    <div className="pt-16">
      <SEO
        title={industry.title}
        description={industry.metaDescription}
        pageType="service"
        canonical={`https://www.airfreshmarketing.com/industries/${industry.slug}`}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${industry.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-black/70 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-6 w-6 text-cyan-400" />
              <span className="text-cyan-400 font-semibold uppercase tracking-wide">Industry Expertise</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              {industry.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
              {industry.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                <a href="tel:+13037206060">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 303-720-6060
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {industry.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {industry.name} Expertise
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {industry.description}
            </p>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Challenges */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-red-500" />
                <h2 className="text-2xl font-bold text-gray-900">Industry Challenges</h2>
              </div>
              <div className="space-y-4">
                {industry.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-600 text-sm font-bold">{index + 1}</span>
                    </div>
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Zap className="h-8 w-8 text-green-500" />
                <h2 className="text-2xl font-bold text-gray-900">Our Solutions</h2>
              </div>
              <div className="space-y-4">
                {industry.solutions.map((solution, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Services for {industry.name}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {industry.services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <span className="text-gray-800 font-medium">{service}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Browse by City Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            {industry.name} Marketing by City
          </h2>
          <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
            We provide specialized {industry.name.toLowerCase()} event marketing and staffing services in major cities across the United States.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {industryCities.map((city) => (
              <Link
                key={city.slug}
                href={`/industries/${industry.slug}/${city.slug}`}
                className="px-3 py-2 text-sm text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 rounded transition-colors text-center"
              >
                {city.name}, {city.state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Elevate Your {industry.name} Events?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a custom staffing proposal for your next {industry.name.toLowerCase()} activation or event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <a href="tel:+13037206060">Call: 303-720-6060</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}


