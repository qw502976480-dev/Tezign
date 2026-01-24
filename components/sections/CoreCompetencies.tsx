
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { motion } from 'framer-motion';

const CoreCompetencies: React.FC = () => {
  const { t } = useLanguage();

  const getCards = () => {
    const raw = t('home.core_competencies.cards');
    if(Array.isArray(raw)) return raw;
    return [];
  };

  const cards = getCards();

  const cycleTransition = {
    duration: 6,
    times: [0, 0.18, 0.55, 0.75, 1], 
    repeat: Infinity,
    repeatDelay: 0.9,
    ease: "easeInOut" as const
  };

  const shapes = {
    context: (
      <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
        <text x="20" y="40" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontSize="10" letterSpacing="1">{`struct Context {`}</text>
        <text x="40" y="60" fill="rgba(255,255,255,0.2)" fontFamily="monospace" fontSize="10" letterSpacing="1">{`assets: Map<ID, Data>;`}</text>
        <text x="40" y="80" fill="rgba(255,255,255,0.2)" fontFamily="monospace" fontSize="10" letterSpacing="1">{`rules: Logic[];`}</text>
        <text x="20" y="280" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontSize="10" letterSpacing="1">{`}`}</text>

        <g transform="translate(200, 150)">
           <g className="animate-[float_8s_ease-in-out_infinite]">
              <motion.g animate={{ y: [0, 14, 14, 0, 0] }} transition={cycleTransition}>
                <path d="M -80 60 L 80 60 L 120 30 L -40 30 Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />
              </motion.g>
              <motion.g animate={{ y: [0, -14, -14, 0, 0] }} transition={cycleTransition}>
                <path d="M -80 -40 L 80 -40 L 120 -70 L -40 -70 Z" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />
              </motion.g>
              <motion.g animate={{ opacity: [0.85, 1, 1, 0.85, 0.85] }} transition={cycleTransition}>
                <path d="M -90 10 L 90 10 L 130 -20 L -50 -20 Z" fill="rgba(255,255,255,0.03)" stroke="white" strokeWidth="1.5" />
              </motion.g>
              <motion.g animate={{ opacity: [0.6, 1, 1, 0.6, 0.6] }} transition={cycleTransition}>
                <line x1="-20" y1="-20" x2="-20" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                <line x1="60" y1="10" x2="60" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                <line x1="0" y1="-50" x2="0" y2="-10" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                <circle cx="0" cy="-10" r="2" fill="white" />
                <circle cx="40" cy="0" r="2" fill="white" />
                <circle cx="-40" cy="-5" r="2" fill="white" opacity="0.5" />
                <path d="M -40 -5 L 0 -10 L 40 0" fill="none" stroke="white" strokeWidth="0.5" />
              </motion.g>
           </g>
        </g>
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
        <text x="20" y="40" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontSize="10" letterSpacing="1">{`fn execute(task: Task) {`}</text>
        <text x="40" y="60" fill="rgba(255,255,255,0.2)" fontFamily="monospace" fontSize="10" letterSpacing="1">{`step1 = agent.plan();`}</text>
        <text x="40" y="80" fill="rgba(255,255,255,0.2)" fontFamily="monospace" fontSize="10" letterSpacing="1">{`step2 = agent.act(step1);`}</text>
        <text x="20" y="280" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontSize="10" letterSpacing="1">{`return result; }`}</text>

        <g transform="translate(200, 150)">
           <g className="animate-[float_8s_ease-in-out_infinite] [animation-delay:1s]">
              <path d="M -120 40 L -40 10 L 40 40 L 120 10" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <motion.g animate={{ opacity: [0.5, 1, 1, 0.5, 0.5] }} transition={cycleTransition}>
                <path d="M -120 40 L -40 10 L 40 40 L 120 10" fill="none" stroke="white" strokeWidth="1.5" strokeDasharray="10 10" className="animate-[dash_3s_linear_infinite]" />
              </motion.g>
              <style>{`@keyframes dash { to { stroke-dashoffset: -40; } }`}</style>
              <g transform="translate(-120, 40)">
                 <motion.g animate={{ y: [0, 8, 8, 0, 0] }} transition={cycleTransition}>
                    <path d="M -20 10 L 20 10 L 30 -5 L -10 -5 Z" fill="rgba(255,255,255,0.05)" stroke="white" strokeWidth="0.5" />
                    <circle cy="0" r="3" fill="white" />
                    <text y="20" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace" textAnchor="middle">INPUT</text>
                 </motion.g>
              </g>
              <g transform="translate(-40, 10)">
                 <motion.g animate={{ y: [0, -8, -8, 0, 0] }} transition={cycleTransition}>
                    <rect x="-15" y="-15" width="30" height="30" transform="rotate(45)" fill="black" stroke="white" strokeWidth="1" />
                    <text y="32" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace" textAnchor="middle">PROC</text>
                 </motion.g>
              </g>
              <g transform="translate(40, 40)">
                 <motion.g animate={{ y: [0, 6, 6, 0, 0] }} transition={cycleTransition}>
                    <circle r="12" fill="black" stroke="white" strokeWidth="1" />
                    <circle r="4" fill="white" className="animate-pulse" />
                    <text y="25" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace" textAnchor="middle">ACT</text>
                 </motion.g>
              </g>
              <g transform="translate(120, 10)">
                 <motion.g animate={{ y: [0, -6, -6, 0, 0] }} transition={cycleTransition}>
                    <path d="M 0 -10 L 10 0 L 0 10 L -10 0 Z" fill="white" />
                    <text y="25" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace" textAnchor="middle">OUT</text>
                 </motion.g>
              </g>
           </g>
        </g>
      </svg>
    ),
    evolution: (
      <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
        <text x="20" y="40" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontSize="10" letterSpacing="1">{`while (system.isRunning) {`}</text>
        <text x="40" y="60" fill="rgba(255,255,255,0.2)" fontFamily="monospace" fontSize="10" letterSpacing="1">{`feedback = gather();`}</text>
        <text x="40" y="80" fill="rgba(255,255,255,0.2)" fontFamily="monospace" fontSize="10" letterSpacing="1">{`model.improve(feedback);`}</text>
        <text x="20" y="280" fill="rgba(255,255,255,0.3)" fontFamily="monospace" fontSize="10" letterSpacing="1">{`}`}</text>

        <g transform="translate(200, 180)">
           <motion.g 
             className="animate-[float_8s_ease-in-out_infinite] [animation-delay:2s]"
             animate={{ y: [0, -10, -10, 0, 0] }} 
             transition={cycleTransition}
           >
              <line x1="0" y1="0" x2="0" y2="-140" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
              <ellipse cx="0" cy="0" rx="60" ry="20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
              <ellipse cx="0" cy="-60" rx="60" ry="20" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
              <ellipse cx="0" cy="-120" rx="60" ry="20" fill="none" stroke="white" strokeWidth="1.5" />
              <path d="M 60 0 Q 80 -30, 60 -60" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M -60 -60 Q -80 -90, -60 -120" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1" strokeDasharray="4 4" />
              <g transform="translate(60, 0)">
                 <circle r="3" fill="rgba(255,255,255,0.5)" />
                 <text x="10" y="3" fill="rgba(255,255,255,0.3)" fontSize="8" fontFamily="monospace">v1.0</text>
              </g>
              <g transform="translate(-60, -60)">
                 <circle r="4" fill="rgba(255,255,255,0.8)" />
                 <text x="-30" y="3" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace">v2.0</text>
              </g>
              <circle r="3" fill="white">
                 <animateMotion dur="4s" repeatCount="indefinite" path="M 60 0 A 60 20 0 0 1 -60 0 A 60 20 0 0 1 60 0" />
              </circle>
              <g transform="translate(0, -120)">
                 <circle r="6" fill="white" className="animate-pulse" />
                 <text x="15" y="3" fill="white" fontSize="8" fontFamily="monospace">v3.0</text>
                 <path d="M 0 -15 L -4 -8 M 0 -15 L 4 -8" stroke="white" strokeWidth="1.5" />
                 <line x1="0" y1="-15" x2="0" y2="0" stroke="white" strokeWidth="1.5" />
              </g>
           </motion.g>
        </g>
      </svg>
    )
  };

  return (
    <section className="bg-black py-24 md:py-32 overflow-hidden border-t border-gray-900">
       <style>{`
         @keyframes float {
           0%, 100% { transform: translateY(0); }
           50% { transform: translateY(-5px); }
         }
       `}</style>

       <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-white mb-6 leading-tight"
            >
              {t('home.core_competencies.title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-lg md:text-xl text-gray-400 font-normal leading-relaxed max-w-2xl mx-auto"
            >
              {t('home.core_competencies.subtitle')}
            </motion.p>
          </div>

          <div className="space-y-24 md:space-y-32">
            {cards.map((card: any, i: number) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`flex flex-col justify-center ${i % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <h3 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                    {card.title}
                  </h3>
                  <p className="text-lg text-gray-400 leading-relaxed font-light whitespace-pre-line">
                    {card.desc}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 30 : -30, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  className={`relative w-full aspect-[4/3] flex items-center justify-center ${i % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}
                >
                  <div className="w-full h-full relative">
                     {shapes[card.type as keyof typeof shapes]}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default CoreCompetencies;
