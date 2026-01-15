import { ArrowUpRightIcon } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { PetInsuranceComparison } from "../../components/PetInsuranceComparison";
import { DetailedInfoSection } from "./sections/DetailedInfoSection/DetailedInfoSection";

const NAVIGATION_ITEMS = [
  { title: "Compare Accounts", id: "compare-plans" },
  { title: "The Best Online Banks", id: "best-providers" },
  { title: "Compare the Best\nOnline Banks", id: "compare-companies" },
  { title: "Our Analysis of\nOnline Bank Value", id: "best-value-analysis" },
  { title: "Savings and Checking\nAPYs", id: "insurance-cost" },
  { title: "Account Features\nand Fees", id: "plan-details" },
  { title: "User Opinion of\nOnline Banks", id: "user-opinion" },
  { title: "Customer Support\nFeedback", id: "claims-feedback" },
  { title: "How to Choose the\nRight Online Bank", id: "how-to-choose" },
  { title: "More About Our Customer\nSatisfaction Survey", id: "customer-satisfaction-survey" },
  { title: "Frequently Asked\nQuestions", id: "faq" },
];

export const ElementPc = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const isInitialMount = useRef(true);

  const handleNavigationClick = (index: number, id: string) => {
    setActiveIndex(index);
    
    // Scroll to the corresponding section with offset for sticky navigation
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetTop = elementTop - 80; // 80px offset to account for sticky nav and show title
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Auto-scroll navigation to keep active item visible
  useEffect(() => {
    // Skip auto-scroll on initial mount to prevent page jump
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    
    const activeButton = navRefs.current[activeIndex];
    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'nearest'
      });
    }
  }, [activeIndex]);

  // Intersection Observer to detect which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Trigger when section is 20% from top
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const navIndex = NAVIGATION_ITEMS.findIndex(item => item.id === sectionId);
          if (navIndex !== -1) {
            setActiveIndex(navIndex);
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    NAVIGATION_ITEMS.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const insuranceDetails = [
    { label: "Top savings APY", value: "3.50% (varies by bank)" },
    {
      label: "Monthly fees",
      value: "Often $0 with online banks",
    },
    {
      label: "ATM access",
      value: "Large fee-free networks",
    },
  ];

  return (
    <div className="bg-white w-full min-w-[378px] min-h-screen">
      {/* Container with max-width and centered */}
      <div className="max-w-[1440px] min-w-[378px] mx-auto px-5 sm:px-6 md:px-8 lg:px-[90px]">
        {/* Responsive layout with proper gutters */}
        <div className="flex gap-6 sm:gap-8 md:gap-11">
          {/* Navigation - spans 3 columns - Visible only on desktop (1024px+) */}
          <nav className="hidden xl:flex flex-col items-start justify-start gap-3 max-w-[212px] max-h-[60vh] overflow-y-auto sticky top-[152px] self-start z-[1] bg-white/90 backdrop-blur-sm rounded-lg p-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {NAVIGATION_ITEMS.map((item, index) => (
              <Button
                key={item.id}
                ref={(el) => (navRefs.current[index] = el)}
                variant={index === activeIndex ? "default" : "secondary"}
                onClick={() => handleNavigationClick(index, item.id)}
                className={`navigation-buttons relative flex-[0_0_auto] min-h-[56px] py-2 h-auto ${
                  index === activeIndex
                    ? "bg-white rounded-[40px] shadow-SEM-shadows-4dp text-black hover:bg-white"
                    : "bg-[#EEEEF2] rounded-[28px] shadow-[inset_0px_0px_0.5px_#0000001c] text-wwwapplecomshark"
                } hover:scale-110 active:scale-95 transition-all duration-300 ease-in-out`}
              >
                <div className="navigation-sub-div relative flex items-center gap-2 mx-2">
                  {index === activeIndex ? (
                    <img
                      src="/activeicon.svg"
                      alt="Active"
                      className="w-[28.29px] h-[28.28px] flex-shrink-0"
                    />
                  ) : (
                    <ArrowUpRightIcon
                      className="w-[28.29px] h-[28.28px] flex-shrink-0"
                    />
                  )}
                  <span
                    className={`[font-family:'Work_Sans',Helvetica] font-semibold ${
                      index === activeIndex
                        ? "text-base text-left tracking-[0] leading-[21px] text-black"
                        : "text-sm text-left tracking-[0] leading-5 text-[#1D1D1F]"
                    } max-w-[142px] whitespace-normal break-words`}
                  >
                    {item.title}
                  </span>
                </div>
              </Button>
            ))}
          </nav>

          {/* Main content - full width on mobile/tablet, constrained width on desktop */}
          <main className="w-full self-start">
            {/* Full content parent div */}
            <div id="compare-plans" className="full-content-parent flex flex-col gap-6">
              {/* Featured Partner Section with Grid Alignment */}
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-12">
                  <div className="featured-partner-section flex flex-col items-center gap-[18px] px-4 py-1 bg-[#ffffffcc] rounded-3xl overflow-hidden border-[none] shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)] before:content-[''] before:absolute before:inset-0 before:p-1 before:rounded-3xl before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none relative transition-all duration-300 ease-in-out hover:shadow-[0px_0px_20px_6px_#7d0af825,inset_0_1px_0_rgba(255,255,255,0.50),inset_1px_0_0_rgba(255,255,255,0.40),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.13)] cursor-pointer">
              <div className="featured-partner-offer-group">
              <div className="featured-partner-offer-group mt-2">
                <header className="relative flex items-center justify-center w-full mt-[-4.00px] [font-family:'Work_Sans',Helvetica] font-semibold text-black text-sm text-center tracking-[0.92px] leading-5 whitespace-nowrap">
                  FEATURED PARTNER OFFER
                </header>

                <Card className="my-2 flex flex-col items-center gap-[26px] pt-5 pb-6 px-4 relative self-stretch w-full flex-[0_0_auto] bg-[#ffffffcc] rounded-2xl shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] [-webkit-backdrop-filter:blur(2.0px)_brightness(110%)]">
          <CardContent className="flex flex-col md:flex-row items-center gap-[28.66px] relative self-stretch w-full flex-[0_0_auto] p-2">
            <div className="relative flex-shrink-0 w-full md:w-[382.42px] h-[253.96px] rounded-[15.81px] overflow-hidden bg-[#f8f8fa]">
              <img
                className="absolute top-0 left-0 w-full h-[254px] object-cover"
                alt="Shutterstock"
                src="/shutterstock-2480568663--1-.png"
              />

              <div className="flex w-full h-[57px] items-center justify-center gap-[23.72px] px-0 py-[7.91px] absolute top-0 left-0 bg-[#f8f8fa]">
                  <img 
                  src="/icon.svg" 
                  alt="Ally Bank Logo" 
                  className="relative w-[123.52px] h-[57.31px] mt-[-7.91px] mb-[-7.91px] object-contain"
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-[19.76px] relative flex-1 grow">
              <div className="inline-flex items-center gap-[7.91px] relative flex-[0_0_auto]">
                <h2 className="relative w-fit mt-[-0.99px] [font-family:'Work_Sans',Helvetica] font-bold text-black text-[23.7px] tracking-[0] leading-[31.6px] underline whitespace-nowrap">
                  Ally Bank
                </h2>

                <ArrowUpRightIcon className="relative w-[23.72px] h-[23.72px]" />
              </div>

              <div className="featured-partner-datapoint-group flex flex-col items-start gap-[7.91px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="featured-partner-datapoint1 py-1">
                  <div className="unique-datapoint-title relative self-stretch w-full">
                    <div className="flex items-start justify-between relative self-stretch w-full">
                      <div className="datapoint-title relative mt-[-0.99px] [font-family:'Work_Sans',Helvetica] font-normal text-black text-[13.8px] tracking-[0] leading-[21.7px]">
                        {insuranceDetails[0].label}
                      </div>
                      <div className="datapoint relative mt-[-0.99px] [font-family:'Work_Sans',Helvetica] font-bold text-black text-[13.8px] tracking-[0] leading-[21.7px] whitespace-nowrap text-right ml-4">
                        {insuranceDetails[0].value}
                      </div>
                    </div>
                    <img
                      className="relative self-stretch w-full h-px mt-2"
                      alt="Vector"
                      src="/vector-5.svg"
                    />
                  </div>
                </div>

                <div className="featured-partner-datapoint2 py-1">
                  <div className="unique-datapoint-title relative self-stretch w-full">
                    <div className="flex items-start justify-between relative self-stretch w-full">
                      <div className="datapoint-title relative mt-[-0.99px] [font-family:'Work_Sans',Helvetica] font-normal text-black text-[13.8px] tracking-[0] leading-[21.7px]">
                        {insuranceDetails[1].label}
                      </div>
                      <div className="datapoint relative mt-[-0.99px] [font-family:'Work_Sans',Helvetica] font-bold text-black text-[13.8px] tracking-[0] leading-[21.7px] whitespace-nowrap text-right ml-4">
                        {insuranceDetails[1].value}
                      </div>
                    </div>
                    <img
                      className="relative self-stretch w-full h-px mt-2"
                      alt="Vector"
                      src="/vector-5.svg"
                    />
                  </div>
                </div>

                <div className="featured-partner-datapoint3 py-1">
                  <div className="unique-datapoint-title relative self-stretch w-full">
                    <div className="flex items-start justify-between relative self-stretch w-full">
                      <div className="datapoint-title relative mt-[-0.99px] [font-family:'Work_Sans',Helvetica] font-normal text-black text-[13.8px] tracking-[0] leading-[21.7px]">
                        {insuranceDetails[2].label}
                      </div>
                      <div className="datapoint relative mt-[-0.99px] [font-family:'Work_Sans',Helvetica] font-bold text-black text-[13.8px] tracking-[0] leading-[21.7px] whitespace-nowrap text-right ml-4">
                        {insuranceDetails[2].value}
                      </div>
                    </div>
                    <img
                      className="relative self-stretch w-full h-px mt-2"
                      alt="Vector"
                      src="/vector-5.svg"
                      style={{ opacity: 0 }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col h-[68.18px] items-center gap-[5.93px] relative self-stretch w-full">
                <div className="flex flex-col items-center gap-[3.95px] relative self-stretch w-full flex-[0_0_auto]">
                  <Button className="relative self-stretch w-full h-[47.43px] bg-[#007ac8] rounded-[3.95px] shadow-[0px_3.95px_11.86px_#00000033] hover:bg-[#007ac8]/90">
                    <div className="inline-flex items-center gap-[7.91px]">
                      <span className="relative flex items-center justify-center w-fit mt-[-0.99px] [font-family:'Work_Sans',Helvetica] font-bold text-white text-[15.8px] text-center tracking-[0] leading-[29.6px] whitespace-nowrap">
                        See Plans
                      </span>

                      <img
                        className="relative w-[19.76px] h-[19.76px]"
                        alt="Line arrow right"
                        src="/arrow-right-white.svg"
                      />
                    </div>
                  </Button>
                </div>

                <div className="relative w-fit [font-family:'Work_Sans',Helvetica] font-normal text-[#333333] text-[11.9px] text-center tracking-[0] leading-[14.8px] whitespace-nowrap">
                  Via Forbes Advisor&#39;s Partner
                </div>
              </div>
            </div>
          </CardContent>
                </Card>
              </div>
              </div>
              </div>
                </div>
              </div>
              
              <DetailedInfoSection />
              
              {/* Compare the Best Online Banks Section */}
              <section id="compare-companies" className="w-full bg-white pt-8 sm:pt-12 border-t border-[#CED4DB] mt-10">
                <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                      <h2 className="text-[32px] sm:text-[32px] md:text-[32px] lg:text-[40px] leading-[39px] sm:leading-[39px] md:leading-[39px] lg:leading-[48px]" style={{color: 'black', fontFamily: 'Work Sans', fontWeight: 700}}>Compare the Best Online Banks</h2>
                      <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                        <div style={{alignSelf: 'stretch', color: '#333333', fontSize: 18, fontFamily: 'Georgia', fontWeight: '400', lineHeight: '29.12px', wordWrap: 'break-word'}}>Online bank offers can look similar at first glance. We focused on the features that matter most—rates, fees, access and account tools—then compared the options that best fit each use case.</div>
                        <div style={{alignSelf: 'stretch', color: '#333333', fontSize: 24, fontFamily: 'Work Sans', fontWeight: '700', lineHeight: '29px', wordWrap: 'break-word'}}>Account Type</div>
                        <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'flex'}}>
                          <div style={{color: '#333333', fontSize: 18, fontFamily: 'Georgia', fontWeight: '400', lineHeight: '29.12px', wordWrap: 'break-word'}}>Start with the account type that matches your goals, then compare banks that excel in those areas.</div>
                          <div style={{color: '#333333', fontSize: 18, fontFamily: 'Georgia', fontWeight: '400', lineHeight: '29.12px', wordWrap: 'break-word'}}>Checking accounts. Built for everyday spending, bill pay and direct deposit.</div>
                          <div style={{color: '#333333', fontSize: 18, fontFamily: 'Georgia', fontWeight: '400', lineHeight: '29.12px', wordWrap: 'break-word'}}>Savings accounts. Designed for earning interest on cash balances.</div>
                          <div style={{color: '#333333', fontSize: 18, fontFamily: 'Georgia', fontWeight: '400', lineHeight: '29.12px', wordWrap: 'break-word'}}>Money market accounts. A hybrid that can offer higher APYs with limited access.</div>
                          <div style={{color: '#333333', fontSize: 18, fontFamily: 'Georgia', fontWeight: '400', lineHeight: '29.12px', wordWrap: 'break-word'}}>Certificates of deposit (CDs). Fixed-rate savings for a defined term.</div>
                          <div><span style={{color: '#333333', fontSize: 18, fontFamily: 'Georgia', fontWeight: '400', lineHeight: '29.12px', wordWrap: 'break-word'}}>Related: </span><span style={{color: '#007AC8', fontSize: 18, fontFamily: 'Georgia', fontWeight: '700', textDecoration: 'underline', lineHeight: '29.12px', wordWrap: 'break-word'}}>Best Online Banks</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              
              <PetInsuranceComparison />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};