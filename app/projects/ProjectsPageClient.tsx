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
    <div style={{ paddingTop: '80px' }}>
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
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Our Projects
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Showcasing excellence across all our divisions
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-unified bg-unified-white border-b border-gray-200" style={{ paddingTop: 'var(--content-spacing-lg)', paddingBottom: 'var(--content-spacing-lg)' }}>
        <div className="container-unified">
          <div className="flex flex-wrap justify-center gap-4">
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
      <section className="section-unified bg-unified-light">
        <div className="container-unified">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  id={project.id}
                  variants={fadeInUp}
                  layout
                >
                  <Card className="h-full overflow-hidden">
                    <div className="h-48 bg-gradient-to-br from-[#00d4aa]/20 to-[#1a2332] flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🏗️</div>
                        <p className="text-gray-600 text-sm">{project.category}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-[#00d4aa] uppercase tracking-wide">
                          {project.category}
                        </span>
                        <span className="text-xs text-gray-500">{project.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#1a2332] mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
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

