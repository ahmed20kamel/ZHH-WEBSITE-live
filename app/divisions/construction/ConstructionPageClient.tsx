'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { divisions } from '@/data/divisions';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from '@/components/ui/Card';
import Tabs from '@/components/ui/Tabs';
// Album Gallery Component
function AlbumGallery({ divisionId }: { divisionId: string }) {
  const [loadedImages, setLoadedImages] = useState<Map<number, string>>(new Map());
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const extensions = ['.jpg', '.jpeg', '.png', '.webp', '.JPG', '.JPEG', '.PNG'];

  const tryLoadImage = useCallback((num: number, extIndex: number = 0) => {
    if (extIndex >= extensions.length) {
      setFailedImages(prev => new Set(prev).add(num));
      return;
    }

    const ext = extensions[extIndex];
    const path = `/assets/Album/${divisionId}/${num}${ext}`;
    
    const img = new window.Image();
    img.onload = () => {
      setLoadedImages(prev => new Map(prev).set(num, path));
    };
    img.onerror = () => {
      tryLoadImage(num, extIndex + 1);
    };
    img.src = path;
  }, [divisionId]);

  useEffect(() => {
    for (let i = 1; i <= 25; i++) {
      tryLoadImage(i);
    }
  }, [divisionId, tryLoadImage]);

  const loadedImageArray = Array.from(loadedImages.entries()).sort((a, b) => a[0] - b[0]);

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prev) => {
      const total = loadedImageArray.length;
      if (total === 0) return 0;
      return prev > 0 ? prev - 1 : total - 1; // Loop to last image
    });
  }, [loadedImageArray.length]);

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) => {
      const total = loadedImageArray.length;
      if (total === 0) return 0;
      return prev < total - 1 ? prev + 1 : 0; // Loop to first image
    });
  }, [loadedImageArray.length]);

  // Auto-play slider (optional - can be removed if not needed)
  useEffect(() => {
    if (loadedImageArray.length <= 1) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [loadedImageArray.length, goToNext]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  if (loadedImageArray.length === 0) {
    return (
      <p
        style={{
          fontFamily: 'var(--font-inter), Inter, sans-serif',
          fontSize: 'clamp(14px, 2.2vw, 16px)',
          lineHeight: 1.9,
          color: '#666666',
          textAlign: 'center',
          padding: 'clamp(20px, 4vw, 40px)',
          margin: 0
        }}
      >
        No images available in the album.
      </p>
    );
  }

  return (
    <div style={{ 
      width: '100%', 
      maxWidth: '100%',
      position: 'relative',
      padding: 'clamp(8px, 2vw, 0px)',
      boxSizing: 'border-box'
    }}>
      {/* Slider Container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          maxHeight: 'clamp(400px, 50vw, 600px)',
          borderRadius: '12px',
          overflow: 'hidden',
          backgroundColor: '#f5f5f5',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Image Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%'
            }}
          >
            <Image
              src={loadedImageArray[currentImageIndex][1]}
              alt={`${divisionId} album image ${loadedImageArray[currentImageIndex][0]}`}
              fill
              className="object-cover"
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
              sizes="100vw"
              priority={currentImageIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {loadedImageArray.length > 1 && (
          <>
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              style={{
                position: 'absolute',
                left: 'clamp(12px, 2vw, 20px)',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 'clamp(44px, 6vw, 56px)',
                height: 'clamp(44px, 6vw, 56px)',
                borderRadius: '50%',
                border: '2px solid rgba(255, 255, 255, 0.9)',
                backgroundColor: 'rgba(1, 178, 178, 0.85)',
                color: 'white',
                fontSize: 'clamp(20px, 3vw, 28px)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10,
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(1, 178, 178, 1)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(1, 178, 178, 0.85)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
              }}
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              style={{
                position: 'absolute',
                right: 'clamp(12px, 2vw, 20px)',
                top: '50%',
                transform: 'translateY(-50%)',
                width: 'clamp(44px, 6vw, 56px)',
                height: 'clamp(44px, 6vw, 56px)',
                borderRadius: '50%',
                border: '2px solid rgba(255, 255, 255, 0.9)',
                backgroundColor: 'rgba(1, 178, 178, 0.85)',
                color: 'white',
                fontSize: 'clamp(20px, 3vw, 28px)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                zIndex: 10,
                backdropFilter: 'blur(8px)',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(1, 178, 178, 1)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(1, 178, 178, 0.85)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
              }}
            >
              ›
            </button>
          </>
        )}

        {/* Image Counter */}
        {loadedImageArray.length > 1 && (
          <div
            style={{
              position: 'absolute',
              bottom: 'clamp(12px, 2vw, 20px)',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              color: 'white',
              padding: 'clamp(6px, 1.5vw, 10px) clamp(12px, 2.5vw, 18px)',
              borderRadius: '20px',
              fontSize: 'clamp(12px, 2vw, 14px)',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              zIndex: 10,
              backdropFilter: 'blur(8px)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
            }}
          >
            {currentImageIndex + 1} / {loadedImageArray.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ConstructionPageClient() {
  const division = divisions.find(d => d.id === 'construction');

  if (!division) return null;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden text-white" style={{ height: '100vh', minHeight: '600px', maxHeight: '1200px' }}>
        {/* Background Image - Desktop Only */}
        <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
          <Image
            src="/assets/hero/Construction.jpg"
            alt={division.name}
            fill
            priority
            className="object-cover"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              filter: 'grayscale(100%)',
            }}
          />
        </div>
        {/* Mobile Static Background - Shows bottom portion */}
        <div className="absolute inset-0 w-full h-full z-0 md:hidden">
          <Image
            src="/assets/hero/Construction.jpg"
            alt={division.name}
            fill
            priority
            className="object-cover"
            style={{ 
              pointerEvents: 'none',
              objectFit: 'cover',
              objectPosition: 'bottom',
              filter: 'grayscale(100%)',
            }}
          />
        </div>
        
        {/* Dark Overlay for better text readability */}
        <div 
          className="absolute inset-0 z-[1]"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
          }}
        />

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

        {/* Text Content - Direct on Image */}
        <div className="container-unified relative z-10 flex items-center justify-center" style={{ height: '100%', paddingTop: 'clamp(40px, 8vh, 80px)' }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-4xl mx-auto space-y-6 px-4"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-white"
              style={{ 
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: 'clamp(42px, 6vw, 80px)',
                fontWeight: 300,
                lineHeight: 1.2,
                marginBottom: 'clamp(24px, 3vw, 32px)',
                letterSpacing: '-0.5px',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)'
              }}
            >
              {division.name}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-gray-200"
              style={{ 
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: 'clamp(18px, 2.2vw, 24px)',
                fontWeight: 400,
                lineHeight: 1.6,
                color: 'rgba(255, 255, 255, 0.95)',
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              {division.tagline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content Section with Tabs */}
      <section 
        className="section-unified bg-unified-white"
        style={{
          paddingTop: 'clamp(60px, 8vw, 80px)',
          paddingBottom: 'clamp(60px, 8vw, 80px)'
        }}
      >
        <div className="container-unified">
          <Card
            className="overflow-hidden"
            hover={false}
            style={{
              padding: 0,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              borderRadius: '12px',
              border: '1px solid #E5E5E5',
              backgroundColor: '#FFFFFF',
              position: 'relative'
            }}
          >
            {/* Background Image with Blur and Overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                overflow: 'hidden',
                borderRadius: '12px'
              }}
            >
              <Image
                src="/assets/hero/card/Construction.jpg"
                alt=""
                fill
                className="object-cover"
                style={{
                  filter: 'blur(4px)',
                  opacity: 0.4,
                  objectFit: 'cover',
                  objectPosition: 'center',
                  transform: 'scale(1.1)'
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  zIndex: 1
                }}
              />
            </div>

            {/* Header */}
            <motion.div
              variants={fadeInUp}
              style={{
                background: 'rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(15px)',
                WebkitBackdropFilter: 'blur(15px)',
                padding: 'clamp(34px, 4.3vw, 48px)',
                borderBottom: '1px solid rgba(229, 231, 235, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 'clamp(20px, 2.6vw, 27px)',
                textAlign: 'center',
                position: 'relative',
                zIndex: 2
              }}
            >
              <div style={{ height: 'clamp(100px, 12vw, 140px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img
                  src="/assets/logos/ZHH%20Construction%20Logo.svg"
                  alt="ZHH Construction Logo"
                  className="h-full w-auto object-contain"
                  style={{ maxWidth: 'min(100%, 350px)' }}
                />
              </div>
            </motion.div>

            {/* Tabs */}
            <div style={{ padding: 'clamp(27px, 3.4vw, 41px)', position: 'relative', zIndex: 2 }}>
              <Tabs
                defaultTab="overview"
                tabs={[
                  {
                    id: 'overview',
                    label: 'Overview',
                    content: <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.8, color: '#000000', fontWeight: 600 }}>{division.overview}</p>
                  },
                  {
                    id: 'establishment',
                    label: 'Establishment',
                    content: <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.8, color: '#000000', fontWeight: 600 }}>{division.establishment}</p>
                  },
                  {
                    id: 'core-activities',
                    label: 'Core Activities',
                    content: (
                      <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vw, 16px)' }}>
                        {division.coreActivities.map((activity, idx) => (
                          <li key={idx} style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.7, color: '#000000', fontWeight: 600, display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <span style={{ color: '#01B2B2', fontSize: '22px', fontWeight: 'bold', marginTop: '2px', flexShrink: 0 }}>•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  },
                  {
                    id: 'achievements',
                    label: 'Completed Projects & Achievements',
                    content: (
                      <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vw, 16px)' }}>
                        {division.achievements.map((achievement, idx) => (
                          <li key={idx} style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.7, color: '#000000', fontWeight: 600, display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <span style={{ color: '#01B2B2', fontSize: '22px', fontWeight: 'bold', marginTop: '2px', flexShrink: 0 }}>✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  },
                  {
                    id: 'ceo-message',
                    label: 'CEO Message',
                    content: (
                      <div style={{ padding: 'clamp(32px, 4vw, 40px)', background: 'rgba(240, 253, 255, 0.35)', backdropFilter: 'blur(12px)', borderRadius: '8px', borderLeft: '4px solid #01B2B2', border: '1px solid rgba(229, 229, 229, 0.3)' }}>
                        <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(20px, 2.2vw, 21px)', fontWeight: 700, color: '#000000', marginBottom: 'clamp(8px, 1vw, 12px)' }}>
                          {division.ceoMessage.name}
                        </p>
                        <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', color: '#000000', fontWeight: 600, marginBottom: 'clamp(20px, 2.5vw, 24px)' }}>
                          {division.ceoMessage.title}
                        </p>
                        <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.8, color: '#000000', fontWeight: 600, fontStyle: 'italic', position: 'relative', paddingLeft: 'clamp(20px, 2.5vw, 28px)' }}>
                          <span style={{ position: 'absolute', left: 0, top: 0, fontSize: 'clamp(40px, 5vw, 56px)', color: '#01B2B2', opacity: 0.2, fontFamily: 'Georgia, serif', lineHeight: 1 }}>"</span>
                          {division.ceoMessage.quote}
                        </p>
                      </div>
                    )
                  },
                  {
                    id: 'album',
                    label: 'Album',
                    content: <AlbumGallery divisionId="construction" />
                  }
                ]}
              />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
