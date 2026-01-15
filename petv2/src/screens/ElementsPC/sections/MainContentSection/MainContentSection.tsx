import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";

export const MainContentSection = (): JSX.Element => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filterOptions = [
    {
      id: "all",
      label: "All Banks (10)",
      icon: "/Plus.svg",
    },
    {
      id: "coverage",
      label: "Best for Checking (3)",
      icon: "/Plus.svg",
    },
    {
      id: "pricing",
      label: "Highest APY (4)",
      icon: "/Plus.svg",
    },
    {
      id: "experience",
      label: "No Fees (4)",
      icon: "/Plus.svg",
    },
  ];

  return (
    <section id="best-providers" className="grid grid-cols-12 gap-5">
      <header className="col-span-12 flex flex-col gap-2">
        <h2 
          className="text-[32px] sm:text-[32px] md:text-[32px] lg:text-[40px] leading-[39px] sm:leading-[39px] md:leading-[39px] lg:leading-[48px]"
          style={{
            color: 'black',
            fontFamily: 'Work Sans',
            fontWeight: '700'
          }}
        >
          The Best Online Banks In Detail
        </h2>
      </header>

      <nav className="col-span-12 flex overflow-x-auto items-center gap-4 scrollbar-hide py-2 px-1" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}>
        {filterOptions.map((option) => (
          <Button
            key={option.id}
            onClick={() => setSelectedFilter(option.id)}
            className={`inline-flex h-14 items-center gap-2 px-4 py-2 rounded-[40px] flex-shrink-0 ${
              selectedFilter === option.id
                ? "bg-black text-white shadow-SEM-shadows-4dp hover:bg-black hover:text-white"
                : "bg-[#fafafb] text-wwwapplecomshark shadow-[inset_0px_0px_0.5px_#0000001c] rounded-[28px]"
            }`}
            variant="ghost"
          >
            {selectedFilter !== option.id && (
              <img
                className="relative w-6 h-6"
                alt="Plus icon"
                src={option.icon}
              />
            )}

            <span className="relative w-fit [font-family:'Work_Sans',Helvetica] font-semibold text-sm text-center tracking-[-0.37px] leading-5 whitespace-nowrap">
              {option.label}
            </span>

            {selectedFilter === option.id && (
              <div className="absolute top-[22px] left-[22px] w-3 h-3 bg-[#1e2125] rounded-md" />
            )}
          </Button>
        ))}
      </nav>
    </section>
  );
};
