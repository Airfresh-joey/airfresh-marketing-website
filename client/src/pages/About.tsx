import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Users, Target, Award, Globe } from "lucide-react";

export default function About() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About AirFresh Marketing</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            For over 20 years, we've been creating unforgettable brand experiences that connect companies with their customers nationwide.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                AirFresh Marketing was founded with a simple belief: brands and customers should have meaningful, memorable interactions. We saw too many companies struggling to create authentic connections with their audiences through traditional marketing channels.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our experiential marketing approach transforms ordinary brand interactions into extraordinary experiences. From intimate local events to massive nationwide campaigns, we've helped over 300 brands create lasting impressions that drive customer loyalty and business growth.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to be a nationwide leader in experiential marketing, with a team of passionate professionals dedicated to bringing brands to life through the power of human connection.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Team collaboration at AirFresh Marketing" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape how we create exceptional experiences for our clients and their customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Human Connection</h3>
                <p className="text-gray-600">We believe authentic human connections are at the heart of every successful brand experience.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Strategic Focus</h3>
                <p className="text-gray-600">Every campaign is strategically designed to meet specific business objectives and deliver measurable results.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Excellence</h3>
                <p className="text-gray-600">We're committed to delivering exceptional quality in every project, from concept to execution.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Innovation</h3>
                <p className="text-gray-600">We continuously explore new technologies and creative approaches to enhance brand experiences.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced professionals who lead AirFresh Marketing's mission to create unforgettable brand experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face" 
                  alt="CEO" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Sarah Johnson</h3>
                <p className="text-primary font-medium mb-4">CEO & Founder</p>
                <p className="text-gray-600">With over 20 years in experiential marketing, Sarah founded AirFresh Marketing to help brands create meaningful connections with their customers.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face" 
                  alt="Creative Director" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Michael Chen</h3>
                <p className="text-primary font-medium mb-4">Creative Director</p>
                <p className="text-gray-600">Michael leads our creative team, bringing innovative concepts to life and ensuring every campaign delivers maximum impact and engagement.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&w=300&h=300&fit=crop&crop=face" 
                  alt="Operations Director" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Emily Rodriguez</h3>
                <p className="text-primary font-medium mb-4">Operations Director</p>
                <p className="text-gray-600">Emily oversees nationwide campaign execution, ensuring flawless delivery from coast to coast with our extensive network of brand ambassadors.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's create unforgettable experiences that connect your brand with customers in meaningful ways.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
