import React from "react";
import Graph from "./graph/graph";
import "./bottomcontainer.scss";

function BottomContainer() {
  const data = [
    {
      id: 0,

      title: "Neha chowdary tweets..",
      description:
        "Be who U are & say what U feel, because those who mind don’t matter and those who matter don’t mind",
    },
    {
      id: 1,

      title: "Abdul Samad commented on Instagram",
      description: "To Win or To Lose is the Part of Game. Hope for The Best",
    },
    {
      id: 2,

      title: "Dealsshutter on IPL",
      description:
        "Guess The Player Cricket bat and ball? Give Your Answer In The Comment Section Below",
    },
  ];

  return (
    <div className="bottom-container">
      <Graph />
      <div className="news">
        <h5>In News</h5>
        <div className="news-container">
          {data.map((i) => {
            return (
              <React.Fragment>
                <div className="news-block">
                  <div className="right">
                    <h6>{i.title}</h6>
                    <p>{i.description}</p>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BottomContainer;
