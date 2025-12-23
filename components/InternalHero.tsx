'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, staggerContainer } from '@/lib/animations';

interface InternalHeroProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
}

/**
 * InternalHero - Shared hero for internal pages (Divisions, Contact, etc.)
 * Uses EXACT same layout, overlay, typography, and spacing as Divisions hero.
 */
export default function InternalHero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
}: InternalHeroProps) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden text-white" style={{ height: '100vh', minHeight: '600px', maxHeight: '1200px' }}>
      {/* Background Image - Desktop Only */}
      <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
        <Image
          src={imageSrc}
          alt={imageAlt}
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
          src={imageSrc}
          alt={imageAlt}
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

      {/* Text Content - Direct on Image */}
      <div
        className="container-unified relative z-10 flex items-center justify-center"
        style={{ height: '100%', paddingTop: 'clamp(40px, 8vh, 80px)' }}
      >
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
              fontWeight: 600,
              lineHeight: 1.2,
              marginBottom: 'clamp(24px, 3vw, 32px)',
              letterSpacing: '-0.5px',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)'
            }}
          >
            {title}
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
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}


