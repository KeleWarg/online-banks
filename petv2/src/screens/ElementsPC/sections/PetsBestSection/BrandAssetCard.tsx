import React from "react";

interface BrandAssetCardProps {
  logoSrc: string;
  logoAlt: string;
  rating: string;
}

export const BrandAssetCard: React.FC<BrandAssetCardProps> = ({
  logoSrc,
  logoAlt,
  rating,
}) => {
  return (
    <div className="w-full overflow-hidden rounded-[16px] bg-white shadow-[0px_8px_16px_-3px_rgba(0,0,0,0.10)]">
      <div className="h-[200px] bg-white flex items-center justify-center px-6">
        <img
          src={logoSrc}
          alt={logoAlt}
          className="max-h-[120px] w-auto object-contain"
        />
      </div>
      <div className="h-[76px] bg-[#f1f1f1] flex items-center justify-center gap-4">
        <div className="w-12 h-12 rounded-full border-[4px] border-[#F3C060] bg-white flex items-center justify-center">
          <span className="text-[18px] font-bold text-black" style={{ fontFamily: "Work Sans" }}>
            {rating}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[14px] font-semibold text-black" style={{ fontFamily: "Work Sans" }}>
            Forbes Advisor
          </span>
          <span className="text-[14px] font-semibold text-black flex items-center gap-1" style={{ fontFamily: "Work Sans" }}>
            Rating
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="7" stroke="#1D1D1F" strokeWidth="1.2" />
              <line x1="8" y1="7" x2="8" y2="11" stroke="#1D1D1F" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="8" cy="5" r="0.9" fill="#1D1D1F" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
