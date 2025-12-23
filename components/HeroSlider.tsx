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
  { type: 'video', src: '/assets/slider/slider-2.mp4' },
  { type: 'video', src: '/assets/slider/slider-3.mp4' },
  { type: 'video', src: '/assets/slider/slider-4.mp4' },
  // Only 3 videos as requested
];

interface HeroSliderProps {
  onSlideChange?: (slideIndex: number) => void;
}

export default function HeroSlider({ onSlideChange }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Auto-play video when a video slide is active
  useEffect(() => {
    const currentSlideData = slides[currentSlide];
    if (currentSlideData.type === 'video') {
      const videoRef = videoRefs.current[currentSlide];
      if (videoRef) {
        const playPromise = videoRef.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Handle autoplay restrictions silently
          });
        }
      }
    }
    
    // Pause all other videos
    videoRefs.current.forEach((ref, index) => {
      if (ref && index !== currentSlide) {
        ref.pause();
      }
    });
  }, [currentSlide]);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Notify parent component of slide changes
  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentSlide);
    }
  }, [currentSlide, onSlideChange]);


  return (
    <div className="relative w-full h-full">
      {/* Slides Container */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false}>
          {slides.map((slide, index) => {
            if (index !== currentSlide) return null;

            return (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0,
                  scale: 1.08
                }}
                animate={{ 
                  opacity: 1,
                  scale: 1
                }}
                exit={{ 
                  opacity: 0,
                  scale: 0.98
                }}
                transition={{ 
                  duration: 1.5,
                  ease: [0.25, 0.46, 0.45, 0.94] // Smooth crossfade easing
                }}
                className="absolute inset-0 w-full h-full"
                style={{ 
                  width: '100%', 
                  height: '100%',
                  willChange: 'opacity, transform'
                }}
              >
                {slide.type === 'video' ? (
                  <video
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    className="w-full h-full"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    autoPlay={index === currentSlide}
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

    </div>
  );
}

