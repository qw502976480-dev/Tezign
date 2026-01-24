
import React from 'react';
import { ICONS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import { LEGAL_DOCS } from '../../data/legalDocs';

interface LegalPageProps {
  onNavigate: (page: 'home' | 'legal' | 'legalDetail', id?: string) => void;
}

const LegalCategoryCard: React.FC<{ title: string; description: string; anchorId: string; }> = ({ title, description, anchorId }) => (
    <a href={`#${anchorId}`} onClick={(e) => {
        e.preventDefault();
        const element = document.getElementById(anchorId);
        if (element) {
            const yOffset = -100;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }} className="group block bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-300 hover:-translate-y-1">
        <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-3 tracking-tight">{title}</h3>
        <p className="text-gray-500 leading-relaxed text-sm">{description}</p>
    </a>
);

const LegalPage: React.FC<LegalPageProps> = ({ onNavigate }) => {
    const { t, language } = useLanguage();
    
    const categories = t('legal_page.categories');
    const categoryAnchorIds = ['privacy', 'terms', 'security'];

    return (
        <div className="bg-white min-h-screen animate-in fade-in duration-500">
            <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 bg-white border-b border-gray-100">
                <div className="relative max-w-5xl mx-auto text-center z-10">
                    <span className="block text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-8">
                        {t('legal_page.eyebrow')}
                    </span>
                    <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-black mb-8 leading-[1.15] whitespace-pre-line">
                        {t('legal_page.title')}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
                        {t('legal_page.subtitle')}
                    </p>
                </div>
            </section>

            <section className="py-20 md:py-24 max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {Array.isArray(categories) && categories.map((cat: any, index: number) => (
                        <LegalCategoryCard 
                            key={index}
                            title={cat.title}
                            description={cat.description}
                            anchorId={categoryAnchorIds[index]}
                        />
                    ))}
                </div>
            </section>

            <section className="py-20 md:py-24 max-w-5xl mx-auto px-6 border-t border-gray-100">
                <header className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900">
                        {t('legal_page.documents_title')}
                    </h2>
                </header>
                <div className="space-y-4">
                    {LEGAL_DOCS.map((doc, index) => {
                        const title = doc.title[language] || doc.title.zh;
                        const dateStr = doc.effectiveDate[language] || doc.effectiveDate.zh;
                        
                        return (
                            <div 
                                key={doc.slug} 
                                id={categoryAnchorIds[index] || doc.slug} 
                                onClick={() => onNavigate('legalDetail', doc.slug)}
                                className="group flex items-center justify-between py-6 border-b border-gray-100 last:border-b-0 cursor-pointer hover:bg-gray-50/50 transition-colors px-4 rounded-xl -mx-4"
                            >
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900 mb-1">{title}</h3>
                                    <p className="text-sm text-gray-400 font-mono">{dateStr}</p>
                                </div>
                                <div className="flex items-center space-x-3 text-sm font-semibold text-gray-500 hover:text-black transition-colors">
                                    <span>{t('common.learnMore')}</span>
                                    <ICONS.ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity group-hover:translate-x-1" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

        </div>
    );
};

export default LegalPage;
