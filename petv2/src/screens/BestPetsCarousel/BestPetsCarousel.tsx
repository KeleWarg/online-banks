import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { useCarousel } from "../../hooks/useCarousel";
import { CarouselCard1, CarouselCard3, CarouselCard4, CarouselCard5, CarouselCard6 } from "./components";

export const BestPetsCarousel = (): JSX.Element => {
  const CARD_WIDTH = 312 + 20; // card width + gap
  const TOTAL_CARDS = 5;
  
  const {
    carouselRef,
    currentIndex,
    scrollToNext,
    scrollToPrev,
    maxScrollIndex,
    paginationDots
  } = useCarousel({
    cardWidth: CARD_WIDTH,
    itemCount: TOTAL_CARDS
  });

  return (
    <section className="bg-white pt-8 sm:pt-12 md:pt-14 pb-6 sm:pb-8">
      {/* Responsive container with proper padding */}
      <div className="mx-auto px-5 sm:px-6 md:px-8 lg:px-[90px] max-w-[1440px] min-w-[378px]">
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-5">
          {/* Header spans full width (12 columns) */}
          <div className="col-span-6 sm:col-span-8 md:col-span-10 lg:col-span-12">
            <header className="flex flex-col items-start gap-2 mb-3 sm:mb-4 md:mb-5">
              <h2 className="font-schnyder-bold text-[32px] sm:text-[32px] md:text-[32px] lg:text-[40px] leading-[39px] sm:leading-[39px] md:leading-[39px] lg:leading-[48px]" style={{
                color: 'black',
                fontFamily: 'Work Sans',
                fontWeight: '700',
                wordWrap: 'break-word'
              }}>
                Best Online Banks of 2026
              </h2>

              <p className="w-full [font-family:'Work_Sans',Helvetica] font-normal text-[#606f7f] text-sm sm:text-base tracking-[0] leading-[1.6]">
                Understanding which online bank excels for your needs is key to choosing
                the right account.
              </p>
            </header>
          </div>

          {/* Cards container - responsive carousel */}
          <div className="col-span-6 sm:col-span-8 md:col-span-10 lg:col-span-12">
            <div 
              ref={carouselRef}
                  className="flex overflow-x-auto gap-3 sm:gap-4 md:gap-5 scroll-smooth scrollbar-hide py-6 px-6 -mx-6"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch' // Better mobile scrolling
              }}
            >
              <CarouselCard4 />
              <CarouselCard6 />
              <CarouselCard3 />
              <CarouselCard1 />
              <CarouselCard5 />
            </div>
          </div>

          {/* Bottom section with Author info and navigation */}
          <div className="col-span-6 sm:col-span-8 md:col-span-10 lg:col-span-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              <div style={{width: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 24, display: 'inline-flex'}}>
                <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 22, display: 'flex'}}>
                  <div data-for="Writer" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 12, display: 'inline-flex'}}>
                    <img style={{width: 40, height: 40, borderRadius: 24, objectFit: 'cover'}} src="/avatar-placeholder.svg" alt="Author" />
                    <div style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                      <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 2, display: 'inline-flex'}}>
                        <div style={{color: '#333333', fontSize: 16, fontFamily: 'Work Sans', fontWeight: '600', textDecoration: 'underline', lineHeight: '26px', wordWrap: 'break-word'}}>Elizabeth Aldrich</div>
                      </div>
                      <div style={{color: '#333333', fontSize: 14, fontFamily: 'Work Sans', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>Former Staff Writer</div>
                    </div>
                  </div>
                </div>
                <div style={{alignSelf: 'stretch', color: 'var(--Color-Foreground-fg-body, #383C43)', fontSize: 16, fontFamily: 'Work Sans', fontWeight: '400', lineHeight: '26px', wordWrap: 'break-word'}}>Data Verified: Jan 9, 2026 | Source: Forbes Advisor analysis</div>
              </div>

              <nav className="flex items-center gap-3 sm:gap-4">
                <Button 
                  onClick={scrollToPrev}
                  disabled={currentIndex === 0}
                  className="flex w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] items-center justify-center gap-2 p-0 relative bg-[#f4f5f8] rounded-full backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] disabled:opacity-50 text-black hover:text-white"
                >
                  <ChevronLeftIcon className="relative w-5 h-5 sm:w-6 sm:h-6 ml-[-2px] sm:ml-[-3px] mr-[-2px] sm:mr-[-3px]" />
                </Button>

                <div className="inline-flex h-[40px] sm:h-[50px] items-center gap-2 px-3 sm:px-4 py-2 relative flex-[0_0_auto] bg-[#f4f5f8] rounded-[40px] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]">
                  {paginationDots.map((dot, index) => (
                    <div
                      key={index}
                      className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${dot.bgClass}`}
                    />
                  ))}
                </div>

                <Button 
                  onClick={scrollToNext}
                  disabled={currentIndex >= maxScrollIndex}
                  className="flex w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] items-center justify-center gap-2 p-0 relative bg-[#f4f5f8] rounded-full backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)] disabled:opacity-50 text-black hover:text-white"
                >
                  <ChevronRightIcon className="relative w-5 h-5 sm:w-6 sm:h-6 ml-[-2px] sm:ml-[-3px] mr-[-2px] sm:mr-[-3px]" />
                </Button>
              </nav>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};