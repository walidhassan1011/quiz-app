import React, { useState } from "react";
import { Useforecast } from "../../context/ForecastProvider";
import "./Card.css";
function Card() {
  const { categoryName, index, setindex, answers, questions } = Useforecast();
  const [score, setscore] = useState(0);
  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }
  return (
    <div className="card-frame">
      <button
        onClick={() => {
          setindex(index + 1);
        }}
      >
        fff
      </button>
      <h1>question number:{index + 1}</h1>
      <div className="score-category">
        <span>score:{score}</span>
        <span>{categoryName}</span>
      </div>
      <div className="question-frame">
        <div className="question">
          <span>{questions && decodeString(questions[index].question)}</span>
        </div>
        <div className="answers">
          {answers &&
            answers.map((answer, index) => {
              return (
                <div className="answer-frame" key={index}>
                  <span>{decodeString(answer)}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Card;
