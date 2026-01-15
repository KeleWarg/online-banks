import React from "react";
import { Button } from "../../../../components/ui/button";
import { ForbesLogo, HamburgerIcon, MailIcon, SearchIcon } from "../../../../assets/icons";

export const HeaderSection = (): JSX.Element => {
  return (
    <header 
      className="header-div flex z-[3] flex-col w-full h-14 items-start fixed top-0 left-0 right-0 bg-neutral-900 py-2 overflow-hidden"
    >
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        {/* Full width container with 16px padding */}
        <div className="w-full h-full flex items-center justify-between overflow-hidden px-4">
          {/* Left section - Menu, Forbes logo (mobile), and Subscribe to Newsletters (desktop) */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-shrink-0 min-w-0">
            <HamburgerIcon />
            
            {/* Forbes logo - visible on mobile/tablet (744px and below) */}
            <div className="flex items-center justify-center md:hidden flex-shrink-0">
              <ForbesLogo />
            </div>
            
            {/* Subscribe to Newsletters - hidden on mobile/tablet (744px and below) */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0">
              <span className="text-white text-sm font-normal font-['Work_Sans'] whitespace-nowrap">
                Subscribe To Newsletters
              </span>
              <MailIcon />
            </div>
          </div>

          {/* Center section - Forbes logo (desktop only) */}
          <div className="hidden md:flex items-center justify-center flex-1 min-w-0">
            <ForbesLogo />
          </div>

          {/* Right section - Subscribe button and Search */}
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-shrink-0 min-w-0">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-2 sm:px-3 md:px-6 py-1 sm:py-2 text-xs sm:text-sm font-semibold font-['Work_Sans'] whitespace-nowrap">
              Subscribe
            </Button>
            <SearchIcon />
          </div>
        </div>
      </div>
    </header>
  );
};