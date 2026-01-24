
import { NEWS_TRANSLATIONS_EN, NEWS_TRANSLATIONS_ZH } from './news';

export type Lang = 'en' | 'zh';

export const getNewsByLanguage = (lang: Lang) => {
  return lang === 'en' ? (NEWS_TRANSLATIONS_EN as Record<string, any>) : (NEWS_TRANSLATIONS_ZH as Record<string, any>);
};

// --- New Logic for Updates Page ---

export type UpdateCategory = 'product_updates' | 'media_press' | 'events';

export type UpdateListItem = { 
  id: string; 
  coverImage: string; 
  dateISO: string;
  category: string;
};

/**
 * Normalizes various date formats to YYYY-MM-DD
 * Returns '1970-01-01' if invalid, ensuring safe sorting
 */
export const normalizeDateToISO = (value: string | undefined): string => {
  if (!value) return '1970-01-01';
  // Check if already YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return value;
  
  // Try parsing English dates (e.g., "Jan 15, 2026")
  const ts = Date.parse(value);
  if (!isNaN(ts)) {
    return new Date(ts).toISOString().split('T')[0];
  }
  return '1970-01-01';
};

/**
 * Builds categorized, sorted lists of updates with consistent cover images.
 * Ensures:
 * 1. Fixed covers (from NEWS_IMAGES_MAP) are respected.
 * 2. Fallback covers are picked from poolCovers.
 * 3. Fallback covers do not repeat adjacently (even across categories).
 * 4. Random distribution doesn't look identical for each category.
 */
export const buildUpdatesListByCategory = (
  lang: Lang,
  meta: Array<{ id: string; category: string }>,
  fixedCovers: Record<string, string>,
  poolCovers: string[]
): Record<string, UpdateListItem[]> => {
  const newsMap = getNewsByLanguage(lang);
  const grouped: Record<string, Array<{ id: string; dateISO: string; fixedCover?: string; category: string }>> = {};

  // 1. Group & Resolve Date/FixedCover
  meta.forEach(item => {
    const content = newsMap[item.id];
    const dateRaw = content?.dateISO ?? content?.date;
    const dateISO = normalizeDateToISO(dateRaw);
    const fixedCover = fixedCovers[item.id];
    
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push({
        id: item.id,
        category: item.category,
        dateISO,
        fixedCover
    });
  });

  const result: Record<string, UpdateListItem[]> = {};
  
  // Define categories in a fixed order for deterministic processing
  // This ensures the "global counter" flows predictably from top to bottom of the page
  const orderedCategories = ['product_updates', 'media_press', 'events'];
  const availableCategories = Object.keys(grouped).filter(c => orderedCategories.includes(c) || true);
  
  // Sort category keys to match UI order if possible, or just alphabetically
  const categoryKeys = availableCategories.sort((a, b) => {
      const idxA = orderedCategories.indexOf(a);
      const idxB = orderedCategories.indexOf(b);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      return a.localeCompare(b);
  });

  // Global state for image distribution
  // We use a counter to cycle through the pool, but also skip if a collision occurs.
  let poolCursor = 0;
  let lastAssignedCover = '';

  categoryKeys.forEach(cat => {
    // Sort items descending by date
    const list = grouped[cat].sort((a, b) => b.dateISO.localeCompare(a.dateISO));
    
    const processedList: UpdateListItem[] = [];

    list.forEach((item) => {
        let chosenCover = '';

        if (item.fixedCover) {
            // Requirement 1: Fixed covers are respected
            chosenCover = item.fixedCover;
        } else if (poolCovers.length > 0) {
            // Requirement 2: Random from pool
            // Try to pick a cover that isn't the same as the last one
            let attempts = 0;
            const maxAttempts = poolCovers.length; 
            
            while (attempts < maxAttempts) {
                const candidateIndex = poolCursor % poolCovers.length;
                const candidate = poolCovers[candidateIndex];
                
                // Requirement 3: Ensure adjacent images are not duplicated
                if (candidate !== lastAssignedCover) {
                    chosenCover = candidate;
                    poolCursor++; // Advance cursor for next time
                    break;
                }
                
                // If collision, skip this index and try next
                poolCursor++;
                attempts++;
            }
            
            // Fallback if loop exhausted (e.g. pool has 1 image)
            if (!chosenCover) {
                chosenCover = poolCovers[0];
            }
        }

        processedList.push({
            id: item.id,
            category: item.category,
            dateISO: item.dateISO,
            coverImage: chosenCover
        });
        
        lastAssignedCover = chosenCover;
    });
    
    result[cat] = processedList;
  });

  return result;
};
