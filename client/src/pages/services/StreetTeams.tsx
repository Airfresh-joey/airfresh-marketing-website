import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Users, Target, Megaphone } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function StreetTeams() {
  // Fetch all cities data
  const { data: cities } = useQuery({
    queryKey: ['/api/cities'],
    queryFn: async () => {
      const response = await fetch('/api/cities');
      if (!response.ok) throw new Error('Failed to fetch cities');
      return response.json();
    }
  });

  // Add SEO meta tags
  useEffect(() => {
    document.title = "Street Team Marketing | Nationwide Guerrilla Marketing | AirFresh Marketing";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional street team marketing and guerrilla campaigns nationwide. AirFresh Marketing provides high-energy street teams for product sampling, flyering, and grassroots promotion.');
    }
  }, []);

  // Group cities by state for better organization
  const citiesByState = cities?.reduce((acc: any, city: any) => {
    const state = city.state;
    if (!acc[state]) acc[state] = [];
    acc[state].push(city);
    return acc;
  }, {}) || {};

  // Major cities to highlight
  const majorCities = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
    'Austin', 'Jacksonville', 'San Francisco', 'Columbus', 'Charlotte',
    'Indianapolis', 'Seattle', 'Denver', 'Boston', 'Nashville',
    'Miami', 'Atlanta', 'Las Vegas', 'Portland', 'Orlando'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/heroes/la-kings-street-teams.jpeg)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Nationwide Street Team Marketing
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow">
            High-impact guerrilla marketing campaigns that take your brand directly to the streets, creating buzz and driving engagement in every major market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3">
              <a href="/contact">Get a Free Quote</a>
            </Button>
            <Button asChild size="lg" className="bg-white/90 hover:bg-white text-gray-900 px-8 py-3">
              <a href="/portfolio">View Case Studies</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Guerrilla Marketing That Gets Results</h2>
              <p className="text-lg text-gray-600 mb-6">
                AirFresh Marketing deploys dynamic street teams that create unforgettable brand experiences in high-traffic
                locations. Our guerrilla marketing campaigns generate authentic buzz, drive social media engagement, and
                deliver measurable results through strategic grassroots activation.
              </p>
              <div className="space-y-4">
                {[
                  "High-energy teams trained in guerrilla tactics",
                  "Strategic location targeting for maximum impact",
                  "Product sampling and demonstration expertise",
                  "Flyer distribution and promotional outreach",
                  "Social media amplification and content creation"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6 text-center">
                  <Megaphone className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">50M+</h3>
                  <p className="text-gray-600">Impressions Generated</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">100+</h3>
                  <p className="text-gray-600">Cities Activated</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">5,000+</h3>
                  <p className="text-gray-600">Street Team Members</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">500+</h3>
                  <p className="text-gray-600">Campaigns Executed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Street Team Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Street Team Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Product Sampling</h3>
                <p className="text-gray-600">
                  Put your products directly into consumers' hands with strategic sampling campaigns in high-traffic
                  areas and targeted neighborhoods.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Flyer Distribution</h3>
                <p className="text-gray-600">
                  Maximize reach with targeted flyer campaigns that deliver your message to the right audience at
                  concerts, events, and busy urban centers.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Flash Mobs</h3>
                <p className="text-gray-600">
                  Create viral moments with choreographed flash mobs that capture attention, generate social media
                  buzz, and leave lasting impressions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Campus Marketing</h3>
                <p className="text-gray-600">
                  Reach college students with targeted campus campaigns featuring energetic teams who understand
                  and connect with the demographic.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Concert & Festival Teams</h3>
                <p className="text-gray-600">
                  Activate at music festivals and concerts with street teams that engage attendees before, during,
                  and after events.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Pop-Up Activations</h3>
                <p className="text-gray-600">
                  Deploy rapid response teams for pop-up experiences that create excitement and drive immediate
                  engagement with your brand.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Street Teams Available Nationwide</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Our network of professional street teams is ready to execute guerrilla marketing campaigns in any market.
            Select your city below to learn more about local street team services.
          </p>

          {/* Major Cities Highlight */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Major Markets</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {majorCities.map(cityName => {
                const city = cities?.find((c: any) => c.city === cityName);
                if (!city) return null;
                const slug = city.city.toLowerCase().replace(/\s+/g, '-');
                return (
                  <Link
                    key={city.city}
                    href={`/city-services/${slug}-street-team-marketing`}
                    className="p-4 border border-gray-200 rounded-lg hover:border-cyan-500 hover:bg-cyan-50 transition-colors text-center"
                  >
                    <MapPin className="w-6 h-6 text-cyan-500 mx-auto mb-2" />
                    <span className="font-medium">{city.city}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* All Cities by State */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">All Service Locations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(citiesByState).sort().map(([state, stateCities]) => (
                <div key={state} className="border border-gray-200 rounded-lg p-6">
                  <h4 className="font-bold text-lg mb-3 text-cyan-600">{state}</h4>
                  <div className="space-y-2">
                    {(stateCities as any[]).map((city: any) => {
                      const slug = city.city.toLowerCase().replace(/\s+/g, '-');
                      return (
                        <Link
                          key={city.city}
                          href={`/city-services/${slug}-street-team-marketing`}
                          className="block text-gray-600 hover:text-cyan-500 transition-colors"
                        >
                          {city.city}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-cyan-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Take Your Brand to the Streets?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let our professional street teams create the buzz your brand deserves with high-impact guerrilla marketing campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-3">
              <a href="/contact">Get Started Today</a>
            </Button>
            <Button asChild size="lg" className="bg-cyan-700 hover:bg-cyan-800 text-white px-8 py-3">
              <a href="tel:3037206060">Call (303) 720-6060</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}