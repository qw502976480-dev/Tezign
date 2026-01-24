
import React, { useState, useEffect } from 'react';
import LogoMarquee from '../ui/LogoMarquee';
import { useLanguage } from '../../context/LanguageContext';
import BlurText from '../ui/BlurText';
import { motion } from 'framer-motion';
import { AGENTS, ICONS } from '../../constants';
import SmartImage from '../ui/SmartImage';

interface HeroProps {
  onNavigate?: (page: any, id?: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Helper to ensure we get a string, falling back to English or empty string if not found
  const getText = (key: string) => {
    let text = t(`home.hero.${key}`) || '';
    
    // Optimize Chinese headline line breaking on mobile to avoid orphan characters
    if (key === 'headline' && language === 'zh' && isMobile) {
       // "特赞是一家企业级人工智能公司" -> "特赞是一家\n企业级人工智能公司"
       return text.replace('企业级', '\n企业级');
    }
    return text;
  };

  const stackItems = [
    {
      id: 'overview',
      title: getText('overviewSubtitle'),
      vibe: getText('overviewTitle'),
      imageUrl: "https://i.imgs.ovh/2025/12/29/C1cUN0.jpeg",
      isOverview: true,
      description: getText('geaDesc')
    },
    ...AGENTS.map(agent => ({
      id: agent.id,
      title: language === 'en' ? agent.nameEn : agent.nameCn,
      vibe: agent.vibe,
      imageUrl: agent.imageUrl,
      isOverview: false,
      description: language === 'en' ? agent.descriptionEn : agent.descriptionCn
    }))
  ];

  const handleStackItemClick = (item: any) => {
    if (!onNavigate) return;
    
    if (item.isOverview) {
      onNavigate('products');
    } else {
      onNavigate('product', item.id);
    }
  };

  return (
    <section className="pt-28 md:pt-52 pb-20 md:pb-28 px-4 md:px-6 flex flex-col items-center relative bg-white overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50/40 via-white to-white pointer-events-none -z-10"></div>
      
      <div className="text-center max-w-[1440px] mx-auto z-10 flex flex-col items-center mb-16 md:mb-24">
        <div className="mb-8 md:mb-10 mx-auto w-full max-w-7xl px-2">
          <BlurText
            key={`${language}-${isMobile}`} 
            text={getText('headline')}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-gray-900 leading-[1.1] md:leading-[1.05]"
            delay={language === 'en' ? 40 : 25}
            animateBy={language === 'en' ? 'words' : 'letters'}
            direction="top"
            animateOnMount={true}
          />
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-gray-500 text-sm md:text-lg font-normal max-w-2xl mx-auto leading-relaxed mb-10 px-6"
        >
          {getText('subheadline')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-6 md:px-0"
        >
          <button 
              onClick={() => onNavigate && onNavigate('products')}
              className="w-full sm:w-auto px-10 py-3.5 md:py-4 bg-black text-white rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl"
          >
            {getText('primaryCta')}
          </button>
          
          <button 
              onClick={() => onNavigate && onNavigate('contact')}
              className="w-full sm:w-auto px-10 py-3.5 md:py-4 bg-white text-black border border-gray-200 rounded-full font-bold text-xs md:text-sm uppercase tracking-widest hover:border-gray-400 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            {getText('secondaryCta')}
          </button>
        </motion.div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 mb-20 md:mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:h-[460px]">
          
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onClick={() => onNavigate && onNavigate('product', 'dam')}
            className="group relative h-[320px] md:h-[280px] lg:h-full rounded-[24px] md:rounded-[32px] overflow-hidden bg-[#F7F7F7] cursor-pointer border border-gray-100/50"
          >
            <SmartImage 
              src="https://i.imgs.ovh/2025/12/27/CBvFhA.png" 
              alt="DAM" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent opacity-80" />
            
            <div className="absolute top-6 left-6 md:top-10 md:left-10 text-white z-10 pr-10">
              <h3 className="text-3xl md:text-4xl font-bold tracking-tighter mb-1 md:mb-2">{getText('damTitle')}</h3>
              <p className="text-sm font-medium opacity-70 mb-3 md:mb-4">{getText('damSubtitle')}</p>
              
              <p className="text-xs md:text-xs font-light leading-relaxed opacity-90 max-w-[200px] md:max-w-[320px]">
                {getText('damDesc')}
              </p>
            </div>
            
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-10">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                <ICONS.ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col h-[520px] md:h-[520px] lg:h-full gap-2">
            {stackItems.map((item, idx) => {
              const isActive = hoveredIndex === idx;
              
              return (
                <motion.div
                  key={item.id}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onClick={() => handleStackItemClick(item)}
                  animate={{ 
                    flex: isActive ? (window.innerWidth < 1024 ? 4 : 6.5) : 1,
                  }}
                  transition={{ type: "spring", stiffness: 350, damping: 40 }}
                  className={`group relative rounded-[20px] md:rounded-[24px] overflow-hidden cursor-pointer transition-all ${isActive ? 'shadow-2xl z-20' : 'bg-[#F9F9F9]'}`}
                >
                  <div className="absolute inset-0 z-0">
                    <SmartImage 
                      src={item.imageUrl} 
                      alt={item.vibe} 
                      className={`w-full h-full object-cover transition-all duration-1000 ${isActive ? 'scale-100' : 'scale-110 grayscale-[0.3]'}`}
                    />
                    <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? 'bg-black/10' : 'bg-black/30'}`} />
                  </div>

                  <div className={`relative z-10 w-full h-full p-4 md:p-6 flex flex-col justify-between text-white`}>
                    <div className={`flex justify-between items-center w-full ${isActive ? 'items-start' : 'items-center'}`}>
                      <div className={`flex ${isActive ? 'flex-col' : 'flex-row items-center gap-3 md:gap-4'} transition-all w-full`}>
                        <motion.h4 
                          layout
                          className={`font-bold tracking-tighter transition-all whitespace-nowrap ${isActive ? 'text-2xl md:text-3xl mb-1 md:mb-2' : 'text-xs md:text-[14px] leading-none'}`}
                        >
                          {item.vibe}
                        </motion.h4>
                        
                        <div className={`transition-all duration-500 ${isActive ? 'opacity-80' : 'opacity-70'}`}>
                          <span className={`font-medium whitespace-nowrap ${isActive ? 'text-xs md:text-sm' : 'text-[9px] md:text-[10px] font-bold uppercase tracking-widest'}`}>
                            {item.title}
                          </span>
                        </div>

                        {isActive && item.description && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-2 md:mt-6 text-[10px] md:text-xs font-light leading-relaxed opacity-90 max-w-[200px] md:max-w-[400px]"
                          >
                            {item.description}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {isActive && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-end">
                        <div className="w-8 h-8 md:w-8 md:h-8 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                          <ICONS.ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl border-t border-gray-100 pt-12 md:pt-16 pb-12 mt-12 md:mt-28">
        <p className="text-center text-[10px] md:text-[11px] font-bold text-black tracking-[0.2em] mb-8 md:mb-12 uppercase">
          {t('common.trustedBy')}
        </p>
        <LogoMarquee />
      </div>
    </section>
  );
};

export default Hero;
