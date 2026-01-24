
import React from 'react';
import { ICONS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import { CAREERS_ZH } from '../../content/careers.zh';
import { CAREERS_EN } from '../../content/careers.en';

interface CareersPageProps {
  onNavigate: (page: 'home' | 'product' | 'company' | 'industryDetail' | 'industries' | 'updates' | 'resources', id?: string) => void;
}

const CareerIcons = {
  Iteration: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
      <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
      <path d="M16 21h5v-5" />
    </svg>
  ),
  Constructive: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <line x1="8" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="12" y2="14" />
    </svg>
  ),
  Customer: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  AI: (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M9 5H5" />
    </svg>
  )
};

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
    <div className="group relative bg-white border border-gray-100 rounded-[28px] p-8 md:p-10 flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-gray-200 hover:-translate-y-2 h-full">
        <div className="absolute top-8 right-8 text-gray-200 transition-colors duration-500 group-hover:text-black">
            {icon}
        </div>
        
        <h3 className="text-xl md:text-2xl font-medium text-gray-900 mb-6 mt-8 tracking-tight whitespace-pre-line leading-snug pr-12">
            {title}
        </h3>
        
        <p className="text-gray-500 leading-relaxed text-sm whitespace-pre-line">
            {desc}
        </p>
    </div>
);

const CareersPage: React.FC<CareersPageProps> = ({ onNavigate }) => {
  const { language } = useLanguage();
  
  const content = language === 'zh' ? CAREERS_ZH : CAREERS_EN;

  const icons = [
    <CareerIcons.Iteration className="w-10 h-10 md:w-12 md:h-12" />,
    <CareerIcons.Constructive className="w-10 h-10 md:w-12 md:h-12" />,
    <CareerIcons.Customer className="w-10 h-10 md:w-12 md:h-12" />,
    <CareerIcons.AI className="w-10 h-10 md:w-12 md:h-12" />
  ];

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-500">
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
          <span className="block text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-8">
            {content.eyebrow}
          </span>
          <h1 className="text-5xl md:text-6xl font-semibold text-black tracking-tighter mb-12 leading-tight md:leading-[1.15] whitespace-pre-line">
            {content.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal max-w-4xl mx-auto whitespace-pre-line">
            {content.subtitle}
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50/70 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-20">
                <span className="block text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-6">
                    {content.values_title}
                </span>
                <p className="text-xl text-gray-900 leading-relaxed font-light whitespace-pre-line">
                    {content.values_intro}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {content.values_list.map((item, index) => (
                    <ValueCard 
                        key={index}
                        icon={icons[index % icons.length]}
                        title={item.title}
                        desc={item.desc}
                    />
                ))}
            </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 tracking-tight mb-10">
                {content.roles_title}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed font-light mb-16 whitespace-pre-line">
                {content.roles_desc}
            </p>
            <a 
                href="https://tezign.jobs.feishu.cn/index/position/list" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-black text-white px-12 py-5 rounded-full font-bold text-sm hover:bg-gray-800 transition-all uppercase tracking-widest shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
                {content.cta}
            </a>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
