'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '@/data/projects';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Card from '@/components/ui/Card';

export default function ProjectsPageClient() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-internal bg-unified-dark text-white">
        <div className="container-unified">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="section-title-wrapper"
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
                overflowWrap: 'break-word',
                paddingLeft: 'clamp(8px, 2vw, 0px)',
                paddingRight: 'clamp(8px, 2vw, 0px)'
              }}
            >
              Our Projects
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
                paddingLeft: 'clamp(16px, 4vw, 0px)',
                paddingRight: 'clamp(16px, 4vw, 0px)',
                wordWrap: 'break-word',
                overflowWrap: 'break-word'
              }}
            >
              Showcasing excellence across all our divisions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section 
        className="section-unified bg-unified-white border-b border-gray-200" 
        style={{ 
          paddingTop: 'clamp(32px, 5vw, 48px)', 
          paddingBottom: 'clamp(32px, 5vw, 48px)'
        }}
      >
        <div className="container-unified">
          <div 
            className="flex flex-wrap justify-center"
            style={{
              gap: 'clamp(12px, 2vw, 16px)',
              paddingLeft: 'clamp(16px, 4vw, 0px)',
              paddingRight: 'clamp(16px, 4vw, 0px)'
            }}
          >
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-[#00d4aa] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section 
        className="section-unified bg-unified-light"
        style={{
          paddingTop: 'clamp(60px, 8vw, 80px)',
          paddingBottom: 'clamp(60px, 8vw, 80px)'
        }}
      >
        <div className="container-unified">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              style={{
                gap: 'clamp(20px, 3vw, 32px)',
                paddingLeft: 'clamp(16px, 4vw, 0px)',
                paddingRight: 'clamp(16px, 4vw, 0px)',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  id={project.id}
                  variants={fadeInUp}
                  layout
                  style={{ width: '100%', maxWidth: '100%' }}
                >
                  <Card className="h-full overflow-hidden" style={{ width: '100%', maxWidth: '100%' }}>
                    <div className="bg-gradient-to-br from-[#00d4aa]/20 to-[#1a2332] flex items-center justify-center" style={{ minHeight: 'clamp(160px, 25vw, 192px)', padding: 'clamp(16px, 3vw, 24px)' }}>
                      <div className="text-center">
                        <div className="text-4xl mb-2">🏗️</div>
                        <p className="text-gray-600" style={{ fontSize: 'clamp(12px, 2vw, 14px)', wordWrap: 'break-word', overflowWrap: 'break-word' }}>{project.category}</p>
                      </div>
                    </div>
                    <div style={{ padding: 'clamp(20px, 3vw, 24px)' }}>
                      <div className="flex items-center justify-between mb-2" style={{ flexWrap: 'wrap', gap: 'clamp(4px, 1vw, 8px)' }}>
                        <span className="text-xs font-semibold text-[#00d4aa] uppercase tracking-wide" style={{ fontSize: 'clamp(10px, 1.8vw, 12px)', wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                          {project.category}
                        </span>
                        <span className="text-xs text-gray-500" style={{ fontSize: 'clamp(10px, 1.8vw, 12px)' }}>{project.year}</span>
                      </div>
                      <h3 className="font-bold text-[#1a2332] mb-2" style={{ fontSize: 'clamp(16px, 3.5vw, 20px)', lineHeight: 1.3, wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                        {project.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4" style={{ fontSize: 'clamp(13px, 2.5vw, 14px)', lineHeight: 1.6, wordWrap: 'break-word', overflowWrap: 'break-word' }}>
                        {project.fullDescription}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-xs text-gray-500">{project.location}</span>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            project.status === 'completed'
                              ? 'bg-green-100 text-green-700'
                              : project.status === 'ongoing'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}
                        >
                          {project.status.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

