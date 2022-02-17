import React from "react";
import { Useforecast } from "../../context/ForecastProvider";
import "./page.css";
function Page() {
  const { name } = Useforecast();
  return (
    <section className="main">
      <div className="wrap"></div>
    </section>
  );
}

export default Page;
