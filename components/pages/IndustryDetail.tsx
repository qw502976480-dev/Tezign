
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { IndustryCase, IndustryContentBlock } from '../../types';
import { ICONS } from '../../constants';
import ArticleLayout, { RelatedItem } from '../layout/ArticleLayout';
import SmartImage from '../ui/SmartImage';

const IndustryDetail: React.FC<{ 
  industryId: string;
  onNavigate: (page: any, id?: string) => void;
}> = ({ industryId, onNavigate }) => {
  const { t, language } = useLanguage();
  
  const rawStudies = t('industry_cases');
  const allStudies = Array.isArray(rawStudies) ? (rawStudies as IndustryCase[]) : [];
  const study = allStudies.find(s => s.id === industryId);

  if (!study) return null;

  const relatedItems: RelatedItem[] = allStudies
    .filter(s => s.id !== industryId)
    .sort((a, b) => (a.industry === study.industry ? -1 : 1))
    .slice(0, 3)
    .map(s => ({
      id: s.id,
      title: s.title,
      categoryLabel: s.subIndustry || t(`nav.dropdowns.items.${s.industry}`),
      date: '2026-01-10',
      image: s.imageUrl,
      page: 'industryDetail',
      pageId: s.id
    }));

  const sidebarExtra = (
    <div className="bg-gray-50 rounded-[24px] p-8 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">{t('nav.dropdowns.about')}</h3>
      </div>
      <div className="mb-6">
        <span className="text-3xl font-bold tracking-tight text-gray-900 block mb-2">{study.logo}</span>
        {study.logoSub && <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">{study.logoSub}</span>}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">
        {study.companyDescription || 'A leading innovator in their field, transforming operations through intelligent systems.'}
      </p>
    </div>
  );

  return (
    <ArticleLayout
      title={study.title}
      subtitle={study.content?.statement || study.title}
      category={study.subIndustry || t(`nav.dropdowns.items.${study.industry}`)}
      date="2026-01-10"
      readTime={language === 'zh' ? '8 分钟阅读' : '8 min read'}
      onBack={() => onNavigate('industries')}
      onNavigate={onNavigate}
      relatedItems={relatedItems}
      sidebarExtra={sidebarExtra}
    >
      {(study.content?.blocks || []).map((block: IndustryContentBlock, idx: number) => {
        if (block.type === 'heading') return <h2 key={idx}>{block.text}</h2>;
        if (block.type === 'paragraph') return <p key={idx}>{block.text}</p>;
        if (block.type === 'quote') return <blockquote key={idx} className="my-8"><p className="text-xl md:text-2xl font-medium">{block.text}</p>{block.author && <cite className="block mt-4 text-sm text-gray-500">— {block.author}</cite>}</blockquote>;
        if (block.type === 'image') return <SmartImage key={idx} src={block.src} alt={block.alt} className="w-full h-auto rounded-2xl md:rounded-3xl" />;
        return null;
      })}
    </ArticleLayout>
  );
};

export default IndustryDetail;
