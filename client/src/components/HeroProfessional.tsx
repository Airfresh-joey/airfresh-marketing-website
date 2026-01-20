import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroProfessional() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Clean gradient background similar to talent page */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-gray-50 to-white" />
      
      {/* Main Hero Content */}
      <div className="relative flex-1 flex items-center justify-center px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Logo/Brand Mark */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 mx-auto mb-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-lg"
          >
            <span className="text-white text-3xl font-bold">AF</span>
          </motion.div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-light mb-2">
            <span className="text-gray-800">Your brand.</span>
          </h1>
          <h1 className="text-5xl md:text-7xl font-light mb-8">
            <span className="text-blue-600">Our expertise.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Partner with Air Fresh Marketing to create exceptional brand experiences 
            that captivate audiences across North America.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                asChild 
                size="lg" 
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-6 text-lg font-medium rounded-lg shadow-md transition-all duration-200"
              >
                <Link href="/contact">
                  Start Your Campaign
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-2 border-gray-300 bg-white hover:bg-gray-50 text-gray-700 px-8 py-6 text-lg font-medium rounded-lg transition-all duration-200"
              >
                <Link href="/portfolio">
                  View Case Studies
                </Link>
              </Button>
            </motion.div>
          </div>
          
          {/* Trust Indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-gray-500"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800">300+</div>
              <div className="text-sm uppercase tracking-wide">Brands Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800">50+</div>
              <div className="text-sm uppercase tracking-wide">Cities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800">5000+</div>
              <div className="text-sm uppercase tracking-wide">Brand Ambassadors</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </motion.div>
    </section>
  );
}