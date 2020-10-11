import React from "react";
import VerticalCard from "./veritcalcard/verticalcard";
import ManOfMatch from "./manofmatch/manofmatch";
import { matches_win_by_team_data, toss_win } from "../../temp";
import "./pie.scss";
function Pie() {
  return (
    <div className="pie">
      <VerticalCard data={matches_win_by_team_data} />
      <VerticalCard data={toss_win} />
      <ManOfMatch />
    </div>
  );
}

export default Pie;
