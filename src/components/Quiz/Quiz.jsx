import React from "react";
import { Useforecast } from "../../context/ForecastProvider";
import Card from "../Card/Card";
import "./Quiz.css";
import Loading from "../loader/Loading";
function Quiz() {
  const { name, answers, loading } = Useforecast();

  return (
    <section className="main2">
      <div className="wrap3">
        <h1 className="name">Hi,{name}</h1>
        {loading && <Loading />}

        {answers && <Card />}
      </div>
    </section>
  );
}

export default Quiz;
