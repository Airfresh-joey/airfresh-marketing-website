'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
  Building2,
  Handshake,
  Globe,
  Users,
  CheckCircle,
  ArrowRight,
  Briefcase,
  TrendingUp,
  Shield,
  Clock,
  Award,
  Zap,
  Target,
  FileText
} from "lucide-react";

export default function AgencyPartnerships() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Agency Partnerships - AirFresh Marketing",
    "description": "Partner with AirFresh Marketing to expand your agency's experiential marketing capabilities. White-label services, nationwide execution, and dedicated support.",
    "url": "https://www.airfreshmarketing.com/partners/agencies"
  };

  const partnershipTiers = [
    {
      name: "Referral Partner",
      description: "Refer clients and earn commission on closed deals",
      features: [
        "10% commission on first project",
        "5% recurring on additional projects",
        "No minimum commitment",
        "Partner portal access"
      ],
      ideal: "Best for agencies with occasional referrals",
      color: "border-gray-200",
      button: "secondary"
    },
    {
      name: "Preferred Partner",
      description: "White-label our services for your clients",
      features: [
        "White-label capabilities",
        "15% partner discount",
        "Co-branded presentations",
        "Priority project scheduling",
        "Dedicated partner manager"
      ],
      ideal: "Best for agencies needing execution capabilities",
      color: "border-purple-300 shadow-lg",
      highlight: true,
      button: "default"
    },
    {
      name: "Strategic Partner",
      description: "Deep integration with exclusive benefits",
      features: [
        "Custom pricing structure",
        "First access to new markets",
        "Joint business development",
        "Executive relationship",
        "Quarterly business reviews",
        "Co-marketing opportunities"
      ],
      ideal: "Best for agencies with high volume needs",
      color: "border-gray-200",
      button: "secondary"
    }
  ];

  const capabilities = [
    {
      icon: Users,
      title: "Brand Ambassador Network",
      description: "Access to 5,000+ trained brand ambassadors in 50+ cities nationwide."
    },
    {
      icon: Globe,
      title: "Nationwide Execution",
      description: "Deploy activations anywhere in the US with consistent quality and professionalism."
    },
    {
      icon: Clock,
      title: "Rapid Deployment",
      description: "Launch campaigns in as little as 48-72 hours with our agile operations team."
    },
    {
      icon: Shield,
      title: "Full Compliance",
      description: "Complete insurance, W-2 staff, and compliance with all local regulations."
    },
    {
      icon: Target,
      title: "Real-Time Reporting",
      description: "Live dashboards and comprehensive post-event analytics for your clients."
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee on all activations. We make it right."
    }
  ];

  const howItWorks = [
    {
      num: "1",
      title: "Partnership Application",
      description: "Complete our partner application and tell us about your agency and clients."
    },
    {
      num: "2",
      title: "Onboarding Call",
      description: "Meet with our partnerships team to discuss your needs and determine the right tier."
    },
    {
      num: "3",
      title: "Integration Setup",
      description: "Get access to partner portal, white-label materials, and dedicated support."
    },
    {
      num: "4",
      title: "Start Collaborating",
      description: "Begin pitching experiential services to your clients with our backing."
    }
  ];

  const stats = [
    { number: "75+", label: "Agency Partners" },
    { number: "50+", label: "Cities Covered" },
    { number: "$10M+", label: "Partner Revenue" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  const useCases = [
    {
      icon: Briefcase,
      title: "PR & Communications Agencies",
      description: "Add experiential activations to your PR campaigns and product launches."
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Agencies",
      description: "Bridge digital campaigns with real-world brand experiences."
    },
    {
      icon: Target,
      title: "Advertising Agencies",
      description: "Execute creative concepts with professional field marketing teams."
    },
    {
      icon: FileText,
      title: "Media Buying Agencies",
      description: "Offer experiential as an additional channel in media plans."
    }
  ];

  return (
    <div className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-pink-500/20 blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-purple-500/20 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 text-pink-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <Building2 className="w-4 h-4" />
            Agency Partnerships
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Expand Your Agency's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Capabilities
            </span>
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Partner with AirFresh to offer your clients experiential marketing services. 
            We provide white-label execution while you maintain the client relationship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
              <Link href="/contact">Become a Partner</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
              <Link href="#tiers">View Partnership Tiers</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-4">
              Ideal Partners
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Who This Partnership Is For
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We partner with agencies of all types who want to add experiential capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-0">
                  <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-900">{useCase.title}</h4>
                  <p className="text-gray-600 text-sm">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Tiers */}
      <section id="tiers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-4">
              Partnership Tiers
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Choose Your Partnership Level
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Flexible partnership options designed to match your agency's needs and volume.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipTiers.map((tier, index) => (
              <Card key={index} className={`p-8 border-2 ${tier.color} relative`}>
                {tier.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-0">
                  <h4 className="text-2xl font-bold mb-2 text-gray-900">{tier.name}</h4>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-500 italic mb-6">{tier.ideal}</p>
                  <Button 
                    asChild 
                    className={`w-full ${tier.highlight ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                    variant={tier.button as "default" | "secondary"}
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-4">
              What You Get
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Our Capabilities Become Yours
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When you partner with AirFresh, you gain access to our full execution infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <capability.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-gray-900">{capability.title}</h4>
                      <p className="text-gray-600 text-sm">{capability.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-4">
              Process
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              How to Get Started
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <div key={i} className="text-center relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-gray-200" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-600 text-white text-2xl font-bold mb-4 shadow-lg">
                  {step.num}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* White Label Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-4">
                White-Label Services
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Your Brand, Our Execution
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                We work completely behind the scenes. Your clients see your agency's branding 
                on all deliverables while we handle the heavy lifting.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom-branded reports and presentations",
                  "Staff wear your agency's apparel",
                  "Direct communication through your team",
                  "Your agency owns the client relationship",
                  "We sign NDAs and non-competes"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
              <Handshake className="w-12 h-12 text-purple-200 mb-6" />
              <h4 className="text-2xl font-bold mb-4">Partnership Inquiry</h4>
              <p className="text-purple-100 mb-6">
                Schedule a call with our partnerships team to discuss how we can help 
                expand your agency's capabilities.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-300" />
                  30-minute discovery call
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-300" />
                  Custom proposal within 48 hours
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-pink-300" />
                  No commitment required
                </li>
              </ul>
              <Button asChild size="lg" className="w-full bg-white text-purple-600 hover:bg-purple-50">
                <Link href="/contact">
                  Schedule a Call
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expand Your Service Offering</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 75+ agency partners who trust AirFresh for their experiential marketing execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Apply for Partnership</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
              <Link href="/partners">Back to Partners</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
