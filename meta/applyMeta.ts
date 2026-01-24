
export interface MetaPayload {
  title?: string;
  description?: string;
  image?: string;
  ogType?: string;
  ogSiteName?: string;
}

/**
 * Lightweight utility to apply metadata to the DOM.
 * Strictly handles document.title, description, and Open Graph tags.
 * Does NOT handle canonical URLs or routing logic.
 */
export const applyMeta = (meta: MetaPayload) => {
  if (!meta) return;

  // 1. Update Document Title
  if (meta.title && document.title !== meta.title) {
    document.title = meta.title;
  }

  // Helper: Update or create meta tags safely
  const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
    if (!content) return;

    let element = document.querySelector(`meta[${attribute}="${key}"]`);
    
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, key);
      document.head.appendChild(element);
    }
    
    if (element.getAttribute('content') !== content) {
      element.setAttribute('content', content);
    }
  };

  // 2. Standard Description
  if (meta.description) {
    setMetaTag('name', 'description', meta.description);
  }

  // 3. Open Graph Tags (property^="og:")
  if (meta.title) {
    setMetaTag('property', 'og:title', meta.title);
  }
  
  if (meta.description) {
    setMetaTag('property', 'og:description', meta.description);
  }

  if (meta.ogType) {
    setMetaTag('property', 'og:type', meta.ogType);
  }

  if (meta.ogSiteName) {
    setMetaTag('property', 'og:site_name', meta.ogSiteName);
  }

  // 4. Social Images (OG & Twitter)
  if (meta.image) {
    setMetaTag('property', 'og:image', meta.image);
    setMetaTag('name', 'twitter:image', meta.image);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
  }
};
