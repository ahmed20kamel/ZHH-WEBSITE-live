'use client';

import React, { ReactNode, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export default function Tabs({ tabs, defaultTab }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className="w-full">
      {/* Tab Headers */}
      <div
        className="flex flex-wrap gap-2 mb-6 border-b border-[#E5E5E5]"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'clamp(7px, 0.9vw, 10px)',
          marginBottom: 'clamp(20px, 2.6vw, 27px)',
          borderBottom: '1px solid #E5E5E5',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className="tab-button"
            style={{
              fontFamily: '"Montserrat", sans-serif',
              fontSize: 'clamp(12px, 1.4vw, 14px)',
              fontWeight: activeTab === tab.id ? 600 : 400,
              color: activeTab === tab.id ? '#01B2B2' : '#666666',
              padding: 'clamp(10px, 1.3vw, 14px) clamp(17px, 2.1vw, 20px)',
              background: 'transparent',
              border: 'none',
              borderBottom: activeTab === tab.id ? '2px solid #01B2B2' : '2px solid transparent',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              position: 'relative',
              whiteSpace: 'nowrap',
              marginBottom: '-1px'
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.color = '#01B2B2';
                e.currentTarget.style.backgroundColor = '#F0FDFF';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.id) {
                e.currentTarget.style.color = '#666666';
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{
            minHeight: '200px'
          }}
        >
          {tabs.find(tab => tab.id === activeTab)?.content}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
