
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { IndustryCase } from '../../types';
import { ICONS, GENERAL_TESTIMONIALS } from '../../constants';
import TestimonialCarousel from '../ui/TestimonialCarousel';
import LogoMarquee from '../ui/LogoMarquee';
import { StaggerWrapper, StaggerItem } from '../ui/StaggerWrapper';

interface IndustriesPageProps {
  onNavigate: (page: 'home' | 'product' | 'company' | 'industryDetail' | 'industries' | 'contact', id?: string) => void;
  initialFilter?: { type: 'industry' | 'scenario', value: string } | null;
}

const IndustriesPage: React.FC<IndustriesPageProps> = ({ onNavigate, initialFilter }) => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<{ type: 'all' | 'industry' | 'scenario', value: string }>(
    initialFilter ? { type: initialFilter.type, value: initialFilter.value } : { type: 'all', value: 'all' }
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const rawStudies = t('industry_cases');
  const allStudies = Array.isArray(rawStudies) ? (rawStudies as IndustryCase[]) : [];

  const filteredStudies = useMemo(() => {
    if (activeFilter.type === 'all') return allStudies;
    return allStudies.filter(study => study[activeFilter.type] === activeFilter.value);
  }, [allStudies, activeFilter]);

  const industries = ['consumer', 'auto', 'finance', 'tech', 'more'];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  useEffect(() => {
    checkScroll();
  }, [t, language]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = 200;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
        setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-500">
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 bg-white">
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <span className="block text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-8">
            {t('stories_page.eyebrow')}
          </span>
          <h1 className="text-4xl md:text-[52px] font-medium tracking-tighter text-black mb-8 leading-[1.15] whitespace-pre-line">
            {t('stories_page.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed">
            {t('stories_page.subtitle')}
          </p>
        </div>
      </section>

      <section className="sticky top-14 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4">
         <div className="max-w-7xl mx-auto px-6 relative flex items-center">
            <button 
                onClick={() => scroll('left')}
                className={`flex-shrink-0 w-8 h-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:text-black hover:border-black transition-all shadow-sm z-10 ${canScrollLeft ? 'hidden md:flex mr-4' : 'hidden'}`}
                aria-label="Scroll Left"
            >
                <ICONS.ChevronLeft className="w-4 h-4" />
            </button>

            <div 
                ref={scrollContainerRef}
                onScroll={checkScroll}
                className="flex-grow overflow-x-auto no-scrollbar scroll-smooth"
            >
                <div className="flex space-x-2 md:space-x-4 min-w-max px-1">
                   <button 
                     onClick={() => setActiveFilter({ type: 'all', value: 'all' })}
                     className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeFilter.type === 'all' ? 'bg-black text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
                   >
                     All
                   </button>
                   {industries.map(ind => (
                     <button 
                       key={ind}
                       onClick={() => setActiveFilter({ type: 'industry', value: ind })}
                       className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${activeFilter.type === 'industry' && activeFilter.value === ind ? 'bg-black text-white' : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-black'}`}
                     >
                       {t(`nav.dropdowns.items.${ind}`)}
                     </button>
                   ))}
                </div>
            </div>

            <button 
                onClick={() => scroll('right')}
                className={`flex-shrink-0 w-8 h-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:text-black hover:border-black transition-all shadow-sm z-10 ${canScrollRight ? 'hidden md:flex ml-4' : 'hidden'}`}
                aria-label="Scroll Right"
            >
                <ICONS.ChevronRight className="w-4 h-4" />
            </button>
         </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6 min-h-[60vh]">
         {filteredStudies.length > 0 ? (
            <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredStudies.map(study => (
                  <StaggerItem 
                    key={study.id}
                    onClick={() => onNavigate('industryDetail', study.id)}
                    className="group cursor-pointer flex flex-col outline-none ring-0 focus:outline-none focus:ring-0 active:scale-[0.98] transition-transform duration-300"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                     <div className="relative aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden mb-6">
                        <img 
                          src={study.imageUrl} 
                          alt={study.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                           <span className="text-white text-3xl font-bold drop-shadow-md leading-none mb-2">{study.logo}</span>
                           {language !== 'en' && study.logoSub && (
                               <span className="text-white text-xs font-bold uppercase tracking-[0.2em] drop-shadow-md opacity-90">{study.logoSub}</span>
                           )}
                        </div>
                     </div>
                     <div>
                        <div className="flex items-center space-x-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                           <span>{study.subIndustry || t(`nav.dropdowns.items.${study.industry}`)}</span>
                           <span className="w-1 h-1 bg-gray-300 rounded-full" />
                           <span>{t(`nav.dropdowns.items.${study.category}`)}</span>
                        </div>
                        <h3 className="text-xl font-medium text-gray-900 leading-snug group-hover:text-black mb-3">
                           {study.title}
                        </h3>
                        <div className="flex items-center text-xs font-bold text-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                           {t('common.learnMore')} <ICONS.ArrowRight className="w-3 h-3 ml-2" />
                        </div>
                     </div>
                  </StaggerItem>
               ))}
            </StaggerWrapper>
         ) : (
            <div className="text-center py-20 text-gray-400">
               No results found.
            </div>
         )}
      </section>

      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="text-[11px] font-bold text-black uppercase tracking-[0.2em]">{t('common.trustedBy')}</p>
        </div>
        <LogoMarquee />
      </section>

      <section className="py-24 bg-gray-50/70 border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="text-[11px] font-bold text-black uppercase tracking-[0.2em]">
            {language === 'zh' ? '客户证言' : 'Customer Testimonials'}
          </p>
        </div>
        <div className="pb-20">
           <TestimonialCarousel testimonials={GENERAL_TESTIMONIALS} t={t} language={language} />
        </div>
      </section>
      
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">{t('home_cta.title')}</h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-black px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {t('home_cta.contact')}
          </button>
        </div>
      </section>

    </div>
  );
};

export default IndustriesPage;
