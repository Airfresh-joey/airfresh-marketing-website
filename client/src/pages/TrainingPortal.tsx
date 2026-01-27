import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, BookOpen, ArrowRight, GraduationCap, Video, Award, Play, ChevronDown, CheckCircle, Star, LogOut } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import { useAuth } from "@/hooks/use-auth";
import { motion, useReducedMotion } from "framer-motion";
import airFreshLogo from "/images/airfresh-logo.svg";

interface TrainingClient {
  id: string;
  name: string;
  slug: string;
  description: string;
  logoUrl: string | null;
  primaryColor: string;
  isActive: boolean;
}

function LandingSection() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleLogin = () => {
    window.location.href = "/api/login";
  };

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

  const features = [
    {
      icon: Building2,
      title: "Multi-Client Platform",
      description: "Access training for all our client partnerships in one unified platform"
    },
    {
      icon: Video,
      title: "Interactive Learning",
      description: "Engaging videos, quizzes, and interactive content for effective training"
    },
    {
      icon: Award,
      title: "Progress Tracking",
      description: "Monitor your learning journey and celebrate your achievements"
    }
  ];

  const benefits = [
    "Brand-specific training modules",
    "Self-paced learning experience",
    "Certification upon completion",
    "Mobile-friendly platform"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {!shouldReduceMotion && (
        <>
          <link rel="preconnect" href="https://player.vimeo.com" />
          <link rel="preconnect" href="https://i.vimeocdn.com" />
          <link rel="preconnect" href="https://f.vimeocdn.com" />
        </>
      )}

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
              title="AirFresh Training Portal Video Background"
            />
          </div>
          
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900"
            initial={{ opacity: 1 }}
            animate={{ opacity: videoLoaded ? 0 : 1 }}
            transition={{ duration: 1 }}
          >
            <div className="absolute inset-0 bg-black/20" />
          </motion.div>
        </div>
      )}

      {shouldReduceMotion && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" />
      )}

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-radial-vignette" style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)'
        }} />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)'
        }} />
      </div>

      <div className="relative z-10">
        <nav className="absolute top-0 left-0 right-0 z-20">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <img 
                  src={airFreshLogo} 
                  alt="AirFresh Marketing" 
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-white font-bold text-xl">AirFresh Training</span>
              </Link>
              <Button 
                onClick={handleLogin}
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white"
                data-testid="button-login-nav"
              >
                Sign In
              </Button>
            </div>
          </div>
        </nav>

        <div className="min-h-screen flex items-center justify-center px-4 pt-24 pb-32">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-5xl mx-auto text-center"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8">
                <GraduationCap className="w-4 h-4" />
                <span>Professional Training Platform</span>
              </div>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              <span className="block">AirFresh Marketing</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Training Portal
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 font-light leading-relaxed"
            >
              Access specialized training courses, videos, and assessments 
              tailored to our client partnerships. Elevate your skills and become a certified brand ambassador.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full text-white/80 text-sm"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={handleLogin}
                  size="lg" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-200 group"
                  data-testid="button-login"
                >
                  Sign In to Access Training
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
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
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 mx-auto">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

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
            <span className="text-white/60 text-sm font-medium uppercase tracking-wider">Start Learning</span>
            <ChevronDown className="w-6 h-6 text-white/60" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function ClientSelectionSection() {
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const { user, logout } = useAuth();

  const { data: clients = [], isLoading } = useQuery<TrainingClient[]>({
    queryKey: ["/api/training/clients"],
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-white/80">Loading your training dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      <nav className="bg-white/5 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src={airFreshLogo} 
                alt="AirFresh Marketing" 
                className="w-10 h-10 rounded-full"
              />
              <span className="text-white font-bold text-xl">AirFresh Training</span>
            </Link>
            <div className="flex items-center gap-4">
              {user && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-semibold text-sm">
                    {(user.firstName?.[0] || user.email?.[0] || 'U').toUpperCase()}
                  </div>
                  <span className="text-white/90 text-sm font-medium hidden sm:block">
                    {user.firstName || user.email || 'User'}
                  </span>
                </div>
              )}
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => logout()}
                className="text-white/70 hover:text-white hover:bg-white/10"
                data-testid="button-logout"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 rounded-full text-cyan-400 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              <span>Welcome back, {user?.firstName || 'Team Member'}!</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Select Your Training
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Choose a client to access specialized training courses, videos, and assessments 
              tailored to their brand.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {clients.map((client: TrainingClient) => (
              <motion.div
                key={client.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card 
                  className={`cursor-pointer transition-all duration-300 bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 overflow-hidden group ${
                    selectedClient === client.id 
                      ? 'ring-2 ring-cyan-500 bg-white/10' 
                      : ''
                  }`}
                  onClick={() => setSelectedClient(client.id)}
                  data-testid={`card-client-${client.slug}`}
                >
                  <div 
                    className="h-2 w-full"
                    style={{ backgroundColor: client.primaryColor || '#06b6d4' }}
                  />
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${client.primaryColor}20` || 'rgba(6, 182, 212, 0.1)' }}
                      >
                        {client.logoUrl ? (
                          <img 
                            src={client.logoUrl} 
                            alt={`${client.name} Logo`}
                            className="w-10 h-10 object-contain"
                          />
                        ) : (
                          <Building2 className="w-8 h-8" style={{ color: client.primaryColor || '#06b6d4' }} />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-white mb-1 truncate">
                          {client.name}
                        </h3>
                        <p className="text-white/60 text-sm line-clamp-2">
                          {client.description || 'Professional training courses'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-white/60 text-sm">
                          <BookOpen className="w-4 h-4" />
                          <span>Courses</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-white/60 text-sm">
                          <Video className="w-4 h-4" />
                          <span>Videos</span>
                        </div>
                      </div>
                      {client.isActive ? (
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          Available
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-white/10 text-white/60">
                          Coming Soon
                        </Badge>
                      )}
                    </div>

                    {selectedClient === client.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 pt-4 border-t border-white/10"
                      >
                        <Link href={`/training/dashboard/${client.slug}`}>
                          <Button 
                            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold"
                            data-testid="button-start-training"
                          >
                            Start Training
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </motion.div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {clients.length === 0 && (
            <motion.div 
              variants={itemVariants}
              className="text-center py-16"
            >
              <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-12 h-12 text-white/30" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No Training Available</h3>
              <p className="text-white/60">Check back later for available training programs.</p>
            </motion.div>
          )}

          <motion.div 
            variants={itemVariants}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Need Help?</h3>
                <p className="text-white/70">
                  Contact your administrator or reach out to our support team for assistance.
                </p>
              </div>
              <Button 
                asChild
                variant="outline" 
                className="border-white/20 text-white hover:bg-white/10 whitespace-nowrap"
              >
                <Link href="/contact">
                  Contact Support
                </Link>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default function TrainingPortal() {
  const { isAuthenticated, isLoading } = useAuth();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AirFresh Marketing Training Portal",
    "description": "Professional training portal for brand ambassadors and experiential marketing talent",
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-white/80">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title="Training Portal | AirFresh Marketing"
        description="Access specialized training courses, videos, and assessments tailored to our client partnerships."
        structuredData={structuredData}
      />
      {isAuthenticated ? <ClientSelectionSection /> : <LandingSection />}
    </>
  );
}
