
import { PRODUCT_DETAILS_DATA, NEWS_ITEMS, CRITICAL_ASSETS, NAV_IMAGES } from '../constants';

// Helper to strip HTML tags if any (basic sanitization for meta tags)
const clean = (str: string | undefined) => str?.replace(/<[^>]*>/g, '').trim() || '';

export const defaultMeta = {
  en: {
    title: "Tezign｜Generative Enterprise Agent",
    description: "Tezign builds Generative Enterprise Agents that understand business context, execute real work, and evolve continuously.",
    image: "https://i.imgs.ovh/2025/12/29/C1cUN0.jpeg" // Generic fallback (GEA visual)
  },
  zh: {
    title: "特赞 Tezign｜企业级智能体 Generative Enterprise Agent",
    description: "构建可理解业务、可执行任务、可持续演进的企业级智能体系统。",
    image: "https://i.imgs.ovh/2025/12/29/C1cUN0.jpeg"
  }
};

/**
 * Resolves metadata based on current view, ID, and language context.
 * Pure logic function, decoupled from React lifecycle.
 */
export const getViewMeta = (view: string, id: string | undefined, t: (key: string) => any, language: 'en' | 'zh') => {
  const defaults = defaultMeta[language];
  const siteName = language === 'en' ? "Tezign" : "特赞";
  
  let title = defaults.title;
  let description = defaults.description;
  let image = defaults.image;
  let ogType = "website";

  // Helper for consistent title formatting
  const formatTitle = (pageTitle: string) => `${pageTitle} | ${siteName}`;

  // Helper to try resolving image from Critical Assets first
  const resolveAsset = (v: string, i?: string) => {
    const key = i ? `${v}:${i}` : v;
    const assets = CRITICAL_ASSETS[key];
    if (assets && assets.length > 0) return assets[0];
    return null;
  };

  switch (view) {
    case 'home':
        // Uses default title/desc/image
        break;

    case 'products':
        title = formatTitle(language === 'en' ? "Products" : "产品体系");
        description = clean(t('products_page.subtitle'));
        image = NAV_IMAGES.products_gea;
        break;

    case 'product':
        if (id && PRODUCT_DETAILS_DATA[id]) {
            const p = PRODUCT_DETAILS_DATA[id];
            const localName = t(`product_details.${id}.name`) || p.name;
            const localDesc = t(`product_details.${id}.description`) || p.description;
            const cleanName = localName.split(' · ')[0];
            
            title = formatTitle(cleanName);
            description = clean(localDesc);
            image = p.imageUrl || resolveAsset('product', id) || image;
            ogType = "product";
        }
        break;

    case 'industries':
        title = formatTitle(language === 'en' ? "Industries" : "行业案例");
        description = clean(t('stories_page.subtitle'));
        image = NAV_IMAGES.industries;
        break;

    case 'industryDetail':
        const cases = t('industry_cases');
        if (Array.isArray(cases)) {
            const c = cases.find((i: any) => i.id === id);
            if (c) {
                title = formatTitle(c.title);
                description = clean(c.content?.statement || c.title);
                image = c.imageUrl || image;
                ogType = "article";
            }
        }
        break;

    case 'updates':
        title = formatTitle(language === 'en' ? "Updates" : "最新动态");
        description = clean(t('updates_page.subtitle'));
        image = "https://i.imgs.ovh/2025/12/29/C1j3eA.jpeg"; // Specific update cover
        break;

    case 'updateDetail':
        if (id) {
            const newsItem = t(`news.${id}`);
            if (newsItem && newsItem.title) {
                title = formatTitle(newsItem.title);
                description = clean(newsItem.subtitle);
                // Try to find image in nav mapping or generic
                // Note: Actual news images are dynamic in the UI, we'll try a best guess or fallback
                if (id === 'gea') image = NAV_IMAGES.products_gea;
                else if (id === 'dam') image = NAV_IMAGES.products_dam;
                else if (id === 'muse') image = NAV_IMAGES.comp_musedam;
                else if (id === 'atypica') image = NAV_IMAGES.comp_atypica;
                else if (id === 'clipo') image = NAV_IMAGES.comp_clipo;
                else if (id === 'aiFullStack') image = NAV_IMAGES.resources_1;
                else if (id === 'creativeSku') image = NAV_IMAGES.resources_2;
                
                ogType = "article";
            }
        }
        break;

    case 'company':
        title = formatTitle(language === 'en' ? "Company" : "关于特赞");
        description = language === 'en' 
            ? "Tezign develops Generative Enterprise Agents (GEA) that operate continuously and deliver results in real business environments."
            : "特赞科技专注于构建能够在真实业务场景中长期运行的企业级智能体系统。";
        image = "https://i.imgs.ovh/2025/12/30/C1ddAY.jpeg"; // Office image
        break;

    case 'resources':
        title = formatTitle(language === 'en' ? "Resources" : "资源中心");
        description = clean(t('resources_page.subtitle'));
        image = NAV_IMAGES.resources_1;
        break;

    case 'careers':
        title = formatTitle(language === 'en' ? "Careers" : "加入我们");
        description = clean(t('careers_page.subtitle'));
        image = "https://i.imgs.ovh/2025/12/30/C1ddAY.jpeg";
        break;

    case 'contact':
        title = formatTitle(language === 'en' ? "Contact Us" : "联系我们");
        description = language === 'en' ? "Ready to put AI to work? Join us." : "准备好让 AI 真正开始工作了吗？";
        break;

    case 'legal':
        title = formatTitle(language === 'en' ? "Legal" : "法律条款");
        description = language === 'en' ? "Terms, Privacy, and Security." : "条款、隐私与安全。";
        break;
        
    case 'legalDetail':
        title = formatTitle(language === 'en' ? "Legal Document" : "法律文档");
        break;
        
    case 'technology':
        title = formatTitle(language === 'en' ? "Technology" : "核心技术");
        image = NAV_IMAGES.technology;
        break;
        
    case 'architecture':
        title = formatTitle(language === 'en' ? "GEA Architecture" : "GEA 架构");
        image = NAV_IMAGES.technology;
        break;

    default:
        break;
  }

  return {
    title,
    description,
    image,
    ogType
  };
};
