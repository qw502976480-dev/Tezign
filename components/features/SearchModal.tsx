
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ICONS, AGENTS, NEWS_IMAGES_MAP, CRITICAL_ASSETS, PRODUCT_DETAILS_DATA } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';
import { getViewMeta } from '../../meta/metaConfig';
import { NEWS_TRANSLATIONS_EN, NEWS_TRANSLATIONS_ZH } from '../../content/news';
import { NAV_ARTICLES_EN } from '../../content/navArticles.en';
import { NAV_ARTICLES_ZH } from '../../content/navArticles.zh';
import { INDUSTRY_CASES_EN, INDUSTRY_CASES_ZH } from '../../content/industryCases';
import { getInsightsByLanguage } from '../../content/insightsIndex';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (page: any, id?: string) => void;
}

const DISALLOWED_IMAGES = new Set(['https://i.imgs.ovh/2025/12/29/C1c7gU.jpeg']);

function pickCoverForList(ids: string[], pool: string[], fixedMap: Record<string,string>, bannedSet?: Set<string>) {
    const safePool = (pool || []).filter(u => u && (!bannedSet || !bannedSet.has(u)));
    const result: Record<string,string> = {};
    let prev = '';
    let cursor = 0;

    for (const id of ids) {
      const fixed = fixedMap[id];
      if (fixed && (!bannedSet || !bannedSet.has(fixed))) {
        result[id] = fixed;
        prev = fixed;
        continue;
      }

      if (!safePool.length) {
        result[id] = '';
        prev = '';
        continue;
      }

      let chosen = '';
      let attempts = 0;
      while (attempts < safePool.length) {
        const candidate = safePool[cursor % safePool.length];
        cursor++;
        attempts++;
        if (candidate !== prev) {
          chosen = candidate;
          break;
        }
      }
      result[id] = chosen || safePool[(cursor - 1) % safePool.length];
      prev = result[id];
    }

    return result;
}

const ALL_VIEWS = [
  'products','product','company','industries','industryDetail','updates','updateDetail',
  'resources','industryInsights','myCollection','legal','legalDetail','careers','contact',
  'technology','techData','techModel','techSkill','dam','overview','architecture',
  'aiFullStack','creativeSku','atypicaStory','museStory','clipoStory'
] as const;

type SearchIntent = 'company' | 'product' | 'technology' | 'cases' | 'insight' | 'updates' | 'careers' | 'general';
type ContentDomain = 'page' | 'product' | 'agent' | 'case' | 'insight' | 'update' | 'navArticle';

const INTENT_DICT = {
  company: {
    zh: ['了解特赞', '关于特赞', '公司', '团队', '使命', '愿景', '文化', '联系方式', '联系', '地址', '价值观', '介绍', 'tezign'],
    en: ['about', 'company', 'mission', 'vision', 'team', 'contact', 'tezign', 'culture', 'location', 'value', 'intro']
  },
  careers: {
    zh: ['加入特赞', '加入我们', '招聘', '职位', '岗位', '工作机会', 'career', 'job', 'join', 'hr', '招人'],
    en: ['careers', 'career', 'jobs', 'job', 'join tezign', 'hiring', 'open roles', 'hr']
  },
  product: {
    zh: ['产品', '产品体系', 'gea', 'dam', '智能体', 'agent', '系统', '平台', '咨询', 'fullstack', 'ai fullstack', 'creativesku', '创意供给', '模型', 'skill', '能力', 'muse', 'atypica', 'clipo'],
    en: ['product', 'products', 'gea', 'dam', 'agent', 'platform', 'consulting', 'fullstack', 'creativesku', 'model', 'skill', 'capability', 'muse', 'atypica', 'clipo']
  },
  technology: {
    zh: ['技术', '架构', 'architecture', '模型', '推理', 'reasoning', '上下文', 'context', 'skill', '数据主权', '合规', '部署', '安全'],
    en: ['technology', 'architecture', 'model', 'reasoning', 'context', 'skill', 'sovereignty', 'compliance', 'deployment', 'security']
  },
  cases: {
    zh: ['案例', '行业', '行业案例', '实践', '客户', '零售', '消费', '汽车', '制造', '金融', '互联网', '故事', '落地'],
    en: ['case', 'cases', 'industry', 'customer', 'retail', 'auto', 'manufacturing', 'finance', 'tech', 'story', 'practice']
  },
  insight: {
    zh: ['白皮书', '报告', '研究', '方法论', '资料', '洞察', '趋势', '下载', 'insight'],
    en: ['whitepaper', 'report', 'research', 'methodology', 'insight', 'trend', 'download']
  },
  updates: {
    zh: ['动态', '最新动态', '媒体', '报道', '活动', '活动事件', '事件', '峰会', '研讨会', '大会', '发布会', '新闻', '更新', '进展', 'news'],
    en: ['update', 'updates', 'news', 'press', 'media', 'event', 'events', 'summit', 'webinar', 'conference', 'meetup', 'release', 'progress']
  }
};

const DOMAIN_CONFIG: Record<SearchIntent, { allowed: ContentDomain[]; weakPages?: string[] }> = {
  company: { allowed: ['page', 'update'], weakPages: ['company', 'careers', 'contact'] },
  careers: { allowed: ['page'], weakPages: ['careers', 'company'] }, 
  product: { allowed: ['page', 'product', 'agent', 'navArticle'], weakPages: ['products', 'dam', 'overview'] },
  technology: { allowed: ['page', 'navArticle', 'product'], weakPages: ['technology', 'architecture'] },
  cases: { allowed: ['case', 'page'], weakPages: ['industries'] },
  insight: { allowed: ['insight', 'page'], weakPages: ['resources', 'industryInsights'] },
  updates: { allowed: ['update', 'page'], weakPages: ['updates'] },
  general: { allowed: ['page', 'product', 'agent', 'case', 'insight', 'update', 'navArticle'] }
};

const isLikelyKey = (v: any) => {
  if (typeof v !== 'string') return false;
  const s = v.trim();
  if (!s) return false;
  if (s.includes(' ')) return false;
  return (
    s.includes('.') ||
    s.includes('_') ||
    /^([a-z0-9]+_)+[a-z0-9]+/i.test(s)
  );
};

const PAGE_FALLBACKS: Record<'zh' | 'en', Record<string, string>> = {
  zh: {
    company: '致力于开发企业级智能体系统，赋能商业与社会。',
    products: '面向企业智能体时代的产品体系。',
    technology: '支撑企业级智能体运行的技术基础。',
    industries: '在不同行业中交付可持续的业务价值。',
    updates: '正在发生的进展与变化。',
    resources: '与企业及研究者共建的资源基础。',
    industryInsights: '来自实践与研究的系统性总结。',
    legal: '透明与信任是我们合作的基础。',
    careers: '和一群真正把事情做成的人一起工作。',
    contact: '准备好让 AI 真正开始工作了吗？',
    dam: 'AI 时代的内容上下文系统。',
    overview: '构建能对结果负责的数字员工。',
    architecture: '从意图到行动的认知架构。',
    aiFullStack: '用 AI Native 咨询帮助企业落地。',
    creativeSku: '智能体时代的创意供给基础设施。',
    atypicaStory: '用语言模型，为主观世界建模。',
    museStory: 'AI 原生的内容系统。',
    clipoStory: '视频生产的资产化跃迁。',
    techData: '上下文管理系统。',
    techModel: '发散推理模型。',
    techSkill: '智能体技能库。',
    default: '特赞 - 企业级人工智能'
  },
  en: {
    company: 'Dedicated to developing enterprise-grade agent systems.',
    products: 'Product System for the AI Agent Era.',
    technology: 'The technical foundation for enterprise agents.',
    industries: 'Delivering Sustainable Business Value.',
    updates: 'Ongoing Progress and Changes.',
    resources: 'Resource Foundation Co-built with Enterprises.',
    industryInsights: 'Systematic Summaries of Practice & Research.',
    legal: 'Terms & Policies.',
    careers: 'Work with people who truly get things done.',
    contact: 'Ready to put AI to work?',
    dam: 'Content Context System for the AI Era.',
    overview: 'Building Digital Employees Accountable for Results.',
    architecture: 'Cognitive Architecture and Security Foundations.',
    aiFullStack: 'Helping Enterprises Implement AI.',
    creativeSku: 'Creative Supply Infrastructure.',
    atypicaStory: 'Modeling the Subjective World.',
    museStory: 'AI Native Content System.',
    clipoStory: 'The Asset-ization Leap in Video Production.',
    techData: 'Context Management System.',
    techModel: 'Creative Reasoning Model.',
    techSkill: 'Agent Skills Library.',
    default: 'Tezign - Enterprise AI'
  }
};

const normalize = (str: string, lang: string) => {
  if (!str) return '';
  if (lang === 'en') {
    return str.toLowerCase().replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").trim();
  }
  return str.replace(/[.,/#!$%^&*;:{}=\-_`~()，。！？、]/g, "").trim();
};

const normalizeTitleForDedup = (title: string) => {
    if (!title) return '';
    return title
        .replace(/\s*\|\s*(Tezign|特赞)/gi, '')
        .replace(/[^\w\u4e00-\u9fa5]/g, '')
        .toLowerCase()
        .trim();
};

const normalizeCategory = (raw: string | undefined): string => {
  if (!raw) return 'product_updates';
  const lower = raw.toLowerCase();
  
  if (['event', 'events', 'summit', 'conference', '活动', '活动事件', '峰会', '会议', '研讨会', '大会', '论坛', 'hackathon'].some(k => lower.includes(k))) return 'events';
  if (['press', 'media', 'report', '媒体', '报道', '新闻', 'media_press'].some(k => lower.includes(k))) return 'media_press';
  if (['product', 'update', '更新', '产品更新', 'product_updates'].some(k => lower.includes(k))) return 'product_updates';
  
  return 'product_updates'; 
};

const detectIntent = (query: string, lang: 'en' | 'zh'): SearchIntent => {
  const normQuery = normalize(query, lang);
  if (!normQuery) return 'general';

  const priorityOrder: SearchIntent[] = ['careers', 'company', 'product', 'technology', 'updates', 'insight', 'cases'];
  
  for (const intent of priorityOrder) {
    const keywords = INTENT_DICT[intent][lang];
    if (keywords.some(k => normQuery.includes(normalize(k, lang)))) {
      return intent;
    }
  }

  return 'general';
};

const resolveSearchImage = (item: any): string | null => {
  if (!item.image) return null;
  if (item.image === 'https://i.imgs.ovh/2025/12/29/C1c7gU.jpeg') return null;
  if (item.image.includes('picsum') || item.image.includes('placeholder')) return null;
  return item.image;
};

const tokenize = (str: string, lang: string): string[] => {
    const norm = normalize(str, lang);
    if (lang === 'en') {
        return norm.split(/\s+/).filter(t => t.length > 1);
    } else {
        const tokens = [];
        for (let i = 0; i < norm.length - 1; i++) {
            tokens.push(norm.slice(i, i + 2));
        }
        if (norm.length === 1) tokens.push(norm);
        return tokens;
    }
};

const executeSearch = (
    query: string, 
    searchableContent: any[], 
    language: 'en' | 'zh',
    forcedIntent: SearchIntent | null
) => {
    if (!query.trim()) {
        return { 
            intent: 'general', 
            results: [], 
            counts: {}, 
            summaryText: '', 
            hasResults: false, 
            groups: null, 
            fallbackItems: [] 
        };
    }

    const normQuery = normalize(query, language);
    const intent = forcedIntent ?? detectIntent(query, language);
    const config = DOMAIN_CONFIG[intent];
    const allowedDomains = config.allowed;
    const tokens = tokenize(query, language);

    const scoredResults = searchableContent.map(item => {
        const normTitle = normalize(item.title, language);
        const isGeneric = normTitle === 'tezign' || normTitle === '特赞' || normTitle === 'tezign特赞' || normTitle === '特赞tezign';
        if (item.type === 'page' && isGeneric) {
            return { item, score: -1 };
        }

        let effectiveDomain = item.domain;
        if (item.domain === 'navArticle' || item.domain === 'agent') effectiveDomain = 'product'; 
        if (intent === 'technology' && item.domain === 'navArticle') effectiveDomain = 'page';

        const isClipo = query.toLowerCase().includes('clipo') && item.title.toLowerCase().includes('clipo');
        const isFullStack = query.toLowerCase().includes('fullstack') && item.title.toLowerCase().includes('fullstack');
        
        const isAllowed = allowedDomains.includes(item.domain) || 
                          allowedDomains.includes(effectiveDomain as ContentDomain) ||
                          isClipo || isFullStack;

        if (item.domain === 'page' && config.weakPages) {
             if (!config.weakPages.includes(item.page)) return { item, score: -1 };
        }

        if (!isAllowed) return { item, score: -1 };

        let score = 0;
        const titleNorm = normalize(item.title, language);
        const snippetNorm = normalize(item.snippet, language);

        let tokenHits = 0;
        tokens.forEach(token => {
            if (titleNorm.includes(token)) {
                score += 25;
                tokenHits++;
            } else if (snippetNorm.includes(token)) {
                score += 10;
                tokenHits++;
            }
        });

        if (titleNorm.includes(normQuery)) score += 80;
        else if (snippetNorm.includes(normQuery)) score += 50;

        score += item.priority;
        
        if (intent === 'company' && item.page === 'company') score += 40;
        if (intent === 'careers' && item.page === 'careers') score += 200; 
        if (intent === 'product' && (item.page === 'products' || item.domain === 'navArticle')) score += 40;
        if (intent === 'technology' && item.page === 'technology') score += 40;
        if (intent === 'cases' && item.page === 'industries') score += 40;
        
        if (intent === 'updates') {
            if (item.domain === 'update') score += 20;
            if (item.category === 'events' && (normQuery.includes('活动') || normQuery.includes('event'))) score += 50;
        }

        if (intent === 'cases') {
            if (item.domain === 'case') score += 80;
            if (item.domain === 'page' && item.page === 'industries') score += 60; 
            if (item.domain === 'product') score -= 40; 
        }

        if (tokenHits === 0 && !titleNorm.includes(normQuery) && !snippetNorm.includes(normQuery)) {
            if ((intent === 'careers' && item.page === 'careers') || (intent === 'cases' && item.domain === 'case')) {
               score += 50; 
            } else {
               score = -1;
            }
        }

        return { item, score };
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score);

    const uniqueResults: typeof scoredResults = [];
    const seenPages = new Set<string>();
    const seenIds = new Set<string>();
    const seenTitles = new Set<string>();

    for (const res of scoredResults) {
        const { item } = res;
        
        if (item.type === 'page') {
            if (seenPages.has(item.page)) continue;
            seenPages.add(item.page);
        }

        const idKey = `${item.page}:${item.pageId || item.id}`;
        if (seenIds.has(idKey)) continue;
        seenIds.add(idKey);

        const titleKey = normalizeTitleForDedup(item.title);
        if (seenTitles.has(titleKey)) continue;
        seenTitles.add(titleKey);

        uniqueResults.push(res);
    }

    let finalDisplayList: typeof scoredResults = [];
    
    if (intent === 'careers') {
        const careersItemIdx = uniqueResults.findIndex(r => r.item.page === 'careers');
        if (careersItemIdx > 0) {
            const careersItem = uniqueResults.splice(careersItemIdx, 1)[0];
            uniqueResults.unshift(careersItem);
        } else if (careersItemIdx === -1) {
            const careersPage = searchableContent.find(i => i.page === 'careers');
            if (careersPage) uniqueResults.unshift({ item: careersPage, score: 999 });
        }
    }

    if (intent === 'updates') {
        const hasUpdates = uniqueResults.some(r => r.item.domain === 'update');
        if (!hasUpdates || uniqueResults.length === 0) {
             const updatesPageItem = {
                id: 'page-updates-fallback',
                type: 'page',
                domain: 'page',
                title: language === 'en' ? 'Latest Updates' : '最新动态',
                snippet: language === 'en' ? 'View events, media coverage, and product updates.' : '查看活动事件、媒体报道与产品更新。',
                page: 'updates',
                categoryLabel: language === 'en' ? 'Page' : '页面',
                priority: 100
             };
             uniqueResults.unshift({ item: updatesPageItem, score: 999 });
        }
    }

    if (uniqueResults.length === 0) {
        const fallbackIds = ['page-company', 'page-products', 'page-contact'];
        const fallbacks = searchableContent.filter(i => fallbackIds.includes(i.id));
        const summary = language === 'en' 
            ? `We couldn't find an exact match for "${query}", but here are some recommended pages.` 
            : `未找到与“${query}”完全匹配的结果，为你推荐少量核心入口。`;
        return { 
            intent,
            results: [],
            counts: {},
            groups: null, 
            summaryText: summary, 
            hasResults: false, 
            fallbackItems: fallbacks 
        };
    }

    const topScore = uniqueResults[0].score;
    const threshold = Math.max(60, topScore * 0.45);
    const filtered = uniqueResults.filter(r => r.score >= threshold);
    
    finalDisplayList = filtered.length > 0 ? filtered.slice(0, 10) : uniqueResults.slice(0, 3);

    const resultGroups = {
        pages: [] as any[],
        products: [] as any[],
        cases: [] as any[],
        insights: [] as any[],
        updates: [] as any[]
    };

    const counts: Record<string, number> = {};

    finalDisplayList.forEach(r => {
        const d = r.item.domain;
        counts[d] = (counts[d] || 0) + 1;
        
        if (d === 'page') resultGroups.pages.push(r.item);
        else if (d === 'product' || d === 'agent' || d === 'navArticle') resultGroups.products.push(r.item);
        else if (d === 'case') resultGroups.cases.push(r.item);
        else if (d === 'insight') resultGroups.insights.push(r.item);
        else if (d === 'update') resultGroups.updates.push(r.item);
    });

    const topHit = finalDisplayList[0].item;
    const intentLabels: Record<string, string> = {
        company: language === 'en' ? 'Company Info' : '公司信息',
        careers: language === 'en' ? 'Careers' : '加入我们',
        product: language === 'en' ? 'Products & Solutions' : '产品与解决方案',
        technology: language === 'en' ? 'Technology' : '技术架构',
        cases: language === 'en' ? 'Case Studies' : '行业案例',
        insight: language === 'en' ? 'Insights' : '洞察研究',
        updates: language === 'en' ? 'Updates' : '最新动态',
        general: language === 'en' ? 'General' : '综合结果'
    };
    const intentLabel = intentLabels[intent];
    
    const summary = language === 'en'
        ? `You are searching for "${query}". Top result: "${topHit.title}". Showing results related to "${intentLabel}".`
        : `你在搜索“${query}”。最相关结果是「${topHit.title}」。这里优先为你展示与「${intentLabel}」相关的内容入口与结果。`;

    return { 
        intent,
        results: finalDisplayList,
        counts,
        groups: resultGroups, 
        summaryText: summary, 
        hasResults: true, 
        fallbackItems: [] 
    };
};

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const { t, language } = useLanguage();
  const { isAuthenticated, setIsAuthModalOpen } = useAuth();
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  
  const [forcedIntent, setForcedIntent] = useState<SearchIntent | null>(null);

  const placeholders = language === 'en' ? [
    "Learn about our mission",
    "Discover GEA Agents",
    "Explore Case Studies",
    "Latest Whitepapers",
    "Product Updates"
  ] : [
    "了解我们的使命",
    "探索 GEA 智能体",
    "搜索行业案例",
    "下载最新白皮书",
    "查看产品动态"
  ];

  const navLinks = [
    { label: t('nav_ia.products'), page: 'products' },
    { label: t('nav_ia.technology'), page: 'techData' },
    { label: t('nav_ia.industries'), page: 'industries' },
    { label: t('nav_ia.resources'), page: 'resources' },
    { label: t('nav_ia.company'), page: 'company' },
  ];

  const quickSearches = language === 'en' ? [
    { label: 'Internet & Tech', query: 'Internet', intentOverride: 'cases' },
    { label: 'Consumer & Retail', query: 'Consumer', intentOverride: 'cases' },
    { label: 'Automotive', query: 'Auto', intentOverride: 'cases' },
    { label: 'GEA System', query: 'GEA', intentOverride: 'product' },
    { label: 'Product Innovation', query: 'Innovation', intentOverride: 'product' },
    { label: 'Case Studies', query: 'Case', intentOverride: 'cases' },
  ] : [
    { label: '互联网与科技', query: '互联网', intentOverride: 'cases' },
    { label: '消费品与零售', query: '消费品', intentOverride: 'cases' },
    { label: '汽车与制造', query: '汽车', intentOverride: 'cases' },
    { label: 'GEA 系统', query: 'GEA', intentOverride: 'product' },
    { label: '产品创新', query: '创新', intentOverride: 'product' },
    { label: '行业案例', query: '案例', intentOverride: 'cases' },
  ];

  useEffect(() => {
    if (!isOpen || query) return;
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isOpen, placeholders.length, query]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 400);
    } else {
      document.body.style.overflow = 'unset';
      setQuery('');
      setIsSearching(false);
      setForcedIntent(null);
    }
  }, [isOpen]);

  const safeT = (key: string, fallback: string) => {
    const v = t(key);
    if (typeof v !== 'string') return fallback;
    return isLikelyKey(v) ? fallback : v;
  };

  const getProductCopy = (id: string) => {
      let pid = id;
      if (pid === 'insight') pid = 'market';

      const agentItem = AGENTS.find(a => a.id === id);
      const dataItem = PRODUCT_DETAILS_DATA[pid];

      let title = safeT(`product_details.${pid}.name`, '');
      if (!title && agentItem) title = language === 'en' ? agentItem.nameEn : agentItem.nameCn;
      if (!title && dataItem) title = dataItem.name;

      let snippet = safeT(`product_details.${pid}.statement`, '');
      if (!snippet) snippet = safeT(`product_details.${pid}.description`, '');
      if (!snippet && agentItem) snippet = language === 'en' ? agentItem.descriptionEn : agentItem.descriptionCn;
      if (!snippet && dataItem) snippet = dataItem.statement || dataItem.description;

      return { title, snippet, pid };
  };

  const searchableContent = useMemo(() => {
    const items: any[] = [];

    ALL_VIEWS.forEach(view => {
      const meta = getViewMeta(view, undefined, t, language);
      let rawTitle = meta.title?.split(' | ')[0] || '';
      
      if (!rawTitle || rawTitle.trim() === 'Tezign' || rawTitle.trim() === '特赞') {
         if (view === 'company') rawTitle = language === 'en' ? 'About Tezign' : '关于特赞';
         else if (view === 'careers') rawTitle = language === 'en' ? 'Join Us' : '加入我们';
         else if (view === 'contact') rawTitle = language === 'en' ? 'Contact Us' : '联系我们';
         else if (view === 'products') rawTitle = language === 'en' ? 'Products' : '产品体系';
      }

      let rawSnippet = meta.description || '';

      if (isLikelyKey(rawSnippet)) {
        const fallbacks = language === 'en' ? PAGE_FALLBACKS.en : PAGE_FALLBACKS.zh;
        // @ts-ignore
        rawSnippet = fallbacks[view] || fallbacks.default;
      }
      
      let image = '';
      if (CRITICAL_ASSETS[view] && CRITICAL_ASSETS[view].length > 0) {
        image = CRITICAL_ASSETS[view][0];
      }

      items.push({
        id: `page-${view}`,
        type: 'page',
        domain: 'page',
        title: rawTitle,
        categoryLabel: language === 'en' ? 'Page' : '页面',
        snippet: rawSnippet,
        image,
        page: view,
        pageId: undefined,
        priority: 10
      });
    });

    const navArticles = language === 'en' ? NAV_ARTICLES_EN : NAV_ARTICLES_ZH;
    const NAV_MAPPING: Record<string, string> = {
        'techArchitecture': 'architecture',
        'dam': 'dam',
        'gea': 'overview',
        'aiFullStack': 'aiFullStack',
        'creativeSku': 'creativeSku',
        'atypica': 'atypicaStory',
        'muse': 'museStory',
        'clipo': 'clipoStory'
    };

    const navKeys = Object.keys(navArticles).filter(k => NAV_MAPPING[k]);
    const navCovers = pickCoverForList(navKeys, CRITICAL_ASSETS.updates, NEWS_IMAGES_MAP, DISALLOWED_IMAGES);

    navKeys.forEach(key => {
        const article = navArticles[key];
        const image = navCovers[key] || '';
        
        items.push({
            id: `nav-${key}`,
            type: 'navArticle',
            domain: 'navArticle',
            title: article.title,
            categoryLabel: language === 'en' ? 'Core Product' : '核心产品',
            date: article.date,
            snippet: article.subtitle,
            image,
            page: NAV_MAPPING[key],
            pageId: undefined,
            priority: 12
        });
    });

    const newsMap = language === 'en' ? NEWS_TRANSLATIONS_EN : NEWS_TRANSLATIONS_ZH;
    const newsIds = Object.keys(newsMap);
    const newsCovers = pickCoverForList(newsIds, CRITICAL_ASSETS.updates, NEWS_IMAGES_MAP, DISALLOWED_IMAGES);

    newsIds.forEach(key => {
      const item = newsMap[key];
      if (!item || !item.title) return;
      
      const normalizedCategory = normalizeCategory(item.category);
      const image = newsCovers[key] || '';

      const catLabel = t(`nav.dropdowns.items.${normalizedCategory}`) || (language === 'en' ? 'Update' : '动态');

      items.push({
        id: `update-${key}`,
        type: 'update',
        domain: 'update',
        category: normalizedCategory,
        title: item.title,
        categoryLabel: catLabel,
        date: item.dateISO || item.date || '',
        snippet: item.subtitle || '',
        image, 
        page: 'updateDetail',
        pageId: key,
        priority: 6
      });
    });

    const insights = getInsightsByLanguage(language as 'en'|'zh');
    insights.forEach(item => {
      items.push({
        id: item.id,
        type: 'insight',
        domain: 'insight',
        title: item.title,
        categoryLabel: item.type === 'whitepaper' ? t('insights_page.filters.whitepaper') : t('insights_page.filters.report'),
        date: item.date,
        snippet: item.desc,
        image: '', 
        page: 'industryInsights',
        pageId: item.type === 'whitepaper' ? 'tab:whitepaper' : 'tab:report',
        priority: 5
      });
    });

    const industryCases = language === 'en' ? INDUSTRY_CASES_EN : INDUSTRY_CASES_ZH;
    industryCases.forEach(c => {
      items.push({
        id: `case-${c.id}`,
        type: 'case',
        domain: 'case',
        title: c.title,
        categoryLabel: t(`nav.dropdowns.items.${c.industry}`),
        date: '2026',
        snippet: c.content?.statement || c.companyDescription || '',
        image: c.imageUrl || '',
        page: 'industryDetail',
        pageId: c.id,
        priority: 5
      });
    });

    AGENTS.forEach(a => {
      const { title, snippet, pid } = getProductCopy(a.id);
      if (!title) return; 

      items.push({
        id: `agent-${a.id}`,
        type: 'agent',
        domain: 'product', 
        title: title,
        categoryLabel: language === 'en' ? 'Enterprise Agent' : '企业级智能体',
        date: 'Product',
        snippet: snippet,
        image: a.imageUrl || '',
        page: 'product',
        pageId: pid, 
        priority: 8
      });
    });

    return items;
  }, [language, t]);

  const auditRef = useRef(false);
  useEffect(() => {
    if (process.env.NODE_ENV === 'development' && !auditRef.current) {
        auditRef.current = true;
        const TEST_QUERIES_ZH = ['活动','媒体','报道','更新','动态','白皮书','报告','案例','行业','加入特赞','GEA','DAM','clipo','ai fullstack','互联网与科技'];
        console.group('🔍 SearchModal Dev Audit');
        TEST_QUERIES_ZH.forEach(q => {
            const { intent, results, counts } = executeSearch(q, searchableContent, 'zh', null);
            console.groupCollapsed(`Query: "${q}"`);
            console.log(`Intent: ${intent}`);
            console.table(counts);
            if (results.length > 0) {
                console.table(results.slice(0, 3).map(r => ({
                    title: r.item.title,
                    domain: r.item.domain,
                    category: r.item.category,
                    score: r.score,
                    page: r.item.page
                })));
            } else {
                console.log('No results found.');
            }
            console.groupEnd();
        });
        console.groupEnd();
    }
  }, [searchableContent]);

  const { groups, summaryText, hasResults, fallbackItems } = useMemo(() => {
    return executeSearch(query, searchableContent, language as 'en'|'zh', forcedIntent);
  }, [query, searchableContent, language, forcedIntent]);

  const handleResultClick = (page: any, pageId?: string) => {
    if (page === 'product' && !pageId) {
        console.warn('Navigation to product detail requires an ID');
        return;
    }

    if (onNavigate) {
        onNavigate(page, pageId);
        onClose();
    }
  };

  const handleSearchTrigger = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (query.trim()) setIsSearching(true);
  };

  const renderGroup = (title: string, items: any[]) => {
      if (!items || items.length === 0) return null;
      return (
          <div className="mb-16 last:mb-0">
             <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">{title}</h4>
             </div>
             <div className="divide-y divide-gray-100">
                {items.map((item) => {
                    const validImage = resolveSearchImage(item);
                    
                    let displayTitle = item.title;
                    let displaySnippet = item.snippet;
                    if (item.page === 'product' && item.pageId && (displayTitle.includes('Tezign') || displayTitle.includes('特赞'))) {
                         const fixed = getProductCopy(item.pageId);
                         if (fixed.title && !fixed.title.includes('Tezign') && !fixed.title.includes('特赞')) displayTitle = fixed.title;
                         if (fixed.snippet) displaySnippet = fixed.snippet;
                    }

                    return (
                        <div 
                        key={item.id}
                        onClick={() => handleResultClick(item.page, item.pageId)}
                        className="group flex flex-col md:flex-row items-start md:items-center justify-between py-6 cursor-pointer first:pt-0"
                        >
                        <div className="flex-grow pr-8">
                            <div className="flex items-center gap-3 mb-2">
                                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{item.categoryLabel}</span>
                                {item.date && item.date !== 'Product' && <span className="text-[9px] text-gray-300 font-mono">{item.date}</span>}
                            </div>
                            <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2 group-hover:text-black transition-colors">
                                {displayTitle}
                            </h3>
                            <p className="text-sm text-gray-500 line-clamp-2 font-light leading-relaxed">
                                {displaySnippet}
                            </p>
                        </div>
                        {validImage && (
                            <div className="mt-4 md:mt-0 w-full md:w-32 aspect-[4/3] rounded-lg overflow-hidden bg-gray-50 flex-shrink-0 shadow-sm group-hover:shadow-md transition-shadow relative">
                                <img src={validImage} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            </div>
                        )}
                        </div>
                    );
                })}
             </div>
          </div>
      );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-white flex flex-col overflow-y-auto custom-scrollbar"
        >
          <div className="sticky top-0 z-50 bg-white/90 backdrop-blur-md flex items-center justify-between px-6 md:px-12 h-14 md:h-16 border-b border-gray-50 flex-shrink-0">
            <div className="flex items-center gap-6 h-full">
               <div className="flex items-baseline gap-2">
                 <span className="font-semibold text-[17px] tracking-tight text-gray-900 leading-none">Tezign</span>
                 {language === 'zh' && (
                   <span className="font-medium text-[15.5px] text-gray-800 leading-none tracking-normal">特赞</span>
                 )}
               </div>
               
               <div 
                 className="relative h-full flex items-center group"
                 onMouseEnter={() => setIsMenuHovered(true)}
                 onMouseLeave={() => setIsMenuHovered(false)}
               >
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-50 text-gray-400 cursor-pointer transition-all hover:text-black">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="7" x2="20" y2="7"></line>
                      <line x1="4" y1="12" x2="20" y2="12"></line>
                      <line x1="4" y1="17" x2="20" y2="17"></line>
                    </svg>
                  </div>

                  <AnimatePresence>
                    {isMenuHovered && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="absolute left-full ml-4 flex items-center gap-6 whitespace-nowrap"
                      >
                        {navLinks.map((link) => (
                          <button 
                            key={link.page} 
                            onClick={() => handleResultClick(link.page)}
                            className="text-[13px] font-medium text-gray-400 hover:text-black transition-colors"
                          >
                            {link.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
               </div>
            </div>

            <div className="flex items-center gap-4 md:gap-8">
               <button onClick={onClose} className="p-2 text-gray-300 hover:text-black transition-colors">
                 <ICONS.Close className="w-5 h-5" />
               </button>

               {isAuthenticated ? (
                  <div className="relative flex items-center">
                    <button onClick={() => handleResultClick('myCollection')} className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[10px] font-bold text-white shadow-sm ring-1 ring-gray-100 ring-offset-1">T</button>
                  </div>
               ) : (
                  <button onClick={() => { setIsAuthModalOpen(true); onClose(); }} className="bg-gray-100 hover:bg-gray-200 text-black px-6 py-2 rounded-full text-[11px] font-bold tracking-widest transition-all uppercase">
                    {t('nav.signin')}
                  </button>
               )}
            </div>
          </div>

          <div className={`w-full flex flex-col items-center transition-all duration-700 ${isSearching ? 'pt-12 md:pt-20' : 'pt-[20vh]'}`}>
            <div className="w-full max-w-4xl px-6">
              <form onSubmit={handleSearchTrigger} className="relative group">
                <AnimatePresence mode="wait">
                    {!query && (
                    <motion.div 
                        key={placeholderIndex}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
                    >
                        <span className="text-3xl md:text-5xl text-gray-300 font-medium tracking-tight">
                        {placeholders[placeholderIndex]}
                        </span>
                    </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex items-center gap-4">
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setForcedIntent(null); 
                            if (isSearching && !e.target.value) setIsSearching(false);
                        }}
                        className="flex-grow bg-transparent text-3xl md:text-5xl font-medium text-gray-900 border-none outline-none focus:ring-0 py-6"
                    />
                    
                    {!isSearching && (
                        <button type="submit" className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white shadow-xl transition-all duration-300 ${query ? 'bg-black scale-100 opacity-100' : 'bg-gray-100 text-gray-400 scale-95 opacity-50'}`}>
                            <ICONS.ArrowRight className="-rotate-90 w-5 h-5 md:w-6 md:h-6" />
                        </button>
                    )}

                    {query && isSearching && (
                      <button onClick={() => {setQuery(''); setIsSearching(false); setForcedIntent(null);}} className="p-2 text-gray-300 hover:text-black">
                        <ICONS.Close className="w-5 h-5" />
                      </button>
                    )}
                </div>
                <div className="h-px bg-gray-100 group-focus-within:bg-black transition-colors duration-500" />
              </form>
            </div>
          </div>

          <div className="w-full max-w-4xl mx-auto px-6 py-16">
            <AnimatePresence mode="wait">
              {!isSearching ? (
                <motion.div 
                  key="initial"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col"
                >
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">{t('search.quick_searches')}</p>
                  <div className="flex flex-wrap gap-3">
                    {quickSearches.map((item) => (
                      <button 
                        key={item.label} 
                        onClick={() => { 
                            setQuery(item.label); 
                            if (item.intentOverride) {
                                setForcedIntent(item.intentOverride as SearchIntent); 
                            }
                            setIsSearching(true); 
                        }} 
                        className="px-6 py-3 bg-white border border-gray-100 rounded-full text-sm font-medium text-gray-600 hover:border-black hover:text-black transition-all shadow-sm"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-20"
                >
                  <div>
                    <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">{language === 'en' ? 'Summary' : '概要'}</h4>
                    <div className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light max-w-3xl">{summaryText}</div>
                  </div>

                  {hasResults && groups ? (
                      <div>
                          {renderGroup(language === 'en' ? 'Pages' : '页面', groups.pages)}
                          {renderGroup(language === 'en' ? 'Products & Agents' : '产品与智能体', groups.products)}
                          {renderGroup(language === 'en' ? 'Cases' : '行业案例', groups.cases)}
                          {renderGroup(language === 'en' ? 'Insights' : '洞察与研究', groups.insights)}
                          {renderGroup(language === 'en' ? 'Updates' : '动态', groups.updates)}
                      </div>
                  ) : (
                      <div>
                        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">{language === 'en' ? 'Recommended' : '推荐页面'}</h4>
                        <div className="divide-y divide-gray-100">
                             {fallbackItems.map((item: any) => {
                                 const validImage = resolveSearchImage(item);
                                 return (
                                 <div key={item.id} onClick={() => handleResultClick(item.page, item.pageId)} className="group flex flex-col md:flex-row items-start md:items-center justify-between py-6 cursor-pointer">
                                     <div className="flex-grow pr-8">
                                         <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-1 block">{item.categoryLabel}</span>
                                         <h3 className="text-lg md:text-xl font-medium text-gray-900 group-hover:text-black transition-colors">{item.title}</h3>
                                     </div>
                                      {validImage ? (
                                          <div className="mt-4 md:mt-0 w-full md:w-32 aspect-[4/3] rounded-lg overflow-hidden bg-gray-50 flex-shrink-0 shadow-sm relative">
                                            <img src={validImage} alt="" className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                                          </div>
                                      ) : null}
                                 </div>
                                 );
                             })}
                        </div>
                      </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
