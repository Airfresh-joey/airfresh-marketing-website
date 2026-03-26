'use client'

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import SEO from "@/components/SEO";
import {
  Sparkles,
  Users,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Crown,
  Gem,
  Wine,
  Camera
} from "lucide-react";

export default function LuxuryBrandMarketingPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Luxury Brand Experiential Marketing",
    "provider": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    },
    "description": "Elevate your luxury brand with exclusive experiential marketing, high-end brand activations, and VIP event experiences.",
    "areaServed": "United States",
    "serviceType": ["Luxury Brand Marketing", "VIP Events", "High-End Activations", "Premium Brand Experiences"]
  };

  const stats = [
    { value: '200+', label: 'Luxury Activations' },
    { value: '$50M+', label: 'Brand Value Created' },
    { value: '98%', label: 'Client Retention' },
    { value: '15+', label: 'Years Experience' }
  ];

  const services = [
    {
      icon: Crown,
      title: 'VIP Launch Events',
      description: 'Exclusive product launches and unveilings for high-net-worth clientele and media influencers.'
    },
    {
      icon: Gem,
      title: 'Private Shopping Experiences',
      description: 'Curated one-on-one shopping events that create intimate brand connections with luxury consumers.'
    },
    {
      icon: Wine,
      title: 'Lifestyle Brand Partnerships',
      description: 'Strategic collaborations with complementary luxury brands for elevated co-branded experiences.'
    },
    {
      icon: Camera,
      title: 'Editorial & Influencer Events',
      description: 'Media-worthy activations designed to generate premium press coverage and social buzz.'
    }
  ];

  const luxuryBrands = [
    'Fashion Houses', 'Fine Jewelry', 'Premium Automotive', 'Luxury Hospitality',
    'High-End Beauty', 'Fine Spirits', 'Private Aviation', 'Luxury Real Estate'
  ];

  const benefits = [
    'Create exclusive brand experiences for HNWI audiences',
    'Generate premium media coverage and social proof',
    'Build long-term relationships with luxury consumers',
    'Maintain brand prestige with white-glove execution',
    'Connect with influencers and tastemakers',
    'Drive high-value conversions and brand loyalty'
  ];

  return (
    <>
      <SEO
        title="Luxury Brand Experiential Marketing | AirFresh Marketing"
        description="Elevate your luxury brand with exclusive experiential marketing, VIP events, and premium brand activations. White-glove service for discerning brands."
        keywords="luxury brand marketing, high-end brand activations, VIP events, luxury experiential marketing, premium brand experiences, luxury brand agency"
        canonical="https://www.airfreshmarketing.com/services/luxury-brand-marketing"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/luxury-pattern.png')] opacity-5" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-500/10 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-amber-500/20 text-amber-300 border-amber-500/30">
              Luxury Brand Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Experiential Marketing for Luxury Brands
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Create exclusive brand experiences that resonate with discerning consumers. 
              Our white-glove approach ensures every touchpoint reflects your brand's 
              prestige and sophistication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-amber-500 text-black hover:bg-amber-400">
                <Link href="/contact" className="flex items-center gap-2">
                  Schedule a Consultation <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/portfolio">View Our Work</Link>
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
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Where Exclusivity Meets Experience
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Luxury consumers expect more than a transaction - they seek meaningful connections 
            with brands that reflect their values and aspirations. Our experiential marketing 
            approach creates those connections through meticulously crafted moments that 
            elevate your brand above the ordinary.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Brand Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions for brands that demand excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-gray-200">
                <CardContent className="p-8">
                  <service.icon className="w-12 h-12 text-amber-600 mb-4" />
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

      {/* Industries */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-400">
              Deep expertise across the luxury landscape
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {luxuryBrands.map((industry, index) => (
              <Badge 
                key={index} 
                className="px-6 py-3 text-base bg-white/10 text-white border-white/20 hover:bg-white/20"
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The AirFresh Advantage
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                We understand that luxury brands require a different approach. Our team 
                brings discretion, sophistication, and an unwavering commitment to excellence 
                in every activation we execute.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8">
              <div className="text-center mb-8">
                <Award className="w-16 h-16 text-amber-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  White-Glove Service
                </h3>
                <p className="text-gray-600">
                  Dedicated account management, 24/7 availability, and meticulous attention 
                  to every detail ensures flawless execution.
                </p>
              </div>
              <div className="border-t border-gray-300 pt-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-center text-gray-600 italic">
                  "AirFresh understood our brand's DNA from day one. Their execution 
                  exceeded our expectations."
                </p>
                <p className="text-center text-gray-500 mt-2 text-sm">
                  - Marketing Director, Luxury Fashion Brand
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Elevate Your Brand Experience
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can create exclusive moments for your luxury brand
          </p>
          <Button size="lg" className="bg-amber-500 text-black hover:bg-amber-400">
            <Link href="/contact" className="flex items-center gap-2">
              Request a Private Consultation <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
