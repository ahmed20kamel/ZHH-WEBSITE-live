'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { fadeInUp, staggerContainer, cardVariants } from '@/lib/animations';
import { Target, Building2, Globe, Award, BarChart3, Shield, Clock, MapPin, TrendingUp } from 'lucide-react';
import Card from '@/components/ui/Card';
import CardBody from '@/components/ui/CardBody';
import BulletList from '@/components/ui/BulletList';

export default function PrivateEquitySection() {
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
              Investment Portfolio
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="h2-unified text-primary text-center"
          >
            Private Equity
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
            Strategic investments driving growth and value creation across UAE and global markets
          </motion.p>
        </motion.div>

        {/* Three Cards Grid - Using Unified System */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 rhythm-card-gap"
        >
          {/* Card 1 - Private Equity Overview */}
          <motion.div
            variants={cardVariants}
            custom={0}
            className="h-full"
          >
            <Card className="h-full flex flex-col">
              <CardBody maxWidth="max-w-none" className="flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-6 shadow-sm">
                  <BarChart3 className="w-7 h-7 text-teal-600" />
                </div>

                {/* Title */}
                <h3 className="h3-unified text-primary rhythm-title-content">
                  Private Equity Overview
                </h3>

                {/* Description */}
                <p className="body-large-unified text-secondary rhythm-card-internal">
                  Strategic investments in high-growth sectors across UAE and global markets, 
                  focusing on sustainable value creation.
                </p>

                {/* Focus Areas - Using BulletList */}
                <div>
                  <h4 className="body-small-unified text-tertiary uppercase tracking-wider mb-4">
                    Focus Areas:
                  </h4>
                  <BulletList
                    bulletColor="#00d4aa"
                    items={[
                      'Real Estate',
                      'Gold Mining',
                      'Global Trading'
                    ]}
                    titleGap="sm"
                  />
                </div>
              </CardBody>
            </Card>
          </motion.div>

          {/* Card 2 - Investment Strategy */}
          <motion.div
            variants={cardVariants}
            custom={1}
            className="h-full"
          >
            <Card className="h-full flex flex-col">
              <CardBody maxWidth="max-w-none" className="flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-6 shadow-sm">
                  <Target className="w-7 h-7 text-teal-600" />
                </div>

                {/* Title */}
                <h3 className="h3-unified text-primary rhythm-title-content">
                  Investment Strategy
                </h3>

                {/* Strategy Items - Using BulletList */}
                <BulletList
                  bulletColor="#00d4aa"
                  items={[
                    'Target high-growth sectors',
                    'Governance & transparency',
                    'Regional expansion',
                    'Long-term value creation'
                  ]}
                  titleGap="sm"
                />
              </CardBody>
            </Card>
          </motion.div>

          {/* Card 3 - UAE Investments */}
          <motion.div
            variants={cardVariants}
            custom={2}
            className="h-full"
          >
            <Card className="h-full flex flex-col">
              <CardBody maxWidth="max-w-none" className="flex flex-col h-full">
                {/* Icon */}
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center mb-6 shadow-sm">
                  <Building2 className="w-7 h-7 text-teal-600" />
                </div>

                {/* Title */}
                <h3 className="h3-unified text-primary rhythm-title-content">
                  UAE Investments
                </h3>

                {/* Description */}
                <p className="body-large-unified text-secondary rhythm-card-internal">
                  Strategic investments in UAE's most promising sectors, 
                  leveraging local expertise and global partnerships.
                </p>

                {/* Investment Items */}
                <div>
                  <h4 className="body-small-unified text-tertiary uppercase tracking-wider mb-4">
                    Key Sectors:
                  </h4>
                  <BulletList
                    bulletColor="#00d4aa"
                    items={[
                      {
                        title: 'Premium Real Estate',
                        description: 'Residential & Commercial'
                      },
                      {
                        title: 'Gold Ecosystem',
                        description: 'Dubai Gold Market'
                      }
                    ]}
                    titleGap="sm"
                  />
                </div>
              </CardBody>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
