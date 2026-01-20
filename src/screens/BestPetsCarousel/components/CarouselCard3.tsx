import React from "react";
import { StarIcon } from "lucide-react";
import bank5ConnectLogo from "../../../assets/brands/banks/bank5-connect.png";

export const CarouselCard3 = (): JSX.Element => {
  return (
    <div 
      className="insurance-plan-card most-popular-card transition-all duration-300 ease-in-out md:hover:scale-105 md:hover:shadow-lg md:hover:border md:hover:border-[#007AC8] cursor-pointer relative"
      style={{
        width: '100%',
        padding: '12px 8px 8px',
        position: 'relative',
        background: 'rgba(243, 192, 96, 0.1)',
        overflow: 'hidden',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        maxWidth: '312px',
        minHeight: '480px',
        flexShrink: 0,
        outline: '2px #F3C060 solid',
        outlineOffset: '-2px',
        backdropFilter: 'blur(2.0px) brightness(110%)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.40), inset 1px 0 0 rgba(255,255,255,0.32), inset 0 -1px 1px rgba(0,0,0,0.13), inset -1px 0 1px rgba(0,0,0,0.11)'
      }}
    >
      <div 
        className="most-popular-title"
        style={{display: 'flex', alignItems: 'flex-start', justifyContent: 'center', gap: '9px', position: 'relative', alignSelf: 'stretch', width: '100%', flex: '0 0 auto', minHeight: '40px'}}
      >
        <StarIcon className="w-6 h-6 text-black" />
        <div style={{position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content', marginTop: '-1px', fontFamily: 'Work Sans', fontWeight: '600', color: 'black', fontSize: '14px', textAlign: 'center', letterSpacing: '0.92px', lineHeight: '20px', whiteSpace: 'nowrap'}}>
          MOST POPULAR
        </div>
      </div>

      <div className="card-content-group flex flex-col flex-grow relative">
        <div 
          className="most-popular-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            alignItems: 'flex-start',
            padding: '12px 16px',
            position: 'relative',
            flexGrow: 1,
            background: 'rgba(255, 255, 255, 0.80)',
            borderRadius: '16px',
            boxShadow: '0px 0px 16px 4px rgba(125, 10, 248, 0.12), inset 0px 1px 0px rgba(255, 255, 255, 0.40), inset 1px 0px 0px rgba(255, 255, 255, 0.32), inset 0px -1px 1px rgba(0, 0, 0, 0.13), inset -1px 0px 1px rgba(0, 0, 0, 0.11)',
            backdropFilter: 'blur(2.0px) brightness(110%)',
            marginTop: '0px'
          }}
        >
          <div className="card-content-wrapper" style={{display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: '4px', display: 'flex', minHeight: 'auto'}}>
                <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: '16px', fontFamily: 'Work Sans', fontWeight: '400', textDecoration: 'underline', lineHeight: '26px', wordWrap: 'break-word'}}>
                  Bank5 Connect
                </div>
                <div style={{alignSelf: 'stretch', justifyContent: 'center', display: 'flex', flexDirection: 'column', color: 'black', fontSize: '20px', fontFamily: 'Work Sans', fontWeight: '600', lineHeight: '26px', wordWrap: 'break-word'}}>
                  Best Online Bank for Checking Accounts
                </div>
              </div>
              <div style={{alignSelf: 'stretch', color: '#606F7F', fontSize: '16px', fontFamily: 'Work Sans', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word'}}>
                Checking, savings and CDs with a checking-first focus and everyday access.
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
        <img
          className="absolute top-1 right-2 w-[85px] h-[91px] hidden"
          alt=""
          src="/shutterstock-2397244269.png"
        />
      </div>
    </div>
  );
};
