import type { Metadata } from "next";
import HeroAgencyVideo from "@/components/HeroAgencyVideo";
import ClientLogos from "@/components/ClientLogos";
import ActivationPlanner from "@/components/ActivationPlanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { Star, Heart, Users, Cog, Laptop, ShoppingCart, TrendingUp, Palette, Store, Building, Handshake, Play, Award, Target, BarChart3, Eye, Sparkles, ArrowRight, CheckCircle2, Zap, Clock, BookOpen, MapPin, Video, Database, Share2, Smartphone, FileText, Briefcase } from "lucide-react";
import { blogPosts as staticBlogPosts } from "@/server/blogPosts";
import dynamic from "next/dynamic";
import ScrollToAnchor from "@/components/ScrollToAnchor";

// Lazy load FloatingCTA - only needed after scroll
const FloatingCTA = dynamic(() => import("@/components/FloatingCTA"));

// Server-side metadata (no client JS needed)
export const metadata: Metadata = {
  title: "Experiential Marketing Agency | Brand Ambassadors & Event Staffing | AirFresh Marketing",
  description: "Experiential marketing agency with brand ambassadors, event staffing, and brand activations in 50+ cities nationwide. 500+ campaigns delivered.",
  keywords: "experiential marketing, brand ambassadors, event staffing, guerrilla marketing, brand activations, product sampling, street teams",
  openGraph: {
    title: "Experiential Marketing Agency | Brand Ambassadors & Event Staffing | AirFresh Marketing",
    description: "Experiential marketing agency with brand ambassadors, event staffing, and brand activations in 50+ cities nationwide. 500+ campaigns delivered.",
    url: "https://www.airfreshmarketing.com",
    siteName: "AirFresh Marketing",
    type: "website",
    locale: "en_US",
    images: [{
      url: "/images/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "AirFresh Marketing experiential marketing brand ambassadors event staffing nationwide"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiential Marketing Agency | Brand Ambassadors & Event Staffing",
    description: "Experiential marketing agency with brand ambassadors, event staffing, and brand activations in 50+ cities nationwide.",
    site: "@AirFreshMktg",
    creator: "@AirFreshMktg"
  },
  alternates: {
    canonical: "https://www.airfreshmarketing.com"
  },
  robots: "index, follow",
  authors: [{ name: "AirFresh Marketing" }]
};

export default function Home() {
  // Get the 3 most recent blog posts (static data - no API call needed)
  const recentPosts = staticBlogPosts.slice(0, 3);
  // Enhanced structured data for better SEO and LLM understanding
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.airfreshmarketing.com/#organization",
        "name": "AirFresh Marketing",
        "alternateName": "AirFresh Experiential Marketing Agency",
        "description": "Experiential marketing agency specializing in brand activations, event marketing, guerrilla marketing, and customer engagement campaigns nationwide.",
        "url": "https://www.airfreshmarketing.com",
        "logo": "https://www.airfreshmarketing.com/images/airfresh-logo.svg",
        "sameAs": [
          "https://www.linkedin.com/company/airfreshmarketing",
          "https://twitter.com/AirFreshMktg",
          "https://www.instagram.com/airfreshmarketing",
          "https://www.facebook.com/AirFreshMarketing"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+1-303-720-6060",
          "contactType": "customer service",
          "email": "hello@airfreshmarketing.com",
          "areaServed": "US",
          "availableLanguage": "en"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1580 N. Logan St., Suite 660",
          "addressLocality": "Denver",
          "addressRegion": "CO",
          "postalCode": "80203",
          "addressCountry": "US"
        },
        "areaServed": "US"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best experiential marketing agency for brand activations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "AirFresh Marketing is a leading experiential marketing agency with extensive experience in brand campaigns and operations nationwide. Our network of trained brand ambassadors helps deliver successful brand activations."
            }
          },
          {
            "@type": "Question",
            "name": "How do I get started with experiential marketing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Contact AirFresh Marketing for a free consultation. We'll discuss your campaign goals, target audience, and timeline, then provide a customized proposal tailored to your specific needs and objectives."
            }
          }
        ]
      },
      {
        "@type": "Service",
        "name": "Experiential Marketing & Event Staffing",
        "provider": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "url": "https://www.airfreshmarketing.com"
        },
        "serviceType": [
          "Experiential Marketing",
          "Brand Ambassadors",
          "Event Staffing",
          "Street Team Marketing",
          "Product Sampling",
          "Trade Show Staffing",
          "Guerrilla Marketing",
          "Brand Activation",
          "Pop-up Events",
          "Mobile Marketing Tours"
        ],
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "url": "https://www.airfreshmarketing.com/services"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.airfreshmarketing.com"
          }
        ]
      }
    ]
  };

  const services = [
    {
      icon: Sparkles,
      title: "Create Memorable Brand Experiences",
      description: "Transform customer interactions into unforgettable experiential marketing moments that drive brand loyalty and engagement through innovative activations and immersive experiences."
    },
    {
      icon: Heart,
      title: "Build Lasting Customer Relationships Through Experiential Marketing",
      description: "Convert customers into passionate brand advocates through strategic experiential campaigns, product sampling, and authentic brand interactions that create lasting emotional connections."
    },
    {
      icon: Users,
      title: "Engage Audiences Like Never Before",
      description: "Our network of fully-aligned brand ambassadors trained to embody your company's message is STACKED!"
    }
  ];

  const turnkeyServices = [
    { icon: Cog, title: "Production and Execution", description: "Complete project management from planning to delivery" },
    { icon: Laptop, title: "Experiential & Digital", description: "Seamless integration of physical and digital experiences" },
    { icon: ShoppingCart, title: "Asset Procurement", description: "Sourcing all necessary materials and equipment" },
    { icon: TrendingUp, title: "Marketing Strategy", description: "Strategic planning aligned with your objectives" },
    { icon: Palette, title: "Creative", description: "Innovative concepts that captivate audiences" }
  ];

  const targetAudience = [
    {
      icon: Store,
      title: "Local Brands",
      description: "Pump up the volume with next-level events for your local business."
    },
    {
      icon: Building,
      title: "Corporations",
      description: "Give every customer an intimate experience when it comes to colossal nationwide campaigns."
    },
    {
      icon: Handshake,
      title: "Agencies",
      description: "Enhance your agency with fresh ideas, unique perspectives and innovative outreach."
    }
  ];

  const technologyFeatures = [
    {
      icon: Users,
      title: "Customer Console & Talent Selection",
      description: "Select top talent with real-time insights through our intuitive platform for seamless team management."
    },
    {
      icon: MapPin,
      title: "GPS Check-In & Recapping",
      description: "Track and report seamlessly in real-time with location-verified check-ins and instant event recaps."
    },
    {
      icon: Video,
      title: "Video Training & Testing",
      description: "Ensure campaign readiness with pre-event training modules and knowledge verification tests."
    },
    {
      icon: Database,
      title: "Data Capturing & Surveys",
      description: "Gather key consumer insights effortlessly with integrated data collection and survey tools."
    },
    {
      icon: Share2,
      title: "Custom Software & Gamification",
      description: "Elevate experiences with custom-built apps, interactive games, and digital activations powered by Humming Agent AI."
    }
  ];

  const whyUsHighlights = [
    {
      icon: Briefcase,
      title: "Our Agency",
      description: "Experiential marketing experts with over a decade of proven success delivering memorable brand activations nationwide."
    },
    {
      icon: Award,
      title: "Our Clients",
      description: "Trusted by top brands for measurable results that drive engagement, loyalty, and real business impact."
    },
    {
      icon: FileText,
      title: "Case Studies",
      description: "Real success stories from real partnerships showcasing transformative campaigns and exceptional ROI."
    },
    {
      icon: CheckCircle2,
      title: "Top Ten Reasons",
      description: "Why brands trust us to deliver: innovation, reliability, expertise, and results that exceed expectations."
    }
  ];

  const testimonials = [
    {
      name: "Claire M.",
      role: "Marketing Manager, Sweetgreen",
      content: "Thank you so much for these, this level of insight is fantastic. We've never had this before and I'm excited to dive in.",
      avatar: "/images/testimonials/kristin-quinn.jpg"
    },
    {
      name: "Jessica H.",
      role: "Hunter PR / Durex",
      content: "Thanks so much for this, Joey - appreciate the thorough recap and additional photos. Great work on the Milwaukee Game Day Activation!",
      avatar: "/images/testimonials/anonymous-review.jpg"
    },
    {
      name: "Chanichi C.",
      role: "Brand Ambassador - Get Out and Vote Campaign",
      content: "Working for Air Fresh Marketing has to be one of the best experiences I have had with a company. This was one of the most organized events I have ever worked! I would definitely work with them again!",
      avatar: "/images/testimonials/aimee-ambassador.jpg"
    },
    {
      name: "Yvonne H.",
      role: "Senior Marketing Manager, Ent Credit Union",
      content: "Love the money machine idea and really like the idea of capturing data with an experience. Air Fresh brings creative solutions we hadn't considered.",
      avatar: "/images/airfresh-logo.svg"
    },
    {
      name: "Andrew P.",
      role: "Director of Sales, Midwest Immersive",
      content: "I saw a few highlighted experiential projects and was extremely impressed at the level of work your company does. I love the work you guys do!",
      avatar: "/images/airfresh-logo.svg"
    },
    {
      name: "Verified Brand Ambassador",
      role: "PopBookings Review - 5 Stars",
      content: "Communication is always great and pay is next day! I love working for this company. Great company and fantastic staff.",
      avatar: "/images/airfresh-logo.svg"
    }
  ];


  return (
    <>
      <FloatingCTA />
      <ScrollToAnchor />
      <div className="pt-16">
        {/* Structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <HeroAgencyVideo />

        {/* Client Logos */}
        <ClientLogos />

        <ActivationPlanner />

      {/* Video Section - Premium Design with Multiple Videos */}
      <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
              <Play className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">SEE US IN ACTION</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Makes <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">AirFresh Marketing</span> Different?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watch how we transform ordinary events into extraordinary brand experiences.
            </p>
          </div>

          {/* Featured Video */}
          <div
            
            
            
            className="relative mb-12"
          >
            <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 p-1 rounded-2xl shadow-2xl">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="aspect-video relative bg-black">
                  <iframe
                    src="https://player.vimeo.com/video/395306497?badge=0&autopause=0&player_id=0&app_id=58479&playsinline=1&dnt=1#t=12s"
                    className="absolute inset-0 w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                    title="Air Fresh Marketing and Visible Rock at Red Rocks!"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Brand Activation Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Skinny Mixes Sampling Campaign",
                image: "/images/case-studies/gallery/skinny-mixes/skinny-mixes-3.jpg",
                description: "Nationwide product sampling driving brand awareness and trial",
                link: "/case-studies/skinny-mixes"
              },
              {
                title: "Netflix Premiere Events",
                image: "/images/clients/netflix-activation-exact.jpg",
                description: "Hollywood red carpet staffing, VIP flow, and fan experience support",
                link: "/case-studies/netflix-activations"
              },
              {
                title: "Grubhub NYC Street Team",
                image: "/images/case-studies/gallery/grubhub/grubhub-1.jpg",
                description: "Street team activation driving restaurant partnerships in NYC",
                link: "/case-studies/grubhub-campaign"
              }
            ].map((caseStudy, index) => (
              <div
                key={index}
                
                
                
                className="group"
              >
                <Link href={caseStudy.link}>
                  <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 p-0.5 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="bg-white rounded-xl overflow-hidden">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={caseStudy.image}
                          alt={`${caseStudy.title} brand activation case study`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-sm font-medium">View Case Study →</span>
                        </div>
                      </div>
                      <div className="p-4 bg-white">
                        <h4 className="font-bold text-gray-900 mb-1">{caseStudy.title}</h4>
                        <p className="text-sm text-gray-600">{caseStudy.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section - Modern Premium Design */}
      <section className="relative py-32 bg-white overflow-hidden" id="services">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">WHAT WE DO</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Experiential Marketing Agency Creating
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mt-2">
                Unforgettable Brand Experiences
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We deliver experiential marketing campaigns designed to achieve higher engagement rates and increase purchase intent through immersive brand experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                
                
                
                
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-white to-gray-50 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-10 text-center relative">
                    <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-3 transition-transform duration-300">
                      <service.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-cyan-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Service Page Links */}
          <div className="mt-16 text-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-6">Explore Our Services</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/services/brand-ambassadors" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Brand Ambassadors</Link>
              <Link href="/services/event-staffing" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Event Staffing</Link>
              <Link href="/services/street-teams" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Street Teams</Link>
              <Link href="/services/sampling" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Product Sampling</Link>
              <Link href="/services/convention-staffing" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Convention Staffing</Link>
              <Link href="/services/experiential-marketing" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Experiential Marketing</Link>
              <Link href="/services/retail-activations" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Retail Activations</Link>
              <Link href="/services/event-management" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Event Management</Link>
              <Link href="/services/trade-show-staffing" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Trade Show Staffing</Link>
              <Link href="/event-staffing-agency" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Event Staffing Agency</Link>
              <Link href="/services/food-beverage-sampling" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Food & Beverage Sampling</Link>
              <Link href="/brand-ambassador-agency" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Brand Ambassador Agency</Link>
              <Link href="/experiential-marketing-agency" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Experiential Marketing Agency</Link>
              <Link href="/promotional-staffing-agency" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Promotional Staffing Agency</Link>
              <Link href="/corporate-event-staffing" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Corporate Event Staffing</Link>
              <Link href="/event-marketing-agency" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Event Marketing Agency</Link>
              <Link href="/brand-activation-agency" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Brand Activation Agency</Link>
              <Link href="/field-marketing-agency" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Field Marketing Agency</Link>
              <Link href="/guerrilla-marketing-agency" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Guerrilla Marketing Agency</Link>
              <Link href="/product-sampling-agency" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Product Sampling Agency</Link>
              <Link href="/mobile-marketing-tours" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Mobile Marketing Tours</Link>
            </div>
            <Link href="/services" className="inline-flex items-center gap-1 mt-6 text-cyan-600 hover:text-cyan-700 font-medium text-sm">
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-lg font-semibold text-gray-700 mb-6">Events We Staff</h3>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/staffing-for/ces" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">CES Staffing</Link>
              <Link href="/staffing-for/sema" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">SEMA Show</Link>
              <Link href="/staffing-for/coachella" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Coachella</Link>
              <Link href="/staffing-for/f1-las-vegas" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">F1 Las Vegas</Link>
              <Link href="/staffing-for/sxsw" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">SXSW</Link>
              <Link href="/staffing-for/super-bowl" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Super Bowl</Link>
              <Link href="/staffing-for/world-cup-2026" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">World Cup 2026</Link>
              <Link href="/staffing-for/comic-con" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Comic-Con</Link>
              <Link href="/staffing-for/lollapalooza" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Lollapalooza</Link>
              <Link href="/staffing-for/nyfw" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">NYFW</Link>
              <Link href="/staffing-for/art-basel-miami" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Art Basel Miami</Link>
              <Link href="/staffing-for/dreamforce" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Dreamforce</Link>
              <Link href="/staffing-for/edc-las-vegas" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">EDC Las Vegas</Link>
              <Link href="/staffing-for/nrf-big-show" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">NRF Big Show</Link>
              <Link href="/staffing-for/bonnaroo" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Bonnaroo</Link>
              <Link href="/staffing-for/ultra-music-festival" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Ultra Music Festival</Link>
              <Link href="/staffing-for/rolling-loud" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Rolling Loud</Link>
              <Link href="/staffing-for/governors-ball" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Governors Ball</Link>
              <Link href="/staffing-for/anime-expo" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Anime Expo</Link>
              <Link href="/staffing-for/la-auto-show" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">LA Auto Show</Link>
              <Link href="/staffing-for/sundance-film-festival" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Sundance</Link>
              <Link href="/staffing-for/aws-reinvent" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">AWS re:Invent</Link>
              <Link href="/staffing-for/pax-west" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">PAX West</Link>
              <Link href="/staffing-for/taste-of-chicago" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Taste of Chicago</Link>
              <Link href="/staffing-for/essence-fest" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Essence Fest</Link>
              <Link href="/staffing-for/detroit-auto-show" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Detroit Auto Show</Link>
              <Link href="/staffing-for/himss" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">HIMSS</Link>
              <Link href="/staffing-for/kcon-la" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">KCON LA</Link>
              <Link href="/staffing-for/sdcc" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">San Diego Comic-Con</Link>
              <Link href="/staffing-for/nba-all-star" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">NBA All-Star</Link>
              <Link href="/staffing-for/kentucky-derby" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">Kentucky Derby</Link>
              <Link href="/staffing-for/nfl-draft" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">NFL Draft</Link>
              <Link href="/staffing-for/e3" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:border-cyan-400 hover:text-cyan-600 transition-colors shadow-sm">E3 / Summer Game Fest</Link>
            </div>
            <Link href="/staffing-for" className="inline-flex items-center gap-1 mt-6 text-cyan-600 hover:text-cyan-700 font-medium text-sm">
              View All Events <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Turnkey Services Section - Ultra Modern */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-cyan-50/50 to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-blue-50/50 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-8">
              <Cog className="w-5 h-5 text-white animate-spin-slow" />
              <span className="text-sm font-bold text-white uppercase tracking-wider">TURNKEY SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Event Staffing &amp; Brand Activation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything we do is done in-house and as an extension of your team. We strategize what's best for meeting your goals and then come together to crush them as a single unit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {turnkeyServices.map((service, index) => (
              <div
                key={index}
                
                
                
                
              >
                <Card className="text-center p-8 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full">
                  <CardContent className="p-0">
                    <div className="w-14 h-14 mx-auto mb-5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <h4 className="font-bold text-gray-900 text-base mb-3 group-hover:text-cyan-700 transition-colors">{service.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology / Platform Features Section */}
      <section id="technology" className="relative py-24 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-50 rounded-full mb-6 border border-cyan-100">
              <Smartphone className="w-4 h-4 text-cyan-600" />
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">TECHNOLOGY & PLATFORM</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Cutting-Edge Technology for{" "}
              <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Seamless Campaign Execution</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our proprietary platform streamlines every aspect of your experiential marketing campaign.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="h-full bg-white border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mb-4 rounded-xl flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
                      <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Us / About Highlights Section */}
      <section className="relative py-24 bg-gray-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-50 rounded-full mb-6 border border-cyan-100">
              <Award className="w-4 h-4 text-cyan-600" />
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">WHY AIRFRESH MARKETING</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Discover What Sets Us Apart
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn why leading brands choose AirFresh Marketing for their experiential campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUsHighlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="h-full text-center bg-white border border-gray-100 hover:border-cyan-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 rounded-xl flex items-center justify-center" style={{background: 'linear-gradient(to bottom right, #06b6d4, #2563eb)'}}>
                      <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-gray-900">
                      {highlight.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section - Premium Glass Morphism */}
      <section className="relative py-32 bg-gradient-to-br from-white via-cyan-50/30 to-blue-50/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-sm border border-cyan-200 rounded-full mb-8">
              <Award className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">WHY CHOOSE US</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Brand Ambassadors &amp; <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Event Staff Nationwide</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our experienced team of brand ambassadors delivers proven results across major cities nationwide.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div
              
              
              
              
            >
              <Card className="text-center p-10 bg-white/70 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full group">
                <CardContent className="p-0">
                  <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-3xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <BarChart3 className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-cyan-700 transition-colors">What Insights Will You Gain?</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">Our end-of-project success reports are packed with actionable data to guide future marketing efforts.</p>
                </CardContent>
              </Card>
            </div>

            <div
              
              
              
              
            >
              <Card className="text-center p-10 bg-white/70 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full group">
                <CardContent className="p-0">
                  <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <Eye className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors">How Do We Create Multi-Sensory Experiences?</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">Transform your products and services into a dynamic experience that they can see, hear, touch, taste and feel.</p>
                </CardContent>
              </Card>
            </div>

            <div
              
              
              
              
            >
              <Card className="text-center p-10 bg-white/70 backdrop-blur-md border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full group">
                <CardContent className="p-0">
                  <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                    <Target className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-green-700 transition-colors">How Do We Reach Your Target Audience?</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">Aiming for hard-to-reach niches? Wiggle your way into obscure markets with crafty campaigns.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section - AI Optimized */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHO IS AIRFRESH MARKETING FOR?</h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Who Benefits Most from Professional Experiential Marketing Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From Fortune 500 corporations to local businesses and agencies, we deliver tailored experiential solutions that drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="text-center p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <audience.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{audience.title}</h3>
                  <p className="text-gray-600">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Dynamic Modern */}
      <section className="relative py-32 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            
            
            
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">How Have We Helped Brands?</h2>
            <p className="text-2xl md:text-3xl mb-16 text-cyan-50">We've connected brands with customers through unforgettable live events nationwide.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "500+", label: "Brands Activated" },
              { value: "15+", label: "Years Experience" },
              { value: "50+", label: "Cities Nationwide" },
              { value: "1000+", label: "Events Produced" }
            ].map((stat, index) => (
              <div
                key={index}
                
                
                
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-b from-white to-cyan-100 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-cyan-100 font-semibold text-lg">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div
            
            
            
          >
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/get-quote?source=homepage&intent=stats-success-story">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Your Success Story
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Premium Cards */}
      <section className="relative py-32 bg-gradient-to-b from-white via-gray-50/50 to-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mb-8">
              <Star className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">WHAT PEOPLE ARE SAYING</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Client Success Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                
                
                
                
              >
                <Card className="bg-gradient-to-br from-white to-gray-50/50 p-10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100/50 to-blue-100/50 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-0 relative">
                    <div className="flex items-center mb-6">
                      <Image className="w-14 h-14 rounded-full mr-4 border-2 border-cyan-200" src={testimonial.avatar} alt={testimonial.name} width={56} height={56} loading="lazy" />
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-cyan-600 font-medium">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed italic">"{testimonial.content}"</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Blog Posts Section - Modern Magazine Style */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-200 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-8">
              <BookOpen className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white uppercase tracking-wider">MARKET INSIGHTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Latest Experiential Marketing <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Expert answers to your experiential marketing questions, from costs to strategies.
            </p>
          </div>

          {recentPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {recentPosts.map((post, index) => (
                <div
                  key={post.id}
                  
                  
                  
                  
                  className="group"
                >
                  <Card className="h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
                        data-testid={`card-recent-post-${post.id}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <CardContent className="p-8 relative">
                      <div className="flex items-center gap-3 mb-6">
                        <Badge className="bg-gradient-to-r from-cyan-100 to-blue-100 text-cyan-700 font-semibold border-0" data-testid={`badge-category-${post.id}`}>
                          {post.category}
                        </Badge>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <h4 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-cyan-700 transition-colors leading-tight"
                          data-testid={`text-title-${post.id}`}>
                        {post.title}
                      </h4>
                      <p className="text-gray-600 mb-6 line-clamp-3 text-lg leading-relaxed"
                         data-testid={`text-excerpt-${post.id}`}>
                        {post.excerpt}
                      </p>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-cyan-600 hover:text-cyan-700"
                                data-testid={`button-read-${post.id}`}>
                          Read Full Article
                          <ArrowRight className="h-5 w-5 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          )}

          <div
            
            
            
            className="text-center mt-16"
          >
            <Link href="/blog">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300" data-testid="button-view-all-insights">
                <BookOpen className="mr-2" size={20} />
                Explore All Market Insights
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Work Showcase - Premium Visual Gallery */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-gray-900 to-blue-900/20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            
            
            
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <Award className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-bold text-white uppercase tracking-wider">Our Work In Action</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Campaigns That <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Deliver Results</span></h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From Times Square to Coachella, we create unforgettable brand experiences that drive real business outcomes
            </p>
          </div>

          {/* Featured Campaign - Large Hero */}
          <div
            
            
            
            className="mb-12"
          >
            <div className="relative rounded-3xl overflow-hidden group">
              <div className="aspect-[21/9] relative">
                <Image
                  src="/images/case-studies/formula-1-4.jpg"
                  alt="Event staffing for Formula 1 Las Vegas Grand Prix brand activation by AirFresh Marketing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1280px) 100vw, 1280px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="px-4 py-1.5 bg-cyan-500 text-white text-sm font-bold rounded-full">Featured</span>
                    <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">Formula 1</span>
                  </div>
                  <h4 className="text-3xl md:text-5xl font-bold text-white mb-4">Las Vegas Grand Prix</h4>
                  <p className="text-lg text-gray-200 max-w-2xl mb-6">500+ event staff deployed across the Las Vegas Strip for motorsport's biggest spectacle</p>
                  <div className="flex flex-wrap gap-8">
                    <div>
                      <div className="text-3xl font-bold text-cyan-400">300K+</div>
                      <div className="text-sm text-gray-400">Fan Interactions</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-cyan-400">98%</div>
                      <div className="text-sm text-gray-400">Satisfaction Rate</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-cyan-400">10K+</div>
                      <div className="text-sm text-gray-400">VIP Guests</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Campaign Grid - 3 Featured */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                image: "/images/case-studies/microsoft.jpg",
                category: "Technology",
                title: "Microsoft",
                stat: "50K+ Interactions",
                description: "Brand activation & experiential marketing"
              },
              {
                image: "/images/case-studies/williams-racing-2.jpg",
                category: "Motorsports",
                title: "Williams Racing",
                stat: "100K+ Fans",
                description: "Premium hospitality & fan experiences"
              },
              {
                image: "/images/case-studies/beer-samplings-2.jpg",
                category: "Beverage",
                title: "National Sampling",
                stat: "2M+ Samples",
                description: "Nationwide sampling campaigns"
              }
            ].map((campaign, index) => (
              <div
                key={index}
                
                
                
                
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden h-full">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={campaign.image}
                      alt={`${campaign.title} experiential marketing campaign by AirFresh`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full">{campaign.category}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{campaign.stat}</div>
                      <h5 className="text-xl font-bold text-white mb-2">{campaign.title}</h5>
                      <p className="text-sm text-gray-300">{campaign.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            
            
            
            className="text-center mt-16"
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/portfolio">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold text-xl px-12 py-8 rounded-2xl shadow-2xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-300">
                  View Portfolio
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/case-studies" className="text-cyan-600 hover:text-cyan-700 font-semibold text-lg flex items-center gap-2">
                Browse Case Studies <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Top Markets & Resources */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">Event Staffing in Top U.S. Markets</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">Professional brand ambassadors, event staff, and experiential marketing teams in every major city</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
            {[
              { city: 'Los Angeles', slug: 'los-angeles' },
              { city: 'New York City', slug: 'new-york-city' },
              { city: 'Miami', slug: 'miami' },
              { city: 'Chicago', slug: 'chicago' },
              { city: 'Las Vegas', slug: 'las-vegas' },
              { city: 'Denver', slug: 'denver' },
              { city: 'Houston', slug: 'houston' },
              { city: 'Dallas', slug: 'dallas' },
              { city: 'Phoenix', slug: 'phoenix' },
              { city: 'Atlanta', slug: 'atlanta' },
              { city: 'Boston', slug: 'boston' },
              { city: 'Orlando', slug: 'orlando' },
              { city: 'Philadelphia', slug: 'philadelphia' },
              { city: 'New Orleans', slug: 'new-orleans' },
            ].map(market => (
              <Link key={market.slug} href={`/city-services/${market.slug}-brand-ambassadors`} className="group">
                <div className="p-4 bg-gray-50 rounded-xl text-center hover:bg-cyan-50 hover:shadow-md transition-all">
                  <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">{market.city}</div>
                  <div className="text-xs text-gray-500 mt-1">Brand Ambassadors</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mb-12">
            <Link href="/locations" className="inline-flex items-center gap-1 text-cyan-600 hover:text-cyan-700 font-medium text-sm">
              View All Locations <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <Link href="/guides/best-event-staffing-agency" className="group">
              <div className="p-5 border border-cyan-200 bg-cyan-50/50 rounded-xl hover:border-cyan-400 hover:shadow-md transition-all">
                <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Best Event Staffing Agency 2026</div>
                <div className="text-sm text-gray-500 mt-1">Comprehensive guide to choosing the right partner</div>
              </div>
            </Link>
            <Link href="/guides/event-staffing-101" className="group">
              <div className="p-5 border border-cyan-200 bg-cyan-50/50 rounded-xl hover:border-cyan-400 hover:shadow-md transition-all">
                <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Event Staffing 101 Guide</div>
                <div className="text-sm text-gray-500 mt-1">Everything you need to know about hiring event staff</div>
              </div>
            </Link>
            <Link href="/guides/brand-ambassador-hiring-guide" className="group">
              <div className="p-5 border border-cyan-200 bg-cyan-50/50 rounded-xl hover:border-cyan-400 hover:shadow-md transition-all">
                <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Brand Ambassador Hiring Guide</div>
                <div className="text-sm text-gray-500 mt-1">How to find, hire, and manage top brand ambassadors</div>
              </div>
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/pricing" className="group">
              <div className="p-5 border border-gray-200 rounded-xl hover:border-cyan-400 hover:shadow-md transition-all">
                <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Event Staffing Pricing</div>
                <div className="text-sm text-gray-500 mt-1">Transparent rates and packages</div>
              </div>
            </Link>
            <Link href="/technology" className="group">
              <div className="p-5 border border-gray-200 rounded-xl hover:border-cyan-400 hover:shadow-md transition-all">
                <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Our Technology Platform</div>
                <div className="text-sm text-gray-500 mt-1">GPS tracking and real-time reporting</div>
              </div>
            </Link>
            <Link href="/compare" className="group">
              <div className="p-5 border border-gray-200 rounded-xl hover:border-cyan-400 hover:shadow-md transition-all">
                <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Compare Staffing Agencies</div>
                <div className="text-sm text-gray-500 mt-1">See how we stack up against competitors</div>
              </div>
            </Link>
            <Link href="/event-staffing-near-me" className="group">
              <div className="p-5 border border-gray-200 rounded-xl hover:border-cyan-400 hover:shadow-md transition-all">
                <div className="font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">Event Staffing Near Me</div>
                <div className="text-sm text-gray-500 mt-1">Find local staff in 40+ cities</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Gradient */}
      <section className="relative py-32 bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            
            
            
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              How Can AirFresh Marketing<br />Transform Your Next Campaign?
            </h2>
            <p className="text-2xl mb-12 text-cyan-50 max-w-4xl mx-auto">
              Partner with the experiential marketing experts who've delivered 1000+ successful campaigns.
            </p>
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 font-bold text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300">
              <Link href="/get-quote?source=homepage&intent=final-campaign-cta">
                <Zap className="w-6 h-6 mr-3" />
                Start Your Campaign Today
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}// Deployment trigger Tue Jan 20 10:57:40 MST 2026
