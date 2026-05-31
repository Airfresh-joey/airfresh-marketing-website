'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

import {
  ShoppingCart,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  MapPin,
  Zap,
  Eye,
  Store,
  Package,
  BarChart3,
  Award
} from "lucide-react";

export default function RetailActivationsPage() {
  const quoteHref = (intent: string) => `/get-quote?source=retail-activations&intent=${intent}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Retail Activations & In-Store Marketing",
    "provider": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    },
    "description": "Transform your retail customer experience with professional in-store activations, product demonstrations, and brand ambassador programs.",
    "areaServed": "United States",
    "serviceType": ["Retail Marketing", "In-Store Activations", "Product Demonstrations", "Customer Experience"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are retail activations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Retail activations are in-store marketing programs where brand representatives engage shoppers at the point of purchase through live product demonstrations, sampling, and interactive experiences. They are designed to drive immediate trial and conversion by placing your brand directly in front of buyers at the moment they are making a purchase decision. AirFresh Marketing deploys trained retail activation staff at major chains including Target, Walmart, Costco, Whole Foods, and 50+ other retailers nationwide.",
        },
      },
      {
        "@type": "Question",
        name: "How much do retail activations cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Retail activation costs vary based on the number of locations, program duration, staffing type, and retailer requirements. In-store demo staff typically range from $28 to $45 per hour, while trained product specialists with technical knowledge can range from $40 to $65 per hour. Multi-location programs and ongoing retail tours receive volume pricing. AirFresh Marketing provides all-inclusive quotes covering staff sourcing, brand-specific training, GPS-verified check-ins, and post-event reporting with no hidden fees.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between a retail activation and a product demo?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A product demo is a component of a retail activation where staff physically demonstrate how a product works to engage shoppers. A retail activation is the broader program that may include product demos, sampling, interactive displays, endcap management, and brand storytelling. AirFresh Marketing designs full retail activation programs that combine demonstrations, sampling, and engagement tactics to maximize shopper interaction and conversion rates.",
        },
      },
      {
        "@type": "Question",
        name: "Which retailers do you work with for in-store activations?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AirFresh Marketing has established relationships and experience activating in major US retailers including Target, Walmart, Costco, Whole Foods Market, Sam's Club, Kroger, Publix, Safeway, HEB, Meijer, Wegmans, and Sprouts. We understand the compliance requirements, vendor policies, and shopper traffic patterns at each retailer, which allows our staff to execute more effectively and generate stronger results.",
        },
      },
      {
        "@type": "Question",
        name: "How far in advance should I book retail activation staff?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend booking retail activation staff 2 to 4 weeks in advance for standard programs to allow adequate time for staff sourcing, brand training, and retailer coordination. For large-scale national retail programs spanning 50+ locations, 4 to 8 weeks lead time ensures optimal staff quality. Rush bookings can be accommodated in as little as 48 to 72 hours in most major markets for urgent activations.",
        },
      },
      {
        "@type": "Question",
        name: "How do you measure retail activation ROI?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AirFresh Marketing measures retail activation ROI through multiple metrics including units sampled or demonstrated, shopper interactions per hour, trial-to-purchase conversion rates, sales lift during activation versus non-activation days, and consumer feedback scores. Our staff submit real-time digital reports with photos and engagement data. Post-program analytics compare activation performance across locations, staff, and time periods so brands can optimize future programs.",
        },
      },
      {
        "@type": "Question",
        name: "Can you run retail activations at multiple locations simultaneously?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. AirFresh Marketing specializes in multi-location retail activation programs, deploying trained staff across 50+ US cities simultaneously through a single account management team. Our centralized technology platform provides real-time visibility into every location, including GPS-verified staff check-ins, digital recaps, and unified reporting dashboards. This eliminates the coordination complexity of managing multiple local vendors.",
        },
      },
    ],
  };

  const stats = [
    { value: '500+', label: 'Retail Activations' },
    { value: '40%', label: 'Avg Sales Lift' },
    { value: '2.5M+', label: 'Customer Interactions' },
    { value: '50+', label: 'Retail Partners' }
  ];

  const services = [
    {
      icon: Store,
      title: 'In-Store Demonstrations',
      description: 'Live product demos that let customers experience your product firsthand, driving immediate purchase decisions.'
    },
    {
      icon: Package,
      title: 'Product Sampling Programs',
      description: 'Strategic sampling campaigns at high-traffic retail locations to build trial and brand awareness.'
    },
    {
      icon: Users,
      title: 'Retail Brand Ambassadors',
      description: 'Trained representatives who engage shoppers, answer questions, and drive conversions at point of sale.'
    },
    {
      icon: Eye,
      title: 'Endcap & Display Activations',
      description: 'Eye-catching displays and interactive experiences that stop shoppers and create memorable brand moments.'
    }
  ];

  const retailers = [
    'Target', 'Walmart', 'Costco', 'Whole Foods', "Sam's Club", 'Kroger', 
    'Publix', 'Safeway', 'HEB', 'Meijer', 'Wegmans', 'Sprouts'
  ];

  const benefits = [
    'Increase point-of-sale conversions by up to 40%',
    'Build direct relationships with retail buyers',
    'Generate real-time customer feedback',
    'Create Instagram-worthy in-store moments',
    'Train retail staff on your products',
    'Measure ROI with detailed reporting'
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
              Retail Marketing Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Retail Activations That Transform Customer Experience
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Drive sales at point of purchase with professional in-store activations, 
              product demonstrations, and retail brand ambassador programs that convert 
              shoppers into buyers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link href={quoteHref('hero-get-started')} className="flex items-center gap-2">
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              In-Store Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Full-service retail activation solutions that drive measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <service.icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Retail Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              We Activate In Top Retailers Nationwide
            </h2>
            <p className="text-gray-600">
              Established relationships with major retail chains across the country
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {retailers.map((retailer, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-4 py-2 text-base text-gray-700 border-gray-300"
              >
                {retailer}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Retail Activations Work
              </h2>
              <p className="text-blue-100 text-lg mb-8">
                In-store marketing puts your brand directly in front of shoppers at the 
                moment of decision. Our activations create memorable experiences that 
                drive immediate purchases and long-term brand loyalty.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-blue-800/50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-cyan-400 mb-2">40%</div>
                <div className="text-blue-200">Average Sales Lift</div>
              </div>
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-cyan-400 mb-2">85%</div>
                <div className="text-blue-200">Trial-to-Purchase Rate</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-cyan-400 mb-2">3x</div>
                <div className="text-blue-200">ROI vs Traditional Ads</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Retail Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's create an in-store activation that drives real results
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
            <Link href={quoteHref('final-consultation')} className="flex items-center gap-2">
              Get a Free Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
