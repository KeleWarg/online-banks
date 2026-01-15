import React from "react";

export const CarouselCard2 = (): JSX.Element => {
  return (
    <div 
      className="insurance-plan-card transition-all duration-300 ease-in-out md:hover:scale-105 md:hover:shadow-lg md:hover:border md:hover:border-[#007AC8] cursor-pointer relative"
      style={{
        width: '100%',
        padding: '12px 8px 8px',
        position: 'relative',
        background: '#f8f8fa',
        overflow: 'hidden',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        maxWidth: '312px',
        flexShrink: 0
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
            boxShadow: 'none',
            backdropFilter: 'none',
            marginTop: '12px'
          }}
        >
          <div className="card-content-wrapper" style={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '4px'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'flex', minHeight: '84px'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: '16px', fontFamily: 'Work Sans', fontWeight: '400', textDecoration: 'underline', lineHeight: '26px', wordWrap: 'break-word'}}>
                  Ally Bank
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: '20px', fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '26px', wordWrap: 'break-word', whiteSpace: 'pre-line'}}>
                  Best Online Bank{'\n'}for Savings Tools
                </div>
              </div>
              <div style={{alignSelf: 'stretch', color: '#606F7F', fontSize: '16px', fontFamily: 'Work Sans', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>
                Savings, checking, MMAs and CDs with goal‑based tools and a strong digital experience.
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
                    alt="Ally Bank logo"
                    src="/avatar-placeholder.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="absolute -top-2.5 left-[206px] w-[106px] h-[146px] hidden"
          alt=""
          src="/avatar-placeholder.svg"
        />
      </div>
    </div>
  );
};
