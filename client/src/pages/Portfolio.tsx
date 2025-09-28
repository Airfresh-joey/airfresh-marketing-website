import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

// Sample case studies data - will be replaced with actual data from CSV/API
const caseStudiesData = [
  {
    id: "beer-samplings",
    name: "Beer Samplings",
    tagline: "Craft Beer Activation Campaign",
    description: "Premium beer tasting experiences that drove 300% increase in brand awareness",
    industry: "Beverage",
    services: ["Sampling Activation", "Brand Engagement", "Market Activation"],
    markets: ["Las Vegas", "San Diego"],
    date: "2024",
    stats: {
      reach: "50,000+",
      engagement: "85%",
      conversion: "32%",
      roi: "4.2x"
    },
    heroImage: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558642891-54be180ea339?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1569937755031-0ecbd78cf7e2?w=600&h=400&fit=crop"
    ],
    featured: true,
    category: "Sampling"
  },
  {
    id: "bond-vet",
    name: "Bond Vet",
    tagline: "Pet Adoption Event Success",
    description: "Heartwarming brand activation that connected pet owners with veterinary services",
    industry: "Healthcare",
    services: ["Brand Ambassadors", "Event Staffing", "Community Engagement"],
    markets: ["New York", "Brooklyn"],
    date: "2024",
    stats: {
      adoptions: "127",
      leads: "890+",
      social: "2.1M",
      sentiment: "98%"
    },
    heroImage: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&h=400&fit=crop"
    ],
    featured: true,
    category: "Events"
  },
  {
    id: "brooklyn-magazine",
    name: "Brooklyn Magazine",
    tagline: "Urban Culture Celebration",
    description: "Experiential event that brought Brooklyn's creative community together",
    industry: "Media",
    services: ["Experiential Marketing", "Event Production", "Creative Direction"],
    markets: ["New York"],
    date: "2024",
    stats: {
      attendance: "5,000+",
      press: "45",
      social: "3.5M",
      nps: "92"
    },
    heroImage: "https://images.unsplash.com/photo-1513106021000-168e5114f512?w=1200&h=800&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&h=400&fit=crop"
    ],
    featured: false,
    category: "Experiential"
  },
  {
    id: "tech-summit",
    name: "Tech Innovation Summit",
    tagline: "Future of Technology Showcase",
    description: "Immersive tech experience featuring AR/VR demos and interactive installations",
    industry: "Technology",
    services: ["Trade Show Management", "Interactive Installations", "Tech Demos"],
    markets: ["San Francisco", "Austin", "Seattle"],
    date: "2024",
    stats: {
      attendees: "15,000+",
      demos: "500+",
      leads: "3,200",
      deals: "$2.5M"
    },
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop",
    featured: true,
    category: "Trade Shows"
  },
  {
    id: "wellness-festival",
    name: "Mindful Living Festival",
    tagline: "Holistic Wellness Experience",
    description: "Three-day wellness festival featuring yoga, meditation, and health brands",
    industry: "Wellness",
    services: ["Festival Production", "Vendor Management", "Brand Activations"],
    markets: ["Los Angeles", "Miami", "Denver"],
    date: "2023",
    stats: {
      participants: "8,000+",
      vendors: "150",
      sessions: "75",
      satisfaction: "96%"
    },
    heroImage: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&h=800&fit=crop",
    featured: false,
    category: "Festivals"
  },
  {
    id: "fashion-week",
    name: "Sustainable Fashion Week",
    tagline: "Eco-Conscious Runway Revolution",
    description: "Groundbreaking fashion event showcasing sustainable brands and designers",
    industry: "Fashion",
    services: ["Event Production", "PR Management", "Influencer Outreach"],
    markets: ["New York", "Los Angeles"],
    date: "2023",
    stats: {
      designers: "45",
      media: "200+",
      impressions: "10M",
      sales: "+145%"
    },
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
    featured: true,
    category: "Fashion"
  }
];

const categories = ["All", "Sampling", "Events", "Experiential", "Trade Shows", "Festivals", "Fashion"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 800);
  }, []);

  const filteredStudies = selectedCategory === "All"
    ? caseStudiesData
    : caseStudiesData.filter(study => study.category === selectedCategory);

  const featuredStudy = caseStudiesData.find(s => s.featured);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO
        title="Portfolio | Award-Winning Experiential Marketing Case Studies"
        description="Explore our portfolio of successful brand activations, experiential marketing campaigns, and event productions. Real results from Fortune 500 brands."
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
              300+ Successful Campaigns
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
              Transforming brands through unforgettable experiences.
              Every campaign tells a story of innovation, engagement, and measurable success.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
              {[
                { icon: TrendingUp, value: "4.2x", label: "Average ROI" },
                { icon: Users, value: "5M+", label: "People Reached" },
                { icon: Award, value: "50+", label: "Awards Won" },
                { icon: Target, value: "98%", label: "Client Satisfaction" }
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
                <p className="text-xl text-gray-600 mb-6">{featuredStudy.description}</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {Object.entries(featuredStudy.stats).map(([key, value]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

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
                    <p className="text-sm opacity-90">{featuredStudy.markets.join(" • ")}</p>
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
                          <div className="text-right">
                            <div className="flex items-center text-white/90 text-sm">
                              <MapPin className="w-4 h-4 mr-1" />
                              {study.markets[0]}
                            </div>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        {/* Description */}
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {study.description}
                        </p>

                        {/* Key Stats */}
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          {Object.entries(study.stats).slice(0, 2).map(([key, value]) => (
                            <div key={key}>
                              <div className="text-lg font-bold text-primary">{value}</div>
                              <div className="text-xs text-gray-500 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>

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