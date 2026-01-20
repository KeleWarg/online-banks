import React from "react";

export const CustomNavigationSection = (): JSX.Element => {
  const navigationItems = [
    "All Banking",
    "Checking",
    "Savings",
    "CDs",
    "Money Market",
    "Credit Cards",
    "Loans",
    "Investing",
  ];

  const getFontSize = (itemName: string) => {
    switch (itemName) {
      case "All Banking": return "text-[13.89px]";
      case "Checking": return "text-[13.67px]";
      case "Savings": return "text-[13.67px]";
      default: return "text-[13.56px]";
    }
  };

  return (
    <div 
      className="sub-header-nav fixed top-14 left-0 right-0 w-full z-[2] py-px bg-white border-t border-b border-[#EDEDED] flex items-center overflow-hidden"
    >
      {/* Full width container with 16px padding */}
      <div className="w-full flex items-center justify-between overflow-hidden px-4">
        {/* Fixed Insurance Title */}
        <div className="flex-shrink-0 flex items-center h-full min-w-0">
          <div className="text-[#1E2125] text-lg sm:text-xl md:text-2xl font-inter font-semibold leading-[29px] whitespace-nowrap">
            Banking
          </div>
        </div>
        
        {/* Right-aligned Navigation Links */}
        <div 
          className="flex-shrink-0 overflow-x-auto scrollbar-hide min-w-0"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 min-w-max">
          {navigationItems.map((item, index) => (
            <div key={index} className="flex-shrink-0">
              <div className="py-[18px] px-2 bg-white flex items-center cursor-pointer hover:bg-gray-50 transition-colors">
                <div className={`text-black ${getFontSize(item)} font-graphik font-normal capitalize leading-4 whitespace-nowrap`}>
                  {item}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};