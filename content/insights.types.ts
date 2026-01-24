
export type InsightType = 'whitepaper' | 'report' | 'all';

export interface InsightItem {
  id: string;
  type: Exclude<InsightType, 'all'>;
  date: string;
  title: string;
  desc: string;
}
