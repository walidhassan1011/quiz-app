import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Useforecast } from "../../context/ForecastProvider";
import "./Card.css";
function Card() {
  const history = useHistory();
  const { categoryName, index, setindex, answers, questions } = Useforecast();
  const [score, setscore] = useState(0);
  const [selected, setselected] = useState();
  const [btndisable, setbtndisable] = useState(false);

  function decodeString(str) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = str;
    return textArea.value;
  }
  console.log(questions[index].correct_answer);
  const handlecheck = (answer) => {
    setselected(answer);
    setbtndisable(!btndisable);
    if (answer === questions[index].correct_answer) {
      setscore(score + 1);
    }
  };
  const handleselect = (answer) => {
    console.log(selected);

    if (selected === answer && answer !== questions[index].correct_answer) {
      return "wrong";
    } else if (answer === questions[index].correct_answer) {
      return "right";
    }
  };
  return (
    <div className="card-frame">
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
                <button
                  onClick={() => {
                    handlecheck(answer);
                  }}
                  className={`answer-frame  ${
                    selected && handleselect(answer)
                  }`}
                  key={index}
                  disabled={btndisable}
                >
                  <span>{decodeString(answer)}</span>
                </button>
              );
            })}
        </div>
        <div className="btn-frame">
          <button
            onClick={() => {
              setindex(index + 1);
              setselected();
              setbtndisable(!btndisable);
            }}
          >
            next
          </button>
          <button
            onClick={() => {
              history.push("/");
            }}
          >
            quit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
