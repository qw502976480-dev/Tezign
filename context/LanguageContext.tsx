
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { NEWS_TRANSLATIONS_EN, NEWS_TRANSLATIONS_ZH } from '../content/news';
import { INDUSTRY_CASES_EN, INDUSTRY_CASES_ZH } from '../content/industryCases';
import { RESOURCE_ITEMS_EN, RESOURCE_ITEMS_ZH } from '../content/resourceItems';
import { AUTH_MODAL_EN } from '../content/components/authModal.en';
import { AUTH_MODAL_ZH } from '../content/components/authModal.zh';
import { PRODUCT_DETAILS_EN } from '../content/products/productDetails.en';
import { PRODUCT_DETAILS_ZH } from '../content/products/productDetails.zh';
import { HERO_EN } from '../content/home/hero.en';
import { HERO_ZH } from '../content/home/hero.zh';
import { CORE_COMPETENCIES_EN } from '../content/home/coreCompetencies.en';
import { CORE_COMPETENCIES_ZH } from '../content/home/coreCompetencies.zh';
import { HOME_RESOURCES_EN } from '../content/home/resources.en';
import { HOME_RESOURCES_ZH } from '../content/home/resources.zh';
import { INDUSTRY_VERTICALS_EN } from '../content/home/industryVerticals.en';
import { INDUSTRY_VERTICALS_ZH } from '../content/home/industryVerticals.zh';

// --- Type Utilities for Type-Safe i18n ---

// 1. Recursive Key Path Generator
type Join<K, P> = K extends string | number ?
  P extends string | number ? `${K}${"" extends P ? "" : "."}${P}`
  : never : never;

type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ...0[]];

// Generates union of all valid dot-notation paths (e.g. "home.title" | "nav.products")
type Paths<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
  { [K in keyof T]-?: K extends string | number ?
      `${K}` | Join<K, Paths<T[K], Prev[D]>>
      : never
  }[keyof T] : "";

// 2. Recursive Value Lookup
type PathValue<T, P extends string> = 
  P extends `${infer Key}.${infer Rest}`
  ? Key extends keyof T ? PathValue<T[Key], Rest> : never
  : P extends keyof T ? T[P] : never;

// Recognition Cards Data
const RECOGNITION_DATA = {
  en: {
    tech: [
      { icon: '1 Item', title: 'GenAI Model Filing', description: 'National-level filing for general-purpose large models, providing a compliant foundation for the long-term operation of enterprise agent systems.' },
      { icon: '5+ Items', title: 'Algorithm Filings', description: 'Covering key capabilities such as understanding, generation, and reasoning, supporting stable agent system operation across diverse tasks and scenarios.' },
      { icon: '1 Billion+', title: 'Industrial Data Assets', description: 'Long-term accumulation of industrial data assets, continuously used under a compliant data governance system to build and evolve enterprise context.' },
      { icon: '1 Million+/Day', title: 'System Scale', description: 'Daily average call volume in real business scenarios, validating stability and reliability under enterprise-level loads.' },
      { icon: '160+ · 50+', title: 'Technical Assets', description: 'Accumulation of invention patents and software copyrights, supporting the long-term precipitation and continuous evolution of agent system capabilities.' }
    ],
    industry: [
      { icon: 'Global Research', title: 'Gartner · Forrester', description: 'Selected as a Gartner Cool Vendor 2024 and included in the Forrester DAM Landscape Report, representing key practices in enterprise agents and content systems.' },
      { icon: 'Business Rankings', title: 'Fortune · Forbes · Fast Company', description: 'Listed in Fortune Global Unicorns, Forbes China High-Growth Companies, and Fast Company Innovative Companies.' },
      { icon: 'Global Media', title: 'Bloomberg · The Information', description: 'Featured by Bloomberg and ranked #1 in China Innovation by The Information, entering the mainstream view of global business and technology.' },
      { icon: 'Authoritative Media', title: 'People\'s Daily · Jiefang Daily', description: 'Repeatedly reported by People\'s Daily and continuously followed by mainstream media such as Jiefang Daily, Wen Hui Bao, and Xinmin Evening News.' }
    ],
    public: [
      { icon: 'National & Shanghai', title: 'AI Strategic Projects', description: 'Selected as a "Big Dipper" AI benchmark enterprise in Shanghai and undertook key generative AI projects, integrated into the core promotion system of regional AI development.' },
      { icon: 'MIIT System', title: 'National Credentials', description: 'Recognized as a National High-Tech Enterprise and a National Industrial Design Center by MIIT, possessing national-level technical and industrial qualifications.' },
      { icon: 'Shanghai Industry', title: 'AI Development Projects', description: 'Selected as a Shanghai Specialized and New SME, Little Giant Enterprise, and recognized as a High-Quality AI Industry Development Enterprise by Shanghai Economy and Informatization Commission.' },
      { icon: 'Third-Party Eval', title: 'Tech Achievement', description: 'Evaluated by the Shanghai Institute of Science and Technology Achievement Evaluation, with technologies recognized as "domestically leading, internationally advanced in multiple indicators, and filling domestic gaps".' }
    ]
  },
  zh: {
    tech: [
      { icon: '1 项', title: '通用大模型备案', description: '国家层面认可的通用大模型备案，为企业级智能体系统的长期运行提供合规基础。' },
      { icon: '5+ 项', title: '算法备案', description: '覆盖理解、生成与推理等关键能力的算法备案，支撑智能体系统在不同任务与场景中的稳定运行。' },
      { icon: '10 亿+', title: '产业级数据资产', description: '长期积累的产业级数据资产，在合规的数据治理体系下持续使用，用于构建、维护并演进企业上下文。' },
      { icon: '100 万+ / 日', title: '规模化系统运行', description: '智能体系统在真实业务中的日均调用规模，验证其在企业级负载下的稳定性与可靠性。' },
      { icon: '160+ · 50+', title: '技术资产积累', description: '由发明专利与软件著作权构成的技术资产积累，支撑智能体系统能力的长期沉淀与连续演进。' }
    ],
    industry: [
      { icon: '国际研究机构认可', title: 'Gartner · Forrester', description: '入选 Gartner Cool Vendor 2024，并被 Forrester DAM Landscape Report 权威收录，代表企业级智能体与内容系统方向的重要实践。' },
      { icon: '全球商业榜单认可', title: 'Fortune · Forbes · Fast Company', description: '登上 Fortune 全球独角兽榜单、入选 Forbes 中国高增长企业榜单，并被 Fast Company 评选为创新公司。' },
      { icon: '国际主流媒体关注', title: 'Bloomberg · The Information', description: '获得 Bloomberg 官方报道，并被 The Information 评为中国区创新企业第一，进入全球商业与科技信息主流视野。' },
      { icon: '中国权威媒体报道', title: '人民日报 · 解放日报', description: '多次获得 人民日报 报道，并持续受到 解放日报、文汇报、新民晚报 等主流媒体关注。' }
    ],
    public: [
      { icon: '国家 · 上海', title: '人工智能战略项目', description: '入选上海市「北斗七星」人工智能标杆企业，并承担上海市生成式人工智能重点项目，被纳入区域人工智能发展的核心推进体系。' },
      { icon: '国家工信体系', title: '国家级技术与产业资质', description: '获评 国家高新技术企业，并入选 工信部国家级工业设计中心，具备国家层面的技术与产业资质认定。' },
      { icon: '上海市产业体系', title: '人工智能产业发展项目', description: '入选 上海市专精特新中小企业、上海市科技小巨人企业，并获评上海市经信委 高质量产业发展人工智能专项企业。' },
      { icon: '第三方权威评价', title: '科技成果评价', description: '由 上海市科技成果评价研究院 出具成果评价，相关技术与实践被认定为“国内领先、多项指标国际先进、填补国内空白”。' }
    ]
  }
};

// UI Strings (Short text, labels, headers) - REMOVED :any to allow inference
const UI_TRANSLATIONS = {
  en: {
    nav_ia: {
        products: "Product",
        technology: "Technology",
        industries: "Industry",
        resources: "Resource",
        company: "Company",
        headers: {
            foundations: "Core Technology",
            core: "Core Product",
            agents: "Agent",
            about: "About",
            updates: "Update",
            investment: "Investment & Incubation",
            legal: "Legal",
            professional: "Professional Service",
            academic: "Academic Research",
            whitepapers: "Industry Insight",
            ai_tech: "AI Technology",
            data_security: "Data Security"
        },
        items: {
            data: "Data Context Management",
            model: "Model Divergent Reasoning",
            skill: "Skill Agent Library",
            
            gea_os: "GEA Agent System",
            creative_reasoning: "Creative Reasoning Model",
            context_graph: "Context Graph",
            agent_skills: "Agent Skills",
            
            data_sovereignty: "Data Sovereignty",
            compliance_cert: "Compliance & Certifications",
            deployment: "On-Premise & Hybrid Deployment",

            dam: "Digital Asset Management",
            overview: "Generative Enterprise Agent",

            market: "Market Intelligence",
            innovation: "Product Innovation",
            expert: "Enterprise Expert",
            growth: "Content Growth",
            social: "Social Matrix",
            sales: "Sales Operations",
            
            consumer: "Consumer & Retail",
            auto: "Automotive & Manufacturing",
            finance: "Financial & Professional Services",
            tech: "Internet & Technology",
            more: "More Industries",

            ai_fullstack: "AI FullStack Consulting",
            creative_sku: "CreativeSKU Supply",
            labs: "Joint Labs",
            fund: "Research Fund",
            whitepapers: "White Paper",
            reports: "In-depth Reports",

            about_tezign: "About Tezign",
            mission: "Mission & Vision",
            careers: "Careers",
            
            product_updates: "Product Updates",
            events: "Events",
            press: "Press",

            atypica: "Atypica",
            muse: "Muse",
            clipo: "Clipo",

            privacy: "Privacy Policy",
            terms: "Terms of Service",
            security: "Security & Compliance"
        },
        overlays: {
            dam_title: "Content Context for the AI Era",
            gea_title: "GEA: Reshaping Competitiveness",
            tech_title: "GEA Architecture & Technical Principles",
            industries_title: "Leading Global Brands: How to Build a Sustainable Growth System in a Highly Uncertain Content Environment",
            res_card1_title: "AI FullStack: Helping Enterprises Implement AI with AI Native Consulting",
            res_card2_title: "Platform Creative Supply: Providing Scaled Creative Support",
            comp_card1_title: "atypica.AI: Modeling the Subjective World with Language Models",
            comp_card2_title: "MuseDAM: AI Native DAM",
            comp_card3_title: "Clipo: Scaling Video Production from 1 to 100",
            more: "Learn More",
            // Add missing keys for featured company cards
            comp_card1: "atypica.AI",
            comp_card2: "MuseDAM",
            comp_card3: "Clipo"
        }
    },
    nav: {
      products: 'Product',
      stories: 'Industry',
      cobuilding: 'Resource',
      company: 'Company',
      signin: 'Sign In',
      auth: {
        my: 'My Account',
        signout: 'Sign Out',
        settings: 'Account Settings'
      },
      dropdowns: {
        agents: 'Agent',
        products_header: 'Product',
        byIndustry: 'By Industry',
        byScenario: 'By Scenario',
        collaboration: 'Collaboration',
        about: 'About',
        updates: 'Update',
        joinUsHeader: 'Join Us',
        extra_cards: {
          reasoning: 'Creative Reasoning Model',
          context: 'Enterprise Context System'
        },
        items: {
          market: 'Market Insight',
          market_intelligence_agent: 'Market Insight',
          expert: 'Enterprise Expert',
          enterprise_expert_agent: 'Enterprise Expert',
          growth: 'Content Growth',
          content_growth_agent: 'Content Growth',
          innovation: 'Product Innovation',
          product_innovation_agent: 'Product Innovation',
          social: 'Social Matrix',
          social_matrix_agent: 'Social Matrix',
          revenue: 'Sales Operations',
          sales_operations_agent: 'Sales Operations',
          
          consumer: 'Consumer & Retail',
          auto: 'Automotive & Manufacturing',
          finance: 'Finance & Professional Services',
          tech: 'Internet & Tech',
          more: 'More Industries',

          scenario_product_innovation: 'Product Innovation',
          scenario_market_insight: 'Market Insight',
          scenario_content_scale: 'Content Scale',
          scenario_brand_governance: 'Brand Governance',
          scenario_sales_enablement: 'Sales Enablement',
          scenario_localization: 'Localization',
          scenario_knowledge: 'Knowledge Management',

          lab: 'Joint Labs',
          research_fund: 'Research Fund',
          builder_creator: 'Builder & Creator Ecosystem',
          whitepapers: 'White Papers',

          mission: 'Mission & Vision',
          careers: 'Careers',
          organization: 'Organization',
          
          product_updates: 'Product Updates',
          research_insights: 'Research Insights',
          media_press: 'Media & Press',
          events: 'Events'
        }
      }
    },
    common: {
      viewAll: 'View All',
      learnMore: 'Learn More',
      trustedBy: 'Trusted by Global Enterprises'
    },
    sections: {
      products: 'Product',
      stories: 'Industry Practice',
      updates: 'Ongoing Progress and Changes',
      foundations: 'Core Technology',
      cobuilding: 'Resources for research, practice, and long-term collaboration',
      logic: 'System Logic',
      core_competencies_eyebrow: 'Core Capability'
    },
    footer: {
      company: { title: 'Company', about: 'About Tezign', mission: 'Mission & Vision', joinUs: 'Join Us' },
      products: { title: 'Product', dam: 'DAM', gea: 'GEA' },
      technology: { title: 'Technology', data: 'Context Management System', model: 'Divergent Reasoning Model', skill: 'Skill Agent Library' },
      stories: { title: 'Industry' },
      cobuilding: { title: 'Resource', consulting: 'Enterprise Consulting', creative: 'Creative Supply', research: 'Academic Research', whitepapers: 'Industry Insights' },
      insights: { title: 'Update', updates: 'Product', events: 'Events', media: 'Press' },
      legal: { title: 'Legal', privacy: 'Privacy', terms: 'Terms', security: 'Security' },
      investment: { title: 'Investment', atypica: 'Atypica', muse: 'Muse', clipo: 'Clipo' }
    },
    product_detail: {
      back: "Back",
      badge: "Enterprise Agent",
      deployButton: "Deploy Agent",
      demoButton: "Watch Demo",
      capabilitiesTitle: "Core Capabilities",
      testimonialsTitle: "User Evaluation",
      ctaTitle: "Ready to transform your workflow?",
      ctaButton: "Get Started Now"
    },
    resources_page: {
      eyebrow: 'Resource',
      title: 'Resource Foundation Co-built with Enterprises and Researchers',
      subtitle: 'Through professional services, joint labs, and research funds,\nTezign continuously distills research, practice, and methodology,\nvalidating and evolving them through real-world application.'
    },
    insights_page: {
      eyebrow: 'Industry Insight',
      title: 'Systematic Summaries of Practice & Research',
      subtitle: 'Structured methods, insights, and validated results from long-term practice, supporting informed decision-making.',
      filters: {
        all: 'All',
        whitepaper: 'White Paper',
        report: 'In-depth Report'
      }
    },
    updates_page: {
        eyebrow: 'Update',
        title: 'Ongoing Progress and Changes',
        subtitle: 'Product updates, media coverage, and events—\ntracking key developments as Tezign evolves.'
    },
    stories_page: {
        eyebrow: 'Industry',
        title: 'Delivering Sustainable Business Value Across Industries',
        subtitle: 'Delving into diverse sectors like Consumer, Tech, and Manufacturing,\nTezign transforms intelligent capabilities into practical applications,\nempowering enterprises to deliver deterministic results in complex scenarios.'
    },
    my_collection: {
      title: 'My Collection',
      subtitle: 'Manage your projects and agents.',
      sidebar: { start: 'Start', projects: 'Projects', agents: 'Agents', datasets: 'Datasets', faq: 'FAQ', settings: 'Settings', api_key: 'API Key', pinned: 'Pinned', recent: 'Recent', pinned_item: 'Market Analysis Q3', recent_item: 'Sales Bot V2', profile: 'Profile', account: 'Account', interests: 'Interests', notifications: 'Notifications' },
      quick_start: { title: 'Quick Start', new_project_title: 'New Project', new_project_desc: 'Start a new agent project', deploy_agent_title: 'Deploy Agent', deploy_agent_desc: 'Launch an agent', analyze_data_title: 'Analyze Data', analyze_data_desc: 'Upload datasets', view_billing_title: 'Billing', view_billing_desc: 'View usage' },
      projects: { title: 'Projects', placeholder: 'No projects yet.' },
      account: { title: 'Account', placeholder: 'Account settings here.' },
      billing: { title: 'Billing', placeholder: 'Billing details here.' }
    },
    search: {
      placeholder: 'Search...',
      quick_searches: 'Quick Searches',
      results_for: 'Results for',
      result_type_story: 'Industry / Case Study'
    },
    legal_page: {
      eyebrow: 'Legal',
      title: 'Terms & Policies',
      subtitle: 'Transparency and trust are the foundation of our partnership.',
      documents_title: 'All Documents',
      categories: [
        { title: 'Privacy Policy', description: 'How we handle your data.' },
        { title: 'Terms of Service', description: 'Rules for using our services.' },
        { title: 'Security & Compliance', description: 'Our security standards.' }
      ],
      card_descriptions: {
        privacy: 'How we handle your data.',
        terms: 'Rules for using our services.',
        security: 'Our security standards.'
      }
    },
    careers_page: {
      eyebrow: 'Career',
      title: 'Join Us',
      values_title: 'Our Values',
      roles_title: 'Open Roles',
      cta: 'View All Roles'
    },
    products_page: {
        eyebrow: 'Product',
        title: 'Product System for the AI Agent Era',
        subtitle: 'Tezign leverages DAM to solidify enterprise content and data foundations,\nand uses GEA to build executable, collaborative enterprise agents,\nsupporting the long-term operation of organizations in complex environments.',
        recognition: {
            tech: { title: 'Technology Validation', cards: RECOGNITION_DATA.en.tech },
            industry: { title: 'Industry Recognition', cards: RECOGNITION_DATA.en.industry },
            public: { title: 'Public & Government Recognition', cards: RECOGNITION_DATA.en.public }
        },
        capabilities: {
            intent: { title: 'Intent', description: 'Understanding goals.', keywords: 'Goals · Objectives' },
            context: { title: 'Context', description: 'Enterprise memory.', keywords: 'History · Knowledge' },
            reasoning: { title: 'Reasoning', description: 'Decision making.', keywords: 'Logic · Planning' },
            skill: { title: 'Skill', description: 'Execution.', keywords: 'Tools · Actions' }
        }
    },
    home_cta: {
      eyebrow: 'Ready to Start?',
      title: 'Deliver continuous results with AI\nin critical workflows.',
      contact: 'Contact Us',
      explore: 'Explore Products'
    },
    contact_page: {
      hero: {
        title: "Ready to put AI to work?",
        subtitle: "Join us to explore how Generative Enterprise Agents (GEA) deliver continuous results in real business operations.",
        value_header: "You will get:",
        points: [
          "Access to exclusive industry cases",
          "GEA system demonstration",
          "Expert consultation on AI strategy"
        ]
      },
      form: {
        first_name: "First Name",
        last_name: "Last Name",
        email: "Work Email",
        job_title: "Job Title",
        company: "Company Name",
        country: "Country / Region",
        phone: "Phone (Optional)",
        company_size: "Company Size",
        industry: "Industry",
        deployment: "Deployment Preference",
        deployment_options: {
          private: "Private Deployment",
          hybrid: "Hybrid Deployment",
          exploring: "Consultation Phase"
        },
        intent_label: "Where do you want to start using GEA?",
        intents: {
          content: "Content & Knowledge Systems",
          product: "Product & Innovation",
          market: "Market & Growth",
          sales: "Sales & Operations",
          collab: "Enterprise Collaboration",
          exploring: "Still Exploring"
        },
        problem_label: "What business problem do you most want to solve? (Optional)",
        problem_hint: "This helps us prepare a more relevant discussion.",
        consent: "I agree to receive relevant communications from Tezign",
        submit: "Start a Conversation",
        disclaimer: "This is not a sales demo, but a discussion centered on your business context."
      }
    },
    settings_page: {
        sidebar: {
            profile: "Profile",
            account: "Account",
            interests: "Interests",
            notifications: "Notifications"
        },
        profile: {
            title: "Public Profile",
            subtitle: "Manage your personal information.",
            change_avatar: "Change Avatar",
            name: "Full Name",
            title_label: "Job Title",
            company: "Company Name",
            location: "Location",
            save: "Save Changes"
        },
        account: {
            title: "Account Settings",
            subtitle: "Manage your login credentials.",
            email: "Email Address",
            change_password: "Change Password",
            delete_account: "Delete Account",
            delete_warning: "Permanently delete your account and all data."
        },
        interests: {
            title: "Focus Areas",
            subtitle: "Customize your content recommendations.",
            tags_label: "Selected Topics",
            tags: {
                updates: "Product Updates",
                research: "Research & Insights",
                methods: "Methodologies",
                events: "Events & Webinars",
                market: "Market Analysis",
                ai: "Enterprise AI",
                marketing: "Global Marketing"
            }
        },
        notifications: {
            title: "Notifications",
            subtitle: "Manage how we contact you.",
            email_updates: "Email Updates",
            email_updates_desc: "Receive product updates and newsletters.",
            security_alerts: "Security Alerts",
            security_alerts_desc: "Get notified about security incidents."
        }
    }
  },
  zh: {
    nav_ia: {
        products: "产品",
        technology: "技术",
        industries: "行业",
        resources: "资源",
        company: "公司",
        headers: {
            foundations: "核心技术",
            core: "核心产品",
            agents: "智能体",
            about: "关于",
            updates: "动态",
            investment: "投资孵化",
            legal: "法律",
            professional: "专业服务",
            academic: "学术研究",
            whitepapers: "行业洞察",
            ai_tech: "AI 技术",
            data_security: "数据安全"
        },
        items: {
            data: "Data 上下文管理系统",
            model: "Model 发散推理模型",
            skill: "Skill 智能体技能库",

            gea_os: "GEA 智能体系统",
            creative_reasoning: "发散推理模型",
            context_graph: "上下文图谱",
            agent_skills: "智能体技能库",
            
            data_sovereignty: "数据主权",
            compliance_cert: "合规与认证",
            deployment: "私有化部署",

            dam: "DAM 内容资产管理系统",
            overview: "GEA 企业级智能体",

            market: "市场洞察",
            innovation: "产品创新",
            expert: "企业专家",
            growth: "内容增长",
            social: "社媒矩阵",
            sales: "销售运营",
            
            consumer: "消费品与零售",
            auto: "汽车与制造",
            finance: "金融与专业服务",
            tech: "互联网与科技",
            more: "更多行业",

            ai_fullstack: "AI FullStack 企业咨询服务",
            creative_sku: "CreativeSKU 创意供给服务",
            labs: "联合实验室",
            fund: "研究基金",
            whitepapers: "白皮书",
            reports: "深度报告",

            about_tezign: "公司介绍",
            mission: "使命愿景",
            careers: "加入我们",
            
            product_updates: "产品更新",
            events: "活动事件",
            press: "媒体报道",

            atypica: "Atypica",
            muse: "Muse",
            clipo: "Clipo",

            privacy: "隐私政策",
            terms: "服务条款",
            security: "安全合规"
        },
        overlays: {
            dam_title: "内容即上下文：企业 AI 时代的“机构记忆”与决策引擎",
            gea_title: "GEA重塑企业竞争力",
            tech_title: "GEA架构与技术原理",
            industries_title: "在不同行业中交付可持续的业务价值",
            res_card1_title: "AI FullStack：用AI Native咨询帮助企业实现AI落地",
            res_card2_title: "平台化创意供给：提供规模化创意服务支持",
            comp_card1_title: "atypica.AI：用语言模型，为主观世界建模",
            comp_card2_title: "MuseDAM: AI 原生数字资产管理",
            comp_card3_title: "Clipo：让视频生产从 1 到 100 规模化",
            more: "了解更多",
            comp_card1: "atypica.AI",
            comp_card2: "MuseDAM",
            comp_card3: "Clipo"
        }
    },
    nav: {
      products: '产品',
      stories: '行业',
      cobuilding: '资源',
      company: '公司',
      signin: '登录',
      auth: {
        my: '我的账户',
        signout: '退出登录',
        settings: '账户设置'
      },
      dropdowns: {
        agents: '智能体',
        products_header: '产品',
        byIndustry: '按行业',
        byScenario: '按场景',
        collaboration: '合作共建',
        about: '关于',
        updates: '动态',
        joinUsHeader: '加入我们',
        extra_cards: {
          reasoning: 'Creative Reasoning 推理大模型',
          context: 'Enterprise Context System 企业级上下文系统'
        },
        items: {
          market: '市场洞察',
          market_intelligence_agent: '市场洞察',
          expert: '企业专家',
          enterprise_expert_agent: '企业专家',
          growth: '内容增长',
          content_growth_agent: '内容增长',
          innovation: '产品创新',
          product_innovation_agent: '产品创新',
          social: '社媒矩阵',
          social_matrix_agent: '社媒矩阵',
          revenue: '销售运营',
          sales_operations_agent: '销售运营',

          consumer: '消费品与零售',
          auto: '汽车与制造',
          finance: '金融与专业服务',
          tech: '互联网与科技',
          more: '更多行业',

          scenario_product_innovation: '产品创新',
          scenario_market_insight: '市场洞察',
          scenario_content_scale: '内容规模化',
          scenario_brand_governance: '品牌治理',
          scenario_sales_enablement: '销售赋能',
          scenario_localization: '全球化适配',
          scenario_knowledge: '知识管理',

          lab: '联合实验室',
          research_fund: '研究基金',
          builder_creator: '创建者生态',
          whitepapers: '白皮书',

          mission: '使命愿景',
          careers: '加入我们',
          organization: '组织架构',

          product_updates: '产品更新',
          research_insights: '研究洞察',
          media_press: '媒体报道',
          events: '活动事件'
        }
      }
    },
    common: {
      viewAll: '查看全部',
      learnMore: '了解更多',
      trustedBy: '受到全球领先企业的信赖'
    },
    sections: {
      products: '产品体系',
      stories: '实践中的行业应用',
      updates: '正在发生的进展与变化',
      foundations: '核心技术',
      cobuilding: '研究、实践与共建的长期资源',
      logic: '运行逻辑',
      core_competencies_eyebrow: '核心能力'
    },
    footer: {
      company: { title: '公司', about: '关于特赞', mission: '使命愿景', joinUs: '加入我们' },
      products: { title: '产品', dam: '内容资产管理系统', gea: '企业级智能体' },
      technology: { title: '技术', data: '上下文管理系统', model: '发散推理模型', skill: '智能体技能库' },
      stories: { title: '行业' },
      cobuilding: { title: '资源', consulting: '企业咨询服务', creative: '创意供给服务', research: '学术研究', whitepapers: '行业洞察' },
      insights: { title: '动态', updates: '产品更新', events: '活动事件', media: '媒体报道' },
      legal: { title: '法律', privacy: '隐私政策', terms: '服务条款', security: '安全合规' },
      investment: { title: '投资', atypica: 'atypica', muse: 'Muse', clipo: 'Clipo' }
    },
    product_detail: {
      back: "返回",
      badge: "企业级智能体",
      deployButton: "部署智能体",
      demoButton: "观看演示",
      capabilitiesTitle: "核心能力",
      testimonialsTitle: "用户评价",
      ctaTitle: "准备好改变工作方式了吗？",
      ctaButton: "立即开始"
    },
    resources_page: {
      eyebrow: '资源',
      title: '与企业及研究者共建的资源基础',
      subtitle: '通过专业服务、联合实验室与研究基金，\n特赞持续沉淀研究、实践与方法论，\n并在真实应用中验证与演进。'
    },
    insights_page: {
      eyebrow: '行业洞察',
      title: '来自实践与研究的系统性总结',
      subtitle: '基于长期实践与研究积累，将方法论、洞察与经验系统整理为白皮书与深度报告，为决策提供参考。',
      filters: {
        all: '全部',
        whitepaper: '白皮书',
        report: '深度报告'
      }
    },
    updates_page: {
        eyebrow: '动态',
        title: '正在发生的进展与变化',
        subtitle: '记录特赞在产品、实践与行业中的持续推进，\n以及企业级智能体演进的关键节点。'
    },
    stories_page: {
        eyebrow: '行业',
        title: '在不同行业中交付可持续的业务价值',
        subtitle: '深入消费、科技、制造等多元领域，\n特赞将智能化能力转化为实际应用，\n助力企业在复杂场景中交付确定性结果。'
    },
    my_collection: {
      title: '我的账户',
      subtitle: '管理您的项目与智能体。',
      sidebar: { start: '开始', projects: '项目', agents: '智能体', datasets: '数据集', faq: '常见问题', settings: '设置', api_key: 'API 密钥', pinned: '置顶', recent: '最近', pinned_item: 'Q3 市场分析', recent_item: '销售助手 V2', profile: '个人资料', account: '账户安全', interests: '关注领域', notifications: '通知设置' },
      quick_start: { title: '快速开始', new_project_title: '新建项目', new_project_desc: '启动一个新的智能体项目', deploy_agent_title: '部署智能体', deploy_agent_desc: '发布一个智能体', analyze_data_title: '数据分析', analyze_data_desc: '上传数据集', view_billing_title: '账单', view_billing_desc: '查看使用情况' },
      projects: { title: '项目', placeholder: '暂无项目。' },
      account: { title: '账户', placeholder: '账户设置。' },
      billing: { title: '账单', placeholder: '账单详情。' }
    },
    search: {
      placeholder: '搜索...',
      quick_searches: '快速搜索',
      results_for: '搜索结果',
      result_type_story: '行业 / 案例'
    },
    legal_page: {
      eyebrow: '法律',
      title: '条款与政策',
      subtitle: '透明与信任是我们合作的基础。',
      documents_title: '所有文档',
      categories: [
        { title: '隐私政策', description: '我们如何处理您的数据。' },
        { title: '服务条款', description: '使用我们服务的规则。' },
        { title: '安全合规', description: '我们的安全标准。' }
      ],
      card_descriptions: {
        privacy: '我们如何处理您的数据。',
        terms: '使用我们服务的规则。',
        security: '我们的安全标准。'
      }
    },
    careers_page: {
      eyebrow: '加入我们',
      title: '和一群真正把事情做成的人一起工作',
      values_title: '我们如何一起工作',
      roles_title: '招聘',
      cta: '查看开放职位'
    },
    products_page: {
        eyebrow: '产品',
        title: '面向企业智能体时代的产品体系',
        subtitle: '特赞以 DAM 夯实企业内容数据地基，以 GEA 构建可执行、可协作的企业级智能体，\n支撑组织在复杂环境中的长期运行。',
        recognition: {
            tech: { title: '技术验证', cards: RECOGNITION_DATA.zh.tech },
            industry: { title: '行业认可', cards: RECOGNITION_DATA.zh.industry },
            public: { title: '公共与政府认可', cards: RECOGNITION_DATA.zh.public }
        },
        capabilities: {
            intent: { title: 'Intent 意图', description: '理解目标。', keywords: '目标 · 目的' },
            context: { title: 'Context 上下文', description: '企业记忆。', keywords: '历史 · 知识' },
            reasoning: { title: 'Reasoning 推理', description: '决策制定。', keywords: '逻辑 · 规划' },
            skill: { title: 'Skill 技能', description: '执行能力。', keywords: '工具 · 动作' }
        }
    },
    home_cta: {
      eyebrow: '准备好开始了吗？',
      title: '让 AI 在关键业务流中\n持续交付结果。',
      contact: '联系我们',
      explore: '探索产品'
    },
    contact_page: {
      hero: {
        title: "准备好让 AI\n真正开始工作了吗？",
        subtitle: "与我们一起，探索 Generative Enterprise Agent (GEA)\n如何在真实业务中持续交付结果。",
        value_header: "您将获得：",
        points: [
          "获取独家行业案例与深度研究报告",
          "预约 GEA 系统的演示与试用",
          "获得专家级 AI 落地咨询建议"
        ]
      },
      form: {
        first_name: "名字",
        last_name: "姓氏",
        email: "工作邮箱",
        job_title: "职位",
        company: "公司名称",
        country: "国家/地区",
        phone: "电话 (选填)",
        company_size: "公司规模",
        industry: "所属行业",
        deployment: "部署偏好",
        deployment_options: {
          private: "私有化部署",
          hybrid: "混合部署",
          exploring: "咨询阶段"
        },
        intent_label: "您希望在哪些领域开始使用 GEA？",
        intents: {
          content: "内容与知识系统",
          product: "产品与创新",
          market: "市场与增长",
          sales: "销售与运营",
          collab: "企业协同",
          exploring: "还在探索中"
        },
        problem_label: "您最希望解决的业务问题是什么？（选填）",
        problem_hint: "这有助于我们准备更相关的交流内容。",
        consent: "我同意接收来自特赞的相关通讯",
        submit: "开始对话",
        disclaimer: "这不是一次销售演示，而是一场围绕您业务上下文的探讨。"
      }
    },
    settings_page: {
        sidebar: {
            profile: "个人资料",
            account: "账户安全",
            interests: "关注领域",
            notifications: "通知设置"
        },
        profile: {
            title: "公开资料",
            subtitle: "管理您的个人基础信息。",
            change_avatar: "更换头像",
            name: "姓名",
            title_label: "职位头衔",
            company: "公司名称",
            location: "所在地",
            save: "保存更改"
        },
        account: {
            title: "账户设置",
            subtitle: "管理您的登录凭证与安全。",
            email: "电子邮箱",
            change_password: "修改密码",
            delete_account: "注销账户",
            delete_warning: "永久删除您的账户及所有关联数据。"
        },
        interests: {
            title: "关注领域",
            subtitle: "定制为您推荐的内容类型。",
            tags_label: "已选话题",
            tags: {
                updates: "GEA 系统演进",
                research: "行业深度研究",
                methods: "最佳实践",
                events: "峰会与研讨",
                market: "市场分析",
                ai: "企业级 AI",
                marketing: "全球化营销"
            }
        },
        notifications: {
            title: "通知设置",
            subtitle: "管理我们联系您的方式。",
            email_updates: "邮件订阅",
            email_updates_desc: "接收产品更新与深度通讯。",
            security_alerts: "安全提醒",
            security_alerts_desc: "接收账户安全相关的重要通知。"
        }
    }
  }
};

const CONTENT_TRANSLATIONS = {
  en: {
    news: NEWS_TRANSLATIONS_EN,
    industry_cases: INDUSTRY_CASES_EN,
    resource_items: RESOURCE_ITEMS_EN,
    auth_modal: AUTH_MODAL_EN,
    product_details: PRODUCT_DETAILS_EN,
    home: {
      hero: HERO_EN,
      core_competencies: CORE_COMPETENCIES_EN,
      resources: HOME_RESOURCES_EN,
      industry_verticals: INDUSTRY_VERTICALS_EN
    }
  },
  zh: {
    news: NEWS_TRANSLATIONS_ZH,
    industry_cases: INDUSTRY_CASES_ZH,
    resource_items: RESOURCE_ITEMS_ZH,
    auth_modal: AUTH_MODAL_ZH,
    product_details: PRODUCT_DETAILS_ZH,
    home: {
      hero: HERO_ZH,
      core_competencies: CORE_COMPETENCIES_ZH,
      resources: HOME_RESOURCES_ZH,
      industry_verticals: INDUSTRY_VERTICALS_ZH
    }
  }
};

// --- Type Definitions ---

// Define the shape of our combined translation resource based on 'en' as the master structure
type UIResources = typeof UI_TRANSLATIONS.en;
type ContentResources = typeof CONTENT_TRANSLATIONS.en;
type MasterResources = UIResources & ContentResources;

// Generate valid dot-notation paths from the master structure
export type TranslationKey = Paths<MasterResources>;

// Define Context Type
interface LanguageContextType {
  language: 'en' | 'zh';
  setLanguage: (lang: 'en' | 'zh') => void;
  // Strictly typed t function
  t: <P extends TranslationKey | string>(key: P) => any; 
  // Note: We keep `| string` temporarily to allow dynamic keys (e.g. `news.${id}`) without breaking build,
  // but P extends TranslationKey gives autocomplete. 
  // Ideally, we'd use `PathValue<MasterResources, P>` as return type, but content arrays make this complex.
  // For P0 safety, we start with key validation.
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'zh'>('zh');

  const t = (path: string) => {
    const read = (root: any) => path.split('.').reduce((obj, key) => (obj ? obj[key] : undefined), root);
    const ui = read(UI_TRANSLATIONS[language]);
    if (ui !== undefined) return ui;
    const content = read(CONTENT_TRANSLATIONS[language]);
    if (content !== undefined) return content;
    return path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
