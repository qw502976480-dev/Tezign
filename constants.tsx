
import React from 'react';
import { ProductDetailData } from './types';

// RE-EXPORT UI COMPONENTS
export { ICONS } from './components/ui/Icons';

// RE-EXPORT DATA CONSTANTS
export { AGENTS, SYSTEM_FOUNDATIONS, GENERAL_TESTIMONIALS } from './data/staticData';

// CONFIGURATION CONSTANTS (Kept here)
export const NAV_IMAGES = {
  products_dam: "https://i.imgs.ovh/2025/12/27/CBvFhA.png",
  products_gea: "https://i.imgs.ovh/2025/12/29/C1cUN0.jpeg",
  technology: "https://i.imgs.ovh/2026/01/17/yTeVKb.png",
  industries: "https://i.imgs.ovh/2025/12/29/C1j1f4.jpeg",
  resources_1: "https://i.imgs.ovh/2026/01/17/yTeAgn.png",
  resources_2: "https://i.imgs.ovh/2026/01/17/yTeqUM.png",
  comp_atypica: "https://i.imgs.ovh/2026/01/17/yTeRoL.png",
  comp_musedam: "https://i.imgs.ovh/2026/01/17/yTe6uh.png",
  comp_clipo: "https://i.imgs.ovh/2026/01/17/yTeFQd.png",
};

// Map article IDs to their specific cover images (The 7 Special Articles)
export const NEWS_IMAGES_MAP: Record<string, string> = {
  gea: NAV_IMAGES.products_gea,
  dam: NAV_IMAGES.products_dam,
  muse: NAV_IMAGES.comp_musedam,
  atypica: NAV_IMAGES.comp_atypica,
  clipo: NAV_IMAGES.comp_clipo,
  aiFullStack: NAV_IMAGES.resources_1,
  creativeSku: NAV_IMAGES.resources_2,
};

// Shared Pool of abstract backgrounds for general updates/events
export const UPDATE_COVER_POOL = [
  'https://i.imgs.ovh/2025/12/29/C1j1f4.jpeg',
  'https://i.imgs.ovh/2025/12/29/C1jNtN.jpeg',
  'https://i.imgs.ovh/2025/12/29/C1c0yH.jpeg',
  'https://i.imgs.ovh/2025/12/29/C1cCYX.jpeg',
  'https://i.imgs.ovh/2025/12/29/C1caQm.jpeg',
  'https://i.imgs.ovh/2025/12/29/C1cZUF.jpeg',
  'https://i.imgs.ovh/2025/12/29/C1cju9.jpeg',
  'https://i.imgs.ovh/2025/12/29/C1crep.jpeg',
  'https://i.imgs.ovh/2025/12/29/C1cfrc.jpeg',
  'https://i.imgs.ovh/2025/12/29/C1cSOO.jpeg',
  'https://i.imgs.ovh/2025/12/29/C1cvK6.jpeg',
  'https://i.imgs.ovh/2025/12/29/C1cUN0.jpeg',
  'https://i.imgs.ovh/2025/12/29/C1cTog.jpeg'
];

export const NEWS_ITEMS = [
  // Core Products & Services as Updates (Filtered List)
  { id: 'gea', category: 'product_updates' },
  { id: 'dam', category: 'product_updates' },
  { id: 'muse', category: 'product_updates' },
  { id: 'atypica', category: 'product_updates' },
  { id: 'clipo', category: 'product_updates' },
  { id: 'aiFullStack', category: 'product_updates' },
  { id: 'creativeSku', category: 'product_updates' },
  
  // Media Press
  { id: 'mp-peoples-daily-agent', category: 'media_press' }
];

export const PRODUCT_DETAILS_DATA: Record<string, ProductDetailData> = {
  // ... (Keep existing content as is, omitted for brevity) ...
  market: {
    id: 'market',
    name: 'Market Insight',
    statement: 'Turns fragmented market signals into clear strategic insight.',
    description: 'The Insight agent continuously monitors the entire web, combined with internal historical data, to provide brands with a dynamic panoramic view of the market.',
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBvT5H.png',
    videoUrl: '',
    features: [],
    testimonials: [
        {
            quote: { en: "Insight agent cut our trend analysis time by 40%. It captures signals we used to miss.", zh: "洞察智能体将我们的趋势分析时间缩短了 40%。它捕捉到了我们过去经常错过的信号。" },
            author: { en: "Chief Marketing Officer", zh: "首席营销官" },
            role: { en: "Executive", zh: "高管" },
            company: { en: "Global Retail Giant", zh: "某全球零售巨头" },
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80"
        },
        // ... (Keep existing testimonials) ...
    ]
  },
  expert: {
    id: 'expert',
    name: 'Enterprise Expert',
    statement: 'Applies institutional knowledge to real business decisions.',
    description: 'The Expert agent acts as the "super brain" of the enterprise.',
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBvLaN.png',
    videoUrl: '',
    features: [],
    testimonials: []
  },
  growth: {
    id: 'growth',
    name: 'Content Growth',
    statement: 'Transforms content assets into measurable growth outcomes.',
    description: 'The Growth agent focuses on scaled content production.',
    imageUrl: 'https://i.imgs.ovh/2026/01/18/yUSX5h.png',
    videoUrl: '',
    features: [],
    testimonials: []
  },
  innovation: {
    id: 'innovation',
    name: 'Product Innovation',
    statement: 'Accelerates product ideas from concept to validation.',
    description: 'The Innovation agent connects market insights with R&D.',
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBvrSC.png',
    videoUrl: '',
    features: [],
    testimonials: []
  },
  social: {
    id: 'social',
    name: 'Social Matrix',
    statement: 'Orchestrates multi-channel content at scale.',
    description: 'The Social agent unifies management of all social media channels.',
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBvaza.png',
    videoUrl: '',
    features: [],
    testimonials: []
  },
  revenue: {
    id: 'revenue',
    name: 'Sales Operations',
    statement: 'Supports sales teams with intelligence, not automation.',
    description: 'The Revenue agent empowers sales teams with intelligence.',
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBrNDL.png',
    videoUrl: '',
    features: [],
    testimonials: []
  },
  dam: {
    id: 'dam',
    name: 'Digital Asset Management',
    statement: 'Content is Context.',
    description: 'Centralized management, reuse, and collaboration of content assets.',
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBvFhA.png',
    videoUrl: '',
    features: [],
    testimonials: [
      {
        quote: { en: "Tezign's DAM has become our single source of truth. It cut our asset search time by 70% across global teams.", zh: "特赞 DAM 已成为我们内容的唯一真实来源。它帮助我们将全球团队的资产检索时间缩短了 70%。" },
        author: { en: "Head of Content Ops", zh: "内容运营负责人" },
        role: { en: "Director", zh: "总监" },
        company: { en: "Global FMCG Brand", zh: "全球快消品牌" },
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80"
      },
      {
        quote: { en: "The AI tagging capability is a game changer. Assets that were previously 'dead' are now easily retrievable and reusable.", zh: "AI 智能打标能力是颠覆性的。以前“沉睡”的资产现在可以被轻松检索和复用。" },
        author: { en: "Digital Director", zh: "数字化总监" },
        role: { en: "Executive", zh: "高管" },
        company: { en: "Leading Retail Chain", zh: "领先零售连锁" },
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80"
      },
      {
        quote: { en: "We manage millions of assets. Tezign provides the stability and compliance safeguards we absolutely need.", zh: "我们管理着数百万计的资产。特赞提供了我们绝对需要的稳定性和合规保障。" },
        author: { en: "VP of Engineering", zh: "技术副总裁" },
        role: { en: "VP", zh: "副总裁" },
        company: { en: "Internet Platform", zh: "知名互联网平台" },
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80"
      }
    ]
  }
};

/**
 * OPTIMIZED ASSET LOADING STRATEGY
 * 
 * 1. INITIAL_ASSETS: Absolute minimum required to render the Home Hero section. 
 *    Blocks the initial "Optimizing Environment" loader.
 * 
 * 2. CRITICAL_ASSETS: Per-page assets required before performing a "Solid State" navigation.
 *    Blocks the navigation transition (curtain).
 * 
 * 3. BACKGROUND_ASSETS: Non-critical assets (Nav dropdowns, footer, etc.)
 *    Loaded silently after boot to ensure hover interactions are instant.
 */

export const INITIAL_ASSETS = [
  'https://i.imgs.ovh/2025/12/27/CBvFhA.png', // Hero DAM
  'https://i.imgs.ovh/2025/12/29/C1cUN0.jpeg', // Hero GEA (Overview)
];

export const BACKGROUND_ASSETS = [
  ...Object.values(NAV_IMAGES),
  'https://i.imgs.ovh/2025/12/27/CBvT5H.png',
  'https://i.imgs.ovh/2025/12/27/CBvLaN.png',
  'https://i.imgs.ovh/2026/01/18/yUSX5h.png',
  'https://i.imgs.ovh/2025/12/27/CBvrSC.png',
  'https://i.imgs.ovh/2025/12/27/CBvaza.png',
  'https://i.imgs.ovh/2025/12/27/CBrNDL.png',
  'https://i.imgs.ovh/2025/12/30/C1ddAY.jpeg'
];

export const CRITICAL_ASSETS: Record<string, string[]> = {
  home: INITIAL_ASSETS,
  products: [
    'https://i.imgs.ovh/2025/12/27/CBvFhA.png',
    'https://i.imgs.ovh/2025/12/29/C1cUN0.jpeg',
    'https://i.imgs.ovh/2025/12/27/CBvT5H.png',
    'https://i.imgs.ovh/2025/12/27/CBvLaN.png',
    'https://i.imgs.ovh/2026/01/18/yUSX5h.png',
    'https://i.imgs.ovh/2025/12/27/CBvrSC.png',
    'https://i.imgs.ovh/2025/12/27/CBvaza.png',
    'https://i.imgs.ovh/2025/12/27/CBrNDL.png'
  ],
  'product:dam': ['https://i.imgs.ovh/2025/12/27/CBvFhA.png'],
  'product:market': ['https://i.imgs.ovh/2025/12/27/CBvT5H.png'],
  'product:expert': ['https://i.imgs.ovh/2025/12/27/CBvLaN.png'],
  'product:growth': ['https://i.imgs.ovh/2026/01/18/yUSX5h.png'],
  'product:innovation': ['https://i.imgs.ovh/2025/12/27/CBvrSC.png'],
  'product:social': ['https://i.imgs.ovh/2025/12/27/CBvaza.png'],
  'product:revenue': ['https://i.imgs.ovh/2025/12/27/CBrNDL.png'],
  company: [
    'https://i.imgs.ovh/2025/12/30/C1ddAY.jpeg'
  ],
  updates: [
    'https://i.imgs.ovh/2025/12/29/C1j3eA.jpeg',
    ...UPDATE_COVER_POOL.slice(0, 4) // Only block on first few, lazy load rest
  ],
  technology: [
     'https://i.imgs.ovh/2026/01/17/yTeVKb.png'
  ],
  resources: [
    'https://i.imgs.ovh/2026/01/17/yTeAgn.png',
    'https://i.imgs.ovh/2026/01/17/yTeqUM.png'
  ],
  industries: [
    'https://i.imgs.ovh/2025/12/29/C1j1f4.jpeg'
  ]
};
