import { combineReducers } from "redux";
import tasks from "./todoReducers";
export const reducers = combineReducers({
  tasks,
});