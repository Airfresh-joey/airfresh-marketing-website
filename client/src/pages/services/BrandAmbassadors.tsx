import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MapPin, Users, Star, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default function BrandAmbassadors() {
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
    document.title = "Brand Ambassadors | Nationwide Event Staffing | AirFresh Marketing";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional brand ambassadors for events nationwide. AirFresh Marketing provides trained, enthusiastic brand representatives for product launches, activations, and promotional campaigns.');
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/images/heroes/sxsw-event-all-services.jpeg)`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Nationwide Brand Ambassadors
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow">
            Professional brand representatives who bring your products to life through authentic engagement and memorable experiences at events across the country.
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
              <h2 className="text-3xl font-bold mb-6">Expert Brand Representation Nationwide</h2>
              <p className="text-lg text-gray-600 mb-6">
                AirFresh Marketing provides professional brand ambassadors who are the face and voice of your brand at events,
                retail locations, and activations across the United States. Our extensively trained representatives don't just
                distribute samples – they create meaningful connections that turn prospects into loyal customers.
              </p>
              <div className="space-y-4">
                {[
                  "Professionally trained and certified ambassadors",
                  "Deep product knowledge and brand alignment",
                  "Engaging personality and communication skills",
                  "Real-time reporting and lead generation",
                  "Nationwide coverage in all major markets"
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
                  <Users className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">10,000+</h3>
                  <p className="text-gray-600">Trained Ambassadors</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <MapPin className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">100+</h3>
                  <p className="text-gray-600">Cities Covered</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <Star className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">300+</h3>
                  <p className="text-gray-600">Brands Served</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">95%</h3>
                  <p className="text-gray-600">Client Retention</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Brand Ambassadors Do */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Brand Ambassadors Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Product Demonstrations</h3>
                <p className="text-gray-600">
                  Showcase your products with engaging demonstrations that highlight key features and benefits,
                  turning curiosity into conversions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Sample Distribution</h3>
                <p className="text-gray-600">
                  Strategic sampling campaigns that put your products directly into the hands of your target audience
                  while collecting valuable consumer feedback.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Lead Generation</h3>
                <p className="text-gray-600">
                  Capture qualified leads through engaging conversations and digital tools, providing your sales team
                  with warm prospects ready to convert.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Event Activation</h3>
                <p className="text-gray-600">
                  Create immersive brand experiences at festivals, conferences, and special events that leave lasting
                  impressions on attendees.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Retail Support</h3>
                <p className="text-gray-600">
                  In-store brand ambassadors who drive sales, educate customers, and enhance the retail experience
                  for your products.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Social Media Amplification</h3>
                <p className="text-gray-600">
                  Extend your reach with ambassadors who create authentic social content and encourage user-generated
                  content from event attendees.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cities We Serve */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">Brand Ambassadors Available Nationwide</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            From coast to coast, our network of professional brand ambassadors is ready to represent your brand
            in any market. Select your city below to learn more about local services.
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
                    href={`/city-services/${slug}-brand-ambassadors`}
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
                          href={`/city-services/${slug}-brand-ambassadors`}
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
            Ready to Amplify Your Brand?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let our professional brand ambassadors create memorable experiences that drive real results for your brand.
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