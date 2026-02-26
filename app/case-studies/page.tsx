'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { portfolioCaseStudies } from "@/client/src/data/portfolioCaseStudies";
import {
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  Sparkles,
  Target,
  Filter,
  Building,
  Eye
} from "lucide-react";

// Get unique categories from case studies
const getCategories = (studies: typeof portfolioCaseStudies) => {
  const categoriesSet = new Set(["All"]);
  studies.forEach(study => {
    if (study.category) {
      categoriesSet.add(study.category);
    }
  });
  return Array.from(categoriesSet);
};

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const categories = getCategories(portfolioCaseStudies);

  const filteredStudies = selectedCategory === "All"
    ? portfolioCaseStudies
    : portfolioCaseStudies.filter(study => study.category === selectedCategory);

  const featuredStudies = portfolioCaseStudies.filter(s => s.featured).slice(0, 3);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO
        title="Case Studies | Experiential Marketing Success Stories - AirFresh"
        description="Explore our case studies showcasing successful brand activations, experiential marketing campaigns, and event productions. Real results from Fortune 500 brands."
        pageType="portfolio"
        canonical="https://airfreshmarketing.com/case-studies"
      />

      {/* Preconnect to Vimeo for faster video load */}
      <link rel="preconnect" href="https://player.vimeo.com" />
      <link rel="preconnect" href="https://i.vimeocdn.com" />
      <link rel="preconnect" href="https://f.vimeocdn.com" />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
          <div className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.78vh] h-[56.25vw] max-w-none -translate-x-1/2 -translate-y-1/2">
            <iframe
              src="https://player.vimeo.com/video/395306497?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&muted=1&loop=1&playsinline=1&dnt=1#t=20s"
              className="absolute top-0 left-0 w-full h-full object-cover"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              loading="eager"
              style={{ pointerEvents: 'none' }}
              title="AirFresh Marketing Case Studies Video Background"
            />
          </div>
        </div>

        {/* Overlay Gradients */}
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)'
          }} />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.5) 100%)'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-white/10 backdrop-blur-sm text-white border-0">
            <Award className="w-4 h-4 mr-2" />
            Real Results, Real Impact
          </Badge>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Case{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Studies
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Dive deep into our most impactful campaigns. See how we helped brands 
            create memorable experiences and achieve measurable results.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            {[
              { icon: TrendingUp, value: "4.2x", label: "Average ROI" },
              { icon: Users, value: "5M+", label: "People Reached" },
              { icon: Building, value: "300+", label: "Brands Served" },
              { icon: Target, value: "98%", label: "Client Satisfaction" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <stat.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cyan-100 text-cyan-800 border-0">
              <Sparkles className="w-4 h-4 mr-1" />
              Featured Work
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Spotlight Campaigns
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredStudies.map((study) => (
              <Link key={study.id} href={`/case-studies/${study.id}`}>
                <Card className="group h-full overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    {study.heroImage ? (
                      <Image
                        src={study.heroImage}
                        alt={study.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-cyan-500 text-white border-0">
                      Featured
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3 text-xs">
                      {study.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors">
                      {study.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {study.description}
                    </p>
                    <div className="flex items-center text-cyan-600 font-medium text-sm">
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-cyan-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100 border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Case Studies
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse our complete collection of brand activations and experiential marketing campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <Link key={study.id} href={`/case-studies/${study.id}`}>
                <Card 
                  className="group h-full overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer bg-white"
                  onMouseEnter={() => setHoveredCard(study.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative h-48 overflow-hidden">
                    {study.heroImage ? (
                      <Image
                        src={study.heroImage}
                        alt={study.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: study.heroPosition || 'center' }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                        <Eye className="w-12 h-12 text-gray-400" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs">
                        {study.category}
                      </Badge>
                      {study.date && (
                        <span className="text-xs text-gray-400 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {study.date}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors line-clamp-2">
                      {study.name}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                      {study.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {study.services.slice(0, 2).map((service, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {service}
                        </span>
                      ))}
                      {study.services.length > 2 && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          +{study.services.length - 2}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss how we can help your brand achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/portfolio">
                View Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
