import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoUrl from "@assets/AirFresh_Logo_Horizontal_RGB_1757387574418.jpg";

export default function NavigationClean() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  const serviceLinks = [
    { href: "/services/brand-ambassadors", label: "Brand Ambassadors" },
    { href: "/services/street-teams", label: "Street Teams" },
    { href: "/services/experiential-marketing", label: "Experiential Marketing" }
  ];

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img 
                src={logoUrl} 
                alt="AirFresh Marketing" 
                className="h-8 w-auto"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    className={`font-medium transition-colors duration-200 flex items-center gap-1 ${
                      location.startsWith('/services')
                        ? "text-primary"
                        : "text-gray-600 hover:text-primary"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 pt-1 w-64">
                      <div className="bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                        {serviceLinks.map((serviceLink) => (
                          <Link
                            key={serviceLink.href}
                            href={serviceLink.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                          >
                            {serviceLink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            <a 
              href="https://airfreshconnect.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary font-medium transition-colors"
              data-testid="button-looking-for-work-header"
            >
              Looking for Work
            </a>
            <Button 
              asChild 
              className="bg-primary hover:bg-primary/90 text-white rounded-md px-4 py-2"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.href}>
                  <div className="px-3 py-2 text-base font-medium text-gray-600">
                    {link.label}
                  </div>
                  <div className="pl-6 space-y-1">
                    {serviceLinks.map((serviceLink) => (
                      <Link
                        key={serviceLink.href}
                        href={serviceLink.href}
                        className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50 hover:text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {serviceLink.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.href)
                      ? "bg-primary/10 text-primary"
                      : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="px-3 py-2 space-y-2">
              <a 
                href="https://airfreshconnect.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-primary"
                data-testid="button-looking-for-work-mobile"
              >
                Looking for Work
              </a>
              <Button 
                asChild 
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-md"
              >
                <Link href="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}