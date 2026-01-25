'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

interface Slide {
  type: 'video' | 'image';
  src: string;
  alt?: string;
}

const allSlides: Slide[] = [
  { type: 'video', src: '/assets/slider/slider-2.mp4' },
  { type: 'video', src: '/assets/slider/slider-3.mp4' },
  { type: 'video', src: '/assets/slider/slider-4.mp4' },
];

interface HeroSliderProps {
  onSlideChange?: (slideIndex: number) => void;
}

export default function HeroSlider({ onSlideChange }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [failedSlides, setFailedSlides] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Detect mobile/desktop
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Filter slides based on device type
  // Mobile: only slider-3.mp4
  // Desktop: slider-2.mp4 and slider-4.mp4
  const slides = isMobile
    ? allSlides.filter(slide => slide.src === '/assets/slider/slider-3.mp4')
    : allSlides.filter(slide => 
        slide.src === '/assets/slider/slider-2.mp4' || 
        slide.src === '/assets/slider/slider-4.mp4'
      );

  // Reset current slide when device type changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

  // Filter out failed slides
  const validSlides = slides.filter((_, index) => !failedSlides.has(index));

  // Auto-play video when a video slide is active
  useEffect(() => {
    if (validSlides.length === 0) return;
    
    const currentSlideData = validSlides[currentSlide];
    if (currentSlideData && currentSlideData.type === 'video') {
      const slideSrc = currentSlideData.src;
      const originalIndex = allSlides.findIndex(s => s.src === slideSrc);
      const videoRef = videoRefs.current[originalIndex];
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
      if (ref && !failedSlides.has(index)) {
        const currentSlideSrc = validSlides[currentSlide]?.src;
        const refSlideSrc = allSlides[index]?.src;
        if (refSlideSrc && refSlideSrc !== currentSlideSrc) {
          ref.pause();
        }
      }
    });
  }, [currentSlide, validSlides, failedSlides]);

  // Auto-advance slides every 5 seconds (only on desktop with multiple slides)
  useEffect(() => {
    if (validSlides.length === 0 || validSlides.length === 1) return; // Don't auto-advance if only one slide
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % validSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [validSlides.length]);

  // Notify parent component of slide changes
  useEffect(() => {
    if (onSlideChange && validSlides.length > 0) {
      onSlideChange(currentSlide);
    }
  }, [currentSlide, onSlideChange, validSlides.length]);

  // Handle video error
  const handleVideoError = (slideSrc: string) => {
    const slideIndex = slides.findIndex(s => s.src === slideSrc);
    if (slideIndex === -1) return;
    
    setFailedSlides(prev => {
      const newSet = new Set([...prev, slideIndex]);
      // Check if current slide failed
      const currentSlideData = validSlides[currentSlide];
      if (currentSlideData && currentSlideData.src === slideSrc) {
        // Move to next slide if current one failed
        if (validSlides.length > 1) {
          setCurrentSlide((prev) => (prev + 1) % validSlides.length);
        }
      }
      return newSet;
    });
  };

  // If no valid slides, show fallback background
  if (validSlides.length === 0) {
    return (
      <div 
        className="relative w-full h-full"
        style={{
          backgroundColor: '#1a1a1a',
          backgroundImage: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
        }}
      />
    );
  }

  return (
    <div className="relative w-full h-full">
      {/* Slides Container */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence initial={false}>
          {validSlides.map((slide, validIndex) => {
            const originalIndex = allSlides.findIndex(s => s.src === slide.src);
            if (validIndex !== currentSlide) return null;

            return (
              <motion.div
                key={`${originalIndex}-${slide.src}`}
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
                  duration: validSlides.length > 1 ? 1.5 : 0, // No transition animation on mobile (single video)
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
                      if (el) videoRefs.current[originalIndex] = el;
                    }}
                    className="w-full h-full"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center',
                      backgroundColor: '#1a1a1a'
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    onError={() => handleVideoError(slide.src)}
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
                    priority={validIndex === 0}
                    quality={90}
                    sizes="100vw"
                    onError={() => handleVideoError(slide.src)}
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

