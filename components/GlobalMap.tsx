'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '@/components/ui/Card';

interface CountryData {
  id: string;
  name: string;
  hasPresence: boolean;
  locations?: Array<{
    city: string;
    entities: string[];
  }>;
  entities?: string[];
  isoCode: string;
}

const countryData: Record<string, CountryData> = {
  ARE: {
    id: 'uae',
    name: 'UAE',
    hasPresence: true,
    isoCode: 'ARE',
    locations: [
      {
        city: 'Abu Dhabi (Main Offices)',
        entities: ['ZHH Group Holding LLC', 'ZHH Construction LLC', 'ZHH General Trading LLC', 'ZHH Real Estates'],
      },
      {
        city: 'Dubai (Main Office & Showroom)',
        entities: ['Jewelust Jewelry & Gold Bullion Trading LLC'],
      },
    ],
  },
  TUR: {
    id: 'turkey',
    name: 'Turkey',
    hasPresence: true,
    isoCode: 'TUR',
    entities: ['Jewelust Jewelry'],
  },
  MLI: {
    id: 'mali',
    name: 'Mali',
    hasPresence: true,
    isoCode: 'MLI',
    entities: ['ZHH General Trading', 'Jewelust Jewelry'],
  },
  GIN: {
    id: 'guinea',
    name: 'Guinea',
    hasPresence: true,
    isoCode: 'GIN',
    entities: ['ZHH General Trading'],
  },
  BFA: {
    id: 'burkina-faso',
    name: 'Burkina Faso',
    hasPresence: true,
    isoCode: 'BFA',
    entities: ['ZHH General Trading'],
  },
  SLE: {
    id: 'sierra-leone',
    name: 'Sierra Leone',
    hasPresence: true,
    isoCode: 'SLE',
    entities: ['ZHH General Trading'],
  },
  COG: {
    id: 'congo',
    name: 'Congo',
    hasPresence: true,
    isoCode: 'COG',
    entities: ['ZHH General Trading', 'Jewelust Jewelry'],
  },
  UGA: {
    id: 'uganda',
    name: 'Uganda',
    hasPresence: true,
    isoCode: 'UGA',
    entities: ['ZHH General Trading', 'Jewelust Jewelry'],
  },
  KEN: {
    id: 'kenya',
    name: 'Kenya',
    hasPresence: true,
    isoCode: 'KEN',
    entities: ['ZHH General Trading', 'Jewelust Jewelry'],
  },
  TZA: {
    id: 'tanzania',
    name: 'Tanzania',
    hasPresence: true,
    isoCode: 'TZA',
    entities: ['Jewelust Jewelry'],
  },
  ZMB: {
    id: 'zambia',
    name: 'Zambia',
    hasPresence: true,
    isoCode: 'ZMB',
    entities: ['Jewelust Jewelry'],
  },
  ZWE: {
    id: 'zimbabwe',
    name: 'Zimbabwe',
    hasPresence: true,
    isoCode: 'ZWE',
    entities: ['Jewelust Jewelry'],
  },
};

// ISO codes for Africa and Middle East countries
const africaMiddleEast = [
  'ARE', 'SAU', 'YEM', 'OMN', 'QAT', 'BHR', 'KWT', 'IRQ', 'IRN', 'SYR', 'LBN', 'JOR', 'ISR', 'PSE',
  'TUR', 'CYP',
  'EGY', 'LBY', 'TUN', 'DZA', 'MAR', 'SDN', 'SSD',
  'SEN', 'GMB', 'GIN', 'GNB', 'SLE', 'LBR', 'CIV', 'GHA', 'TGO', 'BEN', 'NGA', 'NER', 'MLI', 'BFA',
  'MRT',
  'CMR', 'TCD', 'CAF', 'GAB', 'COG', 'COD', 'GNQ', 'STP', 'AGO',
  'ETH', 'ERI', 'DJI', 'SOM', 'KEN', 'UGA', 'TZA', 'RWA', 'BDI', 'SSD',
  'ZAF', 'ZWE', 'ZMB', 'MWI', 'MOZ', 'BWA', 'NAM', 'LSO', 'SWZ', 'MDG', 'MUS', 'COM', 'SYC',
];

// Improved Mercator projection for Africa and Middle East
function projectPoint(lon: number, lat: number, width: number, height: number) {
  const centerLon = 30;
  const centerLat = 10;
  const scale = 400;
  
  // Convert degrees to radians
  const lonRad = (lon - centerLon) * Math.PI / 180;
  const latRad = lat * Math.PI / 180;
  
  // Mercator projection
  const x = lonRad * scale + width / 2;
  const y = -Math.log(Math.tan(Math.PI / 4 + latRad / 2)) * scale + height / 2;
  
  return [x, y];
}

function geoPath(feature: any, width: number, height: number): string {
  if (!feature || !feature.geometry) return '';
  
  const { type, coordinates } = feature.geometry;
  let path = '';
  
  const processRing = (ring: number[][]) => {
    ring.forEach((coord, i) => {
      const [x, y] = projectPoint(coord[0], coord[1], width, height);
      path += (i === 0 ? 'M' : 'L') + ` ${x.toFixed(2)},${y.toFixed(2)}`;
    });
    path += ' Z';
  };
  
  if (type === 'Polygon') {
    coordinates.forEach((ring: number[][]) => {
      processRing(ring);
    });
  } else if (type === 'MultiPolygon') {
    coordinates.forEach((polygon: number[][][]) => {
      polygon.forEach((ring: number[][]) => {
        processRing(ring);
      });
    });
  }
  
  return path;
}

export default function GlobalMap() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0, visible: false });
  const [geographies, setGeographies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Use a GeoJSON source for Africa and Middle East
    // For production, use a proper GeoJSON file or convert TopoJSON server-side
    fetch('https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson')
      .then((response) => response.json())
      .then((geojson) => {
        // Filter to show only Africa and Middle East countries
        const filtered = geojson.features.filter((feature: any) => {
          const isoCode = feature.properties.ISO_A3 || feature.properties.ISO_A3_EH || feature.properties.ISO_A2;
          return africaMiddleEast.includes(isoCode);
        });
        
        setGeographies(filtered);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading map:', error);
        // Fallback: use a simpler approach with country shapes
        setLoading(false);
      });
  }, []);

  const handleCountryHover = (isoCode: string, event: React.MouseEvent<SVGPathElement>) => {
    const country = countryData[isoCode];
    
    if (country && country.hasPresence) {
      setHoveredCountry(isoCode);
      const svg = event.currentTarget.closest('svg');
      if (svg) {
        const rect = svg.getBoundingClientRect();
        const pathRect = event.currentTarget.getBoundingClientRect();
        setTooltipPosition({
          x: pathRect.left + pathRect.width / 2 - rect.left,
          y: pathRect.top - rect.top - 10,
          visible: true,
        });
      }
    }
  };

  const handleCountryClick = (isoCode: string) => {
    const country = countryData[isoCode];
    
    if (country && country.hasPresence) {
      setSelectedCountry(selectedCountry === isoCode ? null : isoCode);
    }
  };

  const selectedCountryData = selectedCountry ? countryData[selectedCountry] : null;

  // Get fill color for a country
  const getCountryFill = (isoCode: string) => {
    const country = countryData[isoCode];
    if (!country || !country.hasPresence) {
      return '#E5E5E5';
    }
    if (hoveredCountry === isoCode) {
      return '#00A0A0'; // Darker teal on hover
    }
    return '#01B2B2'; // Brand color
  };

  // Get stroke for a country
  const getCountryStroke = (isoCode: string) => {
    const country = countryData[isoCode];
    if (!country || !country.hasPresence) {
      return '#CCCCCC';
    }
    if (hoveredCountry === isoCode || selectedCountry === isoCode) {
      return '#032D46'; // Dark outline on hover/select
    }
    return '#CCCCCC';
  };

  // Get stroke width for a country
  const getCountryStrokeWidth = (isoCode: string) => {
    if (hoveredCountry === isoCode || selectedCountry === isoCode) {
      return 2;
    }
    return 0.5;
  };

  // Get cursor style
  const getCursor = (isoCode: string) => {
    const country = countryData[isoCode];
    return country && country.hasPresence ? 'pointer' : 'default';
  };

  const mapWidth = 1000;
  const mapHeight = 800;

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      {/* SVG Map Container */}
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: 'clamp(34px, 4.3vw, 51px)',
          border: '1px solid #E5E5E5',
          boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
          position: 'relative',
        }}
      >
        {loading ? (
          <div
            style={{
              width: '100%',
              height: 'clamp(340px, 42.5vw, 510px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: '"Montserrat", sans-serif',
              fontSize: 'clamp(16px, 1.8vw, 18px)',
              color: '#666666',
            }}
          >
            Loading map...
          </div>
        ) : (
          <svg
            viewBox={`0 0 ${mapWidth} ${mapHeight}`}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
            onMouseLeave={() => {
              setHoveredCountry(null);
              setTooltipPosition({ x: 0, y: 0, visible: false });
            }}
          >
            {geographies.map((geo, index) => {
              const isoCode = geo.properties?.ISO_A3 || geo.properties?.ISO_A3_EH || geo.properties?.ISO_A2;
              if (!isoCode) return null;
              
              const pathData = geoPath(geo, mapWidth, mapHeight);
              
              if (!pathData) return null;
              
              return (
                <path
                  key={index}
                  d={pathData}
                  fill={getCountryFill(isoCode)}
                  stroke={getCountryStroke(isoCode)}
                  strokeWidth={getCountryStrokeWidth(isoCode)}
                  style={{
                    cursor: getCursor(isoCode),
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => handleCountryHover(isoCode, e)}
                  onClick={() => handleCountryClick(isoCode)}
                />
              );
            })}
          </svg>
        )}

        {/* Tooltip */}
        {hoveredCountry && countryData[hoveredCountry] && tooltipPosition.visible && (
          <div
            style={{
              position: 'absolute',
              left: `${tooltipPosition.x}px`,
              top: `${tooltipPosition.y}px`,
              transform: 'translate(-50%, -100%)',
              background: '#032D46',
              color: '#FFFFFF',
              padding: '8px 16px',
              borderRadius: '8px',
              fontFamily: '"Montserrat", sans-serif',
              fontSize: '14px',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              pointerEvents: 'none',
              zIndex: 1000,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
          >
            {countryData[hoveredCountry].name}
          </div>
        )}
      </div>

      {/* Country Details Card */}
      <AnimatePresence>
        {selectedCountryData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{
              marginTop: 'clamp(34px, 4.3vw, 51px)',
              width: '100%',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Card className="p-8">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 'clamp(20px, 2.6vw, 27px)',
                }}
              >
                <h3
                  style={{
                    fontFamily: '"Montserrat", sans-serif',
                    fontSize: 'clamp(20px, 2.6vw, 27px)',
                    fontWeight: 700,
                    color: '#032D46',
                    margin: 0,
                  }}
                >
                  {selectedCountryData.name}
                </h3>
                <button
                  onClick={() => setSelectedCountry(null)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#666666',
                    transition: 'color 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#032D46';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#666666';
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              {selectedCountryData.locations ? (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(24px, 3vw, 32px)' }}>
                  {selectedCountryData.locations.map((location, index) => (
                    <div key={index}>
                      <h4
                        style={{
                          fontFamily: '"Montserrat", sans-serif',
                          fontSize: 'clamp(18px, 2vw, 22px)',
                          fontWeight: 600,
                          color: '#01B2B2',
                          marginBottom: 'clamp(12px, 1.5vw, 16px)',
                        }}
                      >
                        {location.city}:
                      </h4>
                      <ul
                        style={{
                          listStyle: 'none',
                          padding: 0,
                          margin: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 'clamp(7px, 0.9vw, 10px)',
                        }}
                      >
                        {location.entities.map((entity, eIdx) => (
                          <li
                            key={eIdx}
                            style={{
                              fontFamily: '"Montserrat", sans-serif',
                              fontSize: 'clamp(16px, 1.8vw, 18px)',
                              lineHeight: 1.6,
                              color: '#333333',
                              paddingLeft: 'clamp(24px, 3vw, 32px)',
                              position: 'relative',
                            }}
                          >
                            <span
                              style={{
                                position: 'absolute',
                                left: 0,
                                top: '0.6em',
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                background: '#01B2B2',
                              }}
                            />
                            {entity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : selectedCountryData.entities ? (
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'clamp(10px, 1.3vw, 14px)',
                  }}
                >
                  {selectedCountryData.entities.map((entity, eIdx) => (
                    <li
                      key={eIdx}
                      style={{
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: 'clamp(16px, 1.8vw, 18px)',
                        lineHeight: 1.6,
                        color: '#333333',
                        paddingLeft: 'clamp(24px, 3vw, 32px)',
                        position: 'relative',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '0.6em',
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          background: '#01B2B2',
                        }}
                      />
                      {entity}
                    </li>
                  ))}
                </ul>
              ) : null}
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
