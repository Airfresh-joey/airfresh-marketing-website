import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { 
  Zap, 
  Users, 
  Heart, 
  Target, 
  Sparkles, 
  Camera, 
  Share2,
  ArrowRight,
  Play,
  Award,
  Eye,
  TrendingUp
} from "lucide-react";

export default function BrandActivations() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    },
    "serviceType": "Brand Activation Services",
    "description": "Professional brand activation services including product launches, sampling campaigns, and pop-up experiences"
  };
  const featuredActivation = {
    title: "Red Bull Wings Team: Energy Sampling Experience",
    brand: "Red Bull",
    type: "Product Sampling",
    duration: "6 Months",
    reach: "500,000+ Consumers",
    description: "Created an energetic brand activation featuring the iconic Red Bull Wings Team, complete with branded vehicles, product sampling, and interactive games that brought the 'Red Bull gives you wings' message to life across college campuses and events nationwide.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    results: [
      { metric: "Brand Awareness", value: "+60%", icon: Eye },
      { metric: "Product Trials", value: "500K+", icon: Users },
      { metric: "Social Mentions", value: "+300%", icon: Share2 },
      { metric: "Purchase Intent", value: "+45%", icon: TrendingUp }
    ]
  };

  const activationTypes = [
    {
      icon: Sparkles,
      title: "Product Launch Activations",
      description: "Create buzz and excitement around new product introductions with immersive experiences that showcase features and benefits.",
      examples: ["Tech product demos", "Fashion runway shows", "Food tastings"],
      color: "bg-purple-50 border-purple-100"
    },
    {
      icon: Users,
      title: "Sampling Campaigns",
      description: "Put your products directly in consumers' hands through strategic sampling programs that drive trial and purchase.",
      examples: ["Food & beverage tastings", "Beauty consultations", "Tech try-outs"],
      color: "bg-green-50 border-green-100"
    },
    {
      icon: Camera,
      title: "Photo-Worthy Experiences",
      description: "Design Instagram-ready moments that encourage organic social sharing and extend your brand reach.",
      examples: ["Art installations", "Interactive displays", "Branded photo ops"],
      color: "bg-pink-50 border-pink-100"
    },
    {
      icon: Target,
      title: "Pop-Up Experiences",
      description: "Temporary branded spaces that create exclusivity and urgency while delivering immersive brand experiences.",
      examples: ["Retail pop-ups", "Brand lounges", "Experience centers"],
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: Play,
      title: "Interactive Games & Contests",
      description: "Gamify your brand experience with engaging activities that entertain while educating consumers about your products.",
      examples: ["Digital games", "Physical challenges", "Skill competitions"],
      color: "bg-yellow-50 border-yellow-100"
    },
    {
      icon: Heart,
      title: "Cause Marketing Activations",
      description: "Connect your brand with meaningful causes through activations that showcase your values and social responsibility.",
      examples: ["Charity partnerships", "Environmental initiatives", "Community service"],
      color: "bg-red-50 border-red-100"
    }
  ];

  const recentActivations = [
    {
      title: "Apple iPhone 15: Tech Innovation Showcase",
      brand: "Apple",
      type: "Product Launch",
      image: "https://images.unsplash.com/photo-1592179900008-8f6137fedb45?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Interactive demos showcasing iPhone 15 features through hands-on stations and AR experiences.",
      highlights: ["50,000+ product trials", "90% positive sentiment", "40% purchase consideration lift"]
    },
    {
      title: "Nike Air Jordan: Sneaker Culture Celebration",
      brand: "Nike",
      type: "Cultural Experience",
      image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Multi-city activation celebrating sneaker culture with customization stations and basketball courts.",
      highlights: ["25,000 attendees", "5,000 custom designs", "200% social engagement"]
    },
    {
      title: "Coca-Cola Happiness Factory: Interactive Vending",
      brand: "Coca-Cola",
      type: "Sampling Campaign",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Innovative vending experiences that surprised consumers with unexpected moments of happiness.",
      highlights: ["100,000 free samples", "2M video views", "85% brand recall increase"]
    },
    {
      title: "Netflix Stranger Things: Retro Arcade Pop-Up",
      brand: "Netflix",
      type: "Pop-Up Experience",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "80s-themed arcade featuring show-inspired games and immersive set recreations.",
      highlights: ["75,000 visitors", "3M social impressions", "95% engagement rate"]
    },
    {
      title: "Amazon Prime Day: Treasure Hunt Experience",
      brand: "Amazon",
      type: "Interactive Contest",
      image: "https://images.unsplash.com/photo-1586953983027-d7508edc3a2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "City-wide treasure hunt combining digital clues with physical locations and exclusive prizes.",
      highlights: ["15,000 participants", "500K app downloads", "60% conversion to Prime"]
    },
    {
      title: "Patagonia Environmental Action: Clean-Up Campaign",
      brand: "Patagonia",
      type: "Cause Marketing",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Community-driven environmental clean-up events showcasing brand values and sustainability commitment.",
      highlights: ["10,000 volunteers", "500 tons collected", "80% brand affinity increase"]
    }
  ];

  const benefits = [
    "Direct consumer interaction and feedback",
    "Measurable engagement metrics",
    "Organic social media amplification",
    "Increased brand awareness and recall",
    "Higher purchase consideration",
    "Authentic brand experience delivery"
  ];

  return (
    <div className="pt-16">
      <SEO 
        title="Brand Activation Services | Pop-Up Events & Product Launches - AirFresh"
        description="Expert brand activation services: product launches, sampling campaigns, pop-up experiences & guerrilla marketing. Create memorable brand moments nationwide."
        pageType="brand-activations"
        canonical="https://airfreshmarketing.com/services/brand-activations"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Brand <span className="text-yellow-300 italic font-serif">Activations</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              Bring your brand to life with interactive experiences that create meaningful 
              connections, drive engagement, and generate buzz that extends far beyond the event itself.
            </p>
            <div className="flex items-center space-x-8 text-lg">
              <div className="flex items-center">
                <Sparkles className="h-6 w-6 text-yellow-300 mr-2" />
                <span>Memorable Experiences</span>
              </div>
              <div className="flex items-center">
                <Share2 className="h-6 w-6 text-yellow-300 mr-2" />
                <span>Social Amplification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Activation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">FEATURED ACTIVATION</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Campaign Spotlight</h3>
          </div>

          <Card className="overflow-hidden shadow-2xl">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img 
                  src={featuredActivation.image} 
                  alt={featuredActivation.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold mr-2">
                    {featuredActivation.type}
                  </span>
                  <span className="text-sm text-gray-600">{featuredActivation.brand}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                  {featuredActivation.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {featuredActivation.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <div className="text-sm text-gray-500">Duration</div>
                    <div className="font-semibold">{featuredActivation.duration}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Total Reach</div>
                    <div className="font-semibold">{featuredActivation.reach}</div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mb-4 text-gray-900">Key Results</h4>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {featuredActivation.results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <result.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-xl font-bold text-gray-900">{result.value}</div>
                      <div className="text-sm text-gray-600">{result.metric}</div>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full lg:w-auto">
                  View Full Case Study
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Activation Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">ACTIVATION TYPES</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How We Activate Brands</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From product launches to cause marketing, we create tailored activation strategies 
              that resonate with your target audience and drive meaningful brand engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activationTypes.map((type, index) => (
              <Card key={index} className={`p-6 hover:shadow-xl transition-all duration-300 ${type.color}`}>
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                    <type.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{type.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Examples:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">RECENT WORK</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Latest Activations</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover some of our most successful recent brand activations across various 
              industries and activation types.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentActivations.map((activation, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={activation.image} 
                    alt={activation.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {activation.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/90 text-gray-800 px-2 py-1 rounded text-xs font-medium">
                      {activation.brand}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                    {activation.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {activation.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {activation.highlights.map((highlight, idx) => (
                        <li key={idx}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full group/btn">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Why Brand Activations Work
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Brand activations create direct, memorable interactions between your brand and consumers. 
                Unlike traditional advertising, activations allow people to experience your brand firsthand, 
                leading to stronger emotional connections and higher conversion rates.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Brand activation event" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm">Engagement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Activate Your Brand?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create an unforgettable activation that connects your brand with your audience 
            in meaningful, memorable ways that drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Start Planning</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}