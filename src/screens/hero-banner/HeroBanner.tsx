import React from "react";
import { ContentSection } from "./sections/ContentSection/ContentSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { CustomNavigationSection } from "./sections/CustomNavigationSection/CustomNavigationSection";

interface HeroBannerProps {
  onOpenChat?: () => void;
  quickDiveRef?: React.RefObject<HTMLDivElement>;
  onShowTopPicks?: () => void;
  onShowDiveIntoData?: () => void;
  showTopPicks?: boolean;
  showDiveIntoData?: boolean;
}

export const HeroBanner = ({ onOpenChat, quickDiveRef, onShowTopPicks, onShowDiveIntoData, showTopPicks, showDiveIntoData }: HeroBannerProps): JSX.Element => {
  return (
    <div className={`bg-white overflow-hidden w-full min-w-[378px] flex flex-col ${!showTopPicks && !showDiveIntoData ? 'min-h-[790px]' : 'min-h-0'}`}>
      <div className="grouped-header">
        <HeaderSection />
        <CustomNavigationSection />
      </div>
      <ContentSection 
        onOpenChat={onOpenChat} 
        quickDiveRef={quickDiveRef}
        onShowTopPicks={onShowTopPicks}
        onShowDiveIntoData={onShowDiveIntoData}
        showTopPicks={showTopPicks}
        showDiveIntoData={showDiveIntoData}
      />
    </div>
  );
};
