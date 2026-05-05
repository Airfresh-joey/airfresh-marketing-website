'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

// Vimeo video URL with start time at 7 seconds for instant action
const VIMEO_VIDEO_URL = "https://player.vimeo.com/video/395306497?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&muted=1&loop=1&playsinline=1&dnt=1#t=7s";

// Video thumbnails - mobile optimized for fast LCP
const VIDEO_THUMBNAIL_MOBILE = "/images/hero-poster-mobile.jpg";
const VIDEO_THUMBNAIL_DESKTOP = "/images/hero-poster-desktop.jpg";

export default function HeroAgencyVideo() {
  // Start as null to indicate "not yet determined" - prevents premature video load
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Only load video on desktop (768px+)
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    
    // Preload mobile hero image for fast LCP
    if (window.innerWidth < 768) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = VIDEO_THUMBNAIL_MOBILE;
      link.fetchPriority = 'high';
      document.head.appendChild(link);
    }
    
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Keep hero copy visible on first paint; animation should not gate the main message.
  const isVisible = true;

  return (
    <section ref={sectionRef} className="relative min-h-[calc(100svh-4rem)] md:min-h-screen flex flex-col overflow-hidden">
      {/* Preconnect hints for Vimeo - desktop only (after detection) */}
      {isDesktop === true && (
        <>
          <link rel="preconnect" href="https://player.vimeo.com" />
          <link rel="preconnect" href="https://i.vimeocdn.com" />
          <link rel="preconnect" href="https://f.vimeocdn.com" />
        </>
      )}

      {/* Video Background with facade pattern */}
      <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
        {/* Static poster image for fast LCP - responsive with mobile optimization */}
        <div className="absolute inset-0">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={VIDEO_THUMBNAIL_MOBILE}
            />
            <source
              media="(min-width: 768px)"
              srcSet={VIDEO_THUMBNAIL_DESKTOP}
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={VIDEO_THUMBNAIL_DESKTOP}
              alt="AirFresh Marketing experiential brand activation with professional brand ambassadors"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </picture>
        </div>

        {/* Video loads only on desktop for performance - isDesktop must be explicitly true */}
        {isDesktop === true && (
          <div className={`absolute top-1/2 left-1/2 min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          } w-[177.78vh] h-[56.25vw]`}>
            <iframe
              ref={iframeRef}
              src={VIMEO_VIDEO_URL}
              className="absolute top-0 left-0 w-full h-full object-cover"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              loading="eager"
              onLoad={() => setVideoLoaded(true)}
              style={{ pointerEvents: 'none' }}
              title="AirFresh Marketing Brand Experience Video Background"
            />
          </div>
        )}
      </div>

      {/* Overlay Gradients for text readability */}
      <div className="absolute inset-0">
        {/* Radial vignette overlay */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)'
        }} />
        
        {/* Vertical gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.86) 0%, rgba(0,0,0,0.62) 50%, rgba(0,0,0,0.74) 100%)'
        }} />
      </div>

      {/* Main Content - CSS animations instead of framer-motion */}
      <div className="relative flex-1 flex items-center justify-center px-4 py-8 md:py-0 z-10">
        <div 
          className={`max-w-6xl mx-auto text-center transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Air Fresh Logo */}
          <div className="mb-12 mt-8 hidden md:block">
            <figure itemScope itemType="https://schema.org/ImageObject">
              <Image
                src="/images/airfresh-logo.svg"
                alt="AirFresh Marketing logo"
                title="AirFresh Marketing - Experiential Marketing Agency"
                className="mx-auto h-24 w-24 rounded-full shadow-2xl md:h-48 md:w-48"
                width={192}
                height={192}
                priority
                itemProp="contentUrl"
              />
              <meta itemProp="name" content="AirFresh Marketing Logo" />
              <meta itemProp="description" content="AirFresh Marketing - Experiential marketing agency specializing in brand ambassadors, event staffing, guerrilla marketing, and brand activations nationwide" />
              <figcaption className="sr-only" itemProp="caption">
                AirFresh Marketing logo - Leading experiential marketing and brand activation agency
              </figcaption>
            </figure>
          </div>

          {/* Agency Badge */}
          <div 
            className={`inline-flex items-center gap-2 px-4 py-2 bg-black/30 backdrop-blur-sm rounded-full text-white/95 text-sm font-medium mb-4 md:mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Play className="w-3 h-3" />
            <span>Experiential Marketing Agency</span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 md:mb-6 drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)] transition-all duration-700 delay-150 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="block">Experiential Marketing</span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              That Turns Fans into Superfans
            </span>
          </h1>

          {/* Subheadline */}
          <p 
            className={`text-base sm:text-lg md:text-2xl text-white/95 max-w-3xl mx-auto mb-6 md:mb-12 font-light leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            We craft immersive experiential marketing campaigns that spark emotional connections,
            drive brand loyalty, and transform one-time customers into lifelong advocates.
          </p>

          {/* CTA Buttons */}
          <div 
            className={`flex flex-col items-center gap-6 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {/* Primary CTAs Row */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-5 text-base font-semibold rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 hover:scale-105 active:scale-95 group md:px-8 md:py-6 md:text-lg"
                data-testid="button-get-strategy-audit"
              >
                <Link href="/contact">
                  Get Your Strategy Audit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white/40 bg-black/25 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-5 text-base font-semibold rounded-full transition-all duration-200 hover:scale-105 active:scale-95 md:px-8 md:py-6 md:text-lg"
              >
                <Link href="/portfolio">
                  View Our Work
                </Link>
              </Button>
            </div>

          </div>

          {/* Trust Indicators */}
          <div 
            className={`mt-8 flex flex-wrap items-center justify-center gap-4 text-white/90 transition-all duration-700 delay-500 md:mt-16 md:gap-8 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white md:text-3xl">500+</div>
              <div className="text-sm uppercase tracking-wide">Brands Activated</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white md:text-3xl">50+</div>
              <div className="text-sm uppercase tracking-wide">Cities Nationwide</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-2xl font-bold text-white md:text-3xl">5000+</div>
              <div className="text-sm uppercase tracking-wide">Brand Ambassadors</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 transition-all duration-700 delay-700 md:block ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Scroll to Explore</span>
          <ChevronDown className="w-6 h-6 text-white/60" />
        </div>
      </div>
    </section>
  );
}
