'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Slide {
  type: 'video' | 'image';
  src: string;
  alt?: string;
}

const slides: Slide[] = [
  { type: 'video', src: '/assets/media/hero.mp4' },
  { type: 'image', src: '/assets/media/2.jpg', alt: 'ZHH Group Holding' },
  { type: 'image', src: '/assets/media/3.jpg', alt: 'ZHH Group Holding' },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play video when slide 0 is active
  useEffect(() => {
    if (currentSlide === 0 && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Handle autoplay restrictions silently
        });
      }
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-full">
      {/* Slides Container */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => {
            if (index !== currentSlide) return null;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full"
                style={{ width: '100%', height: '100%' }}
              >
                {slide.type === 'video' ? (
                  <video
                    ref={videoRef}
                    className="w-full h-full"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                  >
                    <source src={slide.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={slide.src}
                    alt={slide.alt || 'ZHH Group Holding'}
                    fill
                    className="object-cover"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    priority={index === 0}
                    quality={90}
                    sizes="100vw"
                  />
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows - Pulse Animation */}
      <motion.button
        onClick={goToPrev}
        className="absolute top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
        style={{
          left: 'clamp(16px, 2vw, 24px)',
          width: 'clamp(40px, 5vw, 56px)',
          height: 'clamp(40px, 5vw, 56px)'
        }}
        aria-label="Previous slide"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg
          className="text-white"
          style={{
            width: 'clamp(20px, 2.5vw, 28px)',
            height: 'clamp(20px, 2.5vw, 28px)'
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </motion.button>

      <motion.button
        onClick={goToNext}
        className="absolute top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
        style={{
          right: 'clamp(16px, 2vw, 24px)',
          width: 'clamp(40px, 5vw, 56px)',
          height: 'clamp(40px, 5vw, 56px)'
        }}
        aria-label="Next slide"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <svg
          className="text-white"
          style={{
            width: 'clamp(20px, 2.5vw, 28px)',
            height: 'clamp(20px, 2.5vw, 28px)'
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </motion.button>

      {/* Slide Indicators */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 z-20 flex gap-2"
        style={{ bottom: 'clamp(16px, 2vw, 24px)' }}
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

