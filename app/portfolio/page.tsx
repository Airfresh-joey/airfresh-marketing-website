'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { portfolioCaseStudies } from "@/server/portfolioCaseStudies";
import {
  ChevronRight,
  MapPin,
  Calendar,
  Users,
  TrendingUp,
  Award,
  Eye,
  Play,
  ArrowUpRight,
  Sparkles,
  Target,
  Zap,
  Filter
} from "lucide-react";

// Get unique categories from case studies
const getCategories = (studies: any[]) => {
  const categoriesSet = new Set(["All"]);
  studies.forEach(study => {
    if (study.category) {
      categoriesSet.add(study.category);
    }
  });
  return Array.from(categoriesSet);
};

const quoteHref = (intent: string) => `/get-quote?source=portfolio&intent=${intent}`;

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Use static case studies data
  const caseStudiesData = portfolioCaseStudies;
  const categories = getCategories(caseStudiesData);

  const filteredStudies = selectedCategory === "All"
    ? caseStudiesData
    : caseStudiesData.filter(study => study.category === selectedCategory);

  const featuredStudy = caseStudiesData.find(s => s.featured);

  const faqs = [
    { question: "Can I see examples of AirFresh Marketing's work?", answer: "Yes, our portfolio showcases 300+ successful campaigns across industries including tech, CPG, automotive, sports, and entertainment. Each case study includes campaign goals, execution details, and measurable results. Browse our portfolio to see brands like Netflix, Microsoft, and Formula 1." },
    { question: "What results has AirFresh achieved for clients?", answer: "AirFresh Marketing delivers an average 4.2x ROI across campaigns. We've reached over 5 million consumers, served 300+ brands, and maintain a 98% client satisfaction rate. Each case study in our portfolio includes specific metrics and outcomes." },
    { question: "What types of campaigns does AirFresh execute?", answer: "We execute brand activations, product sampling, corporate events, trade show marketing, street teams, guerrilla marketing, pop-up experiences, and more. Our portfolio includes examples across all categories so you can see our capabilities in action." },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "name": "AirFresh Marketing Portfolio",
        "description": "Case studies and campaign results from AirFresh Marketing's experiential marketing campaigns.",
        "url": "https://www.airfreshmarketing.com/portfolio",
        "publisher": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "url": "https://www.airfreshmarketing.com"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Portfolio", "item": "https://www.airfreshmarketing.com/portfolio" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Preconnect to Vimeo for faster video load */}
      <link rel="preconnect" href="https://player.vimeo.com" />
      <link rel="preconnect" href="https://i.vimeocdn.com" />
      <link rel="preconnect" href="https://f.vimeocdn.com" />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
          <div className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.78vh] h-[56.25vw] max-w-none -translate-x-1/2 -translate-y-1/2">
            <iframe
              src="https://player.vimeo.com/video/395306497?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&muted=1&loop=1&playsinline=1&dnt=1#t=12s"
              className="absolute top-0 left-0 w-full h-full object-cover"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              loading="eager"
              onLoad={() => setVideoLoaded(true)}
              style={{ pointerEvents: 'none' }}
              title="AirFresh Marketing Portfolio Video Background"
            />
          </div>

          {/* Loading overlay with gradient background */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 transition-opacity duration-1000"
            style={{ opacity: videoLoaded ? 0 : 1 }}
          />
        </div>

        {/* Overlay Gradients for text readability */}
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
          <div className="animate-fade-in">
            <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-white/10 backdrop-blur-sm text-white border-0">
              <Sparkles className="w-4 h-4 mr-1" />
              300+ Successful Campaigns
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Experiential Marketing
              <br />
              <span className="relative bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Portfolio
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400" />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Experiential marketing campaigns that transform brands through unforgettable experiences.
              Every campaign tells a story of innovation, engagement, and measurable success.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              {[
                { icon: TrendingUp, value: "4.2x", label: "Average ROI" },
                { icon: Users, value: "5M+", label: "People Reached" },
                { icon: Award, value: "300+", label: "Brands Served" },
                { icon: Target, value: "98%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-white/70 rotate-90" />
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredStudy && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <Badge className="mb-4 bg-gradient-to-r from-primary to-purple-600 text-white">
              <Award className="w-4 h-4 mr-1" />
              Featured Case Study
            </Badge>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">{featuredStudy.name}</h2>
                <p className="text-xl text-gray-600 mb-6">{featuredStudy.description}</p>

                {/* Stats Grid */}
                {featuredStudy.stats && (
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {Object.entries(featuredStudy.stats).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 rounded-lg p-4">
                        <div className="text-2xl font-bold text-primary">{value as string}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredStudy.services.map((service) => (
                    <Badge key={service} variant="outline">
                      {service}
                    </Badge>
                  ))}
                </div>

                <Link href={`/case-studies/${featuredStudy.id}`}>
                  <Button size="lg" className="group">
                    View Full Case Study
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <Image
                  src={featuredStudy.heroImage || '/images/placeholder.jpg'}
                  alt={featuredStudy.name}
                  width={800}
                  height={500}
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAEBQYH/8QAIRAAAQMEAgMAAAAAAAAAAAAAAQIDBAAFERIhMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Aj9I4jb6p0q3tMYW4mYPqMhCFn1SslRJO5JJPk5oNlqbTLdNRHYhxWI7aAhtplsISkeAABgUUVn//2Q=="
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="text-white">
                    <p className="font-semibold">{featuredStudy.tagline}</p>
                    <p className="text-sm opacity-90">{featuredStudy.markets?.join(" • ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter Tabs */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <span className="text-sm font-medium text-gray-600">Filter by:</span>
            </div>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="bg-gray-100">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    {category}
                    {category === "All" && (
                      <span className="ml-1 text-xs">
                        ({caseStudiesData.length})
                      </span>
                    )}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-2xl h-64 mb-4" />
                <div className="bg-gray-200 rounded h-4 w-3/4 mb-2" />
                <div className="bg-gray-200 rounded h-4 w-1/2" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study, index) => (
              <div
                key={study.id}
                onMouseEnter={() => setHoveredCard(study.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
              >
                  <Link href={`/case-studies/${study.id}`}>
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <Image
                          src={study.heroImage || '/images/placeholder.jpg'}
                          alt={study.name}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAwDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAEBQYH/8QAIRAAAQMEAgMAAAAAAAAAAAAAAQIDBAAFERIhMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Aj9I4jb6p0q3tMYW4mYPqMhCFn1SslRJO5JJPk5oNlqbTLdNRHYhxWI7aAhtplsISkeAABgUUVn//2Q=="
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                        {/* Category Badge */}
                        <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">
                          {study.category}
                        </Badge>

                        {/* Play Button for Video */}
                        {study.featured && (
                          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="bg-white/90 rounded-full p-4">
                              <Play className="w-8 h-8 text-primary" />
                            </div>
                          </div>
                        )}

                        {/* Stats Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                          <div>
                            <h3 className="text-white font-bold text-xl mb-1">{study.name}</h3>
                            <p className="text-white/90 text-sm">{study.tagline}</p>
                          </div>
                          {study.markets && study.markets.length > 0 && (
                            <div className="text-right">
                              <div className="flex items-center text-white/90 text-sm">
                                <MapPin className="w-4 h-4 mr-1" />
                                {study.markets[0]}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <CardContent className="p-6">
                        {/* Description */}
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {study.description}
                        </p>

                        {/* Key Stats */}
                        {study.stats && (
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            {Object.entries(study.stats).slice(0, 2).map(([key, value]) => (
                              <div key={key}>
                                <div className="text-lg font-bold text-primary">{value as string}</div>
                                <div className="text-xs text-gray-500 capitalize">{key}</div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Services */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {study.services.slice(0, 2).map((service) => (
                            <span key={service} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              {service}
                            </span>
                          ))}
                          {study.services.length > 2 && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                              +{study.services.length - 2} more
                            </span>
                          )}
                        </div>

                        {/* View More Link */}
                        <div className="flex items-center text-primary font-semibold group/link">
                          <span className="mr-2">View Case Study</span>
                          <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          )}
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Portfolio FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's collaborate to bring your brand vision to life with experiential marketing that delivers real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href={quoteHref('final-start-project')}>
                  Start Your Project
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Eye className="w-4 h-4 mr-2" />
                Download Portfolio PDF
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}