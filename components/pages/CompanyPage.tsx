
import React, { useMemo, useState } from 'react';
import { ICONS, AGENTS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import LogoMarquee from '../ui/LogoMarquee';
import { IndustryCase, Agent } from '../../types';
import GlobalPresenceGlobe from '../sections/GlobalPresenceGlobe';
import { StaggerWrapper, StaggerItem } from '../ui/StaggerWrapper';

const ValuePropositionCard: React.FC<{ title: string; description: string; number: string; icon: React.ReactNode; }> = ({ title, description, number, icon }) => (
    <div className="group relative bg-white border border-gray-100 rounded-[28px] p-8 md:p-10 flex flex-col transition-all duration-500 hover:shadow-2xl hover:border-gray-200 hover:-translate-y-2 h-full">
        <div className="absolute top-8 right-8 text-6xl font-black text-gray-50/80 transition-colors duration-500 group-hover:text-gray-100">{number}</div>
        
        <div className="mb-8 text-black transition-transform duration-500 group-hover:scale-105">
            {React.cloneElement(icon as React.ReactElement<any>, { className: "w-10 h-10" })}
        </div>
        
        <h3 className="text-xl lg:text-2xl font-medium text-gray-900 mb-4 tracking-tight whitespace-pre-line leading-snug">
            {title}
        </h3>
        
        <p className="text-gray-500 leading-relaxed text-sm whitespace-pre-line">
            {description}
        </p>
    </div>
);

interface CompanyPageProps {
  onNavigate: (page: 'home' | 'product' | 'company' | 'industryDetail' | 'industries' | 'updates' | 'resources' | 'contact', id?: string) => void;
}

const PracticeIndustryCard: React.FC<{ study: IndustryCase, onNavigate: CompanyPageProps['onNavigate'] }> = ({ study, onNavigate }) => {
    if (!study) return null;
    const { t } = useLanguage();

    return (
        <div 
            onClick={() => onNavigate('industryDetail', study.id)}
            className="group flex items-center gap-6 bg-white p-4 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer outline-none ring-0 focus:outline-none focus:ring-0"
            style={{ WebkitTapHighlightColor: 'transparent' }}
        >
            <div className="w-24 h-24 flex-shrink-0 relative rounded-xl overflow-hidden bg-gray-100">
                <img 
                    src={study.imageUrl} 
                    alt={study.logo} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
            <div className="flex-grow min-w-0">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {t(`nav.dropdowns.items.${study.industry}`)}
                </span>
                <h4 className="text-base font-medium text-gray-900 mt-1 leading-snug group-hover:text-black line-clamp-2">
                    {study.title}
                </h4>
            </div>
            <div className="text-gray-300 group-hover:text-black group-hover:translate-x-1 transition-transform pr-2">
                <ICONS.ArrowRight />
            </div>
        </div>
    );
};

const CompanyAgentCard: React.FC<{ agent: Agent, onNavigate: CompanyPageProps['onNavigate'] }> = ({ agent, onNavigate }) => {
    const { language } = useLanguage();
    const name = language === 'en' ? agent.nameEn : agent.nameCn;

    return (
        <div 
            onClick={() => onNavigate('product', agent.id)} 
            className="group cursor-pointer outline-none ring-0 focus:outline-none focus:ring-0"
            style={{ WebkitTapHighlightColor: 'transparent' }}
        >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500">
                <img 
                    src={agent.imageUrl} 
                    alt={name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                    <h4 className="text-white text-base md:text-lg font-semibold drop-shadow-md leading-tight">{name}</h4>
                </div>
            </div>
        </div>
    );
}

const CompanyPage: React.FC<CompanyPageProps> = ({ onNavigate }) => {
  const { language, t } = useLanguage();
  const [hoveredArchIndex, setHoveredArchIndex] = useState<number | null>(null);
  
  const rawStudies = t('industry_cases');
  const allStudies = Array.isArray(rawStudies) ? (rawStudies as IndustryCase[]) : [];
  
  const featuredStudies = useMemo(() => {
    if (!allStudies.length) return [];
    const ids = ['lenovo', 'marriott', 'cr-sanjiu-1'];
    return ids.map(id => allStudies.find(s => s.id === id)).filter((s): s is IndustryCase => s !== undefined);
  }, [allStudies]);

  const allAgents = AGENTS;

  const content = {
    zh: {
      label: '公司',
      title: '特赞，中国领先的企业级智能体公司。',
      intro: '致力于开发企业级智能体系统，通过自研的数据资源管理系统沉淀企业上下文，\n让智能体真正嵌入全球业务流程中，推动创新与增长，赋能商业与社会。',
      companyDescription: [
        '特赞科技（Tezign） 成立于 2015 年，总部位于上海，是一家面向全球企业的人工智能科技公司，专注于构建能够在真实业务场景中长期运行的 企业级智能体系统。围绕企业内容、知识与业务流程，特赞构建 企业级智能体（GEA，Generative Enterprise Agent），使人工智能能够持续理解企业上下文、进行推理并执行任务，从而支持企业在复杂、非标准化的业务环境中稳定交付结果，成为可持续的生产力基础。',
        '特赞的产品与解决方案已服务 200 余家国内外大型企业，覆盖快消、美妆、鞋服、医疗、工业制造等多个行业，支持企业在多业务单元、多角色协作与多系统环境下运行智能体，推动内容、知识与流程的持续协同。围绕企业级应用生态，特赞连接超过 10 万名专业创作者，累计生产 15 万余项企业级内容资产，并在合规的数据治理体系下，支持企业级数据资产的长期沉淀、复用与协作。',
        '在技术层面，特赞的自研模型与系统已在真实业务中实现日均百万级调用规模，在合规的数据治理框架下累计管理超过 10 亿条企业级数据资产。公司已累计申请 160 余项 AIGC 相关发明专利，拥有 50 项软件著作权，并完成多项算法备案。',
        '在产业与政府层面，特赞入选上海市“北斗七星”人工智能重点企业，获评工信部国家级工业设计中心、上海市经信委高质量产业发展人工智能专项企业。其多项技术成果被认定为“国内领先、部分指标达到国际先进水平”，在企业级人工智能应用领域形成了持续影响力。同时，特赞的技术与产品能力亦获得多方专业机构与媒体的长期关注与认可，包括 Gartner、Forrester、Bloomberg、Fast Company 等国际研究机构与商业媒体。'
      ],
      visionEyebrow: '市场机遇',
      visionHeadline: 'AI 正在发生结构性变化',
      visionBody: [
        '从「对话式 AI (Conversational)」走向「智能体 AI (Agentic)」。',
        'AI 不再只是辅助人得到答案的 Copilot，而是开始替代人思考、决策并操作系统，对行动和结果负责。',
        '企业级智能体（Enterprise Agents）将重塑企业服务软件（SaaS），并接管大部分企业服务工作。'
      ],
      valuePropEyebrow: '价值主张',
      valuePropHeadline: '结果，来自正确的上下文。',
      valueProps: [
        { 
          title: 'Outcome NOT Output\n交付结果，而非产出', 
          description: '不只交付内容或工具，而是对业务结果负责。\n智能体不仅执行任务，更能理解目标、做出判断，并持续优化增长、转化与创新效率。' 
        },
        { 
          title: 'Contextual NOT General\n企业专属，而非通用', 
          description: '差异化不在模型，而在上下文。\n我们基于企业独有的数据资产与历史决策，\n构建可被智能体调用的企业级 Context 系统。' 
        },
        { 
          title: 'Proactive NOT Reactive\n主动进化，而非被动响应', 
          description: '从“人发起任务”走向“智能体驱动业务”。\n我们构建能够持续感知变化、主动提出方案，\n并嵌入真实工作流的 Proactive Agent。' 
        }
      ],
      valuePropTransitionLine: '基于结果、上下文与主动性，我们构建了 GEA。',
      whatWeBuildEyebrow: '核心产品',
      whatWeBuildHeadline: 'GEA：以业务目标为中心的企业级智能体系统',
      geaDefinition: 'GEA (Generative Enterprise Agent) 是一套企业级智能体系统。\n它能够理解企业上下文 (Context)，编排多智能体与技能，嵌入真实业务流程。\n\n在复杂、不确定的业务环境中，GEA 持续完成\n「理解目标 → 推理决策 → 执行行动 → 反馈优化」\n的闭环，并最终对业务结果负责。',
      coreTech: [
        { enTitle: 'Intent', cnTitle: '意图层', description: '理解企业真正想达成的 Outcome，而非表层指令。' },
        { enTitle: 'Reasoning', cnTitle: '推理层', description: '基于 Context 与历史决策进行推理、规划与协同。' },
        { enTitle: 'Skills', cnTitle: '技能层', description: '调用技能库 (Skill0)，嵌入工作流执行并回收反馈。' },
        { enTitle: 'Context', cnTitle: '上下文', description: 'DAM 沉淀的真实、连续、可演化的业务记忆。' }
      ],
      inPracticeEyebrow: '行业实践',
      inPracticeHeadline: '在不同行业、不同业务中被持续验证',
      inPracticeConclusion: '在不同企业、不同阶段、不同业务中，\nGEA 已被用于支持产品、内容、销售与协作的日常运行。\n\n这些并非概念验证，\n而是在真实使用中不断被修正、扩展并持续运转的实践。',
      globalEyebrow: '全球协作',
      globalHeadline: '面向全球客户的本地化支持',
      globalBody: '特赞在多个城市设有长期办公点，\n能够就近支持全球客户的持续合作与项目落地，\n并与不同行业与市场的保持长期、稳定的协作关系。',
      globalCities: ['上海', '广州', '新加坡', '香港', '台湾'],
      choiceEyebrow: '我们的立场',
      choiceHeadline: '这是我们的选择。',
      choiceSubtitle: '特赞相信，真正重要的事情，\n来自长期判断、持续协作，\n以及对世界负责的构建方式。',
      choiceBody: '我们并不追求一次性的突破，\n也不相信复杂系统可以被快速解决。\n\n我们选择与企业、研究者与创造者并肩工作，\n在实际业务中反复验证、修正并演进判断本身。\n\n这是特赞的工作方式，\n也是我们选择坚持的方向。',
      ceoQuote: '真正有价值的事情，从来不是一次性的成功，\n而是能否在复杂现实中，被长期验证与持续使用。',
      ceoName: '范凌',
      ceoTitle: '特赞创始人兼首席执行官',
      investorsTitle: '世界级顶级投资机构支持',
      ctaHeadline: 'to Build & Create',
      ctaButton: '联系我们',
    },
    en: {
      label: 'Company',
      title: 'Tezign is a leading Enterprise AI Company in China.',
      intro: 'Dedicated to developing enterprise-grade agent systems, precipitating enterprise context through proprietary Digital Asset Management (DAM),\nenabling agents to truly embed into global business workflows, driving innovation and growth to empower business and society.',
      companyDescription: [
        'Founded in 2015 and headquartered in Shanghai, Tezign is dedicated to developing enterprise-grade agent systems. Through our proprietary Digital Asset Management (DAM) system, we precipitate enterprise Context, allowing agents to truly embed into global business workflows, understand organizational operations, and drive growth, innovation, and user service.',
        'Tezign serves over 200 large global enterprises across consumer goods, beauty, apparel, healthcare, and manufacturing. Within the enterprise ecosystem, Tezign connects over 100,000 professional creators, supporting the long-term accumulation, reuse, and collaboration of enterprise data assets.',
        'Technologically, Tezign’s proprietary models and systems handle millions of daily calls in real business scenarios, managing over 1 billion enterprise data assets under a compliant governance framework. The company holds over 160 AI-related patents and 50 software copyrights.',
        'Tezign has been recognized as a key AI enterprise in Shanghai and a National Industrial Design Center. Its technology is acknowledged by international research firms like Gartner and Forrester.'
      ],
      visionEyebrow: 'Market Opportunity',
      visionHeadline: 'Structural Change in AI',
      visionBody: [
        'From Conversational AI (Copilot) to Agentic AI (Autopilot).',
        'AI is shifting from helping humans get answers to replacing humans in thinking, deciding, and operating systems to deliver results.',
        'Enterprise Agents will transform SaaS and take over the majority of enterprise service work.'
      ],
      valuePropEyebrow: 'Value Proposition',
      valuePropHeadline: 'Results come from the right Context.',
      valueProps: [
        { title: 'Outcome NOT Output', description: 'We don\'t just deliver tools or content; we are responsible for business results.\nAgents understand goals, make judgments, and continuously optimize for growth and efficiency.' },
        { title: 'Contextual NOT General', description: 'The differentiator is Context, not the model.\nWe build enterprise-grade Context systems based on your unique data assets and historical decisions.' },
        { title: 'Proactive NOT Reactive', description: 'From "Human-initiated" to "Agent-driven".\nWe build Proactive Agents that continuously sense changes, propose actions, and embed into real workflows.' }
      ],
      valuePropTransitionLine: 'Based on Outcomes, Context, and Proactivity, we built GEA.',
      whatWeBuildEyebrow: 'Core Product',
      whatWeBuildHeadline: 'GEA: An Outcome-Centric Enterprise Agent System',
      geaDefinition: 'GEA (Generative Enterprise Agent) is a system designed for complex organizations.\nIt understands Enterprise Context, orchestrates multiple agents and skills, and embeds into real workflows.\n\nGEA continuously completes the loop of\n"Understand Goal → Reason & Decide → Execute Action → Feedback Optimization"\nto deliver business results.',
      coreTech: [
        { enTitle: 'Intent', cnTitle: 'Intent', description: 'Understanding the true Outcome behind surface-level instructions.' },
        { enTitle: 'Reasoning', cnTitle: 'Reasoning', description: 'Reasoning and planning based on Context and historical decisions.' },
        { enTitle: 'Skills', cnTitle: 'Skills', description: 'Invoking Skill0 library to execute tasks and retrieve feedback.' },
        { enTitle: 'Context', cnTitle: 'Context', description: 'Real, continuous, evolving business memory precipitated by DAM.' }
      ],
      inPracticeEyebrow: 'Industry Practice',
      inPracticeHeadline: 'Continuously validated across industries and businesses',
      inPracticeConclusion: 'Across companies, stages, and business functions,\nGEA is already supporting the daily operation of products, content, sales, and collaboration.\n\nThese are not proof-of-concepts,\nbut systems continuously refined and expanded through real-world use.',
      globalEyebrow: 'Global Collaboration',
      globalHeadline: 'Localized Support for Global Clients',
      globalBody: 'Tezign maintains long-term presence in multiple cities,\nenabling localized support for global clients’ ongoing collaboration and project delivery,\nwhile maintaining long-term, stable partnerships across diverse industries and markets.',
      globalCities: ['Shanghai', 'Guangzhou', 'Singapore', 'Hong Kong', 'Taiwan'],
      choiceEyebrow: 'Our Stance',
      choiceHeadline: 'This is our choice.',
      choiceSubtitle: 'At Tezign, we believe that what truly matters\ncomes from long-term judgment, sustained collaboration,\nand a way of building that takes responsibility for the world.',
      choiceBody: 'We do not pursue one-off breakthroughs,\nnor do we believe complex systems can be solved quickly.\n\nWe choose to work alongside enterprises, researchers, and creators,\ncontinuously validating, refining, and evolving judgment through real business practice.\n\nThis is how we work.\nAnd this is the direction we choose to stand by.',
      ceoQuote: 'What is truly valuable is never a one-time success,\nbut whether it can be verified and sustained within complex reality over the long term.',
      ceoName: 'Fan Ling',
      ceoTitle: 'Founder & CEO, Tezign',
      investorsTitle: 'Backed by World-Class Investors',
      ctaHeadline: 'to Build & Create',
      ctaButton: 'Contact Us',
    }
  };

  const investorLogos = [
    'https://i.imgs.ovh/2025/12/28/Cwalyh.png',
    'https://i.imgs.ovh/2025/12/28/Cwatge.png',
    'https://i.imgs.ovh/2025/12/28/CwaKoa.png',
    'https://i.imgs.ovh/2025/12/28/Cwap3t.png'
  ];

  const pageContent = content[language];
  const hoveredArch = hoveredArchIndex !== null ? pageContent.coreTech[hoveredArchIndex] : null;

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-500">
      <section className="pt-32 md:pt-40 pb-16 md:pb-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
          <span className="block text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-8">
            {pageContent.label}
          </span>
          <h1 className="text-4xl md:text-[52px] font-semibold text-black tracking-tighter mb-12 leading-tight md:leading-[1.15] whitespace-pre-line">
            {pageContent.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-normal max-w-3xl mx-auto whitespace-pre-line">
            {pageContent.intro}
          </p>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
             <img 
               src="https://i.imgs.ovh/2025/12/30/C1ddAY.jpeg" 
               alt="Tezign Company Office"
               className="w-full h-auto object-cover rounded-[32px] shadow-2xl border border-gray-100"
             />
          </div>
        </div>
      </section>
      
      {pageContent.companyDescription && (
        <section className="py-24 md:py-32 bg-gray-50/70 border-t border-b border-gray-100">
            <div className="max-w-4xl mx-auto px-6">
                {pageContent.companyDescription.map((paragraph: string, index: number) => (
                    <p key={index} className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 last:mb-0">
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>
      )}

      <section id="what-is-gea" className="py-24 md:py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
          <span className="block text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-8">
            {pageContent.visionEyebrow}
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight leading-tight"
            dangerouslySetInnerHTML={{ __html: pageContent.visionHeadline }}
          />
          <div className="mt-10 max-w-2xl mx-auto space-y-5 text-lg md:text-xl text-gray-600 leading-relaxed font-light">
            {pageContent.visionBody.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50/70 border-t border-b border-gray-100 flex flex-col items-center justify-center min-h-[90vh]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <span className="block text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-6">
              {pageContent.valuePropEyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight mb-20">
              {pageContent.valuePropHeadline}
          </h2>
        </div>
        <div className="max-w-7xl w-full mx-auto px-6">
          <StaggerWrapper className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 items-stretch">
            <StaggerItem className="h-full">
                <ValuePropositionCard 
                number="01"
                title={pageContent.valueProps[0].title}
                description={pageContent.valueProps[0].description}
                icon={<ICONS.IconValueOutcome />}
                />
            </StaggerItem>
            <StaggerItem className="h-full">
                <ValuePropositionCard 
                number="02"
                title={pageContent.valueProps[1].title}
                description={pageContent.valueProps[1].description}
                icon={<ICONS.IconValueContext />}
                />
            </StaggerItem>
            <StaggerItem className="h-full">
                <ValuePropositionCard 
                number="03"
                title={pageContent.valueProps[2].title}
                description={pageContent.valueProps[2].description}
                icon={<ICONS.IconValueSystem />}
                />
            </StaggerItem>
          </StaggerWrapper>
          <p className="text-center text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed whitespace-pre-line">
              {pageContent.valuePropTransitionLine}
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-3 lg:pt-8 flex flex-col">
                    <span className="block text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-8">{pageContent.whatWeBuildEyebrow}</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight leading-tight">
                        {pageContent.whatWeBuildHeadline}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mt-6 mb-24 whitespace-pre-line">
                        {pageContent.geaDefinition}
                    </p>
                    
                    <div className="mt-auto" onMouseLeave={() => setHoveredArchIndex(null)}>
                        <StaggerWrapper className="flex flex-wrap gap-3">
                           {pageContent.coreTech.map((item: any, index: number) => (
                               <StaggerItem key={index}>
                                   <button 
                                     onMouseEnter={() => setHoveredArchIndex(index)}
                                     className={`px-6 py-3 rounded-full text-center transition-colors duration-300 text-sm font-medium ${
                                         hoveredArchIndex === index
                                           ? 'bg-black text-white'
                                           : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                     }`}
                                   >
                                      {language === 'en' ? item.enTitle : item.cnTitle}
                                   </button>
                               </StaggerItem>
                           ))}
                        </StaggerWrapper>

                        <div className="relative min-h-[140px] mt-4">
                           {hoveredArch && (
                             <div className="absolute w-full bg-gray-50 rounded-xl p-6 border border-gray-100 animate-in fade-in duration-300">
                               <p className="text-sm text-gray-600 leading-relaxed">{hoveredArch.description}</p>
                             </div>
                           )}
                        </div>
                    </div>
                </div>

                <StaggerWrapper className="lg:col-span-2 grid grid-cols-2 gap-4 lg:pt-8">
                    {allAgents.map((agent) => (
                        <StaggerItem key={agent.id}>
                            <CompanyAgentCard agent={agent} onNavigate={onNavigate} />
                        </StaggerItem>
                    ))}
                </StaggerWrapper>
            </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="lg:pt-4">
                <span className="block text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-8">{pageContent.inPracticeEyebrow}</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight mb-10">{pageContent.inPracticeHeadline}</h2>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed whitespace-pre-line font-light">
                  {pageContent.inPracticeConclusion}
                </p>
            </div>

            <StaggerWrapper className="flex flex-col gap-6 lg:pt-4">
                {featuredStudies.map((study) => (
                    study ? (
                        <StaggerItem key={study.id}>
                            <PracticeIndustryCard study={study} onNavigate={onNavigate} />
                        </StaggerItem>
                    ) : null
                ))}
            </StaggerWrapper>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
                <span className="block text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-8">
                    {pageContent.globalEyebrow}
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight mb-10">
                    {pageContent.globalHeadline}
                </h2>
                
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed whitespace-pre-line font-light">
                    {pageContent.globalBody}
                </p>

                <div className="flex flex-wrap gap-3 mt-8">
                    {pageContent.globalCities.map((city: string, idx: number) => (
                        <span 
                            key={idx}
                            className="px-4 py-2 bg-gray-50 text-gray-700 text-sm font-medium rounded-full border border-gray-100"
                        >
                            {city}
                        </span>
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-center lg:justify-end">
                <GlobalPresenceGlobe />
            </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
            <div className="text-left">
                 <span className="block text-sm font-medium text-gray-500 uppercase tracking-[0.2em] mb-8">
                    {pageContent.choiceEyebrow}
                 </span>
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 tracking-tight leading-tight">
                    {pageContent.choiceHeadline}
                 </h2>
                 <p className="mt-8 text-lg md:text-xl text-gray-600 leading-relaxed font-light whitespace-pre-line">
                    {pageContent.choiceSubtitle}
                 </p>
                 <p className="mt-12 text-base md:text-lg text-gray-500 leading-relaxed whitespace-pre-line font-light">
                    {pageContent.choiceBody}
                 </p>
            </div>

            <div className="flex">
                 <div className="bg-black border border-white/10 rounded-[28px] p-8 lg:p-12 shadow-2xl max-w-md w-full h-full flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-4 left-4 md:top-10 md:left-10 text-6xl md:text-8xl text-zinc-800 font-serif leading-none select-none pointer-events-none opacity-40">
                        “
                    </div>
                    
                    <p className="text-xl md:text-3xl text-white leading-snug font-medium mb-12 md:mb-20 whitespace-pre-line relative z-10 px-2 md:px-4">
                       {pageContent.ceoQuote}
                    </p>

                    <div className="absolute bottom-28 right-8 md:bottom-32 md:right-12 text-6xl md:text-8xl text-zinc-800 font-serif leading-none select-none pointer-events-none opacity-40">
                        ”
                    </div>

                    <div className="flex items-center space-x-4 relative z-10 mt-auto md:mt-0">
                       <img src="https://i.imgs.ovh/2025/12/28/CXVH9F.jpeg" alt="Fan Ling, Tezign CEO" loading="lazy" decoding="async" className="w-14 h-14 rounded-full object-cover ring-1 ring-white/20" />
                       <div>
                         <p className="text-base font-bold text-white">{pageContent.ceoName}</p>
                         <p className="text-sm text-gray-400 mt-1">{pageContent.ceoTitle}</p>
                       </div>
                    </div>
                 </div>
            </div>
        </div>
      </section>

      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto text-center px-6">
          <p className="text-[11px] font-bold text-black uppercase tracking-[0.2em] mb-12">
            {pageContent.investorsTitle}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-8 md:gap-x-20 lg:gap-x-28">
            {investorLogos.map((logoUrl, index) => (
              <img
                key={index}
                src={logoUrl}
                alt={`Investor logo ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="h-5 md:h-6 lg:h-7 w-auto object-contain filter grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="pt-12 pb-12">
        <div className="max-w-7xl mx-auto text-center mb-10 px-6">
          <p className="text-[11px] font-bold text-black uppercase tracking-[0.2em]">
            {t('common.trustedBy')}
          </p>
        </div>
        <LogoMarquee />
      </section>
      
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl lg:text-4xl font-medium mb-8">{pageContent.ctaHeadline}</h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-black px-12 py-5 rounded-full font-bold text-sm hover:bg-gray-200 transition-all"
          >
            {pageContent.ctaButton}
          </button>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;
