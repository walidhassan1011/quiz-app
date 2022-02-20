import React from "react";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Categories from "../../helpers/Categories";
import { Useforecast } from "../../context/ForecastProvider";
import "./page.css";
import { useHistory } from "react-router-dom";
import Error from "../error/Error";
import axios from "axios";
function Page() {
  const history = useHistory();
  const {
    setname,
    setcategory,
    setdifficulty,
    name,
    category,
    difficulty,
    seterror,
    error,
    setcategoryName,
    handlerequest,
  } = Useforecast();

  return (
    <section className="main">
      <div className="wrap">
        <div className="head">
          <h1>quiz app</h1>
        </div>
        <div className="form">
          <div className="form-wrap">
            {error && <Error>fill all the inputs</Error>}
            <TextField
              id="outlined-textarea"
              label="Enter your Name"
              multiline
              className="fields"
              onChange={(e) => {
                setname(e.target.value);
              }}
              style={{ marginBottom: 30, marginTop: 40 }}
            />
            <TextField
              id="outlined-select-currency"
              select
              onChange={(e) => {
                setcategoryName(e.target.value);
              }}
              className="fields"
              label="Select"
              helperText="Please select your category"
              style={{ marginBottom: 20 }}
            >
              {Categories.map((option) => (
                <MenuItem
                  key={option.id}
                  onClick={() => {
                    setcategory(option.id);
                  }}
                  value={option.name}
                >
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Select Difficulty"
              variant="outlined"
              style={{ marginBottom: 30 }}
              className="fields"
              onChange={(e) => {
                setdifficulty(e.target.value);
              }}
            >
              <MenuItem key="Easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="Medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="Hard" value="hard">
                Hard
              </MenuItem>
            </TextField>
            <button className="start-btn" onClick={handlerequest}>
              start
            </button>
          </div>
        </div>
      </div>
      <div className="wrap2">
        <div className="image">
          <img
            src="https://raw.githubusercontent.com/piyush-eon/Reactjs-Quiz-App/800cec3ad30b4669df73766564b8b85202f44f41/public/quiz.svg"
            alt=""
          />
        </div>
      </div>
      <div className="gred"></div>
    </section>
  );
}

export default Page;
