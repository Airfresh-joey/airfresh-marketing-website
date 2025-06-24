import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              className="h-12 w-auto mb-6" 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=150&h=50&fit=crop" 
              alt="AirFresh Marketing Logo" 
            />
            <p className="text-gray-300 mb-4">
              Nationwide experiential marketing company connecting brands with customers through unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services" className="hover:text-white">Experiential Marketing</Link></li>
              <li><Link href="/services" className="hover:text-white">Brand Activation</Link></li>
              <li><Link href="/services" className="hover:text-white">Corporate Events</Link></li>
              <li><Link href="/services" className="hover:text-white">Event Production</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-gray-300 space-y-2">
              <p className="flex items-center">
                <Phone className="h-4 w-4 mr-2" /> 303-720-6060
              </p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" /> hello@airfreshmarketing.com
              </p>
              <p className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1" /> 
                720 S. Colorado Blvd.<br />Denver, CO 80246
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 AirFresh Marketing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
