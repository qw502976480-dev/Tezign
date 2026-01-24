
import React from 'react';
import { ICONS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';

interface FooterProps {
  onNavigate?: (page: 'home' | 'product' | 'company' | 'industryDetail' | 'industries' | 'updates' | 'updateDetail' | 'resources' | 'myCollection' | 'legal' | 'careers' | 'contact' | 'technology' | 'techData' | 'techModel' | 'techSkill' | 'dam' | 'overview', id?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t, language, setLanguage } = useLanguage();
  const { isAuthenticated, setIsAuthModalOpen } = useAuth();

  const handleLinkClick = (e: React.MouseEvent, page: any, id?: string) => {
    e.preventDefault();

    if (page === 'myCollection' && !isAuthenticated) {
      setIsAuthModalOpen(true);
      return;
    }

    if(onNavigate) onNavigate(page, id);
  }

  const INDUSTRY_KEYS = [
    'consumer', 'auto', 'finance', 'tech', 'more'
  ];

  const footerGroups = [
    {
      title: t('footer.company.title'),
      items: [
        { label: t('footer.company.about'), href: '#', page: 'company' },
        { label: t('footer.company.mission'), href: '#', page: 'company', id: 'scroll:what-is-gea' },
        { label: t('footer.company.joinUs'), href: '#', page: 'careers' },
      ]
    },
    {
      title: t('footer.technology.title'),
      items: [
        { label: t('nav_ia.headers.ai_tech'), href: '#', page: 'technology', id: 'scroll:ai-tech' },
        { label: t('nav_ia.headers.data_security'), href: '#', page: 'technology', id: 'scroll:security' },
      ]
    },
    {
      title: t('footer.products.title'),
      items: [
        { label: t('footer.products.dam'), href: '#', page: 'dam' },
        { label: t('footer.products.gea'), href: '#', page: 'overview' },
      ]
    },
    {
      title: t('footer.stories.title'),
      items: INDUSTRY_KEYS.map(key => ({
        label: t(`nav.dropdowns.items.${key}`),
        href: '#',
        page: 'industries' as 'industries',
        id: `filter:industry:${key}`
      }))
    },
    {
      title: t('footer.cobuilding.title'),
      items: [
        { label: t('footer.cobuilding.consulting'), href: '#', page: 'resources', id: 'scroll:consulting' },
        { label: t('footer.cobuilding.creative'), href: '#', page: 'resources', id: 'scroll:creative' },
        { label: t('footer.cobuilding.research'), href: '#', page: 'resources', id: 'scroll:research' },
        { label: t('footer.cobuilding.whitepapers'), href: '#', page: 'resources', id: 'scroll:whitepaper' },
      ]
    },
    {
      title: t('footer.insights.title'),
      items: [
        { label: t('footer.insights.updates'), href: '#', page: 'updates', id: 'filter:category:product_updates' },
        { label: t('footer.insights.events'), href: '#', page: 'updates', id: 'filter:category:events' },
        { label: t('footer.insights.media'), href: '#', page: 'updates', id: 'filter:category:media_press' },
      ]
    },
    {
      title: t('footer.investment.title'),
      items: [
        { label: t('footer.investment.atypica'), href: 'https://atypica.musedam.cc/', isExternal: true },
        { label: t('footer.investment.muse'), href: 'https://www.musedam.cc/zh-CN', isExternal: true },
        { label: t('footer.investment.clipo'), href: 'https://clipo.cc/', isExternal: true },
      ]
    },
    {
      title: t('footer.legal.title'),
      items: [
        { label: t('footer.legal.privacy'), href: '#', page: 'legal', id: 'scroll:privacy' },
        { label: t('footer.legal.terms'), href: '#', page: 'legal', id: 'scroll:terms' },
        { label: t('footer.legal.security'), href: '#', page: 'legal', id: 'scroll:security' },
      ]
    }
  ];

  return (
    <footer className="bg-[#121212] text-white pt-24 pb-12 px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-y-12 gap-x-4 mb-24">
          {footerGroups.map((group, idx) => {
            return (
              <div key={idx}>
                <h4 className="text-[11px] font-bold text-gray-500 mb-6 tracking-[0.1em] uppercase">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.items.map((item: any, itemIdx) => (
                    <li key={itemIdx}>
                      <a 
                        href={item.href}
                        target={item.isExternal ? "_blank" : undefined}
                        rel={item.isExternal ? "noopener noreferrer" : undefined}
                        onClick={(e) => {
                            if (!item.isExternal && item.page) {
                                handleLinkClick(e, item.page as any, item.id);
                            }
                        }}
                        className="text-[13px] text-gray-400 hover:text-white transition-colors leading-relaxed block"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="h-px bg-white/10 w-full mb-10"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">
          <div className="flex items-center">
            <span className="text-xs font-medium text-gray-500 tracking-wide">© 2026 Tezign. All rights reserved.</span>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex items-center space-x-5 text-gray-500 leading-none overflow-visible">
              <a 
                href="https://www.youtube.com/@Tezign_com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center overflow-visible hover:text-white transition-colors"
              >
                <ICONS.YouTube className="w-5 h-5 block" />
              </a>
              <a 
                href="https://www.linkedin.com/in/tezign/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center overflow-visible hover:text-white transition-colors"
              >
                <ICONS.LinkedIn className="w-5 h-5 block" />
              </a>
              <a 
                href="https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MjM5NTMzNzg3NA==&action=getalbum&album_id=3917014986127573004&scene=126&sessionid=1768999133060#wechat_redirect"
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center overflow-visible hover:text-white transition-colors" 
                title="MuseDAM：为什么企业需要AI原生的内容管理系统？"
              >
                <ICONS.WeChat className="w-5 h-5 block" />
              </a>
              <a 
                href="https://xhslink.com/m/3mRJ6bhwH5y" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center overflow-visible hover:text-white transition-colors"
              >
                <ICONS.Xiaohongshu className="w-5 h-5 block" />
              </a>
            </div>

            <div className="w-px h-4 bg-white/15 hidden md:block"></div>

            <div className="flex items-center space-x-6">
               <a href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors font-medium">Manage Cookies</a>
               
               <button 
                 onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
                 className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full px-3 py-1.5 transition-all group"
               >
                 <ICONS.Globe className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-200 transition-colors" />
                 <span className="text-xs font-medium text-gray-300 group-hover:text-white transition-colors">
                   {language === 'en' ? 'English (US)' : '中文 (中国)'}
                 </span>
               </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
