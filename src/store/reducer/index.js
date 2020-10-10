import { combineReducers } from "redux";
import changeGraph from "./changeGraph";
const rootReducers = combineReducers({
  changeGraph: changeGraph,
});

export default rootReducers;
