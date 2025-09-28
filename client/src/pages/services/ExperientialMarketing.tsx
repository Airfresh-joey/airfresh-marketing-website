import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Users, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function ExperientialMarketing() {
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
    document.title = "Experiential Marketing | Nationwide Event Activations | AirFresh Marketing";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Award-winning experiential marketing campaigns nationwide. AirFresh Marketing creates immersive brand experiences, interactive activations, and memorable events that drive engagement and loyalty.');
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/heroes/mac-cosmetics-experiential-marketing.jpeg)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Nationwide Experiential Marketing
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow">
            Create unforgettable brand experiences that forge emotional connections, drive engagement, and turn audiences into loyal advocates through immersive activations.
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
              <h2 className="text-3xl font-bold mb-6">Immersive Brand Experiences That Convert</h2>
              <p className="text-lg text-gray-600 mb-6">
                AirFresh Marketing specializes in creating experiential marketing campaigns that go beyond traditional advertising.
                We design and execute immersive brand experiences that engage all five senses, create lasting memories, and generate
                authentic word-of-mouth marketing that amplifies your brand's reach and impact.
              </p>
              <div className="space-y-4">
                {[
                  "Custom-designed immersive brand environments",
                  "Interactive technology and AR/VR experiences",
                  "Multi-sensory activations that create memories",
                  "Social media integration and amplification",
                  "Data capture and ROI measurement"
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
                  <Sparkles className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">2,500+</h3>
                  <p className="text-gray-600">Experiences Created</p>
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
                  <h3 className="text-2xl font-bold mb-2">10M+</h3>
                  <p className="text-gray-600">Consumers Engaged</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">85%</h3>
                  <p className="text-gray-600">Engagement Rate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Experiential Marketing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Experiential Marketing Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Pop-Up Experiences</h3>
                <p className="text-gray-600">
                  Create temporary brand environments that generate buzz, from retail pop-ups to interactive
                  installations that transform spaces into immersive brand worlds.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Product Launches</h3>
                <p className="text-gray-600">
                  Launch new products with experiential campaigns that let consumers touch, feel, and experience
                  your innovation firsthand through memorable activations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Mobile Tours</h3>
                <p className="text-gray-600">
                  Take your brand on the road with custom-designed mobile experiences that bring immersive
                  activations directly to your target audience nationwide.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Festival Activations</h3>
                <p className="text-gray-600">
                  Stand out at music festivals, food festivals, and cultural events with engaging brand experiences
                  that resonate with passionate audiences.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Interactive Installations</h3>
                <p className="text-gray-600">
                  Design and build interactive art installations and digital experiences that encourage participation,
                  sharing, and viral social media moments.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">VR/AR Experiences</h3>
                <p className="text-gray-600">
                  Leverage cutting-edge technology to create virtual and augmented reality experiences that transport
                  consumers into your brand's universe.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Experiential Marketing Nationwide</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From coast to coast, our experiential marketing experts create unforgettable brand experiences in every major market.
            Select your city below to learn more about local experiential marketing services.
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
                    href={`/city-services/${slug}-experiential-marketing`}
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
                          href={`/city-services/${slug}-experiential-marketing`}
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
            Ready to Create Unforgettable Brand Experiences?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let our experiential marketing experts design and execute immersive campaigns that transform your audience into brand advocates.
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