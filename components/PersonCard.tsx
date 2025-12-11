'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface Person {
  id: string;
  name: string;
  title: string;
  photo?: string;
  hasPhoto: boolean;
  gender?: 'male' | 'female';
}

interface PersonCardProps {
  person: Person;
}

export default function PersonCard({ person }: PersonCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Silhouette SVG - Clean professional design
  const maleSilhouette = (
    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
      <circle cx="50" cy="30" r="12" fill="currentColor" opacity="0.5" />
      <path
        d="M 30 50 Q 30 40 50 40 Q 70 40 70 50 L 70 90 L 30 90 Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );

  const femaleSilhouette = (
    <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }}>
      <circle cx="50" cy="30" r="12" fill="currentColor" opacity="0.5" />
      <path
        d="M 30 50 Q 30 40 50 40 Q 70 40 70 50 L 70 90 L 30 90 Z"
        fill="currentColor"
        opacity="0.5"
      />
      <ellipse cx="50" cy="55" rx="20" ry="8" fill="currentColor" opacity="0.5" />
    </svg>
  );

  const showPhoto = person.hasPhoto && person.photo && !imageError;

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: isHovered
          ? '0 8px 32px rgba(1, 178, 178, 0.2)'
          : '0 4px 20px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        minHeight: 'clamp(119px, 13.6vw, 153px)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* Left Section: Square Photo Container */}
      <div
        style={{
          width: 'clamp(119px, 15.3vw, 153px)',
          minWidth: 'clamp(119px, 15.3vw, 153px)',
          background: '#333B4D',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {showPhoto ? (
          <img
            src={person.photo}
            alt={person.name}
            onError={() => setImageError(true)}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div
            style={{
              width: 'clamp(80px, 10vw, 100px)',
              height: 'clamp(80px, 10vw, 100px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255, 255, 255, 0.6)',
            }}
          >
            {person.gender === 'female' ? femaleSilhouette : maleSilhouette}
          </div>
        )}
      </div>

      {/* Right Section: Name and Title */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'clamp(20px, 2.5vw, 28px) clamp(24px, 3vw, 32px)',
          background: '#FFFFFF',
          gap: 'clamp(6px, 0.8vw, 8px)',
        }}
      >
        {/* Name - Bold, Dark, Top */}
        <h3
          className="body-regular-unified"
          style={{
            fontWeight: 700,
            color: 'var(--color-primary-dark)',
            lineHeight: 1.3,
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {person.name}
        </h3>
        
        {/* Title - Teal, Smaller, Below */}
        <p
          className="body-small-unified text-teal"
          style={{
            fontWeight: 500,
            lineHeight: 1.4,
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '0.3px',
          }}
        >
          {person.title}
        </p>
      </div>
    </motion.div>
  );
}
