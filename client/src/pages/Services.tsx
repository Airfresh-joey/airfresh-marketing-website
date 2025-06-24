import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Users, 
  Megaphone, 
  Calendar, 
  Palette, 
  BarChart3, 
  Globe, 
  Target,
  CheckCircle,
  Star,
  Zap
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Experiential Marketing",
      description: "Create immersive brand experiences that engage all five senses and leave lasting impressions on your target audience.",
      features: ["Brand activations", "Product launches", "Sampling campaigns", "Interactive experiences"]
    },
    {
      icon: Megaphone,
      title: "Brand Activation",
      description: "Bring your brand to life through strategic campaigns that drive awareness, engagement, and customer acquisition.",
      features: ["Guerrilla marketing", "Flash mob events", "Street teams", "Viral campaigns"]
    },
    {
      icon: Calendar,
      title: "Corporate Events",
      description: "Professional event planning and execution for conferences, trade shows, product launches, and corporate gatherings.",
      features: ["Conference management", "Trade show presence", "VIP experiences", "B2B networking events"]
    },
    {
      icon: Palette,
      title: "Creative Development",
      description: "Innovative creative concepts that capture your brand's essence and resonate with your target market.",
      features: ["Campaign concept design", "Visual identity", "Creative strategy", "Content development"]
    },
    {
      icon: BarChart3,
      title: "Marketing Strategy",
      description: "Data-driven marketing strategies that align with your business objectives and deliver measurable results.",
      features: ["Market research", "Customer insights", "Campaign planning", "Performance analytics"]
    },
    {
      icon: Globe,
      title: "Nationwide Campaigns",
      description: "Seamless execution of large-scale campaigns across multiple markets with consistent brand messaging.",
      features: ["Multi-market coordination", "National ambassador network", "Scalable logistics", "Real-time reporting"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your brand, audience, and objectives to craft the perfect experiential strategy."
    },
    {
      step: "02",
      title: "Creative Concept",
      description: "Our creative team develops innovative concepts that bring your brand story to life in memorable ways."
    },
    {
      step: "03",
      title: "Planning & Logistics",
      description: "Detailed planning ensures flawless execution, from venue selection to talent coordination."
    },
    {
      step: "04",
      title: "Execution & Management",
      description: "Our experienced team manages every aspect of your campaign with precision and professionalism."
    },
    {
      step: "05",
      title: "Analysis & Reporting",
      description: "Comprehensive post-campaign analysis provides actionable insights for future marketing efforts."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Targeted Reach",
      description: "Connect with your ideal customers in the right place at the right time."
    },
    {
      icon: Star,
      title: "Brand Loyalty",
      description: "Create emotional connections that turn customers into brand advocates."
    },
    {
      icon: Zap,
      title: "Immediate Impact",
      description: "Generate buzz and drive immediate response with engaging experiences."
    },
    {
      icon: BarChart3,
      title: "Measurable Results",
      description: "Track engagement, leads, and ROI with detailed campaign analytics."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive experiential marketing solutions that bring your brand to life and create lasting connections with your audience.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to execution, we provide end-to-end experiential marketing services that deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <service.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure every campaign exceeds expectations and delivers measurable results.
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-gray-600 text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Experiential Marketing?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiential marketing creates deeper connections and drives better results than traditional advertising methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-8">
                <CardContent className="p-0">
                  <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create Amazing Experiences?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our experiential marketing services can help you connect with your audience and achieve your business goals.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
