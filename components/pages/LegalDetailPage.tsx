
import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { LEGAL_DOCS } from '../../data/legalDocs';
import { ICONS } from '../../constants';

interface LegalDetailPageProps {
  docId: string;
  onNavigate: (page: 'legal') => void;
}

const LegalDetailPage: React.FC<LegalDetailPageProps> = ({ docId, onNavigate }) => {
  const { language } = useLanguage();
  
  const doc = LEGAL_DOCS.find(d => d.slug === docId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [docId]);

  if (!doc) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">Document Not Found</h2>
        <button 
          onClick={() => onNavigate('legal')} 
          className="px-6 py-3 bg-black text-white rounded-full font-bold text-sm uppercase tracking-widest"
        >
          Return to Legal
        </button>
      </div>
    );
  }

  const title = doc.title[language] || doc.title.zh;
  const effectiveDate = doc.effectiveDate[language] || doc.effectiveDate.zh;
  const sections = doc.content[language] || doc.content.zh;

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-500">
      <div className="max-w-3xl mx-auto px-6 pt-32 md:pt-40 pb-24">
        
        <button 
          onClick={() => onNavigate('legal')}
          className="mb-12 flex items-center space-x-2 text-gray-400 hover:text-black transition-colors group"
        >
          <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center group-hover:border-black transition-all">
            <ICONS.ChevronLeft className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold tracking-widest uppercase">
            {language === 'en' ? 'Back' : '返回'}
          </span>
        </button>

        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-base text-gray-500 font-medium font-mono">
            {effectiveDate}
          </p>
        </header>

        <div className="h-px bg-gray-100 w-full mb-12"></div>

        <article className="prose prose-lg prose-gray max-w-none">
          {sections.map((section, idx) => (
            <section key={idx} className="mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                {section.heading}
              </h2>
              {section.body.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-base md:text-lg text-gray-600 leading-relaxed mb-4 font-light">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>

      </div>
    </div>
  );
};

export default LegalDetailPage;
