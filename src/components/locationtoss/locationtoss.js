import React from "react";
import "./locationtoss.scss";
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  MarkSeries,
  LineSeries,
  XAxis,
  YAxis,
  VerticalBarSeries,
} from "react-vis";
import { location_wise_toss } from "../../temp";
function LocationToss() {
  return (
    <div className="loc-toss">
      <h6>Win rate in each city based on toss wins</h6>
      <XYPlot
        width={1200}
        height={500}
        yDomain={[30, 110]}
        xType="ordinal"
        margin={{ bottom: 100 }}
      >
        <VerticalGridLines />
        <HorizontalGridLines />
        <XAxis tickLabelAngle={-90} />
        <YAxis />

        <VerticalBarSeries data={location_wise_toss} color={"#afdfe3"} />

        <LineSeries
          curve={"curveMonotoneX"}
          data={location_wise_toss}
          style={{ strokeLinejoin: "round" }}
        />
        <MarkSeries data={location_wise_toss} />
      </XYPlot>
    </div>
  );
}

export default LocationToss;
