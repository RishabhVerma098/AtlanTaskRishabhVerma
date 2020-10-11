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
    </div>
  );
}

export default App;
