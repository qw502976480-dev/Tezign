
import { INSIGHTS_EN } from './insights.en';
import { INSIGHTS_ZH } from './insights.zh';
import type { InsightItem } from './insights.types';

export type Lang = 'en' | 'zh';

export const getInsightsByLanguage = (lang: Lang): InsightItem[] => {
  return lang === 'en' ? INSIGHTS_EN : INSIGHTS_ZH;
};
