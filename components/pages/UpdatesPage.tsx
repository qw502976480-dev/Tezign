
import React, { useMemo, useEffect, useRef } from 'react';
import { ICONS, NEWS_IMAGES_MAP, CRITICAL_ASSETS, UPDATE_COVER_POOL } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import { getNewsByLanguage, buildUpdatesListByCategory, UpdateListItem } from '../../content/updatesIndex';
import { StaggerWrapper, StaggerItem } from '../ui/StaggerWrapper';

interface UpdatesPageProps {
  onNavigate: (page: 'home' | 'product' | 'company' | 'industryDetail' | 'industries' | 'updates' | 'updateDetail', id?: string) => void;
  initialFilter?: { type: 'category'; value: string } | null;
}

const CATEGORIES = [
  { key: 'product_updates', translationKey: 'nav.dropdowns.items.product_updates'},
  { key: 'media_press', translationKey: 'nav.dropdowns.items.media_press'},
  { key: 'events', translationKey: 'nav.dropdowns.items.events'}
];

const UpdateCarousel: React.FC<{
  categoryKey: string,
  title: string,
  items: UpdateListItem[],
  newsMap: Record<string, any>,
  onNavigate: any
}> = ({ categoryKey, title, items, newsMap, onNavigate }) => {
  const { t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 412; 
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (items.length === 0) {
    return null;
  }

  return (
    <StaggerItem id={`section-${categoryKey}`} className="py-16 md:py-20 max-w-[1440px] mx-auto px-6">
      <header className="mb-12">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900">{title}</h2>
      </header>
      <div className="relative group/carousel">
        <div className="hidden md:block absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 z-30 transition-all duration-300">
          <button 
            onClick={() => scroll('left')}
            className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-400 hover:text-black hover:scale-110 active:scale-95 transition-all lg:opacity-0 lg:group-hover/carousel:opacity-100 focus:outline-none"
            aria-label="Scroll Left"
          >
            <ICONS.ChevronLeft />
          </button>
        </div>
        <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 z-30 transition-all duration-300">
          <button 
            onClick={() => scroll('right')}
            className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-400 hover:text-black hover:scale-110 active:scale-95 transition-all lg:opacity-0 lg:group-hover/carousel:opacity-100 focus:outline-none"
            aria-label="Scroll Right"
          >
            <ICONS.ArrowRight />
          </button>
        </div>
        <div 
          ref={scrollContainerRef}
          className="flex space-x-4 md:space-x-8 overflow-x-auto pb-10 scrollbar-hide no-scrollbar px-1"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {items.map((item) => {
            const itemContent = newsMap[item.id];
            if (!itemContent) return null;

            const bgImage = item.coverImage;

            return (
              <div 
                key={item.id} 
                onClick={() => onNavigate('updateDetail', item.id)}
                className="flex-shrink-0 w-[75vw] md:w-[380px] rounded-[24px] md:rounded-[36px] overflow-hidden flex flex-col h-[340px] md:h-[440px] group/card relative shadow-sm hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] transition-all duration-700 cursor-pointer border border-gray-200/20 outline-none ring-0 focus:outline-none focus:ring-0 active:scale-[0.98]"
                style={{ scrollSnapAlign: 'start', WebkitTapHighlightColor: 'transparent' }}
              >
                {bgImage ? (
                  <div className="absolute inset-0 w-full h-full">
                    <img 
                      src={bgImage}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
                    />
                    
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/20 to-transparent pointer-events-none transition-opacity duration-500" />
                    
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none transition-opacity duration-500" />
                  </div>
                ) : (
                  <div className="absolute inset-0 w-full h-full bg-gray-50 border-b border-gray-100"></div>
                )}

                <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6 md:mb-8">
                     <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full ${bgImage ? 'bg-white/20 border-white/10 text-white' : 'bg-black/5 border-black/5 text-gray-500'} backdrop-blur-md border text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] shadow-sm`}>
                       {t(`nav.dropdowns.items.${item.category}`)}
                     </span>
                     <span className={`text-[10px] md:text-[11px] font-bold uppercase tracking-[0.1em] ${bgImage ? 'text-white/90 drop-shadow-lg' : 'text-gray-400'}`}>{itemContent.date}</span>
                  </div>
                  
                  <h3 className={`text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-3 leading-[1.2] line-clamp-2 ${bgImage ? 'text-white drop-shadow-xl' : 'text-gray-900'}`}>{itemContent.title}</h3>
                  
                  <p className={`text-xs md:text-sm mb-6 leading-relaxed line-clamp-2 font-normal opacity-95 ${bgImage ? 'text-white/90 drop-shadow-lg' : 'text-gray-500'}`}>{itemContent.subtitle}</p>
                  
                  <div className={`mt-auto inline-flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] group-hover/card:translate-x-1 transition-transform ${bgImage ? 'text-white drop-shadow-lg' : 'text-black'}`}>
                    <span>{t('common.learnMore')}</span>
                    <ICONS.ArrowRight />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </StaggerItem>
  );
};

const UpdatesPage: React.FC<UpdatesPageProps> = ({ onNavigate, initialFilter }) => {
  const { t, language } = useLanguage();
  const newsMap = getNewsByLanguage(language as 'en' | 'zh');

  // Use the refined builder from updatesIndex which now handles random pool logic globally
  const updatesLists = useMemo(() => {
    const meta = Object.keys(newsMap).map(id => ({
      id,
      category: newsMap[id].category
    })).filter(item => item.category); 
    
    // Pass the large shared pool to the builder
    // The builder will:
    // 1. Use NEWS_IMAGES_MAP for fixed items
    // 2. Use UPDATE_COVER_POOL for variable items
    // 3. Ensure no adjacent duplicates
    return buildUpdatesListByCategory(
        language as 'en'|'zh', 
        meta, 
        NEWS_IMAGES_MAP, 
        UPDATE_COVER_POOL
    );
  }, [language, newsMap]);

  useEffect(() => {
    if (initialFilter && initialFilter.type === 'category') {
      const sectionId = `section-${initialFilter.value}`;
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          const yOffset = -100;
          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 100);
      }
    }
  }, [initialFilter]);
  
  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-500">
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 bg-white">
        <div className="relative max-w-5xl mx-auto text-center z-10">
            <span className="block text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-8">
              {t('updates_page.eyebrow')}
            </span>
            <h1 className="text-4xl md:text-[52px] font-medium tracking-tighter text-black mb-8 leading-[1.15] whitespace-pre-line">
              {t('updates_page.title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
              {t('updates_page.subtitle')}
            </p>
        </div>
      </section>
      
      <StaggerWrapper className="border-t border-gray-50">
        {CATEGORIES.map(category => (
          <UpdateCarousel
            key={category.key}
            categoryKey={category.key}
            title={t(category.translationKey)}
            items={updatesLists[category.key] || []}
            newsMap={newsMap}
            onNavigate={onNavigate}
          />
        ))}
      </StaggerWrapper>
    </div>
  );
};

export default UpdatesPage;
