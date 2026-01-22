import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
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
  Zap,
  Settings,
  Quote,
  ChevronDown,
  ChevronUp,
  Target,
  TrendingUp,
  Award,
  Sparkles,
  Search,
  Filter,
  Phone,
  Mail
} from "lucide-react";
import SEO from "@/components/SEO";
import TalentApplicationForm from "@/components/TalentApplicationForm";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface JobPosting {
  id: string;
  title: string;
  location: string;
  city: string;
  state: string;
  type: string;
  category: string;
  description: string;
  requirements: string[];
  isActive: boolean;
  featured: boolean;
  payRange?: string;
}

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

const cultureValues = [
  {
    icon: Target,
    title: "Excellence First",
    description: "We hold ourselves to the highest standards, delivering exceptional experiences for every brand we represent."
  },
  {
    icon: Users,
    title: "Team Spirit",
    description: "Success is a team effort. We support each other, celebrate wins together, and grow as a community."
  },
  {
    icon: Sparkles,
    title: "Bring the Energy",
    description: "Enthusiasm is contagious. We bring positive energy to every activation and create memorable moments."
  },
  {
    icon: TrendingUp,
    title: "Always Growing",
    description: "We invest in our team's development through training, feedback, and opportunities to advance."
  }
];

const testimonials = [
  {
    name: "Sarah M.",
    role: "Brand Ambassador",
    location: "Denver, CO",
    tenure: "2 years",
    quote: "Working with AirFresh has been incredible. The flexibility lets me balance school while gaining real marketing experience. I've worked with Netflix, Google, and so many amazing brands!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Marcus J.",
    role: "Team Lead",
    location: "Los Angeles, CA",
    tenure: "3 years",
    quote: "I started as a brand ambassador and worked my way up to team lead. The growth opportunities here are real. Every event is different, and I've built skills I use every day.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    name: "Jessica L.",
    role: "Event Specialist",
    location: "Miami, FL",
    tenure: "1.5 years",
    quote: "The team culture is what makes AirFresh special. Everyone genuinely cares about each other's success. Plus, representing Formula One and major sports events? Dream come true!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  }
];

const faqs = [
  {
    question: "What does a typical event look like?",
    answer: "Events vary widely! You might be sampling products at a grocery store, engaging crowds at a music festival, demonstrating tech at a trade show, or representing a brand at a sporting event. Most shifts are 4-8 hours, and you'll receive detailed briefings and training before each activation."
  },
  {
    question: "How often can I work?",
    answer: "It's completely flexible. Some ambassadors work weekly events, others pick up shifts monthly. You choose the opportunities that fit your schedule. We post available events regularly, and you can accept or decline based on your availability."
  },
  {
    question: "What kind of training do you provide?",
    answer: "All ambassadors receive comprehensive training through our online portal, including brand-specific training for each activation. We also provide on-site support and have team leads at larger events. Many of our ambassadors say the training helped them develop skills they use in other careers."
  },
  {
    question: "How much can I expect to earn?",
    answer: "Pay varies by event type and location, typically ranging from $20-35/hour. Specialty events, trade shows, and multi-day activations often pay more. Some events also include tips, bonuses, or product perks."
  },
  {
    question: "Do I need previous experience?",
    answer: "While experience is a plus, it's not required. We value enthusiasm, reliability, and great communication skills. If you're outgoing, professional, and excited to represent amazing brands, we want to hear from you!"
  },
  {
    question: "What brands will I work with?",
    answer: "Our clients include Fortune 500 companies, beloved consumer brands, and exciting startups. Past clients include Netflix, MrBeast, Google, Microsoft, MAC Cosmetics, Formula One, and many more. The variety keeps the work exciting!"
  }
];

const stats = [
  { value: "500+", label: "Brand Ambassadors Nationwide" },
  { value: "1000+", label: "Events Per Year" },
  { value: "50+", label: "Major Brand Partners" },
  { value: "40+", label: "Cities Covered" }
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

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left hover:text-cyan-600 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-cyan-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Recruiting() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const { data: jobs = [] } = useQuery<JobPosting[]>({
    queryKey: ["/api/jobs"],
  });

  // Get unique locations and types for filters
  const locations = [...new Set(jobs.map(j => j.state))].filter(Boolean).sort();
  const types = [...new Set(jobs.map(j => j.type))].filter(Boolean);

  // Filter and sort jobs
  const filteredJobs = jobs
    .filter(job => {
      const matchesSearch = searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesLocation = locationFilter === "all" || job.state === locationFilter;
      const matchesType = typeFilter === "all" || job.type === typeFilter;

      return matchesSearch && matchesLocation && matchesType;
    })
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://airfreshmarketing.com/careers",
        "url": "https://airfreshmarketing.com/careers",
        "name": "Careers at AirFresh Marketing | Join Our Team",
        "description": "Join AirFresh Marketing as a brand ambassador. Flexible schedules, competitive pay, and exciting opportunities to represent top brands at events nationwide."
      },
      {
        "@type": "Organization",
        "@id": "https://airfreshmarketing.com/#organization",
        "name": "AirFresh Marketing",
        "url": "https://airfreshmarketing.com",
        "logo": "https://airfreshmarketing.com/logo.png"
      },
      ...jobs.slice(0, 10).map(job => ({
        "@type": "JobPosting",
        "title": job.title,
        "description": job.description,
        "hiringOrganization": {
          "@type": "Organization",
          "name": "AirFresh Marketing",
          "sameAs": "https://airfreshmarketing.com"
        },
        "jobLocation": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": job.city,
            "addressRegion": job.state,
            "addressCountry": "US"
          }
        },
        "employmentType": job.type === "Full-time" ? "FULL_TIME" : "PART_TIME"
      }))
    ]
  };

  return (
    <>
      <SEO
        title="Careers at AirFresh Marketing | Join Our Team of Brand Ambassadors"
        description="Become a brand ambassador with AirFresh Marketing. Flexible schedules, competitive pay ($20-35/hr), and exciting opportunities to represent top brands like Netflix, Google, and Formula One at events nationwide."
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-[177.77vh] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2">
            <iframe
              src="https://player.vimeo.com/video/395306497?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&muted=1&loop=1&playsinline=1&dnt=1#t=7s"
              className="absolute top-0 left-0 w-full h-full object-cover"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              style={{ pointerEvents: 'none' }}
              title="AirFresh Marketing Careers Video Background"
            />
          </div>
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-cyan-500/20 text-cyan-400 border-cyan-500/30 px-4 py-2">
              <Briefcase className="w-4 h-4 mr-2" />
              We're Hiring Nationwide
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Turn Your People Skills Into{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Unforgettable Experiences
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join 500+ brand ambassadors representing the world's most exciting brands.
              Flexible hours, competitive pay, and events you'll actually love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                <a href="#culture">
                  Learn About Us
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Contact Bar */}
      <section className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-white">
            <span className="text-white/70 text-sm">Questions about joining our team?</span>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <a
                href="tel:+13037206060"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">(303) 720-6060</span>
              </a>
              <a
                href="mailto:talent@airfreshmarketing.com"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="font-medium">talent@airfreshmarketing.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Culture & Values Section */}
      <section id="culture" className="py-20 bg-white">
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
                <Heart className="w-4 h-4 mr-2" />
                Our Culture
              </Badge>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes AirFresh Different
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just a staffing agency. We're a community of passionate professionals who genuinely love what we do.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {cultureValues.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4 mx-auto">
                      <value.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
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

      {/* Testimonials Section */}
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
                <Quote className="w-4 h-4 mr-2" />
                Team Stories
              </Badge>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hear From Our Ambassadors
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real stories from real team members about their experience with AirFresh.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-gray-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                        <p className="text-sm text-cyan-600">{testimonial.role}</p>
                        <p className="text-xs text-gray-500">{testimonial.location} • {testimonial.tenure}</p>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-cyan-200 mb-2" />
                    <p className="text-gray-600 italic leading-relaxed">{testimonial.quote}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What We Look For Section */}
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

      {/* Job Listings Section */}
      <section id="openings" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
              <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-cyan-200">
                <Users className="w-4 h-4 mr-2" />
                Current Openings
              </Badge>
              <Link href="/careers/admin">
                <Button variant="ghost" size="sm" className="mb-4 text-gray-500 hover:text-gray-700">
                  <Settings className="w-4 h-4 mr-1" />
                  Admin
                </Button>
              </Link>
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Positions
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore opportunities across the country. Don't see your city? We're always expanding!
            </motion.p>
          </motion.div>

          {/* Filters */}
          {jobs.length > 0 && (
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    placeholder="Search positions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    {locations.map(loc => (
                      <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger className="w-full md:w-48">
                    <Filter className="w-4 h-4 mr-2 text-gray-400" />
                    <SelectValue placeholder="Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    {types.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {searchQuery || locationFilter !== "all" || typeFilter !== "all" ? (
                <p className="text-sm text-gray-500 mt-2">
                  Showing {filteredJobs.length} of {jobs.length} positions
                </p>
              ) : null}
            </div>
          )}

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredJobs.map((position) => (
              <motion.div key={position.id} variants={itemVariants}>
                <Card className="h-full border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                            {position.title}
                          </h3>
                          {position.featured && (
                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                          )}
                        </div>
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
                    <p className="text-gray-600 text-sm mb-2">{position.description}</p>
                    {position.payRange && (
                      <p className="text-cyan-600 font-medium text-sm mb-4 flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {position.payRange}
                      </p>
                    )}
                    <Button
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                      asChild
                    >
                      <a href="#apply">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {filteredJobs.length === 0 && jobs.length > 0 && (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Matching Positions</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setLocationFilter("all");
                  setTypeFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {jobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No Open Positions</h3>
              <p className="text-gray-600 mb-4">Check back soon for new opportunities!</p>
              <Button asChild>
                <a href="#apply">
                  Join Our Talent Pool
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Application Form Section */}
      <section id="apply" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-cyan-200">
                <ArrowRight className="w-4 h-4 mr-2" />
                Quick Apply
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-600">
                Fill out this quick application and we'll be in touch within 48 hours.
              </p>
            </div>
            <TalentApplicationForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-cyan-100 text-cyan-700 border-cyan-200">
              <Award className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about working with AirFresh Marketing.
            </p>
          </div>

          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                <a href="#apply">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
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

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/70 mb-4">Or reach out directly:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <a
                  href="tel:+13037206060"
                  className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">(303) 720-6060</span>
                </a>
                <a
                  href="mailto:talent@airfreshmarketing.com"
                  className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">talent@airfreshmarketing.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
