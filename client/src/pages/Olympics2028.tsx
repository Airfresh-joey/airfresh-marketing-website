import { Link } from "wouter";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin, Calendar, Users, Star, ArrowRight, Trophy, Building,
  Sparkles, Target, Globe, Heart, Zap, Medal, Flag, Camera,
  Utensils, Car, Ticket, Shield, Headphones, Smile
} from "lucide-react";

const olympicVenues = [
  {
    name: "SoFi Stadium",
    location: "Inglewood",
    events: ["Opening Ceremony", "Closing Ceremony", "Soccer Finals"],
    capacity: "70,000+",
    staffingNeeds: ["Guest Services", "VIP Hospitality", "Brand Ambassadors", "Crowd Management"]
  },
  {
    name: "LA Memorial Coliseum",
    location: "Los Angeles",
    events: ["Track & Field", "Marathon Finish"],
    capacity: "77,500",
    staffingNeeds: ["Guest Services", "Hospitality", "Wayfinding", "Media Support"]
  },
  {
    name: "Crypto.com Arena",
    location: "Downtown LA",
    events: ["Basketball", "Gymnastics"],
    capacity: "20,000",
    staffingNeeds: ["VIP Services", "Suite Hospitality", "Guest Experience", "Ushers"]
  },
  {
    name: "Dignity Health Sports Park",
    location: "Carson",
    events: ["Tennis", "Cycling"],
    capacity: "27,000",
    staffingNeeds: ["Ticket Scanning", "Guest Services", "Concourse Staff", "Brand Activation"]
  },
  {
    name: "Long Beach Convention Center",
    location: "Long Beach",
    events: ["Volleyball", "Water Polo", "BMX"],
    capacity: "12,000",
    staffingNeeds: ["Registration", "Hospitality", "Wayfinding", "VIP Services"]
  },
  {
    name: "Rose Bowl",
    location: "Pasadena",
    events: ["Soccer Matches"],
    capacity: "90,888",
    staffingNeeds: ["Guest Services", "Field Staff", "Hospitality", "Security Support"]
  },
  {
    name: "Pauley Pavilion",
    location: "UCLA Campus",
    events: ["Judo", "Wrestling"],
    capacity: "13,800",
    staffingNeeds: ["Event Staff", "Media Support", "VIP Services", "Guest Experience"]
  },
  {
    name: "Santa Monica Beach",
    location: "Santa Monica",
    events: ["Beach Volleyball", "Triathlon"],
    capacity: "Outdoor Venue",
    staffingNeeds: ["Beach Staff", "Brand Ambassadors", "Hospitality", "Crowd Control"]
  }
];

const staffingRoles = [
  {
    icon: Smile,
    title: "Guest Experience",
    description: "Welcome guests from around the world, provide wayfinding, and ensure positive experiences at every touchpoint.",
    count: "5,000+"
  },
  {
    icon: Utensils,
    title: "Hospitality Staff",
    description: "Premium catering, VIP suites, athlete lounges, and corporate hospitality services.",
    count: "3,000+"
  },
  {
    icon: Star,
    title: "Brand Ambassadors",
    description: "Represent Olympic sponsors at activations, sampling stations, and interactive experiences.",
    count: "2,000+"
  },
  {
    icon: Ticket,
    title: "Ticketing & Access",
    description: "Credential verification, ticket scanning, queue management, and access control.",
    count: "2,500+"
  },
  {
    icon: Camera,
    title: "Media & Press Support",
    description: "Assist media operations, press conferences, and broadcast production teams.",
    count: "500+"
  },
  {
    icon: Headphones,
    title: "Event Operations",
    description: "Behind-the-scenes operations, logistics support, and venue coordination.",
    count: "1,500+"
  },
  {
    icon: Car,
    title: "Transportation",
    description: "Shuttle coordination, VIP transportation, and parking management.",
    count: "800+"
  },
  {
    icon: Shield,
    title: "Safety & Compliance",
    description: "Support security operations, health protocols, and crowd safety.",
    count: "1,200+"
  }
];

const sponsors = [
  "Coca-Cola", "Samsung", "Toyota", "Visa", "Airbnb", "Intel",
  "Alibaba", "Omega", "P&G", "Panasonic", "NBC Universal", "Comcast"
];

const timeline = [
  { date: "2025", event: "Sponsor Activation Planning", description: "Major brands begin staffing partner selection" },
  { date: "Early 2026", event: "Venue Staff Recruitment", description: "Large-scale recruitment for venue operations" },
  { date: "Late 2026", event: "Training Programs Begin", description: "Comprehensive training for all staff roles" },
  { date: "Spring 2027", event: "Test Events", description: "Pre-Olympic events to test operations" },
  { date: "Early 2028", event: "Final Preparations", description: "Last round of hiring and orientation" },
  { date: "July 2028", event: "The Games Begin", description: "Opening Ceremony kicks off 17 days of competition" }
];

export default function Olympics2028() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "2028 Summer Olympics - Los Angeles",
    "description": "Professional event staffing services for the 2028 Los Angeles Summer Olympics. Brand ambassadors, hospitality staff, and experiential marketing teams.",
    "startDate": "2028-07-14",
    "endDate": "2028-07-30",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Los Angeles, California",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "addressCountry": "US"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "AirFresh Marketing",
      "url": "https://airfreshmarketing.com"
    },
    "offers": {
      "@type": "Offer",
      "description": "Professional event staffing services",
      "url": "https://airfreshmarketing.com/contact"
    }
  };

  return (
    <>
      <SEO
        title="Olympics 2028 Los Angeles Staffing | Event Staff & Brand Ambassadors | AirFresh"
        description="Be part of history at the 2028 Los Angeles Olympics. AirFresh provides professional event staffing, brand ambassadors, and hospitality teams for Olympic venues, sponsor activations, and hospitality experiences."
        keywords="olympics 2028 staffing, los angeles olympics staff, olympic event staff, olympics brand ambassadors, 2028 games staffing, olympic hospitality jobs, la olympics jobs, olympics sponsor activation"
        structuredData={structuredData}
        canonical="https://airfreshmarketing.com/events/olympics-2028-los-angeles"
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 overflow-hidden">
          {/* Olympic Rings Animation Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/4 -left-20 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-green-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 left-1/3 w-64 h-64 bg-red-500/20 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-black/20 rounded-full blur-3xl"></div>
          </div>

          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569517282132-25d22f4573e6?w=1920')] bg-cover bg-center opacity-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <Badge className="mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0 text-lg py-2 px-6">
                <Medal className="w-5 h-5 mr-2" />
                Coming July 2028
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Los Angeles Olympics
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-blue-400">
                  2028
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10">
                Be part of history. AirFresh is staffing the world's greatest sporting event
                with 15,000+ brand ambassadors, hospitality staff, and experiential teams.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-gray-100 text-lg px-8 py-6">
                  <Link href="/careers">
                    <Users className="w-5 h-5 mr-2" />
                    Join Our Olympics Team
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white/20 text-lg px-8 py-6">
                  <Link href="/contact">
                    <Building className="w-5 h-5 mr-2" />
                    Partner With Us
                  </Link>
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  { icon: Calendar, label: "17 Days", sublabel: "of Competition" },
                  { icon: Trophy, label: "32 Sports", sublabel: "328 Events" },
                  { icon: Globe, label: "200+ Nations", sublabel: "Represented" },
                  { icon: Users, label: "15,000+", sublabel: "Staff Needed" }
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

        {/* Why Work the Olympics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Why Work the 2028 Olympics?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A once-in-a-lifetime opportunity to be part of the world's largest sporting event
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Star,
                  title: "Resume Builder",
                  description: "Add world-class event experience that sets you apart in the industry forever."
                },
                {
                  icon: Globe,
                  title: "Global Network",
                  description: "Connect with professionals from around the world and build lasting relationships."
                },
                {
                  icon: Heart,
                  title: "Historic Moment",
                  description: "Be part of LA's third Olympics and witness athletic excellence firsthand."
                },
                {
                  icon: Zap,
                  title: "Premium Pay",
                  description: "Competitive wages for qualified staff with potential for extended contracts."
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

        {/* Venues Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-0">
                <MapPin className="w-4 h-4 mr-1" />
                Olympic Venues
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Where We'll Be Staffing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From the iconic Coliseum to Santa Monica Beach, we're providing staff across all major Olympic venues
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {olympicVenues.map((venue, i) => (
                <motion.div
                  key={venue.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <MapPin className="w-4 h-4" />
                        {venue.location}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{venue.name}</h3>
                      <div className="text-sm text-gray-600 mb-3">
                        <span className="font-medium">Events:</span> {venue.events.join(", ")}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {venue.staffingNeeds.slice(0, 3).map(need => (
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
                15,000+ Positions
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Roles We're Staffing</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From guest experience to VIP hospitality, we're hiring across all categories
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
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                  View All Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Timeline */}
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
                Hiring Timeline
              </Badge>
              <h2 className="text-4xl font-bold mb-4">Path to the Olympics</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Get ahead of the competition by registering early
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-yellow-500 via-blue-500 to-purple-500 hidden lg:block"></div>

              <div className="space-y-8 lg:space-y-0">
                {timeline.map((item, i) => (
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
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-gray-900 hidden lg:block"></div>
                    <div className="lg:w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl font-bold mb-4">Official Olympic Partners</h2>
              <p className="text-gray-600">
                We work with major brands activating at the Olympics
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-8 items-center">
              {sponsors.map((sponsor, i) => (
                <motion.div
                  key={sponsor}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="text-gray-400 font-semibold text-lg"
                >
                  {sponsor}
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
                  For Brands & Sponsors
                </Badge>
                <h2 className="text-4xl font-bold mb-6">Activate Your Brand at the Olympics</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Whether you're an official Olympic partner or activating nearby, AirFresh provides
                  the experiential marketing teams you need to make an impact during the games.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Brand ambassadors trained on your product messaging",
                    "Experiential marketing teams for sampling and demos",
                    "Hospitality staff for VIP events and watch parties",
                    "Street teams for guerrilla marketing campaigns",
                    "Trade show booth staff for sponsor pavilions"
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
                    Discuss Your Olympics Activation
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
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop&q=80"
                    alt="Brand activation at major event"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                  <div className="flex items-center gap-3 mb-2">
                    <Flag className="w-6 h-6 text-blue-600" />
                    <span className="font-bold">Olympics Certified</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Our team has staffed major global sporting events including World Cups and previous Olympics.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-white/20 text-white border-0 text-lg py-2 px-4">
                <Medal className="w-5 h-5 mr-2" />
                Registration Now Open
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Be Part of History?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Don't miss your chance to work the 2028 Los Angeles Olympics. Register now to be among
                the first considered for positions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
                  <Link href="/careers">
                    <Users className="w-5 h-5 mr-2" />
                    Apply for Olympics Positions
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

        {/* Related Events */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Other Major LA Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "LA Auto Show", month: "November", link: "/events/la-auto-show" },
                { name: "Grammy Awards", month: "February", link: "/events/grammy-awards" },
                { name: "Coachella", month: "April", link: "/events/coachella" }
              ].map((event) => (
                <Link key={event.name} href={event.link}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="p-6 flex items-center justify-between">
                      <div>
                        <h3 className="font-bold">{event.name}</h3>
                        <p className="text-gray-600 text-sm">{event.month}</p>
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
