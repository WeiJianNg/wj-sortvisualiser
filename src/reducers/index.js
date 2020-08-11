import { combineReducers } from "redux";

import boardReducer from "./boardReducer";
import techniqueReducer from "./techniqueReducer";
import timelineReducer from "./timelineReducer";
import speedReducer from "./speedReducer";
import processReducer from "./processReducer";

export const rootReducers = combineReducers({
  boardState: boardReducer,
  technique: techniqueReducer,
  timeline: timelineReducer,
  speed: speedReducer,
  process: processReducer,
});
