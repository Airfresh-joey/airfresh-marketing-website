'use client'

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Link from "next/link";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { portfolioCaseStudies } from "@/client/src/data/portfolioCaseStudies";
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

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  // Use static case studies data
  const caseStudiesData = portfolioCaseStudies;
  const categories = getCategories(caseStudiesData);

  const filteredStudies = selectedCategory === "All"
    ? caseStudiesData
    : caseStudiesData.filter(study => study.category === selectedCategory);

  const featuredStudy = caseStudiesData.find(s => s.featured);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO
        title="Portfolio | Award-Winning Experiential Marketing Case Studies - AirFresh"
        description="Explore our portfolio of successful brand activations, experiential marketing campaigns, and event productions. Real results from Fortune 500 brands."
        pageType="portfolio"
        canonical="https://airfreshmarketing.com/portfolio"
      />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        {!shouldReduceMotion && (
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
            <div className="absolute top-1/2 left-1/2 min-w-full min-h-full w-[177.78vh] h-[56.25vw] max-w-none -translate-x-1/2 -translate-y-1/2">
              <iframe
                src="https://player.vimeo.com/video/395306497?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&muted=1&loop=1#t=12s"
                className="absolute top-0 left-0 w-full h-full object-cover"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                loading="lazy"
                onLoad={() => setVideoLoaded(true)}
                style={{ pointerEvents: 'none' }}
                title="AirFresh Marketing Portfolio Video Background"
              />
            </div>

            {/* Loading overlay with gradient background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900"
              initial={{ opacity: 1 }}
              animate={{ opacity: videoLoaded ? 0 : 1 }}
              transition={{ duration: 1 }}
            />
          </div>
        )}

        {/* Fallback - Static gradient background for reduced motion */}
        {shouldReduceMotion && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" />
        )}

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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-white/10 backdrop-blur-sm text-white border-0">
              <Sparkles className="w-4 h-4 mr-1" />
              300+ Successful Campaigns
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
              Our Portfolio of
              <br />
              <span className="relative bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Excellence
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Transforming brands through unforgettable experiences.
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronRight className="w-6 h-6 text-white/70 rotate-90" />
        </motion.div>
      </section>

      {/* Featured Case Study */}
      {featuredStudy && (
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
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
                <img
                  src={featuredStudy.heroImage}
                  alt={featuredStudy.name}
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="text-white">
                    <p className="font-semibold">{featuredStudy.tagline}</p>
                    <p className="text-sm opacity-90">{featuredStudy.markets?.join(" • ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="bg-gray-200 rounded-2xl h-64 mb-4" />
                  <div className="bg-gray-200 rounded h-4 w-3/4 mb-2" />
                  <div className="bg-gray-200 rounded h-4 w-1/2" />
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredStudies.map((study, index) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  onHoverStart={() => setHoveredCard(study.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group cursor-pointer"
                >
                  <Link href={`/case-studies/${study.id}`}>
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <img
                          src={study.heroImage}
                          alt={study.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
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
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h2 className="text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's collaborate to bring your brand vision to life with experiential marketing that delivers real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="group">
                  Start Your Project
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Eye className="w-4 h-4 mr-2" />
                Download Portfolio PDF
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}