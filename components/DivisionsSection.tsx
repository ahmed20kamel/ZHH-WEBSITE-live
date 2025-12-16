'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Building2, Home, Globe, Gem, 
  ArrowRight
} from 'lucide-react';
import { fadeInUp, staggerContainer, cardVariants } from '@/lib/animations';
import Card from '@/components/ui/Card';
import CardBody from '@/components/ui/CardBody';
import Button from '@/components/ui/Button';

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
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(1, 178, 178, 0.02) 0%, rgba(212, 175, 55, 0.01) 100%)',
            pointerEvents: 'none'
          }}
        />
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

        {/* Divisions Grid - Using Unified System */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 rhythm-card-gap"
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
                <Card className="h-full flex flex-col">
                  <CardBody maxWidth="max-w-none" className="flex flex-col h-full">
                    {/* Logo */}
                    <motion.div 
                      className="flex items-center justify-center mb-8" 
                      style={{ 
                        height: 'clamp(60px, 12vw, 100px)', 
                        minHeight: '60px',
                        maxHeight: '100px',
                        width: '100%'
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
                    <h3 
                      className="h3-unified text-teal rhythm-title-content" 
                      style={{ 
                        lineHeight: '1.3',
                        fontSize: 'clamp(18px, 2vw, 22px)'
                      }}
                    >
                      {division.subtitle}
                    </h3>

                    {/* Description */}
                    <p 
                      className="body-large-unified text-secondary flex-grow rhythm-card-internal" 
                      style={{ 
                        lineHeight: '1.7',
                        fontSize: 'clamp(14px, 1.5vw, 16px)'
                      }}
                    >
                      {division.description}
                    </p>

                    {/* Learn More Button - Unified */}
                    <div className="mt-auto pt-6 border-t border-gray-200">
                      <Button
                        variant="secondary"
                        size="md"
                        href={`/divisions#${division.id}`}
                        fullWidth
                        className="flex items-center justify-center gap-2"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action - Unified Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6 }}
          className="text-center rhythm-content-cta"
          style={{ marginTop: 'var(--rhythm-card-gap)' }}
        >
          <Button
            variant="ghost"
            size="md"
            href="/divisions"
            className="flex items-center gap-2"
          >
            <Globe className="w-4 h-4" />
            <span>View All Divisions</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
