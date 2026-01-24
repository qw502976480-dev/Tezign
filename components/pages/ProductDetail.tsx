
import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ICONS, PRODUCT_DETAILS_DATA } from '../../constants';
import TestimonialCarousel from '../ui/TestimonialCarousel';
import LogoMarquee from '../ui/LogoMarquee';
import { motion } from 'framer-motion';
import SmartImage from '../ui/SmartImage';
import { StaggerWrapper, StaggerItem } from '../ui/StaggerWrapper';

interface ProductDetailProps {
  productId: string;
  onBack: () => void;
  onNavigate: (page: any, id?: string) => void;
}

// Map product IDs to their English "Vibe" keywords
const VIBE_MAP: Record<string, string> = {
  'market': 'Insight',
  'expert': 'Expert',
  'growth': 'Growth',
  'innovation': 'Innovation',
  'social': 'Social',
  'revenue': 'Revenue',
  'dam': 'DAM'
};

const ProductDetail: React.FC<ProductDetailProps> = ({ productId, onBack, onNavigate }) => {
  const { t, language } = useLanguage();
  
  const productKey = productId || 'market'; 
  const product = PRODUCT_DETAILS_DATA[productKey];

  if (!product) return null;

  const tProduct = t(`product_details.${productKey}`);
  const name = tProduct?.name || product.name;
  const statement = tProduct?.statement || product.statement;
  const description = tProduct?.description || product.description;
  const features = tProduct?.features || product.features || [];
  const testimonials = product.testimonials || [];

  const englishVibe = VIBE_MAP[productKey] || '';

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-500">
      {/* 1. Hero Section */}
      <section className="pt-24 pb-20 md:pt-32 md:pb-24 px-6 md:px-12 max-w-[1440px] mx-auto">
        <button 
          onClick={onBack} 
          className="mb-12 flex items-center space-x-2 text-gray-400 hover:text-black transition-colors group"
        >
          <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-black transition-all">
            <ICONS.ChevronLeft className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold tracking-widest uppercase">{language === 'zh' ? '返回' : 'Back'}</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold rounded-full uppercase tracking-wider mb-8">
                {t('product_detail.badge')}
              </span>
              <h1 className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight tracking-tighter mb-6">
                {name}
              </h1>
              <p className="text-xl md:text-3xl text-[#1a365d] font-normal leading-snug mb-8">
                {statement}
              </p>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed font-light max-w-xl">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button 
                onClick={() => onNavigate('contact')}
                className="px-8 py-3.5 bg-black text-white rounded-full font-bold text-sm hover:bg-gray-800 transition-all shadow-lg active:scale-95 w-full sm:w-auto"
              >
                {t('product_detail.deployButton')}
              </button>
              <button 
                className="px-8 py-3.5 bg-white text-gray-900 border border-gray-200 rounded-full font-bold text-sm hover:bg-gray-50 transition-all active:scale-95 w-full sm:w-auto"
              >
                {t('product_detail.demoButton')}
              </button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative mt-8 lg:mt-0"
          >
             <div className="aspect-[4/3] rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 relative group">
               <SmartImage 
                  src={product.imageUrl} 
                  alt={name}
                  className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" 
               />
               {/* English Vibe Overlay - Adjusted font size for mobile */}
               {englishVibe && (
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span 
                      className="text-white font-bold text-5xl sm:text-6xl md:text-8xl tracking-tight select-none drop-shadow-2xl"
                      style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
                    >
                      {englishVibe}
                    </span>
                 </div>
               )}
             </div>
             {/* Decorative glow */}
             <div className="absolute -inset-10 bg-blue-500/5 blur-[120px] -z-10 pointer-events-none rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* 2. Core Capabilities Section */}
      <section className="py-24 md:py-32 bg-gray-50/50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 tracking-tight">
              {t('product_detail.capabilitiesTitle')}
            </h2>
          </div>
          
          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            {features.map((feature: any, idx: number) => (
              <StaggerItem key={idx} className="bg-white p-8 md:p-10 rounded-[28px] md:rounded-[32px] border border-gray-100 flex flex-col items-start h-full hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6 md:mb-8">
                  {/* Fallback logic: Use icon from constant data if available (by index), or default */}
                  {product.features[idx]?.icon || <ICONS.Zap className="w-5 h-5" />}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 md:mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">{feature.description}</p>
              </StaggerItem>
            ))}
          </StaggerWrapper>
        </div>
      </section>

      {/* 3. User Evaluation Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[11px] font-bold text-black uppercase tracking-[0.2em]">
              {t('product_detail.testimonialsTitle')}
            </p>
          </div>
          <div className="overflow-visible">
            <TestimonialCarousel testimonials={testimonials} t={t} language={language as 'en' | 'zh'} />
          </div>
        </div>
      </section>

      {/* 4. Logo Wall */}
      <section className="py-20 border-t border-gray-50 bg-white">
        <div className="text-center mb-12">
          <p className="text-[11px] font-bold text-black uppercase tracking-[0.25em]">
            {t('common.trustedBy')}
          </p>
        </div>
        <LogoMarquee />
      </section>

      {/* 5. Bottom CTA */}
      <section className="py-28 md:py-32 bg-black text-white text-center overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-medium mb-12 md:mb-16 tracking-tight leading-tight">
            {t('product_detail.ctaTitle')}
          </h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-black px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-all shadow-2xl active:scale-95 w-full sm:w-auto"
          >
            {t('product_detail.ctaButton')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
