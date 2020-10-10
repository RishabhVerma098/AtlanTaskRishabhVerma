import React from "react";
import "./boxarray.scss";

function BoxArray() {
  const ques = [
    {
      title: "Matches Played",
      description: "Know the the number matches played each season..",
      color: "#19a58a",
      lightColor: "#e7f6f3",
      shadow: "0px 0px 69px -15px rgba(25,165,138,1)",
    },
    {
      title: "By Venue ?",
      description: "How many matches are played at each venue ?",
      color: "#ff8c60",
      lightColor: "#fff4f0",
      shadow: " 0px 0px 69px -15px rgba(255,140,96,1)",
    },
    {
      title: "In which City !",
      description: "What is the total number of matches played this city ?",
      color: "#fecc8c",
      lightColor: "#fffaf4",
      shadow: "0px 0px 69px -15px rgba(254,204,140,1)",
    },
    {
      title: "Active Team ?",
      description: "How many matches are played by each team",
      color: "#d07475",
      lightColor: "#fcf0f0",
      shadow: "0px 0px 69px -15px rgba(208,116,117,1)",
    },
  ];

  return (
    <div className="box-array">
      {ques.map((i) => {
        return (
          <div
            className="box"
            style={{ backgroundColor: i.color, boxShadow: i.shadow }}
          >
            <h5>{i.title}</h5>
            <hr></hr>
            <p>{i.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default BoxArray;
