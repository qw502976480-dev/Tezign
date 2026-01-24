
import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ChatWidget from './components/features/ChatWidget';
import MetaController from './components/utils/MetaController';
import TransitionLoader from './components/ui/TransitionLoader';
import RouteRenderer from './components/router/RouteRenderer';
import { LanguageProvider } from './context/LanguageContext';
import { AuthProvider } from './context/AuthContext';
import { useRouter } from './hooks/useRouter';

function App() {
  const { 
    currentView, 
    currentId, 
    isPreloading, 
    navigate,
    industriesFilter,
    updatesFilter,
    insightsFilter
  } = useRouter();

  const showFooter = currentView !== 'myCollection';

  return (
    <LanguageProvider>
      <AuthProvider>
        <MetaController view={currentView} id={currentId} />
        <TransitionLoader isVisible={isPreloading} />
        
        {/* Layout Shell */}
        <div className={`min-h-screen bg-white ${isPreloading ? 'h-screen overflow-hidden' : ''}`}>
          <Navbar onNavigate={navigate} />
          
          <main>
            <RouteRenderer 
              view={currentView}
              id={currentId}
              onNavigate={navigate}
              industriesFilter={industriesFilter}
              updatesFilter={updatesFilter}
              insightsFilter={insightsFilter}
            />
          </main>
          
          {showFooter && <Footer onNavigate={navigate} />}
          {currentView !== 'contact' && <ChatWidget onNavigate={navigate} />}
        </div>
      </AuthProvider>
    </LanguageProvider>
  );
}

export default App;
