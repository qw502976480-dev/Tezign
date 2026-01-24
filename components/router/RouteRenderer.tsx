
import React, { Suspense } from 'react';
import { ViewType } from '../../types';
import { AnimatePresence } from 'framer-motion';
import PageTransition from '../ui/PageTransition';

// Page Components (Lazy Loaded)
const HomePage = React.lazy(() => import('../pages/HomePage'));
const ProductDetail = React.lazy(() => import('../pages/ProductDetail'));
const CompanyPage = React.lazy(() => import('../pages/CompanyPage'));
const IndustryDetail = React.lazy(() => import('../pages/IndustryDetail'));
const IndustriesPage = React.lazy(() => import('../pages/IndustriesPage'));
const UpdatesPage = React.lazy(() => import('../pages/UpdatesPage'));
const UpdateDetail = React.lazy(() => import('../pages/UpdateDetail'));
const ResourcesPage = React.lazy(() => import('../pages/ResourcesPage'));
const IndustryInsightsPage = React.lazy(() => import('../pages/IndustryInsightsPage')); 
const MyCollectionPage = React.lazy(() => import('../pages/MyCollectionPage'));
const LegalPage = React.lazy(() => import('../pages/LegalPage'));
const LegalDetailPage = React.lazy(() => import('../pages/LegalDetailPage'));
const ProductsPage = React.lazy(() => import('../pages/ProductsPage'));
const CareersPage = React.lazy(() => import('../pages/CareersPage'));
const ContactPage = React.lazy(() => import('../pages/ContactPage'));
const TechnologyPage = React.lazy(() => import('../pages/TechnologyPage'));

// Nav Article Pages
const ArchitecturePage = React.lazy(() => import('../pages/articles/ArchitecturePage'));
const DamPage = React.lazy(() => import('../pages/articles/DamPage'));
const OverviewPage = React.lazy(() => import('../pages/articles/OverviewPage'));
const AiFullStackPage = React.lazy(() => import('../pages/articles/AiFullStackPage'));
const CreativeSkuPage = React.lazy(() => import('../pages/articles/CreativeSkuPage'));
const AtypicaArticlePage = React.lazy(() => import('../pages/articles/AtypicaArticlePage'));
const MuseArticlePage = React.lazy(() => import('../pages/articles/MuseArticlePage'));
const ClipoArticlePage = React.lazy(() => import('../pages/articles/ClipoArticlePage'));

// Simple fallback loader (Empty because TransitionLoader covers it)
const PageLoader = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-white w-full" />
);

interface RouteRendererProps {
  view: ViewType;
  id?: string;
  onNavigate: (page: any, id?: string) => void;
  // Page-specific filter props passed from router state
  industriesFilter: { type: 'industry' | 'scenario', value: string } | null;
  updatesFilter: { type: 'category', value: string } | null;
  insightsFilter: string | undefined;
}

const RouteRenderer: React.FC<RouteRendererProps> = ({ 
  view, 
  id, 
  onNavigate, 
  industriesFilter,
  updatesFilter,
  insightsFilter
}) => {
  
  // Determine if we need to scroll to a specific anchor (if ID starts with scroll:)
  const scrollAnchor = id && (id.startsWith('scroll:') || id.startsWith('filter:')) ? id : undefined;
  
  // Unique key for AnimatePresence to detect route changes
  const routeKey = `${view}${id ? '-' + id : ''}`;

  const content = (() => {
    switch (view) {
      case 'product':
        return <ProductDetail productId={id || ''} onBack={() => onNavigate('products')} onNavigate={onNavigate} />;
      case 'products':
        return <ProductsPage onNavigate={onNavigate} />;
      case 'dam':
        return <DamPage onBack={() => onNavigate('products')} onNavigate={onNavigate} />;
      case 'overview':
        return <OverviewPage onBack={() => onNavigate('products')} onNavigate={onNavigate} />;
      case 'architecture':
        return <ArchitecturePage onBack={() => onNavigate('technology')} onNavigate={onNavigate} />;
      case 'aiFullStack':
        return <AiFullStackPage onBack={() => onNavigate('resources')} onNavigate={onNavigate} />;
      case 'creativeSku':
        return <CreativeSkuPage onBack={() => onNavigate('resources')} onNavigate={onNavigate} />;
      case 'industryInsights':
        return <IndustryInsightsPage onNavigate={onNavigate} initialFilter={insightsFilter} />;
      case 'atypicaStory':
        return <AtypicaArticlePage onBack={() => onNavigate('company')} onNavigate={onNavigate} />;
      case 'museStory':
        return <MuseArticlePage onBack={() => onNavigate('company')} onNavigate={onNavigate} />;
      case 'clipoStory':
        return <ClipoArticlePage onBack={() => onNavigate('company')} onNavigate={onNavigate} />;
      case 'company':
        return <CompanyPage onNavigate={onNavigate} />;
      case 'industryDetail':
        return <IndustryDetail industryId={id || ''} onNavigate={onNavigate} />;
      case 'industries':
        return <IndustriesPage onNavigate={onNavigate} initialFilter={industriesFilter} />;
      case 'updates':
        return <UpdatesPage onNavigate={onNavigate} initialFilter={updatesFilter} />;
      case 'updateDetail': 
        return <UpdateDetail updateId={id || ''} onNavigate={onNavigate} />;
      case 'resources':
        return <ResourcesPage onNavigate={onNavigate} />;
      case 'myCollection':
        return < MyCollectionPage onNavigate={onNavigate} />;
      case 'legal':
        return <LegalPage onNavigate={onNavigate} />;
      case 'legalDetail':
        return <LegalDetailPage docId={id || ''} onNavigate={(page) => onNavigate(page as any)} />;
      case 'careers':
        return <CareersPage onNavigate={onNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={onNavigate} />;
      case 'technology':
      case 'techData':
      case 'techModel':
      case 'techSkill':
        return <TechnologyPage onNavigate={onNavigate} />;
      case 'home':
      default:
        return <HomePage onNavigate={onNavigate} />;
    }
  })();

  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={routeKey} scrollAnchor={scrollAnchor}>
          {content}
        </PageTransition>
      </AnimatePresence>
    </Suspense>
  );
};

export default RouteRenderer;
