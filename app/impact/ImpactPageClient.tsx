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
    <div style={{ paddingTop: '80px' }}>
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
              className="text-4xl md:text-6xl font-bold tracking-tight text-white"
              style={{ 
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontWeight: 700,
                lineHeight: 1.2
              }}
            >
              Our Impact
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-200 leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontWeight: 300
              }}
            >
              Creating sustainable value through ethical practices and community development
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Impact Pillars Section */}
      <section className="section-unified bg-white">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="section-title-wrapper"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-light text-gray-900 mb-4"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Our Commitment Pillars
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-gray-600 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed"
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
                      
                      {/* Icon with Visual Anchor */}
                      <div className="mb-8 flex flex-col items-center">
                        <div 
                          className={`w-16 h-16 rounded-lg ${pillar.gradient} flex items-center justify-center shadow-sm transition-all duration-300`}
                          style={{ 
                            border: `1px solid ${pillar.color}15`
                          }}
                        >
                          <Icon 
                            className={`w-8 h-8 ${pillar.iconColor}`}
                            strokeWidth={1.5}
                          />
                        </div>
                        {/* Visual anchor line under icon */}
                        <div 
                          className="mt-4 h-0.5 w-12"
                          style={{ backgroundColor: pillar.color }}
                        />
                      </div>
                      
                      {/* Title */}
                      <div className="mb-8 text-center">
                        <h3 
                          className="text-xl lg:text-2xl font-semibold text-gray-900"
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            letterSpacing: '-0.01em',
                            lineHeight: '1.3'
                          }}
                        >
                          {pillar.title}
                        </h3>
                      </div>
                      
                      {/* Divider */}
                      <div 
                        className="h-px mb-8"
                        style={{ backgroundColor: pillar.color, opacity: 0.2 }}
                      />
                      
                      {/* Content - Bullet List (slightly right, not centered, not edge) */}
                      <div className="flex-1 mb-8">
                        <BulletList
                          bulletColor={pillar.color}
                          className="text-left"
                          maxWidth="max-w-none"
                          items={pillar.items}
                        />
                      </div>

                      {/* CTA Button - Same width, visually attached to card bottom */}
                      <div className="mt-auto pt-6 border-t border-gray-200">
                        <Button
                          variant="secondary"
                          size="md"
                          fullWidth
                          className="text-sm"
                          style={{
                            color: pillar.color,
                            borderColor: `${pillar.color}30`,
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
            className="pt-16 lg:pt-20 border-t border-gray-200 rhythm-content-cta"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto text-center">
              <div className="text-center space-y-3">
                <div className="text-4xl lg:text-5xl font-light text-gray-900">1500+</div>
                <div className="text-gray-600 text-base lg:text-lg">Jobs Created</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-4xl lg:text-5xl font-light text-gray-900">100%</div>
                <div className="text-gray-600 text-base lg:text-lg">Traceable Supply</div>
              </div>
              <div className="text-center space-y-3">
                <div className="text-4xl lg:text-5xl font-light text-gray-900">50+</div>
                <div className="text-gray-600 text-base lg:text-lg">Community Programs</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
