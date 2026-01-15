import React from 'react';

interface PieChartSegment {
  value: number;
  color: string;
  label?: string;
}

interface PieChartProps {
  segments: PieChartSegment[];
  size?: number;
  centerText?: string;
  centerTextStyle?: React.CSSProperties;
}

export const PieChart: React.FC<PieChartProps> = ({ 
  segments, 
  size = 300, 
  centerText,
  centerTextStyle 
}) => {
  const radius = size / 2 - 10;
  const centerX = size / 2;
  const centerY = size / 2;
  
  let cumulativePercentage = 0;
  
  const createArcPath = (startAngle: number, endAngle: number) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
      "M", centerX, centerY,
      "L", start.x, start.y, 
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  };
  
  const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {segments.map((segment, index) => {
          const startAngle = cumulativePercentage * 3.6;
          cumulativePercentage += segment.value;
          const endAngle = cumulativePercentage * 3.6;
          
          return (
            <path
              key={index}
              d={createArcPath(startAngle, endAngle)}
              fill={segment.color}
              stroke="white"
              strokeWidth="2"
            />
          );
        })}
      </svg>
      
      {centerText && (
        <div 
          className="absolute inset-0 flex items-center justify-center"
          style={centerTextStyle}
        >
          {centerText}
        </div>
      )}
    </div>
  );
};