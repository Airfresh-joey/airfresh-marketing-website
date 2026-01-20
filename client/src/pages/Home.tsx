import HeroAgencyVideo from "@/components/HeroAgencyVideo";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Star, Heart, Users, Cog, Laptop, ShoppingCart, TrendingUp, Palette, Store, Building, Handshake, Play, Award, Target, BarChart3, Eye, Sparkles, ArrowRight, CheckCircle2, Zap, Globe, Shield, Calendar, Clock, BookOpen } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import LinkedInFollow from "@/components/LinkedInFollow";
import { useQuery } from "@tanstack/react-query";
import type { BlogPost } from "@shared/schema";
import { marketingAgencySchema } from "@/lib/structured-data";

export default function Home() {
  // Fetch recent blog posts
  const { data: blogPosts = [] } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog"],
  });

  // Get the 3 most recent blog posts
  const recentPosts = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);
  // Enhanced structured data for better SEO and LLM understanding
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://airfreshmarketing.com/#organization",
        "name": "AirFresh Marketing",
        "alternateName": "AirFresh Experiential Marketing Agency",
        "description": "Experiential marketing agency specializing in brand activations, event marketing, guerrilla marketing, and customer engagement campaigns nationwide.",
        "url": "https://airfreshmarketing.com",
        "logo": "/favicon.svg",
        "sameAs": [
          "https://www.linkedin.com/company/airfresh-marketing",
          "https://twitter.com/airfreshmarket",
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
          "streetAddress": "720 S. Colorado Blvd., Penthouse North",
          "addressLocality": "Denver",
          "addressRegion": "CO",
          "postalCode": "80246",
          "addressCountry": "US"
        },
        "areaServed": "US"
      },
      marketingAgencySchema,
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
            "name": "How much does experiential marketing cost for events?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Experiential marketing costs vary by campaign scope: product sampling ($5,000-$25,000), pop-up experiences ($25,000-$100,000), multi-city tours ($100,000+). AirFresh Marketing provides customized quotes with transparent pricing focused on delivering strong ROI."
            }
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

  const testimonials = [
    {
      name: "Aimee",
      role: "Ambassador",
      content: "Air Fresh Marketing is my FAVORITE experiential marketing company to represent across the nation. The staff is responsive and professional, and the events are always a blast!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Kristin Quinn",
      role: "Chief Growth Officer, Gravel",
      content: "Air Fresh Marketing has worked with us all across the country from Los Angeles to New York. Even when events come up last minute, they are able to make magic happen!",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Anonymous",
      role: "Glassdoor Review",
      content: "The company culture is top-notch, and the atmosphere always friendly and motivating. Everyone is engaged and helpful.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=50&h=50&fit=crop&crop=face"
    }
  ];

  return (
    <main className="pt-16">
      <SEO
        title="AirFresh Marketing | Experiential Marketing Agency"
        description="AirFresh Marketing is a premier experiential marketing agency specializing in Brand Activation, Event Marketing, and Pop-up Events. We create memorable brand experiences with professional brand ambassadors and guerrilla marketing campaigns nationwide."
        keywords="Brand Activation, Event Marketing, Pop-up Events, Experiential Marketing, Brand Ambassadors, Guerrilla Marketing, Product Sampling, Event Staffing, Trade Show Marketing, Field Marketing"
        pageType="home"
        canonical="https://airfreshmarketing.com"
        ogImage="https://airfreshmarketing.com/images/heroes/mac-cosmetics-experiential-marketing.jpeg"
        ogImageAlt="AirFresh Marketing experiential marketing brand activation event marketing nationwide"
        structuredData={structuredData}
      />
      <HeroAgencyVideo />

      {/* LinkedIn Follow Section */}
      <section className="relative py-12 bg-gradient-to-r from-cyan-50 via-white to-blue-50 overflow-hidden">
        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-800 mb-6 font-semibold text-lg">🚀 Connect with us on LinkedIn for the latest experiential marketing insights</p>
            <LinkedInFollow size="large" />
          </motion.div>
        </div>
      </section>

      {/* Video Section - Premium Design */}
      <section className="relative py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 rounded-full mb-6">
              <Play className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700 uppercase tracking-wide">SEE US IN ACTION</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Makes <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">AirFresh Marketing</span> Different?
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watch how we transform ordinary events into extraordinary brand experiences.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 p-1 rounded-2xl shadow-2xl">
              <div className="bg-white rounded-xl overflow-hidden">
                <div className="aspect-video relative">
                <iframe
                  src="https://player.vimeo.com/video/395306497?badge=0&autopause=0&player_id=0&app_id=58479#t=12s"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  title="Air Fresh Marketing and Visible Rock at Red Rocks!"
                ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section - Modern Premium Design */}
      <section className="relative py-32 bg-white overflow-hidden" id="services">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-100/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">WHAT WE DO</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              How Does AirFresh Marketing Create
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mt-2">
                Unforgettable Brand Experiences?
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We deliver experiential marketing campaigns designed to achieve higher engagement rates and increase purchase intent through immersive brand experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
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
              </motion.div>
            ))}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-8">
              <Cog className="w-5 h-5 text-white animate-spin-slow" />
              <span className="text-sm font-bold text-white uppercase tracking-wider">TURNKEY SERVICES</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Services Do We Provide?
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything we do is done in-house and as an extension of your team. We strategize what's best for meeting your goals and then come together to crush them as a single unit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {turnkeyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
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
              </motion.div>
            ))}
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-sm border border-cyan-200 rounded-full mb-8">
              <Award className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">WHY CHOOSE US</span>
            </div>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              Why Is <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">AirFresh Marketing</span> the Best Choice?
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our experienced team of brand ambassadors delivers proven results across major cities nationwide.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ scale: 1.03 }}
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ scale: 1.03 }}
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience Section - AI Optimized */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHO IS AIRFRESH MARKETING FOR?</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Who Benefits Most from Professional Experiential Marketing Services?
            </h3>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">How Have We Helped Brands?</h2>
            <p className="text-2xl md:text-3xl mb-16 text-cyan-50">We've connected brands with customers through unforgettable live events nationwide.</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {[
              { value: "100+", label: "Brands Served" },
              { value: "10+", label: "Years Experience" },
              { value: "25+", label: "Cities Nationwide" },
              { value: "1000+", label: "Events Produced" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-b from-white to-cyan-100 bg-clip-text text-transparent">{stat.value}</div>
                  <div className="text-cyan-100 font-semibold text-lg">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/contact">
                <Sparkles className="w-5 h-5 mr-2" />
                Start Your Success Story
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section - Premium Cards */}
      <section className="relative py-32 bg-gradient-to-b from-white via-gray-50/50 to-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full mb-8">
              <Star className="w-4 h-4 text-cyan-600" />
              <span className="text-sm font-bold text-gray-700 uppercase tracking-wider">WHAT PEOPLE ARE SAYING</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Client Success Stories</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-gradient-to-br from-white to-gray-50/50 p-10 border-0 shadow-xl hover:shadow-2xl transition-all duration-300 h-full relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-100/50 to-blue-100/50 rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-0 relative">
                    <div className="flex items-center mb-6">
                      <img className="w-14 h-14 rounded-full mr-4 border-2 border-cyan-200" src={testimonial.avatar} alt={`${testimonial.name} - ${testimonial.role} testimonial`} loading="lazy" />
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
              </motion.div>
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-8">
              <BookOpen className="w-4 h-4 text-white" />
              <span className="text-sm font-bold text-white uppercase tracking-wider">MARKET INSIGHTS</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Latest Experiential Marketing <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Insights</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Expert answers to your experiential marketing questions, from costs to strategies.
            </p>
          </motion.div>
          
          {recentPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
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
                </motion.div>
              ))}
            </div>
          )}
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <Link href="/blog">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-bold px-8 py-6 shadow-xl hover:shadow-2xl transition-all duration-300" data-testid="button-view-all-insights">
                <BookOpen className="mr-2" size={20} />
                Explore All Market Insights
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
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
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              How Can AirFresh Marketing<br />Transform Your Next Campaign?
            </h2>
            <p className="text-2xl mb-12 text-cyan-50 max-w-4xl mx-auto">
              Partner with the experiential marketing experts who've delivered 1000+ successful campaigns.
            </p>
            <Button asChild size="lg" className="bg-white text-cyan-600 hover:bg-gray-100 font-bold text-lg px-10 py-7 shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300" data-testid="button-get-strategy-audit-footer">
              <Link href="/contact">
                <Zap className="w-6 h-6 mr-3" />
                Get Your Strategy Audit
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
