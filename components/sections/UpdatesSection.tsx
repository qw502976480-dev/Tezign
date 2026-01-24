
import React, { useRef, useEffect, useCallback } from 'react';
import { NEWS_ITEMS, ICONS, NEWS_IMAGES_MAP, UPDATE_COVER_POOL } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import SmartImage from '../ui/SmartImage';

interface UpdatesSectionProps {
  onNavigate: (page: 'home' | 'product' | 'company' | 'industryDetail' | 'industries' | 'updates' | 'updateDetail', id?: string) => void;
}

// Use shared pool for consistency
const BACKGROUND_IMAGES = UPDATE_COVER_POOL;

const UpdatesSection: React.FC<UpdatesSectionProps> = ({ onNavigate }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<number | null>(null);
  const { t, language } = useLanguage();

  const originalItems = NEWS_ITEMS.slice(0, 8);
  const displayItems = [...originalItems, ...originalItems];

  // Helper to get the correct scroll distance based on screen size
  const getScrollAmount = () => {
    if (!scrollContainerRef.current) return 412; // Fallback
    
    const container = scrollContainerRef.current;
    const firstCard = container.firstElementChild as HTMLElement;
    if (!firstCard) return 412;

    // Calculate gap dynamically from computed styles to handle space-x-4 vs space-x-8
    const style = window.getComputedStyle(container);
    const gap = parseFloat(style.columnGap) || (window.innerWidth < 768 ? 16 : 32); 
    
    return firstCard.offsetWidth + gap;
  };

  const stopAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  }, []);

  const startAutoplay = useCallback(() => {
    stopAutoplay();
    autoplayIntervalRef.current = window.setInterval(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
      }
    }, 3000);
  }, [stopAutoplay]);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay, stopAutoplay]);
  
  const handleScrollReset = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const singleSetWidth = container.scrollWidth / 2;
      // When we scroll past the first set, seamlessly jump back to start
      if (container.scrollLeft >= singleSetWidth) {
        container.scrollLeft -= singleSetWidth;
      }
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = getScrollAmount();
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      stopAutoplay();
      startAutoplay();
    }
  };

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-[1440px] mx-auto px-6 relative">
        <header className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-8 gap-6 md:gap-0">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 transition-all duration-500">
              {t('sections.updates')}
            </h2>
          </div>
          <div className="flex">
            <button 
              onClick={() => onNavigate('updates')}
              className="flex items-center space-x-3 text-[11px] font-bold text-gray-900 border border-gray-100 px-8 py-3 rounded-full hover:bg-gray-50 transition-all uppercase tracking-widest whitespace-nowrap shadow-sm">
              <span>{t('common.viewAll')}</span>
              <ICONS.ArrowRight />
            </button>
          </div>
        </header>

        <div 
          className="relative group/carousel"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="hidden md:block absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 z-30 transition-all duration-300">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-400 hover:text-black hover:scale-110 active:scale-95 transition-all lg:opacity-0 lg:group-hover/carousel:opacity-100"
              aria-label="Scroll Left"
            >
              <ICONS.ChevronLeft />
            </button>
          </div>
          <div className="hidden md:block absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 z-30 transition-all duration-300">
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-400 hover:text-black hover:scale-110 active:scale-95 transition-all lg:opacity-0 lg:group-hover/carousel:opacity-100"
              aria-label="Scroll Right"
            >
              <ICONS.ArrowRight />
            </button>
          </div>

          <div 
            ref={scrollContainerRef}
            onScroll={handleScrollReset}
            className="flex space-x-4 md:space-x-8 overflow-x-auto pb-10 scrollbar-hide no-scrollbar"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {displayItems.map((item, index) => {
              const itemContent = t(`news.${item.id}`);
              let bgImage = NEWS_IMAGES_MAP[item.id] || BACKGROUND_IMAGES[index % BACKGROUND_IMAGES.length];
              
              if (bgImage === 'https://i.imgs.ovh/2025/12/29/C1c7gU.jpeg') {
                bgImage = BACKGROUND_IMAGES[0];
              }

              return (
                <div 
                  key={`${item.id}-${index}`}
                  onClick={() => onNavigate('updateDetail', item.id)}
                  className="flex-shrink-0 w-[75vw] md:w-[380px] rounded-[24px] md:rounded-[36px] overflow-hidden flex flex-col h-[340px] md:h-[440px] group/card relative shadow-sm hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] transition-all duration-700 cursor-pointer border border-gray-200/20 outline-none ring-0 focus:outline-none focus:ring-0 active:scale-95"
                  style={{ scrollSnapAlign: 'start', WebkitTapHighlightColor: 'transparent' }}
                >
                  <div className="absolute inset-0 w-full h-full">
                    <SmartImage 
                      src={bgImage}
                      alt=""
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
                    />
                    <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/20 to-transparent pointer-events-none transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent pointer-events-none transition-opacity duration-500" />
                  </div>
                  <div className="relative z-10 p-6 md:p-8 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-6 md:mb-8">
                       <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-[10px] md:text-[11px] font-bold text-white uppercase tracking-[0.15em] shadow-sm">
                         {t(`nav.dropdowns.items.${item.category}`)}
                       </span>
                       <span className="text-[10px] md:text-[11px] font-bold text-white/90 uppercase tracking-[0.1em] drop-shadow-lg">{itemContent.date}</span>
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-white mb-2 md:mb-3 leading-[1.2] drop-shadow-xl line-clamp-2">{itemContent.title}</h3>
                    <p className="text-xs md:text-sm text-white/90 mb-6 leading-relaxed line-clamp-2 font-normal drop-shadow-lg opacity-95">{itemContent.subtitle}</p>
                    <div className="mt-auto inline-flex items-center space-x-2 text-[10px] font-bold text-white uppercase tracking-[0.2em] group-hover/card:translate-x-1 transition-transform drop-shadow-lg">
                      <span>{t('common.learnMore')}</span>
                      <ICONS.ArrowRight />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default UpdatesSection;
