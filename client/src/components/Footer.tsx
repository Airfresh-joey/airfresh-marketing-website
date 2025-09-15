import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";
import logoUrl from "@assets/AirFresh_Logo_Horizontal_RGB_1757387574418.jpg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <img 
              src={logoUrl} 
              alt="AirFresh" 
              className="h-16 w-auto mx-auto mb-4"
            />
          </Link>
        </div>
        
        <div className="space-y-4 mb-8">
          <p className="text-2xl font-bold">303-720-6060</p>
          <p className="text-lg">
            Denver, CO 80203<br />
            hello@airfreshmarketing.com
          </p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://www.linkedin.com/company/airfresh-marketing" className="text-gray-300 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://www.facebook.com/AirFreshMarketing" className="text-gray-300 hover:text-white transition-colors">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </a>
          <a href="https://twitter.com/AirFreshmktg" className="text-gray-300 hover:text-white transition-colors">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/airfreshmarketing/" className="text-gray-300 hover:text-white transition-colors">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </a>
        </div>
        
        {/* Quick Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/projects/case-studies" className="text-gray-400 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
              Blog
            </Link>
            <Link href="/projects/brand-activations" className="text-gray-400 hover:text-white transition-colors">
              Brand Activations
            </Link>
            <Link href="/projects/corporate-events" className="text-gray-400 hover:text-white transition-colors">
              Corporate Events
            </Link>
            <Link href="/talent" className="text-gray-400 hover:text-white transition-colors">
              Talent
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>
        
        {/* City Locations for Local SEO */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-4">Our Locations</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
            <Link href="/city/new-york" className="text-gray-400 hover:text-white transition-colors">
              New York
            </Link>
            <Link href="/city/los-angeles" className="text-gray-400 hover:text-white transition-colors">
              Los Angeles
            </Link>
            <Link href="/city/chicago" className="text-gray-400 hover:text-white transition-colors">
              Chicago
            </Link>
            <Link href="/city/miami" className="text-gray-400 hover:text-white transition-colors">
              Miami
            </Link>
            <Link href="/city/denver" className="text-gray-400 hover:text-white transition-colors">
              Denver (HQ)
            </Link>
            <Link href="/city/san-francisco" className="text-gray-400 hover:text-white transition-colors">
              San Francisco
            </Link>
            <Link href="/city/boston" className="text-gray-400 hover:text-white transition-colors">
              Boston
            </Link>
            <Link href="/city/atlanta" className="text-gray-400 hover:text-white transition-colors">
              Atlanta
            </Link>
            <Link href="/city/dallas" className="text-gray-400 hover:text-white transition-colors">
              Dallas
            </Link>
            <Link href="/city/seattle" className="text-gray-400 hover:text-white transition-colors">
              Seattle
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400">Airfreshmarketing contact submit to hubspot code</p>
        </div>
      </div>
    </footer>
  );
}
