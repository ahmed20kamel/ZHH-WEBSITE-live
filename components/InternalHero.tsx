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
    <section className="relative flex items-center justify-center overflow-hidden text-white" style={{ minHeight: '70vh' }}>
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
          }}
        />
      </div>

      {/* Light Gradient Overlay - Bottom to Top (stronger at bottom) */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 40%, transparent 100%)',
        }}
      />

      {/* Text Content Container with Backdrop */}
      <div
        className="container-unified relative z-10 flex items-center justify-center"
        style={{ minHeight: '70vh', paddingTop: 'clamp(40px, 8vh, 80px)' }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="text-center max-w-4xl mx-auto space-y-6 px-4"
          style={{
            padding: 'clamp(40px, 5vw, 60px)',
            borderRadius: '16px',
            background: 'rgba(0, 0, 0, 0.35)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center gap-4"
          >
            <div className="w-16 h-1 bg-gradient-to-r from-[#00d4aa] via-[#c9a74a] to-[#00d4aa]" />
            <h1
              className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {title}
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#c9a74a] via-[#00d4aa] to-[#c9a74a]" />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-200 leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}


