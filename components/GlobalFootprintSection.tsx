'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { fadeInUp, staggerContainer, cardVariants, scaleUp } from '@/lib/animations';
import Counter from './Counter';
import { Globe, TrendingUp, Building2, Users, Briefcase, Award, Target, Sparkles } from 'lucide-react';

const keyHighlights = [
  {
    value: '100M+',
    label: 'Assets Under Management',
    description: 'Strong financial foundation with diversified portfolio',
    icon: TrendingUp,
    gradient: 'from-blue-50 to-cyan-50',
    borderColor: 'border-blue-100'
  },
  {
    value: '70+',
    label: 'Completed Projects',
    description: 'Proven track record of successful delivery',
    icon: Building2,
    gradient: 'from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-100'
  },
  {
    value: '12B+',
    label: 'Total Project Value',
    description: 'Significant investments across all divisions',
    icon: Briefcase,
    gradient: 'from-violet-50 to-indigo-50',
    borderColor: 'border-violet-100'
  },
  {
    value: '300+',
    label: 'Direct Employees',
    subLabel: '1,200+ Indirect',
    description: 'Growing team of professionals',
    icon: Users,
    gradient: 'from-amber-50 to-orange-50',
    borderColor: 'border-amber-100'
  },
  {
    value: '1.2 Tons',
    label: 'Gold Traded',
    description: 'Ethical sourcing and trading operations',
    icon: Award,
    gradient: 'from-rose-50 to-pink-50',
    borderColor: 'border-rose-100'
  },
  {
    value: '180+',
    label: 'Trade Contracts Executed',
    description: 'Global trade partnerships',
    icon: Globe,
    gradient: 'from-cyan-50 to-sky-50',
    borderColor: 'border-cyan-100'
  },
  {
    value: '24',
    label: 'Major Construction Projects',
    description: 'Infrastructure and development excellence',
    icon: Target,
    gradient: 'from-lime-50 to-green-50',
    borderColor: 'border-lime-100'
  },
  {
    value: '10+',
    label: 'Presence in Countries',
    description: 'Expanding global footprint',
    icon: Sparkles,
    gradient: 'from-purple-50 to-fuchsia-50',
    borderColor: 'border-purple-100'
  },
];

export default function GlobalFootprintSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
              Global Presence
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="h2-unified text-primary text-center"
          >
            Our Global Footprint
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
            ZHH Group Holding is a diversified Emirati conglomerate with significant global presence, 
            managing a diverse portfolio of assets across construction, real estate, global trading, 
            and precious metals.
          </motion.p>
        </motion.div>

        {/* Main Highlight Card */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{ marginBottom: 'var(--content-spacing-lg)' }}
        >
          <motion.div
            variants={cardVariants}
            className="card-unified"
            style={{
              position: 'relative',
              padding: 'clamp(20px, 4vw, var(--content-spacing-xl))'
            }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Accent Line */}
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.2 }}
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

            <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
              {/* Left Content - Text & Mini Stats */}
              <div>
                <motion.div
                  variants={fadeInUp}
                  style={{ marginBottom: 'var(--content-spacing-lg)' }}
                >
                  <h3 className="h3-unified text-primary" style={{ marginBottom: 'var(--content-spacing-md)' }}>
                    Excellence in Numbers
                  </h3>
                  <p className="body-large-unified text-secondary">
                    Our commitment to innovation and responsible growth drives success across 
                    the UAE and beyond, establishing us as a leader in diversified investments 
                    and sustainable development.
                  </p>
                </motion.div>

                {/* Mini Stats Grid */}
                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-2 gap-4"
                >
                  {keyHighlights.slice(0, 2).map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <motion.div
                        key={stat.label}
                        variants={fadeInUp}
                        whileHover={{ y: -2 }}
                        className="card-unified"
                        style={{ padding: 'var(--content-spacing-md)' }}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-sm`}>
                            <Icon className="w-5 h-5 text-gray-700" />
                          </div>
                          <div className="text-2xl font-light text-primary" style={{ fontFamily: 'var(--font-heading)' }}>
                            <Counter value={stat.value} />
                          </div>
                        </div>
                        <p className="body-regular-unified text-tertiary">{stat.label}</p>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Right Content - Hero Statistic */}
              <motion.div
                variants={scaleUp}
                className="relative"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ marginBottom: 'var(--content-spacing-sm)' }}
                  >
                    <span className="body-small-unified text-tertiary uppercase tracking-wider">
                      Total Project Value
                    </span>
                  </motion.div>

                  {/* Animated Hero Number */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
                    className="flex items-baseline justify-center gap-2"
                    style={{ marginBottom: 'var(--content-spacing-md)' }}
                  >
                    <span style={{
                      fontSize: 'clamp(80px, 10vw, 140px)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      lineHeight: 1
                    }}>
                      <Counter value="12" />
                    </span>
                    <span style={{
                      fontSize: 'clamp(60px, 7.5vw, 100px)',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      color: 'var(--color-text-primary)',
                      lineHeight: 1
                    }}>B+</span>
                    <span className="body-large-unified text-tertiary ml-2">AED</span>
                  </motion.div>

                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="body-large-unified text-secondary"
                  >
                    Across global operations
                  </motion.p>

                  {/* Animated Progress Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: "100%" } : {}}
                    transition={{ duration: 1.5, delay: 1 }}
                    style={{
                      height: '3px',
                      background: 'linear-gradient(90deg, var(--color-primary-teal), var(--color-gold))',
                      borderRadius: '2px',
                      marginTop: 'var(--content-spacing-lg)',
                      maxWidth: '400px',
                      marginLeft: 'auto',
                      marginRight: 'auto'
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Statistics Grid - Clean Cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          style={{ marginBottom: 0 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 'var(--content-spacing-md)' }}>
            {keyHighlights.map((stat, index) => {
              const Icon = stat.icon;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={stat.label}
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ y: -4 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative"
                >
                  {/* Animated Background on Hover */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-xl blur-sm`}
                      />
                    )}
                  </AnimatePresence>

                  {/* Card */}
                  <div className={`card-unified relative ${isHovered ? 'shadow-lg' : ''}`} style={{ padding: 'clamp(16px, 3vw, var(--content-spacing-lg))' }}>
                    {/* Icon with subtle animation */}
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className={`w-14 h-14 rounded-lg bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-4 shadow-sm`}
                    >
                      <Icon className="w-6 h-6 text-gray-700" />
                    </motion.div>

                    {/* Number */}
                    <div style={{ marginBottom: 'var(--content-spacing-sm)' }}>
                      <div style={{
                        fontSize: 'clamp(32px, 4vw, 48px)',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 700,
                        color: 'var(--color-text-primary)',
                        lineHeight: 1.2
                      }}>
                        <Counter value={stat.value} />
                      </div>
                    </div>

                    {/* Label */}
                    <h3 className="h4-unified text-primary" style={{ marginBottom: 'var(--content-spacing-xs)' }}>
                      {stat.label}
                    </h3>

                    {/* Description */}
                    <p className="body-regular-unified text-tertiary" style={{ marginBottom: stat.subLabel ? 'var(--content-spacing-sm)' : 0 }}>
                      {stat.description}
                    </p>

                    {/* Sub Label */}
                    {stat.subLabel && (
                      <div style={{ paddingTop: 'var(--content-spacing-sm)', borderTop: '1px solid var(--color-border-light)' }}>
                        <p className="body-small-unified text-teal" style={{ fontWeight: 500 }}>
                          {stat.subLabel}
                        </p>
                      </div>
                    )}

                    {/* Animated Indicator Line */}
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: isHovered ? "100%" : 0 }}
                      style={{
                        height: '3px',
                        background: 'linear-gradient(90deg, var(--color-primary-teal), var(--color-gold))',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        borderRadius: '0 0 12px 12px'
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}