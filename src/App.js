import React, { useState } from "react";
import Heading from "./components/heading/heading";
import BoxArray from "./components/boxarray/boxarray";
import "./App.scss";
import "../node_modules/react-vis/dist/style.css";
import { XYPlot, LineMarkSeries, XAxis, YAxis } from "react-vis";
import { matches_played_data, initial_data } from "./temp";
function App() {
  const [data, setData] = useState(true); //switch this for animation

  return (
    <div className="App">
      <Heading />
      <BoxArray />
      <div className="bottom-container">
        <div className="graph">
          <XYPlot xType="ordinal" height={300} width={600} yDomain={[40, 90]}>
            <LineMarkSeries
              animation
              data={data ? matches_played_data : initial_data}
              curve={"curveMonotoneX"}
              style={{
                strokeWidth: "3px",
              }}
              lineStyle={{ stroke: "#e7f6f3" }}
              markStyle={{ stroke: "#19a58a" }}
            />
            <XAxis title="year" />
            <YAxis title="no. of matches played" />
          </XYPlot>
        </div>
        <div className="news"></div>
      </div>
    </div>
  );
}

export default App;
