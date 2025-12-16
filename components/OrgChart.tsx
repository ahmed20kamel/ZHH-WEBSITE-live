'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SubsidiariesSection from './org-chart/SubsidiariesSection';
import OrgChartSection from './org-chart/OrgChartSection';
import { premiumColors } from './org-chart/types';

// Main Component
export default function ProfessionalOrgChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.9, 1]);

  return (
    <div 
      ref={containerRef} 
      className="min-h-screen"
      style={{ backgroundColor: premiumColors.bgGray }}
    >
            <div className="relative">
        {/* Subsidiaries Section */}
        <SubsidiariesSection />

        {/* Organization Chart Section */}
        <motion.div style={{ opacity, scale }} ref={sectionRef}>
          <OrgChartSection />
        </motion.div>
      </div>
    </div>
  );
}
