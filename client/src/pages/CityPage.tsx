import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock, CheckCircle, Star, Briefcase } from "lucide-react";
import { useEffect } from "react";
import { cityLocalBusinessSchema } from "@/lib/structured-data";

export default function CityPage() {
  const [match, params] = useRoute("/city/:cityName");
  const cityName = params?.cityName || "Denver";
  
  // Fetch city data from API
  const { data: cityData, isLoading } = useQuery({
    queryKey: ['/api/cities', cityName],
    queryFn: async () => {
      const response = await fetch(`/api/cities/${cityName}`);
      if (!response.ok) throw new Error('Failed to fetch city data');
      return response.json();
    }
  });
  
  // Format city name for display
  const displayName = cityData?.city || cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
  
  // Add LocalBusiness structured data to page head
  useEffect(() => {
    if (cityData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(cityLocalBusinessSchema(cityData));
      document.head.appendChild(script);
      
      return () => {
        document.head.removeChild(script);
      };
    }
  }, [cityData]);

  if (isLoading) {
    return (
      <div className="pt-16">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="text-lg">Loading city information...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section with City Image */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: cityData?.images?.hero
            ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${cityData.images.hero})`
            : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Experiential Marketing in {displayName}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl drop-shadow">
            {cityData?.description || `AirFresh Marketing brings nationwide experiential marketing expertise to ${displayName}. We create unforgettable brand experiences that connect with local audiences and drive meaningful engagement.`}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Location Info Card */}
          {cityData && (
            <Card className="mb-8 border-cyan-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-500" />
                  {cityData.businessName}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {cityData.address}<br />
                      {cityData.city}, {cityData.state} {cityData.zip}
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <a href={`tel:${cityData.phone}`} className="hover:text-cyan-500">
                        {cityData.phone}
                      </a>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                    </p>
                    <p className="flex items-center gap-2 text-gray-600">
                      <Briefcase className="w-4 h-4" />
                      <span>{cityData.primaryCategory}</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          <div className="prose prose-lg max-w-4xl">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {cityData?.description || `AirFresh Marketing brings nationwide experiential marketing expertise to ${displayName}. We create unforgettable brand experiences that connect with local audiences and drive meaningful engagement.`}
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Local Experiential Marketing Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our {displayName} team specializes in creating memorable brand activations, corporate events, and experiential campaigns tailored to the local market. With over 20 years of experience, we understand what resonates with {displayName} audiences.
            </p>
            
            {/* Services List */}
            {cityData?.services && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Our {displayName} Services</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {cityData.services.map((service: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Brand Activations in {displayName}</h3>
                <p className="text-gray-600">
                  Create buzz and engagement with interactive brand experiences designed specifically for the {displayName} market.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Corporate Events</h3>
                <p className="text-gray-600">
                  Professional event production services for {displayName} businesses, from intimate gatherings to large-scale conferences.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Product Launches</h3>
                <p className="text-gray-600">
                  Make a splash in the {displayName} market with memorable product launch events that generate media attention and customer interest.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Promotional Campaigns</h3>
                <p className="text-gray-600">
                  Targeted promotional activities that reach {displayName} consumers where they live, work, and play.
                </p>
              </div>
            </div>
            
            {/* Local Updates Section */}
            {cityData?.localUpdates && cityData.localUpdates.length > 0 && (
              <div className="mb-8 bg-cyan-50 p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-cyan-900">Recent {displayName} Updates</h3>
                <div className="space-y-3">
                  {cityData.localUpdates.map((update: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <Star className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">{update}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Service Areas */}
            {cityData?.serviceAreas && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Service Areas</h3>
                <p className="text-gray-600">
                  We proudly serve {cityData.serviceAreas.join(', ')} and surrounding areas.
                </p>
              </div>
            )}
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose AirFresh Marketing in {displayName}?</h2>
            
            <ul className="list-disc pl-6 text-lg text-gray-600 mb-6 space-y-2">
              <li><strong>Local Market Knowledge:</strong> Deep understanding of {displayName} culture, preferences, and venues</li>
              <li><strong>Nationwide Experience:</strong> Over 300 brands served across the country with proven results</li>
              <li><strong>Full-Service Approach:</strong> Everything done in-house from strategy to execution</li>
              <li><strong>Turnkey Solutions:</strong> Complete project management and coordination</li>
              <li><strong>Data-Driven Results:</strong> Comprehensive reporting and actionable insights</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Started in {displayName}</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to create an unforgettable brand experience in {displayName}? Our local team is standing by to help you connect with your target audience through innovative experiential marketing campaigns.
            </p>
            
            <div className="text-center">
              <Button asChild size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3">
                <a href="/contact">Contact Our {displayName} Team</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}