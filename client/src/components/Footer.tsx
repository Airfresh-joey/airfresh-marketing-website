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
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400">Airfreshmarketing contact submit to hubspot code</p>
        </div>
      </div>
    </footer>
  );
}
