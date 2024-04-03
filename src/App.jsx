import { useState } from "react";

import Toggle from "./components/Toggle";
import Card from "./components/Card";
import SpecialCard from "./components/SpecialCard";

const App = () => {

  const [pricing, setPricing] = useState("annually");
  const [monthly, setMonthly] = useState({
    basic: {
      price: "19.99",
      storage: "500 GB",
      users: 2,
      send: 3,
    },
    professional: {
      price: "24.99",
      storage: "1 TB",
      users: 5,
      send: 10,
    },
    master: {
      price: "39.99",
      storage: "2 TB",
      users: 10,
      send: 20,
    },
  });

  const [annually, setAnnually] = useState({
    basic: {
      price: "199.99",
      storage: "500 GB",
      users: 2,
      send: 3,
    },
    professional: {
      price: "249.99",
      storage: "1 TB",
      users: 5,
      send: 10,
    },
    master: {
      price: "399.99",
      storage: "2 TB",
      users: 10,
      send: 20,
    },
  });

  const toggle = () => {
    pricing === "annually" ? setPricing("monthly") : setPricing("annually");
  }

  return (
    <div className="w-screen min-h-screen
    bg-background text-text py-12
    flex flex-col items-center justify-start font-sans
    md:justify-center
  ">
      <div className="flex flex-col items-center justify-center mb-24">
        <div className="text-text text-lg font-semibold mb-6">Our Pricing</div>
        <Toggle pricing={pricing} toggle={toggle} />
      </div>

      <div className="grid grid-cols-1 gap-4 items-center w-[90%] sm:w-[70%] md:w-[95%] md:grid-cols-3 xl:w-[70%]">
        <Card data={pricing === "annually" ? annually : monthly} type="Basic" />
        <SpecialCard data={pricing === "annually" ? annually : monthly} type="Professional" />
        <Card data={pricing === "annually" ? annually : monthly} type="Master" />
      </div>
    </div>
  );
}

export default App;