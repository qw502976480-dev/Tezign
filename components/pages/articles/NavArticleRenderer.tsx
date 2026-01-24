
import React from 'react';
import ArticleLayout from '../../layout/ArticleLayout';
import { useLanguage } from '../../../context/LanguageContext';
import { getNavArticleByLanguage, NavArticleKey } from '../../../content/navArticlesIndex';
import { ICONS } from '../../../constants';
import SmartImage from '../../ui/SmartImage';

interface NavArticleRendererProps {
  articleKey: NavArticleKey;
  onBack: () => void;
  onNavigate: (page: any, id?: string) => void;
  category?: string;
  sidebarExtra?: React.ReactNode;
  bottomContent?: React.ReactNode;
}

const NavArticleRenderer: React.FC<NavArticleRendererProps> = ({ 
  articleKey, 
  onBack, 
  onNavigate, 
  category,
  sidebarExtra,
  bottomContent
}) => {
  const { language } = useLanguage();
  const article = getNavArticleByLanguage(language, articleKey);

  // Default category if not provided
  const displayCategory = category || (language === 'en' ? "Core Product" : "核心产品");

  return (
    <ArticleLayout
      title={article.title}
      subtitle={article.subtitle}
      category={displayCategory}
      date={article.date}
      readTime={article.readTime}
      onBack={onBack}
      onNavigate={onNavigate}
      relatedItems={[]} // Could be populated if needed
      sidebarExtra={sidebarExtra}
      bottomContent={bottomContent}
    >
      {article.blocks.map((block, idx) => {
        switch (block.type) {
          case 'heading':
            return <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">{block.text}</h2>;
          case 'subheading':
            return <h3 key={idx} className="text-xl font-semibold mt-6 mb-3">{block.text}</h3>;
          case 'paragraph':
            return <p key={idx} className="mb-4 text-gray-700 leading-relaxed whitespace-pre-line">{block.text}</p>;
          case 'quote':
            return (
              <blockquote key={idx} className="border-l-4 border-gray-200 pl-4 py-2 my-6 bg-gray-50 rounded-r-lg">
                <p className="text-lg italic font-medium text-gray-800 mb-2">{block.text}</p>
                {block.author && <footer className="text-sm text-gray-500">— {block.author}</footer>}
              </blockquote>
            );
          case 'image':
            return (
               <figure key={idx} className="my-8">
                 <SmartImage src={block.src} alt={block.alt || ''} className="w-full rounded-xl shadow-sm" />
                 {block.alt && <figcaption className="text-center text-sm text-gray-400 mt-2">{block.alt}</figcaption>}
               </figure>
            );
          default:
            return null;
        }
      })}
    </ArticleLayout>
  );
};

export default NavArticleRenderer;
