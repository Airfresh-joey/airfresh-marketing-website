'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SEO from "@/components/SEO";
import {
  Handshake,
  Building2,
  Store,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  ArrowRight,
  Globe,
  Zap,
  Shield,
  Target
} from "lucide-react";

export default function Partners() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Partner Program - AirFresh Marketing",
    "description": "Join AirFresh Marketing's partner program. Venue partnerships, agency collaborations, and referral opportunities for experiential marketing.",
    "url": "https://airfreshmarketing.com/partners"
  };

  const partnerTypes = [
    {
      icon: Store,
      title: "Venue Partners",
      description: "Partner with us to host brand activations at your venue. Earn revenue while providing unique experiences for your guests.",
      benefits: [
        "Revenue share on events",
        "Brand exposure",
        "Turnkey event management",
        "Insurance coverage"
      ],
      href: "/partners/venues",
      color: "bg-blue-50 text-blue-600",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: Building2,
      title: "Agency Partners",
      description: "Expand your service offerings by partnering with AirFresh. We provide white-label experiential marketing capabilities.",
      benefits: [
        "White-label services",
        "Commission structure",
        "Nationwide execution",
        "Dedicated support"
      ],
      href: "/partners/agencies",
      color: "bg-purple-50 text-purple-600",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: Users,
      title: "Referral Partners",
      description: "Know a brand that needs experiential marketing? Refer them to us and earn commission on closed deals.",
      benefits: [
        "10% referral commission",
        "No minimum commitment",
        "Partner portal access",
        "Marketing materials"
      ],
      href: "/contact",
      color: "bg-green-50 text-green-600",
      gradient: "from-green-600 to-teal-600"
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Nationwide Network",
      description: "Access to brand ambassadors and event staff in 50+ cities across the country."
    },
    {
      icon: Award,
      title: "20+ Years Experience",
      description: "Leverage our decades of experiential marketing expertise for your clients."
    },
    {
      icon: Zap,
      title: "Fast Execution",
      description: "We can deploy teams and activate campaigns in as little as 48 hours."
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete liability coverage and worker protections on every activation."
    },
    {
      icon: Target,
      title: "Measurable Results",
      description: "Real-time reporting and analytics to prove ROI for every campaign."
    },
    {
      icon: TrendingUp,
      title: "Growth Support",
      description: "Dedicated partner success team to help grow your business together."
    }
  ];

  const stats = [
    { number: "200+", label: "Active Partners" },
    { number: "50+", label: "Cities Covered" },
    { number: "$5M+", label: "Partner Revenue" },
    { number: "95%", label: "Partner Retention" }
  ];

  const testimonials = [
    {
      quote: "Partnering with AirFresh has allowed us to offer experiential services without building an in-house team. Our clients love the results.",
      author: "Sarah Mitchell",
      role: "CEO, Momentum Agency",
      avatar: "SM"
    },
    {
      quote: "The revenue share has been incredible. We host 3-4 brand activations per month and it's become a significant income stream.",
      author: "James Rodriguez",
      role: "GM, The Venue Co.",
      avatar: "JR"
    }
  ];

  return (
    <div className="pt-16">
      <SEO
        title="Partner Program | Venue & Agency Partnerships - AirFresh Marketing"
        description="Join AirFresh Marketing's partner program. Venue partnerships, agency collaborations, and referral opportunities for experiential marketing."
        pageType="website"
        canonical="https://airfreshmarketing.com/partners"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-20 -left-40 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-cyan-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-primary/20">
            <Handshake className="w-4 h-4" />
            Partner Program
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Grow Together with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-primary">
              AirFresh
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Whether you're a venue looking to host brand activations, an agency seeking execution 
            capabilities, or simply want to refer clients — we have a partnership for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Become a Partner</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
              <Link href="#partner-types">Explore Options</Link>
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
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section id="partner-types" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
              Partnership Options
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Choose Your Partnership
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer flexible partnership models designed to create mutual value and drive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerTypes.map((type, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                <CardContent className="p-0">
                  <div className={`w-16 h-16 rounded-2xl ${type.color} flex items-center justify-center mb-6`}>
                    <type.icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-gray-900">{type.title}</h4>
                  <p className="text-gray-600 mb-6">{type.description}</p>
                  <ul className="space-y-3 mb-8">
                    {type.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className={`w-full bg-gradient-to-r ${type.gradient} hover:opacity-90`}>
                    <Link href={type.href}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
              Why Partner
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What You Get
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              When you partner with AirFresh, you gain access to our full ecosystem of capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h4>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
              Partner Stories
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              What Our Partners Say
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white">
                <CardContent className="p-0">
                  <blockquote className="text-gray-600 text-lg italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
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
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
              Process
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              How to Get Started
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: "1", title: "Apply", desc: "Fill out our partner application form" },
              { num: "2", title: "Connect", desc: "Meet with our partnerships team" },
              { num: "3", title: "Onboard", desc: "Complete partner onboarding process" },
              { num: "4", title: "Launch", desc: "Start collaborating and earning" }
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-gray-200" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-white text-2xl font-bold mb-4 shadow-lg">
                  {step.num}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Partner?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our growing network of partners and start creating value together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Apply Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
