import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Users, TrendingUp, Star, Zap, Globe } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

export default function HeroUnbelievable() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const springConfig = { stiffness: 100, damping: 30 };
  
  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  
  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x: clientX, y: clientY });
      mouseX.set(x * 50);
      mouseY.set(y * 50);
    };
    
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mouseX, mouseY]);

  // Generate floating orbs
  const floatingOrbs = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 300 + 200,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5,
    color: ['purple', 'cyan', 'pink', 'indigo', 'blue', 'violet'][i]
  }));

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ultra Premium Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 via-slate-900 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/50 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Aurora Effect */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-cyan-600/30 blur-3xl animate-aurora"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/30 via-purple-600/30 to-pink-600/30 blur-3xl animate-aurora-reverse"></div>
      </div>
      
      {/* 3D Floating Orbs */}
      {floatingOrbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full bg-gradient-to-br from-${orb.color}-500/30 to-${orb.color}-700/30 blur-3xl`}
          style={{
            width: orb.size,
            height: orb.size,
            x: smoothMouseX,
            y: smoothMouseY,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Particle Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3) 0%, transparent 50%)`,
        }}></div>
        {Array.from({ length: 50 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Holographic Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.03) 2px,
              rgba(255, 255, 255, 0.03) 4px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(255, 255, 255, 0.03) 2px,
              rgba(255, 255, 255, 0.03) 4px
            )
          `,
        }}
      />
      
      {/* Main Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 text-center"
        style={{ y: y1 }}
      >
        {/* Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-block mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 blur-xl opacity-50 animate-pulse"></div>
            <div className="relative bg-black/50 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-medium">Elite Event Staffing Agency</span>
              <span className="px-2 py-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-xs font-bold text-white">
                #1 NATIONWIDE
              </span>
            </div>
          </div>
        </motion.div>
        
        {/* Epic Headline */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-none"
        >
          <span className="block text-white/90 mb-2">TRANSFORM</span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-shift">
            YOUR BRAND
          </span>
          <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 mt-4 font-light">
            Into An <span className="italic font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Experience</span>
          </span>
        </motion.h1>
        
        {/* Subheadline with Typewriter Effect */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl sm:text-2xl text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed"
        >
          Deploy our elite force of <span className="text-purple-400 font-bold">5,000+ brand ambassadors</span> across 
          <span className="text-cyan-400 font-bold"> 50+ cities</span> and watch your events become 
          <span className="text-pink-400 font-bold"> legendary moments</span> that customers never forget
        </motion.p>
        
        {/* Floating Stats Cards */}
        <motion.div 
          className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-12"
          style={{ y: y2 }}
        >
          {[
            { value: "300+", label: "Fortune 500 Clients", icon: Globe, color: "purple" },
            { value: "99.8%", label: "Success Rate", icon: TrendingUp, color: "cyan" },
            { value: "2M+", label: "Audiences Reached", icon: Users, color: "pink" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-${stat.color}-600 to-${stat.color}-800 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`}></div>
              <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <stat.icon className={`w-8 h-8 text-${stat.color}-400 mx-auto mb-3`} />
                <div className={`text-4xl font-black bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 mt-1">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Buttons with Liquid Effect */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
          style={{ y: y3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-xl opacity-70 group-hover:opacity-100 animate-pulse"></div>
            <Button 
              asChild 
              size="lg" 
              className="relative bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-12 py-8 text-xl font-bold shadow-2xl rounded-full border border-white/20"
            >
              <Link href="/contact">
                <Zap className="mr-2 h-6 w-6" />
                Launch Your Campaign
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
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
              className="border-2 border-white/30 bg-white/10 backdrop-blur-xl text-white hover:bg-white/20 px-12 py-8 text-xl font-bold rounded-full"
            >
              <Link href="/portfolio">
                <Sparkles className="mr-2 h-6 w-6" />
                View Portfolio
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        
        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/40"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Live Support 24/7</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Instant Quote</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">100% Insured</span>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-md">
          <motion.div 
            className="w-2 h-2 bg-gradient-to-b from-purple-400 to-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
      
      <style>{`
        @keyframes aurora {
          0%, 100% {
            transform: translateX(-100%) translateY(0) rotate(0deg);
          }
          50% {
            transform: translateX(100%) translateY(-100%) rotate(180deg);
          }
        }
        
        @keyframes aurora-reverse {
          0%, 100% {
            transform: translateX(100%) translateY(-100%) rotate(180deg);
          }
          50% {
            transform: translateX(-100%) translateY(0) rotate(0deg);
          }
        }
        
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-aurora {
          animation: aurora 20s ease-in-out infinite;
        }
        
        .animate-aurora-reverse {
          animation: aurora-reverse 20s ease-in-out infinite;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </section>
  );
}