
import React, { useState } from 'react';
import { ICONS } from '../../constants';
import { useLanguage } from '../../context/LanguageContext';
import { useAuth } from '../../context/AuthContext';

interface MyCollectionPageProps {
  onNavigate: (page: 'home' | 'product' | 'company' | 'industryDetail' | 'industries' | 'updates' | 'resources' | 'myCollection', id?: string) => void;
}

type SettingsSection = 'profile' | 'account' | 'interests' | 'notifications';

const MyCollectionPage: React.FC<MyCollectionPageProps> = ({ onNavigate }) => {
    const { t } = useLanguage();
    const { setIsAuthenticated } = useAuth();
    const [activeSection, setActiveSection] = useState<SettingsSection>('profile');

    const [userData, setUserData] = useState({
        name: 'Tezign User',
        title: 'Administrator',
        company: 'Tezign',
        location: 'Shanghai, China',
        email: 'user@tezign.com',
        interests: ['Product Updates', 'Research & Insights']
    });

    const [toggles, setToggles] = useState({
        newsletter: true,
        security: true
    });

    const sections: { id: SettingsSection; label: string; icon?: React.ReactNode }[] = [
        { id: 'profile', label: t('settings_page.sidebar.profile') },
        { id: 'account', label: t('settings_page.sidebar.account') },
        { id: 'interests', label: t('settings_page.sidebar.interests') },
        { id: 'notifications', label: t('settings_page.sidebar.notifications') }
    ];

    const localizedTags = t('settings_page.interests.tags') || {};
    const interestTags = Object.values(localizedTags).length > 0 
        ? Object.values(localizedTags) as string[]
        : ["Product Updates", "Research & Insights", "Methodologies", "Events & Webinars", "Market Analysis", "Enterprise AI", "Global Marketing"];

    const toggleInterest = (tag: string) => {
        setUserData(prev => ({
            ...prev,
            interests: prev.interests.includes(tag) 
                ? prev.interests.filter(t => t !== tag)
                : [...prev.interests, tag]
        }));
    };

    return (
      <div className="min-h-screen bg-gray-50/50 pt-20 pb-12 flex justify-center">
        <div className="max-w-5xl w-full mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden sticky top-24">
                <div className="p-2 space-y-1">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => setActiveSection(section.id)}
                            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                                activeSection === section.id 
                                    ? 'bg-black text-white' 
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                            }`}
                        >
                            {section.label}
                        </button>
                    ))}
                </div>
                <div className="border-t border-gray-100 mt-2 p-2">
                    <button 
                        onClick={() => { setIsAuthenticated(false); onNavigate('home'); }} 
                        className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors"
                    >
                        {t('nav.auth.signout')}
                    </button>
                </div>
            </div>

            <div className="lg:col-span-9 bg-white rounded-3xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.02)] p-8 md:p-10 min-h-[600px]">
                
                {activeSection === 'profile' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t('settings_page.profile.title')}</h2>
                            <p className="text-sm text-gray-500">{t('settings_page.profile.subtitle')}</p>
                        </div>

                        <div className="flex items-center gap-6 pb-8 border-b border-gray-100">
                            <div className="w-20 h-20 rounded-full bg-gray-900 flex items-center justify-center text-white text-2xl font-bold">
                                T
                            </div>
                            <div>
                                <button className="px-4 py-2 border border-gray-200 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white hover:border-black transition-all">
                                    {t('settings_page.profile.change_avatar')}
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">{t('settings_page.profile.name')}</label>
                                <input 
                                    type="text" 
                                    value={userData.name}
                                    onChange={(e) => setUserData({...userData, name: e.target.value})}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-1 focus:ring-black focus:border-black outline-none"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">{t('settings_page.profile.title_label')}</label>
                                <input 
                                    type="text" 
                                    value={userData.title}
                                    onChange={(e) => setUserData({...userData, title: e.target.value})}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-1 focus:ring-black focus:border-black outline-none"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">{t('settings_page.profile.company')}</label>
                                <input 
                                    type="text" 
                                    value={userData.company}
                                    onChange={(e) => setUserData({...userData, company: e.target.value})}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-1 focus:ring-black focus:border-black outline-none"
                                />
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">{t('settings_page.profile.location')}</label>
                                <input 
                                    type="text" 
                                    value={userData.location}
                                    onChange={(e) => setUserData({...userData, location: e.target.value})}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-1 focus:ring-black focus:border-black outline-none"
                                />
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="px-8 py-3 bg-black text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-md">
                                {t('settings_page.profile.save')}
                            </button>
                        </div>
                    </div>
                )}

                {activeSection === 'account' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t('settings_page.account.title')}</h2>
                            <p className="text-sm text-gray-500">{t('settings_page.account.subtitle')}</p>
                        </div>

                        <div className="space-y-6 max-w-md">
                            <div className="space-y-1.5">
                                <label className="text-xs font-bold text-gray-900 uppercase tracking-wider">{t('settings_page.account.email')}</label>
                                <input 
                                    type="email" 
                                    value={userData.email}
                                    disabled
                                    className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-xl text-sm text-gray-500 cursor-not-allowed"
                                />
                            </div>
                            
                            <div className="pt-2 border-t border-gray-100">
                                <button className="text-sm font-medium text-black hover:underline py-2">
                                    {t('settings_page.account.change_password')}
                                </button>
                            </div>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <h3 className="text-sm font-bold text-red-600 mb-2">{t('settings_page.account.delete_account')}</h3>
                            <p className="text-xs text-gray-500 mb-4">{t('settings_page.account.delete_warning')}</p>
                            <button className="px-6 py-2.5 border border-red-200 text-red-600 rounded-lg text-xs font-bold uppercase tracking-wider hover:bg-red-50 transition-colors">
                                {t('settings_page.account.delete_account')}
                            </button>
                        </div>
                    </div>
                )}

                {activeSection === 'interests' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t('settings_page.interests.title')}</h2>
                            <p className="text-sm text-gray-500">{t('settings_page.interests.subtitle')}</p>
                        </div>

                        <div>
                            <label className="text-xs font-bold text-gray-900 uppercase tracking-wider block mb-4">{t('settings_page.interests.tags_label')}</label>
                            <div className="flex flex-wrap gap-3">
                                {interestTags.map(tag => (
                                    <button
                                        key={tag}
                                        onClick={() => toggleInterest(tag)}
                                        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                                            userData.interests.includes(tag)
                                                ? 'bg-black text-white border-black shadow-md'
                                                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
                                        }`}
                                    >
                                        {tag}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeSection === 'notifications' && (
                    <div className="space-y-8 animate-in fade-in duration-300">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t('settings_page.notifications.title')}</h2>
                            <p className="text-sm text-gray-500">{t('settings_page.notifications.subtitle')}</p>
                        </div>

                        <div className="space-y-6 divide-y divide-gray-100">
                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900">{t('settings_page.notifications.email_updates')}</h3>
                                    <p className="text-xs text-gray-500 mt-1">{t('settings_page.notifications.email_updates_desc')}</p>
                                </div>
                                <button 
                                    onClick={() => setToggles({...toggles, newsletter: !toggles.newsletter})}
                                    className={`w-12 h-7 rounded-full p-1 transition-colors duration-300 ${toggles.newsletter ? 'bg-black' : 'bg-gray-200'}`}
                                >
                                    <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${toggles.newsletter ? 'translate-x-5' : 'translate-x-0'}`} />
                                </button>
                            </div>

                            <div className="flex items-center justify-between pt-6">
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900">{t('settings_page.notifications.security_alerts')}</h3>
                                    <p className="text-xs text-gray-500 mt-1">{t('settings_page.notifications.security_alerts_desc')}</p>
                                </div>
                                <button 
                                    onClick={() => setToggles({...toggles, security: !toggles.security})}
                                    className={`w-12 h-7 rounded-full p-1 transition-colors duration-300 ${toggles.security ? 'bg-black' : 'bg-gray-200'}`}
                                >
                                    <div className={`w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${toggles.security ? 'translate-x-5' : 'translate-x-0'}`} />
                                </button>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
      </div>
    );
};

export default MyCollectionPage;
