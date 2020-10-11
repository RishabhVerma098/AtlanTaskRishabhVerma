import React, { useEffect } from "react";
import "./graph.scss";
import "../../../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineMarkSeries, XAxis, YAxis } from "react-vis";
import { useSelector } from "react-redux";
function Graph() {
  const data = useSelector((state) => state.changeGraph);
  // useEffect(() => {
  //   window.scrollTo(0, 250);
  // }, [data]);
  if (data !== null) {
    return (
      <div className="graph">
        <XYPlot
          xType="ordinal"
          height={600}
          width={900}
          yDomain={data.yDomain}
          margin={{ bottom: "300" }}
        >
          <LineMarkSeries
            animation
            data={data.data}
            curve={"curveMonotoneX"}
            style={{
              strokeWidth: "3px",
            }}
            lineStyle={{ stroke: data.color[1] }}
            markStyle={{ stroke: data.color[0], fill: data.color[0] }}
          />

          <XAxis
            title={data.label[0]}
            tickLabelAngle={data.angle === 1 ? -90 : 0}
          />
          <YAxis title={data.label[1]} />
        </XYPlot>
      </div>
    );
  } else {
    return null;
  }
}

export default Graph;
