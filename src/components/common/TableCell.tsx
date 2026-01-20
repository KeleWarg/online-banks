import React from "react";

interface TableCellProps {
  children: React.ReactNode;
  isHeader?: boolean;
  isProvider?: boolean;
  className?: string;
}

export const TableCell: React.FC<TableCellProps> = ({ 
  children, 
  isHeader = false, 
  isProvider = false, 
  className = "" 
}) => {
  const baseClasses = "px-2 py-3 text-left transition-colors duration-200";
  const headerClasses = isHeader ? "bg-[#ecf1ff] font-semibold text-[#333333]" : "bg-white hover:bg-[#f8f9fa]";
  const providerClasses = isProvider ? "font-semibold text-black" : "font-normal text-[#6a6a6a]";
  
  // Check if this is a corner cell that needs special border handling
  const isTopLeftCorner = className.includes('rounded-tl-');
  const isTopRightCorner = className.includes('rounded-tr-');
  
  const Tag = isHeader ? 'th' : 'td';
  
  // Create border style that respects border-radius for corner cells
  let borderStyle: React.CSSProperties = {};
  
  // Use consistent border color #CED4DB for all table borders
  const borderColor = '#CED4DB';
  const borderWidth = '0.25px';
  
  if (isTopLeftCorner || isTopRightCorner) {
    // For corner cells, we need to be more specific about borders
    borderStyle = {
      borderTop: `${borderWidth} solid ${borderColor}`,
      borderBottom: `${borderWidth} solid ${borderColor}`,
      borderLeft: `${borderWidth} solid ${borderColor}`,
      borderRight: `${borderWidth} solid ${borderColor}`,
      // Ensure border-radius is preserved
      ...(isTopLeftCorner && { borderTopLeftRadius: '8px' }),
      ...(isTopRightCorner && { borderTopRightRadius: '16px' })
    };
  } else {
    // Regular cells use standard border
    borderStyle = {
      border: `${borderWidth} solid ${borderColor}`
    };
  }
  
  return (
    <Tag 
      className={`${baseClasses} ${headerClasses} ${providerClasses} ${className}`}
      style={borderStyle}
    >
      <span className="text-sm leading-[22px]" style={{ fontFamily: 'Work Sans' }}>
        {children}
      </span>
    </Tag>
  );
};
