import React from "react";
import Alert from "@mui/material/Alert";
import * as BiIcons from "react-icons/bi";
import "./Error.css";
function Error({ children }) {
  return (
    <div className="error">
      <span>
        <BiIcons.BiErrorCircle />
      </span>
      <p>{children}</p>
    </div>
  );
}

export default Error;
