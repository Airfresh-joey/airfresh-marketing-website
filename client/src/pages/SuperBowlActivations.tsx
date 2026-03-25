import { Link } from "wouter";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin, Calendar, Users, Star, ArrowRight, Trophy, Building,
  Sparkles, Target, Globe, Heart, Zap, Award, TrendingUp,
  Camera, Gift, Music, Megaphone, Shield, Ticket
} from "lucide-react";

const superBowlActivationTypes = [
  {
    icon: Gift,
    title: "Super Bowl Fan Experience Staffing",
    description: "The NFL's official Super Bowl Experience runs for a full week before the game. We staff interactive exhibits, player meet-and-greets, skills challenges, and sponsor activations within the fan experience.",
    staffing: "50-200 staff per day"
  },
  {
    icon: Megaphone,
    title: "Super Bowl Week Brand Activations",
    description: "The week before the Super Bowl transforms the host city into a marketing playground. Pop-up experiences, branded bars and restaurants, street teams, and guerrilla marketing activations throughout downtown.",
    staffing: "20-100 brand ambassadors"
  },
  {
    icon: Trophy,
    title: "Game Day Stadium Activations",
    description: "Inside the stadium on Super Bowl Sunday. Sponsor activations in the concourse, VIP hospitality suites, premium club level experiences, and branded game day moments.",
    staffing: "30-150 hospitality & promo staff"
  },
  {
    icon: Star,
    title: "VIP & Celebrity Events",
    description: "Super Bowl week is packed with invite-only parties, celebrity events, and high-profile gatherings. We provide premium hospitality staff, bartenders, and event teams.",
    staffing: "10-50 premium staff per event"
  },
  {
    icon: Music,
    title: "Concert & Entertainment Events",
    description: "From the halftime show setup to the dozens of concerts and music events throughout Super Bowl week, we staff venues, backstage operations, and branded VIP areas.",
    staffing: "20-100 event staff"
  },
  {
    icon: Camera,
    title: "Media & Content Production",
    description: "Support teams for broadcast operations, social media content capture, influencer activations, and behind-the-scenes documentation throughout Super Bowl week.",
    staffing: "10-30 production support staff"
  }
];

const recentSuperBowls = [
  { year: "Super Bowl LX (2026)", city: "Santa Clara, CA", venue: "Levi's Stadium", status: "Recently Completed" },
  { year: "Super Bowl LXI (2027)", city: "Houston, TX", venue: "NRG Stadium", status: "Planning Now" },
  { year: "Super Bowl LIX (2025)", city: "New Orleans, LA", venue: "Caesars Superdome", status: "Case Study Available" },
  { year: "Super Bowl LVIII (2024)", city: "Las Vegas, NV", venue: "Allegiant Stadium", status: "Case Study Available" }
];

export default function SuperBowlActivations() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Super Bowl Activation & Event Staffing Services",
        "description": "Professional event staffing for Super Bowl activations, fan experiences, and sponsor hospitality. Brand ambassadors, VIP staff, and experiential marketing teams for Super Bowl week.",
        "provider": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "url": "https://airfreshmarketing.com",
          "telephone": "+13037206060",
          "foundingDate": "2002",
          "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "value": "20000+"
          }
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "serviceType": "Super Bowl Event Staffing"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Sports", "item": "https://airfreshmarketing.com/sports" },
          { "@type": "ListItem", "position": 3, "name": "Super Bowl Activations", "item": "https://airfreshmarketing.com/sports/super-bowl-activations" }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Super Bowl Activation Agency | Event Staffing & Brand Ambassadors | AirFresh"
        description="Professional Super Bowl activation staffing for brands and sponsors. From Super Bowl Fan Experience to game day hospitality, we provide brand ambassadors, experiential teams, and VIP staff. 20+ years experience."
        keywords="Super Bowl activation agency, Super Bowl event staffing, Super Bowl brand ambassadors, Super Bowl experiential marketing, Super Bowl fan experience staffing, Super Bowl hospitality staff, Super Bowl week activations, Super Bowl sponsor staffing, Super Bowl marketing agency, Super Bowl brand activation"
        structuredData={structuredData}
        canonical="https://airfreshmarketing.com/sports/super-bowl-activations"
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-yellow-900 via-red-900 to-blue-900 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 left-1/3 w-64 h-64 bg-yellow-600/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-white/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="mb-6 bg-gradient-to-r from-yellow-500 to-red-500 text-white border-0 text-lg py-2 px-6">
                <Trophy className="w-5 h-5 mr-2" />
                The Biggest Stage in Sports
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Super Bowl
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-white to-red-400">
                  Activations
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
                The Super Bowl isn't just a game — it's a week-long marketing event that reaches 115 million viewers
                and transforms the host city into the world's biggest brand activation playground.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="bg-white text-red-900 hover:bg-gray-100 text-lg px-8 py-6">
                  <Link href="/contact">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Plan Your Super Bowl Activation
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                  <Link href="/portfolio">
                    <Trophy className="w-5 h-5 mr-2" />
                    View Our Work
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Globe, label: "115M+", sublabel: "TV Viewers" },
                  { icon: Users, label: "1M+", sublabel: "Fans in Host City" },
                  { icon: Calendar, label: "10 Days", sublabel: "of Activations" },
                  { icon: TrendingUp, label: "$500M+", sublabel: "Brand Spending" }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-4"
                  >
                    <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.label}</div>
                    <div className="text-white/70 text-sm">{stat.sublabel}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Study Highlight: Athletes First */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-0">
                  <Award className="w-4 h-4 mr-1" />
                  Featured Super Bowl Work
                </Badge>
                <h2 className="text-4xl font-bold mb-6">Athletes First Super Bowl Activation</h2>
                <p className="text-lg text-gray-600 mb-6">
                  AirFresh partnered with Athletes First — one of the NFL's premier talent agencies — to staff their
                  exclusive Super Bowl hospitality experience. Our team provided VIP hospitality staff, brand ambassadors,
                  and event operations support for a multi-day activation attended by NFL players, executives, and celebrities.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "Multi-Day Event", value: "3+ Days" },
                    { label: "VIP Guests", value: "500+" },
                    { label: "Staff Deployed", value: "25+" },
                    { label: "Client Rating", value: "5/5 Stars" }
                  ].map((metric) => (
                    <div key={metric.label} className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
                <Button asChild size="lg">
                  <Link href="/portfolio">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    View Full Case Study
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=800&fit=crop&q=80"
                    alt="Super Bowl VIP hospitality activation with professional event staff"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <Trophy className="w-6 h-6 text-yellow-600" />
                    <span className="font-bold">Super Bowl Proven</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Trusted by NFL talent agencies, Fortune 500 sponsors, and premier hospitality brands for Super Bowl activations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Choose AirFresh for Super Bowl */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Why Brands Trust AirFresh for Super Bowl Activations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The Super Bowl demands flawless execution on the biggest stage. Here's why leading brands and agencies partner with us.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Super Bowl Experience",
                  description: "We've staffed multiple Super Bowl activations, from intimate VIP events to large-scale fan experiences with thousands of attendees."
                },
                {
                  icon: Users,
                  title: "Local Market Talent",
                  description: "Our network of 20,000+ brand ambassadors means we source experienced local talent in any Super Bowl host city, anywhere in the US."
                },
                {
                  icon: Shield,
                  title: "NFL-Level Execution",
                  description: "Background-checked, trained, and professional staff who meet the elevated service standards that Super Bowl sponsors demand."
                },
                {
                  icon: Zap,
                  title: "Real-Time Management",
                  description: "Our proprietary platform provides GPS check-ins, photo reporting, and real-time communication for flawless event-day coordination."
                }
              ].map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow">
                    <benefit.icon className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Super Bowl Activation Types */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-red-100 text-red-800 border-0">
                <Target className="w-4 h-4 mr-1" />
                Activation Types
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Super Bowl Activations We Staff</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The Super Bowl offers more activation formats than any other single sporting event. We staff them all.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {superBowlActivationTypes.map((activation, i) => (
                <motion.div
                  key={activation.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                        <activation.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{activation.title}</h3>
                      <p className="text-gray-600 mb-4">{activation.description}</p>
                      <Badge variant="secondary" className="text-xs">
                        <Users className="w-3 h-3 mr-1" />
                        {activation.staffing}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Super Bowl Timeline */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-white/20 text-white border-0">
                <Calendar className="w-4 h-4 mr-1" />
                Planning Timeline
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Super Bowl Activation Planning Calendar</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Successful Super Bowl activations start months in advance. Here's the timeline brands should follow.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-500 via-red-500 to-blue-500 hidden lg:block"></div>

              <div className="space-y-8 lg:space-y-0">
                {[
                  { date: "6-8 Months Out", event: "Strategy & Planning", description: "Define activation goals, secure venues and permits, begin staffing partner selection. Book AirFresh early for best talent." },
                  { date: "4-6 Months Out", event: "Creative & Logistics", description: "Finalize activation concepts, order materials, begin staff recruitment and role-specific training development." },
                  { date: "2-3 Months Out", event: "Staff Recruitment", description: "Source and vet local talent in the host city. Begin background checks and preliminary brand training." },
                  { date: "2-4 Weeks Out", event: "Training & Rehearsal", description: "Product knowledge training, activation walkthroughs, and dress rehearsals at the venue." },
                  { date: "Super Bowl Week", event: "Execution", description: "7-10 days of activations. Daily briefings, real-time reporting, and on-site management from AirFresh." },
                  { date: "Post-Event", event: "Reporting & Analysis", description: "Comprehensive post-event reporting: impressions, samples, leads, social mentions, and ROI analysis." }
                ].map((item, i) => (
                  <motion.div
                    key={item.date}
                    initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`relative lg:flex items-center ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    <div className="lg:w-1/2 lg:px-8">
                      <div className={`bg-white/10 backdrop-blur-lg rounded-xl p-6 ${i % 2 === 0 ? 'lg:ml-auto lg:mr-8' : 'lg:mr-auto lg:ml-8'} max-w-md`}>
                        <Badge className="mb-2 bg-yellow-500 text-black">{item.date}</Badge>
                        <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                        <p className="text-white/70">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-gray-900 hidden lg:block"></div>
                    <div className="lg:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Super Bowls */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-0">
                <MapPin className="w-4 h-4 mr-1" />
                Super Bowl Venues
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Recent & Upcoming Super Bowls</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We staff Super Bowl activations in every host city. Start planning now for the next one.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentSuperBowls.map((sb, i) => (
                <motion.div
                  key={sb.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <Badge className={`mb-3 border-0 ${sb.status === 'Planning Now' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'}`}>
                        {sb.status}
                      </Badge>
                      <h3 className="text-lg font-bold mb-1">{sb.year}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <MapPin className="w-4 h-4" />
                        {sb.city}
                      </div>
                      <p className="text-sm text-gray-600">{sb.venue}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-yellow-600 via-red-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-white/20 text-white border-0 text-lg py-2 px-4">
                <Trophy className="w-5 h-5 mr-2" />
                Super Bowl LXI — Houston 2027
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for the Biggest Game?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                The best Super Bowl activations start planning 6-8 months in advance.
                Contact us now to secure top talent and lock in your activation strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6">
                  <Link href="/contact">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Start Planning Now
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                  <a href="tel:3037206060">
                    Call (303) 720-6060
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Related NFL Pages */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">More NFL Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "NFL Event Staffing", description: "Full-service staffing at all 32 stadiums", link: "/sports/nfl-event-staffing" },
                { name: "NFL Tailgate Marketing", description: "Pre-game activations that drive ROI", link: "/sports/nfl-tailgate-marketing" },
                { name: "NFL Draft Staffing", description: "Multi-day fan experience events", link: "/sports/nfl-draft-staffing" }
              ].map((event) => (
                <Link key={event.name} href={event.link}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div>
                        <h3 className="font-bold">{event.name}</h3>
                        <p className="text-gray-600 text-sm">{event.description}</p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-gray-400" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
