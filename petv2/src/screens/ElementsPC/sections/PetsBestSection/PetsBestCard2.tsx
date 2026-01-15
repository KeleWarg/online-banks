import { ArrowRightIcon, ExternalLinkIcon, TrophyIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const coverageDetails = [
  {
    label: "Checking options",
    value: "Fee‑light structure",
  },
  {
    label: "Savings APY",
    value: "Competitive rate",
  },
  {
    label: "ATM access",
    value: "Large network",
  },
];

const tabItems = [
  { id: "expert-take", label: "Our Expert Take" },
  { id: "pros-cons", label: "Pros & Cons" },
  {
    id: "consumer-sentiment",
    label: "Consumer Sentiment Index",
  },
  {
    id: "customer-satisfaction",
    label: "Customer Satisfaction Survey",
  },
  { id: "plan-details", label: "Plan Details" },
];

const prosConsData = [
  {
    pro: "Low‑fee structure for everyday banking",
    con: "Limited in‑person branch access"
  },
  {
    pro: "Strong digital account experience",
    con: "Cash deposits can be limited"
  },
  {
    pro: "Simple account terms",
    con: "ATM reimbursements vary"
  },
  {
    pro: "Trusted brand",
    con: null
  }
];

export const PetsBestCard2 = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("expert-take");
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="grid grid-cols-12 gap-5">
      <Card className="col-span-12 p-6 bg-white rounded-3xl border-4 border-[#F3C060] relative" style={{ overflow: 'visible' }}>
        {/* Most Popular Badge */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 md:-left-6 md:transform-none md:translate-x-0 -top-7 z-[1]"
          style={{
            padding: '2px 12px', 
            background: 'var(--Colors-Tertiary-400, #F3C060)', 
            overflow: 'hidden', 
            borderRadius: 16, 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 8, 
            display: 'inline-flex',
            maxHeight: 48
          }}
        >
          <div style={{width: 24, height: 24, position: 'relative', overflow: 'hidden'}}>
            <img 
              src="/Popular.svg" 
              alt="Popular" 
              style={{
                width: 20, 
                height: 20, 
                left: 2, 
                top: 2, 
                position: 'absolute'
              }} 
            />
          </div>
          <div style={{
            justifyContent: 'center', 
            display: 'flex', 
            flexDirection: 'column', 
            color: 'var(--Colors-Quinary-800, #171614)', 
            fontSize: 15, 
            fontFamily: 'Work Sans', 
            fontWeight: '600', 
            textTransform: 'uppercase', 
            lineHeight: 20, 
            wordWrap: 'break-word'
          }}>
            MOST POPULAR
          </div>
        </div>
        
        <CardContent className="p-0 space-y-6">
          <header className="flex items-center gap-2">
            <h2 className="[font-family:'Work_Sans',Helvetica] font-bold text-black text-2xl leading-8">
              <span className="underline">Discover® Bank</span>
            </h2>
            <img src="/-duocolor-arrow-up-right.svg" alt="External link" className="w-6 h-6" />
          </header>

          <div className="grid grid-cols-12 gap-3 sm:gap-5 lg:gap-8 w-full max-w-full overflow-hidden">
            <div className="col-span-12 lg:col-span-5 relative min-w-0">
              <div className="w-full h-[58px] bg-[#f8f8fa] rounded-[16px_16px_0px_0px] overflow-hidden flex items-center justify-center">
                <img 
                  src="/avatar-placeholder.svg" 
                  alt="Discover Bank Logo" 
                  className="w-[125px] h-[58px] object-contain"
                />
              </div>
              <img
                className="w-full h-[207px] object-cover rounded-[0px_0px_16px_16px]"
                alt="Discover Bank"
                src="/avatar-placeholder.svg"
              />
            </div>

            <div className="col-span-12 lg:col-span-7 flex flex-col gap-2 min-w-0">
              <div className="flex flex-col gap-3.5">
                <div className="flex items-center gap-3.5">
                  <img
                    className="w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
                    alt="Frame"
                    src="/frame-2147237132.svg"
                  />
                  <h3 className="text-[20px] leading-[28px] sm:text-[28px] sm:leading-[36px]" style={{
                    color: 'black',
                    fontFamily: 'Schnyder S',
                    fontWeight: '700',
                    wordWrap: 'break-word'
                  }}>
                    Best for no fees
                  </h3>
                </div>
                <Separator className="h-px" />
              </div>

              <div className="flex flex-col gap-2">
                {coverageDetails.map((detail, index) => (
                  <div key={index}>
                    <div className="flex items-start justify-between gap-2 py-2">
                      <div className="flex-1">
                        <p className="text-black text-sm leading-[22px] font-normal" style={{ fontFamily: 'Work Sans' }}>
                          {detail.label}
                        </p>
                      </div>
                      <div className="text-right min-w-0">
                        <span className="text-black text-sm leading-[22px] font-bold break-words" style={{ fontFamily: 'Work Sans' }}>
                          {detail.value}
                        </span>
                      </div>
                    </div>
                    {index < coverageDetails.length - 1 && (
                      <Separator className="h-px" />
                    )}
                  </div>
                ))}
              </div>

              <div className="flex flex-col h-[69px] gap-1.5">
                <Button className="h-12 bg-[#007ac8] hover:bg-[#006bb3] text-white shadow-[0px_4px_12px_#00000033] rounded">
                  <span className="[font-family:'Work_Sans',Helvetica] font-bold text-base">
                    See Plans
                  </span>
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Button>
                <p className="text-center [font-family:'Work_Sans',Helvetica] font-normal text-[#333333] text-xs leading-[15px]">
                  Via Forbes Advisor's Partner
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-7">
            <div id="product-card-navigation" className="flex overflow-x-auto items-center gap-5 w-full scrollbar-hide" style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}>
              {tabItems.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`navigation-button h-14 px-4 py-2 transition-all duration-300 ease-in-out flex justify-center items-center bg-transparent hover:bg-transparent ${
                    activeTab === tab.id
                      ? "border-b-[3px] border-black"
                      : "border-b border-[#CED4DB]"
                  } ${
                    index === 0 && activeTab === tab.id ? "flex-shrink-0" : 
                    index === 0 ? "flex-shrink-0" :
                    "flex-1"
                  }`}
                  style={{
                    backgroundColor: 'transparent'
                  }}
                >
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="flex justify-start items-center">
                      <div 
                        className="text-center flex flex-col justify-center whitespace-nowrap"
                        style={{
                          color: activeTab === tab.id ? 'black' : '#1E2125',
                          fontSize: '14px',
                          fontFamily: 'Work Sans',
                          fontWeight: activeTab === tab.id ? '600' : '400',
                          lineHeight: activeTab === tab.id ? '15px' : '24px',
                          wordWrap: 'break-word'
                        }}
                      >
                        {tab.label}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {activeTab === "expert-take" && (
              <>
                <h4 className="[font-family:'Work_Sans',Helvetica] font-semibold text-black text-base leading-[26px] sm:text-xl sm:leading-8 tracking-[-0.33px]">
                  Our Expert Take
                </h4>

                <div className="flex flex-col gap-[18px]">
                  <p className="text-base leading-[26px] sm:text-lg sm:leading-[29.12px]" style={{ 
                    color: '#333333', 
                    fontFamily: 'Georgia', 
                    fontWeight: '400', 
                    wordWrap: 'break-word',
                    margin: 0,
                    display: '-webkit-box',
                    WebkitLineClamp: isExpanded ? 'none' : 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: isExpanded ? 'visible' : 'hidden'
                  }}>
                    Discover® Bank stands out for its low‑fee approach and a clean digital banking experience that keeps everyday money management simple.
                  </p>
                  
                  {isExpanded && (
                    <p className="text-base leading-[26px] sm:text-lg sm:leading-[29.12px]" style={{ 
                      color: '#333333', 
                      fontFamily: 'Georgia', 
                      fontWeight: '400', 
                      wordWrap: 'break-word',
                      margin: 0
                    }}>
                      <span>More: </span>
                      <span style={{ 
                        color: '#007AC8', 
                        fontSize: '18px', 
                        fontFamily: 'Georgia', 
                        fontWeight: '700', 
                        textDecoration: 'underline', 
                        lineHeight: '29.12px', 
                        wordWrap: 'break-word' 
                      }}>
                        Discover Bank Review
                      </span>
                    </p>
                  )}
                  
                  <div style={{width: '100%', height: 40, justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', position: 'relative'}}>
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      style={{width: 144, height: 40, paddingLeft: 16, paddingRight: 16, paddingTop: 12, paddingBottom: 12, background: 'white', overflow: 'hidden', borderRadius: 4, outline: '1px #7A8EC7 solid', outlineOffset: '-1px', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex', cursor: 'pointer', border: 'none', zIndex: 1}}
                    >
                      <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#007AC8', fontSize: 14, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: 22, wordWrap: 'break-word'}}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                      </div>
                    </button>
                    <div style={{position: 'absolute', left: 144, right: 0, top: '50%', height: '1px', backgroundColor: '#CED4DB', transform: 'translateY(-50%)'}}></div>
                  </div>
                </div>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
