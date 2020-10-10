import React, { useState } from "react";
import "./graph.scss";
import "../../../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineMarkSeries, XAxis, YAxis } from "react-vis";
import { matches_played_data, initial_data } from "../../../temp";
function Graph(params) {
  const [data, setData] = useState(true); //switch this for animation
  return (
    <div className="graph">
      <XYPlot xType="ordinal" height={300} width={900} yDomain={[40, 90]}>
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
  );
}

export default Graph;
