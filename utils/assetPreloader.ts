
/**
 * Asset Preloader Utility
 * Optimized for "Solid State" loading - ensures assets are ready before display.
 */

// Memory cache to store successfully loaded URLs to avoid duplicate network requests
const loadedCache = new Set<string>();

// Timeout for individual assets (3s is usually enough for critical path)
const TIMEOUT_MS = 3000; 

// Concurrency limit for blocking loads (higher priority)
const BLOCKING_CONCURRENCY = 8;

// Concurrency limit for background loads (low priority)
const BACKGROUND_CONCURRENCY = 3;

// NEW: Exported check to allow components to skip loading state
export const isAssetLoaded = (url: string): boolean => {
  if (!url) return false;
  return loadedCache.has(url);
};

// NEW: Helper to manually mark assets (e.g., lazy loaded images)
export const markAssetLoaded = (url: string) => {
  if (url) loadedCache.add(url);
};

const loadImage = (url: string): Promise<void> => {
  if (!url) return Promise.resolve();
  if (loadedCache.has(url)) return Promise.resolve();

  return new Promise((resolve) => {
    let isSettled = false;
    const img = new Image();

    const finish = (success: boolean) => {
      if (isSettled) return;
      isSettled = true;
      if (success) loadedCache.add(url);
      resolve(); 
    };

    const timer = setTimeout(() => {
      if (!isSettled) finish(false); 
    }, TIMEOUT_MS);

    img.onload = () => {
      if ('decode' in img) {
        img.decode()
          .then(() => { clearTimeout(timer); finish(true); })
          .catch(() => { clearTimeout(timer); finish(true); });
      } else {
        clearTimeout(timer);
        finish(true);
      }
    };

    img.onerror = () => {
      clearTimeout(timer);
      finish(false);
    };

    img.src = url;
  });
};

export const preloadImage = loadImage; // Alias for backward compatibility

/**
 * Checks if a list of assets is already resident in the memory cache.
 */
export const areAssetsLoaded = (urls: string[]): boolean => {
  if (!urls || urls.length === 0) return true;
  const validUrls = urls.filter(u => !!u);
  if (validUrls.length === 0) return true;
  return validUrls.every(url => loadedCache.has(url));
};

export const waitForFonts = async (): Promise<void> => {
  if (!('fonts' in document)) return Promise.resolve();
  try {
    await document.fonts.ready;
  } catch (e) {
    // font loading error shouldn't block app
  }
};

/**
 * Blocking Load: High priority, used for navigation.
 */
export const preloadAssets = async (urls: string[]): Promise<void> => {
  if (!urls || urls.length === 0) return;
  const uniqueUrls = [...new Set(urls)].filter(url => !!url && !loadedCache.has(url));
  
  const results: Promise<void>[] = [];
  const executing = new Set<Promise<void>>();

  for (const url of uniqueUrls) {
    const p = loadImage(url).then(() => { executing.delete(p); });
    results.push(p);
    executing.add(p);
    if (executing.size >= BLOCKING_CONCURRENCY) {
      await Promise.race(executing);
    }
  }
  await Promise.all(results);
};

/**
 * Background Load: Low priority, used for pre-fetching next pages or hover states.
 * Uses requestIdleCallback if available to avoid frame drops.
 */
export const startBackgroundLoad = (urls: string[]) => {
  if (typeof window === 'undefined') return;
  
  const uniqueUrls = [...new Set(urls)].filter(url => !!url && !loadedCache.has(url));
  if (uniqueUrls.length === 0) return;

  const processQueue = async () => {
    const executing = new Set<Promise<void>>();
    for (const url of uniqueUrls) {
      // If queue is full, wait for one to finish
      if (executing.size >= BACKGROUND_CONCURRENCY) {
        await Promise.race(executing);
      }
      
      const p = loadImage(url).then(() => { executing.delete(p); });
      executing.add(p);
      
      // Artificial delay to yield to main thread between requests
      await new Promise(r => setTimeout(r, 100));
    }
  };

  if ('requestIdleCallback' in window) {
    // @ts-ignore
    window.requestIdleCallback(() => processQueue(), { timeout: 2000 });
  } else {
    setTimeout(processQueue, 1000);
  }
};
