'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from '@/components/ui/Card';

const impactPillars = [
  {
    title: 'Environment',
    icon: '🌿',
    items: [
      'Ethical gold sourcing',
      'ESG-aligned refinery partnerships',
      'Energy-efficient construction',
    ],
    color: '#2E8B57', // Forest Green - محترف وهادئ
  },
  {
    title: 'Community',
    icon: '🤝',
    items: [
      '300+ Direct Jobs',
      '1,200+ Indirect Jobs',
      'Skill development programs',
    ],
    color: '#4169E1', // Royal Blue - ثقة واستقرار
  },
  {
    title: 'Responsible Gold',
    icon: '⚖️',
    items: [
      'Licensed African mines',
      'Traceable supply chain',
      'Community safeguards',
    ],
    color: '#8B7355', // Bronze - مرتبط بالذهب بشكل أنيق
  },
];

export default function ImpactPageClient() {
  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section - تصميم أنيق */}
      <section className="relative h-[60vh] min-h-[500px] max-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/assets/back%20ground/bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        
        {/* Dark Overlay for Contrast */}
        <div 
          className="absolute inset-0 z-1"
          style={{
            background: 'linear-gradient(135deg, rgba(15, 32, 45, 0.9) 0%, rgba(40, 60, 80, 0.7) 100%)'
          }}
        />
        
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 z-1 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="container-unified relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block mb-6"
            >
              <div className="w-16 h-1 bg-gradient-to-r from-[#2E8B57] to-[#4169E1] mx-auto mb-6"></div>
              <h1 
                className="text-5xl lg:text-7xl font-light text-white mb-6 tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Our Impact
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#8B7355] to-[#4169E1] mx-auto"></div>
            </motion.div>
            
            <motion.p 
              variants={fadeInUp} 
              className="text-xl lg:text-2xl text-gray-200 font-light leading-relaxed max-w-2xl mx-auto text-center"
              style={{
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '0.01em'
              }}
            >
              Creating sustainable value through ethical practices and community development
            </motion.p>
            
            {/* Scroll Indicator */}
            <motion.div
              variants={fadeInUp}
              className="mt-12"
            >
              <div className="w-6 h-10 border-2 border-white/30 rounded-full mx-auto relative">
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-1 h-3 bg-white/50 rounded-full absolute top-2 left-1/2 transform -translate-x-1/2"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Pillars Section - تصميم بسيط ومتناسق */}
      <section className="section-unified bg-white py-14 lg:py-20">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={staggerContainer}
            className="text-center mb-14 lg:mb-18"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl lg:text-4xl font-light text-gray-900 mb-3"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-9 max-w-6xl mx-auto">
            {impactPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: [0.4, 0, 0.2, 1] }}
                className="group relative"
              >
                <Card 
                  className="h-full min-h-[320px] p-6 lg:p-7 relative overflow-hidden bg-white border border-gray-100 rounded-xl transition-all duration-300 hover:shadow-md hover:-translate-y-1 flex flex-col"
                >
                  <div className="text-center relative z-10 flex flex-col h-full">
                    {/* Icon Container with Elegant Design */}
                    <div className="mb-6 flex justify-center">
                      <div 
                        className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${pillar.color}12 0%, ${pillar.color}08 100%)`,
                          border: `1px solid ${pillar.color}20`
                        }}
                      >
                        <div 
                          className="text-3xl transition-transform duration-300 group-hover:scale-110"
                          style={{ color: pillar.color }}
                        >
                          {pillar.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Title with Underline */}
                    <h3 
                      className="text-xl lg:text-2xl font-semibold text-gray-900 mb-6 relative pb-3"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {pillar.title}
                      <motion.div 
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5"
                        style={{ backgroundColor: pillar.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: 64 }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                      />
                    </h3>
                    
                    {/* Items List with Elegant Styling */}
                    <ul className="space-y-3 text-center flex-1 flex flex-col justify-start">
                      {pillar.items.map((item, idx) => (
                        <motion.li 
                          key={idx} 
                          className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-50 group/item justify-center"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + idx * 0.15 }}
                          whileHover={{ x: 5 }}
                        >
                          <div 
                            className="flex-shrink-0 w-2 h-2 rounded-full transition-all duration-300 group-hover/item:scale-140 mt-0.5"
                            style={{ 
                              backgroundColor: pillar.color,
                              boxShadow: `0 0 8px ${pillar.color}40`
                            }}
                          />
                          <span 
                            className="text-gray-700 text-center flex-1 leading-relaxed"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: '15px',
                              lineHeight: '1.55'
                            }}
                          >
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                      className="mt-7"
                    >
                      <button
                        className="text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:shadow-md"
                        style={{
                          color: pillar.color,
                          border: `1px solid ${pillar.color}30`,
                          backgroundColor: `${pillar.color}08`
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
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Stats Section Below Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-14 lg:mt-18 pt-10 lg:pt-14 border-t border-gray-100"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 max-w-4xl mx-auto text-center">
              <div className="text-center space-y-1.5">
                <div className="text-3xl lg:text-4xl font-light text-gray-900">1500+</div>
                <div className="text-gray-600 text-sm lg:text-base">Jobs Created</div>
              </div>
              <div className="text-center space-y-1.5">
                <div className="text-3xl lg:text-4xl font-light text-gray-900">100%</div>
                <div className="text-gray-600 text-sm lg:text-base">Traceable Supply</div>
              </div>
              <div className="text-center space-y-1.5">
                <div className="text-3xl lg:text-4xl font-light text-gray-900">50+</div>
                <div className="text-gray-600 text-sm lg:text-base">Community Programs</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}