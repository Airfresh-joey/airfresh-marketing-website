import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { 
  Users, 
  Calendar, 
  Award, 
  Target, 
  Building2, 
  Presentation,
  Coffee,
  Music,
  Camera,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  MapPin
} from "lucide-react";

export default function CorporateEvents() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "AirFresh Marketing"
    },
    "serviceType": "Corporate Event Planning",
    "description": "Full-service corporate event planning and production for conferences, meetings, and company celebrations"
  };
  const featuredEvent = {
    title: "Microsoft Global Summit: Innovation Conference",
    client: "Microsoft",
    type: "Annual Conference",
    attendees: "5,000+ Executives",
    duration: "3 Days",
    locations: "Seattle Convention Center",
    description: "Designed and executed Microsoft's premier global summit featuring keynote presentations, breakout sessions, networking events, and product showcases. The event brought together industry leaders, partners, and innovators to explore the future of technology and business.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    results: [
      { metric: "Attendee Satisfaction", value: "98%", icon: Star },
      { metric: "Total Attendees", value: "5,000+", icon: Users },
      { metric: "Media Coverage", value: "250M+", icon: Camera },
      { metric: "Lead Generation", value: "15,000+", icon: Target }
    ]
  };

  const eventTypes = [
    {
      icon: Presentation,
      title: "Conferences & Summits",
      description: "Large-scale conferences that position your company as a thought leader while providing valuable networking and learning opportunities.",
      features: ["Keynote presentations", "Breakout sessions", "Networking zones", "Exhibition spaces"],
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: Building2,
      title: "Corporate Meetings",
      description: "Executive retreats, board meetings, and strategic planning sessions designed to foster collaboration and decision-making.",
      features: ["Executive retreats", "Board meetings", "Strategic planning", "Team workshops"],
      color: "bg-purple-50 border-purple-100"
    },
    {
      icon: Award,
      title: "Awards & Recognition",
      description: "Celebrate achievements and milestones with elegant ceremonies that honor your team's accomplishments and company values.",
      features: ["Award ceremonies", "Anniversary celebrations", "Achievement recognition", "Milestone events"],
      color: "bg-yellow-50 border-yellow-100"
    },
    {
      icon: Coffee,
      title: "Client Entertainment",
      description: "Exclusive events designed to strengthen client relationships and showcase your company culture and capabilities.",
      features: ["VIP experiences", "Client dinners", "Hospitality suites", "Executive briefings"],
      color: "bg-green-50 border-green-100"
    },
    {
      icon: Music,
      title: "Company Culture Events",
      description: "Internal events that build team spirit, celebrate company culture, and enhance employee engagement and retention.",
      features: ["Holiday parties", "Team building", "Milestone celebrations", "Employee appreciation"],
      color: "bg-pink-50 border-pink-100"
    },
    {
      icon: Target,
      title: "Product Launches",
      description: "Professional launch events that generate buzz, educate stakeholders, and drive adoption of new products or services.",
      features: ["Product reveals", "Demo stations", "Media events", "Launch parties"],
      color: "bg-indigo-50 border-indigo-100"
    }
  ];

  const recentEvents = [
    {
      title: "Amazon Web Services Re:Invent Conference",
      client: "Amazon",
      type: "Tech Conference",
      attendees: "65,000",
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Five-day cloud computing conference featuring 2,000+ technical sessions and hands-on labs.",
      highlights: ["65,000 global attendees", "2,000+ technical sessions", "500+ exhibitors"]
    },
    {
      title: "Goldman Sachs Leadership Summit",
      client: "Goldman Sachs",
      type: "Executive Summit",
      attendees: "500",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Exclusive C-level executive summit focusing on global economic trends and investment strategies.",
      highlights: ["500 C-level executives", "25 industry speakers", "15 country representatives"]
    },
    {
      title: "Tesla Annual Shareholders Meeting",
      client: "Tesla",
      type: "Shareholder Event",
      attendees: "2,000",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Annual meeting combining business updates with product demonstrations and future vision presentations.",
      highlights: ["2,000 shareholders", "Live global streaming", "New product reveals"]
    },
    {
      title: "Salesforce Dreamforce Convention",
      client: "Salesforce",
      type: "Customer Conference",
      attendees: "40,000",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "World's largest software conference featuring customer success stories, product training, and networking.",
      highlights: ["40,000 attendees", "1,500 sessions", "400+ speakers"]
    },
    {
      title: "JPMorgan Healthcare Conference",
      client: "JPMorgan Chase",
      type: "Industry Conference",
      attendees: "9,000",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Premier healthcare investment conference bringing together industry leaders and investors.",
      highlights: ["9,000 participants", "450 companies", "$2B deals announced"]
    },
    {
      title: "IBM Think Conference",
      client: "IBM",
      type: "Technology Summit",
      attendees: "30,000",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      description: "Flagship event showcasing AI, cloud, and quantum computing innovations for business transformation.",
      highlights: ["30,000 attendees", "100+ hands-on labs", "50+ product announcements"]
    }
  ];

  const services = [
    "Event strategy and planning",
    "Venue selection and management",
    "Audio-visual production",
    "Registration and attendee management",
    "Catering and hospitality coordination",
    "Speaker coordination and training",
    "Marketing and communications",
    "On-site execution and support",
    "Post-event analysis and reporting"
  ];

  const stats = [
    { number: "500+", label: "Corporate Events Produced" },
    { number: "98%", label: "Client Satisfaction Rate" },
    { number: "1M+", label: "Total Event Attendees" },
    { number: "15+", label: "Years of Experience" }
  ];

  return (
    <div className="pt-16">
      <SEO 
        title="Corporate Event Planning | Conferences & Business Events - AirFresh"
        description="Professional corporate event planning: conferences, meetings, award ceremonies & team building. Full-service event production for businesses nationwide."
        pageType="corporate-events"
        canonical="https://airfreshmarketing.com/services/corporate-events"
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Corporate <span className="text-yellow-300 italic font-serif">Events</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              From intimate executive gatherings to large-scale conferences, we create 
              professional events that strengthen relationships, drive business objectives, 
              and reflect your company's values and vision.
            </p>
            <div className="flex items-center space-x-8 text-lg">
              <div className="flex items-center">
                <Building2 className="h-6 w-6 text-yellow-300 mr-2" />
                <span>Professional Excellence</span>
              </div>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-yellow-300 mr-2" />
                <span>Seamless Execution</span>
              </div>
            </div>
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

      {/* Featured Event */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">FEATURED EVENT</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Event Spotlight</h3>
          </div>

          <Card className="overflow-hidden shadow-2xl">
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img 
                  src={featuredEvent.image} 
                  alt={featuredEvent.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold mr-2">
                    {featuredEvent.type}
                  </span>
                  <span className="text-sm text-gray-600">{featuredEvent.client}</span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">
                  {featuredEvent.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {featuredEvent.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <div className="text-sm text-gray-500">Attendees</div>
                      <div className="font-semibold">{featuredEvent.attendees}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="font-semibold">{featuredEvent.duration}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <div>
                      <div className="text-sm text-gray-500">Venue</div>
                      <div className="font-semibold text-sm">{featuredEvent.locations}</div>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold mb-4 text-gray-900">Event Results</h4>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {featuredEvent.results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <result.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                      <div className="text-xl font-bold text-gray-900">{result.value}</div>
                      <div className="text-sm text-gray-600">{result.metric}</div>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full lg:w-auto">
                  View Case Study
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">EVENT TYPES</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Corporate Event Solutions</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We specialize in creating professional events that achieve your business objectives 
              while providing memorable experiences for your attendees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((type, index) => (
              <Card key={index} className={`p-6 hover:shadow-xl transition-all duration-300 ${type.color}`}>
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                    <type.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{type.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                  <div>
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Services Include:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.features.map((feature, idx) => (
                        <li key={idx}>• {feature}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">RECENT PROJECTS</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Recent Corporate Events</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover some of our most successful recent corporate events across various 
              industries and event formats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {event.type}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {event.attendees} attendees
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-primary font-medium mb-1">{event.client}</div>
                  <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {event.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm text-gray-900 mb-2">Event Highlights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {event.highlights.map((highlight, idx) => (
                        <li key={idx}>• {highlight}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full group/btn">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                End-to-End Event Management
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From initial concept to final execution, we handle every aspect of your corporate event. 
                Our comprehensive approach ensures seamless coordination and flawless delivery that 
                exceeds your expectations and achieves your business objectives.
              </p>
              
              <div className="grid grid-cols-1 gap-3">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Corporate event planning" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Next Corporate Event?</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether it's an intimate executive retreat or a large-scale conference, we'll help you 
            create an event that strengthens relationships and achieves your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Start Planning</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}