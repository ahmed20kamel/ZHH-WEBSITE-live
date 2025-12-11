'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import HeroSlider from './HeroSlider';
import { TrendingUp, Globe, Award, ChevronRight, Play, Sparkles } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });

  const stats = [
    { 
      value: 'AED 100M+', 
      label: 'Assets Under Management',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      value: '20+', 
      label: 'Years of Growth',
      icon: Award,
      color: 'from-emerald-500 to-teal-500'
    },
    { 
      value: '10+', 
      label: 'Global Operations',
      icon: Globe,
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
          {/* Animated Logo Container */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <div className="w-16 h-16 md:w-28 md:h-28 rounded-xl md:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-md">
              <img
                src="/assets/logos/zhh-group-holding-logo.svg"
                alt="ZHH Group Holding"
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
            </div>
            
            {/* Animated Glow Effect */}
            <motion.div
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-sm -z-10"
            />
          </motion.div>

          {/* Logo Text with Animation - Hidden on mobile */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden md:flex flex-col"
          >
            <span className="body-small-unified text-white uppercase tracking-wider" style={{ fontWeight: 600 }}>
              ZHH Group
            </span>
            <span className="body-small-unified text-white/70 uppercase tracking-widest" style={{ fontSize: 'clamp(10px, 1.2vw, 12px)' }}>
              Holding
            </span>
          </motion.div>
        </Link>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-20 w-full h-full flex items-center pt-20 md:pt-0">
        <div className="container-unified">
          <div className="w-full">
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