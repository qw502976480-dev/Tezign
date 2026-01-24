
import React, { useMemo } from 'react';
import { ICONS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';

const RESOURCE_THEMES = [
  {
    bg: 'bg-[#FFCF52]', 
    textColor: 'text-white',
    accentColor: 'stroke-white',
    pattern: (
      <svg viewBox="0 0 400 500" className="w-full h-full">
        {[
          "M 200 450 C 200 200, 50 250, 0 220",
          "M 200 450 C 200 250, 80 280, 0 260",
          "M 200 450 C 200 300, 120 310, 0 300",
          "M 200 450 C 200 200, 350 250, 400 220",
          "M 200 450 C 200 250, 320 280, 400 260",
          "M 200 450 C 200 300, 280 310, 400 300",
          "M 200 450 Q 200 150 200 120"
        ].map((d, i) => (
          <path 
            key={i} 
            d={d} 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.8" 
            className="transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom opacity-30 group-hover:opacity-100 group-hover:scale-y-110" 
            style={{ transitionDelay: `${i * 50}ms` }}
          />
        ))}
      </svg>
    )
  },
  {
    bg: 'bg-[#5B3AFF]', 
    textColor: 'text-white',
    accentColor: 'stroke-white',
    pattern: (
      <svg viewBox="0 0 400 500" className="w-full h-full">
        <g className="origin-center transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 group-hover:rotate-6">
          <line x1="50" y1="150" x2="350" y2="350" stroke="currentColor" strokeWidth="0.6" className="opacity-30 group-hover:opacity-100 transition-opacity duration-700" />
          <line x1="350" y1="150" x2="50" y2="350" stroke="currentColor" strokeWidth="0.6" className="opacity-30 group-hover:opacity-100 transition-opacity duration-700" />
          <path d="M 170 150 Q 200 250 230 150" fill="none" stroke="currentColor" strokeWidth="0.6" className="opacity-30 group-hover:opacity-100 transition-opacity duration-700" />
          <path d="M 170 350 Q 200 250 230 350" fill="none" stroke="currentColor" strokeWidth="0.6" className="opacity-30 group-hover:opacity-100 transition-opacity duration-700" />
          <path d="M 185 140 L 185 360 M 215 140 L 215 360" stroke="currentColor" strokeWidth="0.4" className="opacity-20 group-hover:opacity-80 transition-opacity duration-700" />
        </g>
      </svg>
    )
  },
  {
    bg: 'bg-[#FF5BB3]',
    textColor: 'text-white',
    accentColor: 'stroke-white',
    pattern: (
      <svg viewBox="0 0 400 500" className="w-full h-full">
        <g className="origin-center transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-125">
          {[
            { x1: 200, y1: 100, x2: 200, y2: 400 },
            { x1: 50, y1: 250, x2: 350, y2: 250 },
            { x1: 100, y1: 150, x2: 300, y2: 350 },
            { x1: 300, y1: 150, x2: 100, y2: 350 },
            { x1: 50, y1: 350, x2: 350, y2: 150 },
            { x1: 50, y1: 150, x2: 350, y2: 350 }
          ].map((line, i) => (
            <line 
              key={i}
              {...line}
              stroke="currentColor" 
              strokeWidth="0.5" 
              className="opacity-30 group-hover:opacity-100 transition-opacity duration-700"
            />
          ))}
        </g>
      </svg>
    )
  },
  {
    bg: 'bg-[#10B981]',
    textColor: 'text-white',
    accentColor: 'stroke-white',
    pattern: (
      <svg viewBox="0 0 400 500" className="w-full h-full">
        <g className="origin-center">
          {[45, 90, 135].map((r, i) => (
            <circle 
              key={r}
              cx="200" cy="250" r={r} 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="0.8" 
              className={`opacity-25 group-hover:opacity-100 transition-all duration-1000 ease-out origin-center group-hover:scale-110`}
              style={{ transitionDelay: `${i * 100}ms` }}
            />
          ))}
          <line x1="200" y1="80" x2="200" y2="420" stroke="currentColor" strokeWidth="0.4" className="opacity-20 group-hover:opacity-60 transition-opacity duration-700" />
          <line x1="50" y1="250" x2="350" y2="250" stroke="currentColor" strokeWidth="0.4" className="opacity-20 group-hover:opacity-60 transition-opacity duration-700" />
        </g>
      </svg>
    )
  }
];

interface ResourcesSectionProps {
  onNavigate?: (page: any, id?: string) => void;
}

const ResourcesSection: React.FC<ResourcesSectionProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  
  const cardKeys = ['lab', 'fund', 'ecosystem', 'whitepapers'];
  
  const items = useMemo(() => {
    // Access content safely via the t function
    const itemsData = t('home.resources.items');
    
    // Fallback if data is missing or structure is incorrect
    if (!itemsData) return [];

    return cardKeys.map(key => {
      const data = itemsData[key];
      let navigateId = `scroll:${key}`;
      let navigatePage = 'resources';

      if (key === 'whitepapers') {
        navigatePage = 'industryInsights';
        navigateId = '';
      }

      return {
        title: data?.title || '',
        desc: data?.body || '',
        page: navigatePage,
        id: navigateId 
      };
    });
  }, [language, t]);

  return (
    <section className="py-24 md:py-32 max-w-[1440px] mx-auto px-6 border-t border-gray-100">
      <header className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-10 gap-6 md:gap-0">
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 transition-all duration-500">
            {t('sections.cobuilding')}
          </h2>
        </div>

        <div className="flex">
          <button 
            onClick={() => onNavigate && onNavigate('resources')}
            className="flex items-center space-x-3 text-[11px] font-bold text-gray-900 border border-gray-100 px-8 py-3 rounded-full hover:bg-gray-50 transition-all uppercase tracking-widest whitespace-nowrap shadow-sm"
          >
            <span>{t('common.viewAll')}</span>
            <ICONS.ArrowRight />
          </button>
        </div>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {items.slice(0, 4).map((item, i) => {
          const theme = RESOURCE_THEMES[i % RESOURCE_THEMES.length];
          const numberLabel = `0${i + 1}`;
          
          return (
            <div 
              key={i} 
              onClick={() => onNavigate && onNavigate(item.page, item.id)}
              className={`group cursor-pointer relative flex flex-col items-center justify-between aspect-[3/3.8] md:aspect-[3/4.2] ${theme.bg} rounded-[32px] overflow-hidden transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]`}
            >
              <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-1000 group-hover:scale-105 pointer-events-none ${theme.accentColor}`}>
                {theme.pattern}
              </div>

              <div className="relative z-10 w-full p-8 md:p-10 pt-10 md:pt-14 text-center">
                <div className={`flex flex-col items-center space-y-1 transition-all duration-500 group-hover:scale-[1.02]`}>
                  <h3 className={`text-2xl md:text-3xl font-medium leading-none ${theme.textColor}`}>
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="relative z-10 w-full p-8 md:p-10 pb-10 md:pb-12 text-center flex flex-col items-center">
                <div className={`text-[12px] font-black uppercase tracking-[0.6em] ${theme.textColor} transition-all duration-300 opacity-60 group-hover:opacity-100 group-hover:tracking-[0.8em]`}>
                  {numberLabel}
                </div>
              </div>

              <div className={`absolute bottom-6 right-6 ${theme.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0`}>
                 <ICONS.ArrowRight />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ResourcesSection;
