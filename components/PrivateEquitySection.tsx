'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
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
              Investment Portfolio
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
            Private Equity
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
            Strategic investments driving growth and value creation across UAE and global markets
          </motion.p>
        </motion.div>

        {/* Three Cards Grid - Using Unified System */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{
            gap: 'clamp(24px, 4vw, 32px)',
            paddingLeft: 'clamp(16px, 4vw, 0px)',
            paddingRight: 'clamp(16px, 4vw, 0px)',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          {/* Card 1 - Private Equity Overview */}
          <motion.div
            variants={cardVariants}
            custom={0}
            className="h-full"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <Card className="h-full flex flex-col relative overflow-hidden group" style={{ padding: 0, position: 'relative', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', border: '1px solid rgba(229, 231, 235, 0.5)', transition: 'all 0.3s ease' }}>
              {/* Hover Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
                style={{ zIndex: 3 }}
                whileHover={{
                  borderColor: 'rgba(13, 148, 136, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Background Image with Blur and Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 0,
                  overflow: 'hidden',
                  borderRadius: '16px'
                }}
                className="group-hover:scale-105 transition-transform duration-500"
              >
                <Image
                  src="/assets/Private Equity/Private Equity Overview.jpg"
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

              <div style={{ padding: 'clamp(28px, 3.5vw, 36px)', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', zIndex: 10 }}>
              <CardBody maxWidth="max-w-none" className="flex flex-col h-full relative z-10">
                {/* Icon - Enhanced with Animation */}
                <motion.div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 shadow-lg relative z-10 mobile-center-icon"
                  style={{ 
                    backgroundColor: 'rgba(224, 242, 241, 0.95)', 
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(13, 148, 136, 0.2)'
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    boxShadow: '0 8px 24px rgba(13, 148, 136, 0.3)'
                  }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <BarChart3 className="w-8 h-8" style={{ color: '#0D9488' }} />
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="h3-unified text-primary rhythm-title-content text-center md:text-left" 
                  style={{ 
                    color: '#000000', 
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 2.5vw, 24px)',
                    lineHeight: 1.3,
                    marginBottom: 'clamp(12px, 1.5vw, 16px)'
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Private Equity Overview
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="body-large-unified text-secondary rhythm-card-internal" 
                  style={{ 
                    color: '#000000', 
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 1.8vw, 16px)',
                    lineHeight: 1.7,
                    marginBottom: 'clamp(20px, 2.5vw, 24px)'
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Strategic investments in high-growth sectors across UAE and global markets, 
                  focusing on sustainable value creation.
                </motion.p>

                {/* Focus Areas - Using BulletList */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 
                    className="body-small-unified text-tertiary uppercase tracking-wider mb-4" 
                    style={{ 
                      color: '#000000', 
                      fontWeight: 600,
                      fontSize: 'clamp(12px, 1.4vw, 14px)',
                      marginBottom: 'clamp(12px, 1.5vw, 16px)'
                    }}
                  >
                    Focus Areas:
                  </h4>
                  <div style={{ color: '#000000', fontWeight: 600 }}>
                    <BulletList
                      bulletColor="#00d4aa"
                      items={[
                        'Real Estate',
                        'Gold Mining',
                        'Global Trading'
                      ]}
                      titleGap="sm"
                      className="[&_li]:text-black [&_li]:font-semibold"
                    />
                  </div>
                </motion.div>
              </CardBody>
              </div>
            </Card>
          </motion.div>

          {/* Card 2 - Investment Strategy */}
          <motion.div
            variants={cardVariants}
            custom={1}
            className="h-full"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <Card className="h-full flex flex-col relative overflow-hidden group" style={{ padding: 0, position: 'relative', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', border: '1px solid rgba(229, 231, 235, 0.5)', transition: 'all 0.3s ease' }}>
              {/* Hover Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
                style={{ zIndex: 3 }}
                whileHover={{
                  borderColor: 'rgba(13, 148, 136, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Background Image with Blur and Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 0,
                  overflow: 'hidden',
                  borderRadius: '16px'
                }}
                className="group-hover:scale-105 transition-transform duration-500"
              >
                <Image
                  src="/assets/Private Equity/Investment Strategy.jpg"
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

              <div style={{ padding: 'clamp(28px, 3.5vw, 36px)', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', zIndex: 10 }}>
              <CardBody maxWidth="max-w-none" className="flex flex-col h-full relative z-10">
                {/* Icon - Enhanced with Animation */}
                <motion.div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 shadow-lg relative z-10 mobile-center-icon"
                  style={{ 
                    backgroundColor: 'rgba(224, 242, 241, 0.95)', 
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(13, 148, 136, 0.2)'
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    boxShadow: '0 8px 24px rgba(13, 148, 136, 0.3)'
                  }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Target className="w-8 h-8" style={{ color: '#0D9488' }} />
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="h3-unified text-primary rhythm-title-content text-center md:text-left" 
                  style={{ 
                    color: '#000000', 
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 2.5vw, 24px)',
                    lineHeight: 1.3,
                    marginBottom: 'clamp(16px, 2vw, 20px)'
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Investment Strategy
                </motion.h3>

                {/* Strategy Items - Using BulletList */}
                <motion.div 
                  style={{ color: '#000000', fontWeight: 600 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <BulletList
                    bulletColor="#00d4aa"
                    items={[
                      'Target high-growth sectors',
                      'Governance & transparency',
                      'Regional expansion',
                      'Long-term value creation'
                    ]}
                    titleGap="sm"
                    className="[&_li]:text-black [&_li]:font-semibold"
                  />
                </motion.div>
              </CardBody>
              </div>
            </Card>
          </motion.div>

          {/* Card 3 - UAE Investments */}
          <motion.div
            variants={cardVariants}
            custom={2}
            className="h-full"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          >
            <Card className="h-full flex flex-col relative overflow-hidden group" style={{ padding: 0, position: 'relative', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', border: '1px solid rgba(229, 231, 235, 0.5)', transition: 'all 0.3s ease' }}>
              {/* Hover Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-2xl pointer-events-none"
                style={{ zIndex: 3 }}
                whileHover={{
                  borderColor: 'rgba(13, 148, 136, 0.3)',
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Background Image with Blur and Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  zIndex: 0,
                  overflow: 'hidden',
                  borderRadius: '16px'
                }}
                className="group-hover:scale-105 transition-transform duration-500"
              >
                <Image
                  src="/assets/Private Equity/UAE Investments.jpg"
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

              <div style={{ padding: 'clamp(28px, 3.5vw, 36px)', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', zIndex: 10 }}>
              <CardBody maxWidth="max-w-none" className="flex flex-col h-full relative z-10">
                {/* Icon - Enhanced with Animation */}
                <motion.div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 shadow-lg relative z-10 mobile-center-icon"
                  style={{ 
                    backgroundColor: 'rgba(224, 242, 241, 0.95)', 
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(13, 148, 136, 0.2)'
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    boxShadow: '0 8px 24px rgba(13, 148, 136, 0.3)'
                  }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  <Building2 className="w-8 h-8" style={{ color: '#0D9488' }} />
                </motion.div>

                {/* Title */}
                <motion.h3 
                  className="h3-unified text-primary rhythm-title-content text-center md:text-left" 
                  style={{ 
                    color: '#000000', 
                    fontWeight: 700,
                    fontSize: 'clamp(20px, 2.5vw, 24px)',
                    lineHeight: 1.3,
                    marginBottom: 'clamp(12px, 1.5vw, 16px)'
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  UAE Investments
                </motion.h3>

                {/* Description */}
                <motion.p 
                  className="body-large-unified text-secondary rhythm-card-internal" 
                  style={{ 
                    color: '#000000', 
                    fontWeight: 600,
                    fontSize: 'clamp(14px, 1.8vw, 16px)',
                    lineHeight: 1.7,
                    marginBottom: 'clamp(20px, 2.5vw, 24px)'
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Strategic investments in UAE's most promising sectors, 
                  leveraging local expertise and global partnerships.
                </motion.p>

                {/* Investment Items */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <h4 
                    className="body-small-unified text-tertiary uppercase tracking-wider mb-4" 
                    style={{ 
                      color: '#000000', 
                      fontWeight: 600,
                      fontSize: 'clamp(12px, 1.4vw, 14px)',
                      marginBottom: 'clamp(12px, 1.5vw, 16px)'
                    }}
                  >
                    Key Sectors:
                  </h4>
                  <div style={{ color: '#000000', fontWeight: 600 }}>
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
                      className="[&_li_div]:text-black [&_li_div]:font-semibold [&_li_div_div]:text-black [&_li_div_div]:font-medium"
                    />
                  </div>
                </motion.div>
              </CardBody>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
