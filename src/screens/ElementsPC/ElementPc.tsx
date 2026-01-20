import { ArrowUpRightIcon } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "../../components/ui/button";
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
                          <p style={{color: '#333333', fontSize: 18, fontFamily: 'Georgia', fontWeight: '400', lineHeight: '29.12px', wordWrap: 'break-word', margin: 0}}>
                            Start with the account type that matches your goals, then compare banks that excel in those areas. <strong>Checking accounts</strong> are built for everyday spending, bill pay and direct deposit. <strong>Savings accounts</strong> are designed for earning interest on cash balances. <strong>Money market accounts</strong> are a hybrid that can offer higher APYs with limited access. <strong>Certificates of deposit (CDs)</strong> offer fixed-rate savings for a defined term.
                          </p>
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