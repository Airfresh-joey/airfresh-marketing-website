import { Link } from "wouter";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin, Calendar, Users, Star, ArrowRight, Trophy, Building,
  Sparkles, Target, Heart, Zap, Award, TrendingUp,
  Camera, Gift, Megaphone, Shield, Ticket, Smile, Headphones
} from "lucide-react";

const draftActivationTypes = [
  {
    icon: Gift,
    title: "NFL Draft Experience Fan Zone",
    description: "The NFL's official Draft Experience is a massive free fan festival running all three days. We staff interactive exhibits, skills challenges, autograph sessions, and sponsor activations within the fan zone.",
    staffing: "50-200 staff per day"
  },
  {
    icon: Megaphone,
    title: "Brand Activations & Sampling",
    description: "Brands use the NFL Draft as a major activation platform. Product sampling, interactive games, giveaways, and branded photo experiences engage fans waiting for their team's pick.",
    staffing: "20-60 brand ambassadors"
  },
  {
    icon: Star,
    title: "VIP & Hospitality Events",
    description: "Draft night parties, prospect dinners, agent hospitality suites, and corporate entertaining events throughout draft weekend require premium service staff.",
    staffing: "10-40 hospitality staff"
  },
  {
    icon: Camera,
    title: "Red Carpet & Media Support",
    description: "The NFL Draft red carpet is a nationally televised event. We provide production support staff, media runners, and guest management teams for the main stage.",
    staffing: "15-30 event operations staff"
  },
  {
    icon: Ticket,
    title: "Registration & Access Control",
    description: "Managing credentials, fan registration, VIP access, and queue management for the Draft Theater and surrounding events.",
    staffing: "20-50 event operations staff"
  },
  {
    icon: Headphones,
    title: "Event Operations & Logistics",
    description: "Setup, teardown, logistics coordination, and on-site operations management throughout the multi-day event footprint.",
    staffing: "30-75 operations crew"
  }
];

const recentDraftLocations = [
  { year: "2026 NFL Draft", city: "Pittsburgh, PA", venue: "Multiple Downtown Venues", status: "Coming April 2026" },
  { year: "2027 NFL Draft", city: "TBD", venue: "To Be Announced", status: "Planning Ahead" },
  { year: "2025 NFL Draft", city: "Green Bay, WI", venue: "Lambeau Field", status: "Completed" },
  { year: "2024 NFL Draft", city: "Detroit, MI", venue: "Campus Martius Park", status: "Completed" }
];

const staffingRoles = [
  {
    icon: Smile,
    title: "Brand Ambassadors",
    description: "Trained product experts representing sponsor brands at interactive booths and sampling stations throughout the Draft Experience.",
    count: "100+"
  },
  {
    icon: Star,
    title: "VIP Hospitality Staff",
    description: "Premium service professionals for draft night parties, prospect events, and corporate hospitality suites.",
    count: "50+"
  },
  {
    icon: Ticket,
    title: "Registration & Access",
    description: "Credentialing, ticket scanning, queue management, and VIP access control across all draft venues.",
    count: "40+"
  },
  {
    icon: Camera,
    title: "Media & Production Support",
    description: "Support staff for broadcast operations, social media content, and red carpet production.",
    count: "25+"
  },
  {
    icon: Shield,
    title: "Guest Services",
    description: "Wayfinding, information desks, and fan assistance throughout the Draft Experience footprint.",
    count: "60+"
  },
  {
    icon: Headphones,
    title: "Event Operations",
    description: "Setup/teardown crews, logistics coordinators, and on-site management for all draft venues.",
    count: "75+"
  },
  {
    icon: Gift,
    title: "Sampling & Promo Teams",
    description: "Distribute product samples, branded merchandise, and promotional items to the hundreds of thousands of fans.",
    count: "80+"
  },
  {
    icon: Megaphone,
    title: "Street Teams",
    description: "High-energy teams roaming the draft perimeter and surrounding downtown areas to extend brand reach.",
    count: "30+"
  }
];

export default function NFLDraftStaffing() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "NFL Draft Event Staffing Services",
        "description": "Professional event staffing for the NFL Draft. Brand ambassadors, hospitality staff, and experiential marketing teams for the Draft Experience, sponsor activations, and VIP events.",
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
        "serviceType": "NFL Draft Event Staffing"
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://airfreshmarketing.com" },
          { "@type": "ListItem", "position": 2, "name": "Sports", "item": "https://airfreshmarketing.com/sports" },
          { "@type": "ListItem", "position": 3, "name": "NFL Draft Staffing", "item": "https://airfreshmarketing.com/sports/nfl-draft-staffing" }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="NFL Draft Staffing | Brand Ambassadors & Event Staff | AirFresh Marketing"
        description="Professional NFL Draft event staffing for sponsor activations, Draft Experience fan zone, and VIP hospitality. Brand ambassadors, sampling teams, and operations staff. 20+ years experience staffing major NFL events."
        keywords="NFL Draft event staffing, NFL Draft brand ambassadors, NFL Draft Experience staffing, NFL Draft activations, NFL Draft hospitality staff, NFL Draft fan zone staff, draft event marketing, NFL Draft sponsor activation, NFL Draft promotional staff, draft day event staffing"
        structuredData={structuredData}
        canonical="https://airfreshmarketing.com/sports/nfl-draft-staffing"
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 left-1/3 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="mb-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 text-lg py-2 px-6">
                <Trophy className="w-5 h-5 mr-2" />
                Multi-Day Fan Experience
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                NFL Draft
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Staffing
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
                The NFL Draft draws 300,000+ fans over three days, making it one of the NFL's largest
                live events outside the Super Bowl. We staff every aspect of the Draft Experience.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6">
                  <Link href="/contact">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Staff Your Draft Activation
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
                  { icon: Calendar, label: "3 Days", sublabel: "of Events" },
                  { icon: Users, label: "300,000+", sublabel: "Fan Attendance" },
                  { icon: Trophy, label: "257 Picks", sublabel: "7 Rounds" },
                  { icon: Globe, label: "50M+", sublabel: "TV Viewers" }
                ].map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-4"
                  >
                    <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.label}</div>
                    <div className="text-white/70 text-sm">{stat.sublabel}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why the NFL Draft Is a Marketing Opportunity */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Why the NFL Draft Is a Top-Tier Marketing Event</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The NFL Draft has evolved from a meeting room event into a massive public spectacle that rivals the Super Bowl for brand activation opportunities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Users,
                  title: "300K+ Live Fans",
                  description: "The free Draft Experience draws hundreds of thousands of fans over three days, creating massive foot traffic for brand activations."
                },
                {
                  icon: Heart,
                  title: "Peak Fan Passion",
                  description: "Draft day is when hope is highest — every team's fans are optimistic and emotionally invested, making them highly receptive to brand engagement."
                },
                {
                  icon: TrendingUp,
                  title: "Extended Engagement",
                  description: "Unlike a 3-hour game, the Draft spans three full days. Fans spend hours exploring the Draft Experience, giving brands extended exposure time."
                },
                {
                  icon: Camera,
                  title: "Social Amplification",
                  description: "NFL Draft content dominates social media for the entire weekend. Brand activations with shareable moments get organic amplification."
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
                    <benefit.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Draft Activation Types */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-0">
                <Target className="w-4 h-4 mr-1" />
                Activation Types
              </Badge>
              <h2 className="text-4xl font-bold mb-4">NFL Draft Activations We Staff</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From the official Draft Experience to private sponsor events, we staff every format at the NFL Draft.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {draftActivationTypes.map((activation, i) => (
                <motion.div
                  key={activation.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4">
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

        {/* Staffing Roles */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-green-100 text-green-800 border-0">
                <Users className="w-4 h-4 mr-1" />
                500+ Draft Positions
              </Badge>
              <h2 className="text-4xl font-bold mb-4">NFL Draft Staffing Roles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We fill every staffing role at the NFL Draft — from fan-facing brand ambassadors to behind-the-scenes operations.
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
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <role.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge className="mb-3 bg-blue-50 text-blue-700 border-0">
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
                  View Open Draft Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Draft Locations */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-purple-100 text-purple-800 border-0">
                <MapPin className="w-4 h-4 mr-1" />
                Draft Locations
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Recent & Upcoming NFL Draft Locations</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The NFL Draft rotates to a new city each year. We have talent ready in every market.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentDraftLocations.map((draft, i) => (
                <motion.div
                  key={draft.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <Badge className={`mb-3 border-0 ${draft.status.includes('Coming') ? 'bg-green-100 text-green-800' : draft.status === 'Planning Ahead' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-700'}`}>
                        {draft.status}
                      </Badge>
                      <h3 className="text-lg font-bold mb-1">{draft.year}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                        <MapPin className="w-4 h-4" />
                        {draft.city}
                      </div>
                      <p className="text-sm text-gray-600">{draft.venue}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
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
                  For Brands & Sponsors
                </Badge>
                <h2 className="text-4xl font-bold mb-6">Activate Your Brand at the NFL Draft</h2>
                <p className="text-lg text-gray-600 mb-6">
                  The NFL Draft Experience is a free, open-to-the-public event that draws passionate football fans
                  who are highly engaged and ready to interact with brands. With three full days of foot traffic,
                  it offers one of the best ROI opportunities in sports marketing.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Brand ambassadors trained on your specific product and activation goals",
                    "Multi-day staffing consistency — the same trained team throughout the Draft",
                    "Real-time reporting: impressions, samples, leads, and social engagement tracked daily",
                    "Proprietary platform with GPS check-ins and photo verification",
                    "Post-event analysis with actionable insights for future activations"
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
                    Plan Your Draft Activation
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
                    src="https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=800&h=800&fit=crop&q=80"
                    alt="NFL Draft fan experience with brand activations and engaged football fans"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <Award className="w-6 h-6 text-blue-600" />
                    <span className="font-bold">Draft Experienced</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Our team has staffed major NFL events including the Draft, Super Bowl, Pro Bowl, and regular season activations at all 32 stadiums.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-white/20 text-white border-0 text-lg py-2 px-4">
                <Trophy className="w-5 h-5 mr-2" />
                2026 NFL Draft — Pittsburgh
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Draft Day?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                The 2026 NFL Draft in Pittsburgh is coming up fast. Secure your staffing partner now
                to get the best local talent and ensure flawless execution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8 py-6">
                  <Link href="/contact">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Get a Draft Staffing Quote
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
                { name: "Super Bowl Activations", description: "The biggest brand activation in sports", link: "/sports/super-bowl-activations" }
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
