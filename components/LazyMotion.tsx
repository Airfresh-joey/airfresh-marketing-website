'use client';

import dynamic from 'next/dynamic';
import { ComponentProps, ReactNode } from 'react';

// Dynamically import framer-motion to avoid blocking initial render
const MotionDiv = dynamic(
  () => import('framer-motion').then((mod) => mod.motion.div),
  { 
    ssr: false,
    loading: () => <div /> 
  }
);

// Re-export with same API but lazy-loaded
export { MotionDiv };

// Simple wrapper for common animation patterns
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}

export function AnimatedCard({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </MotionDiv>
  );
}
