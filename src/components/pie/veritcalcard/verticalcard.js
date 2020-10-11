import React from "react";
import "../../../../node_modules/react-vis/dist/style.css";
import { RadialChart } from "react-vis";
import "./verticalcard.scss";

function verticalcard(props) {
  let data = props.data;
  return (
    <div className="verticalcard">
      <div className="card">
        <h4>{data.title}</h4>
        <div className="lower">
          <div className="total">
            <h5>{data.first.title}</h5>
            <p>{data.first.des}</p>
          </div>
          <div className="most">
            <h5>{data.second.title}</h5>
            <p>{data.second.des}</p>
          </div>
        </div>
      </div>

      <div className="radial">
        <RadialChart
          width={250}
          height={250}
          data={data.data}
          labelsRadiusMultiplier={0.7}
          labelsStyle={{
            fontSize: 10,
          }}
          colorRange={data.colorRange}
          showLabels
        />
      </div>
    </div>
  );
}

export default verticalcard;
