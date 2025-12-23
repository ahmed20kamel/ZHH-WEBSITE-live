'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
              Our Impact
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
              Creating sustainable value through ethical practices and community development
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Impact Pillars Section */}
      <section 
        className="section-unified relative overflow-hidden"
        style={{
          paddingTop: 'clamp(50px, 6vw, 70px)',
          paddingBottom: 'clamp(50px, 6vw, 70px)',
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
          {/* Professional Divider Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60%',
              maxWidth: '400px',
              height: '1px',
              background: 'linear-gradient(90deg, transparent, rgba(1, 178, 178, 0.3), transparent)',
              transformOrigin: 'center'
            }}
          />
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="section-title-wrapper"
            style={{ marginTop: 'clamp(20px, 2.5vw, 30px)' }}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#0D9488' }} />
              <span className="body-small-unified text-tertiary uppercase tracking-wider">
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
                color: 'var(--color-text-primary)'
              }}
            >
              Our Commitment Pillars
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="body-large-unified text-secondary mt-6"
              style={{ maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}
            >
              Three foundational principles guiding our sustainable impact
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rhythm-card-gap max-w-6xl mx-auto">
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
                >
                  <Card className="h-full flex flex-col">
                    <CardBody maxWidth="max-w-none" className="flex flex-col h-full">
                      {/* Icon → Title → Divider → Content (strict order) */}
                      
                      {/* Icon with Visual Anchor - Unified Style */}
                      <motion.div 
                        className="mb-8 flex flex-col items-center"
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, type: 'spring', stiffness: 200 }}
                      >
                        <motion.div 
                          className="w-16 h-16 rounded-lg flex items-center justify-center shadow-sm transition-all duration-300"
                          style={{ 
                            backgroundColor: '#E0F2F1'
                          }}
                          whileHover={{ rotate: 5, scale: 1.05 }}
                        >
                          <Icon 
                            className="w-8 h-8"
                            style={{ color: '#0D9488' }}
                            strokeWidth={1.5}
                          />
                        </motion.div>
                        {/* Visual anchor line under icon - Unified teal color */}
                        <div 
                          className="mt-4 h-0.5 w-12"
                          style={{ backgroundColor: '#0D9488' }}
                        />
                      </motion.div>
                      
                      {/* Title */}
                      <div className="mb-8 text-center">
                        <h3 
                          className="h3-unified text-primary"
                          style={{
                            fontFamily: 'var(--font-inter), Inter, sans-serif',
                            fontWeight: 600,
                            color: 'var(--color-text-primary)',
                            letterSpacing: '-0.01em',
                            lineHeight: '1.3'
                          }}
                        >
                          {pillar.title}
                        </h3>
                      </div>
                      
                      {/* Divider - Unified teal color */}
                      <div 
                        className="h-px mb-8"
                        style={{ backgroundColor: '#0D9488', opacity: 0.2 }}
                      />
                      
                      {/* Content - Bullet List */}
                      <div className="flex-1 mb-8">
                        <BulletList
                          bulletColor="#0D9488"
                          className="text-left"
                          maxWidth="max-w-none"
                          items={pillar.items}
                        />
                      </div>

                      {/* CTA Button - Unified teal color */}
                      <div className="mt-auto pt-6 border-t border-gray-200">
                        <Button
                          variant="secondary"
                          size="md"
                          fullWidth
                          className="text-sm"
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
            className="pt-16 lg:pt-20 border-t border-gray-200 rhythm-content-cta"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto text-center">
              <div className="text-center space-y-3">
                <div 
                  className="text-stats-number"
                  style={{ 
                    color: 'var(--color-primary-dark)',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 600
                  }}
                >
                  1500+
                </div>
                <div 
                  className="body-regular-unified text-secondary"
                  style={{ 
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    color: 'var(--color-text-secondary)'
                  }}
                >
                  Jobs Created
                </div>
              </div>
              <div className="text-center space-y-3">
                <div 
                  className="text-stats-number"
                  style={{ 
                    color: 'var(--color-primary-dark)',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 600
                  }}
                >
                  100%
                </div>
                <div 
                  className="body-regular-unified text-secondary"
                  style={{ 
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    color: 'var(--color-text-secondary)'
                  }}
                >
                  Traceable Supply
                </div>
              </div>
              <div className="text-center space-y-3">
                <div 
                  className="text-stats-number"
                  style={{ 
                    color: 'var(--color-primary-dark)',
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontWeight: 600
                  }}
                >
                  50+
                </div>
                <div 
                  className="body-regular-unified text-secondary"
                  style={{ 
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    color: 'var(--color-text-secondary)'
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
