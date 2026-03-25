import { Link } from "wouter";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin, Calendar, Users, Star, ArrowRight, Trophy, Building,
  Sparkles, Target, Globe, Heart, Zap, Shield, Headphones, Smile,
  Utensils, Ticket, Flag, CheckCircle, TrendingUp, Award
} from "lucide-react";

const nflStadiums = [
  {
    name: "SoFi Stadium",
    location: "Los Angeles, CA",
    teams: ["Rams", "Chargers"],
    capacity: "70,240",
    staffingNeeds: ["Brand Ambassadors", "VIP Hospitality", "Sampling Teams", "Crowd Engagement"]
  },
  {
    name: "Allegiant Stadium",
    location: "Las Vegas, NV",
    teams: ["Raiders"],
    capacity: "65,000",
    staffingNeeds: ["Guest Services", "Suite Hospitality", "Promo Staff", "Brand Activations"]
  },
  {
    name: "AT&T Stadium",
    location: "Arlington, TX",
    teams: ["Cowboys"],
    capacity: "80,000",
    staffingNeeds: ["Experiential Teams", "Sampling Staff", "Hospitality", "Event Operations"]
  },
  {
    name: "MetLife Stadium",
    location: "East Rutherford, NJ",
    teams: ["Giants", "Jets"],
    capacity: "82,500",
    staffingNeeds: ["Brand Ambassadors", "Tailgate Teams", "VIP Staff", "Concourse Activations"]
  },
  {
    name: "Arrowhead Stadium",
    location: "Kansas City, MO",
    teams: ["Chiefs"],
    capacity: "76,416",
    staffingNeeds: ["Tailgate Marketing", "Sampling Teams", "Brand Reps", "Fan Engagement"]
  },
  {
    name: "Lambeau Field",
    location: "Green Bay, WI",
    teams: ["Packers"],
    capacity: "81,441",
    staffingNeeds: ["Cold-Weather Event Staff", "Sampling Teams", "Brand Ambassadors", "Hospitality"]
  },
  {
    name: "Mercedes-Benz Stadium",
    location: "Atlanta, GA",
    teams: ["Falcons"],
    capacity: "71,000",
    staffingNeeds: ["Concourse Activations", "Hospitality", "Digital Engagement", "Promo Staff"]
  },
  {
    name: "Levi's Stadium",
    location: "Santa Clara, CA",
    teams: ["49ers"],
    capacity: "68,500",
    staffingNeeds: ["Tech Activations", "VIP Services", "Brand Ambassadors", "Sampling Staff"]
  }
];

const staffingRoles = [
  {
    icon: Smile,
    title: "Brand Ambassadors",
    description: "Represent your brand at tailgates, concourses, and fan zones with trained, enthusiastic ambassadors who know your product.",
    count: "500+"
  },
  {
    icon: Utensils,
    title: "Sampling Teams",
    description: "Distribute product samples to engaged fans at tailgates and in-stadium activations with proper permitting and tracking.",
    count: "300+"
  },
  {
    icon: Star,
    title: "VIP Hospitality",
    description: "Premium service staff for luxury suites, sponsor hospitality tents, and corporate entertaining at NFL venues.",
    count: "200+"
  },
  {
    icon: Ticket,
    title: "Street Teams",
    description: "High-energy promotional teams for guerrilla marketing, flyer distribution, and fan engagement around stadiums.",
    count: "250+"
  },
  {
    icon: Target,
    title: "Experiential Staff",
    description: "Trained teams for interactive brand experiences, photo activations, AR/VR setups, and immersive fan zones.",
    count: "150+"
  },
  {
    icon: Headphones,
    title: "Event Operations",
    description: "Behind-the-scenes logistics, setup/teardown crews, and on-site coordination for seamless game day execution.",
    count: "200+"
  },
  {
    icon: Shield,
    title: "Guest Services",
    description: "Wayfinding, crowd management, and fan experience support throughout stadium grounds and parking areas.",
    count: "300+"
  },
  {
    icon: TrendingUp,
    title: "Data Collection",
    description: "Staff trained on lead capture, survey administration, and real-time reporting using our proprietary platform.",
    count: "100+"
  }
];

export default function NFLEventStaffing() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "NFL Event Staffing Services",
        "description": "Professional event staffing for NFL games, tailgates, and brand activations at all 32 stadiums. Brand ambassadors, sampling teams, and experiential marketing staff.",
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
        "serviceType": "Event Staffing",
        "offers": {
          "@type": "Offer",
          "description": "NFL event staffing and brand activation services",
          "url": "https://airfreshmarketing.com/contact"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Sports", "item": "https://airfreshmarketing.com/sports" },
          { "@type": "ListItem", "position": 3, "name": "NFL Event Staffing", "item": "https://airfreshmarketing.com/sports/nfl-event-staffing" }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="NFL Event Staffing | Brand Ambassadors & Game Day Staff | AirFresh Marketing"
        description="Professional NFL event staffing at all 32 stadiums. 20,000+ brand ambassadors, sampling teams, and experiential staff for tailgates, game day activations, and sponsor hospitality. 20+ years experience."
        keywords="NFL event staffing, NFL brand ambassadors, game day event staff, football event staffing, NFL tailgate staff, stadium brand activation, NFL promotional staff, sports event staffing agency, NFL game day marketing, football season staffing"
        structuredData={structuredData}
        canonical="https://airfreshmarketing.com/sports/nfl-event-staffing"
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-green-900 via-gray-900 to-blue-900 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 left-1/3 w-64 h-64 bg-green-600/20 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="mb-6 bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 text-lg py-2 px-6">
                <Trophy className="w-5 h-5 mr-2" />
                All 32 NFL Stadiums
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                NFL Event
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-white to-blue-400">
                  Staffing
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
                From tailgate activations to luxury suite hospitality, AirFresh provides the brand ambassadors
                and experiential marketing teams that power NFL game day experiences nationwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="bg-white text-green-900 hover:bg-gray-100 text-lg px-8 py-6">
                  <Link href="/contact">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get a Free Quote
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                  <Link href="/portfolio">
                    <Trophy className="w-5 h-5 mr-2" />
                    View NFL Case Studies
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Calendar, label: "20+ Years", sublabel: "Industry Experience" },
                  { icon: Users, label: "20,000+", sublabel: "Brand Ambassadors" },
                  { icon: Trophy, label: "1,000+", sublabel: "Campaigns Executed" },
                  { icon: Globe, label: "32 Stadiums", sublabel: "Nationwide Coverage" }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-4"
                  >
                    <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.label}</div>
                    <div className="text-white/70 text-sm">{stat.sublabel}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose AirFresh for NFL Staffing */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Why Brands Choose AirFresh for NFL Events</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Game day activations demand precision, energy, and experience. Here's why leading brands trust us to staff their NFL campaigns.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "20+ Years Experience",
                  description: "Two decades of sports marketing expertise across every NFL market, from preseason through the Super Bowl."
                },
                {
                  icon: Users,
                  title: "20,000+ Ambassadors",
                  description: "Access our nationwide network of vetted, trained brand ambassadors ready to activate at any stadium."
                },
                {
                  icon: Zap,
                  title: "Proprietary Platform",
                  description: "Real-time staff management, GPS check-ins, photo reporting, and ROI tracking through our tech platform."
                },
                {
                  icon: Target,
                  title: "Full-Service Execution",
                  description: "From staffing and training to logistics and reporting — we handle every detail so you can focus on results."
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
                    <benefit.icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* NFL Activation Types */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-green-100 text-green-800 border-0">
                <Target className="w-4 h-4 mr-1" />
                Activation Types
              </Badge>
              <h2 className="text-4xl font-bold mb-4">NFL Marketing Activations We Staff</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every NFL activation is different. We provide tailored staffing for every format, from parking lot sampling to luxury suite hospitality.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Tailgate Marketing",
                  description: "Branded footprints in parking lots and tailgate zones. Product sampling, games, photo ops, and fan engagement during the 4-6 hour pre-game window.",
                  link: "/sports/nfl-tailgate-marketing"
                },
                {
                  title: "Concourse Activations",
                  description: "Interactive brand experiences along stadium concourses where foot traffic peaks. Digital displays, product demos, and lead capture stations."
                },
                {
                  title: "Sponsor Hospitality",
                  description: "Premium staff for luxury suites, corporate tents, and VIP hospitality areas. Trained in high-touch service for sponsor entertaining."
                },
                {
                  title: "Fan Zone Experiences",
                  description: "Large-scale interactive zones featuring AR/VR, skills challenges, merchandise giveaways, and immersive brand storytelling."
                },
                {
                  title: "Product Sampling",
                  description: "Strategic product distribution at stadium entry points, concession areas, and designated sampling zones with real-time inventory tracking."
                },
                {
                  title: "Super Bowl Activations",
                  description: "The biggest stage in sports. Multi-day activations spanning Super Bowl week events, fan experiences, and game day itself.",
                  link: "/sports/super-bowl-activations"
                }
              ].map((activation, i) => (
                <motion.div
                  key={activation.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-3">{activation.title}</h3>
                      <p className="text-gray-600 mb-4">{activation.description}</p>
                      {activation.link && (
                        <Link href={activation.link}>
                          <span className="text-green-600 font-medium hover:text-green-700 flex items-center gap-1">
                            Learn More <ArrowRight className="w-4 h-4" />
                          </span>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stadiums Section */}
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
                Nationwide Coverage
              </Badge>
              <h2 className="text-4xl font-bold mb-4">NFL Stadiums We Staff</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We have experienced event staff in every NFL market, ready to activate on game day
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nflStadiums.map((stadium, i) => (
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
                        {stadium.location}
                      </div>
                      <h3 className="text-lg font-bold mb-1">{stadium.name}</h3>
                      <p className="text-sm text-gray-500 mb-3">{stadium.teams.join(" / ")} — {stadium.capacity} capacity</p>
                      <div className="flex flex-wrap gap-1">
                        {stadium.staffingNeeds.slice(0, 3).map(need => (
                          <Badge key={need} variant="secondary" className="text-xs">
                            {need}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Staffing Roles */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-green-100 text-green-800 border-0">
                <Users className="w-4 h-4 mr-1" />
                2,000+ NFL Positions
              </Badge>
              <h2 className="text-4xl font-bold mb-4">NFL Staffing Roles We Fill</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every NFL activation requires a different mix of talent. We staff every role from brand ambassador to event operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {staffingRoles.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all group">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <role.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge className="mb-3 bg-green-50 text-green-700 border-0">
                        {role.count} positions
                      </Badge>
                      <h3 className="text-lg font-bold mb-2">{role.title}</h3>
                      <p className="text-gray-600 text-sm">{role.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/careers">
                  View Open NFL Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* For Brands Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 bg-purple-100 text-purple-800 border-0">
                  <Target className="w-4 h-4 mr-1" />
                  For Brands & Agencies
                </Badge>
                <h2 className="text-4xl font-bold mb-6">Activate Your Brand at NFL Games</h2>
                <p className="text-lg text-gray-600 mb-6">
                  NFL fans spend an average of $200+ per game day and are among the most brand-loyal consumers in sports.
                  AirFresh puts your brand directly in front of 67,000+ engaged fans per game with professional, trained staff.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Brand ambassadors trained on your product messaging and activation goals",
                    "Sampling teams with proper stadium permitting and inventory tracking",
                    "Real-time photo reporting and GPS-verified check-ins via our platform",
                    "Post-event analytics including impressions, samples distributed, and leads captured",
                    "Scalable from single-game activations to full 18-week season campaigns"
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
                    Plan Your NFL Activation
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
                    src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=800&h=800&fit=crop&q=80"
                    alt="NFL stadium brand activation with engaged fans during game day"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <Trophy className="w-6 h-6 text-green-600" />
                    <span className="font-bold">NFL Proven</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    From regular season games to the Super Bowl, we've staffed 1,000+ sports activations across all 32 markets.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* NFL Season Timeline */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-green-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-white/20 text-white border-0">
                <Calendar className="w-4 h-4 mr-1" />
                NFL Season Calendar
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Year-Round NFL Activation Opportunities</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                The NFL marketing calendar extends far beyond the 18-week regular season
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { month: "April", event: "NFL Draft", description: "Multi-day fan experience with brand activations in the host city", link: "/sports/nfl-draft-staffing" },
                { month: "July-August", event: "Training Camps", description: "Open practices and fan events at team facilities across the country" },
                { month: "August", event: "Preseason", description: "First game day activations to test staffing and activation concepts" },
                { month: "Sept-January", event: "Regular Season", description: "18 weeks of game day activations at stadiums nationwide" },
                { month: "January", event: "NFL Playoffs", description: "Higher intensity, larger crowds, premium activation opportunities" },
                { month: "February", event: "Super Bowl", description: "The biggest stage in sports — week-long activations and game day", link: "/sports/super-bowl-activations" }
              ].map((item, i) => (
                <motion.div
                  key={item.event}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full bg-white/10 backdrop-blur-lg border-white/20 text-white">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-green-500 text-white border-0">{item.month}</Badge>
                      <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                      <p className="text-white/70 mb-3">{item.description}</p>
                      {item.link && (
                        <Link href={item.link}>
                          <span className="text-green-400 font-medium hover:text-green-300 flex items-center gap-1">
                            Learn More <ArrowRight className="w-4 h-4" />
                          </span>
                        </Link>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-green-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-white/20 text-white border-0 text-lg py-2 px-4">
                <Trophy className="w-5 h-5 mr-2" />
                NFL Season 2026
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Activate at NFL Games?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Whether you need 10 brand ambassadors for a single game or 500 staff across a full season,
                AirFresh has the experience and talent to deliver.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6">
                  <Link href="/contact">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get Your Free Quote
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
            <h2 className="text-2xl font-bold mb-8 text-center">Explore NFL Marketing Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "NFL Tailgate Marketing", description: "Pre-game activations and sampling", link: "/sports/nfl-tailgate-marketing" },
                { name: "Super Bowl Activations", description: "The biggest stage in sports marketing", link: "/sports/super-bowl-activations" },
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
