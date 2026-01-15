import React from "react";
import { PieChart } from "../../../../components/charts/PieChart";

const chartSegments = [
  { value: 35, color: "#2F7F5F" }, // Green
  { value: 10, color: "#1F564A" }, // Dark green
  { value: 10, color: "#5A9BD5" }, // Blue
  { value: 10, color: "#70AD47" }, // Light green
  { value: 10, color: "#A5D5E8" }, // Light blue
  { value: 5, color: "#FFC000" }, // Yellow
  { value: 5, color: "#C5504B" }, // Red
  { value: 5, color: "#B85450" }, // Dark red
  { value: 5, color: "#5B9BD5" }, // Blue
  { value: 5, color: "#2C2C2C" }, // Dark gray
];

const leftColumnLegendItems = [
  {
    color: "#2F7F5F",
    percentage: "35%",
    label: "Price & value",
  },
  {
    color: "#1F564A",
    percentage: "10%",
    label: "Coverage breadth",
  },
  {
    color: "#5A9BD5",
    percentage: "10%",
    label: "Waiting periods",
  },
  {
    color: "#70AD47",
    percentage: "10%",
    label: "Reimbursement flexibility",
  },
  {
    color: "#A5D5E8",
    percentage: "10%",
    label: "Deductible options",
  },
];

const rightColumnLegendItems = [
  {
    color: "#FFC000",
    percentage: "5%",
    label: "Claims speed",
  },
  {
    color: "#C5504B",
    percentage: "5%",
    label: "Customer service",
  },
  {
    color: "#B85450",
    percentage: "5%",
    label: "Transparency & exclusions",
  },
  {
    color: "#5B9BD5",
    percentage: "5%",
    label: "Vet direct pay",
  },
  {
    color: "#2C2C2C",
    percentage: "5%",
    label: "Wellness add-ons",
  },
];

const LegendItem: React.FC<{ color: string; percentage: string; label: string; showSeparator?: boolean }> = ({ 
  color, 
  percentage, 
  label,
  showSeparator = true
}) => (
  <div className="mb-3">
    <div className="flex items-center gap-3">
      <div 
        className="w-3 h-3 rounded-full flex-shrink-0" 
        style={{ backgroundColor: color }}
      />
      <span className="text-sm font-medium text-gray-600 min-w-[40px] font-work-sans">
        ({percentage})
      </span>
      <span className="text-sm font-semibold text-gray-900 flex-1 font-work-sans">
        {label}
      </span>
      <div className="w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-xs text-gray-600 flex-shrink-0 font-work-sans">
        i
      </div>
    </div>
    {showSeparator && <hr className="mt-3 border-gray-200" />}
  </div>
);

export const RatingsSection = (): JSX.Element => {
  return (
    <div className="w-full py-0">
      {/* Header Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-2 font-work-sans">
          Read Our Methodology
        </h2>
        <p className="text-gray-700 mb-4" style={{ fontFamily: 'Georgia, serif', fontSize: '18px', lineHeight: '30px' }}>
          We evaluate online banks with a data-first model that blends rates, fees and real-user feedback. We compile rate offers and account terms across major banks, then score core categories such as APY competitiveness, fee structure, account access, and product breadth.
        </p>
        <p className="text-gray-700 mb-4" style={{ fontFamily: 'Georgia, serif', fontSize: '18px', lineHeight: '30px' }}>
          Each bank receives a composite score derived from transparent weights across key factors. We refresh datasets regularly and label tables with data windows so readers can compare options consistently.
        </p>
      </div>

      {/* Chart and Legend Section */}
      <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-start">
        {/* Chart */}
        <div className="flex justify-start pl-0 pr-6">
          <div className="relative">
            <img
              src="/Chart2.svg"
              alt="Forbes Rating Chart"
              className="w-80 h-80"
            />
          </div>
        </div>

        {/* Legend */}
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-6 font-work-sans">
            How We Review Providers
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            {/* Left Column */}
            <div>
              {leftColumnLegendItems.map((item, index) => (
                <LegendItem 
                  key={`left-${index}`}
                  color={item.color}
                  percentage={item.percentage}
                  label={item.label}
                  showSeparator={index !== leftColumnLegendItems.length - 1}
                />
              ))}
            </div>

            {/* Right Column */}
            <div>
              {rightColumnLegendItems.map((item, index) => (
                <LegendItem 
                  key={`right-${index}`}
                  color={item.color}
                  percentage={item.percentage}
                  label={item.label}
                  showSeparator={index !== rightColumnLegendItems.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};