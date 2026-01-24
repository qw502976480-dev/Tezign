
import { ViewType } from '../types';

export interface SpecialPageConfig {
  id: string;
  categoryOverride?: { en: string; zh: string };
  sidebar: {
    label: { en: string; zh: string }; // e.g. "Related Product"
    title: { en: string; zh: string }; // e.g. "DAM Digital Asset Management"
    buttonText: { en: string; zh: string }; // e.g. "Visit Website"
    action: {
      type: 'navigate' | 'external';
      target: ViewType | string;
      id?: string;
    };
  };
  cta: {
    title: { en: string; zh: string };
    button: { en: string; zh: string };
    action: {
      type: 'navigate';
      target: ViewType;
    };
  };
}

export const SPECIAL_PAGES: Record<string, SpecialPageConfig> = {
  dam: {
    id: 'dam',
    categoryOverride: { en: 'Product Update', zh: '产品更新' },
    sidebar: {
      label: { en: 'Related Product', zh: '相关产品' },
      title: { en: 'DAM Digital Asset Management', zh: 'DAM 内容资产管理系统' },
      buttonText: { en: 'Visit Website', zh: '访问官网' },
      action: { type: 'navigate', target: 'product', id: 'dam' }
    },
    cta: {
      title: { en: 'Ready to start your Enterprise AI journey?', zh: '准备好开启您的企业级 AI 旅程了吗？' },
      button: { en: 'Contact Us', zh: '联系我们' },
      action: { type: 'navigate', target: 'contact' }
    }
  },
  techArchitecture: {
    id: 'techArchitecture',
    categoryOverride: { en: 'Product Update', zh: '产品更新' },
    sidebar: {
      label: { en: 'Related Technology', zh: '相关技术' },
      title: { en: 'GEA Architecture & Technical Principles', zh: 'GEA 架构与技术原理' },
      buttonText: { en: 'View Technical Details', zh: '查看技术细节' },
      action: { type: 'navigate', target: 'technology' }
    },
    cta: {
      title: { en: 'Ready to start your Enterprise AI journey?', zh: '准备好开启您的企业级 AI 旅程了吗？' },
      button: { en: 'Contact Us', zh: '联系我们' },
      action: { type: 'navigate', target: 'contact' }
    }
  },
  aiFullStack: {
    id: 'aiFullStack',
    categoryOverride: { en: 'Product Update', zh: '产品更新' },
    sidebar: {
      label: { en: 'Related Service', zh: '相关服务' },
      title: { en: 'AI FullStack Enterprise Consulting', zh: 'AI FullStack 企业咨询服务' },
      buttonText: { en: 'Visit Website', zh: '访问官网' },
      action: { type: 'external', target: 'https://fullstack.tezign.com/' }
    },
    cta: {
      title: { en: 'Ready to start your Enterprise AI journey?', zh: '准备好开启您的企业级 AI 旅程了吗？' },
      button: { en: 'Contact Us', zh: '联系我们' },
      action: { type: 'navigate', target: 'contact' }
    }
  },
  creativeSku: {
    id: 'creativeSku',
    categoryOverride: { en: 'Product Update', zh: '产品更新' },
    sidebar: {
      label: { en: 'Related Service', zh: '相关服务' },
      title: { en: 'CreativeSKU Creative Supply Service', zh: 'CreativeSKU 创意供给服务' },
      buttonText: { en: 'Visit Website', zh: '访问官网' },
      action: { type: 'external', target: 'https://creativesku.com/' }
    },
    cta: {
      title: { en: 'Ready to start your Enterprise AI journey?', zh: '准备好开启您的企业级 AI 旅程了吗？' },
      button: { en: 'Contact Us', zh: '联系我们' },
      action: { type: 'navigate', target: 'contact' }
    }
  },
  atypica: {
    id: 'atypica',
    categoryOverride: { en: 'Product Update', zh: '产品更新' },
    sidebar: {
      label: { en: 'Related Product', zh: '相关产品' },
      title: { en: 'atypica.AI', zh: 'atypica.AI' },
      buttonText: { en: 'Visit Website', zh: '访问官网' },
      action: { type: 'external', target: 'https://atypica.ai/' }
    },
    cta: {
      title: { en: 'Ready to start your Enterprise AI journey?', zh: '准备好开启您的企业级 AI 旅程了吗？' },
      button: { en: 'Contact Us', zh: '联系我们' },
      action: { type: 'navigate', target: 'contact' }
    }
  },
  muse: {
    id: 'muse',
    categoryOverride: { en: 'Product Update', zh: '产品更新' },
    sidebar: {
      label: { en: 'Related Product', zh: '相关产品' },
      title: { en: 'Muse', zh: 'Muse' },
      buttonText: { en: 'Visit Website', zh: '访问官网' },
      action: { type: 'external', target: 'https://www.musedam.cc' }
    },
    cta: {
      title: { en: 'Ready to start your Enterprise AI journey?', zh: '准备好开启您的企业级 AI 旅程了吗？' },
      button: { en: 'Contact Us', zh: '联系我们' },
      action: { type: 'navigate', target: 'contact' }
    }
  },
  clipo: {
    id: 'clipo',
    categoryOverride: { en: 'Product Update', zh: '产品更新' },
    sidebar: {
      label: { en: 'Related Product', zh: '相关产品' },
      title: { en: 'Clipo', zh: 'Clipo' },
      buttonText: { en: 'Visit Website', zh: '访问官网' },
      action: { type: 'external', target: 'https://clipo.cc/' }
    },
    cta: {
      title: { en: 'Ready to start your Enterprise AI journey?', zh: '准备好开启您的企业级 AI 旅程了吗？' },
      button: { en: 'Contact Us', zh: '联系我们' },
      action: { type: 'navigate', target: 'contact' }
    }
  }
};
