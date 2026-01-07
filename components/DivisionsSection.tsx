'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
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
    gradient: 'from-blue-50 to-cyan-50',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    delay: 0.1
  },
  {
    id: 'real-estate',
    title: 'ZHH Real Estate',
    subtitle: 'Real Estate',
    description: 'Creating long-term value through visionary residential and commercial developments.',
    logo: '/assets/logos/zhh-real-estate-logo.svg',
    icon: Home,
    gradient: 'from-blue-50 to-cyan-50',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    delay: 0.2
  },
  {
    id: 'trading',
    title: 'ZHH General Trading',
    subtitle: 'General Trading',
    description: 'Connecting global markets with transparency, compliance, and strategic partnerships.',
    logo: '/assets/logos/zhh-general-trading-logo.svg',
    icon: Globe,
    gradient: 'from-blue-50 to-cyan-50',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-200',
    delay: 0.3
  },
  {
    id: 'jewelust',
    title: 'Jewelust',
    subtitle: 'Gold & Bullion Trading',
    description: 'Where wealth becomes legacy. Responsible and transparent precious metals trading.',
    logo: '/assets/logos/jewelust-logo.svg',
    icon: Gem,
    gradient: 'from-blue-50 to-cyan-50',
    iconColor: 'text-teal-600',
    borderColor: 'border-teal-200',
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
          style={{
            paddingLeft: 'clamp(16px, 4vw, 0px)',
            paddingRight: 'clamp(16px, 4vw, 0px)',
            marginBottom: 'clamp(40px, 6vw, 56px)'
          }}
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 mb-6"
            style={{ flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <div className="w-2 h-2 rounded-full bg-teal-600" />
            <span className="body-small-unified text-tertiary uppercase tracking-wider" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
              Business Divisions
            </span>
            <div className="w-2 h-2 rounded-full bg-teal-600" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="h2-unified text-primary text-center"
            style={{
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontWeight: 700,
              color: 'var(--color-text-primary)',
              fontSize: 'clamp(20px, 4.5vw, 28px)',
              lineHeight: 1.3,
              marginBottom: 'clamp(16px, 3vw, 24px)',
              paddingLeft: 'clamp(8px, 2vw, 0px)',
              paddingRight: 'clamp(8px, 2vw, 0px)',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}
          >
            Core Businesses
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="body-large-unified text-secondary"
            style={{ 
              maxWidth: '100%',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 'clamp(12px, 2vw, 20px)',
              paddingLeft: 'clamp(16px, 4vw, 0px)',
              paddingRight: 'clamp(16px, 4vw, 0px)',
              fontSize: 'clamp(14px, 3vw, 18px)',
              lineHeight: 1.7,
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            }}
          >
            Building value across construction, real estate, trading, and precious metals
          </motion.p>
        </motion.div>

        {/* Divisions Grid - 2x2 Layout with Professional Touch */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2"
          style={{
            gap: 'clamp(20px, 3vw, 28px)',
            paddingLeft: 'clamp(16px, 4vw, 0px)',
            paddingRight: 'clamp(16px, 4vw, 0px)',
            width: '100%',
            boxSizing: 'border-box',
            maxWidth: '1200px',
            margin: '0 auto'
          }}
        >
          {divisions.map((division, index) => {
            const Icon = division.icon;

            return (
              <motion.div
                key={division.id}
                variants={cardVariants}
                custom={index}
                className="h-full"
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
                }}
                style={{ 
                  perspective: '1000px',
                }}
              >
                <Card 
                  className="h-full flex flex-col group relative overflow-hidden"
                  style={{
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
                    padding: 0,
                    position: 'relative',
                    borderRadius: '16px',
                    border: '1px solid rgba(229, 231, 235, 0.5)'
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

                  {/* Hover gradient overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                    style={{
                      background: 'linear-gradient(135deg, rgba(1, 178, 178, 0.03) 0%, rgba(212, 175, 55, 0.02) 100%)',
                      transition: 'opacity 0.3s ease',
                      zIndex: 1
                    }}
                  />
                  
                  <div style={{ padding: 'clamp(24px, 3vw, 32px)', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', zIndex: 10 }}>
                  <CardBody maxWidth="max-w-none" className="flex flex-col h-full relative z-10">
                    {/* Logo with enhanced animation */}
                    <motion.div 
                      className="flex items-center justify-center mb-5" 
                      style={{ 
                        height: 'clamp(60px, 8vw, 90px)', 
                        minHeight: '60px',
                        maxHeight: '90px',
                        width: '100%',
                        marginBottom: 'clamp(20px, 2.5vw, 28px)'
                      }}
                      whileHover={{ scale: 1.08, y: -4 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <motion.img
                        src={division.logo}
                        alt={`${division.title} Logo`}
                        className="h-full w-auto object-contain"
                        style={{ 
                          maxWidth: 'min(200px, 100%)', 
                          width: 'auto',
                          height: '100%',
                          objectFit: 'contain',
                          filter: 'drop-shadow(0 2px 6px rgba(0, 0, 0, 0.1))'
                        }}
                        whileHover={{ 
                          filter: 'drop-shadow(0 4px 12px rgba(1, 178, 178, 0.3))'
                        }}
                      />
                    </motion.div>

                    {/* Description with fixed height for alignment - Centered */}
                    <motion.div
                      className="flex-grow mb-5 text-center"
                      style={{ 
                        minHeight: 'clamp(55px, 7vw, 70px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        paddingLeft: 'clamp(8px, 2vw, 16px)',
                        paddingRight: 'clamp(8px, 2vw, 16px)',
                        marginBottom: 'clamp(20px, 2.5vw, 24px)'
                      }}
                    >
                      <p 
                        className="body-large-unified text-secondary rhythm-card-internal" 
                        style={{ 
                          lineHeight: '1.75',
                          fontSize: 'clamp(15px, 1.8vw, 17px)',
                          textAlign: 'center',
                          margin: 0,
                          color: '#000000',
                          fontWeight: 600
                        }}
                      >
                        {division.description}
                      </p>
                    </motion.div>

                    {/* Learn More Button - Enhanced with better integration */}
                    <motion.div 
                      className="mt-auto pt-5"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.3 + (index * 0.1) }}
                      style={{
                        position: 'relative',
                        paddingTop: 'clamp(20px, 2.5vw, 24px)'
                      }}
                    >
                      {/* Subtle gradient divider instead of border */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: '10%',
                          right: '10%',
                          height: '1px',
                          background: 'linear-gradient(90deg, transparent, rgba(1, 178, 178, 0.2), transparent)',
                          marginBottom: 'clamp(16px, 2vw, 20px)'
                        }}
                      />
                      <motion.div
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div
                          onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                            const button = e.currentTarget.querySelector('a') as HTMLElement;
                            if (button) {
                              button.style.background = 'linear-gradient(135deg, rgba(1, 178, 178, 0.15) 0%, rgba(1, 178, 178, 0.08) 100%)';
                              button.style.borderColor = 'rgba(1, 178, 178, 0.3)';
                              button.style.boxShadow = '0 4px 12px rgba(1, 178, 178, 0.2)';
                              button.style.color = '#019999';
                            }
                          }}
                          onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                            const button = e.currentTarget.querySelector('a') as HTMLElement;
                            if (button) {
                              button.style.background = 'linear-gradient(135deg, rgba(1, 178, 178, 0.1) 0%, rgba(1, 178, 178, 0.05) 100%)';
                              button.style.borderColor = 'rgba(1, 178, 178, 0.2)';
                              button.style.boxShadow = '0 2px 8px rgba(1, 178, 178, 0.1)';
                              button.style.color = '#01B2B2';
                            }
                          }}
                        >
                          <Button
                            variant="secondary"
                            size="md"
                            href={`/divisions#${division.id}`}
                            fullWidth
                            className="flex items-center justify-center gap-2 group/button"
                            style={{
                              transition: 'all 0.3s ease',
                              background: 'linear-gradient(135deg, rgba(1, 178, 178, 0.1) 0%, rgba(1, 178, 178, 0.05) 100%)',
                              border: '1px solid rgba(1, 178, 178, 0.2)',
                              borderRadius: '8px',
                              padding: 'clamp(12px, 1.5vw, 14px) clamp(20px, 2.5vw, 24px)',
                              fontWeight: 600,
                              color: '#01B2B2',
                              boxShadow: '0 2px 8px rgba(1, 178, 178, 0.1)'
                            }}
                          >
                            <span style={{ fontWeight: 600 }}>Learn More</span>
                            <motion.div
                              initial={{ x: 0 }}
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ArrowRight className="w-4 h-4" style={{ strokeWidth: 2.5 }} />
                            </motion.div>
                          </Button>
                        </div>
                      </motion.div>
                    </motion.div>
                  </CardBody>
                  </div>
                  
                  {/* Enhanced border animation on hover */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent pointer-events-none"
                    style={{
                      borderRadius: '16px',
                      zIndex: 2
                    }}
                    whileHover={{
                      borderColor: 'rgba(1, 178, 178, 0.3)',
                      boxShadow: '0 8px 32px rgba(1, 178, 178, 0.15)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
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
