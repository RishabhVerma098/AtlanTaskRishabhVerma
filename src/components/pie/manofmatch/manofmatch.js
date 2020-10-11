import React, { useEffect, useState } from "react";
import "./manofmatch.scss";
import { player_of_the_match } from "../../../temp";
function ManOfMatch() {
  let data = player_of_the_match;

  const [time, setTime] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTime(false);
    }, 1000);
  }, []);

  return (
    <div className="man_of_match">
      <h4>Man Of Match</h4>
      {data.map((i) => {
        return (
          <div className="block">
            <div className="title">
              <p>{i.x}</p>
              <p>{i.y}</p>
            </div>
            <div className="contain" style={{ backgroundColor: i.color[1] }}>
              <div
                className="bar"
                style={{
                  width: time ? "10%" : `${(i.y / 20) * 100}%`,
                  backgroundColor: i.color[0],
                }}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ManOfMatch;
