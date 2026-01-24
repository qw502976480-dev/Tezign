
import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getViewMeta } from '../../meta/metaConfig';
import { applyMeta } from '../../meta/applyMeta';
import { injectPageStructuredData } from '../../meta/structuredData';

interface MetaControllerProps {
  view: string;
  id?: string;
}

const MetaController: React.FC<MetaControllerProps> = ({ view, id }) => {
  const { t, language } = useLanguage();

  useEffect(() => {
    // 1. Resolve metadata strategy
    const metaConfig = getViewMeta(view, id, t, language);
    const siteName = language === 'en' ? 'Tezign' : '特赞';

    // 2. Apply metadata to DOM (Title, Description, OG)
    applyMeta({
      ...metaConfig,
      ogSiteName: siteName
    });
    
    // 3. Inject JSON-LD Structured Data
    injectPageStructuredData(view, id, t, language);
    
    // 4. Handle Canonical (Keep explicit in Controller as applyMeta is prohibited from touching it)
    const url = window.location.href;
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
    }
    // Only update if changed
    if (link.getAttribute('href') !== url) {
        link.setAttribute('href', url);
    }

  }, [view, id, language, t]);

  // Render nothing - this is a logic-only component
  return null;
};

export default MetaController;
