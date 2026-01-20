import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PetInsuranceComparison } from "./components/PetInsuranceComparison";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <PetInsuranceComparison />
  </StrictMode>,
);
