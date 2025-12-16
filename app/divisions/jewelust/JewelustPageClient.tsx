'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { divisions } from '@/data/divisions';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from '@/components/ui/Card';
import Tabs from '@/components/ui/Tabs';

export default function JewelustPageClient() {
  const division = divisions.find(d => d.id === 'jewelust');

  if (!division) return null;

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section className="relative flex items-center justify-center overflow-hidden text-white" style={{ minHeight: '60vh' }}>
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
              objectPosition: 'center'
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
        <div className="container-unified relative z-10 flex items-center justify-center" style={{ minHeight: '60vh', paddingTop: 'clamp(40px, 8vh, 80px)' }}>
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
                {division.name}
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-[#c9a74a] via-[#00d4aa] to-[#c9a74a]" />
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-lg md:text-xl text-gray-200 leading-relaxed"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {division.tagline}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="section-unified bg-unified-white">
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
                <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(15px, 2vw, 20px)', fontStyle: 'italic', color: '#01B2B2', fontWeight: 500 }}>{division.tagline}</p>
              </div>
            </motion.div>

            <div style={{ padding: 'clamp(27px, 3.4vw, 41px)' }}>
              <Tabs
                defaultTab="overview"
                tabs={[
                  { id: 'overview', label: 'Overview', content: <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.8, color: '#333333' }}>{division.overview}</p> },
                  { id: 'establishment', label: 'Establishment', content: <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.8, color: '#333333' }}>{division.establishment}</p> },
                  { id: 'core-activities', label: 'Core Activities', content: (
                    <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vw, 16px)' }}>
                      {division.coreActivities.map((activity, idx) => (
                        <li key={idx} style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.7, color: '#333333', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <span style={{ color: '#01B2B2', fontSize: '22px', fontWeight: 'bold', marginTop: '2px', flexShrink: 0 }}>•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  )},
                  { id: 'achievements', label: 'Achievements', content: (
                    <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: 'clamp(12px, 1.5vw, 16px)' }}>
                      {division.achievements.map((achievement, idx) => (
                        <li key={idx} style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.7, color: '#333333', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <span style={{ color: '#01B2B2', fontSize: '22px', fontWeight: 'bold', marginTop: '2px', flexShrink: 0 }}>✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )},
                  { id: 'ceo-message', label: 'Founder\'s Message', content: (
                    <div style={{ padding: 'clamp(27px, 3.4vw, 34px)', background: 'linear-gradient(135deg, #F0FDFF 0%, #FFFFFF 100%)', borderRadius: '8px', borderLeft: '4px solid #01B2B2', border: '1px solid #E5E5E5' }}>
                      <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(20px, 2.2vw, 21px)', fontWeight: 600, color: '#032D46', marginBottom: 'clamp(8px, 1vw, 12px)' }}>{division.ceoMessage.name}</p>
                      <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', color: '#666666', marginBottom: 'clamp(20px, 2.5vw, 24px)' }}>{division.ceoMessage.title}</p>
                      <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(18px, 2vw, 19px)', lineHeight: 1.8, color: '#333333', fontStyle: 'italic', position: 'relative', paddingLeft: 'clamp(20px, 2.5vw, 28px)' }}>
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
                              <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(15px, 1.7vw, 16px)', fontWeight: 600, color: '#032D46', marginBottom: 'clamp(7px, 0.9vw, 10px)' }}>{coo.name}</p>
                              <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(14px, 1.5vw, 15px)', color: '#666666', marginBottom: 'clamp(14px, 1.7vw, 17px)' }}>{coo.title}</p>
                              <p style={{ fontFamily: '"Montserrat", sans-serif', fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.7, color: '#333333', fontStyle: 'italic' }}>"{coo.quote}"</p>
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
