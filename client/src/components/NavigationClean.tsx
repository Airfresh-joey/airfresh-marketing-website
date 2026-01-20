import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

export default function NavigationClean() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/services", label: "Services", hasDropdown: true },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  const serviceLinks = [
    { href: "/services/brand-ambassadors", label: "Brand Ambassadors" },
    { href: "/services/street-teams", label: "Street Teams" },
    { href: "/services/experiential-marketing", label: "Experiential Marketing" }
  ];

  return (
    <nav className="bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 backdrop-blur-lg border-b border-gray-800/50 fixed w-full top-0 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 group">
              <img
                src="/images/airfresh-logo.svg"
                alt="AirFresh Marketing"
                className="h-10 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
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
                    className={`font-medium transition-all duration-200 flex items-center gap-1 ${
                      location.startsWith('/services')
                        ? "text-cyan-400"
                        : "text-white hover:text-cyan-400"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-0 pt-1 w-64">
                      <div className="bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-2xl py-2">
                        {serviceLinks.map((serviceLink) => (
                          <Link
                            key={serviceLink.href}
                            href={serviceLink.href}
                            className="block px-4 py-2 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200"
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
                  className={`font-medium transition-all duration-200 ${
                    isActive(link.href)
                      ? "text-cyan-400"
                      : "text-white hover:text-cyan-400"
                  }`}
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link
              href="/talent"
              className="text-white hover:text-cyan-400 font-medium transition-all duration-200"
              data-testid="button-looking-for-work-header"
            >
              Looking for Work
            </Link>
            <Button
              asChild
              className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg px-4 py-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-cyan-400 focus:outline-none transition-colors"
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
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.href}>
                  <div className="px-3 py-2 text-base font-medium text-white">
                    {link.label}
                  </div>
                  <div className="pl-6 space-y-1">
                    {serviceLinks.map((serviceLink) => (
                      <Link
                        key={serviceLink.href}
                        href={serviceLink.href}
                        className="block px-3 py-2 rounded-md text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400"
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
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "text-white hover:bg-gray-800 hover:text-cyan-400"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="px-3 py-2 space-y-2">
              <Link
                href="/talent"
                className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-cyan-400"
                data-testid="button-looking-for-work-mobile"
                onClick={() => setMobileMenuOpen(false)}
              >
                Looking for Work
              </Link>
              <Button
                asChild
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg"
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