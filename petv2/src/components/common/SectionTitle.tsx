import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  level?: 'h1' | 'h2' | 'h3';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = "", level = 'h2' }) => {
  const getClasses = (level: string) => {
    switch (level) {
      case 'h1':
        return 'text-black text-[40px] sm:text-[40px] md:text-[40px] lg:text-[40px] font-bold leading-[48px] sm:leading-[48px] md:leading-[48px] lg:leading-[48px] font-schnyder-bold';
      case 'h2':
        return 'text-black text-[32px] sm:text-[32px] md:text-[32px] lg:text-[40px] font-bold leading-[39px] sm:leading-[39px] md:leading-[39px] lg:leading-[48px] font-schnyder-bold';
      case 'h3':
        return 'text-black text-[24px] sm:text-[24px] md:text-[24px] lg:text-[32px] font-bold leading-[29px] sm:leading-[29px] md:leading-[29px] lg:leading-[39px] font-schnyder-bold';
      default:
        return 'text-black text-[32px] sm:text-[32px] md:text-[32px] lg:text-[40px] font-bold leading-[39px] sm:leading-[39px] md:leading-[39px] lg:leading-[48px] font-schnyder-bold';
    }
  };

  const Tag = level as keyof JSX.IntrinsicElements;

  return (
    <Tag 
      className={`${getClasses(level)} ${className}`}
      style={{ fontFamily: 'Work Sans', fontWeight: 700 }}
    >
      {children}
    </Tag>
  );
};
