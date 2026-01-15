import React from 'react';
import { cn } from '../../lib/utils';

interface GridContainerProps {
  children: React.ReactNode;
  className?: string;
}

interface GridRowProps {
  children: React.ReactNode;
  className?: string;
}

interface GridColProps {
  children: React.ReactNode;
  span?: number;
  spanSm?: number;
  spanMd?: number;
  spanLg?: number;
  spanXl?: number;
  className?: string;
}

export const GridContainer: React.FC<GridContainerProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={cn("w-full max-w-[1440px] mx-auto px-[90px]", className)}>
      {children}
    </div>
  );
};

export const GridRow: React.FC<GridRowProps> = ({ 
  children, 
  className 
}) => {
  return (
    <div className={cn("grid grid-cols-12 gap-5", className)}>
      {children}
    </div>
  );
};

export const GridCol: React.FC<GridColProps> = ({ 
  children, 
  span = 12,
  spanSm,
  spanMd,
  spanLg,
  spanXl,
  className 
}) => {
  const getColClasses = () => {
    const classes = [`col-span-${span}`];
    
    if (spanSm) classes.push(`sm:col-span-${spanSm}`);
    if (spanMd) classes.push(`md:col-span-${spanMd}`);
    if (spanLg) classes.push(`lg:col-span-${spanLg}`);
    if (spanXl) classes.push(`xl:col-span-${spanXl}`);
    
    return classes.join(' ');
  };

  return (
    <div className={cn(getColClasses(), className)}>
      {children}
    </div>
  );
};