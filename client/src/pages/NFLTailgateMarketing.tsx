import { Link } from "wouter";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin, Calendar, Users, Star, ArrowRight, Trophy, Building,
  Sparkles, Target, Heart, Zap, Award, TrendingUp,
  Beer, Camera, Megaphone, Gift, Music, Smartphone
} from "lucide-react";

const tailgateActivations = [
  {
    icon: Gift,
    title: "Product Sampling Stations",
    description: "Branded 10x10 or 10x20 tents with trained sampling teams distributing food, beverage, or CPG products. Includes cooler setups, branded signage, and waste management.",
    staffing: "4-8 brand ambassadors per station",
    budget: "$8K - $25K per game"
  },
  {
    icon: Camera,
    title: "Branded Photo Experiences",
    description: "Interactive photo ops with team-themed props, green screens, or AR overlays. Instant social sharing with branded frames drives organic reach.",
    staffing: "3-5 staff (photographer + engagement team)",
    budget: "$10K - $30K per game"
  },
  {
    icon: Trophy,
    title: "Skills Challenges & Games",
    description: "Football throwing accuracy, field goal kicks, cornhole tournaments, and speed challenges. Branded prizes and leaderboards drive competition and dwell time.",
    staffing: "5-10 staff per activation",
    budget: "$15K - $40K per game"
  },
  {
    icon: Beer,
    title: "Sponsored Tailgate Setups",
    description: "Full branded tailgate experiences with grills, seating, TVs, and catering. Create the ultimate fan hangout that associates your brand with game day culture.",
    staffing: "8-15 staff (hospitality + brand reps)",
    budget: "$25K - $75K per game"
  },
  {
    icon: Smartphone,
    title: "Mobile Touring Vehicles",
    description: "Wrapped trucks, trailers, or converted shipping containers as mobile brand experiences. Move between stadiums throughout the season for maximum reach.",
    staffing: "6-12 staff per vehicle",
    budget: "$50K - $150K per tour stop"
  },
  {
    icon: Megaphone,
    title: "Street Teams & Guerrilla",
    description: "High-energy promotional teams roaming parking lots with branded giveaways, coupons, and product samples. Maximize reach across the entire tailgate area.",
    staffing: "10-20 brand ambassadors",
    budget: "$5K - $15K per game"
  },
  {
    icon: Music,
    title: "DJ & Entertainment Activations",
    description: "Branded DJ setups, live music stages, or entertainment zones that draw crowds and create shareable moments. Pair with sampling for maximum impact.",
    staffing: "5-10 staff + entertainment talent",
    budget: "$20K - $50K per game"
  },
  {
    icon: Zap,
    title: "Charging & WiFi Lounges",
    description: "Utility-driven activations providing phone charging and WiFi access. High dwell time means extended brand exposure and data capture opportunities.",
    staffing: "3-5 staff",
    budget: "$10K - $25K per game"
  }
];

const topTailgateStadiums = [
  { name: "Arrowhead Stadium", city: "Kansas City", team: "Chiefs", why: "Legendary tailgate culture, 4-6 hour pre-game window" },
  { name: "Highmark Stadium", city: "Buffalo", team: "Bills", why: "Bills Mafia tailgating is a national phenomenon" },
  { name: "Lambeau Field", city: "Green Bay", team: "Packers", why: "Historic venue with devoted fan base and strong traditions" },
  { name: "AT&T Stadium", city: "Arlington", team: "Cowboys", why: "Massive parking lots, 80,000+ capacity, Texas hospitality" },
  { name: "Lincoln Financial Field", city: "Philadelphia", team: "Eagles", why: "Passionate fans with intense pre-game energy" },
  { name: "SoFi Stadium", city: "Los Angeles", team: "Rams/Chargers", why: "Premium market, affluent demographics, year-round weather" }
];

export default function NFLTailgateMarketing() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "NFL Tailgate Marketing & Brand Activation Services",
        "description": "Professional tailgate marketing staffing for NFL games. Brand ambassadors, sampling teams, and experiential staff for pre-game activations at all 32 stadiums.",
        "provider": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "url": "https://airfreshmarketing.com",
          "telephone": "+13037206060",
          "foundingDate": "2002"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "serviceType": "Tailgate Marketing Staffing"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Sports", "item": "https://airfreshmarketing.com/sports" },
          { "@type": "ListItem", "position": 3, "name": "NFL Tailgate Marketing", "item": "https://airfreshmarketing.com/sports/nfl-tailgate-marketing" }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="NFL Tailgate Marketing | Game Day Brand Activations & Staffing | AirFresh"
        description="NFL tailgate marketing that drives real ROI. Brand ambassadors, sampling teams, and experiential staff for pre-game activations at all 32 stadiums. 300+ NFL activations executed. Get a free quote."
        keywords="tailgate marketing, NFL tailgate brand ambassadors, tailgate marketing ideas for brands, game day brand activation, NFL tailgate sampling, tailgate activation staffing, NFL parking lot marketing, pre-game brand experience, tailgate marketing agency, football tailgate promotions"
        structuredData={structuredData}
        canonical="https://airfreshmarketing.com/sports/nfl-tailgate-marketing"
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-orange-900 via-red-900 to-gray-900 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-yellow-500/15 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 left-1/3 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="mb-6 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 text-lg py-2 px-6">
                <Trophy className="w-5 h-5 mr-2" />
                NFL Game Day Marketing
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                NFL Tailgate
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400">
                  Marketing
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
                67,000+ fans. 4-6 hours of pre-game engagement. The NFL tailgate is the most powerful
                sampling and brand activation window in sports — and we've executed 300+ of them.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="bg-white text-orange-900 hover:bg-gray-100 text-lg px-8 py-6">
                  <Link href="/contact">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Plan Your Tailgate Activation
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                  <Link href="/sports/nfl-event-staffing">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    All NFL Services
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Trophy, label: "300+", sublabel: "NFL Activations" },
                  { icon: Users, label: "67,000+", sublabel: "Avg. Game Attendance" },
                  { icon: Calendar, label: "4-6 Hours", sublabel: "Pre-Game Window" },
                  { icon: TrendingUp, label: "20-30%", sublabel: "Purchase Intent Lift" }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-4"
                  >
                    <stat.icon className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.label}</div>
                    <div className="text-white/70 text-sm">{stat.sublabel}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Tailgate Marketing Works */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Why Tailgate Marketing Outperforms Every Other Channel</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unlike digital ads fans scroll past, tailgate marketing puts your brand directly into the hands of engaged consumers during a peak emotional experience.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Affect Transfer",
                  description: "Positive game day emotions transfer directly to your brand. Fans associate your product with excitement, community, and celebration."
                },
                {
                  icon: Users,
                  title: "Captive Audience",
                  description: "Fans arrive 4-6 hours early with nothing to do but socialize. They actively seek out brand interactions and free samples."
                },
                {
                  icon: Camera,
                  title: "Social Amplification",
                  description: "One in-person activation generates thousands of organic impressions as fans share photos and videos of their experience."
                },
                {
                  icon: TrendingUp,
                  title: "Measurable ROI",
                  description: "Nielsen data shows 20-30% lift in purchase intent from sampling in high-engagement environments. NFL tailgates are peak engagement."
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
                    <benefit.icon className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Tailgate Activation Types */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-orange-100 text-orange-800 border-0">
                <Target className="w-4 h-4 mr-1" />
                Activation Formats
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Tailgate Activations That Drive ROI</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Not all tailgate activations are created equal. Here are the formats we've seen deliver the strongest results across 300+ NFL events.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tailgateActivations.map((activation, i) => (
                <motion.div
                  key={activation.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <activation.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{activation.title}</h3>
                          <p className="text-gray-600 mb-4">{activation.description}</p>
                          <div className="flex flex-wrap gap-3">
                            <Badge variant="secondary" className="text-xs">
                              <Users className="w-3 h-3 mr-1" />
                              {activation.staffing}
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              <TrendingUp className="w-3 h-3 mr-1" />
                              {activation.budget}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Tailgate Stadiums */}
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
                Top Venues
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Best NFL Stadiums for Tailgate Marketing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                While we staff tailgates at all 32 stadiums, these venues offer the strongest fan engagement and activation opportunities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topTailgateStadiums.map((stadium, i) => (
                <motion.div
                  key={stadium.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <MapPin className="w-4 h-4" />
                        {stadium.city}
                      </div>
                      <h3 className="text-lg font-bold mb-1">{stadium.name}</h3>
                      <Badge className="mb-3 bg-orange-50 text-orange-700 border-0">{stadium.team}</Badge>
                      <p className="text-gray-600 text-sm">{stadium.why}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* For Brands Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 bg-purple-100 text-purple-800 border-0">
                  <Target className="w-4 h-4 mr-1" />
                  The AirFresh Difference
                </Badge>
                <h2 className="text-4xl font-bold mb-6">Why Brands Choose Us Over Generic Staffing Agencies</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Most staffing agencies send bodies. We send trained brand ambassadors who understand your product,
                  your goals, and the unique dynamics of NFL tailgate culture. That's the difference between burning
                  budget and driving measurable ROI.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Pre-event product training for every brand ambassador on your activation",
                    "Proprietary platform with GPS check-ins, photo reporting, and real-time inventory tracking",
                    "20+ years of relationships with stadium operations and permitting offices",
                    "Post-event analytics: impressions, samples distributed, leads captured, social mentions",
                    "Dedicated account manager with NFL activation experience on every program"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild size="lg">
                  <Link href="/contact">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get a Tailgate Marketing Quote
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
                    src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?w=800&h=800&fit=crop&q=80"
                    alt="NFL tailgate marketing activation with brand ambassadors and engaged fans"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-6 h-6 text-orange-600" />
                    <span className="font-bold">300+ NFL Events</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    We've executed tailgate activations at every NFL stadium for brands including major CPG, beverage, and tech companies.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-white/20 text-white border-0 text-lg py-2 px-4">
                <Trophy className="w-5 h-5 mr-2" />
                Game Day Is Calling
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Own the Tailgate?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                The 2026 NFL season is your opportunity to put your brand in front of millions of engaged fans.
                Let's build your tailgate marketing program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-6">
                  <Link href="/contact">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Start Planning Your Activation
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
                { name: "NFL Event Staffing", description: "Full-service NFL staffing at all 32 stadiums", link: "/sports/nfl-event-staffing" },
                { name: "Super Bowl Activations", description: "The biggest brand activation opportunity in sports", link: "/sports/super-bowl-activations" },
                { name: "NFL Draft Staffing", description: "Multi-day fan experience staffing", link: "/sports/nfl-draft-staffing" }
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
