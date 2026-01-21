import React, { useState, lazy, Suspense } from "react";
import { Badge } from "../../../../components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

// Lazy load methodology sections
const RatingsSection = lazy(() => import("../../../Fold/sections/RatingsSection/RatingsSection").then(module => ({ default: module.RatingsSection })));
const MethodologySection = lazy(() => import("../../../Fold/sections/MethodologySection/MethodologySection").then(module => ({ default: module.MethodologySection })));
const TeamSection = lazy(() => import("../../../Fold/sections/TeamSection/TeamSection").then(module => ({ default: module.TeamSection })));

// Methodology tab configuration
interface NavigationTab {
  id: string;
  label: string;
  width: string;
}

interface StatisticData {
  number: string;
  title: string;
  description: string;
}

const NAVIGATION_TABS: NavigationTab[] = [
  { id: "overview", label: "Overview", width: "w-[132px]" },
  { id: "methodology", label: "Our Methodology", width: "w-[192px]" },
  { id: "research", label: "Data Research", width: "w-[176px]" },
  { id: "team", label: "Our Team", width: "w-[142px]" },
];

const STATISTICS_DATA: StatisticData[] = [
  {
    number: "85+",
    title: "Credit Cards Analyzed",
    description: "Top credit cards from major issuers reviewed for rewards and benefits.",
  },
  {
    number: "15",
    title: "Data Points Scored",
    description: "Rewards rates, annual fees, welcome bonuses, and card perks.",
  },
  {
    number: "8",
    title: "Scoring Categories",
    description: "Travel rewards, cash back, dining, no annual fee, and more.",
  },
  {
    number: "Jan 9, 2026",
    title: "Offers Verified",
    description: "Rewards rates and bonuses accurate as of this date.",
  },
];

// Tab Button Component
const TabButton: React.FC<{
  tab: NavigationTab;
  isActive: boolean;
  onClick: () => void;
}> = ({ tab, isActive, onClick }) => {
  if (isActive) {
    return (
      <div
        onClick={onClick}
        className={`cursor-pointer h-14 bg-black shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)] rounded-[40px] justify-center items-center gap-2 flex flex-shrink-0 transition-all duration-300 ease-in-out hover:shadow-[0px_6px_12px_-1px_rgba(0,0,0,0.15)] hover:scale-[1.02] ${tab.width}`}
      >
        <div className="px-4 py-2">
          <div className="text-center text-white text-base font-work-sans font-semibold leading-[15px] break-words transition-colors duration-200">
            {tab.label}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className={`cursor-pointer h-14 bg-[#FAFAFB] shadow-[0px_0px_0.5px_rgba(0,0,0,0.11)_inset] rounded-[28px] flex-col justify-start items-start gap-2 inline-flex flex-shrink-0 transition-all duration-300 ease-in-out hover:bg-[#F0F0F0] hover:shadow-[0px_2px_4px_rgba(0,0,0,0.08)] hover:scale-[1.02] ${tab.width}`}
    >
      <div className="h-14 px-4 justify-start items-center inline-flex">
        <div className="justify-start items-center flex">
          <div className="w-[38px] h-6 pr-[14px] inline-flex flex-col justify-start items-start">
            <div className="w-6 h-6 flex justify-center items-center">
              <img
                src="/Plus.svg"
                alt="Plus icon"
                className="w-6 h-6"
              />
            </div>
          </div>
          <div className="text-center justify-center flex flex-col text-[#1D1D1F] text-sm font-work-sans font-semibold leading-5 break-words">
            {tab.label}
          </div>
        </div>
      </div>
    </div>
  );
};

// Statistic Card Component
const StatisticCard: React.FC<{ stat: StatisticData; index: number }> = ({ stat, index }) => (
  <div className="flex-1 min-w-[144px] flex-col justify-start items-start gap-3 inline-flex">
    <div className={`self-stretch text-white text-2xl leading-[29px] break-words font-schnyder-bold`} style={{ fontFamily: 'Schnyder S', fontWeight: 700 }}>
      {stat.number}
    </div>
    <div className="self-stretch flex-col justify-start items-start gap-3 flex">
      <div className="self-stretch text-white text-sm font-semibold leading-6 break-words" style={{ fontFamily: 'Work Sans' }}>
        {stat.title}
      </div>
      <div className="self-stretch text-white text-xs leading-5 break-words" style={{ fontFamily: 'Work Sans' }}>
        {stat.description}
      </div>
    </div>
  </div>
);

// Overview Section Component
const OverviewSection: React.FC = () => (
  <div className="methodology-overview">
    <div className="flex flex-col gap-6">
      <div className="Overview-text">
        <p style={{
          color: 'var(--Color-Foreground-fg-body, #383C43)',
          fontSize: '18px',
          fontFamily: 'Georgia',
          fontWeight: '400',
          lineHeight: '26px',
          wordWrap: 'break-word',
          marginBottom: '24px'
        }}>
          We analyzed over 85 credit cards from major issuers, comparing the factors that matter most: rewards rates, welcome bonuses, annual fees, travel perks, cash back rates and the overall cardholder experience. Data is updated regularly.
        </p>
      </div>
    </div>

    <div className="methodology-datapoint-block Overview-datapoints">
      <div className="w-full px-6 py-8 relative flex flex-col justify-start items-start gap-10 rounded-lg overflow-hidden" style={{ isolation: 'isolate' }}>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            className="w-full h-full object-cover" 
            src="/MethodologyImg.png" 
            alt="Background"
          />
        </div>

        <div className="self-stretch justify-between items-center inline-flex flex-wrap relative z-10">
          <div className="max-w-[600px] min-w-[272px] text-white text-2xl font-semibold leading-[30px] break-words" style={{ fontFamily: 'Work Sans' }}>
            How We Evaluate Credit Cards
          </div>
          <div className="justify-end items-start gap-6 flex flex-wrap">
            <div className="w-[196px] justify-start items-center gap-2 flex">
              <div className="w-6 h-6 relative">
                <img src="/Verified1.svg" alt="Verified" className="w-6 h-6" />
              </div>
              <div className="flex-1 justify-center items-center flex">
                <div className="flex-1 justify-center flex flex-col text-white text-sm font-semibold leading-6 break-words" style={{ fontFamily: 'Work Sans' }}>
                  EXPERT REVIEWED
                </div>
              </div>
              <div className="w-6 h-6 relative">
                <img src="/tooltip.svg" alt="Tooltip" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch justify-start items-start gap-5 inline-flex flex-wrap relative z-10">
          {STATISTICS_DATA.map((stat, index) => (
            <StatisticCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

interface ContentSectionProps {
  onOpenChat?: () => void;
  quickDiveRef?: React.RefObject<HTMLDivElement>;
  onShowTopPicks?: () => void;
  onShowDiveIntoData?: () => void;
  showTopPicks?: boolean;
  showDiveIntoData?: boolean;
}

export const ContentSection = ({ onOpenChat, quickDiveRef, onShowTopPicks, onShowDiveIntoData, showTopPicks, showDiveIntoData }: ContentSectionProps): JSX.Element => {
  // FORCE REBUILD - Author fix v2
  const [showAllAuthors, setShowAllAuthors] = useState(false);
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);
  const [activeMethodologyTab, setActiveMethodologyTab] = useState("overview");
  
  const breadcrumbItems = [
    { label: "ADVISOR", href: "#top" },
    { label: "CREDIT CARDS", href: "#top" },
    { label: "BEST CREDIT CARDS" },
  ];

  const authors = [
    {
      name: "Elizabeth Aldrich",
      role: "Former Staff Writer",
      type: "Written By",
      image: "/image-2.png",
    },
    {
      name: "Michael Benninger",
      role: "Staff Editor",
      type: "Fact Checked",
      image: "/image-2.png",
    },
  ];

  const questionCards = [
    "Which credit cards offer the best travel rewards?",
    "Which cards have no annual fee?",
    "Best credit cards for cash back",
    "Which cards offer the best welcome bonuses?",
    "What are the best cards for dining rewards?",
    "Which cards have no foreign transaction fees?",
    "How do travel cards compare to cash back cards?",
  ];

  return (
    <section className={`flex z-[1] w-full relative flex-col items-start gap-6 overflow-hidden ${!showTopPicks && !showDiveIntoData ? 'pt-[136px]' : 'pt-0'}`}>
      {!showTopPicks && !showDiveIntoData && (
      <div className="flex flex-col items-center px-0 pb-6 relative w-full bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(245,245,247,1)_100%)] overflow-hidden">
        <div className="w-full max-w-none sm:max-w-[1440px] min-w-0 mx-auto px-4 sm:px-6 md:px-8 lg:px-[90px] overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-3 sm:gap-5 w-full min-w-0">
            {/* Advertiser Disclosure Section */}
            <div className="col-span-1 sm:col-span-8 md:col-span-10 lg:col-span-12 pt-2">
              <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-2" style={{width: '100%', maxWidth: '1440px'}}>
                <div className="order-2 xl:order-1" style={{color: '#8B94A2', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '400', lineHeight: '16px', wordWrap: 'break-word'}}>
                  We independently select all products and services. If you click through links we provide, we may earn a commission.
                </div>
                <div className="order-1 xl:order-2" style={{color: '#8B94A2', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '16px', wordWrap: 'break-word', whiteSpace: 'nowrap'}}>
                  Advertiser Disclosure
                </div>
              </div>
            </div>
            
            <div className="col-span-1 sm:col-span-8 md:col-span-10 lg:col-span-12 flex flex-col items-start gap-4 sm:gap-6 min-w-0">
          <div className="flex flex-col w-full items-start gap-4 relative min-w-0 max-w-full constrain-container">
            <Breadcrumb className="w-full max-w-full">
              <BreadcrumbList className="flex items-center gap-1 flex-wrap">
                {breadcrumbItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      {item.href ? (
                        <BreadcrumbLink
                          href={item.href}
                          className={`[font-family:'Graphik-Regular',Helvetica] font-normal text-[#333333] text-xs tracking-[0] leading-[18px] ${
                            index < 2 ? 'underline' : ''
                          }`}
                        >
                          {item.label}
                        </BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage className="[font-family:'Graphik-Regular',Helvetica] font-normal text-[#333333] text-xs tracking-[0] leading-[18px]">
                          {item.label}
                        </BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbItems.length - 1 && (
                      <BreadcrumbSeparator>
                        <img
                          className="w-4 h-4"
                          alt="Separator"
                          src="/svg.svg"
                        />
                      </BreadcrumbSeparator>
                    )}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>

            <div className="flex flex-col items-start gap-3 relative w-full min-w-0 max-w-full">
              <h1 className="w-full max-w-full text-[#333333] text-[40px] leading-[48px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[56px] font-bold sm:leading-[1.1] md:leading-[1.2] lg:leading-[1.2] constrain-text" style={{ fontFamily: 'Schnyder S' }}>
                Best Credit Cards Of 2026
              </h1>

              <p className="w-full max-w-full font-fixed-styles-utility-medium-regular font-[number:var(--fixed-styles-utility-medium-regular-font-weight)] text-[#333333] text-[length:var(--fixed-styles-utility-medium-regular-font-size)] tracking-[var(--fixed-styles-utility-medium-regular-letter-spacing)] leading-[var(--fixed-styles-utility-medium-regular-line-height)] [font-style:var(--fixed-styles-utility-medium-regular-font-style)] constrain-text">
                Audited &amp; Verified: Jan 9, 2026, 11:51am
              </p>

              {/* Author attribution - Mobile */}
              <div className="sm:hidden flex flex-col items-start gap-2 mt-3">
              <div className="inline-flex items-center gap-2 relative">
                <img
                  className="w-8 h-8 rounded-3xl object-cover flex-shrink-0"
                  alt="Author"
                  src={authors[0].image}
                />
                <div className="inline-flex flex-col items-start relative">
                  <div className="inline-flex items-center gap-0.5 relative">
                    <span className="[font-family:'Work_Sans',Helvetica] font-semibold text-[#333333] text-xs tracking-[0] leading-[16px] break-words">
                      {authors[0].type}
                    </span>
                    <span className="[font-family:'Work_Sans',Helvetica] font-semibold text-[#333333] text-xs tracking-[0] leading-[16px] underline break-words">
                      {authors[0].name}
                    </span>
                  </div>
                  <span className="[font-family:'Work_Sans',Helvetica] font-normal text-[#333333] text-xs tracking-[0] leading-4 break-words">
                    {authors[0].role}
                  </span>
                </div>
              </div>
              
              {/* Additional authors - shown when expanded */}
              {showAllAuthors && (
                <div className="flex flex-col gap-2">
                  {authors.slice(1).map((author, index) => (
                    <div key={index + 1} className="inline-flex items-center gap-2 relative">
                      <img
                        className="w-8 h-8 rounded-3xl object-cover flex-shrink-0"
                        alt="Author"
                        src={author.image}
                      />
                      <div className="inline-flex flex-col items-start relative">
                        <div className="inline-flex items-center gap-0.5 relative">
                          <span className="[font-family:'Work_Sans',Helvetica] font-semibold text-[#333333] text-xs tracking-[0] leading-[16px] break-words">
                            {author.type}
                          </span>
                          <span className="[font-family:'Work_Sans',Helvetica] font-semibold text-[#333333] text-xs tracking-[0] leading-[16px] underline break-words">
                            {author.name}
                          </span>
                        </div>
                        <span className="[font-family:'Work_Sans',Helvetica] font-normal text-[#333333] text-xs tracking-[0] leading-4 break-words">
                          {author.role}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Toggle CTA */}
              <button
                onClick={() => setShowAllAuthors(!showAllAuthors)}
                className="[font-family:'Work_Sans',Helvetica] font-normal text-[#007AC8] text-xs tracking-[0] leading-4 break-words cursor-pointer hover:underline transition-all duration-200"
              >
                {showAllAuthors ? 'Show less' : '& 2 others'}
              </button>
            </div>

            {/* Author attribution - Desktop */}
            <div className="hidden sm:inline-flex items-center gap-6 sm:gap-10 relative flex-wrap mt-3">
              {authors.map((author, index) => (
                <div
                  key={index}
                  className="inline-flex items-center gap-2 sm:gap-3 relative"
                >
                  <img
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-3xl object-cover flex-shrink-0"
                    alt="Author"
                    src={author.image}
                  />
                  <div className="inline-flex flex-col items-start relative">
                    <div className="inline-flex items-center gap-0.5 relative">
                      <span className="[font-family:'Work_Sans',Helvetica] font-semibold text-[#333333] text-xs sm:text-sm tracking-[0] leading-[16px] sm:leading-[19.6px] break-words">
                        {author.type}
                      </span>
                      <span className="[font-family:'Work_Sans',Helvetica] font-semibold text-[#333333] text-xs sm:text-sm tracking-[0] leading-[16px] sm:leading-[19.6px] underline break-words">
                        {author.name}
                      </span>
                    </div>
                    <span className="[font-family:'Work_Sans',Helvetica] font-normal text-[#333333] text-xs tracking-[0] leading-4 break-words">
                      {author.role}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5 w-full min-w-0">
          <div className="col-span-1 lg:col-span-7 flex flex-col items-start gap-4 sm:gap-6 min-w-0">
              <div className="flex flex-col items-start gap-4 relative w-full min-w-0">
                <div className="flex items-center gap-1 relative w-full min-w-0 overflow-hidden">
                  <Badge className="inline-flex h-12 items-center justify-center gap-1.5 pl-3 pr-4 py-2.5 bg-black text-white hover:bg-black rounded-none flex-shrink-0">
                    <img
                      className="w-[15.4px] h-5 object-contain flex-shrink-0"
                      alt="Asset"
                      src="/Asset 45 1.svg"
                    />
                    <span className="[font-family:'Work_Sans',Helvetica] font-bold text-sm tracking-[1.00px] leading-[21px] whitespace-nowrap">
                      HOW WE ANALYZED
                    </span>
                  </Badge>
                  <div className="flex-1 h-px bg-gray-300 min-w-4"></div>
                </div>

                <p className="[font-family:'Work_Sans',Helvetica] font-normal text-black text-sm tracking-[0] leading-6 break-words overflow-wrap-anywhere w-full">
                  We analyzed over 85 credit cards from major issuers, comparing
                  the factors that matter most: rewards rates, welcome bonuses, annual fees,
                  travel perks, cash back rates and the overall cardholder experience.{" "}
                  <span 
                    className="underline cursor-pointer"
                    onClick={() => {
                      const methodologySection = document.getElementById('methodology');
                      if (methodologySection) {
                        const elementTop = methodologySection.getBoundingClientRect().top + window.pageYOffset;
                        const offsetTop = elementTop - 80;
                        window.scrollTo({
                          top: offsetTop,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    Read our methodology
                  </span>
                </p>
              </div>

              <Card className="w-full bg-[#ffffffcc] rounded-lg border-none shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0px_rgba(255,255,255,0.48),inset_1px_0_0px_rgba(255,255,255,0.38),inset_0_-1px_1px_rgba(0,0,0,0.24),inset_-1px_0_1px_rgba(0,0,0,0.19)] backdrop-blur-sm backdrop-brightness-[118.0%] backdrop-saturate-[124.0%] backdrop-contrast-[118.0%] [-webkit-backdrop-filter:blur(4px)_brightness(118.0%)_saturate(124.0%)_contrast(118.0%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none">
                <CardContent className="p-0 flex items-center justify-center gap-2.5 pt-5 pb-0 px-0">
                  <Button
                    variant="ghost"
                    onClick={() => window.open('https://www.forbes.com/advisor/credit-cards/best-credit-cards/', '_blank')}
                    className="inline-flex items-center gap-2 pt-0 pb-4 px-4 h-auto hover:bg-transparent"
                  >
                    <span className="[font-family:'Work_Sans',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
                      Find the best credit cards
                    </span>
                    <img
                      className="w-6 h-6"
                      alt="Line arrow right"
                      src="/-line-arrow-right.svg"
                    />
                  </Button>
                </CardContent>
              </Card>
            </div>

          <div className="col-span-1 lg:col-span-5">
            <div style={{width: '100%', height: '100%', position: 'relative', overflow: 'hidden', borderRadius: 24, backgroundImage: 'url(/HeroImage3.png)', backgroundSize: 'cover', backgroundPosition: '50% 50%', minHeight: '230px'}} className="hidden lg:block">
              {/* Grouped Badge Container - Vertically Centered */}
              <div style={{position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-end'}}>
                <div style={{width: 'auto', height: 40, padding: '6px 10px', background: 'rgba(0, 0, 0, 0.6)', borderRadius: 8, backdropFilter: 'blur(6px)', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                  <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex', flexShrink: 0}}>
                    <div style={{width: 24, height: 24, position: 'relative', overflow: 'hidden', flexShrink: 0}}>
                      <img src="/activity-heart.svg" alt="Top Rewards" style={{width: 24, height: 24, position: 'absolute', filter: 'brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(75%) contrast(100%)'}} />
                    </div>
                    <div style={{color: 'rgb(191, 191, 191)', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '12px', wordWrap: 'break-word', flexShrink: 0, whiteSpace: 'nowrap'}}>Top Rewards</div>
                  </div>
                  <div style={{textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '12px', wordWrap: 'break-word', flexShrink: 0, whiteSpace: 'nowrap'}}>Offers verified Jan 9, 2026</div>
                </div>
                
                <div style={{width: 'auto', height: 40, padding: '6px 10px', background: 'rgba(0, 0, 0, 0.6)', borderRadius: 8, backdropFilter: 'blur(6px)', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                  <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex', flexShrink: 0}}>
                    <div style={{width: 24, height: 24, position: 'relative', overflow: 'hidden', flexShrink: 0}}>
                      <img src="/activity-heart.svg" alt="Welcome Bonuses" style={{width: 24, height: 24, position: 'absolute', filter: 'brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(75%) contrast(100%)'}} />
                    </div>
                    <div style={{color: 'rgb(191, 191, 191)', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '12px', wordWrap: 'break-word', flexShrink: 0, whiteSpace: 'nowrap'}}>Welcome Bonuses</div>
                  </div>
                  <div style={{textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '12px', wordWrap: 'break-word', flexShrink: 0, whiteSpace: 'nowrap'}}>Up to 75,000+ points</div>
                </div>
                
                <div style={{width: 'auto', height: 40, padding: '6px 10px', background: 'rgba(0, 0, 0, 0.6)', borderRadius: 8, backdropFilter: 'blur(6px)', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
                  <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 4, display: 'flex', flexShrink: 0}}>
                    <div style={{width: 24, height: 24, position: 'relative', overflow: 'hidden', flexShrink: 0}}>
                      <img src="/activity-heart.svg" alt="No Annual Fee" style={{width: 24, height: 24, position: 'absolute', filter: 'brightness(0) saturate(100%) invert(75%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(75%) contrast(100%)'}} />
                    </div>
                    <div style={{color: 'rgb(191, 191, 191)', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '12px', wordWrap: 'break-word', flexShrink: 0, whiteSpace: 'nowrap'}}>No Annual Fee</div>
                  </div>
                  <div style={{textAlign: 'right', color: 'white', fontSize: 12, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '12px', wordWrap: 'break-word', flexShrink: 0, whiteSpace: 'nowrap'}}>Cards with $0 annual fee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
            </div>
          </div>
        </div>
      </div>
      )}

      {!showTopPicks && !showDiveIntoData && (
      <div ref={quickDiveRef} className="w-full pt-4 sm:pt-6 pb-6 sm:pb-8 border-b border-solid border-[#eceff3] overflow-hidden">
        <div className="w-full max-w-none sm:max-w-[1440px] min-w-0 mx-auto px-4 sm:px-6 md:px-8 lg:px-[90px]">
          <div className="grid grid-cols-1 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-3 sm:gap-5 w-full min-w-0">
            <div className="col-span-1 sm:col-span-8 md:col-span-10 lg:col-span-12 flex flex-col items-start gap-4 sm:gap-5 min-w-0">
              {/* Header Section */}
              <div className="flex flex-col gap-2 w-full">
                <div className="text-black text-lg sm:text-xl font-bold leading-[22px] sm:leading-[26px]" style={{ fontFamily: 'Work Sans' }}>
                  Quick dive
                </div>
                <div className="text-[#1E2125] text-sm leading-6" style={{ fontFamily: 'Work Sans', fontWeight: '400', letterSpacing: '0' }}>
                  Talk to our AI to get quick recommendations, or see our editors' top recommendations, or dive into all of the data we gathered across pricing, coverage, ratings and more.
                </div>
              </div>

              {/* Buttons Section */}
              <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5">
                {/* Personalized AI Recommendations Button */}
                <div 
                  onClick={onOpenChat}
                  className="relative w-full sm:w-auto sm:min-w-[280px] lg:min-w-[411px] py-4 px-4 bg-black rounded-lg border-none flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-900 transition-all hover:scale-[1.02] active:scale-[0.98] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_0%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
                >
                  <img src="/ForbesAIIcon.svg" alt="Forbes AI" className="w-5 h-5 flex-shrink-0 relative z-[2]" />
                  <div className="text-white text-sm sm:text-base leading-6 relative z-[2]" style={{ fontFamily: 'Work Sans', fontWeight: '400' }}>
                    Ask our AI
                  </div>
                </div>

                {/* Top Editorial Picks Button */}
                <div 
                  onClick={onShowTopPicks}
                  className="flex-1 min-h-[56px] py-2 px-4 bg-white rounded-xl border border-[#F4F5F8] shadow-[0px_4px_23px_-1px_rgba(0,0,0,0.05)] flex items-center justify-center gap-2.5 cursor-pointer hover:border-[#007AC8] transition-all"
                >
                  <img src="/EditorPick.svg" alt="Editor Pick" className="w-6 h-6 flex-shrink-0" />
                  <div className="text-[#606F7F] text-sm leading-6" style={{ fontFamily: 'Work Sans', fontWeight: '600' }}>
                    Top Editorial Picks
                  </div>
                  <div className="w-5 h-5 relative flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 5L12.5 10L7.5 15" stroke="#606F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>

                {/* Dive into the data Button */}
                <div
                  onClick={onShowDiveIntoData}
                  className="flex-1 min-h-[56px] py-2 px-4 bg-white rounded-xl border border-[#F4F5F8] shadow-[0px_4px_23px_-1px_rgba(0,0,0,0.05)] flex items-center justify-center gap-2.5 cursor-pointer hover:border-[#007AC8] transition-all"
                >
                  <img src="/bar-chart-04.svg" alt="Data" className="w-6 h-6 flex-shrink-0" />
                  <div className="text-[#606F7F] text-sm leading-6" style={{ fontFamily: 'Work Sans', fontWeight: '600' }}>
                    Dive into the data
                  </div>
                  <div className="w-5 h-5 relative flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.5 5L12.5 10L7.5 15" stroke="#606F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Why You Can Trust Forbes Advisor Dropdown */}
              <div className="w-full mt-6 bg-white border-t border-b border-[#E5E7EB]">
                <div 
                  onClick={() => setIsMethodologyOpen(!isMethodologyOpen)}
                  className="py-4 cursor-pointer hover:bg-gray-50 transition-all"
                  style={{width: '100%', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex'}}
                >
                  <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'flex'}}>
                    <img src="/frame-2147237132.svg" alt="Forbes Advisor" className="w-10 h-10 flex-shrink-0" />
                    <div style={{color: '#121417', fontSize: 18, fontFamily: 'Work Sans', fontWeight: '700', lineHeight: '30px', wordWrap: 'break-word'}}>Why You Can Trust Forbes Advisor</div>
                  </div>
                  <img 
                    src="/chevron-down.svg"
                    alt="Chevron" 
                    className="w-6 h-6 flex-shrink-0 transition-transform duration-300"
                    style={{transform: isMethodologyOpen ? 'rotate(180deg)' : 'rotate(0deg)'}}
                  />
                </div>
                
                {/* Methodology Content */}
                {isMethodologyOpen && (
                  <div className="pb-8 pt-6">
                    {/* Header */}
                    <header className="mb-8">
                      <h2 
                        className="text-[32px] sm:text-[32px] md:text-[32px] lg:text-[40px] leading-[39px] sm:leading-[39px] md:leading-[39px] lg:leading-[48px]"
                        style={{
                          justifyContent: 'center',
                          display: 'flex',
                          flexDirection: 'column',
                          color: 'black',
                          fontFamily: 'Work Sans',
                          fontWeight: '700',
                          wordWrap: 'break-word'
                        }}
                      >
                        How We Found The Best Credit Cards
                      </h2>
                    </header>

                    {/* Navigation Tabs */}
                    <nav 
                      className="w-full overflow-x-auto scrollbar-hide py-2 px-1 mb-8"
                      style={{ 
                        scrollbarWidth: 'none', 
                        msOverflowStyle: 'none',
                        WebkitOverflowScrolling: 'touch'
                      }}
                    >
                      <div className="flex justify-start items-center gap-4 min-w-max">
                        {NAVIGATION_TABS.map((tab) => (
                          <TabButton
                            key={tab.id}
                            tab={tab}
                            isActive={activeMethodologyTab === tab.id}
                            onClick={() => setActiveMethodologyTab(tab.id)}
                          />
                        ))}
                      </div>
                    </nav>

                    {/* Tab Content */}
                    <div className="w-full">
                      {activeMethodologyTab === "overview" && <OverviewSection />}
                      {activeMethodologyTab === "methodology" && (
                        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
                          <RatingsSection />
                          <MethodologySection />
                        </Suspense>
                      )}
                      {activeMethodologyTab === "research" && (
                        <div className="p-6 text-center text-gray-600">Data Research content coming soon...</div>
                      )}
                      {activeMethodologyTab === "team" && (
                        <Suspense fallback={<div className="h-96 flex items-center justify-center">Loading...</div>}>
                          <TeamSection />
                        </Suspense>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </section>
  );
};
