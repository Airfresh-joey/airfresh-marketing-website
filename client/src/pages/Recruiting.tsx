import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Users, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Briefcase, 
  Star, 
  ArrowRight, 
  CheckCircle,
  Clock,
  Globe,
  Heart,
  Zap
} from "lucide-react";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Work when it suits you. Choose events that fit your lifestyle and availability."
  },
  {
    icon: Globe,
    title: "Diverse Clients",
    description: "Represent top brands across tech, beauty, food & beverage, automotive, and more."
  },
  {
    icon: MapPin,
    title: "Nationwide Events",
    description: "Work at exciting events across the country, from major cities to local venues."
  },
  {
    icon: DollarSign,
    title: "Competitive Pay",
    description: "Earn great hourly rates with opportunities for bonuses and tips."
  },
  {
    icon: Star,
    title: "Career Growth",
    description: "Develop valuable skills in marketing, sales, and customer engagement."
  },
  {
    icon: Heart,
    title: "Great Team Culture",
    description: "Join a supportive community of passionate brand ambassadors."
  }
];

const openPositions = [
  {
    title: "Brand Ambassador",
    location: "Los Angeles, CA",
    type: "Part-time / Flexible",
    description: "Represent premium brands at retail locations and events throughout LA."
  },
  {
    title: "Event Staff",
    location: "New York, NY",
    type: "Part-time / Flexible",
    description: "Support high-profile brand activations and experiential marketing events."
  },
  {
    title: "Promotional Model",
    location: "Miami, FL",
    type: "Part-time / Flexible",
    description: "Engage consumers at trade shows, conventions, and product launches."
  },
  {
    title: "Street Team Member",
    location: "Chicago, IL",
    type: "Part-time / Flexible",
    description: "Execute guerrilla marketing campaigns and grassroots brand awareness."
  },
  {
    title: "Brand Ambassador",
    location: "Denver, CO",
    type: "Part-time / Flexible",
    description: "Lead product sampling and demonstration programs for national brands."
  },
  {
    title: "Event Coordinator",
    location: "Austin, TX",
    type: "Part-time / Flexible",
    description: "Manage on-site logistics and team coordination for brand events."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export default function Recruiting() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": "Brand Ambassador",
    "description": "Join AirFresh Marketing as a brand ambassador and represent top brands at exciting events nationwide.",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "AirFresh Marketing",
      "sameAs": "https://airfreshmarketing.com"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    },
    "employmentType": "PART_TIME"
  };

  return (
    <>
      <SEO
        title="Join Our Team | Careers at AirFresh Marketing"
        description="Become a brand ambassador with AirFresh Marketing. Flexible schedules, competitive pay, and exciting opportunities to represent top brands at events nationwide."
        structuredData={structuredData}
      />
      
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
        <div className="absolute inset-0 bg-[url('/images/heroes/sxsw-event-all-services.jpeg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/30 px-4 py-2">
              <Briefcase className="w-4 h-4 mr-2" />
              We're Hiring
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Join Our Team of{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Brand Ambassadors
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
              Be part of an exciting team that brings brands to life through experiential marketing. 
              Flexible hours, great pay, and unforgettable experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-xl"
                asChild
              >
                <a href="#openings">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white/30 bg-white/10 hover:bg-white/20 text-white px-8 py-6 text-lg font-semibold rounded-full"
                asChild
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-cyan-200">
                <Zap className="w-4 h-4 mr-2" />
                Why Work With Us
              </Badge>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Being an AirFresh Ambassador
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer more than just a job – we offer an experience that helps you grow personally and professionally.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-cyan-200">
              <CheckCircle className="w-4 h-4 mr-2" />
              What We Look For
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Ideal Candidate
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're looking for enthusiastic, reliable individuals who love connecting with people.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Excellent communication skills",
                "Outgoing and personable",
                "Reliable and punctual",
                "Professional appearance",
                "Flexible availability",
                "Ability to stand for extended periods",
                "Valid driver's license (preferred)",
                "Previous brand ambassador experience (a plus)"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="openings" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div variants={itemVariants}>
              <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-cyan-200">
                <Users className="w-4 h-4 mr-2" />
                Current Openings
              </Badge>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Positions
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore opportunities across the country. Don't see your city? We're always expanding!
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {openPositions.map((position, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {position.type}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{position.description}</p>
                    <Button 
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                      asChild
                    >
                      <Link href="/contact">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Start your journey as a brand ambassador today. Apply now and be part of exciting brand experiences across the nation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-cyan-700 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-full shadow-xl"
                asChild
              >
                <Link href="/contact">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white/50 bg-transparent hover:bg-white/10 text-white px-8 py-6 text-lg font-semibold rounded-full"
                asChild
              >
                <Link href="/training">
                  Existing Staff Login
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
