
import { Agent, SystemFoundation, ProductTestimonial } from '../types';

export const AGENTS: Agent[] = [
  {
    id: 'market',
    name: '市场洞察智能体',
    nameEn: 'Market Insight',
    nameCn: '市场洞察',
    description: 'Turns fragmented market signals into clear strategic insight.',
    descriptionEn: 'Turns fragmented market signals into clear strategic insight.',
    descriptionCn: '将碎片化的市场信号转化为清晰的战略洞察。',
    outcome: 'Strategic Insight',
    capabilities: ['Real-time Monitoring', 'Trend Prediction', 'Competitor Analysis'],
    vibe: 'Insight',
    vibeCn: '洞察',
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBvT5H.png'
  },
  {
    id: 'expert',
    name: '企业专家智能体',
    nameEn: 'Enterprise Expert',
    nameCn: '企业专家',
    description: 'Applies institutional knowledge to real business decisions.',
    descriptionEn: 'Applies institutional knowledge to real business decisions.',
    descriptionCn: '将机构知识应用于真实的业务决策中。',
    outcome: 'Expert Decisions',
    capabilities: ['Knowledge Retrieval', 'Compliance Check', 'Process Guidance'],
    vibe: 'Expert',
    vibeCn: '专家',
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBvLaN.png'
  },
  {
    id: 'growth',
    name: '内容增长智能体',
    nameEn: 'Content Growth',
    nameCn: '内容增长',
    description: 'Transforms content assets into measurable growth outcomes.',
    descriptionEn: 'Transforms content assets into measurable growth outcomes.',
    descriptionCn: '将内容资产转化为可衡量的业务增长成果。',
    outcome: 'Growth Outcomes',
    capabilities: ['Batch Generation', 'Cross-platform Adaptation', 'A/B Testing'],
    vibe: 'Growth',
    vibeCn: '增长',
    imageUrl: 'https://i.imgs.ovh/2026/01/18/yUSX5h.png'
  },
  {
    id: 'innovation',
    name: '产品创新智能体',
    nameEn: 'Product Innovation',
    nameCn: '产品创新',
    description: 'Accelerates product ideas from concept to validation.',
    descriptionEn: 'Accelerates product ideas from concept to validation.',
    descriptionCn: '加速产品创意从概念推导到市场验证的完整闭环。',
    outcome: 'Innovation Speed',
    capabilities: ['Concept Generation', 'Virtual Testing', 'Market Potential Analysis'],
    vibe: 'Innovation',
    vibeCn: '创新',
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBvrSC.png'
  },
  {
    id: 'social',
    name: '社媒矩阵智能体',
    nameEn: 'Social Matrix',
    nameCn: '社媒矩阵',
    description: 'Orchestrates multi-channel content at scale.',
    descriptionEn: 'Orchestrates multi-channel content at scale.',
    descriptionCn: '跨平台多频道的内容生产与分发策略编排。',
    outcome: 'Brand Presence',
    capabilities: ['Multi-channel Adaptation', 'Trend Tracking', 'Smart Scheduling'],
    vibe: 'Social',
    vibeCn: '社媒',
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBvaza.png'
  },
  {
    id: 'revenue',
    name: '销售运营智能体',
    nameEn: 'Sales Operations',
    nameCn: '销售运营',
    description: 'Supports sales teams with intelligence, not automation.',
    descriptionEn: 'Supports sales teams with intelligence, not automation.',
    descriptionCn: '以情报智能而非单纯的自动化手段赋能销售团队。',
    outcome: 'Sales Efficiency',
    capabilities: ['Lead Scoring', 'Personalized Outreach', 'Customer Intelligence'],
    vibe: 'Revenue',
    vibeCn: '营收',
    imageUrl: 'https://i.imgs.ovh/2025/12/27/CBrNDL.png'
  }
];

export const SYSTEM_FOUNDATIONS: SystemFoundation[] = [
  { title: "Intent Layer", description: "Understanding user intent and translating it into actionable goals." },
  { title: "Context System", description: "Managing enterprise knowledge and data for informed decision making." },
  { title: "Reasoning Engine", description: "Planning and executing complex tasks with logic and adaptability." },
  { title: "Skill Library", description: "A collection of specialized capabilities for diverse business needs." }
];

export const GENERAL_TESTIMONIALS: ProductTestimonial[] = [
    {
        quote: { en: "Tezign helped us scale content production by 10x while maintaining brand consistency.", zh: "特赞帮助我们将内容生产规模扩大了10倍，同时保持了品牌一致性。" },
        author: { en: "Marketing Director", zh: "市场总监" },
        role: { en: "Director", zh: "总监" },
        company: { en: "Global FMCG Brand", zh: "全球快消品牌" },
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        quote: { en: "The efficiency gains from using GEA have been transformative for our digital operations.", zh: "使用 GEA 带来的效率提升对我们的数字化运营具有变革性意义。" },
        author: { en: "CIO", zh: "首席信息官" },
        role: { en: "VP", zh: "副总裁" },
        company: { en: "Leading Tech Giant", zh: "国内领先科技巨头" },
        avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        quote: { en: "We can now respond to market trends in hours instead of weeks.", zh: "我们现在可以在数小时内对市场趋势做出反应，而不是数周。" },
        author: { en: "Brand Director", zh: "品牌总监" },
        role: { en: "Head", zh: "负责人" },
        company: { en: "Luxury Fashion Group", zh: "奢侈品时尚集团" },
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        quote: { en: "The automated compliance checks saved us from potential legal risks multiple times.", zh: "自动化合规检查多次挽救了我们免受潜在法律风险。" },
        author: { en: "General Counsel", zh: "总法律顾问" },
        role: { en: "Counsel", zh: "法律顾问" },
        company: { en: "Global Pharma Group", zh: "跨国医药集团" },
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        quote: { en: "Insight agent provides clarity in a noisy market environment.", zh: "洞察智能体在嘈杂的市场环境中提供了清晰的方向。" },
        author: { en: "Head of Strategy", zh: "战略负责人" },
        role: { en: "Lead", zh: "负责人" },
        company: { en: "Automotive Manufacturer", zh: "知名汽车制造商" },
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        quote: { en: "A true partner in our digital transformation journey.", zh: "我们数字化转型旅程中的真正合作伙伴。" },
        author: { en: "COO", zh: "首席运营官" },
        role: { en: "COO", zh: "首席运营官" },
        company: { en: "Financial Services Firm", zh: "金融服务机构" },
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        quote: { en: "The ability to scale creative assets globally with local nuance is impressive.", zh: "在全球范围内扩展具有本地细微差别的创意资产的能力令人印象深刻。" },
        author: { en: "Global Marketing VP", zh: "全球营销副总裁" },
        role: { en: "VP", zh: "副总裁" },
        company: { en: "Consumer Electronics Giant", zh: "消费电子巨头" },
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        quote: { en: "Tezign's platform has become the single source of truth for our content.", zh: "特赞平台已成为我们内容的唯一真实来源。" },
        author: { en: "Content Director", zh: "内容总监" },
        role: { en: "Director", zh: "总监" },
        company: { en: "Entertainment Corp", zh: "大型娱乐集团" },
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        quote: { en: "Our team productivity increased by 40% in just two months.", zh: "我们的团队生产力在短短两个月内提高了 40%。" },
        author: { en: "Creative Operations Lead", zh: "创意运营主管" },
        role: { en: "Manager", zh: "经理" },
        company: { en: "Digital Agency", zh: "数字营销代理商" },
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        quote: { en: "The integration with our existing tech stack was seamless.", zh: "与我们现有技术栈的集成非常无缝。" },
        author: { en: "CTO", zh: "首席技术官" },
        role: { en: "Executive", zh: "高管" },
        company: { en: "E-commerce Platform", zh: "电商平台" },
        avatar: "https://images.unsplash.com/photo-1525134479668-1bee4c7c6a3d?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        quote: { en: "Data sovereignty features gave us the confidence to deploy AI at scale.", zh: "数据主权功能让我们有信心大规模部署 AI。" },
        author: { en: "Data Security Officer", zh: "数据安全官" },
        role: { en: "Director", zh: "总监" },
        company: { en: "Banking Institution", zh: "银行机构" },
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        quote: { en: "Finally, an AI solution that understands enterprise complexity.", zh: "终于有一个能理解企业复杂性的 AI 解决方案了。" },
        author: { en: "Digital Transformation VP", zh: "数字化转型副总裁" },
        role: { en: "VP", zh: "副总裁" },
        company: { en: "Manufacturing Conglomerate", zh: "制造业集团" },
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        quote: { en: "Tezign enables us to personalize marketing at an unprecedented scale.", zh: "特赞使我们能够以前所未有的规模进行个性化营销。" },
        author: { en: "CMO", zh: "首席营销官" },
        role: { en: "Executive", zh: "高管" },
        company: { en: "Retail Chain", zh: "零售连锁" },
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        quote: { en: "The contextual understanding of the agents is remarkable.", zh: "智能体对上下文的理解能力非常出色。" },
        author: { en: "Head of AI Labs", zh: "AI 实验室负责人" },
        role: { en: "Head", zh: "负责人" },
        company: { en: "Software Enterprise", zh: "软件企业" },
        avatar: "https://images.unsplash.com/photo-1530785602389-07594daf8b1b?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        quote: { en: "It’s not just a tool, it’s a strategic asset for our future.", zh: "它不仅仅是一个工具，更是我们未来的战略资产。" },
        author: { en: "CEO", zh: "首席执行官" },
        role: { en: "Founder", zh: "创始人" },
        company: { en: "New Consumer Brand", zh: "新消费品牌" },
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80"
    },
    {
        quote: { en: "Customer support queries are resolved 50% faster.", zh: "客户支持咨询的解决速度提高了 50%。" },
        author: { en: "VP of Service", zh: "服务副总裁" },
        role: { en: "VP", zh: "副总裁" },
        company: { en: "Online Service Provider", zh: "在线服务提供商" },
        avatar: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&w=200&h=200&q=80"
    }
];
