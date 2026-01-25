'use client';

import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

type PresenceType = 'headquarters' | 'trading' | 'jewelust';

interface LocationData {
  id: string;
  name: string;
  isoCode: string;
  coordinates: [number, number]; // [lng, lat] for react-simple-maps
  locations?: Array<{
    city: string;
    entities: string[];
  }>;
  entities?: string[];
  type: PresenceType[];
}

// بيانات الدول والمواقع - Array واحدة قابلة للتعديل
export const globalPresenceData: LocationData[] = [
  {
    id: 'uae',
    name: 'United Arab Emirates',
    isoCode: 'ARE',
    coordinates: [54.3773, 24.4539],
    locations: [
      {
        city: 'Abu Dhabi',
        entities: ['ZHH Group Holding LLC', 'ZHH Construction LLC', 'ZHH General Trading LLC', 'ZHH Real Estates'],
      },
      {
        city: 'Dubai',
        entities: ['Jewelust Jewelry & Gold Bullion Trading LLC'],
      },
    ],
    type: ['headquarters', 'trading', 'jewelust'],
  },
  {
    id: 'turkey',
    name: 'Turkey',
    isoCode: 'TUR',
    coordinates: [32.8597, 39.9334],
    entities: ['Jewelust Jewelry'],
    type: ['jewelust'],
  },
  {
    id: 'mali',
    name: 'Mali',
    isoCode: 'MLI',
    coordinates: [-3.9962, 17.5707],
    entities: ['ZHH General Trading', 'Jewelust Jewelry'],
    type: ['trading', 'jewelust'],
  },
  {
    id: 'guinea',
    name: 'Guinea',
    isoCode: 'GIN',
    coordinates: [-9.6966, 9.9456],
    entities: ['ZHH General Trading'],
    type: ['trading'],
  },
  {
    id: 'burkina-faso',
    name: 'Burkina Faso',
    isoCode: 'BFA',
    coordinates: [-1.5616, 12.2383],
    entities: ['ZHH General Trading'],
    type: ['trading'],
  },
  {
    id: 'sierra-leone',
    name: 'Sierra Leone',
    isoCode: 'SLE',
    coordinates: [-11.7799, 8.4606],
    entities: ['ZHH General Trading'],
    type: ['trading'],
  },
  {
    id: 'congo',
    name: 'Congo',
    isoCode: 'COG',
    coordinates: [15.2429, -4.2634],
    entities: ['ZHH General Trading', 'Jewelust Jewelry'],
    type: ['trading', 'jewelust'],
  },
  {
    id: 'uganda',
    name: 'Uganda',
    isoCode: 'UGA',
    coordinates: [32.2903, 1.3733],
    entities: ['ZHH General Trading', 'Jewelust Jewelry'],
    type: ['trading', 'jewelust'],
  },
  {
    id: 'kenya',
    name: 'Kenya',
    isoCode: 'KEN',
    coordinates: [36.8219, -1.2921],
    entities: ['ZHH General Trading', 'Jewelust Jewelry'],
    type: ['trading', 'jewelust'],
  },
  {
    id: 'tanzania',
    name: 'Tanzania',
    isoCode: 'TZA',
    coordinates: [34.8888, -6.3690],
    entities: ['Jewelust Jewelry'],
    type: ['jewelust'],
  },
  {
    id: 'zambia',
    name: 'Zambia',
    isoCode: 'ZMB',
    coordinates: [27.8493, -13.1339],
    entities: ['Jewelust Jewelry'],
    type: ['jewelust'],
  },
  {
    id: 'zimbabwe',
    name: 'Zimbabwe',
    isoCode: 'ZWE',
    coordinates: [29.1549, -19.0154],
    entities: ['Jewelust Jewelry'],
    type: ['jewelust'],
  },
];

// World TopoJSON URL
const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

// Get ISO codes for highlighting
const presenceIsoCodes = globalPresenceData.map(d => d.isoCode);

// Pin Marker Component
const PinMarker = ({ 
  color, 
  isHovered, 
  isSelected,
  isHQ = false,
  label,
}: { 
  color: string; 
  isHovered: boolean; 
  isSelected: boolean;
  isHQ?: boolean;
  label?: string;
}) => {
  const scale = isHovered || isSelected ? 1.2 : 1;
  const pinHeight = isHQ ? 28 : 22;
  const pinWidth = isHQ ? 18 : 14;
  
  return (
    <g transform={`translate(${-pinWidth / 2}, ${-pinHeight}) scale(${scale})`} style={{ transition: 'transform 0.2s ease' }}>
      {/* Pin Shadow */}
      <ellipse
        cx={pinWidth / 2}
        cy={pinHeight + 2}
        rx={pinWidth / 3}
        ry={3}
        fill="rgba(0,0,0,0.2)"
      />
      
      {/* Pin Body */}
      <path
        d={`M${pinWidth / 2} ${pinHeight} 
            C${pinWidth / 2} ${pinHeight} 0 ${pinHeight * 0.6} 0 ${pinWidth / 2 + 2}
            C0 2 ${pinWidth / 2 - 2} 0 ${pinWidth / 2} 0
            C${pinWidth / 2 + 2} 0 ${pinWidth} 2 ${pinWidth} ${pinWidth / 2 + 2}
            C${pinWidth} ${pinHeight * 0.6} ${pinWidth / 2} ${pinHeight} ${pinWidth / 2} ${pinHeight}Z`}
        fill={color}
        stroke="#FFFFFF"
        strokeWidth={1.5}
        style={{
          filter: isHovered || isSelected 
            ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.35))' 
            : 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))',
        }}
      />
      
      {/* Inner Circle */}
      <circle
        cx={pinWidth / 2}
        cy={pinWidth / 2 + 2}
        r={pinWidth / 4}
        fill="#FFFFFF"
        opacity={0.9}
      />
      
      {/* Label */}
      {label && (
        <text
          x={pinWidth / 2}
          y={-4}
          textAnchor="middle"
          style={{
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            fontSize: '9px',
            fontWeight: 700,
            fill: color,
          }}
        >
          {label}
        </text>
      )}
    </g>
  );
};

function GlobalMap() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; data: LocationData | null; activityType?: string }>({ x: 0, y: 0, data: null });
  const [isMobile, setIsMobile] = useState(false);
  const [legendOpen, setLegendOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMarkerHover = (location: LocationData, event: React.MouseEvent, activityType?: string) => {
    if (isMobile) return;
    setHoveredLocation(location.id + (activityType || ''));
    setTooltip({
      x: event.clientX,
      y: event.clientY,
      data: location,
      activityType,
    });
  };

  const handleMarkerLeave = () => {
    setHoveredLocation(null);
    setTooltip({ x: 0, y: 0, data: null });
  };

  const handleMarkerClick = (location: LocationData) => {
    setSelectedLocation(selectedLocation === location.id ? null : location.id);
  };

  const selectedData = globalPresenceData.find(l => l.id === selectedLocation);

  // Generate markers - split into multiple for countries with multiple activities
  const generateMarkers = () => {
    const markers: Array<{
      location: LocationData;
      coordinates: [number, number];
      color: string;
      activityType: string;
      isHQ: boolean;
      label?: string;
    }> = [];

    globalPresenceData.forEach(location => {
      const hasTrading = location.type.includes('trading');
      const hasJewelust = location.type.includes('jewelust');
      const isHQ = location.type.includes('headquarters');

      if (isHQ) {
        // Headquarters gets a single special marker
        markers.push({
          location,
          coordinates: location.coordinates,
          color: '#032D46',
          activityType: 'headquarters',
          isHQ: true,
          label: 'HQ',
        });
      } else if (hasTrading && hasJewelust) {
        // Country with both activities - create two markers side by side
        const offset = 1.5; // Longitude offset for separation
        markers.push({
          location,
          coordinates: [location.coordinates[0] - offset, location.coordinates[1]],
          color: '#01B2B2',
          activityType: 'trading',
          isHQ: false,
        });
        markers.push({
          location,
          coordinates: [location.coordinates[0] + offset, location.coordinates[1]],
          color: '#D4AF37',
          activityType: 'jewelust',
          isHQ: false,
        });
      } else if (hasTrading) {
        markers.push({
          location,
          coordinates: location.coordinates,
          color: '#01B2B2',
          activityType: 'trading',
          isHQ: false,
        });
      } else if (hasJewelust) {
        markers.push({
          location,
          coordinates: location.coordinates,
          color: '#D4AF37',
          activityType: 'jewelust',
          isHQ: false,
        });
      }
    });

    return markers;
  };

  const allMarkers = generateMarkers();

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* Map Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          background: 'linear-gradient(180deg, #F0F4F8 0%, #E8EEF4 100%)',
          borderRadius: '20px',
          padding: 'clamp(8px, 2vw, 16px)',
          border: '1px solid #D1D9E6',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            // Focus on Africa and Middle East
            scale: 380,
            center: [25, 5], // Center between Africa and Middle East
          }}
          style={{
            width: '100%',
            height: 'auto',
          }}
        >
          <Geographies geography={geoUrl}>
            {({ geographies }: { geographies: Array<{ rsmKey: string; properties?: { ISO_A3?: string }; id?: string }> }) =>
              geographies.map((geo: { rsmKey: string; properties?: { ISO_A3?: string }; id?: string }) => {
                const isoCode = geo.properties?.ISO_A3 || geo.id;
                const hasPresence = presenceIsoCodes.includes(isoCode || '');
                
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={hasPresence ? 'rgba(1, 178, 178, 0.25)' : '#E5E9EF'}
                    stroke="#FFFFFF"
                    strokeWidth={0.5}
                    style={{
                      default: {
                        outline: 'none',
                        transition: 'all 0.3s ease',
                      },
                      hover: {
                        fill: hasPresence ? 'rgba(1, 178, 178, 0.4)' : '#D8DEE6',
                        outline: 'none',
                      },
                      pressed: {
                        fill: hasPresence ? 'rgba(1, 178, 178, 0.5)' : '#D8DEE6',
                        outline: 'none',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Pin Markers */}
          {allMarkers.map((marker, index) => {
            const markerId = marker.location.id + marker.activityType;
            const isHovered = hoveredLocation === markerId;
            const isSelected = selectedLocation === marker.location.id;

            return (
              <Marker
                key={`${marker.location.id}-${marker.activityType}-${index}`}
                coordinates={marker.coordinates}
                onMouseEnter={(e: React.MouseEvent) => handleMarkerHover(marker.location, e, marker.activityType)}
                onMouseLeave={handleMarkerLeave}
                onClick={() => handleMarkerClick(marker.location)}
              >
                <PinMarker
                  color={marker.color}
                  isHovered={isHovered}
                  isSelected={isSelected}
                  isHQ={marker.isHQ}
                  label={marker.label}
                />
              </Marker>
            );
          })}
        </ComposableMap>

        {/* Legend - Desktop: Full | Mobile: Toggle Button */}
        {!isMobile ? (
          // Desktop Legend
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              position: 'absolute',
              bottom: 'clamp(16px, 3vw, 24px)',
              right: 'clamp(16px, 3vw, 24px)',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              padding: 'clamp(14px, 2vw, 18px)',
              borderRadius: '14px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.12)',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: 'clamp(11px, 1.2vw, 13px)',
              zIndex: 10,
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: '12px', color: '#032D46', fontSize: '14px' }}>Legend</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="16" height="22" viewBox="0 0 16 22">
                  <path
                    d="M8 22 C8 22 0 14 0 8 C0 3.58 3.58 0 8 0 C12.42 0 16 3.58 16 8 C16 14 8 22 8 22Z"
                    fill="#032D46"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <circle cx="8" cy="7" r="3" fill="#fff" />
                </svg>
                <span style={{ color: '#333', fontWeight: 500 }}>Headquarters (UAE)</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="14" height="18" viewBox="0 0 14 18">
                  <path
                    d="M7 18 C7 18 0 12 0 7 C0 3.13 3.13 0 7 0 C10.87 0 14 3.13 14 7 C14 12 7 18 7 18Z"
                    fill="#01B2B2"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <circle cx="7" cy="6" r="2.5" fill="#fff" />
                </svg>
                <span style={{ color: '#333', fontWeight: 500 }}>General Trading</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <svg width="14" height="18" viewBox="0 0 14 18">
                  <path
                    d="M7 18 C7 18 0 12 0 7 C0 3.13 3.13 0 7 0 C10.87 0 14 3.13 14 7 C14 12 7 18 7 18Z"
                    fill="#D4AF37"
                    stroke="#fff"
                    strokeWidth="1"
                  />
                  <circle cx="7" cy="6" r="2.5" fill="#fff" />
                </svg>
                <span style={{ color: '#333', fontWeight: 500 }}>Jewelust</span>
              </div>
            </div>
          </motion.div>
        ) : (
          // Mobile Legend Toggle Button
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setLegendOpen(true)}
            style={{
              position: 'absolute',
              bottom: '16px',
              right: '16px',
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(8px)',
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#032D46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/>
              <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/>
              <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/>
              <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/>
              <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
              <path d="M10 9.5C10 10.33 9.33 11 8.5 11h-5C2.67 11 2 10.33 2 9.5S2.67 8 3.5 8h5c.83 0 1.5.67 1.5 1.5z"/>
              <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/>
            </svg>
          </motion.button>
        )}
      </div>

      {/* Mobile Legend Bottom Sheet */}
      <AnimatePresence>
        {legendOpen && isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLegendOpen(false)}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.4)',
                zIndex: 100,
              }}
            />
            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                background: '#FFFFFF',
                borderRadius: '24px 24px 0 0',
                padding: '24px',
                paddingBottom: '40px',
                boxShadow: '0 -8px 40px rgba(0, 0, 0, 0.15)',
                zIndex: 101,
              }}
            >
              {/* Handle */}
              <div
                style={{
                  width: '40px',
                  height: '4px',
                  background: '#D1D5DB',
                  borderRadius: '2px',
                  margin: '0 auto 20px',
                }}
              />
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-inter), Inter, sans-serif',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: '#032D46',
                    margin: 0,
                  }}
                >
                  Legend
                </h3>
                <button
                  onClick={() => setLegendOpen(false)}
                  style={{
                    background: '#F3F4F6',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
              {/* Legend Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <svg width="20" height="28" viewBox="0 0 16 22">
                    <path
                      d="M8 22 C8 22 0 14 0 8 C0 3.58 3.58 0 8 0 C12.42 0 16 3.58 16 8 C16 14 8 22 8 22Z"
                      fill="#032D46"
                      stroke="#E5E7EB"
                      strokeWidth="1"
                    />
                    <circle cx="8" cy="7" r="3" fill="#fff" />
                  </svg>
                  <span style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '15px', color: '#333', fontWeight: 500 }}>
                    Headquarters (UAE)
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <svg width="18" height="24" viewBox="0 0 14 18">
                    <path
                      d="M7 18 C7 18 0 12 0 7 C0 3.13 3.13 0 7 0 C10.87 0 14 3.13 14 7 C14 12 7 18 7 18Z"
                      fill="#01B2B2"
                      stroke="#E5E7EB"
                      strokeWidth="1"
                    />
                    <circle cx="7" cy="6" r="2.5" fill="#fff" />
                  </svg>
                  <span style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '15px', color: '#333', fontWeight: 500 }}>
                    General Trading
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <svg width="18" height="24" viewBox="0 0 14 18">
                    <path
                      d="M7 18 C7 18 0 12 0 7 C0 3.13 3.13 0 7 0 C10.87 0 14 3.13 14 7 C14 12 7 18 7 18Z"
                      fill="#D4AF37"
                      stroke="#E5E7EB"
                      strokeWidth="1"
                    />
                    <circle cx="7" cy="6" r="2.5" fill="#fff" />
                  </svg>
                  <span style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontSize: '15px', color: '#333', fontWeight: 500 }}>
                    Jewelust
                  </span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip.data && !isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'fixed',
              left: tooltip.x + 15,
              top: tooltip.y - 10,
              background: '#032D46',
              color: '#FFFFFF',
              padding: '14px 18px',
              borderRadius: '12px',
              fontFamily: 'var(--font-inter), Inter, sans-serif',
              fontSize: '13px',
              pointerEvents: 'none',
              zIndex: 9999,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
              maxWidth: '280px',
            }}
          >
            <div style={{ fontWeight: 700, fontSize: '11px', color: '#01B2B2', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              ZHH Group
            </div>
            <div style={{ fontWeight: 600, fontSize: '16px', marginBottom: '6px' }}>
              Operations in {tooltip.data.name}
            </div>
            <div style={{ opacity: 0.9, fontSize: '12px', lineHeight: 1.5 }}>
              {tooltip.activityType === 'trading' && 'General Trading'}
              {tooltip.activityType === 'jewelust' && 'Jewelust Jewelry'}
              {tooltip.activityType === 'headquarters' && 'Corporate Headquarters'}
              {!tooltip.activityType && (tooltip.data.entities?.join(' • ') || '')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Selected Location Details Card */}
      <AnimatePresence>
        {selectedData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{
              marginTop: 'clamp(24px, 3vw, 32px)',
              width: '100%',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <div
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                padding: 'clamp(24px, 3vw, 32px)',
                boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
                border: '1px solid #E5E7EB',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 'clamp(16px, 2vw, 24px)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <svg width="20" height="26" viewBox="0 0 16 22">
                    <path
                      d="M8 22 C8 22 0 14 0 8 C0 3.58 3.58 0 8 0 C12.42 0 16 3.58 16 8 C16 14 8 22 8 22Z"
                      fill={selectedData.type.includes('headquarters') ? '#032D46' : '#01B2B2'}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                    <circle cx="8" cy="7" r="3" fill="#fff" />
                  </svg>
                  <h3
                    style={{
                      fontFamily: 'var(--font-inter), Inter, sans-serif',
                      fontSize: 'clamp(20px, 2.5vw, 26px)',
                      fontWeight: 700,
                      color: '#032D46',
                      margin: 0,
                    }}
                  >
                    {selectedData.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedLocation(null)}
                  style={{
                    background: '#F3F4F6',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666666',
                    transition: 'all 0.2s ease',
                    borderRadius: '10px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#032D46';
                    e.currentTarget.style.background = '#E5E7EB';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#666666';
                    e.currentTarget.style.background = '#F3F4F6';
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {/* Activity Types Badges */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
                {selectedData.type.includes('headquarters') && (
                  <span style={{
                    background: '#032D46',
                    color: '#fff',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}>
                    🏢 Headquarters
                  </span>
                )}
                {selectedData.type.includes('trading') && (
                  <span style={{
                    background: '#01B2B2',
                    color: '#fff',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}>
                    📦 General Trading
                  </span>
                )}
                {selectedData.type.includes('jewelust') && (
                  <span style={{
                    background: '#D4AF37',
                    color: '#fff',
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 600,
                  }}>
                    💎 Jewelust
                  </span>
                )}
              </div>

              {selectedData.locations ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(20px, 2.5vw, 28px)' }}>
                  {selectedData.locations.map((location, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h4
                        style={{
                          fontFamily: 'var(--font-inter), Inter, sans-serif',
                          fontSize: 'clamp(16px, 1.8vw, 18px)',
                          fontWeight: 600,
                          color: '#01B2B2',
                          marginBottom: 'clamp(10px, 1.2vw, 14px)',
                        }}
                      >
                        📍 {location.city}
                      </h4>
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                        }}
                      >
                        {location.entities.map((entity, eIdx) => (
                          <motion.li
                            key={eIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + eIdx * 0.05 }}
                            style={{
                              fontFamily: 'var(--font-inter), Inter, sans-serif',
                              fontSize: 'clamp(14px, 1.5vw, 16px)',
                              lineHeight: 1.6,
                              color: '#333333',
                              paddingLeft: '24px',
                              position: 'relative',
                            }}
                          >
                            <span
                              style={{
                                position: 'absolute',
                                left: 0,
                                top: '0.55em',
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: '#01B2B2',
                              }}
                            />
                            {entity}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              ) : selectedData.entities ? (
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  {selectedData.entities.map((entity, eIdx) => (
                    <motion.li
                      key={eIdx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: eIdx * 0.1 }}
                      style={{
                        fontFamily: 'var(--font-inter), Inter, sans-serif',
                        fontSize: 'clamp(14px, 1.5vw, 16px)',
                        lineHeight: 1.6,
                        color: '#333333',
                        paddingLeft: '24px',
                        position: 'relative',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '0.55em',
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: entity.includes('Jewelust') ? '#D4AF37' : '#01B2B2',
                        }}
                      />
                      {entity}
                    </motion.li>
                  ))}
                </ul>
              ) : null}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Instructions */}
      {isMobile && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{
            textAlign: 'center',
            marginTop: '16px',
            fontFamily: 'var(--font-inter), Inter, sans-serif',
            fontSize: '13px',
            color: '#666666',
          }}
        >
          Tap on a pin to view location details
        </motion.p>
      )}

      {/* CSS Styles */}
      <style jsx global>{`
        .rsm-marker {
          cursor: pointer;
        }
        .rsm-geography {
          outline: none;
        }
      `}</style>
    </div>
  );
}

export default memo(GlobalMap);
