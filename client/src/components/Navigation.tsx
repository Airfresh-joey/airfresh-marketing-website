import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoUrl from "/images/airfresh-logo.svg";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center">
                <img 
                  src={logoUrl} 
                  alt="AirFresh" 
                  className="h-10 w-auto"
                />
              </div>
            </Link>
          </div>
          
          <ul className="hidden md:flex items-center space-x-8 list-none m-0 p-0" role="menubar">
            <li role="none">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-600 hover:text-gray-900 font-medium flex items-center" role="menuitem">
                  Projects <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/case-studies">Case Studies</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/projects/brand-activations">Brand Activations</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/projects/corporate-events">Corporate Events</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            
            <li role="none">
              <DropdownMenu>
                <DropdownMenuTrigger className="text-gray-600 hover:text-gray-900 font-medium flex items-center" role="menuitem">
                  Services <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>
                    <Link href="/services/experiential-marketing">Experiential Marketing</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/services/brand-strategy">Brand Strategy</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/services/event-production">Event Production</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
            
            <li role="none">
              <Link 
                href="/talent" 
                className={`font-medium ${isActive('/talent') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
                role="menuitem"
              >
                Talent
              </Link>
            </li>
            <li role="none">
              <Link 
                href="/about" 
                className={`font-medium ${isActive('/about') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
                role="menuitem"
              >
                About
              </Link>
            </li>
            <li role="none">
              <Link 
                href="/blog" 
                className={`font-medium ${isActive('/blog') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
                role="menuitem"
              >
                Blog
              </Link>
            </li>
            <li role="none">
              <Link 
                href="/contact" 
                className={`font-medium ${isActive('/contact') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
                role="menuitem"
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="hidden md:flex items-center space-x-3">
            <Link 
              href="/talent"
              className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors"
              data-testid="button-looking-for-work-header"
            >
              Looking for Work
            </Link>
            <Button asChild className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200" data-testid="button-get-strategy-audit-nav">
              <Link href="/contact">Get Your Strategy Audit</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden">
          <ul className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg list-none m-0 p-0">
            <li><Link href="/projects" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Projects</Link></li>
            <li><Link href="/services" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Services</Link></li>
            <li><Link href="/talent" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Talent</Link></li>
            <li><Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
            <li><Link href="/blog" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Blog</Link></li>
            <li><Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            <li>
              <Link 
                href="/talent"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50 font-medium"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="button-looking-for-work-mobile"
              >
                Looking for Work
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
