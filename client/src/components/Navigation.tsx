import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
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
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img 
                className="h-8 w-auto" 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&w=120&h=40&fit=crop" 
                alt="AirFresh Marketing Logo" 
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger className="text-gray-700 hover:text-primary font-medium flex items-center">
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
              <DropdownMenuTrigger className="text-gray-700 hover:text-primary font-medium flex items-center">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/services">Experiential Marketing</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services">Brand Strategy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services">Event Production</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link 
              href="/about" 
              className={`font-medium ${isActive('/about') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className={`font-medium ${isActive('/blog') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium ${isActive('/contact') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center">
            <div className="bg-primary/10 rounded-lg px-4 py-2 mr-4">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent text-sm placeholder-gray-600 outline-none w-40" 
              />
            </div>
            <Button asChild>
              <Link href="/contact">Request Info</Link>
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
            <Link href="/projects" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Projects</Link>
            <Link href="/services" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Services</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">About</Link>
            <Link href="/blog" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Blog</Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-50">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
