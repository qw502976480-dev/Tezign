
import React, { useState, useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getInsightsByLanguage } from '../../content/insightsIndex';
import { ICONS } from '../../constants';

interface IndustryInsightsPageProps {
  onNavigate: (page: 'home' | 'contact', id?: string) => void;
  initialFilter?: string;
}

const IndustryInsightsPage: React.FC<IndustryInsightsPageProps> = ({ onNavigate, initialFilter }) => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter || 'all');

  const insights = useMemo(() => getInsightsByLanguage(language as 'en' | 'zh'), [language]);

  const filters = [
    { key: 'all', label: t('insights_page.filters.all') },
    { key: 'whitepaper', label: t('insights_page.filters.whitepaper') },
    { key: 'report', label: t('insights_page.filters.report') }
  ];

  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return insights;
    return insights.filter(item => item.type === activeFilter);
  }, [activeFilter, insights]);

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-500 pb-24">
      
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 bg-white">
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <span className="block text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-8">
            {t('insights_page.eyebrow')}
          </span>
          <h1 className="text-4xl md:text-[52px] font-medium tracking-tighter text-black mb-8 leading-[1.15]">
            {t('insights_page.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed">
            {t('insights_page.subtitle')}
          </p>
        </div>
      </section>

      <section className="sticky top-14 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100 py-4">
         <div className="max-w-5xl mx-auto px-6 overflow-x-auto no-scrollbar">
            <div className="flex space-x-2 md:space-x-4 min-w-max">
               {filters.map(filter => (
                 <button 
                   key={filter.key}
                   onClick={() => setActiveFilter(filter.key)}
                   className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
                     activeFilter === filter.key 
                       ? 'bg-black text-white' 
                       : 'bg-gray-50 text-gray-500 hover:bg-gray-100 hover:text-black'
                   }`}
                 >
                   {filter.label}
                 </button>
               ))}
            </div>
         </div>
      </section>

      <section className="py-16 md:py-24 max-w-5xl mx-auto px-6 min-h-[60vh]">
        <div className="space-y-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group border-b border-gray-100 pb-12 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-black uppercase tracking-widest">
                    {item.type === 'whitepaper' ? t('insights_page.filters.whitepaper') : t('insights_page.filters.report')}
                  </span>
                  <span className="text-[10px] text-gray-400 font-mono">
                    {item.date}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12">
                <div className="md:col-span-3">
                  <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-4 group-hover:text-black transition-colors cursor-pointer">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-500 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>
                
                <div className="md:col-span-1 flex md:justify-end items-start md:items-center">
                   <button className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-black border-b border-black/20 pb-1 group-hover:border-black transition-all">
                     <span>{t('common.learnMore')}</span>
                     <ICONS.ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                   </button>
                </div>
              </div>
            </div>
          ))}

          {filteredItems.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              No items found.
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default IndustryInsightsPage;
