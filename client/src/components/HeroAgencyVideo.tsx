import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import airFreshLogo from "@assets/airfresh_circle_logo.png";

export default function HeroAgencyVideo() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Preconnect hints for Vimeo */}
      {!shouldReduceMotion && (
        <>
          <link rel="preconnect" href="https://player.vimeo.com" />
          <link rel="preconnect" href="https://i.vimeocdn.com" />
          <link rel="preconnect" href="https://f.vimeocdn.com" />
        </>
      )}
      
      {/* Video Background - All devices */}
      {!shouldReduceMotion && (
        <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
          <div className={`absolute top-1/2 left-1/2 min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 ${
            isMobile 
              ? 'w-[300vw] h-[100vh]' 
              : 'w-[177.78vh] h-[56.25vw]'
          }`}>
            <iframe
              src="https://player.vimeo.com/video/395306497?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&muted=1&loop=1&playsinline=1#t=12s"
              className="absolute top-0 left-0 w-full h-full object-cover"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              loading="lazy"
              onLoad={() => setVideoLoaded(true)}
              style={{ pointerEvents: 'none' }}
              title="AirFresh Marketing Brand Experience Video Background"
            />
          </div>
          
          {/* Loading overlay with gradient background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900"
            initial={{ opacity: 1 }}
            animate={{ opacity: videoLoaded ? 0 : 1 }}
            transition={{ duration: 1 }}
          >
            {/* Optional: Add a subtle animation while loading */}
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </div>
      )}

      {/* Fallback - Static gradient background for reduced motion preference */}
      {shouldReduceMotion && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" />
      )}

      {/* Overlay Gradients for text readability */}
      <div className="absolute inset-0">
        {/* Radial vignette overlay */}
        <div className="absolute inset-0 bg-radial-vignette" style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)'
        }} />
        
        {/* Vertical gradient overlay */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.6) 100%)'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative flex-1 flex items-center justify-center px-4 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto text-center"
        >
          {/* Air Fresh Logo */}
          <motion.div
            variants={itemVariants}
            className="mb-12 mt-8"
          >
            <figure itemScope itemType="https://schema.org/ImageObject">
              <img 
                src={airFreshLogo} 
                alt="AirFresh Marketing logo" 
                title="AirFresh Marketing - Experiential Marketing Agency"
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-full shadow-2xl"
                loading="eager"
                decoding="async"
                width="192"
                height="192"
                itemProp="contentUrl"
              />
              <meta itemProp="name" content="AirFresh Marketing Logo" />
              {/* SEO keywords in meta and caption, not alt text */}
              <meta itemProp="description" content="AirFresh Marketing - Experiential marketing agency specializing in brand ambassadors, event staffing, guerrilla marketing, and brand activations nationwide" />
              <figcaption className="sr-only" itemProp="caption">
                AirFresh Marketing logo - Leading experiential marketing and brand activation agency
              </figcaption>
            </figure>
          </motion.div>

          {/* Agency Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8"
          >
            <Play className="w-3 h-3" />
            <span>Experiential Marketing Agency</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
          >
            <span className="block">Turning Passive Audiences</span>
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              into Active Superfans
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
          >
            We craft immersive experiential marketing campaigns that spark emotional connections, 
            drive brand loyalty, and transform one-time customers into lifelong advocates.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-6"
          >
            {/* Primary CTAs Row */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 group"
                  data-testid="button-get-strategy-audit"
                >
                  <Link href="/contact">
                    Get Your Strategy Audit
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-6 text-lg font-semibold rounded-full transition-all duration-200"
                >
                  <Link href="/case-studies">
                    View Our Work
                  </Link>
                </Button>
              </motion.div>
            </div>
            
            {/* Looking for Work Button - Below */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/talent"
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white/90 rounded-full transition-all duration-300 hover:bg-white/20 group"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
                data-testid="button-looking-for-work-hero"
              >
                Looking for Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/80"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">300+</div>
              <div className="text-sm uppercase tracking-wide">Brands Activated</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm uppercase tracking-wide">Cities Nationwide</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">5000+</div>
              <div className="text-sm uppercase tracking-wide">Brand Ambassadors</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Scroll to Explore</span>
          <ChevronDown className="w-6 h-6 text-white/60" />
        </motion.div>
      </motion.div>

    </section>
  );
}