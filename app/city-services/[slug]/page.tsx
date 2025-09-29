import { notFound } from 'next/navigation';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, CheckCircle, Star, Phone, ArrowRight, Users, TrendingUp, Award, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import SEO from "@/components/SEO";
import { serviceTypes } from "@/server/city-services-data";
import { cityLocations } from "@/server/city-data";

interface CityServicePageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all city-service combinations
export async function generateStaticParams() {
  const paths = [];

  // Get major cities from cityLocations
  const cities = cityLocations.map(location => ({
    name: location.city.toLowerCase().replace(/\s+/g, '-'),
    displayName: location.city
  }));

  // Add additional major cities
  const additionalCities = [
    { name: 'los-angeles', displayName: 'Los Angeles' },
    { name: 'chicago', displayName: 'Chicago' },
    { name: 'houston', displayName: 'Houston' },
    { name: 'phoenix', displayName: 'Phoenix' },
    { name: 'philadelphia', displayName: 'Philadelphia' },
    { name: 'san-antonio', displayName: 'San Antonio' },
    { name: 'san-diego', displayName: 'San Diego' },
    { name: 'dallas', displayName: 'Dallas' },
    { name: 'austin', displayName: 'Austin' },
    { name: 'san-francisco', displayName: 'San Francisco' },
    { name: 'seattle', displayName: 'Seattle' },
    { name: 'denver', displayName: 'Denver' },
    { name: 'boston', displayName: 'Boston' },
    { name: 'atlanta', displayName: 'Atlanta' },
    { name: 'orlando', displayName: 'Orlando' },
    { name: 'tampa', displayName: 'Tampa' },
    { name: 'portland', displayName: 'Portland' },
    { name: 'las-vegas', displayName: 'Las Vegas' },
    { name: 'nashville', displayName: 'Nashville' },
    { name: 'charlotte', displayName: 'Charlotte' }
  ];

  const allCities = [...cities, ...additionalCities];

  // Generate paths for each city-service combination
  for (const city of allCities) {
    for (const service of serviceTypes) {
      paths.push({
        slug: `${city.name}-${service.slug}`
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
  const cityName = formatCityName(citySlug);
  const service = serviceTypes.find(s => s.slug === serviceSlug);

  if (!service) {
    notFound();
  }

  // Find city data if available
  const cityData = cityLocations.find(
    location => location.city.toLowerCase().replace(/\s+/g, '-') === citySlug
  );

  const pageTitle = `${service.name} in ${cityName} | AirFresh Marketing`;
  const pageDescription = `Professional ${service.name.toLowerCase()} services in ${cityName}. ${service.description}`;

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

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={[
          `${service.name} ${cityName}`,
          `${cityName} ${service.name.toLowerCase()}`,
          ...service.keywords.map(k => `${k} ${cityName}`),
          'experiential marketing',
          'brand activation'
        ].join(', ')}
        pageType="service"
        canonical={`https://airfreshmarketing.com/city-services/${slug}`}
      />

      {/* Hero Section */}
      <section className="relative h-[500px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`${service.name} in ${cityName}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-2xl">
              {service.name} in {cityName}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-lg">
              {service.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
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

      {/* Service Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Why Choose Our {service.name} in {cityName}?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Local Market Expertise</h3>
                  <p className="text-gray-600">Deep understanding of {cityName}'s unique market dynamics and consumer behaviors</p>
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

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            {service.name} Impact in {cityName}
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
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Get Free Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Phone className="mr-2 h-5 w-5" />
              {cityData ? cityData.phone : '1-800-AIRFRESH'}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}