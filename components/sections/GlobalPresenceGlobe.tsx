
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const CITIES = [
  { nameEn: "Shanghai", nameCn: "上海", lat: 35, offset: 0, flag: "cn" },
  { nameEn: "Hong Kong", nameCn: "香港", lat: 20, offset: 72, flag: "hk" },
  { nameEn: "Singapore", nameCn: "新加坡", lat: -10, offset: 144, flag: "sg" }, 
  { nameEn: "Taiwan", nameCn: "台湾", lat: 25, offset: 216, flag: "tw" },
  { nameEn: "Guangzhou", nameCn: "广州", lat: 23, offset: 288, flag: "cn" }
];

const GlobalPresenceGlobe: React.FC = () => {
  const { language } = useLanguage();
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const requestRef = useRef<number | undefined>(undefined);
  const lastTimeRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const animate = (time: number) => {
    if (lastTimeRef.current !== undefined) {
      const delta = time - lastTimeRef.current;
      setRotation(prev => (prev + delta * 0.015) % 360);
    }
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const R = isMobile ? 70 : 98;
  const CENTER = 100;
  const TILT = -20; 

  const rotate2D = (x: number, y: number, cx: number, cy: number, angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const dx = x - cx;
    const dy = y - cy;
    return {
      x: cx + (dx * cos - dy * sin),
      y: cy + (dx * sin + dy * cos)
    };
  };

  const project = (lat: number, lon: number, rot: number) => {
    const latRad = (lat * Math.PI) / 180;
    const lonRad = ((lon + rot) * Math.PI) / 180;

    const x3d = R * Math.cos(latRad) * Math.sin(lonRad);
    const y3d = R * Math.sin(latRad); 
    const z3d = R * Math.cos(latRad) * Math.cos(lonRad);

    let x2d = CENTER + x3d;
    let y2d = CENTER - y3d;

    const tilted = rotate2D(x2d, y2d, CENTER, CENTER, TILT);

    return {
      x: tilted.x,
      y: tilted.y,
      z: z3d,
      visible: z3d > 0
    };
  };

  return (
    <div className="relative w-full h-full min-h-[360px] md:min-h-[400px] flex items-center justify-center overflow-visible">
      <div className="relative w-64 h-64 md:w-96 md:h-96 select-none">
        <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
          <g transform={`rotate(${TILT} ${CENTER} ${CENTER})`}>
            <ellipse cx={CENTER} cy={CENTER} rx={R} ry={30 * (R/98)} fill="none" stroke="#000000" strokeWidth="0.5" opacity="0.08" />
            <ellipse cx={CENTER} cy={CENTER} rx={R} ry={70 * (R/98)} fill="none" stroke="#000000" strokeWidth="0.5" opacity="0.08" />
            <line x1={CENTER - R} y1={CENTER} x2={CENTER + R} y2={CENTER} stroke="#000000" strokeWidth="0.5" opacity="0.08" />

            {[0, 45, 90, 135].map((offsetAngle, i) => {
               const angle = (rotation + offsetAngle) % 180;
               const widthFactor = Math.cos((angle * Math.PI) / 180);
               const rx = Math.abs(R * widthFactor);
               
               return (
                 <ellipse 
                   key={i}
                   cx={CENTER} 
                   cy={CENTER} 
                   rx={rx} 
                   ry={R} 
                   fill="none" 
                   stroke="#000000" 
                   strokeWidth="0.5" 
                   opacity="0.1" 
                 />
               );
            })}

            <circle cx={CENTER} cy={CENTER} r={R} fill="none" stroke="#000000" strokeWidth="0.8" opacity="0.15" />
          </g>
        </svg>

        <div className="absolute inset-0 pointer-events-none">
           {CITIES.map((city) => {
              const pos = project(city.lat, city.offset, rotation);
              
              let opacity = 0;
              let scale = isMobile ? 0.7 : 0.8;
              if (pos.z > -20) {
                 opacity = Math.max(0, Math.min(1, (pos.z + 20) / 60));
                 scale = (isMobile ? 0.7 : 0.8) + (opacity * 0.2);
              }

              if (opacity <= 0.05) return null; 

              const displayName = language === 'en' ? city.nameEn : city.nameCn;

              return (
                <div 
                  key={city.nameEn}
                  className="absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 will-change-transform"
                  style={{
                    left: `${(pos.x / 200) * 100}%`,
                    top: `${(pos.y / 200) * 100}%`,
                    opacity: opacity,
                    zIndex: Math.floor(pos.z),
                    transform: `translate(-50%, -50%) scale(${scale})`
                  }}
                >
                   <div className="flex items-center gap-2 md:gap-3 bg-white/90 backdrop-blur-sm pl-1.5 pr-3 md:pl-2 md:pr-4 py-1.5 md:py-2 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-gray-200/50 transition-all duration-300 pointer-events-auto">
                      <div className="w-4 h-2.5 md:w-5 md:h-3.5 rounded-[1px] overflow-hidden flex-shrink-0 relative shadow-sm border border-gray-100">
                        <img 
                          src={`https://flagcdn.com/w40/${city.flag}.png`}
                          alt={city.flag}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex flex-col justify-center">
                        <span className="text-[10px] md:text-xs font-bold text-gray-900 leading-none whitespace-nowrap tracking-wide">
                          {displayName}
                        </span>
                      </div>
                   </div>
                </div>
              );
           })}
        </div>

      </div>
    </div>
  );
};

export default GlobalPresenceGlobe;
