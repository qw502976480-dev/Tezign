
import React, { useState, useRef, useEffect } from 'react';
import { ICONS, CRITICAL_ASSETS, NAV_IMAGES } from '../../constants';
import AuthModal from '../features/AuthModal';
import SearchModal from '../features/SearchModal';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { preloadImage } from '../../utils/assetPreloader';
import SmartImage from '../ui/SmartImage';
import { StaggerWrapper, StaggerItem } from '../ui/StaggerWrapper';

const SectionHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-6 select-none border-b border-transparent">
    {children}
  </h4>
);

const MenuItem: React.FC<{ label: string; onClick?: () => void; onMouseEnter?: () => void; href?: string }> = ({ label, onClick, onMouseEnter, href = "#" }) => {
  const isExternal = href.startsWith('http');
  return (
    <div className="py-1.5" onMouseEnter={onMouseEnter}>
      <a 
        href={href} 
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        onClick={(e) => {
           if(onClick) {
             e.preventDefault();
             e.stopPropagation();
             onClick();
           }
        }}
        className="nav-dd-item cursor-pointer"
      >
        <span className="text-[14px] font-medium leading-relaxed">
          {label}
        </span>
      </a>
    </div>
  );
};

const FeaturedNavCard: React.FC<{ 
  imgSrc: string; 
  title: string; 
  onImageClick?: () => void;
  onLabelClick?: () => void;
  href?: string;
  label?: string;
  aspectHeight?: string;
  overlayClassName?: string;
}> = ({ imgSrc, title, onImageClick, onLabelClick, href, label, aspectHeight = "160px", overlayClassName = "" }) => {
  const { t } = useLanguage();
  
  const handleImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onImageClick) {
      onImageClick();
    } else if (href && href !== '#') {
      if (href.startsWith('http')) window.open(href, '_blank');
    }
  };

  const handleLabelClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onLabelClick) {
      onLabelClick();
    } else if (onImageClick) {
      onImageClick();
    }
  };
  
  return (
    <div className="group block h-full">
      <a 
        href={href || "#"} 
        onClick={handleImageClick}
        className="block relative overflow-hidden rounded-[18px] cursor-pointer"
        style={{ height: aspectHeight }}
      >
        <div className="nav-card-visual h-full w-full bg-[#f3f3f3]">
          <SmartImage 
            src={imgSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
          />
          <div className={`absolute top-4 left-4 right-4 z-10 pointer-events-none ${overlayClassName}`}>
             <div className="text-white text-[13px] font-bold mb-1 tracking-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
                {title}
             </div>
             <div className="flex items-center gap-1.5">
                <span className="text-white/90 text-[9px] font-bold uppercase tracking-[0.2em] border-b border-white/40 pb-0.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]">
                   {t('nav_ia.overlays.more')}
                </span>
                <ICONS.ArrowRight className="w-2.5 h-2.5 text-white opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]" />
             </div>
          </div>
        </div>
      </a>

      {label && (
        <div className="mt-3">
          <a 
            href="#"
            onClick={handleLabelClick}
            className="nav-dd-item cursor-pointer inline-flex"
          >
            <span className="font-bold text-[15px] leading-tight">
              {label}
            </span>
          </a>
        </div>
      )}
    </div>
  );
};

const CompanyFeaturedCarousel: React.FC<{ onNavigate: any }> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  const cards = [
    {
      img: NAV_IMAGES.comp_atypica,
      title: t('nav_ia.overlays.comp_card1_title'),
      targetPage: "atypicaStory"
    },
    {
      img: NAV_IMAGES.comp_musedam,
      title: t('nav_ia.overlays.comp_card2_title'),
      targetPage: "museStory"
    },
    {
      img: NAV_IMAGES.comp_clipo,
      title: t('nav_ia.overlays.comp_card3_title'),
      targetPage: "clipoStory"
    }
  ];

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setIndex(prev => (prev + 1) % cards.length);
    }, 5000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleManualSwitch = (newIndex: number) => {
    setIndex(newIndex);
    startTimer(); 
  };

  return (
    <div className="relative overflow-hidden rounded-[18px] h-[180px] group/carousel">
      {cards.map((card, i) => (
        <div 
          key={i}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === i ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'}`}
        >
          <FeaturedNavCard 
            imgSrc={card.img}
            title={card.title}
            onImageClick={() => onNavigate(card.targetPage)}
            aspectHeight="100%"
            overlayClassName="pr-20"
          />
        </div>
      ))}
      
      <div className="absolute top-3 right-3 flex z-30">
         {cards.map((_, i) => (
           <button 
             key={i}
             onClick={(e) => {
               e.preventDefault();
               e.stopPropagation();
               handleManualSwitch(i);
             }}
             className="p-2 cursor-pointer focus:outline-none group/indicator"
             aria-label={`Switch to slide ${i + 1}`}
           >
             <div className={`h-1 rounded-full transition-all duration-300 shadow-sm ${
               index === i 
                 ? 'bg-white w-8 opacity-100' 
                 : 'bg-white/40 w-2 group-hover/indicator:bg-white/80 group-hover/indicator:w-4'
             }`} />
           </button>
         ))}
      </div>
    </div>
  );
};

interface NavItemProps {
  label: string;
  dropdownKey: string;
  activeDropdown: string | null;
  onMouseEnter: (key: string) => void;
  onMouseLeave: () => void;
  onClick?: () => void;
  children: React.ReactNode;
  widthClass?: string;
}

const NavItem: React.FC<NavItemProps> = ({ 
  label, dropdownKey, activeDropdown, onMouseEnter, onMouseLeave, onClick, children, widthClass = "max-w-5xl"
}) => {
  return (
    <div 
      className="relative h-full flex items-center"
      onMouseEnter={() => onMouseEnter(dropdownKey)}
      onMouseLeave={onMouseLeave}
    >
      <button 
        onClick={(e) => {
            e.stopPropagation();
            if(onClick) onClick();
        }}
        className={`px-5 py-2 text-sm font-medium transition-colors flex items-center ${activeDropdown === dropdownKey ? 'text-black' : 'text-gray-500 hover:text-black'}`}
      >
        <span>{label}</span>
      </button>
      
      {activeDropdown === dropdownKey && (
        <div className="fixed top-14 left-0 right-0 z-[110] flex justify-center px-6 pt-4 pointer-events-none">
          <div 
            className={`w-full ${widthClass} bg-white border border-gray-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] rounded-[24px] overflow-hidden p-8 pointer-events-auto animate-in fade-in slide-in-from-top-1 duration-200`}
            onMouseEnter={() => onMouseEnter(dropdownKey)}
            onMouseLeave={onMouseLeave}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

type PageType = 'home' | 'product' | 'products' | 'company' | 'industryDetail' | 'industries' | 'updates' | 'resources' | 'industryInsights' | 'myCollection' | 'legal' | 'careers' | 'technology' | 'techData' | 'techModel' | 'techSkill' | 'dam' | 'overview' | 'architecture' | 'aiFullStack' | 'creativeSku' | 'atypicaStory' | 'museStory' | 'clipoStory' | 'contact';

interface NavbarProps {
  onNavigate?: (page: PageType, id?: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const { isAuthenticated, setIsAuthenticated, isAuthModalOpen, setIsAuthModalOpen } = useAuth();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const timeoutRef = useRef<number | null>(null);
  const { language, setLanguage, t } = useLanguage();

  const handleMouseEnter = (key: string) => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    setActiveDropdown(key);
    
    const intentMap: Record<string, string> = {
      'products': 'products',
      'technology': 'technology',
      'industries': 'industries',
      'resources': 'resources',
      'company': 'company'
    };
    if (intentMap[key]) {
      const assets = CRITICAL_ASSETS[intentMap[key]] || [];
      assets.forEach(url => preloadImage(url));
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const handleNavClick = (page: PageType, id?: string) => {
    if (onNavigate) {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      setActiveDropdown(null);
      setIsMobileMenuOpen(false);
      onNavigate(page, id);
    }
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const agentItems = [
    { key: 'market', id: 'market' },
    { key: 'innovation', id: 'innovation' },
    { key: 'expert', id: 'expert' },
    { key: 'growth', id: 'growth' },
    { key: 'social', id: 'social' },
    { key: 'sales', id: 'revenue' }
  ];

  const industryItems = ['consumer', 'auto', 'finance', 'tech', 'more'];

  return (
    <>
      <style>
      {`
        .nav-dd-item { position: relative; display: inline-flex; align-items: center; color: rgba(0,0,0,0.6); transition: color 180ms ease; }
        .nav-dd-item:hover { color: #000; }
        .nav-dd-item::after { content: ""; position: absolute; left: 0; bottom: -1px; height: 1.5px; width: 100%; background: #000; transform: scaleX(0); transform-origin: left; transition: transform 250ms cubic-bezier(0.16, 1, 0.3, 1); }
        .nav-dd-item:hover::after { transform: scaleX(1); }
        .mobile-menu-enter { transform: translateY(-100%); }
        .mobile-menu-enter-active { transform: translateY(0); transition: transform 400ms ease; }
      `}
      </style>

      {activeDropdown && activeDropdown !== 'profile' && (
        <div className="fixed inset-0 top-14 z-[90] bg-gray-900/5 backdrop-blur-xl animate-in fade-in duration-500 hidden md:block" />
      )}

      <nav className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-gray-100 px-4 md:px-8 h-14 flex items-center justify-between transition-all duration-300">
        <div className="flex items-center min-w-[120px] md:min-w-[200px]">
          <button className="group flex items-center gap-2 py-2 pr-2 cursor-pointer outline-none" onClick={() => handleNavClick('home')}>
            <div className="flex items-baseline gap-2 select-none">
              <span className="font-semibold text-[17px] tracking-tight text-gray-900 leading-none font-sans">Tezign</span>
              {language === 'zh' && (
                <span className="font-medium text-[15.5px] text-gray-800 leading-none tracking-normal" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft Hei", sans-serif', transform: 'translateY(-0.5px)' }}>特赞</span>
              )}
            </div>
          </button>
        </div>

        <div className="hidden md:flex items-center h-full space-x-1">
          <NavItem label={t('nav_ia.products')} dropdownKey="products" activeDropdown={activeDropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleNavClick('products')} widthClass="max-w-[840px]">
            <div className="flex flex-col">
              <SectionHeader>{t('nav_ia.headers.core')}</SectionHeader>
              <div className="grid grid-cols-2 gap-10">
                <FeaturedNavCard 
                  imgSrc={NAV_IMAGES.products_dam} 
                  title={t('nav_ia.overlays.dam_title')} 
                  onImageClick={() => handleNavClick('dam')}
                  onLabelClick={() => handleNavClick('product', 'dam')}
                  label={t('nav_ia.items.dam')} 
                />
                
                <div className="flex flex-col">
                  <FeaturedNavCard 
                    imgSrc={NAV_IMAGES.products_gea} 
                    title={t('nav_ia.overlays.gea_title')} 
                    onImageClick={() => handleNavClick('overview')}
                    onLabelClick={() => handleNavClick('products')}
                    label={t('nav_ia.items.overview')} 
                  />
                  <div className="flex flex-col mt-10">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1">
                      {agentItems.map(item => (
                        <MenuItem 
                          key={item.key} 
                          label={t(`nav_ia.items.${item.key}`)} 
                          onMouseEnter={() => preloadImage(CRITICAL_ASSETS[`product:${item.id}`]?.[0] || '')}
                          onClick={() => handleNavClick('product', item.id)} 
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </NavItem>

          <NavItem label={t('nav_ia.technology')} dropdownKey="technology" activeDropdown={activeDropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleNavClick('technology')} widthClass="max-w-[900px]">
            <div className="grid grid-cols-[1fr_1fr_320px] gap-12">
              <div className="flex flex-col space-y-1">
                <SectionHeader>{t('nav_ia.headers.ai_tech')}</SectionHeader>
                <MenuItem onClick={() => handleNavClick('technology', 'scroll:gea_os')} label={t('nav_ia.items.gea_os')} />
                <MenuItem onClick={() => handleNavClick('technology', 'scroll:reasoning')} label={t('nav_ia.items.creative_reasoning')} />
                <MenuItem onClick={() => handleNavClick('technology', 'scroll:context_graph')} label={t('nav_ia.items.context_graph')} />
                <MenuItem onClick={() => handleNavClick('technology', 'scroll:skills')} label={t('nav_ia.items.agent_skills')} />
              </div>
              <div className="flex flex-col space-y-1">
                <SectionHeader>{t('nav_ia.headers.data_security')}</SectionHeader>
                <MenuItem onClick={() => handleNavClick('technology', 'scroll:sovereignty')} label={t('nav_ia.items.data_sovereignty')} />
                <MenuItem onClick={() => handleNavClick('technology', 'scroll:compliance')} label={t('nav_ia.items.compliance_cert')} />
                <MenuItem onClick={() => handleNavClick('technology', 'scroll:deployment')} label={t('nav_ia.items.deployment')} />
              </div>
              <FeaturedNavCard 
                imgSrc={NAV_IMAGES.technology} 
                title={language === 'zh' ? '从意图到行动：企业级智能体系统的认知架构与安全基座' : 'From Intent to Action: Cognitive Architecture and Security Foundations of Enterprise Agent Systems'} 
                onImageClick={() => handleNavClick('architecture')}
                onLabelClick={() => handleNavClick('architecture')}
                aspectHeight="220px" 
              />
            </div>
          </NavItem>

          <NavItem label={t('nav_ia.industries')} dropdownKey="industries" activeDropdown={activeDropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleNavClick('industries')} widthClass="max-w-[760px]">
            <div className="grid grid-cols-[1fr_400px] gap-16">
              <div className="flex flex-col space-y-1">
                <SectionHeader>{language === 'en' ? 'INDUSTRIES' : '行业'}</SectionHeader>
                {industryItems.map(item => (
                  <MenuItem key={item} onClick={() => handleNavClick('industries', `filter:industry:${item}`)} label={t(`nav_ia.items.${item}`)} />
                ))}
              </div>
              <FeaturedNavCard 
                imgSrc={NAV_IMAGES.industries} 
                title={t('nav_ia.overlays.industries_title')} 
                onImageClick={() => handleNavClick('industries', 'filter:industry:tech')}
                onLabelClick={() => handleNavClick('industries')}
                aspectHeight="240px" 
              />
            </div>
          </NavItem>

          <NavItem label={t('nav_ia.resources')} dropdownKey="resources" activeDropdown={activeDropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleNavClick('resources')} widthClass="max-w-[840px]">
            <div className="flex flex-col">
              <SectionHeader>{t('nav_ia.headers.professional')}</SectionHeader>
              <div className="grid grid-cols-2 gap-10 mb-10">
                <FeaturedNavCard 
                  imgSrc={NAV_IMAGES.resources_1} 
                  title={t('nav_ia.overlays.res_card1_title')} 
                  onImageClick={() => handleNavClick('aiFullStack')}
                  onLabelClick={() => handleNavClick('resources', 'scroll:consulting')}
                  label={t('nav_ia.items.ai_fullstack')} 
                />
                
                <FeaturedNavCard 
                  imgSrc={NAV_IMAGES.resources_2} 
                  title={t('nav_ia.overlays.res_card2_title')} 
                  onImageClick={() => handleNavClick('creativeSku')}
                  onLabelClick={() => handleNavClick('resources', 'scroll:creative')}
                  label={t('nav_ia.items.creative_sku')} 
                />
              </div>
              <div className="grid grid-cols-2 gap-10">
                <div className="flex flex-col space-y-1">
                  <SectionHeader>{t('nav_ia.headers.academic')}</SectionHeader>
                  <MenuItem onClick={() => handleNavClick('resources', 'scroll:labs')} label={t('nav_ia.items.labs')} />
                  <MenuItem onClick={() => handleNavClick('resources', 'scroll:fund')} label={t('nav_ia.items.fund')} />
                </div>
                <div className="flex flex-col space-y-1">
                  <SectionHeader>{t('nav_ia.headers.whitepapers')}</SectionHeader>
                  <MenuItem onClick={() => handleNavClick('industryInsights', 'tab:whitepaper')} label={t('nav_ia.items.whitepapers')} />
                  <MenuItem onClick={() => handleNavClick('industryInsights', 'tab:report')} label={t('nav_ia.items.reports')} />
                </div>
              </div>
            </div>
          </NavItem>

          <NavItem label={t('nav_ia.company')} dropdownKey="company" activeDropdown={activeDropdown} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => handleNavClick('company')} widthClass="max-w-[840px]">
            <div className="flex flex-col">
              <div className="grid grid-cols-3 gap-10 mb-12">
                <div className="flex flex-col space-y-1">
                  <SectionHeader>{t('nav_ia.headers.about')}</SectionHeader>
                  <MenuItem onClick={() => handleNavClick('company')} label={t('nav_ia.items.about_tezign')} />
                  <MenuItem onClick={() => handleNavClick('company', 'scroll:what-is-gea')} label={t('nav_ia.items.mission')} />
                  <MenuItem onClick={() => handleNavClick('careers')} label={t('nav_ia.items.careers')} />
                </div>
                <div className="flex flex-col space-y-1">
                  <SectionHeader>{t('nav_ia.headers.updates')}</SectionHeader>
                  <MenuItem onClick={() => handleNavClick('updates', 'filter:category:product_updates')} label={t('nav_ia.items.product_updates')} />
                  <MenuItem onClick={() => handleNavClick('updates', 'filter:category:media_press')} label={t('nav_ia.items.press')} />
                  <MenuItem onClick={() => handleNavClick('updates', 'filter:category:events')} label={t('nav_ia.items.events')} />
                </div>
                <div className="flex flex-col space-y-1">
                  <SectionHeader>{t('nav_ia.headers.legal')}</SectionHeader>
                  <MenuItem onClick={() => handleNavClick('legal', 'scroll:privacy')} label={t('nav_ia.items.privacy')} />
                  <MenuItem onClick={() => handleNavClick('legal', 'scroll:security')} label={t('nav_ia.items.security')} />
                  <MenuItem onClick={() => handleNavClick('legal', 'scroll:terms')} label={t('nav_ia.items.terms')} />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-10">
                <div className="flex flex-col space-y-1">
                  <SectionHeader>{t('nav_ia.headers.investment')}</SectionHeader>
                  <MenuItem href="https://atypica.musedam.cc/" label={t('nav_ia.items.atypica')} />
                  <MenuItem href="https://www.musedam.cc/zh-CN" label={t('nav_ia.items.muse')} />
                  <MenuItem onClick={() => handleNavClick('clipoStory')} label={t('nav_ia.items.clipo')} />
                </div>
                <div className="col-span-2">
                  <CompanyFeaturedCarousel onNavigate={handleNavClick} />
                </div>
              </div>
            </div>
          </NavItem>
        </div>

        <div className="flex items-center space-x-3 md:space-x-6 min-w-[120px] md:min-w-[200px] justify-end">
          <button className="md:hidden p-2 text-gray-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <ICONS.Close className="w-5 h-5" /> : <ICONS.Menu className="w-5 h-5" />}
          </button>
          <div className="flex items-center bg-gray-50 rounded-full p-0.5 border border-gray-100">
            <button onClick={() => setLanguage('en')} className={`text-[9px] font-bold px-2 md:px-3 py-1.5 rounded-full transition-all uppercase tracking-widest ${language === 'en' ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-black'}`}>EN</button>
            <button onClick={() => setLanguage('zh')} className={`text-[9px] font-bold px-2 md:px-3 py-1.5 rounded-full transition-all uppercase tracking-widest ${language === 'zh' ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:text-black'}`}>CN</button>
          </div>
          <button onClick={() => setIsSearchOpen(true)} className="text-gray-400 hover:text-black transition-colors hidden md:block"><ICONS.Search /></button>
          {isAuthenticated ? (
            <div className="relative hidden md:flex h-full items-center" onMouseEnter={() => handleMouseEnter('profile')} onMouseLeave={handleMouseLeave}>
              <button onClick={() => handleNavClick('myCollection')} className="flex items-center group py-2">
                <div className={`w-8 h-8 rounded-full bg-black flex items-center justify-center text-[10px] font-bold text-white transition-all ring-offset-2 ${activeDropdown === 'profile' ? 'ring-2 ring-gray-100' : 'group-hover:ring-2 group-hover:ring-gray-100'}`}>T</div>
              </button>
              {activeDropdown === 'profile' && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden p-2 z-[120] animate-in fade-in zoom-in-95 duration-200">
                   <div className="px-4 py-3 border-b border-gray-50 mb-1">
                     <p className="text-xs font-bold text-gray-900">Tezign User</p>
                     <p className="text-[10px] text-gray-400 font-mono mt-0.5">user@tezign.com</p>
                   </div>
                   <button onClick={() => handleNavClick('myCollection', 'scroll:account-settings')} className="w-full text-left px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-black rounded-xl transition-colors flex items-center justify-between group">
                      <span>{t('nav.auth.settings')}</span>
                      <ICONS.ArrowRight className="w-3 h-3 text-gray-300 group-hover:text-black transition-colors" />
                   </button>
                   <div className="border-t border-gray-50 mt-2 pt-2">
                     <button onClick={() => { setIsAuthenticated(false); setActiveDropdown(null); handleNavClick('home'); }} className="w-full text-left px-4 py-2.5 text-xs font-bold text-red-500 hover:bg-red-50 rounded-xl transition-colors uppercase tracking-wider">{t('nav.auth.signout')}</button>
                   </div>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => setIsAuthModalOpen(true)} className="bg-black text-white px-4 md:px-7 py-2 md:py-2.5 rounded-full text-[10px] md:text-xs font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-sm uppercase tracking-wider hidden md:block">{t('nav.signin')}</button>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-white pt-14 animate-in fade-in slide-in-from-top-full duration-500 flex flex-col md:hidden">
          <div className="flex-1 overflow-y-auto px-6 py-10">
            <StaggerWrapper mode="enter" className="space-y-12">
              <StaggerItem>
                <SectionHeader>{t('nav_ia.products')}</SectionHeader>
                <div className="space-y-4">
                  <button onClick={() => handleNavClick('dam')} className="text-2xl font-medium block">{t('nav_ia.items.dam')}</button>
                  <button onClick={() => handleNavClick('overview')} className="text-2xl font-medium block">{t('nav_ia.items.overview')}</button>
                </div>
              </StaggerItem>
              <StaggerItem>
                <SectionHeader>{t('nav_ia.technology')}</SectionHeader>
                <button onClick={() => handleNavClick('technology')} className="text-2xl font-medium block">{t('nav_ia.technology')}</button>
              </StaggerItem>
              <StaggerItem>
                <SectionHeader>{t('nav_ia.industries')}</SectionHeader>
                <button onClick={() => handleNavClick('industries')} className="text-2xl font-medium block">{t('nav_ia.industries')}</button>
              </StaggerItem>
              <StaggerItem>
                <SectionHeader>{t('nav_ia.company')}</SectionHeader>
                <button onClick={() => handleNavClick('company')} className="text-2xl font-medium block">{t('nav_ia.company')}</button>
              </StaggerItem>
            </StaggerWrapper>
          </div>
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            {isAuthenticated ? (
              <button onClick={() => handleNavClick('myCollection')} className="w-full py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs">My Account</button>
            ) : (
              <button onClick={() => setIsAuthModalOpen(true)} className="w-full py-4 bg-black text-white rounded-full font-bold uppercase tracking-widest text-xs">{t('nav.signin')}</button>
            )}
          </div>
        </div>
      )}

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} onSuccess={() => { setIsAuthenticated(true); setIsAuthModalOpen(false); }} onNavigate={onNavigate as any} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} onNavigate={onNavigate as any} />
    </>
  );
};

export default Navbar;
