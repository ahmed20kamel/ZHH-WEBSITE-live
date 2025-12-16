'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import HeroSlider from './HeroSlider';
import { BarChart3, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });

  const stats = [
    { 
      value: '10B+', 
      label: 'Assets Under Management',
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      value: '20+', 
      label: 'Years of Growth',
      icon: Calendar,
      color: 'from-emerald-500 to-teal-500'
    },
    { 
      value: '10+', 
      label: 'Global Operations',
      icon: MapPin,
      color: 'from-violet-500 to-indigo-500'
    },
  ];

  return (
    <section 
      ref={heroRef}
      className="relative w-full flex items-center justify-center overflow-hidden" 
      style={{ 
        height: '100vh',
        minHeight: '600px',
        maxHeight: '1200px'
      }}
    >
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-gray-900/30 to-transparent z-10" />
        
        {/* Hero Slider */}
        <div className="absolute inset-0 z-0">
          <HeroSlider />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-5 overflow-hidden">
          {/* Floating Particles - Removed to prevent hydration mismatch */}

          {/* Animated Light Orbs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 2 }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 0.2, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 2, delay: 0.3 }}
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"
          />
        </div>
      </div>

      {/* Logo - Premium Positioning */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-4 left-4 md:top-8 md:left-8 z-30"
      >
        <Link 
          href="/" 
          className="group flex items-center gap-2 md:gap-4"
          style={{ textDecoration: 'none' }}
        >
          {/* Logo without square background */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <img
              src="/assets/logos/zhh-group-holding-logo.svg"
              alt="ZHH Group Holding"
              className="w-20 h-20 md:w-32 md:h-32 object-contain drop-shadow-lg"
              style={{
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))',
                WebkitFilter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))'
              }}
            />
          </motion.div>

          {/* Logo Text with Animation - Hidden on mobile */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex flex-col"
          >
            <span 
              className="body-small-unified text-white uppercase tracking-wider" 
              style={{ 
                fontWeight: 600,
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)'
              }}
            >
              ZHH Group
            </span>
            <span 
              className="body-small-unified text-white uppercase tracking-widest" 
              style={{ 
                fontSize: 'clamp(10px, 1.2vw, 12px)',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)'
              }}
            >
              Holding
            </span>
          </motion.div>
        </Link>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 w-full h-full flex items-center pt-20 md:pt-0">
        <div className="container-unified">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-6 md:space-y-8">
              {/* Tagline with Animation */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/10"
              >
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white flex-shrink-0" />
                <span 
                  className="body-small-unified text-white" 
                  style={{ 
                    fontWeight: 500, 
                    fontSize: 'clamp(11px, 1.3vw, 14px)',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)'
                  }}
                >
                  Emirati Sovereign-Style Investor
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h1-unified text-white"
                style={{
                  fontSize: 'clamp(36px, 5.1vw, 72px)',
                  lineHeight: 1.15,
                  fontWeight: 300,
                  letterSpacing: '-0.5px',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)'
                }}
              >
                Building a Legacy of
                <span className="block mt-2">
                  <span 
                    className="font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                    style={{
                      textShadow: 'none',
                      WebkitTextStroke: '0.5px rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    Trust & Growth
                  </span>
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="body-large-unified text-white"
                style={{ 
                  maxWidth: '600px',
                  fontSize: 'clamp(16px, 1.8vw, 20px)',
                  lineHeight: 1.6,
                  textShadow: '0 1px 4px rgba(0, 0, 0, 0.4), 0 0 10px rgba(0, 0, 0, 0.2)',
                  fontWeight: 400
                }}
              >
                ZHH Group Holding is a diversified Emirati conglomerate managing strategic investments 
                across construction, real estate, global trading, and precious metals.
              </motion.p>

            </div>

            {/* Right Column - Stats Cards */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-5 md:space-y-7 lg:space-y-8 mt-8 lg:mt-0"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ x: 50, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.2) }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <div className="relative">
                      {/* Card */}
                      <div 
                        className="relative overflow-hidden"
                        style={{ 
                          minHeight: '100px',
                          backgroundColor: 'rgba(15, 23, 42, 0.65)',
                          backdropFilter: 'blur(12px)',
                          borderRadius: 'clamp(16px, 2vw, 24px)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)',
                          padding: 'clamp(20px, 2.5vw, 28px)'
                        }}
                      >
                        <div className="flex items-center gap-4 md:gap-5">
                          {/* Icon with unified style */}
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                            className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                          >
                            <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={2} />
                          </motion.div>

                          {/* Content with improved alignment */}
                          <div className="flex-1 flex flex-col justify-center min-h-[48px]">
                            <div 
                              className="text-white mb-1 font-semibold"
                              style={{
                                fontSize: 'clamp(20px, 2.5vw, 28px)',
                                lineHeight: 1.2,
                                fontWeight: 600
                              }}
                            >
                              {stat.value}
                            </div>
                            <div 
                              className="text-white/80"
                              style={{
                                fontSize: 'clamp(12px, 1.4vw, 14px)',
                                lineHeight: 1.4
                              }}
                            >
                              {stat.label}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Subtle Hover Shadow Effect */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 rounded-3xl"
                        style={{
                          boxShadow: `0 12px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)`,
                          pointerEvents: 'none',
                          zIndex: -1
                        }}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="body-small-unified text-white/60">Scroll to Explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Custom CSS for Additional Effects */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </section>
  );
}