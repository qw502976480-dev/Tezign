
import { useState, useEffect, useCallback } from 'react';
import { ViewType } from '../types';
import { CRITICAL_ASSETS, INITIAL_ASSETS, BACKGROUND_ASSETS } from '../constants';
import { preloadAssets, waitForFonts, areAssetsLoaded, startBackgroundLoad } from '../utils/assetPreloader';
import { injectGlobalStructuredData } from '../meta/structuredData';

// --- URL Parsing Helpers ---

const parsePathToState = (pathname: string): { view: ViewType, id?: string } => {
  const path = pathname.replace(/\/$/, '') || '/';
  if (path === '/') return { view: 'home' };
  
  const parts = path.split('/').slice(1);
  const root = parts[0];
  const param = parts[1]; // :id

  switch(root) {
    case 'products':
    case 'product':
      if (param === 'dam') return { view: 'dam' };
      if (param === 'overview') return { view: 'overview' };
      if (['insight', 'expert', 'growth', 'innovation', 'social', 'revenue', 'market'].includes(param)) {
          const actualId = param === 'market' ? 'market' : param;
          return { view: 'product', id: actualId };
      }
      return param ? { view: 'product', id: param } : { view: 'products' };
    case 'industries': 
      return param ? { view: 'industryDetail', id: param } : { view: 'industries' };
    case 'updates': 
      return param ? { view: 'updateDetail', id: param } : { view: 'updates' };
    case 'legal': 
      return param ? { view: 'legalDetail', id: param } : { view: 'legal' };
    case 'technology':
      if (param === 'architecture') return { view: 'architecture' };
      if (param === 'data') return { view: 'techData' };
      if (param === 'model') return { view: 'techModel' };
      if (param === 'skill') return { view: 'techSkill' };
      return { view: 'technology' };
    case 'resources':
      if (param === 'ai-fullstack') return { view: 'aiFullStack' };
      if (param === 'creative-sku') return { view: 'creativeSku' };
      if (param === 'insights') return { view: 'industryInsights' }; 
      return { view: 'resources' };
    case 'company':
      if (param === 'atypica') return { view: 'atypicaStory' };
      if (param === 'muse') return { view: 'museStory' };
      if (param === 'clipo') return { view: 'clipoStory' };
      return { view: 'company' };
    case 'careers': return { view: 'careers' };
    case 'contact': return { view: 'contact' };
    case 'myCollection': return { view: 'myCollection' };
    default: return { view: 'home' };
  }
};

const buildPathFromState = (view: ViewType, id?: string): string => {
  switch(view) {
    case 'home': return '/';
    case 'products': return '/products';
    case 'product': return id ? `/products/${id}` : '/products';
    case 'dam': return '/products/dam';
    case 'overview': return '/products/overview';
    case 'industries': return '/industries';
    case 'industryDetail': return id ? `/industries/${id}` : '/industries';
    case 'updates': return '/updates';
    case 'updateDetail': return id ? `/updates/${id}` : '/updates';
    case 'legal': return '/legal';
    case 'legalDetail': return id ? `/legal/${id}` : '/legal';
    case 'technology': return '/technology';
    case 'architecture': return '/technology/architecture';
    case 'techData': return '/technology/data';
    case 'techModel': return '/technology/model';
    case 'techSkill': return '/technology/skill';
    case 'company': return '/company';
    case 'atypicaStory': return '/company/atypica';
    case 'museStory': return '/company/muse';
    case 'clipoStory': return '/company/clipo';
    case 'resources': return '/resources';
    case 'industryInsights': return '/resources/insights';
    case 'aiFullStack': return '/resources/ai-fullstack';
    case 'creativeSku': return '/resources/creative-sku';
    case 'careers': return '/careers';
    case 'contact': return '/contact';
    case 'myCollection': return '/myCollection';
    default: return '/';
  }
};

// --- Custom Hook ---

export const useRouter = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [currentId, setCurrentId] = useState<string | undefined>(undefined);
  const [isPreloading, setIsPreloading] = useState(true);
  
  // Page-specific filters
  const [industriesFilter, setIndustriesFilter] = useState<{ type: 'industry' | 'scenario', value: string } | null>(null);
  const [updatesFilter, setUpdatesFilter] = useState<{ type: 'category', value: string } | null>(null);
  const [insightsFilter, setInsightsFilter] = useState<string | undefined>(undefined);

  // The Core "Solid State" Navigation Logic
  const handleNavigate = useCallback(async (page: ViewType, id?: string, fromPopState = false) => {
    // Determine if ID contains action logic (filter/scroll) or is a resource ID
    const isInternalAction = id && (id.startsWith('scroll:') || id.startsWith('filter:') || id.startsWith('tab:'));
    const urlId = isInternalAction ? undefined : id;
    const nextPath = buildPathFromState(page, urlId);
    
    // Identify assets to preload for the target view
    const pageAssets = CRITICAL_ASSETS[page] || [];
    const idAssets = id && CRITICAL_ASSETS[`${page}:${id}`] ? CRITICAL_ASSETS[`${page}:${id}`] : [];
    
    const assetsToLoad = [...pageAssets, ...idAssets];

    // --- SMART ROUTING LOGIC ---
    // Check if assets are already in cache. If so, skip the "Curtain" effect for instant nav.
    const isCached = areAssetsLoaded(assetsToLoad);

    if (isCached) {
        // Fast Path: Instant Swap (PageTransition will handle smooth entry)
        setIsPreloading(false);
    } else {
        // Slow Path: Show Curtain
        setIsPreloading(true);
        // Strict Wait: Assets + Fonts + Optimized Buffer
        await Promise.all([
            preloadAssets(assetsToLoad),
            waitForFonts(),
            new Promise(resolve => setTimeout(resolve, 50)) // Short buffer
        ]);
        
        // Curtain lift
        requestAnimationFrame(() => {
            setIsPreloading(false);
        });
    }

    // Update URL
    if (!fromPopState && window.location.pathname !== nextPath) {
      try {
        window.history.pushState({}, '', nextPath);
      } catch (e) {
        console.warn('pushState blocked', e);
      }
    }

    // Update View State
    setCurrentView(page);
    if (!isInternalAction) {
        setCurrentId(id);
    } else {
        setCurrentId(id);
    }

    // Handle State-based Filters & Actions
    if (page === 'industries') {
      if (id && id.startsWith('filter:')) {
        const parts = id.split(':');
        if (parts.length === 3) {
          setIndustriesFilter({ type: parts[1] as 'industry' | 'scenario', value: parts[2] });
        }
      } else {
        setIndustriesFilter(null);
      }
    }

    if (page === 'updates') {
      if (id && id.startsWith('filter:')) {
        const parts = id.split(':');
        if (parts.length === 3) {
          setUpdatesFilter({ type: parts[1] as 'category', value: parts[2] });
        }
      } else {
        setUpdatesFilter(null);
      }
    }

    if (page === 'industryInsights') {
      if (id && id.startsWith('tab:')) {
        setInsightsFilter(id.split(':')[1]);
      } else {
        setInsightsFilter(undefined);
      }
    }

  }, []);

  // Initial Boot
  useEffect(() => {
    const { view, id } = parsePathToState(window.location.pathname);
    
    // For initial load, we only strictly wait for "Above the Fold" assets
    // If it's home, use INITIAL_ASSETS. If it's another page, use its Critical assets.
    let bootAssets = view === 'home' ? INITIAL_ASSETS : (CRITICAL_ASSETS[view] || []);
    
    if (id) {
       const idSpecific = CRITICAL_ASSETS[`${view}:${id}`];
       if (idSpecific) bootAssets = [...bootAssets, ...idSpecific];
    }

    const boot = async () => {
        // 1. Block until critical viewport assets are ready
        await Promise.all([
            preloadAssets(bootAssets),
            waitForFonts(),
            new Promise(resolve => setTimeout(resolve, 300)) // Minimal brand moment
        ]);
        
        // 2. Render Page
        setCurrentView(view);
        setCurrentId(id);
        setIsPreloading(false);
        injectGlobalStructuredData();

        // 3. Lazy Load the rest (Nav images, rest of home page, footer)
        // This ensures hover states are ready by the time user moves mouse
        startBackgroundLoad(BACKGROUND_ASSETS);
        
        // If on Home, also preload the rest of the Home body assets not in INITIAL
        if (view === 'home') {
           const homeRest = CRITICAL_ASSETS.home?.filter(url => !INITIAL_ASSETS.includes(url)) || [];
           startBackgroundLoad(homeRest);
        }
    };

    boot();
  }, []);

  // Browser Back/Forward Handling
  useEffect(() => {
    const handlePopState = () => {
      const { view, id } = parsePathToState(window.location.pathname);
      handleNavigate(view, id, true); 
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [handleNavigate]);

  return {
    currentView,
    currentId,
    isPreloading,
    navigate: handleNavigate,
    industriesFilter,
    updatesFilter,
    insightsFilter
  };
};
