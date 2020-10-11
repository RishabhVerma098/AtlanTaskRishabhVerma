import React, { useEffect } from "react";
import "./graph.scss";
import "../../../../node_modules/react-vis/dist/style.css";
import { XYPlot, LineMarkSeries, XAxis, YAxis } from "react-vis";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
function Graph() {
  const isTabletOrMobile1 = useMediaQuery({ query: "(max-width: 1315px)" });
  const isTabletOrMobile2 = useMediaQuery({ query: "(max-width: 1150px)" });
  const isTabletOrMobile3 = useMediaQuery({ query: "(max-width: 949px)" });
  const isTabletOrMobile4 = useMediaQuery({ query: "(max-width: 850px)" });
  const isTabletOrMobile5 = useMediaQuery({ query: "(max-width: 500px)" });
  const data = useSelector((state) => state.changeGraph);

  if (data !== null) {
    return (
      <div className="graph">
        <XYPlot
          xType="ordinal"
          height={isTabletOrMobile5 ? 500 : 600}
          width={
            isTabletOrMobile1
              ? isTabletOrMobile2
                ? isTabletOrMobile3
                  ? isTabletOrMobile4
                    ? isTabletOrMobile5
                      ? 350
                      : 400
                    : 800
                  : 500
                : 700
              : 900
          }
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
