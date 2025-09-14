import HeroAgencyVideo from "@/components/HeroAgencyVideo";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Star, Heart, Users, Cog, Laptop, ShoppingCart, TrendingUp, Palette, Store, Building, Handshake, Play, Award, Target, BarChart3, Eye, Sparkles, ArrowRight, CheckCircle2, Zap, Globe, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import LinkedInFollow from "@/components/LinkedInFollow";

export default function Home() {
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

  const clientLogos = [
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&w=120&h=60&fit=crop"
  ];

  return (
    <div className="pt-16">
      <SEO 
        title="Experiential Marketing Agency | Brand Ambassadors & Event Staffing - AirFresh"
        description="Experiential marketing agency offering brand ambassadors, event staffing, guerrilla marketing & brand activations nationwide."
        pageType="home"
        canonical="https://airfreshmarketing.com"
        structuredData={structuredData}
      />
      <HeroAgencyVideo />

      {/* LinkedIn Follow Section */}
      <section className="py-8 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-700 mb-4 font-medium">Connect with us on LinkedIn for the latest experiential marketing insights</p>
          <LinkedInFollow size="large" companyId="airfreshmarketing" />
        </div>
      </section>

      {/* Video Section - Clean Design */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">SEE US IN ACTION</h2>
            <h3 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
              What Makes <span className="text-primary font-normal">AirFresh Marketing</span> Different?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch how we transform ordinary events into extraordinary brand experiences.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video relative">
                <iframe 
                  src="https://player.vimeo.com/video/824804225?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=0&muted=1&background=0"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="AirFresh Marketing - Brand Experience Showcase"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section - AI Optimized with Question Headers */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHAT WE DO</h2>
            <h3 className="text-3xl md:text-4xl font-light text-gray-900">
              How Does AirFresh Marketing Create
              <span className="block text-primary font-normal">
                Unforgettable Brand Experiences?
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
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
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full bg-white border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-cyan-600 uppercase tracking-wide mb-4">TURNKEY SERVICES</h2>
            <h3 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
              What Services Do We Provide?
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Everything we do is done in-house and as an extension of your team. We strategize what's best for meeting your goals and then come together to crush them as a single unit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {turnkeyServices.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-0">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h4 className="font-bold text-gray-900 text-sm mb-2">{service.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - AI Optimized */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHY CHOOSE US</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Is AirFresh Marketing the Best Choice for Experiential Marketing?
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our experienced team of brand ambassadors delivers proven results across major cities nationwide.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">What Insights Will You Gain?</h3>
                <p className="text-gray-600 leading-relaxed">Our end-of-project success reports are packed with actionable data to guide future marketing efforts.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-50 rounded-full flex items-center justify-center">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">How Do We Create Multi-Sensory Experiences?</h3>
                <p className="text-gray-600 leading-relaxed">Transform your products and services into a dynamic experience that they can see, hear, touch, taste and feel.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-50 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">How Do We Reach Your Target Audience?</h3>
                <p className="text-gray-600 leading-relaxed">Aiming for hard-to-reach niches? Wiggle your way into obscure markets with crafty campaigns.</p>
              </CardContent>
            </Card>
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

      {/* Stats Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How Have We Helped Brands?</h2>
          <p className="text-2xl md:text-3xl mb-8 opacity-90">We've connected brands with customers through unforgettable live events nationwide.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
              <div className="text-white/80 font-medium">Brands Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-white/80 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-white/80 font-medium">Cities Nationwide</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-white/80 font-medium">Events Produced</div>
            </div>
          </div>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHAT PEOPLE ARE SAYING</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <img className="w-12 h-12 rounded-full mr-4" src={testimonial.avatar} alt={testimonial.name} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">TRUSTED BY LEADING BRANDS</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Client Portfolio</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">Google</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gradient-to-r from-gray-800 to-black rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">adidas</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">Microsoft</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">Lyft</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gradient-to-r from-primary/90 to-primary/70 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">Meta</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-sm">Clif Bar</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">Pepsi</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-sm">5-hour</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">NFL</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">Naked</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - AI Optimized */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            How Can AirFresh Marketing Transform Your Next Campaign?
          </h2>
          <p className="text-2xl mb-8">
            Partner with the experiential marketing experts who've delivered 1000+ successful campaigns.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Start Your Campaign</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
