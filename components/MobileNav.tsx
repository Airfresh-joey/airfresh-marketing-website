'use client';

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
  hasDropdown?: boolean;
  isAnchor?: boolean;
}

interface ServiceLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  navLinks: NavLink[];
  serviceLinks: ServiceLink[];
}

export default function MobileNav({ navLinks, serviceLinks }: MobileNavProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white hover:text-cyan-400 focus:outline-none transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
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
                  className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-800 hover:text-cyan-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="px-3 py-2 space-y-2">
              <Link
                href="/careers"
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
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
