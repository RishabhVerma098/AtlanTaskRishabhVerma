import React from "react";
import "./heading.scss";
function Heading() {
  return (
    <div className="heading">
      <div className="logo">
        <img src={require("../../assets/images/logo.png")} alt="atlan"></img>
      </div>
      <div className="date">
        <p>9 October 2020</p>
      </div>
    </div>
  );
}

export default Heading;
