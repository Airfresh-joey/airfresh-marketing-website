import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Star, Heart, Users, Cog, Laptop, ShoppingCart, TrendingUp, Palette, Store, Building, Handshake, Play } from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Star,
      title: "Create Memorable Brand Experiences",
      description: "Your customers crave unforgettable experiences with your brand. It's our job to give them to them."
    },
    {
      icon: Heart,
      title: "Earn Die-Hard Brand Advocates",
      description: "There is no substitute for brand loyalty! Give your customers something to buzz about, and you'll always be top of mind."
    },
    {
      icon: Users,
      title: "Engage Audiences Like Never Before",
      description: "Our network of fully-aligned brand ambassadors trained to embody your company's message is STACKED!"
    }
  ];

  const turnkeyServices = [
    { icon: Cog, title: "Production and Execution" },
    { icon: Laptop, title: "Experiential & Digital" },
    { icon: ShoppingCart, title: "Asset Procurement" },
    { icon: TrendingUp, title: "Marketing Strategy" },
    { icon: Palette, title: "Creative" }
  ];

  const targetAudience = [
    {
      icon: Store,
      title: "Local Brands",
      description: "Pump up the volume with next-level events for your local business."
    },
    {
      icon: Building,
      title: "Corporations",
      description: "Give every customer an intimate experience when it comes to colossal nationwide campaigns."
    },
    {
      icon: Handshake,
      title: "Agencies",
      description: "Enhance your agency with fresh ideas, unique perspectives and innovative outreach."
    }
  ];

  const testimonials = [
    {
      name: "Aimee",
      role: "Ambassador",
      content: "Air Fresh Marketing is my FAVORITE experiential marketing company to represent across the nation. The staff is responsive and professional, and the events are always a blast!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Kristin Quinn",
      role: "Chief Growth Officer, Gravel",
      content: "Air Fresh Marketing has worked with us all across the country from Los Angeles to New York. Even when events come up last minute, they are able to make magic happen!",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&w=50&h=50&fit=crop&crop=face"
    },
    {
      name: "Anonymous",
      role: "Glassdoor Review",
      content: "The company culture is top-notch, and the atmosphere always friendly and motivating. Everyone is engaged and helpful.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=50&h=50&fit=crop&crop=face"
    }
  ];

  const clientLogos = [
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&w=120&h=60&fit=crop"
  ];

  return (
    <div className="pt-16">
      <Hero />

      {/* Video Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-colors cursor-pointer">
                  <Play className="h-8 w-8 ml-1" />
                </div>
                <p className="text-sm opacity-75">Merrell AFM Front Page Clip.mp4 from Air Fresh Marketing on Vimeo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHAT WE DO</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6">
                  <svg className="w-full h-full text-primary" viewBox="0 0 100 100" fill="currentColor">
                    {index === 0 && (
                      <path d="M50 10 L60 40 L90 40 L70 55 L80 85 L50 70 L20 85 L30 55 L10 40 L40 40 Z" />
                    )}
                    {index === 1 && (
                      <path d="M50 20 C65 20 75 30 75 45 C75 60 65 70 50 80 C35 70 25 60 25 45 C25 30 35 20 50 20 Z" />
                    )}
                    {index === 2 && (
                      <g>
                        <circle cx="30" cy="35" r="8" />
                        <circle cx="50" cy="35" r="8" />
                        <circle cx="70" cy="35" r="8" />
                        <rect x="20" y="50" width="60" height="30" rx="5" />
                      </g>
                    )}
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-lg">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Turnkey Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">TURNKEY SERVICES</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Everything we do is done in-house and as an extension of your team. We strategize what's best for meeting your goals and then come together to crush them as a single unit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {turnkeyServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 text-sm leading-tight">{service.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Leave with knowledge, not just numbers</h3>
              <p className="text-gray-600 text-sm">Our end-of-project success reports are packed with actionable data to guide future marketing efforts.</p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Bring your brand to life with the five senses.</h3>
              <p className="text-gray-600 text-sm">Transform your products and services into a dynamic experience that they can see, hear, touch, taste and feel.</p>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Targeted marketing that BANGS!</h3>
              <p className="text-gray-600 text-sm">Aiming for hard-to-reach niches? Wiggle your way into obscure markets with crafty campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHO IS AIRFRESH MARKETING FOR?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {targetAudience.map((audience, index) => (
              <Card key={index} className="text-center p-8">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                    <audience.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{audience.title}</h3>
                  <p className="text-gray-600">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">In 20+ years, we've helped</h2>
          <p className="text-2xl mb-8">Over 300 brands connect with customers through unforgettable live events.</p>
          <Button asChild size="lg" variant="default">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">WHAT PEOPLE ARE SAYING</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-50 p-8">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <img className="w-12 h-12 rounded-full mr-4" src={testimonial.avatar} alt={testimonial.name} />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
            <div className="flex justify-center">
              <div className="w-20 h-12 bg-red-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">Google</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-20 h-12 bg-black rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">adidas</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-20 h-12 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">Microsoft</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-20 h-12 bg-pink-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">Lyft</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-20 h-12 bg-blue-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">Facebook</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-20 h-12 bg-green-700 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">Clif Bar</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-20 h-12 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">Pepsi</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-20 h-12 bg-orange-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">5-hour</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-20 h-12 bg-purple-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">NFL</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-20 h-12 bg-green-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">Naked</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">So what's next?</h2>
          <p className="text-2xl mb-8">Just reach out.</p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Let's chat.</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
