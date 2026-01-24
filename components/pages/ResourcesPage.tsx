
import React from 'react';
import { ICONS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import LogoMarquee from '../ui/LogoMarquee';
import { StaggerWrapper, StaggerItem } from '../ui/StaggerWrapper';

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
          <path key={i} d={d} fill="none" stroke="currentColor" strokeWidth="0.8" className="transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] origin-bottom opacity-30 group-hover:opacity-100 group-hover:scale-y-110" style={{ transitionDelay: `${i * 50}ms` }} />
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
            <line key={i} {...line} stroke="currentColor" strokeWidth="0.5" className="opacity-30 group-hover:opacity-100 transition-opacity duration-700"/>
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
            <circle key={r} cx="200" cy="250" r={r} fill="none" stroke="currentColor" strokeWidth="0.8" className={`opacity-25 group-hover:opacity-100 transition-all duration-1000 ease-out origin-center group-hover:scale-110`} style={{ transitionDelay: `${i * 100}ms` }} />
          ))}
          <line x1="200" y1="80" x2="200" y2="420" stroke="currentColor" strokeWidth="0.4" className="opacity-20 group-hover:opacity-60 transition-opacity duration-700" />
          <line x1="50" y1="250" x2="350" y2="250" stroke="currentColor" strokeWidth="0.4" className="opacity-20 group-hover:opacity-60 transition-opacity duration-700" />
        </g>
      </svg>
    )
  }
];

const ResourceCard: React.FC<{ item: { cardTitleZh: string; cardTitleEn: string; eyebrow: string; title: string; desc: string }, theme: any, numberLabel: string }> = ({ item, theme, numberLabel }) => {
  const { language } = useLanguage();
  return (
    <div 
      className={`group relative flex flex-col items-center justify-between aspect-[3/3.8] md:aspect-[3/4.2] ${theme.bg} rounded-[32px] overflow-hidden transition-all duration-700 hover:scale-[1.01] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] outline-none ring-0 focus:outline-none focus:ring-0 active:scale-[0.98]`}
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <div className={`absolute inset-0 flex items-center justify-center transition-transform duration-1000 group-hover:scale-105 pointer-events-none ${theme.accentColor}`}>
        {theme.pattern}
      </div>
      <div className="relative z-10 w-full p-8 md:p-10 pt-10 md:pt-14 text-center">
        <div className={`flex flex-col items-center transition-all duration-500 group-hover:scale-[1.02]`}>
          {language === 'zh' ? (
            <>
              <h3 className={`text-2xl md:text-3xl font-medium leading-tight ${theme.textColor} mb-2`}>{item.cardTitleZh}</h3>
              <span className={`text-[12px] md:text-sm font-bold uppercase tracking-[0.2em] ${theme.textColor} opacity-70`}>{item.cardTitleEn}</span>
            </>
          ) : (
            <h3 className={`text-2xl md:text-3xl font-medium leading-[1.2] ${theme.textColor}`}>{item.cardTitleEn}</h3>
          )}
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
};

const SECTION_IDS = ['consulting', 'creative', 'research', 'whitepaper'];

const EXTERNAL_LINKS = [
  'https://fullstack.tezign.com/', 
  'https://creativesku.com/',
  null,
  null
];

const ResourcesPage: React.FC<{ onNavigate: (page: 'home' | 'resources', id?: string) => void }> = ({ onNavigate }) => {
    const { t } = useLanguage();
    const items = React.useMemo(() => Array.isArray(t('resource_items')) ? t('resource_items') : [], [t]);

    return (
        <div className="bg-white min-h-screen animate-in fade-in duration-500">
            <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 bg-white">
                <div className="relative max-w-5xl mx-auto text-center z-10">
                    <span className="block text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-8">
                        {t('resources_page.eyebrow')}
                    </span>
                    <h1 className="text-4xl md:text-[52px] font-medium tracking-tighter text-black mb-8 leading-[1.15] whitespace-pre-line">
                        {t('resources_page.title')}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
                        {t('resources_page.subtitle')}
                    </p>
                </div>
            </section>

            <section className="py-24 md:py-32 bg-white">
                <StaggerWrapper className="max-w-7xl mx-auto px-6 space-y-24 md:space-y-48">
                    {items.map((item: any, index: number) => {
                        const externalLink = EXTERNAL_LINKS[index];
                        const isInsights = index === 3;
                        
                        return (
                            <StaggerItem 
                                key={index} 
                                id={SECTION_IDS[index]}
                                className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center`}
                            >
                                <div className={`flex flex-col justify-center text-left ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                                    <div className="mb-4">
                                      <span className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.25em] pb-1">
                                        {item.eyebrow}
                                      </span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 mb-8 tracking-tight leading-tight">{item.title}</h2>
                                    <p className="text-gray-500 leading-relaxed max-w-md mb-10 text-sm md:text-lg whitespace-pre-line font-light">{item.desc}</p>
                                    <a 
                                      href={externalLink || "#"} 
                                      target={externalLink ? "_blank" : undefined}
                                      rel={externalLink ? "noopener noreferrer" : undefined}
                                      onClick={(e) => {
                                          if (isInsights) {
                                              e.preventDefault();
                                              onNavigate('industryInsights' as any);
                                          } else if (!externalLink) {
                                              e.preventDefault();
                                          }
                                      }}
                                      className="group flex items-center space-x-2 text-sm font-semibold text-black w-fit uppercase tracking-widest cursor-pointer"
                                    >
                                        <span>{t('common.learnMore')}</span>
                                        <ICONS.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </a>
                                </div>
                                <div 
                                  className="w-full cursor-pointer"
                                  onClick={() => isInsights && onNavigate('industryInsights' as any)} 
                                  style={{ cursor: isInsights ? 'pointer' : 'default' }}
                                >
                                    <ResourceCard item={item} theme={RESOURCE_THEMES[index % RESOURCE_THEMES.length]} numberLabel={`0${index + 1}`} />
                                </div>
                            </StaggerItem>
                        );
                    })}
                </StaggerWrapper>
            </section>

            <section className="py-24 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <p className="text-[11px] font-bold text-black uppercase tracking-[0.2em]">{t('common.trustedBy')}</p>
                </div>
                <LogoMarquee />
            </section>
        </div>
    );
};

export default ResourcesPage;
