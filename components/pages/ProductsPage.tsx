
import React from 'react';
import { ICONS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import AgentGrid from '../sections/AgentGrid';
import LogoMarquee from '../ui/LogoMarquee';

interface ProductsPageProps {
  onNavigate: (page: 'home' | 'product', id?: string) => void;
}

const CoreCapabilityCard: React.FC<{
  title: string;
  description: string;
  keywords: string;
  theme: 'light' | 'dark';
  animationType: 'intent' | 'context' | 'reasoning' | 'skill';
}> = ({ title, description, keywords, theme, animationType }) => {
  const isDark = theme === 'dark';
  
  const renderAnimation = () => {
    switch (animationType) {
      case 'intent':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible opacity-70">
            <g transform="translate(200, 150)">
              <circle r="40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              <circle r="20" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 2" className="animate-[spin_10s_linear_infinite]" />
              {[0, 72, 144, 216, 288].map((deg, i) => (
                 <g key={i} transform={`rotate(${deg})`}>
                    <animateTransform attributeName="transform" type="translate" from="120 0" to="25 0" dur="2.5s" begin={`${i * 0.4}s`} repeatCount="indefinite" />
                 </g>
              ))}
            </g>
          </svg>
        );
      case 'context':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible opacity-70">
            <g transform="translate(200, 160)"><g className="animate-[float_6s_ease-in-out_infinite]">
              <path d="M -70 20 L 0 50 L 70 20 L 0 -10 Z" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
              <path d="M -70 -20 L 0 10 L 70 -20 L 0 -50 Z" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.6" />
              <circle cx="0" cy="-30" r="2" fill="currentColor" />
            </g></g>
          </svg>
        );
      case 'reasoning':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible opacity-70">
            <g transform="translate(200, 150)">
               <path d="M 0 -80 L 0 -20 L 60 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="animate-pulse" />
               <circle cx="0" cy="-20" r="6" fill="currentColor" />
            </g>
          </svg>
        );
      case 'skill':
        return (
          <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible opacity-70">
            <g transform="translate(200, 150)">
               <circle r="60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="animate-[spin_12s_linear_infinite]" opacity="0.4" />
               <rect x="-15" y="-15" width="30" height="30" rx="4" fill="currentColor" className="animate-pulse" />
            </g>
          </svg>
        );
      default: return null;
    }
  };

  return (
    <div className={`group relative aspect-square rounded-[24px] md:rounded-[28px] p-6 md:p-10 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:shadow-2xl ${isDark ? 'bg-black text-white' : 'bg-gray-50 border border-gray-100 text-black'}`}>
      <div className="relative z-10">
        <h3 className="text-xl md:text-3xl font-medium tracking-tight mb-2 md:mb-4">{title}</h3>
        <p className={`text-xs md:text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
      </div>
      <div className="relative z-10">
        <p className={`text-[8px] md:text-[10px] font-bold uppercase tracking-widest ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>{keywords}</p>
      </div>
      <div className={`absolute bottom-0 left-0 right-0 h-1/2 ${isDark ? 'text-white' : 'text-black'}`}>{renderAnimation()}</div>
    </div>
  );
};

const RecognitionCard: React.FC<{ icon: string; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="flex-shrink-0 w-[80vw] md:w-[380px] bg-white border border-gray-100 rounded-[24px] md:rounded-3xl p-6 md:p-8 flex flex-col h-full">
        <div className="text-xl md:text-3xl font-bold text-black mb-4 md:mb-6 tracking-tight leading-tight">{icon}</div>
        <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-2 md:mb-3">{title}</h4>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
);

const RecognitionMarquee: React.FC<{ title: string; cards: any[]; speed?: number }> = ({ title, cards, speed = 60 }) => {
    if (!Array.isArray(cards) || cards.length === 0) return null;
    const animationName = `marquee-scroll-${speed}`;
    return (
        <section className="py-12 md:py-20 overflow-hidden">
             <style>{`
                @keyframes ${animationName} { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                .animate-${animationName} { animation: ${animationName} ${speed}s linear infinite; }
            `}</style>
            <header className="max-w-7xl mx-auto px-6 mb-8 md:mb-12">
                <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-gray-900">{title}</h2>
            </header>
            <div className="relative w-full">
                <div className="flex whitespace-nowrap overflow-hidden">
                    <div className={`flex w-max animate-${animationName}`}>
                        {[...cards, ...cards].map((card, index) => (
                            <div key={index} className="mx-3 md:mx-4 w-[80vw] md:w-[380px] flex-shrink-0 whitespace-normal py-2 md:py-4"> 
                                <RecognitionCard icon={card.icon} title={card.title} description={card.description} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-gray-50/90 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-gray-50/90 to-transparent z-10" />
            </div>
        </section>
    );
};

const ProductsPage: React.FC<ProductsPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  
  const techCards = Array.isArray(t('products_page.recognition.tech.cards')) ? t('products_page.recognition.tech.cards') : [];
  const industryCards = Array.isArray(t('products_page.recognition.industry.cards')) ? t('products_page.recognition.industry.cards') : [];
  const publicCards = Array.isArray(t('products_page.recognition.public.cards')) ? t('products_page.recognition.public.cards') : [];

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-500">
      <style>{` @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } } `}</style>
      <section className="pt-28 md:pt-40 pb-12 md:pb-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="block text-xs font-medium text-gray-500 uppercase tracking-[0.2em] mb-6 md:mb-8">{t('products_page.eyebrow')}</span>
          <h1 className="text-3xl md:text-[52px] font-medium tracking-tighter text-black mb-6 md:mb-8 leading-tight">{t('products_page.title')}</h1>
          <p className="text-base md:text-xl text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed">{t('products_page.subtitle')}</p>
        </div>
      </section>
      <div className="border-b border-gray-100 pb-10">
        <AgentGrid onProductSelect={(id) => onNavigate('product', id)} />
      </div>
      <div className="bg-gray-50/70 border-t border-gray-100">
        <RecognitionMarquee title={t('products_page.recognition.tech.title')} cards={techCards} speed={40} />
        <RecognitionMarquee title={t('products_page.recognition.industry.title')} cards={industryCards} speed={35} />
        <RecognitionMarquee title={t('products_page.recognition.public.title')} cards={publicCards} speed={45} />
      </div>
      <section className="py-16 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center mb-10"><p className="text-[10px] font-bold text-black uppercase tracking-widest">{t('common.trustedBy')}</p></div>
        <LogoMarquee />
      </section>
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-10 leading-snug">{t('product_detail.ctaTitle')}</h2>
          <button onClick={() => onNavigate('contact' as any)} className="bg-white text-black px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-200 transition-all shadow-lg">{t('product_detail.ctaButton')}</button>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
