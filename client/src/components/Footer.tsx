import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Brand Ambassadors", href: "/services/brand-ambassadors" },
    { name: "Street Teams", href: "/services/street-teams" },
    { name: "Experiential Marketing", href: "/services/experiential-marketing" },
    { name: "Convention Staffing", href: "/city-services/denver-convention-staffing" },
    { name: "Event Management", href: "/city-services/denver-event-management" },
  ];

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Staff Training Portal", href: "/training" },
    { name: "Join Our Team", href: "/talent" },
  ];

  const majorCities = [
    { name: "New York", href: "/city/new-york" },
    { name: "Los Angeles", href: "/city/los-angeles" },
    { name: "Chicago", href: "/city/chicago" },
    { name: "Miami", href: "/city/miami" },
    { name: "Denver", href: "/city/denver", isHQ: true },
    { name: "San Francisco", href: "/city/san-francisco" },
    { name: "Austin", href: "/city/austin" },
    { name: "Atlanta", href: "/city/atlanta" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-black">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-6">
                <img
                  src="/images/airfresh-logo.svg"
                  alt="AirFresh Marketing"
                  className="h-12 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                />
              </Link>

              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Creating unforgettable brand experiences nationwide through innovative experiential marketing,
                professional staffing, and strategic event management.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href="tel:3037206060" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="font-semibold">(303) 720-6060</span>
                </a>

                <a href="mailto:hello@airfreshmarketing.com" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors group">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">hello@airfreshmarketing.com</span>
                </a>

                <div className="flex items-start gap-3 text-gray-300">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-sm">
                    <p>1580 N. Logan St. Suite 660</p>
                    <p>Denver, CO 80203</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                <a
                  href="https://www.linkedin.com/company/airfresh-marketing"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.facebook.com/AirFreshMarketing"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://twitter.com/AirFreshmktg"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/airfreshmarketing/"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-cyan-500"></span>
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <span>{service.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-cyan-500"></span>
                Company
              </h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <span>{item.name}</span>
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations Column */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-8 h-px bg-cyan-500"></span>
                Locations
              </h4>
              <ul className="space-y-3">
                {majorCities.map((city) => (
                  <li key={city.href}>
                    <Link
                      href={city.href}
                      className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300 flex items-center gap-1 group"
                    >
                      <span>{city.name}</span>
                      {city.isHQ && (
                        <span className="text-xs bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded-full ml-1">HQ</span>
                      )}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup Section */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-10 relative overflow-hidden mb-8">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, cyan 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>

              <NewsletterForm />
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 md:p-10 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, cyan 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>

              <div className="relative grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ready to Create Something Amazing?</h3>
                  <p className="text-gray-400">Let's discuss how we can help elevate your brand with unforgettable experiences.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    href="/talent"
                    className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-all duration-300"
                  >
                    Join Our Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm">
                © {currentYear} AirFresh Marketing. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link href="/sitemap.xml" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  Sitemap
                </Link>
                <a href="/llms.txt" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  LLMs
                </a>
                <Link href="/privacy" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-gray-500 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}