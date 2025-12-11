'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { 
  Building2, Home, Globe, Gem, 
  ArrowRight
} from 'lucide-react';
import { fadeInUp, staggerContainer, cardVariants } from '@/lib/animations';

const divisions = [
  {
    id: 'construction',
    title: 'ZHH Construction',
    subtitle: 'Construction',
    description: 'Delivering sustainable, world-class infrastructure projects across the UAE and beyond.',
    logo: '/assets/logos/zhh-construction-logo.svg',
    icon: Building2,
    gradient: 'from-blue-100 to-teal-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-blue-200',
    delay: 0.1
  },
  {
    id: 'real-estate',
    title: 'ZHH Real Estate',
    subtitle: 'Real Estate',
    description: 'Creating long-term value through visionary residential and commercial developments.',
    logo: '/assets/logos/zhh-real-estate-logo.svg',
    icon: Home,
    gradient: 'from-emerald-100 to-teal-100',
    iconColor: 'text-emerald-600',
    borderColor: 'border-emerald-200',
    delay: 0.2
  },
  {
    id: 'trading',
    title: 'ZHH General Trading',
    subtitle: 'General Trading',
    description: 'Connecting global markets with transparency, compliance, and strategic partnerships.',
    logo: '/assets/logos/zhh-general-trading-logo.svg',
    icon: Globe,
    gradient: 'from-violet-100 to-indigo-100',
    iconColor: 'text-violet-600',
    borderColor: 'border-violet-200',
    delay: 0.3
  },
  {
    id: 'jewelust',
    title: 'Jewelust',
    subtitle: 'Gold & Bullion Trading',
    description: 'Where wealth becomes legacy. Responsible and transparent precious metals trading.',
    logo: '/assets/logos/jewelust-logo.svg',
    icon: Gem,
    gradient: 'from-amber-100 to-yellow-100',
    iconColor: 'text-amber-600',
    borderColor: 'border-amber-200',
    delay: 0.4
  }
];

export default function DivisionsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section 
      ref={sectionRef}
      className="section-unified relative overflow-hidden"
      style={{
        paddingTop: 'clamp(50px, 6vw, 70px)',
        paddingBottom: 'clamp(50px, 6vw, 70px)',
        background: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 50%, #FAFAFA 100%)',
        position: 'relative'
      }}
    >
      {/* Professional Divider Lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(1, 178, 178, 0.3), transparent)',
          transformOrigin: 'left'
        }}
      />
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(1, 178, 178, 0.3), transparent)',
          transformOrigin: 'left'
        }}
      />

      {/* Subtle Ambient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Background Color Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(1, 178, 178, 0.02) 0%, rgba(212, 175, 55, 0.01) 100%)',
            pointerEvents: 'none'
          }}
        />

        {/* Animated Gradient Orbs - More Subtle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.08 } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.06 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute -bottom-1/4 -right-48 w-[600px] h-[600px] bg-gradient-to-r from-emerald-200 to-teal-200 rounded-full blur-3xl"
        />

        {/* Minimal Grid Pattern - More Subtle */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(1, 178, 178, 0.015) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(1, 178, 178, 0.015) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)',
            opacity: 0.5
          }}
        />
      </div>

      <div className="container-unified" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="section-title-wrapper"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
            <span className="body-small-unified text-tertiary uppercase tracking-wider">
              Business Divisions
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="h2-unified text-primary text-center"
          >
            Core Businesses
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            style={{
              width: '60px',
              height: '4px',
              background: 'linear-gradient(90deg, var(--color-primary-teal), var(--color-gold))',
              margin: 'var(--content-spacing-md) auto 0',
              borderRadius: '2px'
            }}
          />

          <motion.p
            variants={fadeInUp}
            className="body-large-unified text-secondary mt-6"
            style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}
          >
            Building value across construction, real estate, trading, and precious metals
          </motion.p>
        </motion.div>

        {/* Divisions Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          style={{ gap: 'var(--content-spacing-md)' }}
        >
          {divisions.map((division, index) => {
            const Icon = division.icon;

            return (
              <motion.div
                key={division.id}
                variants={cardVariants}
                custom={index}
                className="h-full"
              >
                <Link href={`/divisions#${division.id}`} className="block h-full">
                  <motion.div
                    className="card-unified h-full flex flex-col relative overflow-hidden cursor-pointer"
                    style={{
                      padding: 'clamp(20px, 4vw, var(--content-spacing-xl))',
                      position: 'relative'
                    }}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated Accent Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "100%" } : {}}
                      transition={{ duration: 1.5, delay: 0.2 + (index * 0.1) }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '3px',
                        background: 'linear-gradient(90deg, var(--color-primary-teal), var(--color-gold))',
                        borderRadius: '12px 12px 0 0'
                      }}
                    />

                    {/* Logo */}
                    <motion.div 
                      className="flex items-center justify-center mb-4 md:mb-6" 
                      style={{ 
                        height: 'clamp(60px, 12vw, 100px)', 
                        minHeight: '60px',
                        maxHeight: '100px',
                        width: '100%',
                        marginBottom: 'clamp(14px, 2.5vw, var(--content-spacing-md))'
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={division.logo}
                        alt={`${division.title} Logo`}
                        className="h-full w-auto object-contain"
                        style={{ 
                          maxWidth: 'min(180px, 100%)', 
                          width: 'auto',
                          height: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </motion.div>

                    {/* Title */}
                    <h3 className="h3-unified text-teal" style={{ marginBottom: 'var(--content-spacing-xs)' }}>
                      {division.subtitle}
                    </h3>

                    {/* Description */}
                    <p className="body-large-unified text-secondary flex-grow" style={{ marginBottom: 'var(--content-spacing-lg)' }}>
                      {division.description}
                    </p>

                    {/* Learn More Button */}
                    <motion.div
                      className="mt-auto pt-3 md:pt-4 border-t w-full flex items-center justify-center gap-2 px-3 md:px-4 py-2.5 md:py-3 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border border-blue-200/50 transition-all duration-300 group"
                      style={{
                        borderTopColor: 'var(--color-border-light)',
                        marginTop: 'auto'
                      }}
                      whileHover={{ scale: 1.02, y: -2 }}
                    >
                      <span className="body-regular-unified text-teal" style={{ fontWeight: 600, fontSize: 'clamp(14px, 1.5vw, 16px)' }}>
                        Learn More
                      </span>
                      <motion.span 
                        className="text-teal"
                        style={{ fontSize: '18px' }}
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="text-center"
          style={{ marginTop: 'var(--content-spacing-lg)' }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full border border-blue-100 shadow-sm"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Globe className="w-4 h-4 text-gray-600" />
            </motion.div>
            <Link href="/divisions" className="body-regular-unified text-secondary" style={{ fontWeight: 500, textDecoration: 'none' }}>
              View All Divisions
            </Link>
            <motion.span 
              style={{ color: 'var(--color-gold)', fontSize: '16px' }}
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              →
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}