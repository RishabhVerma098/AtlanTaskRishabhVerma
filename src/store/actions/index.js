import {
  matches_played_data,
  matches_at_city_data,
  matches_at_each_venue_data,
  matches_played_by_team_data,
  initial_data,
  toss_win,
  matches_win_by_team_data,
} from "../../temp";

export const changeGraph = (id) => {
  switch (id) {
    case 0:
      return {
        type: "CHANGE_GRAPH",
        payload: matches_played_data,
      };

    case 1:
      return {
        type: "CHANGE_GRAPH",
        payload: matches_at_each_venue_data,
      };

    case 2:
      return {
        type: "CHANGE_GRAPH",
        payload: matches_at_city_data,
      };

    case 3:
      return {
        type: "CHANGE_GRAPH",
        payload: matches_played_by_team_data,
      };

    default:
      return {
        type: "CHANGE_GRAPH",
        payload: initial_data,
      };
  }
};
