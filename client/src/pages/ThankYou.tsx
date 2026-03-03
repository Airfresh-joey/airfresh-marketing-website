import { Link } from "wouter";
import SEO from "@/components/SEO";
import { CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThankYou() {
  return (
    <>
      <SEO
        title="Thank You | Air Fresh Marketing"
        description="Thank you for contacting Air Fresh Marketing. We'll be in touch within 24 hours."
        canonical="https://www.airfreshmarketing.com/thank-you"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-[#e63a27]/20 rounded-full flex items-center justify-center">
                <CheckCircle className="w-16 h-16 text-[#e63a27]" />
              </div>
            </div>
            
            {/* Main Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Thank You!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your message has been received. Our team will review your inquiry and get back to you within 24 hours.
            </p>
            
            {/* What to Expect */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-8 text-left">
              <h2 className="text-2xl font-bold text-white mb-4">What Happens Next?</h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e63a27] mt-1 flex-shrink-0" />
                  <span>Our team will review your project requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e63a27] mt-1 flex-shrink-0" />
                  <span>We'll prepare a customized proposal based on your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#e63a27] mt-1 flex-shrink-0" />
                  <span>A dedicated account manager will reach out within 24 hours</span>
                </li>
              </ul>
            </div>
            
            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:303-720-6060" className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
                <span>303-720-6060</span>
              </a>
              <a href="mailto:hello@airfreshmarketing.com" className="flex items-center justify-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
                <span>hello@airfreshmarketing.com</span>
              </a>
            </div>
            
            {/* CTA */}
            <Link href="/">
              <Button className="bg-[#e63a27] hover:bg-[#e63a27]/90 text-white px-8 py-6 text-lg">
                Return to Homepage
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
