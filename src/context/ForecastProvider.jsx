import React, { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Forecast = createContext();
function ForecastProvider({ children }) {
  const [name, setname] = useState("");
  const [category, setcategory] = useState("");
  const [categoryName, setcategoryName] = useState("");
  const [difficulty, setdifficulty] = useState("");
  const [questions, setquestions] = useState();
  const [index, setindex] = useState(0);
  const [answers, setanswers] = useState(null);
  const history = useHistory();
  const [error, seterror] = useState(false);
  const handlerequest = async () => {
    if (name !== "" && category !== "" && difficulty !== "") {
      seterror(false);
      console.log(category);
      const { data } = await axios.get(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
      );

      setquestions(data.results);

      history.push("/quiz");
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
