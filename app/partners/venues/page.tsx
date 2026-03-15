'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import SEO from "@/components/SEO";
import {
  Store,
  DollarSign,
  Calendar,
  Shield,
  Users,
  CheckCircle,
  ArrowRight,
  MapPin,
  Star,
  Zap,
  Camera,
  Wine,
  Music,
  Utensils
} from "lucide-react";

export default function VenuePartnerships() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Venue Partnerships - AirFresh Marketing",
    "description": "Partner your venue with AirFresh Marketing for brand activations. Earn revenue hosting experiential marketing events at your location.",
    "url": "https://airfreshmarketing.com/partners/venues"
  };

  const venueTypes = [
    { icon: Wine, name: "Bars & Nightclubs", color: "bg-purple-50 text-purple-600" },
    { icon: Utensils, name: "Restaurants", color: "bg-orange-50 text-orange-600" },
    { icon: Music, name: "Music Venues", color: "bg-pink-50 text-pink-600" },
    { icon: Store, name: "Retail Spaces", color: "bg-blue-50 text-blue-600" },
    { icon: Calendar, name: "Event Spaces", color: "bg-green-50 text-green-600" },
    { icon: Camera, name: "Studios & Galleries", color: "bg-amber-50 text-amber-600" }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Revenue Share",
      description: "Earn a percentage of every brand activation hosted at your venue. Typical events range from $2,000-$15,000."
    },
    {
      icon: Users,
      title: "New Foot Traffic",
      description: "Brand activations bring new customers to your venue who become regulars after discovering your space."
    },
    {
      icon: Shield,
      title: "Full Insurance",
      description: "We carry comprehensive liability coverage for all events. Your venue is fully protected."
    },
    {
      icon: Zap,
      title: "Turnkey Management",
      description: "Our team handles everything — setup, staffing, breakdown. You just provide the space."
    },
    {
      icon: Star,
      title: "Premium Brands",
      description: "Associate your venue with Fortune 500 brands and premium products through our activations."
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "We work around your schedule. Host events during slow periods to maximize utilization."
    }
  ];

  const howItWorks = [
    {
      num: "1",
      title: "Submit Your Venue",
      description: "Tell us about your space — capacity, location, amenities, and availability windows."
    },
    {
      num: "2",
      title: "Get Matched",
      description: "Our team matches your venue with brands looking for spaces that fit their activation needs."
    },
    {
      num: "3",
      title: "Host Activations",
      description: "We handle all logistics. You approve dates, and we execute flawless brand experiences."
    },
    {
      num: "4",
      title: "Earn Revenue",
      description: "Receive payment within 30 days of each successful activation. Easy reporting dashboard."
    }
  ];

  const stats = [
    { number: "150+", label: "Partner Venues" },
    { number: "$2M+", label: "Venue Payouts" },
    { number: "500+", label: "Events Hosted" },
    { number: "4.8★", label: "Partner Rating" }
  ];

  const testimonials = [
    {
      quote: "AirFresh has brought amazing brands to our bar. The extra revenue during slow weeknights has been a game-changer for us.",
      author: "Mike Chen",
      role: "Owner, The Copper Room (Denver)",
      events: "24 events hosted"
    },
    {
      quote: "They handle everything so professionally. My staff just shows up, and the AirFresh team runs the entire activation.",
      author: "Lisa Martinez",
      role: "GM, Skyline Event Space (LA)",
      events: "45 events hosted"
    }
  ];

  return (
    <div className="pt-16">
      <SEO
        title="Venue Partnerships | Host Brand Activations - AirFresh Marketing"
        description="Partner your venue with AirFresh Marketing for brand activations. Earn revenue hosting experiential marketing events at your location."
        pageType="website"
        canonical="https://airfreshmarketing.com/partners/venues"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-cyan-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
                <Store className="w-4 h-4" />
                Venue Partnerships
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Turn Your Venue Into a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Revenue Generator
                </span>
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Host brand activations at your venue and earn revenue while bringing exciting 
                experiences to your customers. We handle everything.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  <Link href="/contact">Submit Your Venue</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                  <Link href="#how-it-works">How It Works</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Venue Types We Partner With</h3>
                <div className="grid grid-cols-2 gap-4">
                  {venueTypes.map((type, index) => (
                    <div key={index} className="flex items-center gap-3 bg-white/10 rounded-xl p-3">
                      <div className={`w-10 h-10 rounded-lg ${type.color} flex items-center justify-center`}>
                        <type.icon className="w-5 h-5" />
                      </div>
                      <span className="text-white font-medium text-sm">{type.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
              Why Partner
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Benefits for Venue Partners
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our network of venue partners and unlock new revenue streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-900">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
              Process
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              How Venue Partnerships Work
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {howItWorks.map((step, i) => (
              <div key={i} className="text-center relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-gray-200" />
                )}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-600 text-white text-2xl font-bold mb-4 shadow-lg">
                  {step.num}
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
              Success Stories
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Hear from Our Venue Partners
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-white">
                <CardContent className="p-0">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-600 text-lg italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-500">{testimonial.role}</div>
                    </div>
                    <div className="text-sm text-blue-600 font-medium bg-blue-50 px-3 py-1 rounded-full">
                      {testimonial.events}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-4">
                Requirements
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                What We Look For
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                We partner with venues that can provide great experiences for brand activations.
              </p>
              <ul className="space-y-4">
                {[
                  "Minimum 50 person capacity",
                  "Located in a major metro area",
                  "Flexible scheduling availability",
                  "Valid business license and insurance",
                  "Professional staff and management"
                ].map((req, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Ready to Get Started?</h4>
              <p className="text-blue-100 mb-6">
                Submit your venue information and our partnerships team will be in touch within 48 hours.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-300" />
                  No upfront costs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-300" />
                  No minimum commitment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-cyan-300" />
                  Cancel anytime
                </li>
              </ul>
              <Button asChild size="lg" className="w-full bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/contact">
                  Submit Your Venue
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Monetize Your Space</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 150+ venues earning extra revenue through brand activations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Become a Venue Partner</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Link href="/partners">Back to Partners</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
