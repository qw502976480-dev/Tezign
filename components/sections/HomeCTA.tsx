
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import Orb from '../ui/Orb';

interface HomeCTAProps {
  onNavigate: (page: 'home' | 'product' | 'products' | 'company' | 'industryDetail' | 'industries' | 'updates' | 'updateDetail' | 'resources' | 'myCollection' | 'legal' | 'careers' | 'contact', id?: string) => void;
}

const HomeCTA: React.FC<HomeCTAProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-36 bg-black border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-80">
        <Orb 
          hue={0} 
          hoverIntensity={0.6}
          rotateOnHover={true}
          forceHoverState={false}
          backgroundColor="#000000"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="block text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700">
          {t('home_cta.eyebrow')}
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-12 tracking-tight leading-[1.2] animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 drop-shadow-2xl whitespace-pre-line">
          {t('home_cta.title')}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
          <button 
            onClick={() => onNavigate('contact')}
            className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] hover:-translate-y-1"
          >
            {t('home_cta.contact')}
          </button>
          <button 
            onClick={() => onNavigate('products')}
            className="w-full sm:w-auto px-10 py-4 bg-transparent text-white border border-white/30 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-white/10 transition-all hover:border-white"
          >
            {t('home_cta.explore')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeCTA;
