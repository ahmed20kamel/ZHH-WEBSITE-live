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
            className="text-4xl md:text-6xl font-bold tracking-tight text-white"
            style={{ 
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontWeight: 700,
              lineHeight: 1.2
            }}
          >
            {title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-200 leading-relaxed"
            style={{ 
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontWeight: 300
            }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}


