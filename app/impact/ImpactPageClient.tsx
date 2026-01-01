'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from '@/components/ui/Card';
import CardBody from '@/components/ui/CardBody';
import BulletList from '@/components/ui/BulletList';
import Button from '@/components/ui/Button';
import { Leaf, Users, Gem } from 'lucide-react';

const impactPillars = [
  {
    title: 'Environment',
    icon: Leaf,
    items: [
      'Ethical gold sourcing',
      'ESG-aligned refinery partnerships',
      'Energy-efficient construction',
    ],
    color: '#2E8B57',
    gradient: 'from-green-50 to-emerald-50',
    iconColor: 'text-green-600',
  },
  {
    title: 'Community',
    icon: Users,
    items: [
      '300+ Direct Jobs',
      '1,200+ Indirect Jobs',
      'Skill development programs',
    ],
    color: '#4169E1',
    gradient: 'from-blue-50 to-cyan-50',
    iconColor: 'text-blue-600',
  },
  {
    title: 'Responsible Gold',
    icon: Gem,
    items: [
      'Licensed African mines',
      'Traceable supply chain',
      'Community safeguards',
    ],
    color: '#8B7355',
    gradient: 'from-amber-50 to-yellow-50',
    iconColor: 'text-amber-600',
  },
];

export default function ImpactPageClient() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden text-white" style={{ height: '100vh', minHeight: '600px', maxHeight: '1200px' }}>
        <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
          <Image
            src="/assets/hero/hero-impact.png"
            alt="ZHH Impact"
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
        <div className="absolute inset-0 w-full h-full z-0 md:hidden">
          <Image
            src="/assets/hero/hero-impact.png"
            alt="ZHH Impact"
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
                src="/assets/logos/ZHH%20Group%20Holding%20Logo.svg"
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
            className="text-center max-w-4xl mx-auto space-y-6"
            style={{
              paddingLeft: 'clamp(16px, 4vw, 24px)',
              paddingRight: 'clamp(16px, 4vw, 24px)',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-white"
              style={{ 
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: 'clamp(32px, 8vw, 80px)',
                fontWeight: 300,
                lineHeight: 1.3,
                marginBottom: 'clamp(20px, 4vw, 32px)',
                letterSpacing: '-0.5px',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 0, 0, 0.2)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              Our Impact
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-gray-200"
              style={{ 
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: 'clamp(16px, 3.5vw, 24px)',
                fontWeight: 400,
                lineHeight: 1.7,
                color: 'rgba(255, 255, 255, 0.95)',
                maxWidth: '100%',
                margin: '0 auto',
                paddingLeft: 'clamp(8px, 2vw, 0px)',
                paddingRight: 'clamp(8px, 2vw, 0px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              Creating sustainable value through ethical practices and community development
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Impact Pillars Section */}
      <section 
        className="section-unified relative overflow-hidden"
        style={{
          paddingTop: 'clamp(60px, 8vw, 80px)',
          paddingBottom: 'clamp(60px, 8vw, 80px)',
          background: 'linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 50%, #FAFAFA 100%)',
          position: 'relative'
        }}
      >
        {/* Subtle Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(1, 178, 178, 0.02) 0%, rgba(212, 175, 55, 0.01) 100%)',
            }}
          />
        </div>
        <div className="container-unified relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="section-title-wrapper"
            style={{ 
              marginTop: 'clamp(20px, 2.5vw, 30px)',
              paddingLeft: 'clamp(16px, 4vw, 0px)',
              paddingRight: 'clamp(16px, 4vw, 0px)',
              marginBottom: 'clamp(32px, 5vw, 48px)'
            }}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 mb-6"
              style={{ flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0D9488' }} />
              <span className="body-small-unified text-tertiary uppercase tracking-wider" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                Sustainability & Impact
              </span>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0D9488' }} />
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="h2-unified text-primary text-center"
              style={{
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontWeight: 600,
                color: 'var(--color-text-primary)',
                marginBottom: 'clamp(16px, 3vw, 24px)',
                paddingLeft: 'clamp(8px, 2vw, 0px)',
                paddingRight: 'clamp(8px, 2vw, 0px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                lineHeight: 1.3
              }}
            >
              Our Commitment Pillars
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
                wordWrap: 'break-word',
                overflowWrap: 'break-word',
                lineHeight: 1.7
              }}
            >
              Three foundational principles guiding our sustainable impact
            </motion.p>
          </motion.div>

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
            style={{
              gap: 'clamp(24px, 4vw, 32px)',
              paddingLeft: 'clamp(16px, 4vw, 24px)',
              paddingRight: 'clamp(16px, 4vw, 24px)',
              width: '100%',
              boxSizing: 'border-box'
            }}
          >
            {impactPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: [0.4, 0, 0.2, 1] }}
                  className="h-full"
                  style={{ width: '100%', maxWidth: '100%' }}
                >
                  <Card className="h-full flex flex-col" style={{ width: '100%', maxWidth: '100%', padding: 'clamp(24px, 4vw, 32px)' }}>
                    <CardBody maxWidth="max-w-none" className="flex flex-col h-full">
                      {/* Icon → Title → Divider → Content (strict order) */}
                      
                      {/* Icon with Visual Anchor - Unified Style */}
                      <motion.div 
                        className="mb-6 md:mb-8 flex flex-col items-center"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, type: 'spring', stiffness: 200 }}
                      >
                        <motion.div 
                          className="rounded-lg flex items-center justify-center shadow-sm transition-all duration-300"
                          style={{ 
                            backgroundColor: '#E0F2F1',
                            width: 'clamp(56px, 8vw, 64px)',
                            height: 'clamp(56px, 8vw, 64px)'
                          }}
                          whileHover={{ rotate: 5, scale: 1.05 }}
                        >
                          <Icon 
                            className="w-7 h-7 md:w-8 md:h-8"
                            style={{ color: '#0D9488' }}
                            strokeWidth={1.5}
                          />
                        </motion.div>
                        {/* Visual anchor line under icon - Unified teal color */}
                        <div 
                          className="mt-3 md:mt-4 h-0.5"
                          style={{ 
                            backgroundColor: '#0D9488',
                            width: 'clamp(40px, 6vw, 48px)'
                          }}
                        />
                      </motion.div>
                      
                      {/* Title */}
                      <div className="mb-6 md:mb-8 text-center">
                        <h3 
                          className="h3-unified text-primary"
                          style={{
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            letterSpacing: '-0.01em',
                            lineHeight: 1.3,
                            fontSize: 'clamp(18px, 4vw, 22px)',
                            wordWrap: 'break-word',
                            overflowWrap: 'break-word',
                            marginBottom: 'clamp(8px, 1.5vw, 12px)'
                          }}
                        >
                          {pillar.title}
                        </h3>
                      </div>
                      
                      {/* Divider - Unified teal color */}
                      <div 
                        className="h-px mb-6 md:mb-8"
                        style={{ backgroundColor: '#0D9488', opacity: 0.2 }}
                      />
                      
                      {/* Content - Bullet List */}
                      <div className="flex-1 mb-6 md:mb-8" style={{ minHeight: 'clamp(120px, 20vw, 180px)' }}>
                        <BulletList
                          bulletColor="#0D9488"
                          className="text-left"
                          maxWidth="max-w-none"
                          items={pillar.items}
                        />
                      </div>

                      {/* CTA Button - Unified teal color */}
                      <div className="mt-auto pt-4 md:pt-6 border-t border-gray-200">
                        <Button
                          variant="secondary"
                          size="md"
                          fullWidth
                          className="text-sm"
                          style={{ 
                            fontSize: 'clamp(13px, 2.5vw, 14px)',
                            padding: 'clamp(10px, 2vw, 12px) clamp(16px, 3vw, 20px)'
                          }}
                        >
                          Learn More
                        </Button>
                      </div>
                    </CardBody>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pt-12 md:pt-16 lg:pt-20 border-t border-gray-200"
            style={{
              marginTop: 'clamp(32px, 5vw, 48px)',
              paddingLeft: 'clamp(16px, 4vw, 24px)',
              paddingRight: 'clamp(16px, 4vw, 24px)'
            }}
          >
            <div 
              className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto text-center"
              style={{
                gap: 'clamp(24px, 4vw, 40px)',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              <div className="text-center" style={{ padding: 'clamp(12px, 2vw, 16px)' }}>
                <div 
                  className="text-stats-number"
                  style={{ 
                    color: 'var(--color-primary-dark)',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(32px, 6vw, 48px)',
                    lineHeight: 1.2,
                    marginBottom: 'clamp(8px, 1.5vw, 12px)',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                  }}
                >
                  1500+
                </div>
                <div 
                  className="body-regular-unified text-secondary"
                  style={{ 
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    color: 'var(--color-text-secondary)',
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    lineHeight: 1.6,
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                  }}
                >
                  Jobs Created
                </div>
              </div>
              <div className="text-center" style={{ padding: 'clamp(12px, 2vw, 16px)' }}>
                <div 
                  className="text-stats-number"
                  style={{ 
                    color: 'var(--color-primary-dark)',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(32px, 6vw, 48px)',
                    lineHeight: 1.2,
                    marginBottom: 'clamp(8px, 1.5vw, 12px)',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                  }}
                >
                  100%
                </div>
                <div 
                  className="body-regular-unified text-secondary"
                  style={{ 
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    color: 'var(--color-text-secondary)',
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    lineHeight: 1.6,
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                  }}
                >
                  Traceable Supply
                </div>
              </div>
              <div className="text-center" style={{ padding: 'clamp(12px, 2vw, 16px)' }}>
                <div 
                  className="text-stats-number"
                  style={{ 
                    color: 'var(--color-primary-dark)',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(32px, 6vw, 48px)',
                    lineHeight: 1.2,
                    marginBottom: 'clamp(8px, 1.5vw, 12px)',
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                  }}
                >
                  50+
                </div>
                <div 
                  className="body-regular-unified text-secondary"
                  style={{ 
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    color: 'var(--color-text-secondary)',
                    fontSize: 'clamp(14px, 3vw, 16px)',
                    lineHeight: 1.6,
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word'
                  }}
                >
                  Community Programs
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
