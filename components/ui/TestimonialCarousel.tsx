
import * as React from 'react';
import { ProductTestimonial } from '../../types';
import AIAvatar from './AIAvatar';

const TestimonialCarousel: React.FC<{ testimonials: ProductTestimonial[]; t: (key: string) => string; language: 'en' | 'zh' }> = ({ testimonials, t, language }) => {
  const N = testimonials.length;
  const [activeIndex, setActiveIndex] = React.useState(N > 0 ? N : 0);
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  const [cardWidth, setCardWidth] = React.useState(480);
  const carouselRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setCardWidth(Math.min(w - 48, 340));
      } else if (w < 1024) {
        setCardWidth(420);
      } else {
        setCardWidth(480);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const extendedTestimonials = React.useMemo(() => {
    if (N === 0) return [];
    return [...testimonials, ...testimonials, ...testimonials];
  }, [testimonials, N]);

  React.useEffect(() => {
    if (N === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => prevIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [N]);

  React.useEffect(() => {
    if (activeIndex >= N * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setActiveIndex(N);
      }, 700);
      return () => clearTimeout(timer);
    }
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, N, isTransitioning]);

  if (N === 0) return null;

  const CARD_GAP = window.innerWidth < 768 ? 16 : 32;
  const offset = -activeIndex * (cardWidth + CARD_GAP);

  return (
    <div className="relative w-full h-[300px] md:h-[320px]" ref={carouselRef}>
      <div 
        className="absolute top-0 left-1/2 flex h-full items-center"
        style={{
          transform: `translateX(calc(-${cardWidth / 2}px + ${offset}px))`,
          transition: isTransitioning ? 'none' : 'transform 850ms cubic-bezier(0.2, 1, 0.2, 1)',
        }}
      >
        {extendedTestimonials.map((item, idx) => {
          const authorName = language === 'en' ? item.author.en : item.author.zh;
          const companyName = language === 'en' ? item.company.en : item.company.zh;
          const isActive = idx === activeIndex;
          const rawQuote = language === 'en' ? item.quote.en : item.quote.zh;
          const cleanQuote = rawQuote.replace(/^[“”"]+|[“”"]+$/g, '');
          
          const seedName = item.author.en;

          return (
            <div
              key={idx}
              className="flex-shrink-0 transition-all duration-1000"
              style={{
                width: `${cardWidth}px`,
                marginRight: `${CARD_GAP}px`,
                transform: `scale(${isActive ? 1 : 0.9})`,
                opacity: isActive ? 1 : 0.2,
                filter: `blur(${isActive ? 0 : '10px'})`,
              }}
            >
              <div className="relative bg-[#000000] rounded-[24px] md:rounded-[36px] p-8 md:p-12 border border-white/10 h-full flex flex-col justify-between shadow-2xl overflow-hidden">
                <div className="relative pt-4">
                  <div className="absolute -top-4 -left-4 text-6xl md:text-8xl text-zinc-800 font-serif leading-none select-none pointer-events-none opacity-40">“</div>
                  <p className="relative z-10 text-[15px] md:text-lg text-white font-normal leading-relaxed mb-6 md:mb-8 tracking-tight px-2 md:px-4 line-clamp-4">
                    {cleanQuote}
                  </p>
                  <div className="absolute -bottom-6 right-0 text-6xl md:text-8xl text-zinc-800 font-serif leading-none select-none pointer-events-none opacity-40">”</div>
                </div>

                <div className="flex items-center space-x-4 md:space-x-5 mt-auto relative z-10">
                  <AIAvatar 
                    name={authorName} 
                    seedName={seedName} 
                    role="User" 
                    size="w-10 h-10 md:w-14 md:h-14" 
                    className="ring-1 ring-white/10" 
                    url={item.avatar}
                  />
                  <div className="min-w-0">
                    <div className="text-xs md:text-sm font-bold text-white tracking-wide mb-0.5">{authorName}</div>
                    <div className="text-[9px] md:text-[11px] font-medium text-gray-500 uppercase tracking-widest truncate">{companyName}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 flex items-center space-x-2">
        {testimonials.map((_, idx) => (
          <button key={idx} onClick={() => setActiveIndex(N + idx)} className="group py-2 px-1 focus:outline-none">
            <div className={`h-1 rounded-full transition-all duration-500 ${activeIndex % N === idx ? 'bg-black w-6' : 'bg-gray-200 w-2'}`} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
