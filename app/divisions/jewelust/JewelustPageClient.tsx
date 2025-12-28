'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { divisions } from '@/data/divisions';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from '@/components/ui/Card';
import Tabs from '@/components/ui/Tabs';

export default function JewelustPageClient() {
  const division = divisions.find(d => d.id === 'jewelust');

  if (!division) return null;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden text-white" style={{ height: '100vh', minHeight: '600px', maxHeight: '1200px' }}>
        {/* Background Image - Desktop Only */}
        <div className="absolute inset-0 w-full h-full z-0 hidden md:block">
          <Image
            src="/assets/hero/Gold1.JPG"
            alt={division.name}
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
        {/* Mobile Static Background - Shows bottom portion */}
        <div className="absolute inset-0 w-full h-full z-0 md:hidden">
          <Image
            src="/assets/hero/Gold1.JPG"
            alt={division.name}
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
                src="/assets/logos/zhh-group-holding-logo.svg"
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
              {division.name}
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
              {division.tagline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section 
        className="section-unified bg-unified-white"
        style={{
          paddingTop: 'clamp(60px, 8vw, 80px)',
          paddingBottom: 'clamp(60px, 8vw, 80px)'
        }}
      >
        <div className="container-unified">
          <Card className="overflow-hidden" hover={false} style={{ padding: 0, boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', borderRadius: '12px', border: '1px solid #E5E5E5', backgroundColor: '#FFFFFF' }}>
            <motion.div variants={fadeInUp} style={{ background: 'linear-gradient(135deg, #F9F9F9 0%, #FFFFFF 100%)', padding: 'clamp(40px, 5vw, 56px)', borderBottom: '1px solid #E5E5E5', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'clamp(24px, 3vw, 32px)', textAlign: 'center' }}>
              <div style={{ height: 'clamp(100px, 12vw, 140px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <a 
                  href="https://jewelust.ae" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'opacity 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <img src="/assets/logos/jewelust-logo.svg" alt="Jewelust Logo" className="h-full w-auto object-contain" style={{ maxWidth: 'min(100%, 350px)' }} />
                </a>
              </div>
              <div>
                <h2 style={{ fontFamily: 'var(--font-english-heading)', fontSize: 'clamp(32px, 4.1vw, 49px)', fontWeight: 700, color: '#032D46', marginBottom: 'clamp(10px, 1.3vw, 14px)' }}>{division.name}</h2>
                <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(15px, 2vw, 20px)', fontStyle: 'italic', color: '#01B2B2', fontWeight: 500 }}>{division.tagline}</p>
              </div>
            </motion.div>

            <div style={{ padding: 'clamp(27px, 3.4vw, 41px)' }}>
              <Tabs
                defaultTab="overview"
                tabs={[
                  { id: 'overview', label: 'Overview', content: <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.8, color: '#333333' }}>{division.overview}</p> },
                  { id: 'establishment', label: 'Establishment', content: <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.8, color: '#333333' }}>{division.establishment}</p> },
                  { id: 'core-activities', label: 'Core Activities', content: (
                    <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vw, 16px)' }}>
                      {division.coreActivities.map((activity, idx) => (
                        <li key={idx} style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.7, color: '#333333', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <span style={{ color: '#01B2B2', fontSize: '22px', fontWeight: 'bold', marginTop: '2px', flexShrink: 0 }}>•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  )},
                  { id: 'achievements', label: 'Achievements', content: (
                    <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vw, 16px)' }}>
                      {division.achievements.map((achievement, idx) => (
                        <li key={idx} style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.7, color: '#333333', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <span style={{ color: '#01B2B2', fontSize: '22px', fontWeight: 'bold', marginTop: '2px', flexShrink: 0 }}>✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )},
                  { id: 'ceo-message', label: 'Founder\'s Message', content: (
                    <div style={{ padding: 'clamp(27px, 3.4vw, 34px)', background: 'linear-gradient(135deg, #F0FDFF 0%, #FFFFFF 100%)', borderRadius: '8px', borderLeft: '4px solid #01B2B2', border: '1px solid #E5E5E5' }}>
                      <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(20px, 2.2vw, 21px)', fontWeight: 600, color: '#032D46', marginBottom: 'clamp(8px, 1vw, 12px)' }}>{division.ceoMessage.name}</p>
                      <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', color: '#666666', marginBottom: 'clamp(20px, 2.5vw, 24px)' }}>{division.ceoMessage.title}</p>
                      <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.8, color: '#333333', fontStyle: 'italic', position: 'relative', paddingLeft: 'clamp(20px, 2.5vw, 28px)' }}>
                        <span style={{ position: 'absolute', left: 0, top: 0, fontSize: 'clamp(40px, 5vw, 56px)', color: '#01B2B2', opacity: 0.2, fontFamily: 'Georgia, serif', lineHeight: 1 }}>"</span>
                        {division.ceoMessage.quote}
                      </p>
                    </div>
                  )},
                  ...(division.cooQuotes && division.cooQuotes.length > 0 ? [{
                    id: 'coo-quotes',
                    label: 'COO Quotes',
                    content: (
                      <div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'clamp(20px, 2.6vw, 27px)' }}>
                          {division.cooQuotes.map((coo, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, scale: 0.95 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.4, delay: idx * 0.1 }}
                              style={{ padding: 'clamp(20px, 2.6vw, 27px)', backgroundColor: '#FFFFFF', borderRadius: '8px', border: '1px solid #E5E5E5', borderLeft: '4px solid #D4AF37', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)', transition: 'all 0.3s ease' }}
                              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                            >
                              <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(15px, 1.7vw, 16px)', fontWeight: 600, color: '#032D46', marginBottom: 'clamp(7px, 0.9vw, 10px)' }}>{coo.name}</p>
                              <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(14px, 1.5vw, 15px)', color: '#666666', marginBottom: 'clamp(14px, 1.7vw, 17px)' }}>{coo.title}</p>
                              <p style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.7, color: '#333333', fontStyle: 'italic' }}>"{coo.quote}"</p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )
                  }] : [])
                ]}
              />
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
