import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";

export default function CityPage() {
  const [match, params] = useRoute("/city/:cityName");
  const cityName = params?.cityName || "Denver";
  
  // Format city name for display
  const displayName = cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900">
            Experiential Marketing in {displayName}
          </h1>
          
          <div className="prose prose-lg max-w-4xl">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              AirFresh Marketing brings nationwide experiential marketing expertise to {displayName}. We create unforgettable brand experiences that connect with local audiences and drive meaningful engagement.
            </p>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Local Experiential Marketing Services</h2>
            <p className="text-lg text-gray-600 mb-6">
              Our {displayName} team specializes in creating memorable brand activations, corporate events, and experiential campaigns tailored to the local market. With over 20 years of experience, we understand what resonates with {displayName} audiences.
            </p>
            
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