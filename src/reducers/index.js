import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";

import { alert } from "./alert.reducer";

import { menu } from "./togglemenu.reducer";

const rootReducer = combineReducers({
  authentication,
  alert,
  menu,
});

export default rootReducer;
