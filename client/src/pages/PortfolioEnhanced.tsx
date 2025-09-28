import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useQuery } from "@tanstack/react-query";
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
  Filter,
  ExternalLink,
  Building,
  Briefcase,
  Phone
} from "lucide-react";

interface CaseStudy {
  id: string;
  name: string;
  tagline: string;
  description: string;
  industry?: string;
  services: string[];
  markets?: string[];
  date?: string;
  googleDriveUrl?: string;
  stats: Record<string, string>;
  category: string;
  featured?: boolean;
  heroImage?: string;
  images?: string[];
}

// Generate placeholder images based on industry/category
const getPlaceholderImage = (study: CaseStudy, index: number = 0): string => {
  const industryImages: Record<string, string[]> = {
    "Beverage": [
      "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1558642891-54be180ea339?w=600&h=400&fit=crop"
    ],
    "Beauty/Cosmetics": [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=400&fit=crop"
    ],
    "Entertainment": [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop"
    ],
    "Technology": [
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop"
    ],
    "Sports": [
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518611507436-f9221403cca2?w=600&h=400&fit=crop"
    ],
    "Restaurant": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop"
    ],
    "Healthcare": [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&h=400&fit=crop"
    ],
    "default": [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
    ]
  };

  const categoryImages: Record<string, string[]> = {
    "Sampling": [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    ],
    "Events": [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop"
    ],
    "Experiential": [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop"
    ],
    "Street Teams": [
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop"
    ],
    "Trade Shows": [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop"
    ]
  };

  // Try to find image by industry first
  let images = industryImages[study.industry || ""] ||
               categoryImages[study.category] ||
               industryImages["default"];

  return images[Math.min(index, images.length - 1)];
};

// Extract unique categories from the data
const getCategories = (caseStudies: CaseStudy[]): string[] => {
  const categoriesSet = new Set(["All"]);
  caseStudies.forEach(study => {
    if (study.category) {
      categoriesSet.add(study.category);
    }
  });
  return Array.from(categoriesSet);
};

export default function PortfolioEnhanced() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Fetch case studies from API
  const { data: caseStudiesResponse, isLoading, error } = useQuery({
    queryKey: ["portfolio-case-studies"],
    queryFn: async () => {
      const response = await fetch("/api/portfolio-case-studies");
      if (!response.ok) {
        throw new Error("Failed to fetch case studies");
      }
      return response.json();
    }
  });

  const caseStudies = caseStudiesResponse?.data || [];
  const categories = getCategories(caseStudies);

  const filteredStudies = selectedCategory === "All"
    ? caseStudies
    : caseStudies.filter((study: CaseStudy) => study.category === selectedCategory);

  const featuredStudies = caseStudies.filter((s: CaseStudy) => s.featured);
  const featuredStudy = featuredStudies[0];

  // Stats from all case studies
  const totalStats = {
    campaigns: caseStudies.length,
    markets: new Set(caseStudies.flatMap((s: CaseStudy) => s.markets || [])).size,
    industries: new Set(caseStudies.map((s: CaseStudy) => s.industry).filter(Boolean)).size,
    featured: featuredStudies.length
  };

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Portfolio</h2>
          <p className="text-gray-600">Unable to load case studies. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO
        title="Portfolio | 45+ Award-Winning Experiential Marketing Case Studies"
        description="Explore our portfolio of successful brand activations for Netflix, MrBeast, Microsoft, MAC Cosmetics, Starbucks, and more. Real results from Fortune 500 brands."
        canonical="https://airfreshmarketing.com/portfolio"
      />

      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-primary/10 text-primary border-0">
              <Sparkles className="w-4 h-4 mr-1" />
              {totalStats.campaigns}+ Successful Campaigns
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary to-purple-600 bg-clip-text text-transparent">
              Our Portfolio of
              <br />
              <span className="relative">
                Excellence
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-purple-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From MrBeast to Microsoft, Netflix to MAC Cosmetics - transforming brands through
              unforgettable experiences across {totalStats.markets}+ markets nationwide.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              {[
                { icon: TrendingUp, value: `${totalStats.campaigns}+`, label: "Case Studies" },
                { icon: MapPin, value: `${totalStats.markets}+`, label: "Markets Served" },
                { icon: Building, value: `${totalStats.industries}+`, label: "Industries" },
                { icon: Award, value: `${totalStats.featured}`, label: "Featured Campaigns" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
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
          <ChevronRight className="w-6 h-6 text-gray-400 rotate-90" />
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
                <p className="text-xl text-primary font-semibold mb-2">{featuredStudy.tagline}</p>
                <p className="text-lg text-gray-600 mb-6">{featuredStudy.description}</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {Object.entries(featuredStudy.stats).slice(0, 4).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">{key.replace(/_/g, ' ')}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredStudy.services.map((service: string) => (
                    <Badge key={service} variant="outline">
                      {service}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  {featuredStudy.googleDriveUrl && (
                    <a
                      href={featuredStudy.googleDriveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex"
                    >
                      <Button size="lg" className="group">
                        View Assets
                        <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  )}
                </div>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <img
                  src={featuredStudy.heroImage || getPlaceholderImage(featuredStudy)}
                  alt={featuredStudy.name}
                  className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                  <div className="text-white">
                    <p className="font-semibold">{featuredStudy.tagline}</p>
                    {featuredStudy.markets && (
                      <p className="text-sm opacity-90">{featuredStudy.markets.join(" • ")}</p>
                    )}
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

            <div className="overflow-x-auto">
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
                <TabsList className="bg-gray-100">
                  {categories.map((category) => {
                    const count = category === "All"
                      ? caseStudies.length
                      : caseStudies.filter((s: CaseStudy) => s.category === category).length;

                    return (
                      <TabsTrigger
                        key={category}
                        value={category}
                        className="data-[state=active]:bg-primary data-[state=active]:text-white whitespace-nowrap"
                      >
                        {category}
                        <span className="ml-1 text-xs">
                          ({count})
                        </span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>
              </Tabs>
            </div>
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
              {filteredStudies.map((study: CaseStudy, index: number) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  onHoverStart={() => setHoveredCard(study.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                  className="group cursor-pointer"
                >
                  <Link href={`/portfolio/${study.id}`}>
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                      {/* Image Container */}
                      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <img
                          src={study.heroImage || getPlaceholderImage(study)}
                          alt={study.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                        {/* Category Badge */}
                        <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">
                          {study.category}
                        </Badge>

                        {/* Featured Badge */}
                        {study.featured && (
                          <Badge className="absolute top-4 right-4 bg-yellow-500 text-white">
                            <Award className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        )}

                        {/* Stats Overlay */}
                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                          <div>
                            <h3 className="text-white font-bold text-xl mb-1">{study.name}</h3>
                            <p className="text-white/90 text-sm">{study.tagline}</p>
                          </div>
                          {study.markets && study.markets[0] && (
                            <div className="text-right">
                              <div className="flex items-center text-white/90 text-sm">
                                <MapPin className="w-4 h-4 mr-1" />
                                {study.markets[0]}
                                {study.markets.length > 1 && ` +${study.markets.length - 1}`}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <CardContent className="p-6">
                        {/* Industry */}
                        {study.industry && (
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <Briefcase className="w-4 h-4 mr-1" />
                            {study.industry}
                          </div>
                        )}

                        {/* Description */}
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {study.description}
                        </p>

                        {/* Key Stats */}
                        {study.stats && Object.keys(study.stats).length > 0 && (
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            {Object.entries(study.stats).slice(0, 2).map(([key, value]) => (
                              <div key={key}>
                                <div className="text-lg font-bold text-primary">{value}</div>
                                <div className="text-xs text-gray-500 capitalize">{key.replace(/_/g, ' ')}</div>
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

                        {/* View Details Button */}
                        <div className="flex items-center text-primary font-semibold group/link">
                          <span className="mr-2">View Case Study</span>
                          <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
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
              Join the ranks of Netflix, Microsoft, MrBeast, and 40+ other brands who trust us
              to deliver experiential marketing that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="group">
                  Start Your Project
                  <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
              <a href="tel:+13037206060">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: 303-720-6060
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}