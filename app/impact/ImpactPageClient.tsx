'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from '@/components/ui/Card';
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
        <section className="relative flex items-center justify-center overflow-hidden text-white" style={{ minHeight: '70vh' }}>
          {/* Background Image - Desktop Only */}
          <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
            <Image
              src="/assets/hero/hero-impact.png"
              alt="ZHH Impact"
              fill
              priority
              className="object-cover"
              style={{
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
          </div>
          {/* Mobile Static Background - Shows bottom portion */}
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
                objectPosition: 'bottom'
              }}
            />
          </div>

          {/* Light Gradient Overlay - Bottom to Top (stronger at bottom) */}
          <div 
            className="absolute inset-0 z-[1]"
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 40%, transparent 100%)'
            }}
          />

          {/* Text Content Container with Backdrop */}
          <div className="container-unified relative z-10 flex items-center justify-center" style={{ minHeight: '70vh', paddingTop: 'clamp(40px, 8vh, 80px)' }}>
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
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
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
                  Our Impact
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-[#c9a74a] via-[#00d4aa] to-[#c9a74a]" />
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl text-gray-200 leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Creating sustainable value through ethical practices and community development
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Impact Pillars Section - Updated Spacing */}
        <section className="section-unified bg-white py-16 lg:py-24">
          <div className="container-unified">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={staggerContainer}
              className="text-center mb-16 lg:mb-20"
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
              {impactPillars.map((pillar, index) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2, ease: [0.4, 0, 0.2, 1] }}
                    className="group relative h-full"
                  >
                    <Card 
                      className="h-full flex flex-col relative overflow-hidden bg-white border border-gray-100 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1 !important"
                      style={{
                        paddingTop: 'clamp(48px, 5.5vw, 60px)',
                        paddingRight: 'clamp(24px, 3vw, 32px)',
                        paddingBottom: 'clamp(36px, 4.5vw, 48px)',
                        paddingLeft: 'clamp(24px, 3vw, 32px)',
                      }}
                    >
                      <div className="flex flex-col h-full">
                        {/* Icon Container */}
                        <div className="mb-12 flex justify-center">
                          <div 
                            className={`w-16 h-16 rounded-lg ${pillar.gradient} flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-105 !important`}
                            style={{ 
                              border: `1px solid ${pillar.color}15`
                            }}
                          >
                            <Icon 
                              className={`w-8 h-8 ${pillar.iconColor} !important`}
                              strokeWidth={1.5}
                            />
                          </div>
                        </div>
                        
                        {/* Title with Underline */}
                        <div className="mb-12">
                          <h3 
                            className="text-xl lg:text-2xl font-semibold text-gray-900 text-center relative pb-5 !important"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              letterSpacing: '-0.01em',
                              lineHeight: '1.3'
                            }}
                          >
                            {pillar.title}
                            <motion.div 
                              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 !important"
                              style={{ 
                                backgroundColor: pillar.color,
                                width: '64px'
                              }}
                              initial={{ width: 0 }}
                              whileInView={{ width: 64 }}
                              transition={{ delay: index * 0.2 + 0.3 }}
                            />
                          </h3>
                        </div>
                        
                        {/* Items List with Improved Spacing and Alignment */}
                        <div className="flex-1 mb-16">
                          <ul className="space-y-3 text-left pl-4 pr-2 !important">
                            {pillar.items.map((item, idx) => (
                              <motion.li 
                                key={idx} 
                                className="flex items-start gap-3 rounded-lg transition-all duration-300 hover:bg-gray-50 group/item !important"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 + idx * 0.15 }}
                                whileHover={{ x: 4 }}
                              >
                                <div 
                                  className="flex-shrink-0 w-2 h-2 rounded-full mt-1.5 transition-all duration-300 group-hover/item:scale-125 !important"
                                  style={{ 
                                    backgroundColor: pillar.color,
                                    boxShadow: `0 0 4px ${pillar.color}30`
                                  }}
                                />
                                <span 
                                  className="text-gray-700 flex-1 !important"
                                  style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: '15px',
                                    lineHeight: '1.7',
                                    letterSpacing: '0.01em',
                                    marginLeft: '4px'
                                  }}
                                >
                                  {item}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Learn More Button with Consistent Spacing */}
                        <div className="mt-auto pt-8 border-t border-gray-200">
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: index * 0.2 + 0.6 }}
                            className="flex justify-center"
                          >
                            <button
                              className="text-sm font-medium px-6 py-3 rounded-full transition-all duration-300 hover:shadow-md !important"
                              style={{
                                color: pillar.color,
                                border: `1px solid ${pillar.color}30`,
                                backgroundColor: `${pillar.color}08`,
                                fontWeight: 500
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = `${pillar.color}15`;
                                e.currentTarget.style.transform = 'translateY(-2px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = `${pillar.color}08`;
                                e.currentTarget.style.transform = 'translateY(0)';
                              }}
                            >
                              Learn More
                            </button>
                          </motion.div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Stats Section with Increased Spacing */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mt-40 lg:mt-48 pt-16 lg:pt-20 border-t border-gray-200 !important"
              style={{ marginTop: 'clamp(120px, 15vw, 180px) !important' }}
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