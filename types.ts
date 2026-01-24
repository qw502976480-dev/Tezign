
// FIX: Import React to provide the React namespace for types like React.ReactNode.
import React from 'react';

export type ViewType = 
  | 'home' | 'product' | 'products' | 'company' | 'industryDetail' | 'industries' 
  | 'updates' | 'updateDetail' | 'resources' | 'industryInsights' | 'myCollection' 
  | 'legal' | 'legalDetail' | 'careers' | 'contact' | 'technology' 
  | 'techData' | 'techModel' | 'techSkill' | 'dam' | 'overview' | 'architecture' 
  | 'aiFullStack' | 'creativeSku' | 'atypicaStory' | 'museStory' | 'clipoStory';

export interface Agent {
  id: string;
  name: string;
  nameEn: string;
  nameCn: string;
  description: string;
  descriptionEn: string;
  descriptionCn: string;
  outcome: string;
  capabilities: string[];
  vibe: string;
  vibeCn: string;
  imageUrl: string;
}

export type ContentBlock = 
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'quote'; text: string; author?: string };

export type IndustryContentBlock = ContentBlock; // Renamed from CaseStudyContentBlock
// Add alias for backward compatibility
export type CaseStudyContentBlock = IndustryContentBlock;

export interface IndustryCase { // Renamed from CaseStudy
  id: string;
  logo: string;
  logoSub?: string;
  title: string;
  companyDescription?: string; 
  industry: string; 
  subIndustry?: string; // Specific vertical (e.g., Beauty, Tech)
  category: string; 
  imageUrl: string;
  content?: {
    statement: string;
    blocks: IndustryContentBlock[];
  };
}
// Add alias for backward compatibility
export type CaseStudy = IndustryCase;

export interface SystemFoundation {
  title: string;
  description: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProductTestimonial {
  quote: {
    en: string;
    zh: string;
  };
  author: {
    en: string;
    zh: string;
  };
  role: {
    en: string;
    zh: string;
  };
  company: {
    en: string;
    zh: string;
  };
  avatar?: string;
}

export interface ProductDetailData {
  id:string;
  name: string;
  statement: string;
  description: string;
  // FIX: Added missing imageUrl property to resolve type errors in ProductDetail.tsx
  imageUrl: string;
  videoUrl: string; 
  features: ProductFeature[];
  testimonials: ProductTestimonial[];
}
