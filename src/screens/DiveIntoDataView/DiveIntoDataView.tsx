import React, { useState, useEffect } from 'react';
import {
  COST_DATA,
  PLAN_DETAILS_DATA,
  USER_OPINION_DATA,
  CLAIMS_DATA
} from '../../data/insurance-providers';

interface DiveIntoDataViewProps {
  onBack: () => void;
}

export const DiveIntoDataView: React.FC<DiveIntoDataViewProps> = ({ onBack }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMethodologyTab, setActiveMethodologyTab] = useState('overview');
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 50);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 100px
      if (window.scrollY > 100) {
        setShowStickyButton(true);
      } else {
        setShowStickyButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderMethodologyContent = () => {
    switch (activeMethodologyTab) {
      case 'overview':
        return (
          <div className="methodology-overview ai-style-change-7">
            <div className="flex flex-col gap-6">
              <div className="Overview-text" data-show-read-more="false" style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 4, display: 'inline-flex'}}>
                <div className="ai-style-change-8" style={{alignSelf: 'stretch', color: 'var(--Color-Foreground-fg-body, #383C43)', fontSize: 18, fontFamily: 'Georgia', fontWeight: 400, lineHeight: '26px', wordWrap: 'break-word', marginBottom: 24}}>
                  We analyzed key banking factors—rates, fees, access and product breadth. We reviewed rate offers and account terms across the U.S., spanning multiple categories, and surveyed consumers to deliver a comprehensive, transparent comparison. Data is updated regularly.
                </div>
              </div>
            </div>
            <div className="methodology-datapoint-block Overview-datapoints">
              <div className="w-full px-6 py-8 relative flex flex-col justify-start items-start gap-10 rounded-lg overflow-hidden ai-style-change-9" style={{isolation: 'isolate'}}>
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img className="w-full h-full object-cover" src="/MethodologyImg.png" alt="Background" />
                </div>
                <div className="self-stretch justify-between items-center inline-flex flex-wrap relative z-10">
                  <div className="max-w-[600px] min-w-[272px] text-white text-2xl font-semibold leading-[30px] break-words" style={{fontFamily: 'Work Sans'}}>
                    How We Evaluate Online Banks
                  </div>
                  <div className="justify-end items-start gap-6 flex flex-wrap">
                    <div className="w-[196px] justify-start items-center gap-2 flex">
                      <div className="w-6 h-6 relative">
                        <img src="/Verified1.svg" alt="Verified" className="w-6 h-6" />
                      </div>
                      <div className="flex-1 justify-center items-center flex">
                        <div className="flex-1 justify-center flex flex-col text-white text-sm font-semibold leading-6 break-words" style={{fontFamily: 'Work Sans'}}>
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
                  <div className="flex-1 min-w-[144px] flex-col justify-start items-start gap-3 inline-flex">
                    <div className="self-stretch text-white text-2xl leading-[29px] break-words font-schnyder-bold schnyder-test ai-style-change-10" style={{fontFamily: 'Schnyder S', fontWeight: 700}}>
                      90,024+
                    </div>
                    <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                      <div className="self-stretch text-white text-sm font-semibold leading-6 break-words" style={{fontFamily: 'Work Sans'}}>
                        Datapoints Evaluated
                      </div>
                      <div className="self-stretch text-white text-xs leading-5 break-words" style={{fontFamily: 'Work Sans'}}>
                        Rates, benefits, and policy terms across all 50 states.
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-[144px] flex-col justify-start items-start gap-3 inline-flex">
                    <div className="self-stretch text-white text-2xl leading-[29px] break-words font-schnyder-bold schnyder-test ai-style-change-11" style={{fontFamily: 'Schnyder S', fontWeight: 700}}>
                      2,600
                    </div>
                    <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                      <div className="self-stretch text-white text-sm font-semibold leading-6 break-words" style={{fontFamily: 'Work Sans'}}>
                        Bank Customers Surveyed
                      </div>
                      <div className="self-stretch text-white text-xs leading-5 break-words" style={{fontFamily: 'Work Sans'}}>
                        Surveyed owners on satisfaction, claims, and service experience.
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-[144px] flex-col justify-start items-start gap-3 inline-flex">
                    <div className="self-stretch text-white text-2xl leading-[29px] break-words font-schnyder-bold schnyder-test ai-style-change-12" style={{fontFamily: 'Schnyder S', fontWeight: 700}}>
                      300
                    </div>
                    <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                      <div className="self-stretch text-white text-sm font-semibold leading-6 break-words" style={{fontFamily: 'Work Sans'}}>
                        Breeds Assessed
                      </div>
                      <div className="self-stretch text-white text-xs leading-5 break-words" style={{fontFamily: 'Work Sans'}}>
                        Breed risk profiles used to normalize pricing models.
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-[144px] flex-col justify-start items-start gap-3 inline-flex">
                    <div className="self-stretch text-white text-2xl leading-[29px] break-words font-schnyder-bold schnyder-test ai-style-change-13" style={{fontFamily: 'Schnyder S', fontWeight: 700}}>
                      36
                    </div>
                    <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                      <div className="self-stretch text-white text-sm font-semibold leading-6 break-words" style={{fontFamily: 'Work Sans'}}>
                        Coverage Categories
                      </div>
                      <div className="self-stretch text-white text-xs leading-5 break-words" style={{fontFamily: 'Work Sans'}}>
                        Factors scored across coverage, cost, and service quality.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'methodology':
        return (
          <div className="w-full py-0">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-2 font-work-sans">Read Our Methodology</h2>
              <p className="text-gray-700 mb-4" style={{fontFamily: 'Georgia, serif', fontSize: 18, lineHeight: '30px'}}>
                We evaluate online banks using a data-first model that blends rates, fees and customer experience. We compile rate offers and account terms across major banks, then score categories like APY competitiveness, fee structure, access and product breadth.
              </p>
              <p className="text-gray-700 mb-4" style={{fontFamily: 'Georgia, serif', fontSize: 18, lineHeight: '30px'}}>
                Each bank receives a composite score derived from transparent weights across key factors. We refresh datasets regularly and label tables with data windows so readers can compare options consistently.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-start">
              <div className="flex justify-start pl-0 pr-6">
                <div className="relative">
                  <img src="/Chart2.svg" alt="Forbes Rating Chart" className="w-80 h-80" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-6 font-work-sans">How We Review Providers</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                  <div>
                    <div className="mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{backgroundColor: 'rgb(47, 127, 95)'}}></div>
                        <span className="text-sm font-medium text-gray-600 min-w-[40px] font-work-sans">(35%)</span>
                        <span className="text-sm font-semibold text-gray-900 flex-1 font-work-sans">Price & value</span>
                        <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 flex-shrink-0 font-work-sans">i</div>
                      </div>
                      <hr className="mt-3 border-gray-200" />
                    </div>
                    <div className="mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{backgroundColor: 'rgb(31, 86, 74)'}}></div>
                        <span className="text-sm font-medium text-gray-600 min-w-[40px] font-work-sans">(10%)</span>
                        <span className="text-sm font-semibold text-gray-900 flex-1 font-work-sans">Coverage breadth</span>
                        <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 flex-shrink-0 font-work-sans">i</div>
                      </div>
                      <hr className="mt-3 border-gray-200" />
                    </div>
                    <div className="mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{backgroundColor: 'rgb(90, 155, 213)'}}></div>
                        <span className="text-sm font-medium text-gray-600 min-w-[40px] font-work-sans">(10%)</span>
                        <span className="text-sm font-semibold text-gray-900 flex-1 font-work-sans">Waiting periods</span>
                        <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 flex-shrink-0 font-work-sans">i</div>
                      </div>
                      <hr className="mt-3 border-gray-200" />
                    </div>
                    <div className="mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{backgroundColor: 'rgb(112, 173, 71)'}}></div>
                        <span className="text-sm font-medium text-gray-600 min-w-[40px] font-work-sans">(10%)</span>
                        <span className="text-sm font-semibold text-gray-900 flex-1 font-work-sans">Reimbursement flexibility</span>
                        <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 flex-shrink-0 font-work-sans">i</div>
                      </div>
                      <hr className="mt-3 border-gray-200" />
                    </div>
                    <div className="mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{backgroundColor: 'rgb(165, 213, 232)'}}></div>
                        <span className="text-sm font-medium text-gray-600 min-w-[40px] font-work-sans">(10%)</span>
                        <span className="text-sm font-semibold text-gray-900 flex-1 font-work-sans">Deductible options</span>
                        <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 flex-shrink-0 font-work-sans">i</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{backgroundColor: 'rgb(255, 192, 0)'}}></div>
                        <span className="text-sm font-medium text-gray-600 min-w-[40px] font-work-sans">(5%)</span>
                        <span className="text-sm font-semibold text-gray-900 flex-1 font-work-sans">Claims speed</span>
                        <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 flex-shrink-0 font-work-sans">i</div>
                      </div>
                      <hr className="mt-3 border-gray-200" />
                    </div>
                    <div className="mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{backgroundColor: 'rgb(197, 80, 75)'}}></div>
                        <span className="text-sm font-medium text-gray-600 min-w-[40px] font-work-sans">(5%)</span>
                        <span className="text-sm font-semibold text-gray-900 flex-1 font-work-sans">Customer service</span>
                        <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 flex-shrink-0 font-work-sans">i</div>
                      </div>
                      <hr className="mt-3 border-gray-200" />
                    </div>
                    <div className="mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{backgroundColor: 'rgb(184, 84, 80)'}}></div>
                        <span className="text-sm font-medium text-gray-600 min-w-[40px] font-work-sans">(5%)</span>
                        <span className="text-sm font-semibold text-gray-900 flex-1 font-work-sans">Transparency & exclusions</span>
                        <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 flex-shrink-0 font-work-sans">i</div>
                      </div>
                      <hr className="mt-3 border-gray-200" />
                    </div>
                    <div className="mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{backgroundColor: 'rgb(91, 155, 213)'}}></div>
                        <span className="text-sm font-medium text-gray-600 min-w-[40px] font-work-sans">(5%)</span>
                        <span className="text-sm font-semibold text-gray-900 flex-1 font-work-sans">Vet direct pay</span>
                        <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 flex-shrink-0 font-work-sans">i</div>
                      </div>
                      <hr className="mt-3 border-gray-200" />
                    </div>
                    <div className="mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full flex-shrink-0" style={{backgroundColor: 'rgb(44, 44, 44)'}}></div>
                        <span className="text-sm font-medium text-gray-600 min-w-[40px] font-work-sans">(5%)</span>
                        <span className="text-sm font-semibold text-gray-900 flex-1 font-work-sans">Wellness add-ons</span>
                        <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 flex-shrink-0 font-work-sans">i</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'research':
        return <div className="text-[#383C43] text-lg font-georgia">Data Research content coming soon...</div>;
      case 'team':
        return <div className="text-[#383C43] text-lg font-georgia">Our Team content coming soon...</div>;
      default:
        return null;
    }
  };

  return (
    <>
      <div 
        className={`w-full transition-all duration-500 ease-in-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
      <div className="w-full flex flex-col items-start gap-[27px] pt-[160px] pb-8">
        {/* Back Button */}
        <div className="w-full max-w-none sm:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[90px]">
          <div 
            onClick={onBack}
            className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity"
          >
            <div className="w-6 h-6 relative overflow-hidden flex-shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#203468" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-[#606F7F] text-sm font-normal leading-5" style={{ fontFamily: 'Work Sans' }}>Back to Full Article</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-none sm:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[90px]">
          <main className="col-span-6 sm:col-span-8 md:col-span-10 lg:col-span-12 flex flex-col items-start gap-8 sm:gap-10 md:gap-12 bg-white py-4 sm:py-6 md:py-0 w-full mx-auto">
            <div className="flex flex-col items-start gap-10 w-full">
              {/* Introduction Section */}
              <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 30, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                      <div style={{alignSelf: 'stretch', height: 48, justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 40, fontFamily: 'Schnyder S', fontWeight: '700', lineHeight: '48px', wordWrap: 'break-word'}}>Data Deep‑Dive: Best Online Banks</div>
                      <div style={{alignSelf: 'stretch', color: '#333333', fontSize: 18, fontFamily: 'Georgia', fontWeight: '400', lineHeight: '29.12px', wordWrap: 'break-word'}}>This section shows the dataset behind our 2025 online bank rankings. We analyzed rate offers and account terms across the market, combined with survey data and scoring factors that reflect value, access and service.</div>
                    </div>
                  </div>
                </div>
                {/* Separator */}
                <div style={{width: '100%', height: '1px', background: '#CED4DB'}}></div>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                      <span style={{color: 'black', fontSize: 16, fontFamily: 'Work Sans', fontWeight: '700', lineHeight: '26px', wordWrap: 'break-word'}}>Reviewed by: </span>
                      <span style={{color: 'black', fontSize: 16, fontFamily: 'Work Sans', fontWeight: '400', lineHeight: '26px', wordWrap: 'break-word'}}>Ashlee Valentine, Senior Staff Editor</span>
                    </div>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                      <span style={{color: 'black', fontSize: 16, fontFamily: 'Work Sans', fontWeight: '700', lineHeight: '26px', wordWrap: 'break-word'}}>Data Source: </span>
                      <span style={{color: 'black', fontSize: 16, fontFamily: 'Work Sans', fontWeight: '400', lineHeight: '26px', wordWrap: 'break-word'}}>Forbes Advisor proprietary pricing and satisfaction analysis (Jan-Aug 2025)</span>
                    </div>
                  </div>
                </div>
                {/* Separator */}
                <div style={{width: '100%', height: '1px', background: '#CED4DB'}}></div>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                      <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: 32, fontFamily: 'Schnyder S', fontWeight: '700', lineHeight: '39px', wordWrap: 'break-word'}}>Our Analysis of Value in Online Banks</div>
                      <div style={{alignSelf: 'stretch', color: '#333333', fontSize: 18, fontFamily: 'Georgia', fontWeight: '400', lineHeight: '29.12px', wordWrap: 'break-word'}}>In our value analysis, higher APYs and low fees move banks up, while limited access or narrow product offerings pull them down. The chart below visualizes the tradeoffs between yield and overall access.</div>
                    </div>
                    <img
                      style={{
                        alignSelf: 'stretch',
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain'
                      }}
                      src="/Chart.png"
                      alt="Online Bank Value Analysis Chart"
                    />
                  </div>
                </div>
              </div>
              
              {/* Online Bank Rates Section */}
              <section id="insurance-cost" className="flex flex-col items-start gap-6 mt-6 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <h3 className="text-black text-[24px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold leading-[29px] sm:leading-[29px] md:leading-[29px] lg:leading-[39px] font-schnyder-bold" style={{ fontFamily: 'Work Sans', fontWeight: 700 }}>
                      Online Bank Ratings and Best‑For Categories
                    </h3>
                    <p className="text-[#606f7f] text-base leading-[26px] font-normal tracking-[0]" style={{ fontFamily: 'Work Sans' }}>
                      The table below summarizes ratings and the “best for” category used in our rankings.
                    </p>
                  </div>
                </div>
                <div className="w-full overflow-x-auto">
                  <table className="w-full table-fixed border-separate border-spacing-0 min-w-[800px]">
                    <thead>
                      <tr>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[25%] rounded-tl-[8px]" style={{ borderWidth: '0.25px', borderStyle: 'solid', borderColor: 'rgb(206, 212, 219)', borderTopLeftRadius: '8px' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Provider</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[30%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Rating</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[30%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Best For</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[15%] rounded-tr-[16px]" style={{ borderWidth: '0.25px', borderStyle: 'solid', borderColor: 'rgb(206, 212, 219)', borderTopRightRadius: '16px' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Apply Now</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {COST_DATA.map((row) => (
                        <tr key={row.provider}>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.provider}</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.dogCost}</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.catCost}</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                              <a href={row.applyNowUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="border text-card-foreground flex items-center justify-center h-16 px-4 md:px-[200px] w-full bg-[#ffffffcc] rounded-lg overflow-hidden border-none shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0px_0px_20px_6px_#7d0af825,inset_0_1px_0_rgba(255,255,255,0.50),inset_1px_0_0_rgba(255,255,255,0.40),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.13)]">
                  <button className="whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 flex items-center justify-center gap-2 py-3 px-6 min-h-[48px] transition-all duration-200 hover:gap-3">
                    <span className="text-black text-base leading-6 font-normal" style={{ fontFamily: 'Work Sans' }}>Find me the right option</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-6 h-6">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </section>

              {/* Plan Details Section */}
              <section id="plan-details" className="flex flex-col items-start gap-10 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <h3 className="text-black text-[24px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold leading-[29px] sm:leading-[29px] md:leading-[29px] lg:leading-[39px] font-schnyder-bold" style={{ fontFamily: 'Work Sans', fontWeight: 700 }}>
                      Account Features and Fees
                    </h3>
                    <p className="text-[#606f7f] text-base leading-[26px] font-normal tracking-[0]" style={{ fontFamily: 'Work Sans' }}>
                      Understanding fees, minimums and access options helps you choose the right online bank. Here are the key account details:
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="w-full overflow-x-auto relative">
                    <table className="w-full border-separate border-spacing-0 table-fixed min-w-[1200px] relative">
                      <thead>
                        <tr>
                          <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[10%] rounded-tl-[8px] sticky left-0 z-[1] bg-[#ecf1ff]" style={{ borderWidth: '0.25px', borderStyle: 'solid', borderColor: 'rgb(206, 212, 219)', borderTopLeftRadius: '8px' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Provider</span>
                          </th>
                          <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[13%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                              <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Minimum Balance</span>
                          </th>
                          <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[30%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                              <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Monthly Fee</span>
                          </th>
                          <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[12%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                              <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>ATM Access</span>
                          </th>
                          <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[12%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                              <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Overdraft Policy</span>
                          </th>
                          <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[12%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                              <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Mobile Deposit</span>
                          </th>
                          <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[11%] rounded-tr-[16px] overflow-hidden" style={{ borderWidth: '0.25px', borderStyle: 'solid', borderColor: 'rgb(206, 212, 219)', borderTopRightRadius: '16px' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Apply Now</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {PLAN_DETAILS_DATA.map((row) => (
                          <tr key={row.provider}>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black align-top sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                              <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.provider}</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                              <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.ageRestrictions}</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                              <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.waitingPeriods}</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                              <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.endOfLife}</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                              <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.vetExamFees}</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                              <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.microchipping}</span>
                          </td>
                          <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] align-top" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                                <a href={row.applyNowUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                            </span>
                          </td>
                        </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="border text-card-foreground flex items-center justify-center h-16 px-4 md:px-[200px] w-full bg-[#ffffffcc] rounded-lg overflow-hidden border-none shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0px_0px_20px_6px_#7d0af825,inset_0_1px_0_rgba(255,255,255,0.50),inset_1px_0_0_rgba(255,255,255,0.40),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.13)]">
                    <button className="whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 flex items-center justify-center gap-2 py-3 px-6 min-h-[48px] transition-all duration-200 hover:gap-3">
                      <span className="text-black text-base leading-6 font-normal" style={{ fontFamily: 'Work Sans' }}>Find me the right option</span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-6 h-6">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </section>

              {/* User Opinion Section */}
              <section id="user-opinion" className="flex flex-col items-start gap-6 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <h3 className="text-black text-[24px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold leading-[29px] sm:leading-[29px] md:leading-[29px] lg:leading-[39px] font-schnyder-bold" style={{ fontFamily: 'Work Sans', fontWeight: 700 }}>
                      User Opinion of Online Banks
                    </h3>
                    <p className="text-[#606f7f] text-base leading-[26px] font-normal tracking-[0]" style={{ fontFamily: 'Work Sans' }}>
                      Forbes Advisor collects user sentiment through surveys and feedback analysis. This is how real customers described their experience with leading online banks:
                    </p>
                  </div>
                </div>

                <div className="w-full overflow-x-auto relative">
                  <table className="w-full table-fixed border-separate border-spacing-0 min-w-[1000px] relative">
                    <thead>
                      <tr>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[15%] rounded-tl-[8px] sticky left-0 z-[1] bg-[#ecf1ff]" style={{ borderWidth: '0.25px', borderStyle: 'solid', borderColor: 'rgb(206, 212, 219)', borderTopLeftRadius: '8px' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Provider</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[12%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>CSI Rating</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[18%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>How Likely to Recommend</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[22%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Common Positive Sentiments</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[22%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Common Negative Sentiments</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[11%] rounded-tr-[8px]" style={{ borderWidth: '0.25px', borderStyle: 'solid', borderColor: 'rgb(206, 212, 219)', borderTopRightRadius: '16px' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Apply Now</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {USER_OPINION_DATA.map((row) => (
                        <tr key={row.provider}>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.provider}</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a] font-bold" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.csiRating}</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.likelyToRecommend}</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.positiveComments}</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.negativeComments}</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                              <a href={row.applyNowUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="border text-card-foreground flex items-center justify-center h-16 px-4 md:px-[200px] w-full bg-[#ffffffcc] rounded-lg overflow-hidden border-none shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0px_0px_20px_6px_#7d0af825,inset_0_1px_0_rgba(255,255,255,0.50),inset_1px_0_0_rgba(255,255,255,0.40),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.13)]">
                  <button className="whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 flex items-center justify-center gap-2 py-3 px-6 min-h-[48px] transition-all duration-200 hover:gap-3">
                    <span className="text-black text-base leading-6 font-normal" style={{ fontFamily: 'Work Sans' }}>Find me the right option</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-6 h-6">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </section>

              {/* Claims Feedback Section */}
              <section id="claims-feedback" className="flex flex-col items-start gap-6 pt-10 w-full border-t border-[#CED4DB]">
                <div className="flex flex-col items-start gap-6 w-full">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <h3 className="text-black text-[24px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold leading-[29px] sm:leading-[29px] md:leading-[29px] lg:leading-[39px] font-schnyder-bold" style={{ fontFamily: 'Schnyder S', fontWeight: 700 }}>
                      Customer Support Feedback
                    </h3>
                    <p className="text-[#606f7f] text-base leading-[26px] font-normal tracking-[0]" style={{ fontFamily: 'Work Sans' }}>
                      Forbes Advisor surveyed customers of each online bank to understand support experience and overall satisfaction.
                    </p>
                  </div>
                </div>

                <div className="w-full overflow-x-auto relative">
                  <table className="w-full table-fixed border-separate border-spacing-0 min-w-[800px] relative">
                    <thead>
                      <tr>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[25%] rounded-tl-[8px] sticky left-0 z-[1] bg-[#ecf1ff]" style={{ borderWidth: '0.25px', borderStyle: 'solid', borderColor: 'rgb(206, 212, 219)', borderTopLeftRadius: '8px' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Provider</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[30%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Support Experience</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[30%]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Overall Satisfaction</span>
                        </th>
                        <th className="px-2 py-3 text-left transition-colors duration-200 bg-[#ecf1ff] font-semibold text-[#333333] font-normal text-[#6a6a6a] w-[15%] rounded-tr-[16px]" style={{ borderWidth: '0.25px', borderStyle: 'solid', borderColor: 'rgb(206, 212, 219)', borderTopRightRadius: '16px' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>Apply Now</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {CLAIMS_DATA.map((row) => (
                        <tr key={row.provider}>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-semibold text-black sticky left-0 z-[1] bg-white" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.provider}</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.claimsSatisfaction}</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                            <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>{row.overallSatisfaction}</span>
                        </td>
                        <td className="px-2 py-3 text-left transition-colors duration-200 bg-white hover:bg-[#f8f9fa] font-normal text-[#6a6a6a]" style={{ border: '0.25px solid rgb(206, 212, 219)' }}>
                          <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
                              <a href={row.applyNowUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200">Apply Now</a>
                          </span>
                        </td>
                      </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="border text-card-foreground flex items-center justify-center h-16 px-4 md:px-[200px] w-full bg-[#ffffffcc] rounded-lg overflow-hidden border-none shadow-[0px_0px_16px_4px_#7d0af81f,inset_0_1px_0_rgba(255,255,255,0.40),inset_1px_0_0_rgba(255,255,255,0.32),inset_0_-1px_1px_rgba(0,0,0,0.13),inset_-1px_0_1px_rgba(0,0,0,0.11)] backdrop-blur-[2.0px] backdrop-brightness-[110%] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(0,122,200,0.4)_0%,rgba(255,177,54,0.4)_50%,rgba(220,0,0,0.4)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0px_0px_20px_6px_#7d0af825,inset_0_1px_0_rgba(255,255,255,0.50),inset_1px_0_0_rgba(255,255,255,0.40),inset_0_-1px_1px_rgba(0,0,0,0.15),inset_-1px_0_1px_rgba(0,0,0,0.13)]">
                  <button className="whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 flex items-center justify-center gap-2 py-3 px-6 min-h-[48px] transition-all duration-200 hover:gap-3">
                    <span className="text-black text-base leading-6 font-normal" style={{ fontFamily: 'Work Sans' }}>Find me the right option</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-6 h-6">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </section>

              {/* Methodology Section */}
              <section id="methodology" className="w-full border-t [border-top-style:solid] border-[#CED4DB] flex flex-col pt-16 pb-8">
                <div className="grid grid-cols-12 gap-5">
                  <div className="col-span-12">
                    <header className="mb-8">
                      <h2 className="text-[32px] sm:text-[32px] md:text-[32px] lg:text-[40px] leading-[39px] sm:leading-[39px] md:leading-[39px] lg:leading-[48px]" style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontFamily: 'Schnyder S', fontWeight: 700, wordWrap: 'break-word'}}>
                        How We Found The Best Online Banks
                      </h2>
                    </header>
                    <nav className="w-full overflow-x-auto scrollbar-hide py-2 px-1" style={{scrollbarWidth: 'none'}}>
                      <div className="flex justify-start items-center gap-4 min-w-max">
                        <div 
                          onClick={() => setActiveMethodologyTab('overview')}
                          className={`cursor-pointer h-14 ${activeMethodologyTab === 'overview' ? 'bg-black shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)]' : 'bg-[#FAFAFB] shadow-[0px_0px_0.5px_rgba(0,0,0,0.11)_inset]'} rounded-[40px] justify-center items-center gap-2 flex flex-shrink-0 transition-all duration-300 ease-in-out hover:shadow-[0px_6px_12px_-1px_rgba(0,0,0,0.15)] hover:scale-[1.02] w-[132px]`}
                        >
                          <div className="px-4 py-2">
                            <div className={`text-center ${activeMethodologyTab === 'overview' ? 'text-white' : 'text-[#1D1D1F]'} text-base font-work-sans font-semibold leading-[15px] break-words transition-colors duration-200`}>Overview</div>
                          </div>
                        </div>
                        <div 
                          onClick={() => setActiveMethodologyTab('methodology')}
                          className={`cursor-pointer h-14 ${activeMethodologyTab === 'methodology' ? 'bg-black shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)]' : 'bg-[#FAFAFB] shadow-[0px_0px_0.5px_rgba(0,0,0,0.11)_inset]'} rounded-[28px] flex-col justify-start items-start gap-2 inline-flex flex-shrink-0 transition-all duration-300 ease-in-out hover:bg-[#F0F0F0] hover:shadow-[0px_2px_4px_rgba(0,0,0,0.08)] hover:scale-[1.02] w-[192px]`}
                        >
                          <div className="h-14 px-4 justify-start items-center inline-flex">
                            <div className="justify-start items-center flex">
                              <div className="w-[38px] h-6 pr-[14px] inline-flex flex-col justify-start items-start">
                                <div className="w-6 h-6 flex justify-center items-center">
                                  <img src="/Plus.svg" alt="Plus icon" className="w-6 h-6" />
                                </div>
                              </div>
                              <div className={`text-center justify-center flex flex-col ${activeMethodologyTab === 'methodology' ? 'text-white' : 'text-[#1D1D1F]'} text-sm font-work-sans font-semibold leading-5 break-words`}>Our Methodology</div>
                            </div>
                          </div>
                        </div>
                        <div 
                          onClick={() => setActiveMethodologyTab('research')}
                          className={`cursor-pointer h-14 ${activeMethodologyTab === 'research' ? 'bg-black shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)]' : 'bg-[#FAFAFB] shadow-[0px_0px_0.5px_rgba(0,0,0,0.11)_inset]'} rounded-[28px] flex-col justify-start items-start gap-2 inline-flex flex-shrink-0 transition-all duration-300 ease-in-out hover:bg-[#F0F0F0] hover:shadow-[0px_2px_4px_rgba(0,0,0,0.08)] hover:scale-[1.02] w-[176px]`}
                        >
                          <div className="h-14 px-4 justify-start items-center inline-flex">
                            <div className="justify-start items-center flex">
                              <div className="w-[38px] h-6 pr-[14px] inline-flex flex-col justify-start items-start">
                                <div className="w-6 h-6 flex justify-center items-center">
                                  <img src="/Plus.svg" alt="Plus icon" className="w-6 h-6" />
                                </div>
                              </div>
                              <div className={`text-center justify-center flex flex-col ${activeMethodologyTab === 'research' ? 'text-white' : 'text-[#1D1D1F]'} text-sm font-work-sans font-semibold leading-5 break-words`}>Data Research</div>
                            </div>
                          </div>
                        </div>
                        <div 
                          onClick={() => setActiveMethodologyTab('team')}
                          className={`cursor-pointer h-14 ${activeMethodologyTab === 'team' ? 'bg-black shadow-[0px_4px_8px_-1px_rgba(0,0,0,0.10)]' : 'bg-[#FAFAFB] shadow-[0px_0px_0.5px_rgba(0,0,0,0.11)_inset]'} rounded-[28px] flex-col justify-start items-start gap-2 inline-flex flex-shrink-0 transition-all duration-300 ease-in-out hover:bg-[#F0F0F0] hover:shadow-[0px_2px_4px_rgba(0,0,0,0.08)] hover:scale-[1.02] w-[142px]`}
                        >
                          <div className="h-14 px-4 justify-start items-center inline-flex">
                            <div className="justify-start items-center flex">
                              <div className="w-[38px] h-6 pr-[14px] inline-flex flex-col justify-start items-start">
                                <div className="w-6 h-6 flex justify-center items-center">
                                  <img src="/Plus.svg" alt="Plus icon" className="w-6 h-6" />
                                </div>
                              </div>
                              <div className={`text-center justify-center flex flex-col ${activeMethodologyTab === 'team' ? 'text-white' : 'text-[#1D1D1F]'} text-sm font-work-sans font-semibold leading-5 break-words`}>Our Team</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                  </div>
                </div>
                <div className="grid grid-cols-12 gap-5 mt-8">
                  <div className="col-span-12 min-h-0">
                    <div className="w-full">
                      {renderMethodologyContent()}
                    </div>
                  </div>
                </div>
              </section>

            </div>
          </main>
        </div>
      </div>
    </div>

    {/* Sticky Bottom Button */}
    <div 
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 transition-all duration-300 z-50 ${
        showStickyButton ? 'translate-y-0 opacity-100' : 'translate-y-[200%] opacity-0'
      }`}
    >
      <div 
        onClick={onBack}
        className="cursor-pointer hover:scale-105 transition-transform duration-200"
        style={{
          width: '100%', 
          height: '100%', 
          paddingLeft: 16, 
          paddingRight: 16, 
          paddingTop: 8, 
          paddingBottom: 8, 
          background: 'var(--Color-Background-bg-header, black)', 
          borderRadius: 48, 
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: 10, 
          display: 'inline-flex'
        }}
      >
        <div style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'var(--Color-Background-bg-white, white)', fontSize: 14, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '24px', wordWrap: 'break-word'}}>Back to Article</div>
        <img src="/arrow-down.svg" alt="Arrow" style={{width: 20, height: 20}} />
      </div>
    </div>
    </>
  );
};

