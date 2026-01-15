import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { GridRow, GridCol } from "../../../../components/ui/grid";

export const TeamSection = (): JSX.Element => {
  const topEditors = [
    {
      image: "/avatar-placeholder.svg",
      name: "Ashlee Valentine",
      title: "Senior Staff Editor",
      vertical: "Banking",
    },
    {
      image: "/avatar-placeholder.svg",
      name: "Dr. Maya Chen, DVM",
      title: "Banking Analyst",
      vertical: "Online Banking",
    },
  ];

  const expertiseItems = [
    "Online bank rates",
    "Fee structures",
    "Account access",
    "Savings tools",
    "Customer satisfaction",
  ];

  return (
    <section className="w-full">
      <GridRow>
        <GridCol span={12}>
          <div className="flex flex-wrap items-center gap-12 mb-8">
            {topEditors.map((editor, index) => (
              <div key={index} className="inline-flex flex-col items-start gap-4">
                <Avatar className="w-[114.3px] h-[123.3px] rounded-full">
                  <AvatarImage
                    src={editor.image}
                    alt="Editor profile"
                    className="object-cover"
                  />
                </Avatar>

                <div className="inline-flex flex-col items-start gap-1.5">
                  <div 
                    className="leading-[16.8px] underline w-fit font-normal text-[#333333] text-sm tracking-[0] whitespace-nowrap"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    {editor.name}
                  </div>

                  <div 
                    className="w-fit font-normal text-[#333333] text-sm leading-[18px] tracking-[0] whitespace-nowrap"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    {editor.title}
                  </div>

                  <div 
                    className="w-fit font-normal text-[#333333] text-sm leading-[18px] tracking-[0] whitespace-nowrap"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    {editor.vertical}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Card className="w-full bg-[#f4f5f8] border-0 p-8">
            <CardContent className="p-8">
              {/* Header section with title and social buttons */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1 flex flex-col gap-2">
                  <h2 
                    className="text-[#333333] text-xl font-semibold leading-[26px]"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    Ashlee Valentine
                  </h2>
                  <div 
                    className="text-[#333333] text-sm font-normal leading-[18px]"
                    style={{ fontFamily: 'Work Sans' }}
                  >
                    Banking
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="px-3 py-2 bg-white border border-[#7a8ec7] rounded"
                  >
                    <img src="/trailing-icon-left.svg" alt="Previous" className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="px-3 py-2 bg-white border border-[#7a8ec7] rounded"
                  >
                    <img src="/trailing-icon-right.svg" alt="Next" className="w-6 h-6" />
                  </Button>
                </div>
              </div>

              {/* Main content grid */}
              <div className="flex justify-between items-start gap-6">
                {/* Left column - Content */}
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex flex-col gap-[18px] mb-4">
                    <p 
                      className="text-[#333333] text-lg leading-[29.12px]"
                      style={{ fontFamily: 'Georgia', fontStyle: 'italic' }}
                    >
                      Ashlee Valentine leads online banking analysis for Forbes Advisor,
                      focusing on rate clarity, fee transparency and real customer experience.
                      Her reporting blends market data with account terms so readers can
                      compare banks with confidence.
                    </p>

                    <p 
                      className="text-[#333333] text-lg leading-[29.12px]"
                      style={{ fontFamily: 'Georgia', fontStyle: 'italic' }}
                    >
                      Her work emphasizes transparent methodology, practical guidance
                      for everyday banking decisions, and consistent scoring criteria to keep
                      annual rankings comparable over time.{" "}
                      <a
                        className="underline cursor-pointer"
                        style={{ fontFamily: 'Georgia', fontStyle: 'normal' }}
                        href="https://www.forbes.com/advisor/about/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Read more
                      </a>
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-wrap">
                    <div 
                      className="text-[#333333] text-sm font-bold leading-6"
                      style={{ fontFamily: 'Work Sans' }}
                    >
                      Expertise:
                    </div>
                    <div className="flex items-start gap-4 flex-wrap">
                      {expertiseItems.map((expertise, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-[5px]"
                        >
                          <div className="w-[18px] h-[17px] relative">
                            <div className="w-[13.5px] h-[12.75px] bg-[#1e2125] absolute left-[2.25px] top-[2.12px]"></div>
                          </div>
                          <div 
                            className="text-[#1e2125] text-xs font-medium leading-[15px]"
                            style={{ fontFamily: 'Work Sans' }}
                          >
                            {expertise}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right column - Image */}
                <img
                  className="w-[362px] h-[294px] object-cover"
                  style={{ boxShadow: '3px 12px 11.3px rgba(0, 0, 0, 0.10)' }}
                  alt="Editor profile"
                  src="/avatar-placeholder.svg"
                />
              </div>
            </CardContent>
          </Card>
        </GridCol>
      </GridRow>
    </section>
  );
};