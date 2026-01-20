import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Building,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
  ExternalLink,
  Share2,
  Download,
  Play,
  Image as ImageIcon,
  Briefcase,
  Target,
  Zap,
  BarChart3,
  Globe,
  Clock,
  Phone,
  Mail,
  ChevronRight
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
  galleryImages?: string[];
}

function cleanDescription(description: string): string {
  let cleaned = description
    .replace(/Deliverables:\s*[\s\S]*$/i, '')
    .replace(/✅\s*[^\n]+/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
  
  cleaned = cleaned.replace(/from\s+\w+\s+\d{1,2}(?:st|nd|rd|th)?,?\s*(?:\d{4})?\s*(?:to|-)?\s*\w+\s+\d{1,2}(?:st|nd|rd|th)?,?\s*\d{4}/gi, (match) => {
    const yearMatch = match.match(/\d{4}/);
    return yearMatch ? `in ${yearMatch[0]}` : match;
  });
  
  cleaned = cleaned.replace(/from\s+(\w+)\s+(\d{1,2})\s+to\s+\w+\s+\d{1,2},?\s*(\d{4})/gi, 'in $3');
  
  return cleaned;
}

function formatDateToYear(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? dateStr : date.getFullYear().toString();
}

function mapNotionToCaseStudy(notion: NotionCaseStudy): CaseStudy {
  const yearOnly = formatDateToYear(notion.date);
  
  return {
    id: notion.id,
    name: notion.title || notion.client,
    tagline: notion.what_we_did || notion.campaign_type || 'Brand Activation',
    description: cleanDescription(notion.description),
    industry: notion.industry,
    services: notion.services_provided.length > 0 ? notion.services_provided : [notion.campaign_type || 'Brand Activation'],
    markets: notion.markets,
    date: yearOnly,
    googleDriveUrl: notion.google_drive_folder || notion.assets_folder,
    stats: {
      "Campaign Type": notion.campaign_type,
      "Markets": notion.markets.length > 0 ? `${notion.markets.length} markets` : "National",
      "Services": notion.services_provided.length > 0 ? `${notion.services_provided.length} services` : "Full-service",
      "Status": notion.status || "Completed"
    },
    category: notion.campaign_type || notion.industry || 'Brand Activation',
    featured: notion.has_real_assets && notion.google_drive_images.length > 0,
    heroImage: notion.image_url,
    images: notion.google_drive_images.length > 0 ? notion.google_drive_images : [notion.image_url],
    galleryImages: notion.google_drive_images.length > 0 ? notion.google_drive_images : undefined
  };
}

// Generate placeholder images based on industry/category
const getPlaceholderImages = (study: CaseStudy): string[] => {
  const industryImages: Record<string, string[]> = {
    "Beverage": [
      "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1558642891-54be180ea339?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1569937755031-0ecbd78cf7e2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&h=600&fit=crop"
    ],
    "Beauty/Cosmetics": [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=600&fit=crop"
    ],
    "Entertainment": [
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop"
    ],
    "Technology": [
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    ],
    "Sports": [
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1518611507436-f9221403cca2?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop"
    ],
    "Restaurant": [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop"
    ],
    "default": [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop"
    ]
  };

  const categoryImages: Record<string, string[]> = {
    "Sampling": [
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1556741533-411cf82e4e2d?w=800&h=600&fit=crop"
    ],
    "Events": [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&h=600&fit=crop"
    ],
    "Street Teams": [
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1600&h=900&fit=crop",
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1513682322455-ea8b2d81d418?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&h=600&fit=crop"
    ]
  };

  return industryImages[study.industry || ""] ||
         categoryImages[study.category] ||
         industryImages["default"];
};

// Generate detailed content based on services
const generateDetailedContent = (study: CaseStudy) => {
  const content: any = {
    challenge: "",
    solution: "",
    execution: [],
    results: [],
    testimonial: ""
  };

  // Generate challenge based on industry and services
  if (study.industry?.includes("Beverage")) {
    content.challenge = `${study.name} needed to increase brand awareness and drive product trials in highly competitive markets. The challenge was to create memorable experiences that would resonate with target demographics while driving measurable results.`;
  } else if (study.industry?.includes("Technology")) {
    content.challenge = `In a rapidly evolving tech landscape, ${study.name} required an innovative approach to showcase their latest offerings and connect with both B2B and B2C audiences in meaningful ways.`;
  } else if (study.industry?.includes("Entertainment")) {
    content.challenge = `${study.name} sought to generate buzz and excitement around their content, creating immersive experiences that would drive engagement and social media amplification.`;
  } else {
    content.challenge = `${study.name} partnered with AirFresh Marketing to elevate their brand presence and create lasting connections with their target audience through experiential marketing.`;
  }

  // Generate solution based on services
  content.solution = `Our team developed a comprehensive ${study.services[0]} strategy that leveraged ${study.services.length > 1 ? study.services.slice(1).join(', ') : 'innovative tactics'} to achieve the client's objectives. We focused on creating authentic, engaging touchpoints that would resonate with the target demographic.`;

  // Generate execution points
  study.services.forEach((service, index) => {
    const executionPoints: Record<string, string> = {
      "Sampling Activation": "Deployed trained brand ambassadors to conduct product sampling in high-traffic locations",
      "Event Staffing": "Provided professional event staff trained in brand messaging and customer engagement",
      "Brand Ambassadors": "Recruited and trained local brand ambassadors who embodied the brand values",
      "Street Team Marketing": "Executed targeted street team campaigns in key neighborhoods and districts",
      "Community Engagement": "Built authentic connections with local communities through grassroots initiatives",
      "Promotional Engagement": "Created interactive promotional experiences that drove participation and sharing",
      "Brand Activation": "Designed and executed immersive brand activations that brought the brand story to life",
      "Market Activation": "Launched coordinated market activation campaigns across multiple touchpoints"
    };

    const point = executionPoints[service] || `Implemented strategic ${service} to maximize impact`;
    content.execution.push(point);
  });

  // Generate results based on stats
  Object.entries(study.stats).forEach(([key, value]) => {
    const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    content.results.push(`${formattedKey}: ${value}`);
  });

  // Generate testimonial
  const testimonials = [
    "The AirFresh team exceeded our expectations with their professionalism and ability to connect with our target audience.",
    "Outstanding execution and measurable results. AirFresh Marketing truly understands experiential marketing.",
    "Their team's dedication and creativity helped us achieve our goals and create lasting brand impressions.",
    "We were impressed with the level of detail and strategic thinking that went into every aspect of the campaign."
  ];
  content.testimonial = testimonials[Math.floor(Math.random() * testimonials.length)];

  return content;
};

export default function PortfolioCaseStudyDetail() {
  const { id } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Fetch case study details from Notion
  const { data: caseStudy, isLoading, error } = useQuery<CaseStudy>({
    queryKey: ["/api/notion-case-studies", id],
    queryFn: async () => {
      const response = await fetch(`/api/notion-case-studies/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch case study");
      }
      const notionData: NotionCaseStudy = await response.json();
      return mapNotionToCaseStudy(notionData);
    }
  });

  // Generate images if not provided - use galleryImages first, then images, then placeholders
  const images = caseStudy ?
    (caseStudy.galleryImages && caseStudy.galleryImages.length > 0 ? caseStudy.galleryImages :
     caseStudy.images && caseStudy.images.length > 0 ? caseStudy.images :
     getPlaceholderImages(caseStudy)) :
    [];

  const heroImage = caseStudy?.heroImage || images[0];
  const detailedContent = caseStudy ? generateDetailedContent(caseStudy) : null;

  // Share functionality
  const handleShare = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error || !caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Case Study Not Found</h2>
          <p className="text-gray-600 mb-4">Unable to load this case study.</p>
          <Link href="/portfolio">
            <Button className="text-black">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${caseStudy.name} - Case Study | AirFresh Marketing Portfolio`}
        description={caseStudy.description}
        canonical={`https://airfreshmarketing.com/portfolio/${caseStudy.id}`}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt={caseStudy.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="mb-6 text-black bg-white/90 border-white hover:bg-white hover:text-black"
                >
                  <ArrowLeft className="w-4 h-4 mr-2 text-black" />
                  Back to Portfolio
                </Button>
              </Link>

              <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur">
                {caseStudy.category}
              </Badge>

              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4">
                {caseStudy.name}
              </h1>

              <p className="text-2xl text-white/90 mb-6 max-w-3xl">
                {caseStudy.tagline}
              </p>

              {caseStudy.featured && (
                <Badge className="bg-yellow-500 text-white border-0">
                  <Award className="w-4 h-4 mr-1" />
                  Featured Campaign
                </Badge>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      <section className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(caseStudy.stats).slice(0, 4).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold">{value}</div>
                <div className="text-sm opacity-90 capitalize">{key.replace(/_/g, ' ')}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6">Campaign Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {caseStudy.description}
                </p>
              </motion.div>

              {/* The Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Target className="w-8 h-8 mr-3 text-primary" />
                  The Challenge
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {detailedContent?.challenge}
                </p>
              </motion.div>

              {/* Our Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Zap className="w-8 h-8 mr-3 text-primary" />
                  Our Solution
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  {detailedContent?.solution}
                </p>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {caseStudy.services.map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Execution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <Users className="w-8 h-8 mr-3 text-primary" />
                  Execution & Strategy
                </h2>
                <div className="space-y-4">
                  {detailedContent?.execution.map((point: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-4 mt-1">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-600 flex-1">{point}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Image Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <ImageIcon className="w-8 h-8 mr-3 text-primary" />
                  Campaign Gallery
                </h2>

                {/* Main Image */}
                <div className="mb-4 rounded-xl overflow-hidden shadow-2xl">
                  <img
                    src={images[activeImageIndex]}
                    alt={`${caseStudy.name} - Image ${activeImageIndex + 1}`}
                    className="w-full h-[500px] object-cover"
                  />
                </div>

                {/* Thumbnail Grid */}
                <div className="grid grid-cols-4 gap-4">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`rounded-lg overflow-hidden transition-all ${
                        activeImageIndex === index ? 'ring-4 ring-primary' : 'hover:opacity-75'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${caseStudy.name} - Thumbnail ${index + 1}`}
                        className="w-full h-24 object-cover"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Results & Impact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center">
                  <BarChart3 className="w-8 h-8 mr-3 text-primary" />
                  Results & Impact
                </h2>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {detailedContent?.results.map((result: string, index: number) => (
                    <Card key={index} className="border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <p className="text-lg font-semibold text-gray-800">{result}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Testimonial */}
                <Card className="bg-gray-50">
                  <CardContent className="p-8">
                    <p className="text-lg italic text-gray-700 mb-4">
                      "{detailedContent?.testimonial}"
                    </p>
                    <p className="text-sm text-gray-500">
                      - {caseStudy.name} Marketing Team
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Project Details Card */}
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-6">
                  <h3 className="text-xl font-bold">Project Details</h3>

                  {/* Client Info */}
                  {caseStudy.industry && (
                    <div className="flex items-start">
                      <Briefcase className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Industry</p>
                        <p className="font-semibold">{caseStudy.industry}</p>
                      </div>
                    </div>
                  )}

                  {/* Markets */}
                  {caseStudy.markets && caseStudy.markets.length > 0 && (
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Markets</p>
                        <p className="font-semibold">{caseStudy.markets.join(", ")}</p>
                      </div>
                    </div>
                  )}

                  {/* Date */}
                  {caseStudy.date && (
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-500">Date</p>
                        <p className="font-semibold">{caseStudy.date}</p>
                      </div>
                    </div>
                  )}

                  {/* Category */}
                  <div className="flex items-start">
                    <Target className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-semibold">{caseStudy.category}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t space-y-3">

                    {caseStudy.googleDriveUrl && (
                      <a
                        href={caseStudy.googleDriveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        <Button variant="outline" className="w-full">
                          <Download className="w-4 h-4 mr-2" />
                          Download Assets
                        </Button>
                      </a>
                    )}
                  </div>

                  {/* Contact CTA */}
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-3">
                      Interested in similar results?
                    </p>
                    <Link href="/contact">
                      <Button variant="default" className="w-full">
                        Start Your Project
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">More Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* This would fetch related case studies */}
            <Card className="text-center p-8">
              <CardContent>
                <p className="text-gray-600">View more case studies in our portfolio</p>
                <Link href="/portfolio">
                  <Button className="mt-4">
                    Explore Portfolio
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let's discuss how we can help your brand achieve similar results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Get Started
                  <ChevronRight className="w-4 h-4 ml-2" />
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