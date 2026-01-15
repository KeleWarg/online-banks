import React, { useState } from "react";
import { GridContainer } from "../../components/ui/grid";
import { EvaluationSection } from "./sections/EvaluationSection/EvaluationSection";

export const Fold = (): JSX.Element => {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <main className="bg-white w-full min-w-[378px] px-0">
      <div className="w-full">
        <div className="flex flex-col py-4">
          <EvaluationSection 
            activeSection={activeSection} 
            setActiveSection={setActiveSection} 
          />
        </div>
      </div>
    </main>
  );
};