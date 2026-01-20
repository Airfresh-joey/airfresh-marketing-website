import { motion } from "framer-motion";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  MapPin,
  Calendar,
  Users,
  Target,
  CheckCircle,
  TrendingUp,
  Award,
  Star
} from "lucide-react";

export default function PremierProteinCaseStudy() {
  const eventBreakdown = [
    { date: "April 26", location: "Belmont Pier, Long Beach", cases: 125 },
    { date: "April 27", location: "Our LA Voices Concert", cases: 125 },
    { date: "April 28", location: "Civic LAvia", cases: 125 },
    { date: "May 4", location: "Beach Life Festival", cases: 150 },
    { date: "May 6", location: "Cinco De Miles 5K", cases: 120 }
  ];

  const services = [
    "Street Team Activation",
    "Product Sampling",
    "Brand Ambassadors",
    "Mobile Scooter Marketing",
    "Event Activation",
    "Consumer Engagement"
  ];

  const keyResults = [
    "645 cases of product distributed across 5 activation days",
    "Cookies and Cream and Caramel were the most popular flavors",
    "Beach locations generated highest engagement rates",
    "Prize pack contests drove strong consumer participation",
    "Successfully reached broad demographic across Southern California"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SEO
        title="Premier Protein Case Study | SoCal Street Sampling Campaign"
        description="See how AirFresh Marketing executed a high-energy mobile sampling campaign for Premier Protein across Southern California, distributing 645 cases at beach events, festivals, and 5K races."
        canonical="https://airfreshmarketing.com/portfolio/premier-protein"
      />

      {/* Hero Section with Video */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <iframe
            src="https://player.vimeo.com/video/394084617?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1"
            className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
            style={{ border: 'none' }}
            allow="autoplay; fullscreen"
            title="Premier Protein Campaign Video"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/portfolio">
              <Button variant="ghost" className="mb-6 text-white hover:bg-white/20" data-testid="button-back">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Portfolio
              </Button>
            </Link>

            <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-white/20 text-white border-0 backdrop-blur-sm">
              <Award className="w-4 h-4 mr-1" />
              Featured Case Study
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">
              Premier Protein
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-6 drop-shadow">
              SoCal Street Sampling Campaign
            </p>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              April - May 2019 | Southern California
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Target, value: "645", label: "Cases Distributed" },
              { icon: Calendar, value: "5", label: "Activation Days" },
              { icon: MapPin, value: "5+", label: "Event Locations" },
              { icon: Users, value: "1000s", label: "Consumers Reached" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-lg text-gray-600 mb-6">
                Premier Protein wanted to increase brand awareness and drive trial among health-conscious consumers in Southern California. They needed a dynamic, mobile sampling solution that could reach target audiences at high-traffic events and locations.
              </p>

              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-lg text-gray-600 mb-6">
                AirFresh deployed a team of energetic brand ambassadors equipped with mobile scooters and sampling backpacks. Our street team hit the pavement at beach events, festivals, and 5K races - targeting moments when consumers were most receptive to trying a protein-packed beverage.
              </p>

              <div className="flex flex-wrap gap-2">
                {services.map((service) => (
                  <Badge key={service} variant="outline" className="px-3 py-1">
                    {service}
                  </Badge>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl" style={{ paddingTop: '56.25%', position: 'relative' }}>
                <iframe
                  src="https://player.vimeo.com/video/394084617?badge=0&autopause=0&player_id=0&app_id=58479"
                  className="absolute top-0 left-0 w-full h-full"
                  style={{ border: 'none' }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  title="Premier Protein Campaign Video"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Event Breakdown</h2>
            <p className="text-lg text-gray-600">
              Five strategic activation days across Southern California's premier events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventBreakdown.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{event.date}</div>
                        <div className="text-sm text-gray-500">2019</div>
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{event.location}</h3>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <Target className="w-4 h-4" />
                      {event.cases} cases distributed
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="mb-4 bg-green-100 text-green-800">
              <TrendingUp className="w-4 h-4 mr-1" />
              Campaign Results
            </Badge>
            <h2 className="text-3xl font-bold mb-4">Key Outcomes & Learnings</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {keyResults.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-green-50 rounded-xl"
              >
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flavor Insights */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-purple-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Consumer Insights</h2>
            <p className="text-lg text-gray-600">Top performing flavors during the campaign</p>
          </motion.div>

          <div className="flex justify-center gap-8">
            {[
              { flavor: "Cookies and Cream", rating: 5 },
              { flavor: "Caramel", rating: 5 }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="text-4xl mb-4">🥤</div>
                <h3 className="text-xl font-bold mb-2">{item.flavor}</h3>
                <div className="flex justify-center gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-2">Fan Favorite</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Hit the Streets?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create a sampling campaign that puts your product directly in consumers' hands.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto" data-testid="button-contact">
                  Get Started
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-primary" data-testid="button-portfolio">
                  View More Case Studies
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
