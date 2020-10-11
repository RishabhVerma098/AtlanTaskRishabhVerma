import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeGraph } from "../../store/actions";
import "./boxarray.scss";
import { useMediaQuery } from "react-responsive";
function BoxArray() {
  const dispatch = useDispatch();
  const [ques, setques] = useState([
    {
      id: 0,
      title: "Matches Played",
      description: "Know the the number matches played each season..",
      color: "#19a58a",
      lightColor: "#e7f6f3",
      shadow: "0px 0px 69px -15px rgba(25,165,138,1)",
      selected: true,
    },
    {
      id: 1,
      title: "By Venue ?",
      description: "How many matches are played at each venue ?",
      color: "#ff8c60",
      lightColor: "#fff4f0",
      shadow: " 0px 0px 69px -15px rgba(255,140,96,1)",
      selected: false,
    },
    {
      id: 2,
      title: "In which City !",
      description: "What is the total number of matches played this city ?",
      color: "#fecc8c",
      lightColor: "#fffaf4",
      shadow: "0px 0px 69px -15px rgba(254,204,140,1)",
      selected: false,
    },
    {
      id: 3,
      title: "Active Team ?",
      description: "How many matches are played by each team",
      color: "#d07475",
      lightColor: "#fcf0f0",
      shadow: "0px 0px 69px -15px rgba(208,116,117,1)",
      selected: false,
    },
  ]);

  useEffect(() => {
    dispatch(changeGraph());

    setTimeout(function () {
      dispatch(changeGraph(0));
    }, 1000);
  }, []);

  const changeData = (id) => {
    if (ques[id].selected) {
      return;
    }

    let temp_ques = ques;
    for (let i = 0; i < temp_ques.length; i++) {
      if (temp_ques[i].selected) {
        temp_ques[i].selected = false;
      }
    }

    let temp = temp_ques[id];
    if (!temp.selected) {
      temp.selected = true;
    }

    setques([...temp_ques]);
    dispatch(changeGraph(id));
  };
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1150px)" });
  if (!isTabletOrMobile) {
    return (
      <div className="box-array">
        {ques.map((i) => {
          return (
            <div
              className="box"
              key={i.id}
              onClick={() => changeData(i.id)}
              style={{
                backgroundColor: i.selected ? i.color : "white",
                boxShadow: i.selected
                  ? i.shadow
                  : " 0px 0px 61px -8px rgba(57, 114, 227, 0.15)",
              }}
            >
              <h5 style={{ color: i.selected ? "white" : i.color }}>
                {i.title}
              </h5>
              <hr
                style={{ backgroundColor: i.selected ? "white" : i.lightColor }}
              ></hr>
              <p style={{ color: i.selected ? "white" : i.color }}>
                {i.description}
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="box-array">
        <div className="top">
          {ques.slice(0, 2).map((i) => {
            return (
              <div
                className="box"
                key={i.id}
                onClick={() => changeData(i.id)}
                style={{
                  backgroundColor: i.selected ? i.color : "white",
                  boxShadow: i.selected
                    ? i.shadow
                    : " 0px 0px 61px -8px rgba(57, 114, 227, 0.15)",
                }}
              >
                <h5 style={{ color: i.selected ? "white" : i.color }}>
                  {i.title}
                </h5>
                <hr
                  style={{
                    backgroundColor: i.selected ? "white" : i.lightColor,
                  }}
                ></hr>
                <p style={{ color: i.selected ? "white" : i.color }}>
                  {i.description}
                </p>
              </div>
            );
          })}
        </div>
        <div className="bottom-now">
          {ques.slice(2, 4).map((i) => {
            return (
              <div
                className="box"
                key={i.id}
                onClick={() => changeData(i.id)}
                style={{
                  backgroundColor: i.selected ? i.color : "white",
                  boxShadow: i.selected
                    ? i.shadow
                    : " 0px 0px 61px -8px rgba(57, 114, 227, 0.15)",
                }}
              >
                <h5 style={{ color: i.selected ? "white" : i.color }}>
                  {i.title}
                </h5>
                <hr
                  style={{
                    backgroundColor: i.selected ? "white" : i.lightColor,
                  }}
                ></hr>
                <p style={{ color: i.selected ? "white" : i.color }}>
                  {i.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BoxArray;
