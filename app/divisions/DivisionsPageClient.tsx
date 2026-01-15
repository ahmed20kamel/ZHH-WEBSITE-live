'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { divisions } from '@/data/divisions';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from '@/components/ui/Card';
import Tabs from '@/components/ui/Tabs';
import InternalHero from '@/components/InternalHero';
import Button from '@/components/ui/Button';

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

export default function DivisionsPageClient() {
  return (
    <div>
      {/* Hero Section - Shared InternalHero */}
      <InternalHero
        title="Our Divisions"
        subtitle="Building Value Across Construction, Real Estate, Trading & Precious Metals"
        imageSrc="/assets/hero/hero-divisions.png"
        imageAlt="ZHH Divisions"
      />

      {/* Divisions Details - Tabs Layout */}
      <section 
        className="section-unified bg-unified-white"
        style={{
          paddingTop: 'clamp(60px, 8vw, 80px)',
          paddingBottom: 'clamp(60px, 8vw, 80px)'
        }}
      >
        <div className="container-unified">
          <div 
            className="space-y-16 md:space-y-24"
            style={{ 
              gap: 'clamp(48px, 6vw, 72px)',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            {divisions.map((division, index) => (
              <motion.div
                key={division.id}
                id={division.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={staggerContainer}
                style={{
                  width: '100%',
                  maxWidth: '100%'
                }}
              >
                <Card
                  className="overflow-hidden"
                  hover={false}
                  style={{
                    padding: 0,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    borderRadius: '12px',
                    border: '1px solid #E5E5E5',
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
                    {division.id === 'construction' && (
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
                    )}
                    {division.id === 'trading' && (
                      <Image
                        src="/assets/hero/card/General Trading.jpg"
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
                    )}
                    {division.id === 'real-estate' && (
                      <Image
                        src="/assets/hero/card/Real Estates.jpg"
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
                    )}
                    {division.id === 'jewelust' && (
                      <Image
                        src="/assets/hero/card/Gold2.JPEG"
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
                    )}
                    {/* White Overlay - Reduced for better image visibility */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(255, 255, 255, 0.3)',
                        zIndex: 1
                      }}
                    />
                  </div>

                  {/* Card Header - Logo, Title, Tagline */}
                <motion.div
                  variants={fadeInUp}
                    style={{
                      background: 'rgba(255, 255, 255, 0.25)',
                      backdropFilter: 'blur(15px)',
                      WebkitBackdropFilter: 'blur(15px)',
                      padding: 'clamp(24px, 5vw, 48px)',
                      paddingTop: 'clamp(28px, 5vw, 52px)',
                      paddingBottom: 'clamp(28px, 5vw, 52px)',
                      paddingLeft: 'clamp(20px, 4vw, 48px)',
                      paddingRight: 'clamp(20px, 4vw, 48px)',
                      borderBottom: '1px solid rgba(229, 231, 235, 0.25)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 0,
                      textAlign: 'center',
                      position: 'relative',
                      zIndex: 2,
                      width: '100%',
                      maxWidth: '100%',
                      boxSizing: 'border-box',
                      overflow: 'hidden'
                    }}
                  >
                    {/* Logo - Larger Size */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                      style={{
                        height: 'clamp(100px, 18vw, 160px)',
                        maxHeight: 'clamp(100px, 18vw, 160px)',
                        width: '100%',
                        maxWidth: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: 'clamp(20px, 4vw, 32px)',
                        paddingLeft: 'clamp(12px, 3vw, 0px)',
                        paddingRight: 'clamp(12px, 3vw, 0px)',
                        boxSizing: 'border-box',
                        flexShrink: 0
                      }}
                    >
                    {division.id === 'construction' && (
                      <img
                        src="/assets/logos/ZHH%20Construction%20Logo.svg"
                        alt="ZHH Construction Logo"
                        className="h-full w-auto object-contain"
                          style={{ 
                            maxWidth: 'min(100%, 400px)',
                            maxHeight: '100%',
                            width: 'auto',
                            height: 'auto'
                          }}
                      />
                    )}
                    {division.id === 'real-estate' && (
                      <img
                        src="/assets/logos/zhh-real-estate-logo.svg"
                        alt="ZHH Real Estate Logo"
                        className="h-full w-auto object-contain"
                          style={{ 
                            maxWidth: 'min(100%, 400px)',
                            maxHeight: '100%',
                            width: 'auto',
                            height: 'auto'
                          }}
                      />
                    )}
                    {division.id === 'trading' && (
                      <img
                        src="/assets/logos/zhh-general-trading-logo.svg"
                        alt="ZHH General Trading Logo"
                        className="h-full w-auto object-contain"
                          style={{ 
                            maxWidth: 'min(100%, 400px)',
                            maxHeight: '100%',
                            width: 'auto',
                            height: 'auto'
                          }}
                      />
                    )}
                    {division.id === 'jewelust' && (
                      <img
                        src="/assets/logos/jewelust-logo.svg"
                        alt="Jewelust Logo"
                        className="h-full w-auto object-contain"
                          style={{ 
                            maxWidth: 'min(100%, 400px)',
                            maxHeight: '100%',
                            width: 'auto',
                            height: 'auto',
                            imageRendering: 'crisp-edges',
                            WebkitImageRendering: 'crisp-edges',
                            filter: 'none',
                            opacity: 1,
                            WebkitBackfaceVisibility: 'hidden',
                            backfaceVisibility: 'hidden'
                          }}
                        />
                      )}
                    </motion.div>

                  </motion.div>

                  {/* Tabs Content */}
                  <div
                    style={{
                      padding: 'clamp(20px, 5vw, 40px)',
                      paddingTop: 'clamp(24px, 5vw, 40px)',
                      paddingBottom: 'clamp(24px, 5vw, 40px)',
                      position: 'relative',
                      zIndex: 2,
                      width: '100%',
                      maxWidth: '100%',
                      boxSizing: 'border-box',
                      overflow: 'hidden'
                    }}
                  >
                    <Tabs
                      defaultTab="overview"
                      tabs={[
                        {
                          id: 'overview',
                          label: 'Overview',
                          content: (
                            <div style={{ 
                              width: '100%', 
                              maxWidth: '100%',
                              padding: 'clamp(8px, 2vw, 0px)',
                              boxSizing: 'border-box'
                            }}>
                              <p
                                style={{
                                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                                  fontSize: 'clamp(14px, 2.2vw, 16px)',
                                  lineHeight: 1.9,
                                  color: '#000000',
                                  fontWeight: 600,
                                  margin: 0,
                                  padding: 0,
                                  wordWrap: 'break-word',
                                  overflowWrap: 'break-word',
                                  hyphens: 'auto',
                                  textAlign: 'left'
                                }}
                              >
                                {division.overview}
                              </p>
                  </div>
                          )
                        },
                        {
                          id: 'establishment',
                          label: 'Establishment',
                          content: (
                            <div style={{ 
                              width: '100%', 
                              maxWidth: '100%',
                              padding: 'clamp(8px, 2vw, 0px)',
                              boxSizing: 'border-box'
                            }}>
                              <p
                                style={{
                                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                                  fontSize: 'clamp(14px, 2.2vw, 16px)',
                                  lineHeight: 1.9,
                                  color: '#000000',
                                  fontWeight: 600,
                                  margin: 0,
                                  padding: 0,
                                  wordWrap: 'break-word',
                                  overflowWrap: 'break-word',
                                  hyphens: 'auto',
                                  textAlign: 'left'
                                }}
                              >
                                {division.establishment}
                              </p>
                            </div>
                          )
                        },
                        {
                          id: 'core-activities',
                          label: 'Core Activities',
                          content: (
                            <div style={{ 
                              width: '100%', 
                              maxWidth: '100%',
                              padding: 'clamp(8px, 2vw, 0px)',
                              boxSizing: 'border-box'
                            }}>
                              <ul
                                style={{
                                  listStyle: 'none',
                                  paddingLeft: 0,
                                  paddingRight: 0,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: 'clamp(14px, 2.5vw, 16px)',
                                  width: '100%',
                                  margin: 0
                                }}
                              >
                                {division.coreActivities.map((activity, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    style={{
                                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                                      fontSize: 'clamp(14px, 2.2vw, 16px)',
                                      lineHeight: 1.8,
                                      color: '#000000',
                                      fontWeight: 600,
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      gap: 'clamp(10px, 2.5vw, 14px)',
                                      width: '100%',
                                      maxWidth: '100%',
                                      margin: 0,
                                      padding: 0,
                                      wordWrap: 'break-word',
                                      overflowWrap: 'break-word',
                                      hyphens: 'auto'
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: '#01B2B2',
                                        fontSize: 'clamp(18px, 3.5vw, 22px)',
                                        fontWeight: 'bold',
                                        lineHeight: '1',
                                        marginTop: 'clamp(4px, 0.8vw, 6px)',
                                        flexShrink: 0,
                                        minWidth: 'clamp(18px, 3.5vw, 22px)'
                                      }}
                                    >
                                      •
                                    </span>
                                    <span style={{ 
                                      flex: 1, 
                                      minWidth: 0,
                                      wordWrap: 'break-word',
                                      overflowWrap: 'break-word',
                                      hyphens: 'auto'
                                    }}>
                                      {activity}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          )
                        },
                        {
                          id: 'achievements',
                          label: division.id === 'trading' ? 'Achievements & Milestones' : 
                                 division.id === 'real-estate' ? 'Achievements' : 
                                 'Completed Projects & Achievements',
                          content: (
                            <div style={{ 
                              width: '100%', 
                              maxWidth: '100%',
                              padding: 'clamp(8px, 2vw, 0px)',
                              boxSizing: 'border-box'
                            }}>
                              <ul
                                style={{
                                  listStyle: 'none',
                                  paddingLeft: 0,
                                  paddingRight: 0,
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: 'clamp(14px, 2.5vw, 16px)',
                                  width: '100%',
                                  margin: 0
                                }}
                              >
                                {division.achievements.map((achievement, idx) => (
                                  <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                                    style={{
                                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                                      fontSize: 'clamp(14px, 2.2vw, 16px)',
                                      lineHeight: 1.8,
                                      color: '#000000',
                                      fontWeight: 600,
                                      display: 'flex',
                                      alignItems: 'flex-start',
                                      gap: 'clamp(10px, 2.5vw, 14px)',
                                      width: '100%',
                                      maxWidth: '100%',
                                      margin: 0,
                                      padding: 0,
                                      wordWrap: 'break-word',
                                      overflowWrap: 'break-word',
                                      hyphens: 'auto'
                                    }}
                                  >
                                    <span
                                      style={{
                                        color: '#01B2B2',
                                        fontSize: 'clamp(18px, 3.5vw, 22px)',
                                        fontWeight: 'bold',
                                        lineHeight: '1',
                                        marginTop: 'clamp(4px, 0.8vw, 6px)',
                                        flexShrink: 0,
                                        minWidth: 'clamp(18px, 3.5vw, 22px)'
                                      }}
                                    >
                                      ✓
                                    </span>
                                    <span style={{ 
                                      flex: 1, 
                                      minWidth: 0,
                                      wordWrap: 'break-word',
                                      overflowWrap: 'break-word',
                                      hyphens: 'auto'
                                    }}>
                                      {achievement}
                                    </span>
                                  </motion.li>
                      ))}
                    </ul>
                  </div>
                          )
                        },
                        {
                          id: 'ceo-message',
                          label: 'CEO Message',
                          content: (
                            <div
                              style={{
                                padding: 'clamp(20px, 5vw, 32px)',
                                background: 'rgba(240, 253, 255, 0.35)',
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                borderRadius: '8px',
                                borderLeft: '4px solid #01B2B2',
                                border: '1px solid rgba(229, 229, 229, 0.3)',
                                width: '100%',
                                maxWidth: '100%',
                                boxSizing: 'border-box'
                              }}
                            >
                              <p
                                style={{
                                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                                  fontSize: 'clamp(14px, 2.2vw, 16px)',
                                  fontWeight: 700,
                                  color: '#000000',
                                  marginBottom: 'clamp(6px, 1.5vw, 10px)',
                                  marginTop: 0,
                                  padding: 0,
                                  wordWrap: 'break-word',
                                  overflowWrap: 'break-word',
                                  hyphens: 'auto',
                                  lineHeight: 1.5
                                }}
                              >
                                {division.ceoMessage.name}
                              </p>
                              <p
                                style={{
                                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                                  fontSize: 'clamp(13px, 2.2vw, 16px)',
                                  color: '#000000',
                                  fontWeight: 600,
                                  marginBottom: 'clamp(14px, 2.5vw, 22px)',
                                  marginTop: 0,
                                  padding: 0,
                                  wordWrap: 'break-word',
                                  overflowWrap: 'break-word',
                                  hyphens: 'auto',
                                  lineHeight: 1.6
                                }}
                              >
                                {division.ceoMessage.title}
                              </p>
                              <p
                                style={{
                                  fontFamily: 'var(--font-inter), Inter, sans-serif',
                                  fontSize: 'clamp(14px, 2.2vw, 16px)',
                                  lineHeight: 1.9,
                                  color: '#000000',
                                  fontWeight: 600,
                                  fontStyle: 'italic',
                                  position: 'relative',
                                  paddingLeft: 'clamp(20px, 4vw, 24px)',
                                  margin: 0,
                                  wordWrap: 'break-word',
                                  overflowWrap: 'break-word',
                                  hyphens: 'auto'
                                }}
                              >
                                <span
                                  style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    fontSize: 'clamp(28px, 5vw, 44px)',
                                    color: '#01B2B2',
                                    opacity: 0.2,
                                    fontFamily: 'Georgia, serif',
                                    lineHeight: 1
                                  }}
                                >
                                  "
                                </span>
                                {division.ceoMessage.quote}
                              </p>
                            </div>
                          )
                        },
                        // COO Quotes tab for Jewelust only
                        ...(division.cooQuotes && division.cooQuotes.length > 0 ? [{
                          id: 'coo-quotes',
                          label: 'COO Quotes',
                          content: (
                            <div style={{ width: '100%', maxWidth: '100%' }}>
                              <div
                                style={{
                                  display: 'grid',
                                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                                  gap: 'clamp(16px, 3vw, 20px)',
                                  width: '100%',
                                  boxSizing: 'border-box'
                                }}
                              >
                                {division.cooQuotes.map((coo, idx) => (
                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                                    style={{
                                      padding: 'clamp(16px, 3vw, 20px)',
                                      backgroundColor: 'rgba(255, 255, 255, 0.35)',
                                      backdropFilter: 'blur(12px)',
                                      WebkitBackdropFilter: 'blur(12px)',
                                      borderRadius: '8px',
                                      border: '1px solid rgba(229, 229, 229, 0.3)',
                                      borderLeft: '4px solid #D4AF37',
                                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                                      transition: 'all 0.3s ease',
                                      width: '100%',
                                      maxWidth: '100%',
                                      boxSizing: 'border-box'
                                    }}
                                    onMouseEnter={(e) => {
                                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)';
                                      e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                                      e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                  >
                                    <p
                                      style={{
                                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                                        fontSize: 'clamp(14px, 2.5vw, 15px)',
                                        fontWeight: 700,
                                        color: '#000000',
                                        marginBottom: 'clamp(4px, 1vw, 7px)',
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word'
                                      }}
                                    >
                                      {coo.name}
                                    </p>
                                    <p
                                      style={{
                                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                                        fontSize: 'clamp(13px, 2.5vw, 16px)',
                                        color: '#000000',
                                        fontWeight: 600,
                                        marginBottom: 'clamp(10px, 2vw, 14px)',
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word'
                                      }}
                                    >
                                      {coo.title}
                                    </p>
                                    <p
                                      style={{
                                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                                        fontSize: 'clamp(14px, 2.5vw, 17px)',
                                        lineHeight: 1.7,
                                        color: '#000000',
                                        fontWeight: 600,
                                        fontStyle: 'italic',
                                        wordWrap: 'break-word',
                                        overflowWrap: 'break-word'
                                      }}
                                    >
                                      "{coo.quote}"
                                    </p>
                                  </motion.div>
                                ))}
                      </div>
                            </div>
                          )
                        }] : []),
                        // Album tab - displays images from /public/assets/Album/{division-id}/
                        {
                          id: 'album',
                          label: 'Album',
                          content: (
                            <AlbumGallery divisionId={division.id} />
                          )
                        }
                      ]}
                    />
                    </div>
                  </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Unified */}
      <section 
        className="section-unified bg-unified-dark text-white"
        style={{
          paddingTop: 'clamp(60px, 8vw, 80px)',
          paddingBottom: 'clamp(60px, 8vw, 80px)'
        }}
      >
        <div className="container-unified text-center-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="section-title-wrapper"
            style={{
              paddingLeft: 'clamp(16px, 4vw, 0px)',
              paddingRight: 'clamp(16px, 4vw, 0px)'
            }}
          >
            <motion.h2
              variants={fadeInUp}
              className="h2-unified text-white"
              style={{
                fontSize: 'clamp(20px, 4.5vw, 28px)',
                lineHeight: 1.3,
                marginBottom: 'clamp(16px, 3vw, 24px)',
                paddingLeft: 'clamp(8px, 2vw, 0px)',
                paddingRight: 'clamp(8px, 2vw, 0px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              Ready to Work With Us?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="body-large-unified text-white/80"
              style={{
                fontSize: 'clamp(14px, 3vw, 18px)',
                lineHeight: 1.7,
                marginBottom: 'clamp(24px, 4vw, 32px)',
                paddingLeft: 'clamp(16px, 4vw, 0px)',
                paddingRight: 'clamp(16px, 4vw, 0px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              Contact us to learn more about our divisions and how we can help you achieve your goals.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button
                href="/contact"
                variant="primary"
                size="md"
              >
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
