'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import HeroSlider from './HeroSlider';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });

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

        </Link>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 w-full h-full flex items-center pt-20 md:pt-0">
          <div className="container-unified">
          <div className="flex items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-6 md:space-y-8">
              {/* Main Headline */}
              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-white"
                style={{
                  fontSize: 'clamp(48px, 6.5vw, 88px)',
                  lineHeight: 1.15,
                  fontWeight: 600,
                  letterSpacing: '-0.5px',
                  textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  marginBottom: 'clamp(24px, 3vw, 32px)'
                }}
              >
                Building a Legacy of
                <span className="block mt-2 text-white" style={{ fontWeight: 600 }}>
                  Trust & Growth
                </span>
              </motion.h1>

            </div>
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