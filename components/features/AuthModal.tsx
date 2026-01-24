
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ICONS } from '../../constants';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  onNavigate?: (page: 'home', id?: string) => void;
}

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const RoleSelect = ({ value, onChange, options, placeholder }: { value: string, onChange: (val: string) => void, options: string[], placeholder: string }) => {
    const { t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={containerRef}>
            <button 
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-4 py-3 text-left flex items-center justify-between rounded-xl text-sm transition-all outline-none ${
                    isOpen 
                        ? 'bg-white border border-black ring-1 ring-black' 
                        : 'bg-gray-50 border border-transparent hover:bg-gray-100'
                }`}
            >
                <span className={`block truncate ${value ? 'text-black font-medium' : 'text-gray-400'}`}>
                    {value ? t(`auth_modal.signup.step1.roles.${value}`) : placeholder}
                </span>
                <ICONS.ChevronDown className={`w-3 h-3 text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-black' : ''}`} />
            </button>
            
            {isOpen && (
                <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white border border-gray-100 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.15)] z-50 max-h-[240px] overflow-y-auto p-1.5 animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200">
                    {options.map((role: string) => (
                        <div 
                            key={role}
                            onClick={() => { onChange(role); setIsOpen(false); }}
                            className={`px-4 py-2.5 rounded-lg text-sm cursor-pointer transition-all flex items-center justify-between group ${
                                value === role ? 'bg-gray-50 text-black font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                            }`}
                        >
                            <span>{t(`auth_modal.signup.step1.roles.${role}`)}</span>
                            {value === role && <div className="w-1.5 h-1.5 rounded-full bg-black"></div>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess, onNavigate }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  
  const [isAgreed, setIsAgreed] = useState(false);

  const [signupStep, setSignupStep] = useState(0);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [subscribe, setSubscribe] = useState(false);

  const rolesList = ['marketing', 'creative', 'it', 'product', 'operations', 'executive', 'other'];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleAction = () => {
    if (onSuccess) onSuccess();
  };

  const handleInterestToggle = (key: string) => {
    setSelectedInterests(prev => 
        prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };

  const handleBack = () => {
    if (signupStep > 0) setSignupStep(prev => prev - 1);
  };

  if (!isOpen) return null;

  const showBackButton = activeTab === 'signup' && signupStep > 0 && signupStep < 4;
  const showTabs = !showBackButton && signupStep !== 4;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-gray-900/20 backdrop-blur-sm animate-in fade-in duration-300" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-[440px] bg-white border border-gray-100 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.12)] overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 flex flex-col max-h-[90vh]">
        
        <div className="flex-shrink-0 border-b border-gray-50 h-[60px] flex items-center">
            {showBackButton ? (
                <div className="w-full flex items-center px-4">
                    <button 
                        onClick={handleBack}
                        className="p-2 rounded-full hover:bg-gray-50 text-gray-500 transition-colors flex items-center justify-center group"
                    >
                        <ICONS.ChevronLeft className="w-5 h-5 group-hover:text-black" />
                    </button>
                </div>
            ) : showTabs ? (
                <div className="w-full flex h-full">
                    <button 
                        onClick={() => setActiveTab('login')}
                        className={`flex-1 text-xs font-bold uppercase tracking-[0.2em] transition-colors h-full ${activeTab === 'login' ? 'text-black bg-white border-b-2 border-black' : 'text-gray-400 hover:text-gray-600 bg-gray-50/30'}`}
                    >
                        {t('auth_modal.tabs.signin')}
                    </button>
                    <button 
                        onClick={() => setActiveTab('signup')}
                        className={`flex-1 text-xs font-bold uppercase tracking-[0.2em] transition-colors h-full ${activeTab === 'signup' ? 'text-black bg-white border-b-2 border-black' : 'text-gray-400 hover:text-gray-600 bg-gray-50/30'}`}
                    >
                        {t('auth_modal.tabs.signup')}
                    </button>
                </div>
            ) : null}
        </div>

        <div className="p-8 md:p-10 overflow-y-auto custom-scrollbar">
          
          {activeTab === 'login' && (
            <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                <div className="text-center mb-2">
                    <h2 className="text-xl font-semibold text-gray-900 mb-1">{t('auth_modal.signin.title')}</h2>
                </div>

                <button onClick={handleAction} className="w-full flex items-center justify-center space-x-3 py-3.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span>{t('auth_modal.signin.sso')}</span>
                </button>

                <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-100"></div>
                    <span className="flex-shrink mx-4 text-[10px] font-bold text-gray-300 uppercase tracking-widest">{t('auth_modal.signin.divider')}</span>
                    <div className="flex-grow border-t border-gray-100"></div>
                </div>

                <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); handleAction(); }}>
                    <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">{t('auth_modal.signin.email_label')}</label>
                        <input 
                            type="email" 
                            placeholder={t('auth_modal.signin.email_placeholder')}
                            className="w-full px-4 py-3 bg-gray-50 border border-transparent focus:border-gray-300 focus:bg-white focus:ring-0 rounded-xl text-sm transition-all outline-none placeholder:text-gray-400"
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 ml-1">{t('auth_modal.signin.password_label')}</label>
                        <input 
                            type="password" 
                            placeholder={t('auth_modal.signin.password_placeholder')}
                            className="w-full px-4 py-3 bg-gray-50 border border-transparent focus:border-gray-300 focus:bg-white focus:ring-0 rounded-xl text-sm transition-all outline-none placeholder:text-gray-400"
                        />
                    </div>
                    
                    <div className="flex items-start space-x-2.5 px-1 pt-1">
                        <input
                            type="checkbox"
                            id="agree-terms"
                            checked={isAgreed}
                            onChange={(e) => setIsAgreed(e.target.checked)}
                            className="mt-0.5 w-3.5 h-3.5 rounded border-gray-300 text-black focus:ring-black cursor-pointer flex-shrink-0"
                        />
                        <label htmlFor="agree-terms" className="text-[10px] text-gray-500 leading-snug select-none">
                            {t('auth_modal.signin.agree_prefix')}
                            <a href="/legal#terms" target="_blank" rel="noreferrer" className="text-gray-800 hover:text-black hover:underline mx-1 transition-colors" onClick={(e) => e.stopPropagation()}>
                                {t('auth_modal.signin.terms')}
                            </a>
                            {t('auth_modal.signin.and')}
                            <a href="/legal#privacy" target="_blank" rel="noreferrer" className="text-gray-800 hover:text-black hover:underline mx-1 transition-colors" onClick={(e) => e.stopPropagation()}>
                                {t('auth_modal.signin.privacy')}
                            </a>
                        </label>
                    </div>

                    <button 
                        type="submit" 
                        disabled={!isAgreed}
                        className={`w-full py-4 rounded-xl font-bold text-sm transition-all shadow-lg ${
                            isAgreed 
                                ? 'bg-black text-white hover:bg-gray-800 active:scale-[0.98]' 
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
                        }`}
                    >
                        {t('auth_modal.signin.submit')}
                    </button>
                </form>

                <p className="text-center">
                    <a href="#" className="text-[11px] font-medium text-gray-400 hover:text-black transition-colors">{t('auth_modal.signin.forgot')}</a>
                </p>
            </div>
          )}

          {activeTab === 'signup' && (
            <div>
                {signupStep === 0 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">{t('auth_modal.signup.step0.title')}</h2>
                            <p className="text-sm text-gray-500 leading-relaxed whitespace-pre-line">{t('auth_modal.signup.step0.description')}</p>
                        </div>
                        
                        <div className="space-y-4">
                            <button onClick={() => setSignupStep(1)} className="w-full flex items-center justify-center space-x-3 py-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors text-sm font-medium text-gray-800 group">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                                <span>{t('auth_modal.signup.step0.sso')}</span>
                            </button>
                            <button onClick={() => setSignupStep(1)} className="w-full py-4 bg-black text-white rounded-xl font-bold text-sm hover:bg-gray-800 transition-all shadow-md">
                                {t('auth_modal.signup.step0.email')}
                            </button>
                        </div>
                    </div>
                )}

                {signupStep === 1 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="text-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('auth_modal.signup.step1.title')}</h2>
                            <p className="text-xs text-gray-500 whitespace-pre-line">{t('auth_modal.signup.step1.description')}</p>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSignupStep(2); }}>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">{t('auth_modal.signup.step1.fields.name')}</label>
                                <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-transparent focus:border-gray-300 focus:bg-white focus:ring-0 rounded-xl text-sm transition-all outline-none" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">{t('auth_modal.signup.step1.fields.email')}</label>
                                <input type="email" required className="w-full px-4 py-3 bg-gray-50 border border-transparent focus:border-gray-300 focus:bg-white focus:ring-0 rounded-xl text-sm transition-all outline-none" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">{t('auth_modal.signup.step1.fields.phone')}</label>
                                <input type="tel" required className="w-full px-4 py-3 bg-gray-50 border border-transparent focus:border-gray-300 focus:bg-white focus:ring-0 rounded-xl text-sm transition-all outline-none" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">{t('auth_modal.signup.step1.fields.company')}</label>
                                <input type="text" required className="w-full px-4 py-3 bg-gray-50 border border-transparent focus:border-gray-300 focus:bg-white focus:ring-0 rounded-xl text-sm transition-all outline-none" />
                            </div>
                            
                            <div className="space-y-1 relative">
                                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-1">{t('auth_modal.signup.step1.fields.role')}</label>
                                <RoleSelect 
                                    value={selectedRole}
                                    onChange={setSelectedRole}
                                    options={rolesList}
                                    placeholder={t('auth_modal.signup.step1.fields.role_placeholder')}
                                />
                            </div>

                            <p className="text-[10px] text-gray-400 text-center leading-tight pt-2 whitespace-pre-line">{t('auth_modal.signup.step1.note')}</p>

                            <button type="submit" className="w-full bg-black text-white py-3.5 rounded-xl font-bold text-sm hover:bg-gray-800 transition-all shadow-md mt-2">
                                {t('auth_modal.signup.step1.next')}
                            </button>
                        </form>
                    </div>
                )}

                {signupStep === 2 && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                        <div className="text-center mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('auth_modal.signup.step2.title')}</h2>
                            <p className="text-xs text-gray-500 whitespace-pre-line">{t('auth_modal.signup.step2.description')}</p>
                        </div>

                        <div className="space-y-2">
                            {['updates', 'research', 'methods', 'events', 'exploring'].map(opt => (
                                <button
                                    key={opt}
                                    onClick={() => handleInterestToggle(opt)}
                                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all flex items-center justify-between ${
                                        selectedInterests.includes(opt) 
                                            ? 'border-black bg-gray-50 text-black shadow-sm' 
                                            : 'border-gray-100 bg-white text-gray-600 hover:bg-gray-50 hover:border-gray-200'
                                    }`}
                                >
                                    <span>{t(`auth_modal.signup.step2.options.${opt}`)}</span>
                                    {selectedInterests.includes(opt) && <div className="w-2 h-2 rounded-full bg-black"></div>}
                                </button>
                            ))}
                        </div>

                        <div className="pt-4 flex flex-col space-y-3">
                            <button onClick={() => setSignupStep(3)} className="w-full bg-black text-white py-3.5 rounded-xl font-bold text-sm hover:bg-gray-800 transition-all shadow-md">
                                {t('auth_modal.signup.step2.continue')}
                            </button>
                            <button onClick={() => setSignupStep(3)} className="text-xs font-bold text-gray-400 hover:text-gray-600 uppercase tracking-wider">
                                {t('auth_modal.signup.step2.skip')}
                            </button>
                        </div>
                    </div>
                )}

                {signupStep === 3 && (
                    <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300 py-4">
                        <div className="text-center">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('auth_modal.signup.step3.title')}</h2>
                            <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto whitespace-pre-line">{t('auth_modal.signup.step3.description')}</p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-start space-x-4 cursor-pointer hover:border-gray-200 transition-colors" onClick={() => setSubscribe(!subscribe)}>
                            <div className={`w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 transition-colors mt-0.5 ${subscribe ? 'bg-black border-black text-white' : 'border-gray-300 bg-white'}`}>
                                {subscribe && <CheckIcon className="w-3 h-3" />}
                            </div>
                            <span className="text-sm text-gray-700 font-medium leading-snug select-none whitespace-pre-line">{t('auth_modal.signup.step3.checkbox')}</span>
                        </div>

                        <button onClick={() => setSignupStep(4)} className="w-full bg-black text-white py-4 rounded-xl font-bold text-sm hover:bg-gray-800 transition-all shadow-lg">
                            {t('auth_modal.signup.step3.create')}
                        </button>
                    </div>
                )}

                {signupStep === 4 && (
                    <div className="space-y-8 animate-in fade-in zoom-in-95 duration-500 py-8 text-center">
                        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-600 mb-6">
                            <CheckIcon className="w-10 h-10" />
                        </div>
                        
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('auth_modal.signup.step4.title')}</h2>
                            <p className="text-base text-gray-600 leading-relaxed whitespace-pre-line max-w-xs mx-auto">
                                {t('auth_modal.signup.step4.description')}
                            </p>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <p className="text-xs text-gray-500 leading-relaxed whitespace-pre-line">
                                {t('auth_modal.signup.step4.note')}
                            </p>
                        </div>

                        <div className="space-y-3 pt-2">
                            <button 
                                onClick={() => { handleAction(); onClose(); onNavigate && onNavigate('home'); }} 
                                className="w-full bg-black text-white py-3.5 rounded-xl font-bold text-sm hover:bg-gray-800 transition-all shadow-md"
                            >
                                {t('auth_modal.signup.step4.home')}
                            </button>
                            <button 
                                onClick={() => { handleAction(); onClose(); }} 
                                className="text-xs font-bold text-gray-400 hover:text-gray-600 uppercase tracking-wider block w-full py-2"
                            >
                                {t('auth_modal.signup.step4.browse')}
                            </button>
                        </div>
                    </div>
                )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
