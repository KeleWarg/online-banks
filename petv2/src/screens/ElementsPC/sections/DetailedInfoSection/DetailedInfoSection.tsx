import React from "react";
import { MainContentSection } from "../MainContentSection/MainContentSection";
import { PetsBestCard1 } from "../PetsBestSection/PetsBestCard1";
import { PetsBestCard2 } from "../PetsBestSection/PetsBestCard2";
import { PetsBestCard3 } from "../PetsBestSection/PetsBestCard3";
import { PetsBestCard4 } from "../PetsBestSection/PetsBestCard4";
import { PetsBestCard5 } from "../PetsBestSection/PetsBestCard5";
import { PetsBestCard6 } from "../PetsBestSection/PetsBestCard6";
import { ProTipsSection } from "../../../ProTipsSection/ProTipsSection";

export const DetailedInfoSection = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-w-[378px] min-h-screen">
      <div className="w-full">
        <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-5 pt-8 sm:pt-12 md:pt-16">
          <div className="col-span-6 sm:col-span-8 md:col-span-10 lg:col-span-12 flex flex-col gap-10">
            <MainContentSection />
            <div className="flex flex-col gap-12">
              <PetsBestCard1 />
              <PetsBestCard2 />
              <PetsBestCard3 />
              <ProTipsSection />
              <PetsBestCard4 />
              <PetsBestCard5 />
              <PetsBestCard6 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};