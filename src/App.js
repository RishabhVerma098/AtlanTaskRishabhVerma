import React from "react";
import Heading from "./components/heading/heading";
import BoxArray from "./components/boxarray/boxarray";
import BottomContainer from "./components/bottomcontainer/bottomcontainer";
import Pie from "./components/pie/pie";
import LocationToss from "./components/locationtoss/locationtoss";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Heading />
      <BoxArray />
      <BottomContainer />
      <Pie />
      <LocationToss />
      <div className="footer">
        <img src={require("./assets/images/logo.png")} alt="logo"></img>
        <div className="right">
          <p>By Rishabh verma</p>
          <ul>
            <li>
              <p>Github</p>
              <p>Email</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
