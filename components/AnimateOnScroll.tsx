'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number; // delay in ms
  animation?: 'fadeUp' | 'fadeIn' | 'scaleIn' | 'slideLeft' | 'slideRight';
  once?: boolean; // only animate once
}

export default function AnimateOnScroll({ 
  children, 
  className = '', 
  delay = 0,
  animation = 'fadeUp',
  once = true 
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, once]);

  const baseStyles = 'transition-all duration-700 ease-out';
  
  const animations = {
    fadeUp: {
      hidden: 'opacity-0 translate-y-8',
      visible: 'opacity-100 translate-y-0'
    },
    fadeIn: {
      hidden: 'opacity-0',
      visible: 'opacity-100'
    },
    scaleIn: {
      hidden: 'opacity-0 scale-95',
      visible: 'opacity-100 scale-100'
    },
    slideLeft: {
      hidden: 'opacity-0 -translate-x-12',
      visible: 'opacity-100 translate-x-0'
    },
    slideRight: {
      hidden: 'opacity-0 translate-x-12',
      visible: 'opacity-100 translate-x-0'
    }
  };

  const animationClass = isVisible ? animations[animation].visible : animations[animation].hidden;

  return (
    <div ref={ref} className={`${baseStyles} ${animationClass} ${className}`}>
      {children}
    </div>
  );
}

// Simpler wrapper for hover effects (replaces whileHover)
interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  scale?: 'sm' | 'md' | 'lg';
}

export function HoverScale({ children, className = '', scale = 'md' }: HoverScaleProps) {
  const scales = {
    sm: 'hover:scale-[1.02]',
    md: 'hover:scale-105',
    lg: 'hover:scale-110'
  };

  return (
    <div className={`transition-transform duration-300 ${scales[scale]} active:scale-95 ${className}`}>
      {children}
    </div>
  );
}
