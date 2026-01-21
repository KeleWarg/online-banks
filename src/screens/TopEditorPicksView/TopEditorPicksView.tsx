import React, { useEffect, useState } from 'react';
import { TableCell } from '../../components/common';
import { COST_DATA } from '../../data/insurance-providers';

interface TopEditorPicksViewProps {
  onBack: () => void;
}

export const TopEditorPicksView: React.FC<TopEditorPicksViewProps> = ({ onBack }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('key-details');
  const [showStickyButton, setShowStickyButton] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
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

  return (
    <>
    <div 
      className={`w-full transition-all duration-500 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {/* Container */}
      <div className="w-full flex flex-col items-start gap-[27px] pt-[160px] pb-8">
        {/* Back Button */}
        <div className="w-full max-w-none sm:max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[90px]">
          <div 
            onClick={onBack}
            className="flex items-center gap-1 cursor-pointer hover:opacity-70 transition-opacity"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 7H1M1 7L7 13M1 7L7 1" stroke="#203468" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="text-[#606F7F] text-sm font-normal leading-5" style={{ fontFamily: 'Work Sans' }}>
              Back to Full Article
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full flex flex-col items-center gap-10">
          <div className="w-full max-w-[1080px] px-4 sm:px-6 md:px-8">
            <div style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'inline-flex'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                    <div className="text-[20px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[26px] xs:leading-[30px] sm:leading-[34px] md:leading-[39px] lg:leading-[44px] xl:leading-[48px]" style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontFamily: 'Work Sans', fontWeight: '700'}}>Editorial Picks: Best Credit Cards</div>
                      <div style={{alignSelf: 'stretch', color: '#333333', fontSize: 18, fontFamily: 'Georgia', fontWeight: '400', lineHeight: '29.12px', wordWrap: 'break-word'}}>We analyzed over 85 credit cards from major issuers, comparing the factors that matter most: rewards rates, welcome bonuses, annual fees, travel perks, cash back rates and the overall cardholder experience.<br/>Offers and card details are accurate as of January 9, 2026.</div>
                    </div>
                  </div>
                </div>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                  <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                      <span style={{color: 'black', fontSize: 16, fontFamily: 'Work Sans', fontWeight: '700', lineHeight: '26px', wordWrap: 'break-word'}}>Written by: </span>
                      <span style={{color: 'black', fontSize: 16, fontFamily: 'Work Sans', fontWeight: '400', lineHeight: '26px', wordWrap: 'break-word'}}>Elizabeth Aldrich, Former Staff Writer</span>
                    </div>
                    <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column'}}>
                      <span style={{color: 'black', fontSize: 16, fontFamily: 'Work Sans', fontWeight: '700', lineHeight: '26px', wordWrap: 'break-word'}}>Fact checked by: </span>
                      <span style={{color: 'black', fontSize: 16, fontFamily: 'Work Sans', fontWeight: '400', lineHeight: '26px', wordWrap: 'break-word'}}>Michael Benninger, Staff Editor</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Separator between intro and cards */}
              <div style={{width: '100%', height: '1px', background: '#CED4DB', marginTop: '40px', marginBottom: '40px'}}></div>
              {/* Cards Section */}
              <div style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                {/* Title above carousel */}
                <div className="text-[20px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[26px] xs:leading-[30px] sm:leading-[34px] md:leading-[39px] lg:leading-[44px] xl:leading-[48px]" style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontFamily: 'Work Sans', fontWeight: '700'}}>Here Are The Picks By Our Editors</div>
                <div className="w-full overflow-x-auto [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'stretch', gap: 24, display: 'flex', flexWrap: 'nowrap'}}>
                  {/* Pets Best Card */}
                  <div 
                    className="insurance-plan-card transition-all duration-300 ease-in-out md:hover:scale-105 md:hover:shadow-lg md:hover:border md:hover:border-[#007AC8] cursor-pointer"
                    style={{
                      padding: '12px 8px 8px',
                      position: 'relative',
                      background: '#f8f8fa',
                      overflow: 'hidden',
                      borderRadius: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: '0 0 312px',
                      minWidth: '312px',
                      maxWidth: '312px',
                      minHeight: '480px'
                    }}
                  >
                    <div className="card-content-group flex flex-col flex-grow relative">
                      <div 
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          width: '100%',
                          alignItems: 'flex-start',
                          padding: '12px 16px',
                          position: 'relative',
                          flexGrow: 1,
                          background: 'transparent',
                          borderRadius: '16px',
                          marginTop: '12px'
                        }}
                      >
                        <div className="card-content-wrapper" style={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between'}}>
                          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'flex', minHeight: '84px'}}>
                              <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: '16px', fontFamily: 'Work Sans', fontWeight: '400', textDecoration: 'underline', lineHeight: '26px', wordWrap: 'break-word'}}>
                                Bank5 Connect
                              </div>
                              <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: '20px', fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '26px', wordWrap: 'break-word', whiteSpace: 'pre-line'}}>
                                Best{'\n'}for checking accounts
                              </div>
                            </div>
                            <div style={{alignSelf: 'stretch', color: '#606F7F', fontSize: '16px', fontFamily: 'Work Sans', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>
                              A checking-first pick with savings and CDs alongside core daily banking features.
                            </div>
                          </div>

                          <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', marginTop: '12px'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex', gap: '56px'}}>
                              <div className="transition-all duration-200 md:hover:bg-[#006bb3] md:hover:scale-105 md:hover:border md:hover:border-[#007AC8] cursor-pointer" style={{minWidth: '60px', height: '48px', padding: '9px 16px', background: '#007AC8', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row', color: 'white', fontSize: '18px', fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '30px', whiteSpace: 'nowrap'}}>
                                  Learn More
                  </div>
                </div>

                              <div style={{width: '80px', height: '80px', background: 'white', boxShadow: '0px 8px 16px -3px rgba(0, 0, 0, 0.10)', borderRadius: '8px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '8px', display: 'inline-flex'}}>
                                <img
                                  style={{width: '64px', height: '64px', objectFit: 'contain'}}
                                  alt="Bank5 Connect"
                                  src={bank5ConnectLogo}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Embrace Card */}
                  <div 
                    className="insurance-plan-card transition-all duration-300 ease-in-out md:hover:scale-105 md:hover:shadow-lg md:hover:border md:hover:border-[#007AC8] cursor-pointer"
                    style={{
                      padding: '12px 8px 8px',
                      position: 'relative',
                      background: '#f8f8fa',
                      overflow: 'hidden',
                      borderRadius: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: '0 0 312px',
                      minWidth: '312px',
                      maxWidth: '312px',
                      minHeight: '480px'
                    }}
                  >
                    <div className="card-content-group flex flex-col flex-grow relative">
                      <div 
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          width: '100%',
                          alignItems: 'flex-start',
                          padding: '12px 16px',
                          position: 'relative',
                          flexGrow: 1,
                          background: 'transparent',
                          borderRadius: '16px',
                          marginTop: '12px'
                        }}
                      >
                        <div className="card-content-wrapper" style={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between'}}>
                          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'flex', minHeight: '84px'}}>
                              <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: '16px', fontFamily: 'Work Sans', fontWeight: '400', textDecoration: 'underline', lineHeight: '26px', wordWrap: 'break-word'}}>
                                Quontic Bank
                              </div>
                              <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: '20px', fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '26px', wordWrap: 'break-word', whiteSpace: 'pre-line'}}>
                                Best for{'\n'}high APYs
                              </div>
                            </div>
                            <div style={{alignSelf: 'stretch', color: '#606F7F', fontSize: '16px', fontFamily: 'Work Sans', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>
                              Savings, checking, MMAs and CDs with a focus on strong yields.
                            </div>
                          </div>

                          <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', marginTop: '12px'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex', gap: '56px'}}>
                              <div className="transition-all duration-200 md:hover:bg-[#006bb3] md:hover:scale-105 md:hover:border md:hover:border-[#007AC8] cursor-pointer" style={{minWidth: '60px', height: '48px', padding: '9px 16px', background: '#007AC8', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row', color: 'white', fontSize: '18px', fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '30px', whiteSpace: 'nowrap'}}>
                                  Learn More
                                </div>
                              </div>

                              <div style={{width: '80px', height: '80px', background: 'white', boxShadow: '0px 8px 16px -3px rgba(0, 0, 0, 0.10)', borderRadius: '8px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '8px', display: 'inline-flex'}}>
                                <img
                                  style={{width: '64px', height: '64px', objectFit: 'contain'}}
                                  alt="Quontic Bank"
                                  src={quonticBankLogo}
                                />
                              </div>
                            </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

                  {/* Spot Card */}
                  <div 
                    className="insurance-plan-card transition-all duration-300 ease-in-out md:hover:scale-105 md:hover:shadow-lg md:hover:border md:hover:border-[#007AC8] cursor-pointer"
                    style={{
                      padding: '12px 8px 8px',
                      position: 'relative',
                      background: '#f8f8fa',
                      overflow: 'hidden',
                      borderRadius: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: '0 0 312px',
                      minWidth: '312px',
                      maxWidth: '312px',
                      minHeight: '480px'
                    }}
                  >
                    <div className="card-content-group flex flex-col flex-grow relative">
                      <div 
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          width: '100%',
                          alignItems: 'flex-start',
                          padding: '12px 16px',
                          position: 'relative',
                          flexGrow: 1,
                          background: 'transparent',
                          borderRadius: '16px',
                          marginTop: '12px'
                        }}
                      >
                        <div className="card-content-wrapper" style={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between'}}>
                          <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                            <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'flex', minHeight: '84px'}}>
                              <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: '16px', fontFamily: 'Work Sans', fontWeight: '400', textDecoration: 'underline', lineHeight: '26px', wordWrap: 'break-word'}}>
                                Ally Bank
                              </div>
                              <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: '20px', fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '26px', wordWrap: 'break-word', whiteSpace: 'pre-line'}}>
                                Best for{'\n'}savings tools
                              </div>
                            </div>
                            <div style={{alignSelf: 'stretch', color: '#606F7F', fontSize: '16px', fontFamily: 'Work Sans', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>
                              Savings, checking, MMAs and CDs with tools to automate goals and organize funds.
                            </div>
                          </div>

                          <div style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex', marginTop: '12px'}}>
                            <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex', gap: '56px'}}>
                              <div className="transition-all duration-200 md:hover:bg-[#006bb3] md:hover:scale-105 md:hover:border md:hover:border-[#007AC8] cursor-pointer" style={{minWidth: '60px', height: '48px', padding: '9px 16px', background: '#007AC8', borderRadius: '8px', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                                <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'row', color: 'white', fontSize: '18px', fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '30px', whiteSpace: 'nowrap'}}>
                                  Learn More
                                </div>
            </div>

                              <div style={{width: '80px', height: '80px', background: 'white', boxShadow: '0px 8px 16px -3px rgba(0, 0, 0, 0.10)', borderRadius: '8px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '8px', display: 'inline-flex'}}>
                                <img
                                  style={{width: '64px', height: '64px', objectFit: 'contain'}}
                                  alt="Ally Bank"
                                  src={allyBankLogo}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
                </div>
                </div>
              </div>
              {/* Separator */}
              <div style={{width: '100%', height: '1px', background: '#CED4DB', marginTop: '40px', marginBottom: '40px'}}></div>
              {/* Tabs and Table Section */}
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 40, display: 'flex'}}>
                {/* Title and Description */}
                <div style={{width: '100%', maxWidth: 755, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                <div className="text-[20px] xs:text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[26px] xs:leading-[30px] sm:leading-[34px] md:leading-[39px] lg:leading-[44px] xl:leading-[48px]" style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontFamily: 'Work Sans', fontWeight: '700'}}>Summary of the Best Credit Cards</div>
                  <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: '#606F7F', fontSize: 16, fontFamily: 'Work Sans', fontWeight: '400', lineHeight: '26px', wordWrap: 'break-word'}}>Understanding what each card excels at helps you match the right credit card to your spending habits.</div>
                </div>
                <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'flex'}}>
                  <div style={{width: '100%', maxWidth: 965, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{flex: '1 1 0', overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex', flexWrap: 'wrap'}}>
                      <div 
                        onClick={() => setActiveTab('key-details')}
                        style={{height: 56, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8, background: activeTab === 'key-details' ? 'black' : '#FAFAFB', boxShadow: activeTab === 'key-details' ? '0px 4px 8px -1px rgba(0, 0, 0, 0.10)' : '0px 0px 0.5px rgba(0, 0, 0, 0.11) inset', borderRadius: 40, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex', cursor: 'pointer'}}
                      >
                        <div style={{textAlign: 'center', color: activeTab === 'key-details' ? 'white' : 'var(--color-grey-12, #1D1D1F)', fontSize: activeTab === 'key-details' ? 16 : 14, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: activeTab === 'key-details' ? '15px' : '20px', wordWrap: 'break-word'}}>Key Details</div>
                      </div>
                      <div 
                        onClick={() => setActiveTab('pros-cons')}
                        style={{height: 56, background: activeTab === 'pros-cons' ? 'black' : '#FAFAFB', boxShadow: activeTab === 'pros-cons' ? '0px 4px 8px -1px rgba(0, 0, 0, 0.10)' : '0px 0px 0.5px rgba(0, 0, 0, 0.11) inset', borderRadius: 28, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex', cursor: 'pointer'}}
                      >
                        <div style={{height: 56, paddingLeft: 16, paddingRight: 16, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                          <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: activeTab === 'pros-cons' ? 'white' : 'var(--color-grey-12, #1D1D1F)', fontSize: 14, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '20px', wordWrap: 'break-word'}}>Pros & Cons</div>
                          </div>
                        </div>
                      </div>
                      <div 
                        onClick={() => setActiveTab('additional')}
                        style={{height: 56, background: activeTab === 'additional' ? 'black' : '#FAFAFB', boxShadow: activeTab === 'additional' ? '0px 4px 8px -1px rgba(0, 0, 0, 0.10)' : '0px 0px 0.5px rgba(0, 0, 0, 0.11) inset', borderRadius: 28, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'inline-flex', cursor: 'pointer'}}
                      >
                        <div style={{height: 56, paddingLeft: 16, paddingRight: 16, justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex'}}>
                          <div style={{justifyContent: 'flex-start', alignItems: 'center', display: 'flex'}}>
                            <div style={{textAlign: 'center', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: activeTab === 'additional' ? 'white' : 'var(--color-grey-12, #1D1D1F)', fontSize: 14, fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '20px', wordWrap: 'break-word'}}>Additional Details</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full overflow-x-auto">
                    <table className="w-full table-fixed border-separate border-spacing-0 min-w-[800px]">
                      <thead>
                        <tr>
                          <TableCell isHeader className="w-[25%] rounded-tl-[8px]">Provider</TableCell>
                          <TableCell isHeader className="w-[30%]">Forbes Advisor Rating</TableCell>
                          <TableCell isHeader className="w-[30%]">Best For</TableCell>
                          <TableCell isHeader className="w-[15%] rounded-tr-[16px]">Apply Now</TableCell>
                        </tr>
                      </thead>
                      <tbody>
                        {COST_DATA.map((row, index) => (
                          <tr key={row.provider}>
                            <TableCell isProvider>{row.provider}</TableCell>
                            <TableCell>{row.dogCost}</TableCell>
                            <TableCell>{row.catCost}</TableCell>
                            <TableCell>
                              <a 
                                href={row.applyNowUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-[#007ac8] underline hover:text-[#005a8a] transition-colors duration-200"
                              >
                                Apply Now
                              </a>
                            </TableCell>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                </div>
                </div>
              </div>
            </div>
          </div>
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

