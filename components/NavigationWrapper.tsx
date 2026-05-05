import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import MobileNav from "./MobileNav";

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/technology", label: "Technology" },
  { href: "/locations", label: "Locations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" }
];

const serviceLinks = [
  { href: "/services/brand-ambassadors", label: "Brand Ambassadors" },
  { href: "/services/street-teams", label: "Street Teams" },
  { href: "/services/experiential-marketing", label: "Experiential Marketing" },
  { href: "/services/convention-staffing", label: "Convention Staffing" },
  { href: "/services/event-management", label: "Event Management" },
  { href: "/services/sampling", label: "Product Sampling" },
  { href: "/services/promotional-models", label: "Promotional Models" }
];

// Server component for the static nav structure
export default function NavigationWrapper() {
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

          {/* Desktop Navigation - Server rendered */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div key={link.href} className="relative group">
                  <button className="font-medium transition-all duration-200 flex items-center gap-1 text-white hover:text-cyan-400">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 pt-1 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
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
                      <div className="border-t border-gray-700 my-1" />
                      <Link
                        href="/guides/event-staffing-101"
                        className="block px-4 py-2 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 text-sm"
                      >
                        Event Staffing Guide
                      </Link>
                      <Link
                        href="/event-staffing-near-me"
                        className="block px-4 py-2 text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 text-sm"
                      >
                        Find Staff Near Me
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium transition-all duration-200 text-white hover:text-cyan-400"
                >
                  {link.label}
                </Link>
              )
            ))}
            <Link href="/contact">
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg px-6 py-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-300">
                Request Proposal
              </Button>
            </Link>
          </div>

          {/* Mobile menu - client component */}
          <MobileNav navLinks={navLinks} serviceLinks={serviceLinks} />
        </div>
      </div>
    </nav>
  );
}
