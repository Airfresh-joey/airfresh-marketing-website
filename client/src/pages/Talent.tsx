import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { 
  MapPin, 
  Star, 
  Users, 
  Award, 
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  UserCheck,
  Briefcase
} from "lucide-react";

export default function Talent() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Brand Ambassador Talent Network",
    "description": "Professional brand ambassadors and experiential marketing talent for hire",
    "mainEntity": {
      "@type": "Organization",
      "name": "AirFresh Marketing Talent Network",
      "description": "Network of 5,000+ professional brand ambassadors, event hosts, and experiential marketing specialists",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Brand Ambassador Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Ambassador Services",
              "description": "Professional brand representation and customer engagement"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Event Host Services",
              "description": "Professional event hosting and audience engagement"
            }
          }
        ]
      }
    }
  };
  const featuredTalent = [
    {
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Professional Brand Ambassador 1"
    },
    {
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80", 
      alt: "Professional Brand Ambassador 2"
    },
    {
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Professional Brand Ambassador 3"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Professional Brand Ambassador 4"
    },
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      alt: "Professional Brand Ambassador 5"
    }
  ];

  const talentProfiles = [
    {
      name: "Sarah Martinez",
      location: "Los Angeles, CA",
      specialty: "Senior Brand Ambassador",
      experience: "5+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Marcus Johnson", 
      location: "New York, NY",
      specialty: "Event Host",
      experience: "4+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Emily Chen",
      location: "Chicago, IL",
      specialty: "Product Specialist",
      experience: "3+ years", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "David Rodriguez",
      location: "Miami, FL",
      specialty: "Trade Show Expert",
      experience: "6+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Jessica Thompson",
      location: "Denver, CO", 
      specialty: "Brand Ambassador",
      experience: "2+ years",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Alex Kim",
      location: "Seattle, WA",
      specialty: "Event Coordinator",
      experience: "4+ years",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Maria Gonzalez",
      location: "Austin, TX",
      specialty: "Promotional Model",
      experience: "3+ years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Ryan Parker",
      location: "Atlanta, GA", 
      specialty: "Brand Specialist",
      experience: "5+ years",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Olivia Davis",
      location: "San Francisco, CA",
      specialty: "Experience Host",
      experience: "3+ years", 
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Carlos Rivera",
      location: "Phoenix, AZ",
      specialty: "Product Demo Specialist",
      experience: "4+ years",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Amanda Foster",
      location: "Boston, MA",
      specialty: "Brand Ambassador", 
      experience: "2+ years",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "James Wilson",
      location: "Nashville, TN",
      specialty: "Event Manager",
      experience: "7+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  const stats = [
    { number: "5,000+", label: "Vetted Brand Ambassadors" },
    { number: "50+", label: "Cities Nationwide" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "15+", label: "Years Experience" }
  ];

  return (
    <div className="pt-16">
      <SEO 
        title="Professional Brand Ambassadors & Event Talent | 5,000+ Verified Experiential Marketing Specialists - AirFresh Marketing"
        description="Hire professional brand ambassadors, event hosts, and experiential marketing talent from our network of 5,000+ verified specialists. Nationwide coverage across 50+ cities for brand activations and promotional campaigns."
        keywords="brand ambassadors for hire, professional event staff, experiential marketing talent, promotional staff agency, event hosts, product demonstration specialists, trade show staff, brand representative services, promotional models, event marketing personnel"
        canonical="https://airfreshmarketing.com/talent"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Meet Your Brand's Next <span className="text-yellow-300 italic font-serif">Superstars</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              From seasoned brand ambassadors to magnetic event hosts, our talent doesn't just 
              represent brands—they elevate them to create unforgettable experiences that drive results.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Our Talent Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">INDUSTRY-LEADING TALENT SOLUTIONS</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Professional Brand Ambassadors Who Deliver Results</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              For over two decades, AirFresh Marketing has set the standard in experiential marketing staffing through 
              strategic talent deployment and comprehensive support. Our network of 5,000+ brand ambassadors provides 
              unmatched coverage and capabilities across all major markets.
            </p>
            <br />
            <p className="text-lg text-gray-600 leading-relaxed">
              Each member of our talent pool undergoes rigorous vetting and training, ensuring consistent, professional 
              brand representation. Explore our featured talent below to discover why leading brands trust AirFresh 
              Marketing for their experiential marketing needs.
            </p>
          </div>

          {/* Featured Talent Photos */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {featuredTalent.map((talent, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md">
                <img 
                  src={talent.image} 
                  alt={talent.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse Talent Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">BROWSE OUR TALENT</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Experienced Brand Ambassadors</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our carefully vetted talent network spans major cities nationwide, ready to represent your brand 
              with professionalism and enthusiasm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {talentProfiles.map((profile, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="relative">
                  <img 
                    src={profile.image} 
                    alt={profile.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {profile.experience}
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {profile.name}
                  </h3>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{profile.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <Briefcase className="h-4 w-4 mr-1" />
                    <span className="text-sm font-medium text-primary">{profile.specialty}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-12 space-x-4">
            <Button variant="outline" size="sm" className="flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </Button>
            <div className="flex space-x-2">
              <Button variant="default" size="sm">1</Button>
              <Button variant="outline" size="sm">2</Button>
              <Button variant="outline" size="sm">3</Button>
              <Button variant="outline" size="sm">4</Button>
            </div>
            <Button variant="outline" size="sm" className="flex items-center">
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Team Up With Us?</h2>
            <p className="text-xl text-gray-600">Get in touch to discuss your talent needs</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Clients Section */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">CLIENTS</h3>
                <h4 className="text-lg font-semibold mb-4 text-primary">LOOKING FOR TALENT</h4>
                <p className="text-gray-600 mb-6">
                  Find talent professionals to represent your corporate brand and create 
                  unforgettable experiences for your customers.
                </p>
                <Button asChild className="w-full mb-4">
                  <Link href="/contact">CLIENT SIGN-UP</Link>
                </Button>
                <div className="flex items-center justify-center text-gray-600">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>Or Call 303-720-6060</span>
                </div>
              </CardContent>
            </Card>

            {/* Talent Section */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">TALENT</h3>
                <h4 className="text-lg font-semibold mb-4 text-primary">LOOKING FOR WORK</h4>
                <p className="text-gray-600 mb-6">
                  Join our network of professional brand ambassadors, event hosts, 
                  promotional models, and experiential marketing specialists.
                </p>
                <Button asChild className="w-full mb-4" variant="outline">
                  <Link href="/contact">TALENT SIGN-UP</Link>
                </Button>
                <div className="flex items-center justify-center text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>hello@airfreshmarketing.com</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}