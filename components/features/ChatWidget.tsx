
import React, { useState, useRef, useEffect } from 'react';
import { ICONS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  isOption?: boolean;
}

interface ChatWidgetProps {
  onNavigate?: (page: any, id?: string) => void;
}

const MinimalArrowRight = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <polyline points="14 6 20 12 14 18"></polyline>
  </svg>
);

const MinimalArrowUp = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5"></line>
    <polyline points="5 12 12 5 19 12"></polyline>
  </svg>
);

const RobotIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" />
    <line x1="16" y1="16" x2="16" y2="16" />
  </svg>
);

const MicIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const ChatWidget: React.FC<ChatWidgetProps> = ({ onNavigate }) => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [textIndex, setTextIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(true);

  const buttonTextsEn = [
    "Ask anything",
    "Start Chat"
  ];

  const buttonTextsCn = [
    "随心提问",
    "开启对话"
  ];

  const currentTextList = language === 'en' ? buttonTextsEn : buttonTextsCn;

  useEffect(() => {
    if (isOpen) return;

    const interval = setInterval(() => {
      setIsTextVisible(false);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % currentTextList.length);
        setIsTextVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [isOpen, language, currentTextList.length]);

  const initialMessages: Message[] = [
    { 
      id: 'welcome', 
      sender: 'bot', 
      text: language === 'en' 
        ? "Hello, I am the Tezign Assistant. How can I help you today?" 
        : "您好，我是特赞智能助手。有什么可以帮您的？" 
    }
  ];

  const [messages, setMessages] = useState<Message[]>(initialMessages);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isTyping]);

  useEffect(() => {
    setMessages([{
      id: 'welcome-' + Date.now(),
      sender: 'bot',
      text: language === 'en' 
        ? "Hello, I am the Tezign Assistant. How can I help you today?" 
        : "您好，我是特赞智能助手。有什么可以帮您的？"
    }]);
  }, [language]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = { id: Date.now().toString(), sender: 'user', text };
    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponseText = "";
      const lowerText = text.toLowerCase();

      if (lowerText.includes("sales") || lowerText.includes("contact") || lowerText.includes("销售") || lowerText.includes("联系") || lowerText.includes("沟通")) {
        botResponseText = language === 'en' 
          ? "I can help you connect with our sales team. Redirecting you to the contact page..."
          : "我可以帮您联系我们的销售团队。正在为您跳转至联系页面...";
        
        if (onNavigate) {
            setTimeout(() => {
                onNavigate('contact');
            }, 1500);
        }
      } else if (lowerText.includes("about") || lowerText.includes("tezign") || lowerText.includes("特赞") || lowerText.includes("company")) {
        botResponseText = language === 'en'
          ? "Tezign is an Enterprise AI Company. Redirecting you to our company page..."
          : "特赞是一家企业级人工智能公司。正在为您跳转至公司介绍页面...";
          
        if (onNavigate) {
            setTimeout(() => {
                onNavigate('company');
            }, 1500);
        }
      } else {
        botResponseText = language === 'en'
          ? "Thank you for your inquiry. To get a precise answer about Tezign's enterprise solutions, I recommend browsing our Case Studies section or contacting our support."
          : "感谢您的咨询。为了获得关于特赞企业解决方案的准确信息，建议您浏览我们的案例部分或直接联系客服。";
      }

      const botMsg: Message = { id: (Date.now() + 1).toString(), sender: 'bot', text: botResponseText };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert(language === 'en' ? "Voice input is not supported in this browser." : "当前浏览器不支持语音输入。");
      return;
    }

    if (isListening) return;

    setIsListening(true);
    // @ts-ignore
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = language === 'en' ? 'en-US' : 'zh-CN';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInputValue(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: any) => {
      console.error(event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleQuickAction = (action: 'business' | 'about') => {
    const query = action === 'business' 
        ? (language === 'en' ? "Business Communication" : "业务沟通")
        : (language === 'en' ? "About Tezign" : "了解特赞");
    
    handleSend(query);
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[110] flex flex-col items-center pointer-events-none w-full max-w-[90vw]">
      
      {isOpen && (
        <div className="bg-white w-full max-w-[340px] md:max-w-[380px] h-[540px] max-h-[80vh] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-gray-100 flex flex-col mb-4 overflow-hidden pointer-events-auto animate-in fade-in slide-in-from-bottom-4 duration-300 origin-bottom">
          
          <div className="px-5 py-4 border-b border-gray-50 flex items-center justify-between bg-white/80 backdrop-blur-md sticky top-0 z-10">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white shadow-sm">
                <RobotIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 leading-none mb-0.5">Tezign AI</h3>
                <div className="flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-gray-400 font-medium">Assistant Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-black transition-colors">
              <ICONS.Close />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/30">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-black text-white rounded-br-sm' 
                      : 'bg-white border border-gray-100 text-gray-800 shadow-sm rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-50 flex flex-col gap-3">
            
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(inputValue); }}
              className="relative flex items-center"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={language === 'en' ? "Ask anything..." : "请输入您的问题..."}
                className="w-full pl-4 pr-20 py-3 bg-gray-50 border-none rounded-xl text-sm focus:ring-1 focus:ring-black/5 transition-all outline-none"
              />
              
              <div className="absolute right-1.5 flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleVoiceInput}
                  className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isListening ? 'bg-red-50 text-red-500 animate-pulse' : 'hover:bg-gray-200 text-gray-400 hover:text-black'}`}
                  title={language === 'en' ? "Voice Input" : "语音输入"}
                >
                   <MicIcon className="w-4 h-4" />
                </button>

                <button 
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="w-8 h-8 bg-white border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-black transition-all disabled:opacity-50 disabled:hover:bg-white shadow-sm"
                >
                  <div className="scale-[0.7]"><MinimalArrowUp /></div>
                </button>
              </div>
            </form>

            <div className="flex gap-2 w-full">
               <button 
                 onClick={() => handleQuickAction('business')}
                 className="flex-1 py-2.5 px-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-100 hover:text-black hover:border-gray-200 transition-all text-center whitespace-nowrap overflow-hidden text-ellipsis"
               >
                 {language === 'en' ? "Business Chat" : "业务沟通"}
               </button>
               <button 
                 onClick={() => handleQuickAction('about')}
                 className="flex-1 py-2.5 px-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-medium text-gray-600 hover:bg-gray-100 hover:text-black hover:border-gray-200 transition-all text-center whitespace-nowrap overflow-hidden text-ellipsis"
               >
                 {language === 'en' ? "About Tezign" : "了解特赞"}
               </button>
            </div>

          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto group relative flex items-center bg-gray-100 hover:bg-white border border-transparent hover:border-gray-200 shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] rounded-full pl-4 pr-1.5 py-1.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
      >
        <div className="h-5 flex flex-col justify-center min-w-0 text-left overflow-hidden mr-2">
           <span 
             className={`text-sm font-semibold text-gray-600 group-hover:text-black tracking-tight whitespace-nowrap transition-all duration-300 ${isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
           >
              {isOpen ? (language === 'en' ? "Close Chat" : "关闭对话") : currentTextList[textIndex]}
           </span>
        </div>

        <div className="relative w-8 h-8 flex items-center justify-center text-gray-400 bg-white rounded-full transition-all duration-300 shadow-sm border border-gray-100 group-hover:border-gray-200 group-hover:text-black">
           <div className="transition-transform duration-300 group-hover:translate-x-0.5">
              {isOpen ? <ICONS.Close className="w-4 h-4"/> : <MinimalArrowRight className="w-4 h-4" />}
           </div>
        </div>
      </button>
    </div>
  );
};

export default ChatWidget;
