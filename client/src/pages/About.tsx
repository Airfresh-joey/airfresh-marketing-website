import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Award, 
  Heart, 
  Zap, 
  TrendingUp,
  Building2,
  Store,
  Handshake,
  CheckCircle
} from "lucide-react";

export default function About() {
  const stats = [
    { number: "20+", label: "Years of Experience" },
    { number: "300+", label: "Brands Served" },
    { number: "50+", label: "Cities Nationwide" },
    { number: "1000+", label: "Events Produced" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Every project is fueled by our genuine passion for creating unforgettable experiences that connect brands with their audiences."
    },
    {
      icon: Target,
      title: "Results-Focused",
      description: "We measure success by the meaningful connections and measurable outcomes we create for your brand."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push creative boundaries to deliver fresh, engaging experiences that stand out in the marketplace."
    }
  ];

  const services = [
    {
      icon: Zap,
      title: "Production and Execution",
      description: "Complete project management from planning to flawless delivery"
    },
    {
      icon: TrendingUp,
      title: "Experiential & Digital Marketing",
      description: "Seamless integration of physical and digital brand experiences"
    },
    {
      icon: Target,
      title: "Asset Procurement",
      description: "Sourcing and managing all necessary materials and equipment"
    },
    {
      icon: Lightbulb,
      title: "Marketing Strategy",
      description: "Strategic planning perfectly aligned with your business objectives"
    },
    {
      icon: Award,
      title: "Creative Development",
      description: "Innovative concepts that captivate and engage your target audiences"
    }
  ];

  const clientTypes = [
    {
      icon: Store,
      title: "Local Brands",
      description: "Pump up the volume with next-level events for your local business.",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Building2,
      title: "Corporations",
      description: "Give every customer an intimate experience when it comes to colossal nationwide campaigns.",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: Handshake,
      title: "Agencies",
      description: "Enhance your agency with fresh ideas, unique perspectives and innovative outreach.",
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              About AirFresh <span className="text-yellow-300 italic font-serif">Marketing</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
              For over 20 years, we've been the nationwide leader in experiential marketing, 
              creating unforgettable brand experiences that connect with customers on an emotional level.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in Denver, Colorado, AirFresh Marketing began with a simple yet powerful mission: 
                to help brands create authentic, meaningful connections with their audiences through the 
                power of experiential marketing.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                What started as a small team of passionate marketers has evolved into a nationwide company 
                serving clients from coast to coast. Today, we've helped over 300 brands create memorable 
                experiences that drive real business results.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Nationwide coverage across 50+ cities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Full-service in-house capabilities</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Data-driven insights and reporting</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">300+</div>
                <div className="text-sm">Brands Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and define how we approach 
              every client relationship and project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHAT WE DO</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Turnkey Services</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything we do is done in-house and as an extension of your team. We strategize 
              what's best for meeting your goals and then come together to crush them as a single unit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h4>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHO WE SERVE</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Perfect For Every Business</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From local businesses to Fortune 500 corporations, we tailor our approach 
              to meet the unique needs of every client.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((type, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-0">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${type.color}`}>
                    <type.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{type.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{type.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Unforgettable Experiences?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help your brand connect with customers in meaningful ways.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}