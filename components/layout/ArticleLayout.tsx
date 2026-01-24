
import React, { useState } from 'react';
import { ICONS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import SmartImage from '../ui/SmartImage';

export interface RelatedItem {
  id: string;
  title: string;
  categoryLabel: string;
  date: string;
  image: string;
  page: any;
  pageId?: string;
}

interface ArticleLayoutProps {
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readTime: string;
  onBack: () => void;
  onNavigate: (page: any, id?: string) => void;
  relatedItems: RelatedItem[];
  sidebarExtra?: React.ReactNode;
  bottomContent?: React.ReactNode;
  children: React.ReactNode;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({
  title,
  subtitle,
  category,
  date,
  readTime,
  onBack,
  onNavigate,
  relatedItems,
  sidebarExtra,
  bottomContent,
  children
}) => {
  const { language, t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const labels = {
    en: {
      back: 'Back',
      audio: 'Audio Insight',
      listen: 'Listen to this content',
      related: 'Related Recommendations',
      cat: 'Category',
      date: 'Date',
      time: 'Read Time',
      more: 'Learn More',
      share: 'Share Page',
      copied: 'Link Copied',
    },
    zh: {
      back: '返回',
      audio: '语音导览',
      listen: '收听本条内容',
      related: '相关推荐',
      cat: '分类',
      date: '发布日期',
      time: '阅读时间',
      more: '了解更多',
      share: '分享本页',
      copied: '链接已复制',
    }
  }[language];

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
        navigator.clipboard.writeText(window.location.href).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-20 md:pt-24 pb-12 md:pb-20 animate-in fade-in duration-500">
      {/* 1. Header Section */}
      <section className="max-w-[1440px] mx-auto px-6 mb-10 md:mb-16">
        <button 
          onClick={onBack} 
          className="mb-8 md:mb-10 flex items-center space-x-2 text-gray-400 hover:text-black transition-colors group"
        >
          <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-black transition-all">
            <ICONS.ChevronLeft className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-widest uppercase">{labels.back}</span>
        </button>

        <div className="max-w-5xl">
          <h1 className="text-3xl md:text-6xl font-medium text-gray-900 leading-tight mb-6 md:mb-8 tracking-tight">
            {title}
          </h1>
          <p className="text-base md:text-2xl text-gray-500 font-light leading-relaxed max-w-3xl">
            {subtitle}
          </p>
        </div>
      </section>

      {/* 2. Main Body Grid */}
      <section className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 relative">
          
          {/* Left Column: Content & Audio */}
          <div className="lg:col-span-8 min-w-0">
            {/* Audio Insight Bar */}
            <div className="border-y border-gray-100 py-3 md:py-4 mb-8 md:mb-10 flex items-center gap-4 group">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isPlaying ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black hover:bg-black'}`}
              >
                {isPlaying ? (
                  <div className="flex space-x-0.5">
                    <div className="w-0.5 h-3 bg-current animate-[bounce_1s_infinite]"></div>
                    <div className="w-0.5 h-3 bg-current animate-[bounce_1s_infinite_0.2s]"></div>
                  </div>
                ) : (
                  <ICONS.Play className="w-4 h-4 ml-0.5" />
                )}
              </button>
              <div className="flex-grow min-w-0">
                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">{labels.audio}</div>
                <div className="text-xs md:text-sm font-medium text-gray-900 truncate">{labels.listen}</div>
              </div>
              <div className="text-[10px] font-mono text-gray-400 flex-shrink-0">05:30</div>
            </div>

            {/* Article Body (Swiss Style System) */}
            <div className="tz-article">
              <style>{`
                .tz-article{
                  --tz-text: rgba(17,24,39,.78);
                  --tz-title: rgba(17,24,39,1);
                  --tz-muted: rgba(17,24,39,.52);
                  --tz-rule: rgba(17,24,39,.08);
                  --tz-accent: rgba(17,24,39,.9);
                  --tz-max: 860px;
                }
                .tz-article .tz-prose{
                  max-width: var(--tz-max);
                  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif;
                  color: var(--tz-text);
                  font-size: 15px;
                  line-height: 1.95;
                  letter-spacing: 0.01em;
                }
                .tz-article .tz-prose p{
                  margin: 0 0 18px 0;
                }
                .tz-article .tz-prose h2{
                  color: var(--tz-title);
                  font-weight: 700;
                  font-size: 28px;
                  line-height: 1.18;
                  letter-spacing: -0.03em;
                  margin: 54px 0 16px 0;
                }
                .tz-article .tz-prose h3{
                  color: var(--tz-title);
                  font-weight: 700;
                  font-size: 18px;
                  line-height: 1.3;
                  letter-spacing: -0.02em;
                  margin: 34px 0 12px 0;
                }
                .tz-article .tz-prose hr{
                  border: none;
                  height: 1px;
                  background: var(--tz-rule);
                  margin: 34px 0;
                }
                .tz-article .tz-prose ul,
                .tz-article .tz-prose ol{
                  margin: 0 0 20px 0;
                  padding-left: 18px;
                }
                .tz-article .tz-prose li{
                  margin: 8px 0;
                }
                .tz-article .tz-prose li::marker{
                  color: rgba(17,24,39,.55);
                }
                .tz-article .tz-prose blockquote{
                  margin: 34px 0;
                  padding: 14px 0 14px 18px;
                  border-left: 3px solid rgba(17,24,39,.18);
                  color: var(--tz-accent);
                  font-weight: 600;
                  font-size: 18px;
                  line-height: 1.55;
                  letter-spacing: -0.01em;
                }
                .tz-article .tz-prose blockquote p{
                  margin: 0;
                }
                .tz-article .tz-prose cite,
                .tz-article .tz-prose em{
                  color: var(--tz-muted);
                }
                .tz-article .tz-prose strong{
                  color: rgba(17,24,39,.92);
                  font-weight: 700;
                }
                .tz-article .tz-prose img{
                  width: 100%;
                  height: auto;
                  border-radius: 28px;
                  margin: 26px 0;
                }
                .tz-article .tz-prose a{
                  color: rgba(17,24,39,.85);
                  text-decoration: underline;
                  text-decoration-color: rgba(17,24,39,.25);
                  text-underline-offset: 3px;
                }
                .tz-article .tz-prose a:hover{
                  text-decoration-color: rgba(17,24,39,.5);
                }
                .tz-article .tz-prose code{
                  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
                  font-size: 0.95em;
                  background: rgba(17,24,39,.05);
                  padding: 0.1em 0.35em;
                  border-radius: 10px;
                  color: rgba(17,24,39,.82);
                }
                .tz-article .tz-prose pre{
                  margin: 24px 0;
                  padding: 16px 18px;
                  border-radius: 18px;
                  background: rgba(17,24,39,.05);
                  overflow: auto;
                }
                .tz-article .tz-prose pre code{
                  background: transparent;
                  padding: 0;
                }
                @media (max-width: 640px){
                  .tz-article .tz-prose{
                    font-size: 14px;
                    line-height: 1.85;
                    max-width: 100%;
                  }
                  .tz-article .tz-prose h2{
                    font-size: 24px;
                    margin-top: 44px;
                  }
                  .tz-article .tz-prose blockquote{
                    font-size: 16px;
                  }
                }
              `}</style>

              <div className="tz-prose">
                {children}
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-4 relative order-first lg:order-last">
            <div className="lg:sticky lg:top-32 space-y-6 md:space-y-10">
              <div className="bg-white border border-gray-100 rounded-[20px] md:rounded-[24px] p-6 md:p-8 shadow-sm">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 md:mb-2">{labels.cat}</h4>
                    <p className="text-xs md:text-sm font-medium text-gray-900">{category}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 md:mb-2">{labels.date}</h4>
                    <p className="text-xs md:text-sm font-medium text-gray-900">{date}</p>
                  </div>
                  <div className="col-span-2 lg:col-span-1 border-t border-gray-50 pt-4 hidden lg:block"></div>
                  <div className="col-span-2 lg:col-span-1">
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1 md:mb-2">{labels.time}</h4>
                    <p className="text-xs md:text-sm font-medium text-gray-900">{readTime}</p>
                  </div>
                </div>
              </div>
              {sidebarExtra && (
                <div className="animate-in fade-in duration-700">
                  {sidebarExtra}
                </div>
              )}

              {/* NEW SHARE BUTTON */}
              <div 
                onClick={handleCopyLink}
                className={`bg-white border ${isCopied ? 'border-black' : 'border-gray-100 hover:border-gray-300'} rounded-[20px] md:rounded-[24px] p-6 md:p-8 shadow-sm cursor-pointer transition-all duration-300 group`}
              >
                 <div className="flex items-center justify-between">
                    <div>
                        <h4 className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${isCopied ? 'text-black' : 'text-gray-400 group-hover:text-black transition-colors'}`}>
                            {isCopied ? labels.copied : labels.share}
                        </h4>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isCopied ? 'bg-black text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-black group-hover:text-white'}`}>
                        {isCopied ? <ICONS.Check className="w-5 h-5" /> : <ICONS.Link className="w-5 h-5" />}
                    </div>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2.5 Optional Bottom Content */}
      {bottomContent && (
        <div className="mt-16 md:mt-20">
          {bottomContent}
        </div>
      )}

      {/* 3. Related Recommendations */}
      {relatedItems.length > 0 && (
        <section className="max-w-[1440px] mx-auto px-6 mt-20 md:mt-32 pt-12 md:pt-20 border-t border-gray-100">
          <h2 className="text-2xl md:text-4xl font-medium text-gray-900 tracking-tight mb-8 md:mb-12">{labels.related}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {relatedItems.map((item) => (
              <div 
                key={item.id}
                onClick={() => onNavigate(item.page, item.pageId)}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] rounded-[20px] md:rounded-[24px] overflow-hidden mb-4 md:mb-6 bg-gray-50 shadow-sm transition-all duration-500 group-hover:shadow-xl">
                  <SmartImage src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                    <span>{item.categoryLabel}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 leading-snug group-hover:text-black line-clamp-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ArticleLayout;
