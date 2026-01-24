
import React, { useState, useRef, useEffect } from 'react';
import { ICONS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import LogoMarquee from '../ui/LogoMarquee';

interface ContactPageProps {
  onNavigate: (page: 'home', id?: string) => void;
}

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const CustomSelect = ({ label, options, required = true, placeholder = "Select..." }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col space-y-1.5 relative" ref={containerRef}>
      <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">{label} {required && '*'}</label>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 bg-gray-50 border ${isOpen ? 'border-black ring-1 ring-black bg-white' : 'border-gray-200'} rounded-xl text-sm text-left flex items-center justify-between transition-all outline-none hover:bg-gray-100 hover:border-gray-300 group`}
      >
        <span className={`block truncate ${selected ? "text-black font-medium" : "text-gray-400"}`}>
          {selected || placeholder}
        </span>
        <ICONS.ChevronDown className={`w-3 h-3 text-gray-400 flex-shrink-0 transition-transform duration-300 group-hover:text-gray-600 ${isOpen ? 'rotate-180 text-black' : ''}`} />
      </button>

      <input type="hidden" required={required} value={selected} />

      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] z-50 max-h-[280px] overflow-y-auto animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200 p-1.5">
          {options.map((opt: string) => (
            <div
              key={opt}
              onClick={() => {
                setSelected(opt);
                setIsOpen(false);
              }}
              className={`px-4 py-2.5 text-sm rounded-lg cursor-pointer transition-all flex items-center justify-between group ${
                selected === opt 
                  ? 'bg-gray-50 text-black font-semibold' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-black'
              }`}
            >
              <span>{opt}</span>
              {selected === opt && <div className="w-1.5 h-1.5 bg-black rounded-full"></div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const LOCAL_OPTIONS = {
    countries: {
      en: ["China", "United States", "United Kingdom", "Singapore", "Japan", "Other"],
      zh: ["中国", "美国", "英国", "新加坡", "日本", "其他"]
    },
    companySizes: {
      en: ["1-50", "51-200", "201-500", "501-1000", "1000+"],
      zh: ["1-50", "51-200", "201-500", "501-1000", "1000+"]
    },
    industries: {
      en: ["Consumer Goods", "Technology", "Manufacturing", "Finance", "Healthcare", "Other"],
      zh: ["消费品", "科技互联网", "工业制造", "金融服务", "医疗健康", "其他"]
    },
    products: {
      en: ["DAM", "GEA", "atypica", "Muse", "Other"],
      zh: ["DAM", "GEA", "atypica", "Muse", "其他"]
    }
  };

  const currentOptions = {
    countries: language === 'en' ? LOCAL_OPTIONS.countries.en : LOCAL_OPTIONS.countries.zh,
    companySizes: language === 'en' ? LOCAL_OPTIONS.companySizes.en : LOCAL_OPTIONS.companySizes.zh,
    industries: language === 'en' ? LOCAL_OPTIONS.industries.en : LOCAL_OPTIONS.industries.zh,
    products: language === 'en' ? LOCAL_OPTIONS.products.en : LOCAL_OPTIONS.products.zh,
  };

  const localLabels = {
    phone: language === 'en' ? "Phone" : "电话",
    department: language === 'en' ? "Department" : "部门",
    product: language === 'en' ? "Product of Interest" : "想要了解的特赞产品",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const InputField = ({ label, type = "text", placeholder, required = true }: any) => (
    <div className="flex flex-col space-y-1.5">
      <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">{label} {required && '*'}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-1 focus:ring-black focus:border-black transition-all outline-none hover:bg-gray-100 focus:bg-white placeholder:text-gray-400"
      />
    </div>
  );

  const heroPoints = t('contact_page.hero.points');
  const safeHeroPoints = Array.isArray(heroPoints) ? heroPoints : [];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-black pt-28 pb-20 md:pt-40 md:pb-32 px-6 relative">
        
        <button 
            onClick={() => onNavigate('home')} 
            className="absolute top-24 left-6 md:left-10 z-20 flex items-center space-x-3 text-white/50 hover:text-white transition-colors group"
        >
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ICONS.ChevronLeft className="w-4 h-4" />
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase">Back</span>
        </button>

        <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-start">
            
            <div className="text-white pt-12 lg:sticky lg:top-32">
                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter mb-8 leading-tight">
                    {t('contact_page.hero.title')}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-16">
                    {t('contact_page.hero.subtitle')}
                    </p>

                    <div className="space-y-8">
                    <h3 className="text-sm font-bold text-white uppercase tracking-[0.2em] border-b border-gray-800 pb-4">
                        {t('contact_page.hero.value_header')}
                    </h3>
                    <ul className="space-y-6">
                        {safeHeroPoints.map((point: string, idx: number) => (
                        <li key={idx} className="flex items-start space-x-4 group">
                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-white group-hover:text-black transition-colors">
                            <ICONS.ArrowRight className="w-3 h-3" />
                            </div>
                            <span className="text-base md:text-lg text-gray-300 font-light leading-snug group-hover:text-white transition-colors">
                            {point}
                            </span>
                        </li>
                        ))}
                    </ul>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-700">
                {isSubmitted ? (
                    <div className="max-w-md mx-auto text-center py-20">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                        <CheckIcon className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Message Sent</h2>
                    <p className="text-gray-500 mb-8">Thank you for contacting us. Our team will review your inquiry and get back to you shortly.</p>
                    <button 
                        onClick={() => onNavigate('home')}
                        className="bg-black text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-gray-800 transition-all"
                    >
                        Return Home
                    </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label={t('contact_page.form.first_name')} required />
                        <InputField label={t('contact_page.form.last_name')} required />
                    </div>

                    <InputField label={t('contact_page.form.email')} type="email" required />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label={t('contact_page.form.job_title')} required />
                        <InputField label={localLabels.department} required />
                    </div>

                    <InputField label={t('contact_page.form.company')} required />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <CustomSelect 
                        label={t('contact_page.form.country')} 
                        options={currentOptions.countries} 
                        />
                        <InputField label={localLabels.phone} required={true} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <CustomSelect 
                        label={t('contact_page.form.company_size')} 
                        options={currentOptions.companySizes} 
                        />
                        <CustomSelect 
                        label={t('contact_page.form.industry')} 
                        options={currentOptions.industries} 
                        />
                    </div>

                    <CustomSelect 
                        label={localLabels.product} 
                        options={currentOptions.products} 
                        required={false}
                    />

                    <CustomSelect 
                        label={t('contact_page.form.deployment')} 
                        options={[
                        t('contact_page.form.deployment_options.private'),
                        t('contact_page.form.deployment_options.hybrid'),
                        t('contact_page.form.deployment_options.exploring')
                        ]} 
                    />

                    <div className="space-y-3">
                        <label className="text-xs font-bold text-gray-900 uppercase tracking-wider block mb-2">
                        {t('contact_page.form.intent_label')}
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {Object.values(t('contact_page.form.intents')).map((intent: any) => (
                            <label key={intent} className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                            <span className="text-sm text-gray-700">{intent}</span>
                            </label>
                        ))}
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-900 uppercase tracking-wider block">
                        {t('contact_page.form.problem_label')}
                        </label>
                        <p className="text-[10px] text-gray-400 mb-2">{t('contact_page.form.problem_hint')}</p>
                        <textarea 
                        rows={4}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-1 focus:ring-black focus:border-black transition-all outline-none resize-none hover:bg-gray-100 focus:bg-white"
                        ></textarea>
                    </div>

                    <div className="flex items-start space-x-3 pt-2">
                        <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-gray-300 text-black focus:ring-black" />
                        <span className="text-xs text-gray-500 leading-relaxed">
                        {t('contact_page.form.consent')}
                        </span>
                    </div>

                    <div className="pt-4">
                        <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full bg-black text-white py-4 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:-translate-y-1"
                        >
                        {isSubmitting ? 'Processing...' : t('contact_page.form.submit')}
                        </button>
                        <p className="text-center text-xs text-gray-400 mt-4">
                        {t('contact_page.form.disclaimer')}
                        </p>
                    </div>
                    </form>
                )}
            </div>
        </div>
      </section>

      <section className="py-24 border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="text-[11px] font-bold text-black uppercase tracking-[0.2em]">{t('common.trustedBy')}</p>
        </div>
        <LogoMarquee />
      </section>
    </div>
  );
};

export default ContactPage;
