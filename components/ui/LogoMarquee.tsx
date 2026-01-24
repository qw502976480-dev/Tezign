
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const LOGO_DATA = [
  { zh: '联合利华', en: 'Unilever' },
  { zh: '宝洁', en: 'P&G' },
  { zh: '欧莱雅', en: "L'ORÉAL" },
  { zh: '雀巢', en: 'Nestlé' },
  { zh: '玛氏', en: 'Mars' },
  { zh: '达能', en: 'Danone' },
  { zh: '汉高', en: 'Henkel' },
  { zh: '李锦记', en: 'LEE KUM KEE' },
  { zh: '阿迪达斯', en: 'adidas' },
  { zh: '彪马', en: 'PUMA' },
  { zh: '安德玛', en: 'Under Armour' },
  { zh: '新百伦', en: 'New Balance' },
  { zh: '雅诗兰黛', en: 'Estée Lauder' },
  { zh: '资生堂', en: 'SHISEIDO' },
  { zh: '迪奥', en: 'Dior' },
  { zh: '娇兰', en: 'GUERLAIN' },
  { zh: '路威酩轩', en: 'LVMH' },
  { zh: '博世', en: 'BOSCH' },
  { zh: '卡特彼勒', en: 'CATERPILLAR' },
  { zh: '阿普塔', en: 'Aptar' },
  { zh: '科勒', en: 'KOHLER' },
  { zh: '联影医疗', en: 'UNITED IMAGING' },
  { zh: '拜耳', en: 'BAYER' },
  { zh: '诺华', en: 'NOVARTIS' },
  { zh: '先正达', en: 'Syngenta' },
  { zh: '硕腾', en: 'Zoetis' },
  { zh: '强生', en: 'Johnson & Johnson' },
  { zh: '保时捷', en: 'Porsche' },
  { zh: '奥迪', en: 'Audi' },
  { zh: '上汽集团', en: 'SAIC MOTOR' },
  { zh: '长城汽车', en: 'GREAT WALL MOTOR' },
  { zh: '吉利汽车', en: 'GEELY AUTO' },
  { zh: 'smart', en: 'smart' },
  { zh: '蚂蚁集团', en: 'ANT GROUP' },
  { zh: '中金公司', en: 'CICC' },
  { zh: '阿里巴巴', en: 'Alibaba' },
  { zh: '腾讯', en: 'Tencent' },
  { zh: '字节跳动', en: 'Bytedance' },
  { zh: '美团', en: 'MEITUAN' },
  { zh: '联想', en: 'Lenovo' },
  { zh: 'TCL', en: 'TCL' },
  { zh: '安克创新', en: 'Anker Innovations' },
  { zh: '麦当劳', en: "McDonald's" },
  { zh: '星巴克', en: 'Starbucks' }
];

const LogoMarquee: React.FC = () => {
  const { language } = useLanguage();

  // Logic: In English ('en'), show only English name. 
  // In Chinese ('zh'), show "Chinese Name  ENGLISH NAME".
  const formattedLogos = LOGO_DATA.map(item => {
    if (language === 'en') {
      return item.en.toUpperCase();
    }
    return `${item.zh}  ${item.en.toUpperCase()}`;
  });

  return (
    <div className="w-full py-12 relative overflow-hidden select-none bg-white">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 100s linear infinite;
          }
        `}
      </style>
      
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex animate-marquee">
          {/* Double the list for seamless looping */}
          {[...formattedLogos, ...formattedLogos].map((brandText, idx) => (
            <span 
              key={idx} 
              className="mx-12 text-2xl md:text-3xl font-bold text-gray-300 uppercase tracking-tighter hover:text-black transition-colors duration-500 flex items-center"
            >
              {brandText}
            </span>
          ))}
        </div>
      </div>

      {/* Edge Fading Masks for a smoother transition */}
      <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default LogoMarquee;
