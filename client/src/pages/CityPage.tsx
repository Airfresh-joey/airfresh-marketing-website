import { useParams } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Users, Calendar, Award } from "lucide-react";

export default function CityPage() {
  const { city } = useParams<{ city: string }>();
  
  const cityData = {
    denver: {
      name: "Denver",
      state: "Colorado",
      description: "Home to our headquarters, Denver is where AirFresh Marketing began our journey over 20 years ago. We understand the unique culture and energy of the Mile High City.",
      image: "https://images.unsplash.com/photo-1619856699906-09e1f58c98b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=800",
      stats: {
        events: "500+",
        years: "20+",
        clients: "150+",
        reach: "2M+"
      }
    },
    "los-angeles": {
      name: "Los Angeles",
      state: "California",
      description: "In the entertainment capital of the world, we create show-stopping brand experiences that capture the innovative spirit of LA.",
      image: "https://images.unsplash.com/photo-1444723121867-7a241cacace9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=800",
      stats: {
        events: "300+",
        years: "15+",
        clients: "200+",
        reach: "5M+"
      }
    },
    "new-york": {
      name: "New York",
      state: "New York",
      description: "In the city that never sleeps, our experiential marketing campaigns stand out in the most competitive market in the world.",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=800",
      stats: {
        events: "400+",
        years: "12+",
        clients: "250+",
        reach: "8M+"
      }
    },
    chicago: {
      name: "Chicago",
      state: "Illinois",
      description: "The Windy City's diverse neighborhoods and strong community spirit make it perfect for authentic brand experiences that resonate.",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=800",
      stats: {
        events: "250+",
        years: "10+",
        clients: "120+",
        reach: "3M+"
      }
    },
    austin: {
      name: "Austin",
      state: "Texas",
      description: "Keep Austin Weird - and keep your brand experiences memorable. We tap into Austin's creative energy to deliver campaigns that keep people talking.",
      image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=800",
      stats: {
        events: "200+",
        years: "8+",
        clients: "80+",
        reach: "1.5M+"
      }
    }
  };

  const currentCity = cityData[city as keyof typeof cityData] || cityData.denver;

  const services = [
    {
      title: "Local Brand Activations",
      description: `Street-level marketing campaigns that connect with ${currentCity.name} residents and visitors in authentic ways.`
    },
    {
      title: "Corporate Event Production",
      description: `Professional event management for conferences, product launches, and business gatherings in ${currentCity.name}.`
    },
    {
      title: "Experiential Marketing",
      description: `Immersive brand experiences tailored to ${currentCity.name}'s unique culture and demographic.`
    },
    {
      title: "Local Market Research",
      description: `In-depth analysis of ${currentCity.name} market trends and consumer behavior patterns.`
    }
  ];

  const caseStudies = [
    {
      title: `Tech Startup Launch in ${currentCity.name}`,
      description: "Created buzz for a new app launch through interactive street installations and social media integration.",
      results: "300% increase in app downloads within 30 days"
    },
    {
      title: `Food Brand Sampling Campaign`,
      description: `Targeted sampling campaign across ${currentCity.name}'s busiest districts and popular events.`,
      results: "85% positive brand sentiment increase"
    },
    {
      title: `Corporate Conference Experience`,
      description: `Transformed a traditional industry conference into an engaging, memorable experience for 2,000+ attendees.`,
      results: "92% attendee satisfaction rate"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${currentCity.image}')` }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Experiential Marketing in {currentCity.name}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              {currentCity.description}
            </p>
            <div className="flex items-center justify-center text-lg">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{currentCity.name}, {currentCity.state}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our {currentCity.name} Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Over the years, we've built strong relationships and delivered exceptional results in the {currentCity.name} market.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{currentCity.stats.events}</div>
                <p className="text-gray-600">Events Executed</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <Award className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{currentCity.stats.years}</div>
                <p className="text-gray-600">Years of Experience</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <Users className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{currentCity.stats.clients}</div>
                <p className="text-gray-600">Local Clients</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{currentCity.stats.reach}</div>
                <p className="text-gray-600">People Reached</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our {currentCity.name} Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized experiential marketing services designed for the {currentCity.name} market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">{currentCity.name} Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our experiential marketing campaigns in {currentCity.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-primary font-semibold">{study.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Local Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Make an Impact in {currentCity.name}?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create unforgettable brand experiences that resonate with {currentCity.name} audiences and drive real business results.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Start Your {currentCity.name} Campaign</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
