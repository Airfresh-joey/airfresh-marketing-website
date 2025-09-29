'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
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
        "areaServed": "United States"
      }
    ]
  };

  const mainServices = [
    {
      icon: Sparkles,
      title: "Brand Activations & Product Sampling",
      description: "Create memorable first impressions with interactive brand experiences that let customers touch, taste, and experience your products firsthand.",
      features: ["Product Demonstrations", "Sampling Campaigns", "Pop-up Experiences", "Interactive Displays"],
      color: "bg-gradient-to-br from-blue-50 to-cyan-50"
    },
    {
      icon: Users,
      title: "Corporate Events & Team Building",
      description: "Strengthen company culture and client relationships through professionally managed corporate events and team building experiences.",
      features: ["Conference Management", "Team Building Activities", "Client Entertainment", "Award Ceremonies"],
      color: "bg-gradient-to-br from-purple-50 to-pink-50"
    },
    {
      icon: Megaphone,
      title: "Guerrilla Marketing & Street Teams",
      description: "Make a bold statement with creative guerrilla marketing campaigns that generate buzz and create viral moments for your brand.",
      features: ["Street Team Campaigns", "Flash Mob Events", "Viral Stunts", "Community Engagement"],
      color: "bg-gradient-to-br from-green-50 to-emerald-50"
    },
    {
      icon: Calendar,
      title: "Trade Show & Convention Marketing",
      description: "Maximize your trade show ROI with professional booth management, lead generation, and attendee engagement strategies.",
      features: ["Booth Management", "Lead Generation", "Product Launches", "Attendee Engagement"],
      color: "bg-gradient-to-br from-orange-50 to-yellow-50"
    }
  ];

  const turnkeyServices = [
    {
      icon: Cog,
      title: "Production & Execution",
      description: "Complete project management from planning to delivery"
    },
    {
      icon: Laptop,
      title: "Experiential & Digital",
      description: "Seamless integration of physical and digital experiences"
    },
    {
      icon: ShoppingCart,
      title: "Asset Procurement",
      description: "Sourcing all necessary materials and equipment"
    },
    {
      icon: TrendingUp,
      title: "Marketing Strategy",
      description: "Strategic planning aligned with your objectives"
    },
    {
      icon: Palette,
      title: "Creative Development",
      description: "Innovative concepts that captivate audiences"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Data-driven insights and performance metrics"
    }
  ];

  return (
    <div className="pt-16">
      <SEO
        title="Experiential Marketing Services | Brand Activations & Events - AirFresh"
        description="Professional experiential marketing services including brand activations, corporate events, guerrilla marketing & trade show campaigns nationwide."
        pageType="services"
        canonical="https://airfreshmarketing.com/services"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <article className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <header className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              What <span className="text-yellow-300 italic font-serif">Experiential Marketing Services</span> Do We Offer?
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              We deliver comprehensive experiential marketing campaigns
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
              <p className="text-gray-600">We develop a comprehensive strategy tailored to your objectives and target market.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h4 className="text-lg font-bold mb-2">Execution</h4>
              <p className="text-gray-600">Our experienced team brings your vision to life with flawless execution and attention to detail.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <h4 className="text-lg font-bold mb-2">Analysis</h4>
              <p className="text-gray-600">We provide detailed analytics and insights to measure success and optimize future campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Unforgettable Experiences?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our experiential marketing services can help your brand connect with customers in meaningful ways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/case-studies">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}