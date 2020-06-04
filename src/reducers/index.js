import { combineReducers } from "redux";
import formResourceReducer from "./formResourceReducer";
import mainReducer from "./mainReducer";

export default combineReducers({
    formResourceReducer: formResourceReducer,
    mainReducer: mainReducer,
  });