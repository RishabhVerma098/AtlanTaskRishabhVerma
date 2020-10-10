import React from "react";
import Graph from "./graph/graph";
import "./bottomcontainer.scss";

function BottomContainer() {
  return (
    <div className="bottom-container">
      <Graph />
      <div className="news"></div>
    </div>
  );
}

export default BottomContainer;
