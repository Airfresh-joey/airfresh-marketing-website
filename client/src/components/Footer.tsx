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
            1580 N. Logan St. Suite 660<br />
            Denver, CO 80203<br />
            hello@airfreshmarketing.com
          </p>
          <div className="mt-6 space-y-2">
            <p className="text-white/90 text-sm font-medium">Hire Air Fresh</p>
            <a 
              href="https://airfreshconnect.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-800 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105"
              style={{
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
              }}
              data-testid="button-looking-for-work-footer"
            >
              Looking for Work
            </a>
          </div>
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
          <a 
            href="https://airfreshconnect.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center mb-4 px-3 py-1.5 text-xs font-medium text-gray-300 rounded-full transition-all duration-200 hover:text-white hover:shadow-md"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
            data-testid="link-looking-for-work-footer-bottom"
          >
            Join Our Team
          </a>
          <p className="text-sm text-gray-400">© 2024 AirFresh Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
