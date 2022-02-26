import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Forecast = createContext();
function ForecastProvider({ children }) {
  const [loading, setloading] = useState(false);
  const [name, setname] = useState("");
  const [category, setcategory] = useState("");
  const [score, setscore] = useState(0);
  const [categoryName, setcategoryName] = useState("");
  const [difficulty, setdifficulty] = useState("");
  const [questions, setquestions] = useState();
  const [index, setindex] = useState(0);
  const [answers, setanswers] = useState(null);
  const history = useHistory();
  const [error, seterror] = useState(false);
  const handlerequest = async () => {
    if (name !== "" && category !== "" && difficulty !== "") {
      setscore(0);
      setloading(true);
      seterror(false);

      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
      );
      setloading(true);
      setquestions(data.results);
      if (data.results.length !== 0) {
        setloading(false);
        history.push("/quiz");
      }
    } else {
      seterror(true);
    }
  };
  useEffect(() => {
    setanswers(
      questions &&
        handleShuffle([
          questions[index].correct_answer,
          ...questions[index].incorrect_answers,
        ])
    );
  }, [index, questions]);
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  return (
    <>
      <Forecast.Provider
        value={{
          name,
          setcategory,
          setdifficulty,
          setname,
          score,
          setscore,
          name,
          category,
          difficulty,
          seterror,
          error,
          handlerequest,
          categoryName,
          setcategoryName,
          questions,
          setindex,
          index,
          answers,
          loading,
          setloading,
          setquestions,
        }}
      >
        {children}
      </Forecast.Provider>
    </>
  );
}
export function Useforecast() {
  return useContext(Forecast);
}

export default ForecastProvider;
