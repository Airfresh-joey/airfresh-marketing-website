import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logoUrl from "@assets/AirFresh_Logo_Horizontal_RGB_1757387574418.jpg";
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
          
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-600 hover:text-gray-900 font-medium flex items-center">
                Projects <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/projects/case-studies">Case Studies</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/projects/brand-activations">Brand Activations</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/projects/corporate-events">Corporate Events</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-600 hover:text-gray-900 font-medium flex items-center">
                Services <ChevronDown className="ml-1 h-4 w-4" />
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
            
            <Link 
              href="/talent" 
              className={`font-medium ${isActive('/talent') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Talent
            </Link>
            <Link 
              href="/about" 
              className={`font-medium ${isActive('/about') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className={`font-medium ${isActive('/blog') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium ${isActive('/contact') ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <a 
              href="https://airfreshconnect.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white/70 backdrop-blur-xl border border-white/50 rounded-full shadow-sm hover:bg-white/80 hover:shadow-md transition-all duration-200"
              style={{
                background: 'rgba(255, 255, 255, 0.72)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}
              data-testid="button-looking-for-work-header"
            >
              <span className="mr-1">💼</span>
              Looking for Work
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 text-white">
              <Link href="/contact">Request more information from AirFresh</Link>
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
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <Link href="/projects" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Projects</Link>
            <Link href="/services" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Services</Link>
            <Link href="/talent" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Talent</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <a 
              href="https://airfreshconnect.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block mx-3 my-2 px-4 py-2 text-center text-sm font-medium text-gray-700 bg-white/70 backdrop-blur-xl border border-gray-200/50 rounded-full hover:bg-white/80 transition-all duration-200"
              style={{
                background: 'rgba(255, 255, 255, 0.72)',
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                border: '1px solid rgba(209, 213, 219, 0.3)'
              }}
              onClick={() => setMobileMenuOpen(false)}
              data-testid="button-looking-for-work-mobile"
            >
              <span className="mr-1">💼</span>
              Looking for Work
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
