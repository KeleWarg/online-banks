import React, { lazy, Suspense, useState, useRef } from "react";
import { HeroBanner } from "./screens/hero-banner/HeroBanner";
import { ChatOverlay } from './components/ChatOverlay';
import { StickyBottomBar } from './components/StickyBottomBar';
import { TopEditorPicksView } from './screens/TopEditorPicksView/TopEditorPicksView';
import { DiveIntoDataView } from './screens/DiveIntoDataView/DiveIntoDataView';
import type { ProviderRecommendation, UserPreferences } from './components/ChatOverlay';
import {
  INSURANCE_PLANS,
  COST_DATA,
  PLAN_DETAILS_DATA,
  USER_OPINION_DATA,
  CLAIMS_DATA
} from './data/insurance-providers';

// Lazy load heavy components for better performance
const BestPetsCarousel = lazy(() => import("./screens/BestPetsCarousel/BestPetsCarousel").then(module => ({ default: module.BestPetsCarousel })));
const ElementPc = lazy(() => import("./screens/ElementsPC/ElementPc").then(module => ({ default: module.ElementPc })));

export const App = (): JSX.Element => {
  const [recommendations, setRecommendations] = useState<ProviderRecommendation[] | null>(null);
  const [userPrefs, setUserPrefs] = useState<UserPreferences | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showTopPicks, setShowTopPicks] = useState(false);
  const [showDiveIntoData, setShowDiveIntoData] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const quickDiveRef = useRef<HTMLDivElement>(null);

  const handleRecommendations = (recs: ProviderRecommendation[], preferences: UserPreferences) => {
    setRecommendations(recs);
    setUserPrefs(preferences);
  };

  const handleOpenChat = () => {
    setIsChatOpen(true);
  };

  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  const handleShowTopPicks = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Small delay for scroll, then show top picks
    setTimeout(() => {
      setShowTopPicks(true);
      setShowDiveIntoData(false);
      setIsTransitioning(false);
    }, 300);
  };

  const handleShowDiveIntoData = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Small delay for scroll, then show dive into data
    setTimeout(() => {
      setShowDiveIntoData(true);
      setShowTopPicks(false);
      setIsTransitioning(false);
    }, 300);
  };

  const handleBackToFullArticle = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Small delay for scroll, then hide all special views
    setTimeout(() => {
      setShowTopPicks(false);
      setShowDiveIntoData(false);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-white">
      <div id="top" />
      <HeroBanner 
        onOpenChat={handleOpenChat} 
        quickDiveRef={quickDiveRef}
        onShowTopPicks={handleShowTopPicks}
        onShowDiveIntoData={handleShowDiveIntoData}
        showTopPicks={showTopPicks}
        showDiveIntoData={showDiveIntoData}
      />
      
      {showTopPicks ? (
        <TopEditorPicksView onBack={handleBackToFullArticle} />
      ) : showDiveIntoData ? (
        <DiveIntoDataView onBack={handleBackToFullArticle} />
      ) : (
        <>
          <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading carousel...</div>}>
            <BestPetsCarousel />
          </Suspense>
          
          <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading content...</div>}>
            <ElementPc />
          </Suspense>
        </>
      )}
      
      {!showTopPicks && !showDiveIntoData && (
        <StickyBottomBar 
          onOpenChat={handleOpenChat}
          onShowTopPicks={handleShowTopPicks}
          onShowDiveIntoData={handleShowDiveIntoData}
          quickDiveSectionRef={quickDiveRef}
        />
      )}
      
      <ChatOverlay
        plans={INSURANCE_PLANS}
        costData={COST_DATA}
        planDetails={PLAN_DETAILS_DATA}
        userOpinions={USER_OPINION_DATA}
        claimsData={CLAIMS_DATA}
        onRecommendations={handleRecommendations}
        isOpen={isChatOpen}
        onClose={handleCloseChat}
      />
    </div>
  );
};