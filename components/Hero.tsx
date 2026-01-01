'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import HeroSlider from './HeroSlider';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });
  const [currentSlide, setCurrentSlide] = useState(0);

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
          <HeroSlider onSlideChange={setCurrentSlide} />
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
              src="/assets/logos/drawing.svg"
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

      {/* Hero Content - Left Aligned, Stacked Lines */}
      <div className="relative z-20 w-full h-full flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-start justify-center" style={{ marginLeft: 'clamp(8%, 12vw, 16%)' }}>
            {/* Main Headline - Uppercase, Thin, Large, Stacked */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white"
              style={{
                fontSize: 'clamp(42px, 6.5vw, 88px)',
                lineHeight: 1.2,
                fontWeight: 200,
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                marginBottom: 'clamp(40px, 5vw, 56px)',
                padding: 0,
                textAlign: 'left'
              }}
            >
              <span className="block">Building</span>
              <span className="block" style={{ marginTop: 'clamp(4px, 0.8vw, 8px)' }}>a Legacy of</span>
              <span className="block" style={{ marginTop: 'clamp(4px, 0.8vw, 8px)' }}>Trust</span>
              <span className="block" style={{ marginTop: 'clamp(4px, 0.8vw, 8px)' }}>& Growth</span>
            </motion.h1>

            {/* Play Video Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              onClick={() => {
                // Handle play video action
                const video = document.querySelector('video');
                if (video) {
                  video.play();
                }
              }}
              className="flex items-center justify-center gap-4 bg-transparent border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300"
              style={{
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                padding: 'clamp(16px, 2.5vw, 20px) clamp(32px, 4vw, 48px)',
                minHeight: 'clamp(56px, 7vw, 64px)'
              }}
            >
              {/* Play Icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                className="text-white"
                style={{ flexShrink: 0 }}
              >
                <path
                  d="M3 2L13 8L3 14V2Z"
                  fill="currentColor"
                />
              </svg>
              <span
                className="text-white uppercase tracking-wider"
                style={{
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                  fontWeight: 400,
                  letterSpacing: '0.1em',
                  whiteSpace: 'nowrap'
                }}
              >
                Play Video
              </span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Pagination Indicator - Bottom Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-20 flex items-center gap-3"
      >
        {/* Current Slide Number */}
        <span
          className="text-white"
          style={{
            fontSize: 'clamp(14px, 1.5vw, 16px)',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            fontWeight: 300,
            letterSpacing: '0.05em'
          }}
        >
          {String(currentSlide + 1).padStart(2, '0')}
        </span>
        
        {/* Active Indicator Line */}
        <div
          className="bg-white"
          style={{
            width: '24px',
            height: '1px'
          }}
        />
        
        {/* Dots for other slides */}
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`rounded-full transition-opacity duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/30'
              }`}
              style={{
                width: index === currentSlide ? '6px' : '4px',
                height: index === currentSlide ? '6px' : '4px'
              }}
            />
          ))}
        </div>
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