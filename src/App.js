import React from "react";
import Heading from "./components/heading/heading";
import BoxArray from "./components/boxarray/boxarray";
import BottomContainer from "./components/bottomcontainer/bottomcontainer";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Heading />
      <BoxArray />
      <BottomContainer />
    </div>
  );
}

export default App;
