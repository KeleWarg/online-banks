import React from "react";

interface SectionDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const SectionDescription: React.FC<SectionDescriptionProps> = ({ 
  children, 
  className = "" 
}) => (
  <p 
    className={`text-[#333333] text-[18px] leading-[29.12px] font-normal tracking-[0] ${className}`}
    style={{ fontFamily: 'Georgia' }}
  >
    {children}
  </p>
);
