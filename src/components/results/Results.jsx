import React from "react";
import { useHistory } from "react-router-dom";
import { Useforecast } from "../../context/ForecastProvider";
import Loading from "../loader/Loading";
import "./Results.css";
function Results() {
  const { score, loading } = Useforecast();
  const history = useHistory();
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <section className="main-results">
          <h1>final score:{score}</h1>
          <button
            onClick={() => {
              history.push("/");
            }}
          >
            try again
          </button>
        </section>
      )}
    </>
  );
}

export default Results;
