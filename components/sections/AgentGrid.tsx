
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { ICONS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import SmartImage from '../ui/SmartImage';

const PRODUCTS = [
  {
    id: 'dam',
    en: "Digital Asset Management",
    cn: "内容资产管理系统",
    statementEn: "Content is Context: Institutional Memory & Decision Engine in the Age of Enterprise AI",
    statementCn: "内容即上下文：企业 AI 时代的“机构记忆”与决策引擎",
    actionEn: "See How It Works",
    actionCn: "查看工作原理",
    vibe: "DAM",
    vibeCn: "内容",
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBvFhA.png',
    videoUrl: 'https://cdn.pixabay.com/video/2020/05/25/40149-424079813_large.mp4'
  },
  {
    id: 'market',
    en: "Market Insight Agent",
    cn: "市场洞察智能体",
    statementEn: "Turns fragmented market signals into clear strategic insight.",
    statementCn: "将碎片化的市场信号转化为清晰的战略洞察。",
    actionEn: "See How It Works",
    actionCn: "查看工作原理",
    vibe: "Insight",
    vibeCn: "洞察",
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBvT5H.png',
    videoUrl: 'https://cdn.pixabay.com/video/2019/04/23/23011-332483109_large.mp4'
  },
  {
    id: 'expert',
    en: "Enterprise Expert Agent",
    cn: "企业专家智能体",
    statementEn: "Applies institutional knowledge to real business decisions.",
    statementCn: "将机构知识应用于真实的业务决策中。",
    actionEn: "See How It Works",
    actionCn: "查看工作原理",
    vibe: "Expert",
    vibeCn: "专家",
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBvLaN.png',
    videoUrl: 'https://cdn.pixabay.com/video/2020/12/10/58632-491957241_large.mp4'
  },
  {
    id: 'growth',
    en: "Content Growth Agent",
    cn: "内容增长智能体",
    statementEn: "Transforms content into measurable growth outcomes.",
    statementCn: "将内容资产转化为可衡量的业务增长成果。",
    actionEn: "See How It Works",
    actionCn: "查看工作原理",
    vibe: "Growth",
    vibeCn: "增长",
    imageUrl: 'https://i.imgs.ovh/2026/01/18/yUSX5h.png',
    videoUrl: 'https://cdn.pixabay.com/video/2020/05/25/40149-424079813_large.mp4'
  },
  {
    id: 'innovation',
    en: "Product Innovation Agent",
    cn: "产品创新智能体",
    statementEn: "Accelerates product ideas from concept to validation.",
    statementCn: "加速产品创意从概念推导到市场验证的完整闭环。",
    actionEn: "See How It Works",
    actionCn: "查看工作原理",
    vibe: "Innovation",
    vibeCn: "创新",
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBvrSC.png',
    videoUrl: 'https://cdn.pixabay.com/video/2019/04/23/23011-332483109_large.mp4'
  },
  {
    id: 'social',
    en: "Social Matrix Agent",
    cn: "社媒矩阵智能体",
    statementEn: "Orchestrates multi-channel content at scale.",
    statementCn: "跨平台多频道的内容生产与分发策略编排。",
    actionEn: "See How It Works",
    actionCn: "查看工作原理",
    vibe: "Social",
    vibeCn: "社媒",
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBvaza.png',
    videoUrl: 'https://cdn.pixabay.com/video/2020/12/10/58632-491957241_large.mp4'
  },
  {
    id: 'revenue',
    en: "Sales Operations Agent",
    cn: "销售运营智能体",
    statementEn: "Supports sales teams with intelligence, not automation.",
    statementCn: "以情报智能而非单纯的自动化手段赋能销售团队。",
    actionEn: "See How It Works",
    actionCn: "查看工作原理",
    vibe: "Revenue",
    vibeCn: "营收",
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBrNDL.png',
    videoUrl: 'https://cdn.pixabay.com/video/2020/05/25/40149-424079813_large.mp4'
  }
];

const ProductCard: React.FC<{ 
  item: typeof PRODUCTS[0]; 
  isActive: boolean;
  isPlaying: boolean;
  onPlayToggle: (e: React.MouseEvent) => void;
  onClick: () => void;
  onNavigate: () => void;
  width: number;
  language: 'en' | 'zh';
}> = ({ item, isActive, isPlaying, onPlayToggle, onClick, onNavigate, width, language }) => {
  return (
    <div 
      onClick={() => { onClick(); }}
      style={{ width: `${width}px`, WebkitTapHighlightColor: 'transparent' }}
      className={`flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group/card outline-none ring-0 focus:outline-none focus:ring-0 ${
        isActive ? 'opacity-100 scale-100' : 'opacity-40 scale-[0.96]'
      }`}
    >
      <div 
        className={`relative aspect-[16/9] bg-gray-100 rounded-[24px] overflow-hidden mb-6 shadow-sm transition-all duration-700 ${isActive ? 'shadow-[0_20px_50px_rgba(0,0,0,0.1)]' : ''}`}
        onClick={(e) => { 
          if(isActive && !isPlaying) {
             e.stopPropagation();
             onNavigate();
          }
        }}
      >
        
        {isActive && isPlaying && item.videoUrl ? (
          <div className="absolute inset-0 z-10 bg-black animate-in fade-in duration-500">
            <video
              src={item.videoUrl}
              className="w-full h-full object-cover rounded-[24px]"
              autoPlay
              controls
              playsInline
              onClick={(e) => e.stopPropagation()} 
            />
            <button 
              onClick={(e) => onPlayToggle(e)} 
              className="absolute top-4 right-4 z-30 w-8 h-8 rounded-full bg-black/40 text-white/80 flex items-center justify-center hover:bg-black hover:text-white transition-all backdrop-blur-md"
            >
              <ICONS.Close className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <>
            <SmartImage 
              src={item.imageUrl} 
              alt={item.vibe} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
            />
            <div className="absolute inset-0 bg-black/10 group-hover/card:bg-black/20 transition-colors duration-500" />
            <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <span 
                className="font-bold text-white tracking-tight select-none text-center leading-none drop-shadow-lg"
                style={{ fontSize: 'clamp(32px, 5vw, 56px)' }}
              >
                {item.vibe}
              </span>
            </div>
            <div className="absolute bottom-6 right-6 z-20">
              <button 
                onClick={(e) => {
                  if (isActive) {
                    onPlayToggle(e);
                  } else {
                    onClick();
                  }
                }}
                className={`w-12 h-12 rounded-full backdrop-blur-2xl border border-white/20 flex items-center justify-center text-white transition-all duration-500 hover:scale-110 active:scale-95 hover:bg-white/20 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
              >
                <ICONS.Play className="w-5 h-5 ml-1" />
              </button>
            </div>
          </>
        )}
        <div className="absolute inset-0 rounded-[24px] border border-white/10 pointer-events-none" />
      </div>

      <div className={`flex flex-col md:flex-row justify-between items-end gap-4 md:gap-6 px-1 mt-6 transition-all duration-700 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
        <div className="flex-1 min-w-0">
          <h4 className="text-xl md:text-[22px] font-normal text-gray-900 leading-tight mb-3 md:mb-4 tracking-tight whitespace-normal md:whitespace-nowrap md:overflow-hidden md:text-ellipsis">
            {language === 'en' ? `“${item.statementEn}”` : `“${item.statementCn}”`}
          </h4>
          <div className="flex wrap items-center gap-x-3 gap-y-2">
            <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-900">
                {language === 'en' ? item.en : item.cn}
            </span>
          </div>
        </div>
        <div className="flex-shrink-0 pb-1">
          <button 
            onClick={(e) => {
               e.stopPropagation();
               onNavigate();
            }}
            className="group flex items-center space-x-2.5 px-6 py-3 rounded-full border border-gray-200 bg-transparent text-gray-900 hover:bg-black hover:text-white hover:border-black transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
              {language === 'en' ? item.actionEn : item.actionCn}
            </span>
            <ICONS.ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

interface AgentGridProps {
  onProductSelect?: (id: string) => void;
  onViewAll?: () => void;
}

const AgentGrid: React.FC<AgentGridProps> = ({ onProductSelect, onViewAll }) => {
  const extendedProducts = useMemo(() => [...PRODUCTS, ...PRODUCTS, ...PRODUCTS], []);
  const [activeIndex, setActiveIndex] = useState(PRODUCTS.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayRef = useRef<any>(null);

  const [playingId, setPlayingId] = useState<string | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  const resetAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    autoplayRef.current = setInterval(() => {
      setPlayingId(currentPlayingId => {
        if (currentPlayingId === null) {
          setActiveIndex(prevIndex => prevIndex + 1);
        }
        return currentPlayingId;
      });
    }, 5000); 
  }, []);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [resetAutoplay]);

  useEffect(() => {
    const updateWidth = () => {
      if (sectionRef.current) setContainerWidth(sectionRef.current.offsetWidth);
      setWindowWidth(window.innerWidth);
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const isMobile = windowWidth < 768;
  const mobileCardWidth = windowWidth - 48; 
  const cardWidth = isMobile ? Math.min(mobileCardWidth, 340) : 640; 
  const cardGap = isMobile ? 16 : 40;
  const step = cardWidth + cardGap;
  const offset = containerWidth / 2 - (activeIndex * step + cardWidth / 2);

  const handlePlayToggle = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const newPlayingId = playingId === id ? null : id;
    setPlayingId(newPlayingId);
    if (newPlayingId) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    } else {
      resetAutoplay();
    }
  };
  
  const handleNavigate = (id: string) => {
    if (onProductSelect) onProductSelect(id);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    setActiveIndex(activeIndex + 1);
    resetAutoplay();
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setActiveIndex(activeIndex - 1);
    resetAutoplay();
  };

  const handleCardClick = (idx: number) => {
    if (isTransitioning) return;
    setActiveIndex(idx);
    resetAutoplay();
  }

  const handleTransitionEnd = () => {
    if (activeIndex >= PRODUCTS.length * 2) {
      setIsTransitioning(true);
      setActiveIndex(PRODUCTS.length);
    }
    if (activeIndex <= PRODUCTS.length - 1) {
      setIsTransitioning(true);
      setActiveIndex(PRODUCTS.length * 2 - 1);
    }
  };

  useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => setIsTransitioning(false), 50);
    }
  }, [isTransitioning]);

  return (
    <section ref={sectionRef} className="pt-24 md:pt-32 pb-12 md:pb-16 bg-white overflow-hidden relative" id="products">
      <div className="max-w-[1440px] mx-auto px-6 mb-16 md:mb-20">
        <header className="flex flex-col md:flex-row md:items-end justify-between border-b border-gray-100 pb-10 gap-6 md:gap-8">
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 transition-all duration-500">
              {t('sections.products')}
            </h2>
          </div>
          
          <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-4">
             <div className="flex md:hidden space-x-2 shrink-0">
                <button 
                  onClick={prevSlide}
                  className={`w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center transition-all active:bg-gray-50`}
                >
                  <ICONS.ChevronLeft />
                </button>
                <button 
                  onClick={nextSlide}
                  className={`w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center transition-all active:bg-gray-50`}
                >
                  <ICONS.ChevronRight />
                </button>
             </div>

            {onViewAll && (
              <button 
                onClick={onViewAll}
                className="flex items-center space-x-3 text-[11px] font-bold text-gray-900 border border-gray-100 px-6 py-3 rounded-full hover:bg-gray-50 transition-all uppercase tracking-widest shadow-sm whitespace-nowrap"
              >
                <span>{t('common.viewAll')}</span>
                <ICONS.ArrowRight />
              </button>
            )}
          </div>
        </header>
      </div>

      <div className="relative w-full h-[580px] md:h-[640px] group/carousel">
        <div className="hidden md:block absolute top-[200px] left-10 lg:left-20 z-30">
          <button 
            onClick={prevSlide}
            className={`w-14 h-14 rounded-full bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-400 hover:text-black hover:scale-110 transition-all lg:opacity-0 lg:group-hover/carousel:opacity-100`}
          >
            <ICONS.ChevronLeft />
          </button>
        </div>
        
        <div className="hidden md:block absolute top-[200px] right-10 lg:right-20 z-30">
          <button 
            onClick={nextSlide}
            className={`w-14 h-14 rounded-full bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center justify-center text-gray-400 hover:text-black hover:scale-110 transition-all lg:opacity-0 lg:group-hover/carousel:opacity-100`}
          >
            <ICONS.ChevronRight />
          </button>
        </div>

        <div 
          ref={trackRef}
          className="flex"
          onTransitionEnd={handleTransitionEnd}
          style={{ 
            transform: `translateX(${offset}px)`,
            width: `${extendedProducts.length * step}px`,
            transition: isTransitioning ? 'none' : `transform 700ms cubic-bezier(0.25,1,0.5,1)`,
          }}
        >
          {extendedProducts.map((item, idx) => (
            <div key={idx} style={{ marginRight: `${cardGap}px` }} className="last:mr-0">
              <ProductCard 
                item={item} 
                isActive={idx === activeIndex}
                isPlaying={playingId === item.id && idx === activeIndex}
                onPlayToggle={(e) => handlePlayToggle(item.id, e)}
                onClick={() => handleCardClick(idx)}
                onNavigate={() => handleNavigate(item.id)}
                width={cardWidth}
                language={language}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentGrid;
