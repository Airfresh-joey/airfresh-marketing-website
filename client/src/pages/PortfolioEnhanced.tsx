import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
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
  Phone,
  AlertCircle,
  Loader2
} from "lucide-react";

interface NotionCaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  campaign_type: string;
  description: string;
  results: string;
  what_we_did: string;
  services_provided: string[];
  markets: string[];
  product_offering: string;
  google_drive_folder: string;
  assets_folder: string;
  notion_url: string;
  image_url: string;
  has_real_assets: boolean;
  google_drive_images: string[];
  date: string;
  status: string;
  client_logo_url: string;
}

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

function formatDateToYear(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? dateStr : date.getFullYear().toString();
}

function mapNotionToCaseStudy(notion: NotionCaseStudy): CaseStudy {
  return {
    id: notion.id,
    name: notion.title || notion.client,
    tagline: notion.what_we_did || notion.campaign_type || 'Brand Activation',
    description: notion.description,
    industry: notion.industry,
    services: notion.services_provided.length > 0 ? notion.services_provided : [notion.campaign_type || 'Brand Activation'],
    markets: notion.markets,
    date: formatDateToYear(notion.date),
    googleDriveUrl: notion.google_drive_folder || notion.assets_folder,
    stats: {
      "Campaign Type": notion.campaign_type,
      "Markets": notion.markets.length > 0 ? `${notion.markets.length} markets` : "National",
      "Services": notion.services_provided.length > 0 ? `${notion.services_provided.length} services` : "Full-service"
    },
    category: notion.campaign_type || notion.industry || 'Brand Activation',
    featured: notion.has_real_assets && notion.google_drive_images.length > 0,
    heroImage: notion.image_url,
    images: notion.google_drive_images.length > 0 ? notion.google_drive_images : [notion.image_url]
  };
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

  // Fetch case studies from Notion database
  const { data: notionData, isLoading, error } = useQuery<NotionCaseStudy[]>({
    queryKey: ["/api/notion-case-studies"]
  });

  // Map Notion data to CaseStudy format
  const caseStudies = notionData ? notionData.map(mapNotionToCaseStudy) : [];
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

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <SEO
          title="Portfolio | Loading Case Studies..."
          description="Explore our portfolio of successful brand activations."
          canonical="https://airfreshmarketing.com/portfolio"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Loading Portfolio</h2>
            <p className="text-gray-600">Fetching our latest case studies from Notion...</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Skeleton className="h-64 w-full" />
                <CardContent className="p-6">
                  <Skeleton className="h-4 w-1/4 mb-2" />
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <Skeleton className="h-4 w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <SEO
          title="Portfolio | AirFresh Marketing"
          description="Explore our portfolio of successful brand activations."
          canonical="https://airfreshmarketing.com/portfolio"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <AlertCircle className="w-12 h-12 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Unable to Load Portfolio</h2>
            <p className="text-gray-600 mb-6">We encountered an error while loading our case studies.</p>
            <Button onClick={() => window.location.reload()} data-testid="button-retry">
              Try Again
            </Button>
          </div>
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

      {/* Hero Section with Video Background */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/394086862?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
              className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
              style={{ border: 'none' }}
              allow="autoplay; fullscreen"
              title="Portfolio Hero Video"
            />
          </div>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-white/20 text-white border-0 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-1" />
              {totalStats.campaigns}+ Successful Campaigns
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Our Portfolio of
              <br />
              <span className="relative">
                Excellence
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow">
              From MrBeast to Microsoft, Netflix to MAC Cosmetics - transforming brands through
              unforgettable experiences nationwide.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              {[
                { icon: TrendingUp, value: "50+", label: "Case Studies" },
                { icon: Building, value: "15+", label: "Industries" },
                { icon: MapPin, value: "50+", label: "Cities Nationwide" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                  data-testid={`stat-card-${index}`}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900" data-testid={`stat-value-${index}`}>{stat.value}</div>
                  <div className="text-sm text-gray-600" data-testid={`stat-label-${index}`}>{stat.label}</div>
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

      {/* Featured Case Study - Premier Protein */}
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
              <h2 className="text-4xl font-bold mb-4">Premier Protein</h2>
              <p className="text-xl text-primary font-semibold mb-2">SoCal Street Sampling Campaign</p>
              <p className="text-lg text-gray-600 mb-6">
                AirFresh hit the Southern California streets with Premier Protein, executing a high-energy mobile sampling campaign across beach events, festivals, and 5K races. Our brand ambassadors distributed 645 cases of product using scooter-based sampling backpacks, reaching thousands of health-conscious consumers at peak engagement moments.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">645</div>
                  <div className="text-sm text-gray-600">Cases Distributed</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-sm text-gray-600">Activation Days</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-gray-600">Event Locations</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-primary">SoCal</div>
                  <div className="text-sm text-gray-600">Region Coverage</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {["Street Team", "Product Sampling", "Brand Ambassadors", "Mobile Marketing", "Event Activation"].map((service: string) => (
                  <Badge key={service} variant="outline">
                    {service}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                <Link href="/portfolio/premier-protein">
                  <Button size="lg" className="group">
                    View Full Case Study
                    <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative rounded-2xl shadow-2xl overflow-hidden" style={{ paddingTop: '56.25%' }}>
                <iframe
                  src="https://player.vimeo.com/video/394084617?badge=0&autopause=0&player_id=0&app_id=58479"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 'none' }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="Air Fresh Marketing hits the SoCal Streets with Premier Protein"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

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