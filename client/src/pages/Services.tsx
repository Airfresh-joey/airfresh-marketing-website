import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { 
  Zap, 
  Heart, 
  Users, 
  Target, 
  Lightbulb, 
  Award, 
  TrendingUp,
  Palette,
  Cog,
  Laptop,
  ShoppingCart,
  BarChart3,
  Megaphone,
  Calendar,
  Camera,
  Sparkles,
  CheckCircle
} from "lucide-react";

export default function Services() {
  // Enhanced structured data with E-E-A-T signals
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "provider": {
          "@type": "Organization",
          "name": "AirFresh Marketing"
        },
        "serviceType": [
          "Experiential Marketing",
          "Brand Activations", 
          "Corporate Events",
          "Event Production",
          "Product Sampling",
          "Trade Show Marketing",
          "Promotional Campaigns",
          "Brand Ambassador Services"
        ],
        "areaServed": "United States",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Experiential Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Experiential Marketing",
                "description": "Multi-sensory brand experiences designed to achieve higher engagement rates than traditional marketing"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Brand Activations",
                "description": "Interactive experiences and product launches designed for strong brand recall"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What experiential marketing services does AirFresh offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AirFresh Marketing offers comprehensive experiential marketing services including brand activations, event staffing with trained brand ambassadors, guerrilla marketing, product sampling, pop-up events, corporate event production, and trade show marketing nationwide."
            }
          },
          {
            "@type": "Question",
            "name": "How to choose the best event staffing agency for brand activations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Choose an event staffing agency based on: experience, talent network quality, geographic reach, client satisfaction, and proven ROI. AirFresh Marketing offers experienced brand ambassadors and comprehensive services nationwide."
            }
          }
        ]
      }
    ]
  };
  const mainServices = [
    {
      icon: Heart,
      title: "Experiential Marketing",
      description: "Transform your products and services into dynamic experiences that customers can see, hear, touch, taste, and feel. Our experiential marketing campaigns create lasting impressions that traditional advertising simply can't match.",
      features: ["Multi-sensory experiences", "Emotional brand connections", "Memorable interactions", "Measurable engagement"],
      color: "bg-red-50 border-red-100"
    },
    {
      icon: Sparkles,
      title: "Brand Activations",
      description: "Bring your brand to life with interactive experiences that engage audiences and create memorable moments. From product launches to pop-up experiences, we design activations that generate buzz and drive brand awareness.",
      features: ["Product launches", "Pop-up experiences", "Interactive displays", "Brand storytelling"],
      color: "bg-purple-50 border-purple-100"
    },
    {
      icon: Users,
      title: "Corporate Events",
      description: "Whether you're planning an intimate client gathering or a large-scale corporate conference, our team handles every detail to ensure flawless execution. We create events that reflect your brand values and achieve your business objectives.",
      features: ["Executive conferences", "Client gatherings", "Team building", "Awards ceremonies"],
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: Calendar,
      title: "Event Production",
      description: "Full-service event production from concept to completion. Our experienced team manages logistics, coordinates vendors, and oversees every aspect of your event to deliver seamless experiences that exceed expectations.",
      features: ["End-to-end production", "Vendor coordination", "Logistics management", "On-site execution"],
      color: "bg-green-50 border-green-100"
    }
  ];

  const turnkeyServices = [
    {
      icon: Cog,
      title: "Production and Execution",
      description: "Complete project management from planning to flawless delivery with meticulous attention to every detail."
    },
    {
      icon: Laptop,
      title: "Experiential & Digital",
      description: "Seamless integration of physical and digital brand experiences that amplify your message."
    },
    {
      icon: ShoppingCart,
      title: "Asset Procurement",
      description: "Sourcing and managing all necessary materials, equipment, and resources for your project."
    },
    {
      icon: TrendingUp,
      title: "Marketing Strategy",
      description: "Strategic planning perfectly aligned with your business objectives and target audience."
    },
    {
      icon: Palette,
      title: "Creative Development",
      description: "Innovative concepts and creative solutions that captivate and engage your audiences."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive data analysis and actionable insights to guide future marketing efforts."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "How Do We Target Niche Markets?",
      description: "Aiming for hard-to-reach niches? We help you wiggle your way into obscure markets with crafty campaigns that resonate with specific audiences."
    },
    {
      icon: Award,
      title: "What Insights Will You Gain?",
      description: "Our end-of-project success reports are packed with actionable data to guide future marketing efforts and maximize ROI."
    },
    {
      icon: Zap,
      title: "Why Choose Experienced Professionals?",
      description: "With years of industry experience, we've helped numerous brands create unforgettable experiences that drive real business results."
    }
  ];

  return (
    <div className="pt-16">
      <SEO 
        title="Event Staffing & Brand Activation Services | Experiential Marketing - AirFresh"
        description="Full-service experiential marketing: brand ambassadors, event staffing, guerrilla marketing, sampling, pop-up events. Turnkey solutions for brand activations nationwide."
        pageType="services"
        canonical="https://airfreshmarketing.com/services"
        structuredData={structuredData}
      />
      {/* Hero Section with Semantic HTML */}
      <section className="relative py-20 lg:py-32 overflow-hidden" aria-label="Services Hero">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <article className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <header className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              What Experiential Marketing Services Does <span className="text-yellow-300 italic font-serif">AirFresh</span> Offer?
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              With years of expertise and successful campaigns nationwide, we deliver comprehensive experiential marketing services 
              designed to achieve higher engagement rates and create lasting emotional connections with your customers.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </header>
        </article>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHAT WE SPECIALIZE IN</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">What Services Can Transform Your Brand?</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From intimate brand activations to large-scale corporate events, we create 
              experiences that resonate with your audience and drive meaningful business results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className={`p-8 hover:shadow-xl transition-all duration-300 ${service.color}`}>
                <CardContent className="p-0">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-6 shadow-sm">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">TURNKEY SOLUTIONS</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Everything In-House</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We do everything in-house as an extension of your team. We strategize what's best 
              for meeting your goals and then come together to crush them as a single unit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {turnkeyServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-0">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">OUR PROCESS</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How We Work</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures every project is executed flawlessly from concept to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h4 className="text-lg font-bold mb-2">Discovery</h4>
              <p className="text-gray-600">We dive deep into your brand, goals, and target audience to understand your unique needs.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h4 className="text-lg font-bold mb-2">Strategy</h4>
              <p className="text-gray-600">We develop a comprehensive strategy that aligns with your objectives and resonates with your audience.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h4 className="text-lg font-bold mb-2">Execute</h4>
              <p className="text-gray-600">Our team brings your vision to life with meticulous attention to detail and flawless execution.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <h4 className="text-lg font-bold mb-2">Measure</h4>
              <p className="text-gray-600">We provide comprehensive reports with actionable insights to guide your future marketing efforts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHY CHOOSE US</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">The AirFresh Advantage</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our unique approach and extensive experience set us apart in the experiential marketing industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">300+</div>
              <div className="text-white/80 font-medium">Brands Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <div className="text-white/80 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-white/80 font-medium">Cities Nationwide</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-white/80 font-medium">Events Produced</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our experiential marketing services can help your brand 
            connect with customers in meaningful, memorable ways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}