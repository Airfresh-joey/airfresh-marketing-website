import HeroUnbelievable from "@/components/HeroUnbelievable";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Star, Heart, Users, Cog, Laptop, ShoppingCart, TrendingUp, Palette, Store, Building, Handshake, Play, Award, Target, BarChart3, Eye, Sparkles, ArrowRight, CheckCircle2, Zap, Globe, Shield } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export default function Home() {
  // Structured data for better SEO and LLM understanding
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AirFresh Marketing",
    "description": "Leading experiential marketing agency specializing in brand activations, event marketing, and customer engagement campaigns nationwide",
    "url": "https://airfreshmarketing.com",
    "logo": "https://airfreshmarketing.com/logo.jpg",
    "sameAs": [
      "https://www.linkedin.com/company/airfresh-marketing",
      "https://twitter.com/airfreshmarket"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-303-720-6060",
      "contactType": "customer service",
      "email": "hello@airfreshmarketing.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "CO"
    },
    "areaServed": "US",
    "serviceType": [
      "Experiential Marketing",
      "Brand Activation",
      "Event Marketing",
      "Customer Engagement",
      "Trade Show Marketing",
      "Product Sampling",
      "Brand Ambassador Services",
      "Pop-up Experiences",
      "Corporate Events",
      "Promotional Campaigns"
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
        title="AirFresh Marketing - Premier Experiential Marketing Agency | Brand Activations & Event Marketing"
        description="AirFresh Marketing is a leading experiential marketing agency specializing in brand activations, product sampling, trade shows, and customer engagement campaigns. Nationwide coverage with 5,000+ brand ambassadors."
        keywords="experiential marketing, brand activation, event marketing, promotional marketing, brand ambassadors, product sampling, trade show marketing, customer engagement, pop-up experiences, corporate events, marketing campaigns, brand awareness, experiential advertising, guerrilla marketing, field marketing"
        canonical="https://airfreshmarketing.com"
        structuredData={structuredData}
      />
      <HeroUnbelievable />

      {/* Video Section with Premium Styling */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-purple-50/30 to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              SEE US IN ACTION
            </span>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900">
              Experience the Magic
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Watch how we transform ordinary events into extraordinary brand experiences that captivate audiences and drive results.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
            <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl shadow-2xl overflow-hidden">
              <div className="aspect-video relative">
                <iframe 
                  src="https://player.vimeo.com/video/824804225?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=0&muted=1&background=0"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="AirFresh Marketing - Brand Experience Showcase"
                ></iframe>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                  <h4 className="text-2xl font-bold mb-2 text-white">Brand Experience Showcase</h4>
                  <p className="text-white/90">Featuring our recent campaigns across the nation</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section with Glass Morphism */}
      <section className="py-32 bg-white relative" id="services">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/20 to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent text-sm font-bold uppercase tracking-wider mb-4">
              WHAT WE DO
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
              Elevating Brands Through
              <span className="block bg-gradient-to-r from-purple-600 to-cyan-600 bg-clip-text text-transparent">
                Experiential Excellence
              </span>
            </h2>
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
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"></div>
                  <Card className="relative h-full bg-white/80 backdrop-blur-xl border-white/50 rounded-3xl p-10 hover:bg-white/90 transition-all duration-500 shadow-xl hover:shadow-2xl">
                    <CardContent className="p-0 text-center">
                      <div className="relative mb-8">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <div className="relative w-24 h-24 mx-auto bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="h-12 w-12 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-cyan-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-purple-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHY CHOOSE US</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">The AirFresh Advantage</h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-50 rounded-full flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Leave with knowledge, not just numbers</h3>
                <p className="text-gray-600 leading-relaxed">Our end-of-project success reports are packed with actionable data to guide future marketing efforts.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-6 bg-purple-50 rounded-full flex items-center justify-center">
                  <Eye className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Bring your brand to life with the five senses</h3>
                <p className="text-gray-600 leading-relaxed">Transform your products and services into a dynamic experience that they can see, hear, touch, taste and feel.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-50 rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Targeted marketing that BANGS!</h3>
                <p className="text-gray-600 leading-relaxed">Aiming for hard-to-reach niches? Wiggle your way into obscure markets with crafty campaigns.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHO IS AIRFRESH MARKETING FOR?</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">In 20+ years, we've helped</h2>
          <p className="text-2xl md:text-3xl mb-8 opacity-90">Over 300 brands connect with customers through unforgettable live events.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">300+</div>
              <div className="text-white/80 font-medium">Brands Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">20+</div>
              <div className="text-white/80 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
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
              <div className="w-24 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">Microsoft</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">Lyft</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg">Meta</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-sm">Clif Bar</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
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

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">So what's next?</h2>
          <p className="text-2xl mb-8">Just reach out.</p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Let's chat.</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
