
import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import LogoMarquee from '../ui/LogoMarquee';

// --- DATA DEFINITION ---

const PAGE_CONTENT = {
  zh: {
    hero: {
      eyebrow: '技术',
      title: '支撑企业级智能体运行的技术基础',
      subtitle: '从智能体运行架构，到数据安全与部署能力，\n为企业构建可长期使用、可持续演进的 AI 技术底座。'
    },
    sections: [
      {
        id: 'ai-tech',
        theme: 'light', // Gray background, Dark text
        title: 'AI 技术',
        subtitle: '构建可嵌入业务、可持续进化、可对结果负责的智能体系统',
        items: [
          {
            id: 'gea_os',
            title: 'GEA 智能体系统 (GEA OS)',
            desc: '特赞企业级智能体系统的 AI 技术基座。它是一套围绕业务目标设计的智能体运行框架，用于支撑智能体在真实企业环境中完成「理解 → 决策 → 行动 → 反馈」的完整闭环。GEA 采用 Intent → Reason → Skills 的分层架构，将通用 AI 能力转化为可嵌入业务的企业级智能体系统。'
          },
          {
            id: 'reasoning',
            title: '发散推理模型 (Creative Reasoning Model)',
            desc: 'GEA 智能体架构中用于应对开放问题、不完全信息与高不确定性决策的核心推理能力。不同于以确定答案为目标的通用推理模型，它面向企业真实世界中的典型问题，在给定业务目标下生成多种可行假设，并结合历史决策进行对比推理与风险评估。'
          },
          {
            id: 'context_graph',
            title: '上下文图谱 (Context Graph)',
            desc: '用于组织、连接与演化企业级 Context 的核心认知结构。它不只描述“事实”，而是系统性地连接内容、行为、决策、规则与结果之间的关系。通过上下文图谱，企业的隐性经验被结构化为可被智能体理解、调用与持续学习的 Context 网络。'
          },
          {
            id: 'skills',
            title: '智能体技能库 (Agent Skills)',
            desc: '承载“执行能力”的核心层，将智能体的推理与规划转化为可落地的业务行动。特赞通过 Skill0 (skill0.io) 构建开放的智能体技能体系，每一个 Skill 都是一个具备明确输入、输出与约束的业务能力单元。通过 Agent Skills，GEA 实现了推理与执行解耦，使智能体具备更强的灵活性与可扩展性。'
          }
        ]
      },
      {
        id: 'security',
        theme: 'dark', // Black background, White text
        title: '数据安全',
        subtitle: '遵循企业级 AI 的最高标准，保障数据主权与系统可控',
        items: [
          {
            id: 'sovereignty',
            title: '数据主权 (Data Sovereignty)',
            desc: '特赞在架构层面明确区分模型能力与客户数据。客户数据始终归客户所有，不用于训练通用模型；企业级 Context 仅在客户授权范围内被调用。确保企业在获得 AI 能力的同时，不牺牲数据主权、不放弃核心资产控制权。'
          },
          {
            id: 'compliance',
            title: '合规与认证 (Compliance & Certifications)',
            desc: '持续对齐国际主流企业级 AI 的合规标准与认证体系。支持 SOC 2 (Type II)、ISO/IEC 27001、GDPR 等多项标准。通过在架构设计、流程控制与合规体系上的持续投入，确保系统在安全性、合规性与企业可控性上达到最高标准。'
          },
          {
            id: 'deployment',
            title: '私有化部署 (On-Premise & Hybrid)',
            desc: '支持 On-Prem、本地专有云与混合云等多种部署形态。企业核心数据、Context Graph 与 DAM 资产可完全运行于客户自有环境。通过私有化部署，确保企业级智能体真正融入企业长期 IT 与业务体系，成为可持续演进的基础设施。'
          }
        ]
      }
    ]
  },
  en: {
    hero: {
      eyebrow: 'Technology',
      title: 'The technical foundation for enterprise agents',
      subtitle: 'From agent architecture to security and deployment, \nbuilt to support long-term, production-grade AI systems.'
    },
    sections: [
      {
        id: 'ai-tech',
        theme: 'light',
        title: 'AI Technology',
        subtitle: 'Building agent systems that are business-embedded, evolving, and accountable.',
        items: [
          {
            id: 'gea_os',
            title: 'GEA OS',
            desc: 'The foundational AI framework for enterprise agents. Designed around business objectives, it supports the full loop of "Understand → Decide → Act → Feedback" in real environments. Using an Intent → Reason → Skills layered architecture, GEA transforms generic AI capabilities into a system responsible for business outcomes.'
          },
          {
            id: 'reasoning',
            title: 'Creative Reasoning Model',
            desc: 'The core reasoning capability for open-ended problems and uncertain decision-making. Unlike generic models seeking single answers, it addresses complex enterprise constraints by generating multiple feasible hypotheses and evaluating risks based on historical decisions and feedback.'
          },
          {
            id: 'context_graph',
            title: 'Context Graph',
            desc: 'The cognitive structure for organizing and evolving enterprise context. It connects content, behaviors, decisions, rules, and outcomes into a structured network. This allows implicit enterprise experience to become a Context Network that agents can understand, query, and learn from.'
          },
          {
            id: 'skills',
            title: 'Agent Skills Library',
            desc: 'The execution layer transforming reasoning into action. Through Skill0 (skill0.io), we build an open agent skill system where each Skill is a modular unit with defined inputs, outputs, and constraints. This decouples reasoning from execution, enabling flexibility, scalability, and the accumulation of enterprise experience.'
          }
        ]
      },
      {
        id: 'security',
        theme: 'dark',
        title: 'Data Security',
        subtitle: 'Adhering to the highest standards of data sovereignty and system control.',
        items: [
          {
            id: 'sovereignty',
            title: 'Data Sovereignty',
            desc: 'We structurally separate model capabilities from client data. Client data remains client-owned and is never used to train generic models. Enterprise Context is accessed only within authorized scopes, ensuring AI capabilities do not come at the cost of data control.'
          },
          {
            id: 'compliance',
            title: 'Compliance & Certifications',
            desc: 'Aligned with international enterprise AI standards including SOC 2 (Type II), ISO/IEC 27001, and GDPR. Continuous investment in architecture and process control ensures the highest standards of security, compliance, and controllability.'
          },
          {
            id: 'deployment',
            title: 'On-Premise & Hybrid Deployment',
            desc: 'Supports On-Prem, Private Cloud, and Hybrid Cloud deployments. Core data, Context Graphs, and DAM assets can run entirely within the client\'s environment, integrating agents into the long-term IT infrastructure as a sustainable asset.'
          }
        ]
      }
    ]
  }
};

// --- ANIMATION COMPONENT ---

const TechModuleAnimation: React.FC<{ type: string; theme: 'light' | 'dark' }> = ({ type, theme }) => {
  const isDark = theme === 'dark';
  const colorPrimary = isDark ? '#FFFFFF' : '#111827';
  const colorSecondary = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(17,24,39,0.4)';
  
  const codeStyle = { 
      fill: colorSecondary, 
      fontFamily: 'monospace', 
      fontSize: '10px', 
      letterSpacing: '0.05em' 
  };

  switch (type) {
    case 'gea_os':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
          <text x="20" y="40" style={codeStyle}>{`system.init(GEA);`}</text>
          <text x="20" y="270" style={codeStyle}>{`loop { observe() -> act() }`}</text>
          <g transform="translate(200, 150)">
             {/* Central Core */}
             <circle r="40" fill="none" stroke={colorPrimary} strokeWidth="1" />
             <circle r="6" fill={colorPrimary} />
             
             {/* Orbital Rings - Intent, Reason, Skill */}
             {[1, 2, 3].map((i) => (
               <motion.g 
                 key={i}
                 animate={{ rotate: 360 }}
                 transition={{ duration: 10 + i * 5, repeat: Infinity, ease: "linear" }}
               >
                 <circle r={40 + i * 25} fill="none" stroke={colorSecondary} strokeWidth="0.5" strokeDasharray="4 4" />
                 <circle cx={40 + i * 25} cy="0" r="3" fill={colorPrimary} />
               </motion.g>
             ))}
             
             {/* Scanning Effect */}
             <motion.path 
               d="M 0 0 L 120 -20 L 120 20 Z" 
               fill="url(#scanGrad)" 
               animate={{ rotate: 360 }}
               transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
               style={{ opacity: 0.1 }}
             />
             <defs>
               <linearGradient id="scanGrad" x1="0" y1="0" x2="1" y2="0">
                 <stop offset="0" stopColor={colorPrimary} stopOpacity="0.5" />
                 <stop offset="1" stopColor={colorPrimary} stopOpacity="0" />
               </linearGradient>
             </defs>
          </g>
        </svg>
      );

    case 'reasoning':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
          <text x="20" y="40" style={codeStyle}>{`if (uncertainty > threshold) {`}</text>
          <text x="40" y="60" style={codeStyle}>{`branch_out(strategies[]);`}</text>
          <text x="20" y="270" style={codeStyle}>{`}`}</text>
          <g transform="translate(100, 150)">
             {/* Root */}
             <circle r="4" fill={colorPrimary} />
             <path d="M 0 0 L 50 0" stroke={colorPrimary} strokeWidth="1" />
             
             {/* Branching */}
             <g transform="translate(50, 0)">
                {[ -40, 0, 40 ].map((y, i) => (
                  <motion.g 
                    key={i}
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 3, delay: i * 0.5, repeat: Infinity }}
                  >
                    <path d={`M 0 0 C 20 0, 20 ${y}, 50 ${y}`} fill="none" stroke={colorPrimary} strokeWidth="1" />
                    <circle cx="50" cy={y} r="3" fill={isDark ? '#fff' : '#000'} />
                    {/* Sub-branches */}
                    <path d={`M 50 ${y} L 80 ${y-10}`} stroke={colorSecondary} strokeWidth="0.5" />
                    <path d={`M 50 ${y} L 80 ${y+10}`} stroke={colorSecondary} strokeWidth="0.5" />
                  </motion.g>
                ))}
             </g>
          </g>
        </svg>
      );

    case 'context_graph':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
          <text x="20" y="40" style={codeStyle}>{`graph.connect(nodes);`}</text>
          <text x="300" y="270" style={codeStyle} textAnchor="end">{`optimize_weights()`}</text>
          <g transform="translate(200, 150)">
             {/* Nodes */}
             {[
               {x: -60, y: -40}, {x: 0, y: -70}, {x: 60, y: -40},
               {x: -80, y: 20}, {x: 0, y: 0}, {x: 80, y: 20},
               {x: -40, y: 70}, {x: 40, y: 70}
             ].map((pos, i) => (
               <g key={i}>
                 {/* Connections */}
                 <motion.line 
                   x1={pos.x} y1={pos.y} x2="0" y2="0" 
                   stroke={colorSecondary} strokeWidth="0.5" 
                   initial={{ pathLength: 0 }}
                   animate={{ pathLength: 1 }}
                   transition={{ duration: 2, delay: i * 0.1 }}
                 />
                 <motion.circle 
                   cx={pos.x} cy={pos.y} r="4" 
                   fill={isDark ? '#222' : '#fff'} 
                   stroke={colorPrimary} strokeWidth="1.5"
                   animate={{ scale: [1, 1.2, 1] }}
                   transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                 />
               </g>
             ))}
             {/* Central Hub */}
             <circle r="8" fill={colorPrimary} />
          </g>
        </svg>
      );

    case 'skills':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
          <text x="20" y="40" style={codeStyle}>{`import { Tool } from 'skill0';`}</text>
          <g transform="translate(200, 160)">
             {/* Isometric Grid */}
             {[0, 1, 2].map(row => 
               [-1, 0, 1].map(col => {
                 const x = (col - row) * 30;
                 const y = (col + row) * 15 - 40;
                 return (
                   <motion.g 
                     key={`${row}-${col}`}
                     transform={`translate(${x}, ${y})`}
                     initial={{ y: y }}
                     animate={{ y: y - 10 }}
                     transition={{ 
                       duration: 2, 
                       repeat: Infinity, 
                       repeatType: "reverse", 
                       delay: (row + col) * 0.2 
                     }}
                   >
                     <path d="M -14 0 L 0 -7 L 14 0 L 0 7 Z" fill={colorPrimary} opacity="0.1" stroke={colorPrimary} strokeWidth="0.5" />
                     <path d="M -14 0 L -14 10 L 0 17 L 0 7 Z" fill={colorSecondary} opacity="0.3" />
                     <path d="M 14 0 L 14 10 L 0 17 L 0 7 Z" fill={colorSecondary} opacity="0.5" />
                   </motion.g>
                 )
               })
             )}
          </g>
        </svg>
      );

    case 'sovereignty':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
          <text x="20" y="40" style={codeStyle}>{`private const ASSETS = secure();`}</text>
          <g transform="translate(200, 150)">
             {/* Shield Outline */}
             <path d="M -50 -40 Q 0 -60, 50 -40 L 50 20 Q 0 80, -50 20 Z" fill="none" stroke={colorSecondary} strokeWidth="1" strokeDasharray="4 2" />
             
             {/* Core Data Block */}
             <rect x="-20" y="-20" width="40" height="40" rx="4" fill={isDark ? '#fff' : '#000'} />
             
             {/* Rotating Lock Rings */}
             <motion.circle 
                r="60" fill="none" stroke={colorPrimary} strokeWidth="1" strokeDasharray="10 30"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             />
             <motion.circle 
                r="70" fill="none" stroke={colorSecondary} strokeWidth="0.5" strokeDasharray="2 4"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             />
          </g>
        </svg>
      );

    case 'compliance':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
          <text x="20" y="40" style={codeStyle}>{`audit.verify(standards);`}</text>
          <g transform="translate(140, 80)">
             {[0, 1, 2, 3].map((i) => (
                <g key={i} transform={`translate(0, ${i * 35})`}>
                   {/* Checkbox */}
                   <rect x="0" y="0" width="12" height="12" rx="2" stroke={colorPrimary} strokeWidth="1" fill="none" />
                   <motion.path 
                     d="M 2 6 L 5 9 L 10 2" 
                     fill="none" stroke={colorPrimary} strokeWidth="1.5"
                     initial={{ pathLength: 0 }}
                     animate={{ pathLength: 1 }}
                     transition={{ duration: 0.5, delay: i * 0.8 + 0.5 }}
                   />
                   {/* Line */}
                   <rect x="25" y="4" width="100" height="4" rx="2" fill={colorSecondary} />
                   <motion.rect 
                     x="25" y="4" width="100" height="4" rx="2" fill={colorPrimary} 
                     initial={{ width: 0 }}
                     animate={{ width: 100 }}
                     transition={{ duration: 0.8, delay: i * 0.8 }}
                   />
                </g>
             ))}
          </g>
        </svg>
      );

    case 'deployment':
      return (
        <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
          <text x="20" y="40" style={codeStyle}>{`deploy --target=private_cloud`}</text>
          <g transform="translate(200, 150)">
             {/* Server Stack */}
             <g transform="translate(-60, 20)">
                {[0, 1, 2].map(i => (
                   <rect key={i} x="0" y={-i*12} width="40" height="8" rx="1" fill={colorPrimary} opacity={0.8} />
                ))}
                <text x="0" y="20" style={{...codeStyle, fontSize: '8px'}}>Local</text>
             </g>

             {/* Cloud */}
             <g transform="translate(60, -40)">
                <path d="M -20 0 A 10 10 0 0 1 0 -10 A 15 15 0 0 1 30 0 A 10 10 0 0 1 40 10 L -20 10 Z" fill="none" stroke={colorPrimary} strokeWidth="1.5" />
                <text x="0" y="25" style={{...codeStyle, fontSize: '8px'}}>Hybrid</text>
             </g>

             {/* Data Flow */}
             <motion.path 
               d="M -20 20 C 20 20, 20 -30, 60 -30" 
               fill="none" 
               stroke={colorSecondary} 
               strokeWidth="1" 
               strokeDasharray="4 4"
             />
             <motion.circle 
               r="3" fill={colorPrimary}
               animate={{ offsetDistance: ["0%", "100%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               style={{ offsetPath: "path('M -20 20 C 20 20, 20 -30, 60 -30')" }}
             />
          </g>
        </svg>
      );

    default: 
      return null;
  }
};

const RecognitionCard: React.FC<{ icon: string; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="flex-shrink-0 w-[80vw] md:w-[380px] bg-white border border-gray-100 rounded-[24px] md:rounded-3xl p-6 md:p-8 flex flex-col h-full">
        <div className="text-xl md:text-3xl font-bold text-black mb-4 md:mb-6 tracking-tight leading-tight">{icon}</div>
        <h4 className="text-sm md:text-base font-semibold text-gray-900 mb-2 md:mb-3">{title}</h4>
        <p className="text-xs md:text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
);

const RecognitionMarquee: React.FC<{ title: string; cards: any[]; speed?: number }> = ({ title, cards, speed = 60 }) => {
    if (!Array.isArray(cards) || cards.length === 0) return null;
    const animationName = `marquee-scroll-${speed}`;
    return (
        <section className="py-12 md:py-20 overflow-hidden">
             <style>{`
                @keyframes ${animationName} { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
                .animate-${animationName} { animation: ${animationName} ${speed}s linear infinite; }
            `}</style>
            <header className="max-w-7xl mx-auto px-6 mb-8 md:mb-12">
                <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-gray-900">{title}</h2>
            </header>
            <div className="relative w-full">
                <div className="flex whitespace-nowrap overflow-hidden">
                    <div className={`flex w-max animate-${animationName}`}>
                        {[...cards, ...cards].map((card, index) => (
                            <div key={index} className="mx-3 md:mx-4 w-[80vw] md:w-[380px] flex-shrink-0 whitespace-normal py-2 md:py-4"> 
                                <RecognitionCard icon={card.icon} title={card.title} description={card.description} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-gray-50/90 to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-gray-50/90 to-transparent z-10" />
            </div>
        </section>
    );
};

const TechnologyPage: React.FC<{ onNavigate: any }> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  
  // Use local content definition, fallback to props/context if needed
  const content = PAGE_CONTENT[language] || PAGE_CONTENT.zh;

  const techTitle = t('products_page.recognition.tech.title');
  const industryTitle = t('products_page.recognition.industry.title');
  const publicTitle = t('products_page.recognition.public.title');

  const techCards = Array.isArray(t('products_page.recognition.tech.cards')) ? t('products_page.recognition.tech.cards') : [];
  const industryCards = Array.isArray(t('products_page.recognition.industry.cards')) ? t('products_page.recognition.industry.cards') : [];
  const publicCards = Array.isArray(t('products_page.recognition.public.cards')) ? t('products_page.recognition.public.cards') : [];

  return (
    <div className="bg-white min-h-screen animate-in fade-in duration-700">
      
      {/* Hero Section */}
      <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-6 bg-white">
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <span className="block text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-8">
            {content.hero.eyebrow}
          </span>
          <h1 className="text-4xl md:text-[52px] font-medium tracking-tighter text-black mb-8 leading-[1.15] whitespace-pre-line">
            {content.hero.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 font-normal max-w-3xl mx-auto leading-relaxed whitespace-pre-line">
            {content.hero.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Sections */}
      {content.sections.map((section) => (
        <section 
          key={section.id} 
          id={section.id}
          className={`py-24 md:py-32 ${section.theme === 'dark' ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`}
        >
          <div className="max-w-[1440px] mx-auto px-6">
            {/* Section Header */}
            <div className="max-w-4xl mb-20 md:mb-28">
              <h2 className={`text-4xl md:text-5xl font-medium tracking-tight mb-6 ${section.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {section.title}
              </h2>
              <p className={`text-lg md:text-xl font-light max-w-2xl ${section.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {section.subtitle}
              </p>
            </div>

            {/* Alternating Rows */}
            <div className="space-y-24 md:space-y-32">
              {section.items.map((item, idx) => (
                <div key={item.id} id={item.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center scroll-mt-32">
                  
                  {/* Animation Column */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className={`aspect-[4/3] md:aspect-video flex items-center justify-center ${idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                  >
                    <div className="w-full h-full max-w-lg">
                      <TechModuleAnimation type={item.id} theme={section.theme as 'light' | 'dark'} />
                    </div>
                  </motion.div>

                  {/* Text Column */}
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 1 ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className={`flex flex-col ${idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                  >
                    <h3 className={`text-2xl md:text-3xl font-medium tracking-tight mb-6 leading-tight ${section.theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-base md:text-lg leading-relaxed font-light ${section.theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.desc}
                    </p>
                  </motion.div>

                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Recognition Sections */}
      <div className="bg-gray-50/70 border-t border-gray-100">
        <RecognitionMarquee title={techTitle} cards={techCards} speed={50} />
        <RecognitionMarquee title={industryTitle} cards={industryCards} speed={45} />
        <RecognitionMarquee title={publicTitle} cards={publicCards} speed={55} />
      </div>

      {/* Logo Marquee */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="text-[10px] font-bold text-black uppercase tracking-[0.25em]">{t('common.trustedBy')}</p>
        </div>
        <LogoMarquee />
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-medium mb-8">
            {language === 'zh' ? '开启您的企业级 AI 旅程' : 'Start Your Enterprise AI Journey'}
          </h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-black px-12 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-gray-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            {t('home_cta.contact')}
          </button>
        </div>
      </section>

    </div>
  );
};

export default TechnologyPage;
