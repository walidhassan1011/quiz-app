import React from "react";
import { Useforecast } from "../../context/ForecastProvider";
import Card from "../Card/Card";
import "./Quiz.css";
function Quiz() {
  const { name, answers } = Useforecast();

  return (
    <section className="main2">
      <div className="wrap3">
        <h1>Hi,{name}</h1>
        {answers && <Card />}
      </div>
    </section>
  );
}

export default Quiz;
