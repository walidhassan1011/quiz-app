import React, { createContext, useContext, useState } from "react";
const Forecast = createContext();
function ForecastProvider({ children }) {
  const [name, setname] = useState("walid");
  return (
    <>
      <Forecast.Provider value={{ name }}>{children}</Forecast.Provider>
    </>
  );
}
export function Useforecast() {
  return useContext(Forecast);
}

export default ForecastProvider;
