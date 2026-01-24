
import React, { useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { NEWS_IMAGES_MAP, CRITICAL_ASSETS, ICONS } from '../../constants';
import { ContentBlock } from '../../types';
import ArticleLayout from '../layout/ArticleLayout';
import { getNewsByLanguage } from '../../content/updatesIndex';
import { SPECIAL_PAGES } from '../../content/specialPages';
import SmartImage from '../ui/SmartImage';

const DISALLOWED_IMAGES = new Set(['https://i.imgs.ovh/2025/12/29/C1c7gU.jpeg']);

function pickCoverForList(ids: string[], pool: string[], fixedMap: Record<string,string>, bannedSet?: Set<string>) {
    const safePool = (pool || []).filter(u => u && (!bannedSet || !bannedSet.has(u)));
    const result: Record<string,string> = {};
    let prev = '';
    let cursor = 0;

    for (const id of ids) {
      const fixed = fixedMap[id];
      if (fixed && (!bannedSet || !bannedSet.has(fixed))) {
        result[id] = fixed;
        prev = fixed;
        continue;
      }

      if (!safePool.length) {
        result[id] = '';
        prev = '';
        continue;
      }

      let chosen = '';
      let attempts = 0;
      while (attempts < safePool.length) {
        const candidate = safePool[cursor % safePool.length];
        cursor++;
        attempts++;
        if (candidate !== prev) {
          chosen = candidate;
          break;
        }
      }
      result[id] = chosen || safePool[(cursor - 1) % safePool.length];
      prev = result[id];
    }

    return result;
}

const UpdateDetail: React.FC<{ 
  updateId: string;
  onNavigate: (page: any, id?: string) => void;
}> = ({ updateId, onNavigate }) => {
  const { t, language } = useLanguage();
  const newsMap = getNewsByLanguage(language as 'en' | 'zh');
  
  const contentItem = newsMap[updateId];
  
  if (!contentItem) {
     return (
        <div className="min-h-screen flex items-center justify-center bg-white">
           <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Content Not Found</h2>
              <button 
                onClick={() => onNavigate('updates')}
                className="text-sm font-bold uppercase tracking-widest border-b border-black pb-1 hover:opacity-60"
              >
                Return to Updates
              </button>
           </div>
        </div>
     );
  }

  // --- Dynamic Configuration for Special Pages ---
  const specialConfig = SPECIAL_PAGES[updateId];
  
  let displayCategory = contentItem.category ? t(`nav.dropdowns.items.${contentItem.category}`) : 'Update';
  if (specialConfig?.categoryOverride) {
    displayCategory = specialConfig.categoryOverride[language];
  }

  const category = contentItem.category;
  const blocks: ContentBlock[] = Array.isArray(contentItem.content) ? contentItem.content : [];

  const relatedItems = useMemo(() => {
    const allCategoryIds = Object.keys(newsMap).filter(key => newsMap[key].category === category);
    const candidates = allCategoryIds.filter(id => id !== updateId).slice(0, 3);
    const covers = pickCoverForList(candidates, CRITICAL_ASSETS.updates, NEWS_IMAGES_MAP, DISALLOWED_IMAGES);

    return candidates.map(id => ({
      id,
      title: newsMap[id]?.title || id,
      categoryLabel: t(`nav.dropdowns.items.${newsMap[id].category}`),
      date: newsMap[id]?.date || '',
      image: covers[id] || '',
      page: 'updateDetail',
      pageId: id
    }));
  }, [category, newsMap, t, updateId]);

  // --- Render Special Sidebar & Bottom Content ---
  let sidebarExtra: React.ReactNode = null;
  let bottomContent: React.ReactNode = null;

  if (specialConfig) {
    const { sidebar, cta } = specialConfig;
    
    // Sidebar Component
    sidebarExtra = (
      <div className="bg-gray-50 rounded-[20px] p-6 border border-gray-100 mt-6 shadow-sm">
        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
          {sidebar.label[language]}
        </h4>
        <h3 className="text-base font-bold text-gray-900 mb-4 leading-snug">
          {sidebar.title[language]}
        </h3>
        
        {sidebar.action.type === 'navigate' ? (
          <button 
            onClick={() => onNavigate(sidebar.action.target, sidebar.action.id)}
            className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-black border-b border-black/20 pb-0.5 hover:border-black hover:opacity-80 transition-all group"
          >
            <span>{sidebar.buttonText[language]}</span>
            <ICONS.ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </button>
        ) : (
          <a 
            href={sidebar.action.target as string}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-black border-b border-black/20 pb-0.5 hover:border-black hover:opacity-80 transition-all group w-fit"
          >
            <span>{sidebar.buttonText[language]}</span>
            <ICONS.ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
          </a>
        )}
      </div>
    );

    // Bottom CTA Component
    bottomContent = (
      <section className="py-20 bg-gray-50 rounded-[32px] text-center border border-gray-100">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium mb-8 text-gray-900 tracking-tight">
            {cta.title[language]}
          </h2>
          <button 
            onClick={() => onNavigate(cta.action.target)}
            className="bg-black text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {cta.button[language]}
          </button>
        </div>
      </section>
    );
  }

  return (
    <ArticleLayout
      title={contentItem.title}
      subtitle={contentItem.subtitle}
      category={displayCategory}
      date={contentItem.date}
      readTime={language === 'zh' ? '4 分钟阅读' : '4 min read'}
      onBack={() => onNavigate('updates')}
      onNavigate={onNavigate}
      relatedItems={relatedItems}
      sidebarExtra={sidebarExtra}
      bottomContent={bottomContent}
    >
      {blocks.map((block, idx) => {
        if (block.type === 'heading') return <h2 key={idx}>{block.text}</h2>;
        if (block.type === 'paragraph') return <p key={idx}>{block.text}</p>;
        if (block.type === 'quote') return <blockquote key={idx} className="my-8"><p className="text-xl md:text-2xl font-medium">{block.text}</p>{block.author && <cite className="block mt-4 text-sm text-gray-500">— {block.author}</cite>}</blockquote>;
        if (block.type === 'image') return <SmartImage key={idx} src={block.src} alt={block.alt} className="w-full h-auto rounded-2xl md:rounded-3xl" />;
        return null;
      })}
    </ArticleLayout>
  );
};

export default UpdateDetail;
