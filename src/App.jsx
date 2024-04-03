import { useState } from "react";

import Toggle from "./components/Toggle";
import Card from "./components/Card";
import SpecialCard from "./components/SpecialCard";

const App = () => {

  const [pricing, setPricing] = useState("annually");

  const toggle = () => {
    pricing === "annually" ? setPricing("monthly") : setPricing("annually");
  }

  return (
    <div className="bg-background flex flex-col items-center justify-center font-sans">
      <div className="flex flex-col items-center justify-center">
        <div className="text-text text-lg font-semibold mb-6">Our Pricing</div>
        <Toggle pricing={pricing} toggle={toggle} />
      </div>
    </div>
  );
}

export default App;