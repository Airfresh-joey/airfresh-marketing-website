'use client'

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    // Check on mount
    toggleVisibility();

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 100 }}
          className="fixed bottom-8 z-[100]"
          style={{
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          {!isExpanded ? (
            // Collapsed floating button
            <motion.button
              onClick={() => setIsExpanded(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-full px-6 py-4 shadow-2xl flex items-center gap-2 font-bold transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Get A Quote</span>
            </motion.button>
          ) : (
            // Expanded options
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-2xl p-4 min-w-[280px]"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-gray-900">Contact Us</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <Link href="/contact">
                  <Button
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white"
                    size="lg"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Request A Quote
                  </Button>
                </Link>

                <a href="tel:+13037206060">
                  <Button
                    variant="outline"
                    className="w-full border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50"
                    size="lg"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (303) 720-6060
                  </Button>
                </a>
              </div>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Average response time: &lt; 2 hours
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
