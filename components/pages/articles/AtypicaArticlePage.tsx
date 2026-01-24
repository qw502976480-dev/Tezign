
import React from 'react';
import NavArticleRenderer from './NavArticleRenderer';
import { useLanguage } from '../../../context/LanguageContext';
import { ICONS } from '../../../constants';

interface PageProps {
  onBack: () => void;
  onNavigate: (page: any, id?: string) => void;
}

const AtypicaArticlePage: React.FC<PageProps> = (props) => {
  const { language } = useLanguage();

  const labels = {
    en: {
      category: 'Product Update',
      relatedProduct: 'Related Product',
      productName: 'atypica.AI',
      visit: 'Visit Website',
      ctaTitle: 'Ready to start your Enterprise AI journey?',
      ctaButton: 'Contact Us'
    },
    zh: {
      category: '产品更新',
      relatedProduct: '相关产品',
      productName: 'atypica.AI',
      visit: '访问官网',
      ctaTitle: '准备好开启您的企业级 AI 旅程了吗？',
      ctaButton: '联系我们'
    }
  }[language];

  // Custom Sidebar Card for Related Product
  const sidebarExtra = (
    <div className="bg-gray-50 rounded-[20px] p-6 border border-gray-100 mt-6 shadow-sm">
      <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
        {labels.relatedProduct}
      </h4>
      <h3 className="text-base font-bold text-gray-900 mb-4 leading-snug">
        {labels.productName}
      </h3>
      <a 
        href="https://atypica.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-black border-b border-black/20 pb-0.5 hover:border-black hover:opacity-80 transition-all group w-fit"
      >
        <span>{labels.visit}</span>
        <ICONS.ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
      </a>
    </div>
  );

  // Bottom CTA Section
  const bottomContent = (
    <section className="py-20 bg-gray-50 rounded-[32px] text-center border border-gray-100">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gray-900 tracking-tight">
          {labels.ctaTitle}
        </h2>
        <button 
          onClick={() => props.onNavigate('contact')}
          className="bg-black text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
          {labels.ctaButton}
        </button>
      </div>
    </section>
  );

  return (
    <NavArticleRenderer 
      articleKey="atypica" 
      category={labels.category}
      sidebarExtra={sidebarExtra}
      bottomContent={bottomContent}
      {...props} 
    />
  );
};

export default AtypicaArticlePage;
