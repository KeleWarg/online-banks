import React, { useState, useEffect } from 'react';

interface StickyBottomBarProps {
  onOpenChat?: () => void;
  onShowTopPicks?: () => void;
  onShowDiveIntoData?: () => void;
  quickDiveSectionRef?: React.RefObject<HTMLDivElement>;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ 
  onOpenChat,
  onShowTopPicks,
  onShowDiveIntoData,
  quickDiveSectionRef 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Track if user has scrolled and hide when at top
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY > 100) {
        setHasScrolled(true);
      }
      
      // Hide bar if user scrolls back to top
      if (scrollY < 50) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!quickDiveSectionRef?.current || !hasScrolled) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show sticky bar when Quick dive section is NOT visible
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '-50px 0px 0px 0px',
      }
    );

    observer.observe(quickDiveSectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [quickDiveSectionRef, hasScrolled]);

  const handleScrollToCarousel = () => {
    const carousel = document.querySelector('[class*="BestPetsCarousel"]');
    if (carousel) {
      carousel.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleScrollToData = () => {
    const dataSection = document.getElementById('insurance-cost') || 
                        document.querySelector('[id*="cost"]');
    if (dataSection) {
      dataSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Personalized AI Recommendations Button - Floating on mobile, hidden on desktop (shown in sticky bar) */}
      <div 
        className="sm:hidden fixed bottom-24 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ease-in-out"
        style={{
          animation: isVisible ? 'slideUpFadeIn 0.3s ease-out' : 'slideDownFadeOut 0.3s ease-in'
        }}
      >
        <div 
          onClick={onOpenChat}
          className="relative h-14 px-4 py-2 bg-black rounded-[48px] border-none flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-900 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0px_4px_16px_rgba(0,0,0,0.3)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[48px] before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
        >
          <img src="/ForbesAIIcon.svg" alt="Forbes AI" className="w-5 h-5 flex-shrink-0 relative z-[2]" />
          <div className="text-white text-base leading-6 relative z-[2]" style={{ fontFamily: 'Work Sans', fontWeight: '400' }}>
            Ask our AI
          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div 
        className="fixed bottom-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out flex justify-center"
        style={{
          animation: isVisible ? 'slideUpFadeIn 0.3s ease-out' : 'slideDownFadeOut 0.3s ease-in'
        }}
      >
        {/* Container sized to content with gray background */}
        <div 
          className="inline-flex overflow-hidden"
          style={{ 
            background: 'var(--Color-Background-bg-neutral-subtle, #F4F5F8)',
            boxShadow: '0px 16px 20px -5px rgba(0, 0, 0, 0.18)',
            borderRadius: '48px 48px 0 0'
          }}
        >
          {/* Buttons container with padding */}
          <div className="py-3 px-2.5 flex items-center gap-2.5">
            {/* Personalized AI Recommendations Button - Desktop only (Position 1 on desktop) */}
            <div 
              onClick={onOpenChat}
              className="hidden sm:flex relative h-14 px-4 py-2 bg-black rounded-[48px] border-none items-center justify-center gap-2 cursor-pointer hover:bg-gray-900 transition-all hover:scale-[1.02] active:scale-[0.98] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-[48px] before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none"
            >
              <img src="/ForbesAIIcon.svg" alt="Forbes AI" className="w-5 h-5 flex-shrink-0 relative z-[2]" />
              <div className="text-white text-base leading-6 relative z-[2]" style={{ fontFamily: 'Work Sans', fontWeight: '400' }}>
                Ask our AI
              </div>
            </div>

            {/* Top Editorial Picks Button */}
            <div 
              onClick={onShowTopPicks}
              className="h-14 px-4 py-2 bg-white rounded-[48px] border border-[#F4F5F8] flex items-center justify-center gap-2.5 cursor-pointer hover:border-[#007AC8] transition-all"
            >
              <img src="/EditorPick.svg" alt="Editor Pick" className="hidden sm:block w-6 h-6 flex-shrink-0" />
              <div className="text-[#606F7F] text-sm font-semibold leading-6" style={{ fontFamily: 'Work Sans', fontWeight: '600' }}>
                Top Editorial Picks
              </div>
              <div className="hidden sm:block w-5 h-5 relative flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="#606F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>

            {/* Dive into the data Button */}
            <div 
              onClick={onShowDiveIntoData}
              className="h-14 px-4 py-2 bg-white rounded-[48px] border border-[#F4F5F8] flex items-center justify-center gap-2.5 cursor-pointer hover:border-[#007AC8] transition-all"
            >
              <img src="/bar-chart-04.svg" alt="Data" className="hidden sm:block w-6 h-6 flex-shrink-0" />
              <div className="text-[#606F7F] text-sm font-semibold leading-6" style={{ fontFamily: 'Work Sans', fontWeight: '600' }}>
                Dive into the data
              </div>
              <div className="hidden sm:block w-5 h-5 relative flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="#606F7F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes slideUpFadeIn {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          @keyframes slideDownFadeOut {
            from {
              transform: translateY(0);
              opacity: 1;
            }
            to {
              transform: translateY(100%);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    </>
  );
};

