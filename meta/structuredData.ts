
import { PRODUCT_DETAILS_DATA } from '../constants';

const SCRIPT_ID = 'tezign-structured-data';
const DOMAIN = 'https://www.tezign.com'; // Production domain

/**
 * Injects global Organization Structured Data.
 * Used during initial boot before React context is ready.
 */
export const injectGlobalStructuredData = () => {
  const schemas = [{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tezign",
    "url": DOMAIN,
    "logo": "https://i.imgs.ovh/2025/12/28/CwFN4O.png",
    "sameAs": [
      "https://www.linkedin.com/company/tezign",
      "https://twitter.com/tezign",
      "https://www.youtube.com/@Tezign_com"
    ]
  }];

  let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement;
  if (!script) {
    script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemas);
};

/**
 * Injects dynamic Structured Data (JSON-LD) into the head.
 * Manages a singleton script tag to avoid duplication.
 */
export const injectPageStructuredData = (
  view: string, 
  id: string | undefined, 
  t: (key: string) => any, 
  language: 'en' | 'zh'
) => {
  // 1. Prepare Data Buckets
  const schemas: any[] = [];

  // 2. Global Organization Schema (Always present)
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tezign",
    "url": DOMAIN,
    "logo": "https://i.imgs.ovh/2025/12/28/CwFN4O.png",
    "sameAs": [
      "https://www.linkedin.com/company/tezign",
      "https://twitter.com/tezign",
      "https://www.youtube.com/@Tezign_com"
    ]
  });

  // 3. Breadcrumb Schema
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'en' ? "Home" : "首页",
        "item": DOMAIN
      }
    ]
  };

  // Helper to add breadcrumb items
  const addBreadcrumb = (name: string, path: string) => {
    breadcrumbList.itemListElement.push({
      "@type": "ListItem",
      "position": breadcrumbList.itemListElement.length + 1,
      "name": name,
      "item": `${DOMAIN}${path}`
    });
  };

  // 4. View-Specific Logic
  switch (view) {
    case 'products':
      addBreadcrumb(language === 'en' ? "Products" : "产品体系", "/products");
      break;

    case 'product':
      addBreadcrumb(language === 'en' ? "Products" : "产品体系", "/products");
      if (id && PRODUCT_DETAILS_DATA[id]) {
        const p = PRODUCT_DETAILS_DATA[id];
        const name = t(`product_details.${id}.name`) || p.name;
        const desc = t(`product_details.${id}.description`) || p.description;
        
        addBreadcrumb(name, `/products/${id}`);

        schemas.push({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": name,
          "description": desc,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Cloud",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        });
      }
      break;

    case 'industries':
      addBreadcrumb(language === 'en' ? "Industries" : "行业案例", "/industries");
      break;

    case 'industryDetail':
      addBreadcrumb(language === 'en' ? "Industries" : "行业案例", "/industries");
      const cases = t('industry_cases');
      if (Array.isArray(cases)) {
        const c = cases.find((i: any) => i.id === id);
        if (c) {
          addBreadcrumb(c.title, `/industries/${c.id}`);
          schemas.push({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": c.title,
            "image": c.imageUrl ? [c.imageUrl] : [],
            "datePublished": "2026-01-10", // Fallback date if not dynamic
            "author": {
              "@type": "Organization",
              "name": "Tezign"
            }
          });
        }
      }
      break;

    case 'updates':
      addBreadcrumb(language === 'en' ? "Updates" : "最新动态", "/updates");
      break;

    case 'updateDetail':
      addBreadcrumb(language === 'en' ? "Updates" : "最新动态", "/updates");
      if (id) {
        const newsItem = t(`news.${id}`);
        if (newsItem && newsItem.title) {
          addBreadcrumb(newsItem.title, `/updates/${id}`);
          schemas.push({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            "headline": newsItem.title,
            "datePublished": newsItem.dateISO || new Date().toISOString(),
            "author": {
              "@type": "Organization",
              "name": "Tezign"
            }
          });
        }
      }
      break;
      
    case 'company':
      addBreadcrumb(language === 'en' ? "Company" : "关于特赞", "/company");
      break;

    // --- Special Pages SEO ---
    case 'architecture':
      addBreadcrumb(language === 'en' ? "Technology" : "核心技术", "/technology");
      addBreadcrumb("Architecture", "/technology/architecture");
      schemas.push({
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": language === 'en' ? "GEA Architecture & Technical Principles" : "GEA 架构与技术原理",
        "author": { "@type": "Organization", "name": "Tezign" }
      });
      break;

    case 'aiFullStack':
      addBreadcrumb(language === 'en' ? "Resources" : "资源中心", "/resources");
      addBreadcrumb("AI FullStack", "/resources/ai-fullstack");
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "AI FullStack Consulting",
        "provider": { "@type": "Organization", "name": "Tezign" },
        "serviceType": "Enterprise AI Consulting"
      });
      break;

    case 'creativeSku':
      addBreadcrumb(language === 'en' ? "Resources" : "资源中心", "/resources");
      addBreadcrumb("CreativeSKU", "/resources/creative-sku");
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "CreativeSKU Supply Chain",
        "provider": { "@type": "Organization", "name": "Tezign" },
        "serviceType": "Creative Production Service"
      });
      break;

    case 'atypicaStory':
    case 'museStory':
    case 'clipoStory':
      addBreadcrumb(language === 'en' ? "Company" : "关于特赞", "/company");
      let storyTitle = "Story";
      if (view === 'atypicaStory') storyTitle = "atypica.AI";
      if (view === 'museStory') storyTitle = "MuseDAM";
      if (view === 'clipoStory') storyTitle = "Clipo";
      
      addBreadcrumb(storyTitle, `/company/${view}`);
      schemas.push({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": storyTitle,
        "brand": { "@type": "Brand", "name": "Tezign" }
      });
      break;
  }

  // Push Breadcrumbs if more than Home
  if (breadcrumbList.itemListElement.length > 1) {
    schemas.push(breadcrumbList);
  }

  // 5. Inject into DOM
  let script = document.getElementById(SCRIPT_ID) as HTMLScriptElement;
  if (!script) {
    script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schemas);
};
