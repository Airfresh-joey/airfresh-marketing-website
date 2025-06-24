import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ready to create unforgettable brand experiences? Let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8">
              <CardContent className="p-0">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Phone</h3>
                <p className="text-gray-600">303-720-6060</p>
                <p className="text-sm text-gray-500 mt-2">Mon-Fri 9AM-6PM MST</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <Mail className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
                <p className="text-gray-600">hello@airfreshmarketing.com</p>
                <p className="text-sm text-gray-500 mt-2">We respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center p-8">
              <CardContent className="p-0">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2 text-gray-900">Office</h3>
                <p className="text-gray-600">720 S. Colorado Blvd.<br />Penthouse North<br />Denver, CO 80246</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      {/* Office Hours & Additional Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <CardContent className="p-0">
                <Clock className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Office Hours</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM MST</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM MST</p>
                  <p><strong>Sunday:</strong> Closed</p>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  For urgent matters outside business hours, please email us and we'll respond as soon as possible.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">What to Expect</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Initial Consultation</h4>
                    <p className="text-gray-600 text-sm">Free 30-minute discovery call to discuss your goals and explore how we can help.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Custom Proposal</h4>
                    <p className="text-gray-600 text-sm">Detailed proposal with strategy, timeline, and investment within 48-72 hours.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Project Kickoff</h4>
                    <p className="text-gray-600 text-sm">Comprehensive planning session to align on objectives and begin creative development.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
