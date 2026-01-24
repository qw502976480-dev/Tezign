
import React, { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';
import SmartImage from '../ui/SmartImage';

interface IndustryVerticalsProps {
  onNavigate?: (page: 'industries', id: string) => void;
}

const IndustryVerticals: React.FC<IndustryVerticalsProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const verticals = t('home.industry_verticals.items');
  const items = Array.isArray(verticals) ? verticals : [];

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="text-center max-w-4xl mx-auto px-6 mb-16">
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 leading-[1.15]">
          {t('home.industry_verticals.title')}
        </h2>
        <p className="text-lg md:text-xl text-gray-500 mt-6 leading-relaxed font-normal max-w-2xl mx-auto">
          {t('home.industry_verticals.subtitle')}
        </p>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 px-6 pb-10 scrollbar-hide snap-x mandatory"
      >
        {items.map((item: any) => (
          <motion.div
            key={item.key}
            onClick={() => onNavigate && onNavigate('industries', `filter:industry:${item.key}`)}
            className="snap-center shrink-0 w-[280px] md:w-[340px] aspect-[3/4] relative rounded-3xl overflow-hidden group cursor-pointer outline-none ring-0 focus:outline-none focus:ring-0"
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.4 }}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <div className="absolute inset-0">
                <SmartImage 
                    src={item.image} 
                    alt={item.label} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
            </div>
            
            <div className="absolute inset-0 p-8 flex flex-col justify-center items-center text-center">
               <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">
                 {item.label}
               </h3>
            </div>
          </motion.div>
        ))}
        <div className="shrink-0 w-6" />
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default IndustryVerticals;
