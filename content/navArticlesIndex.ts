
import { NAV_ARTICLES_ZH } from './navArticles.zh';
import { NAV_ARTICLES_EN } from './navArticles.en';

export type Lang = 'en' | 'zh';

export type NavArticleKey =
  | 'techArchitecture'
  | 'aiFullStack'
  | 'creativeSku'
  | 'atypica'
  | 'muse'
  | 'dam'
  | 'gea'
  | 'clipo';

export type NavContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'subheading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'quote'; text: string; author?: string }
  | { type: 'image'; src: string; alt?: string };

export interface NavArticle {
  key: NavArticleKey;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  blocks: NavContentBlock[];
}

export const getNavArticleByLanguage = (lang: Lang, key: NavArticleKey): NavArticle => {
  const primary = (lang === 'zh' ? NAV_ARTICLES_ZH : NAV_ARTICLES_EN) as Record<string, NavArticle>;
  const fallback = NAV_ARTICLES_ZH as Record<string, NavArticle>;

  // 1) Priority: Target Language
  if (primary && primary[key]) return primary[key];

  // 2) Fallback: Chinese (to prevent crash on switching language)
  if (fallback && fallback[key]) return fallback[key];

  // 3) Final Fallback: Safe placeholder object
  return {
    key,
    title: '',
    subtitle: '',
    date: '',
    readTime: '',
    blocks: []
  };
};
