import { combineReducers } from "redux";
import dashboardReducer from "./dashboardReducer";
import loginReducer from "./loginReducer";
import { signupReducer } from "./signupReducers";
import userDetailsReducer from "./userDetailsReducer";

export const rootReducer = combineReducers({
  login: loginReducer,
  userDetails: userDetailsReducer,
  dashboard: dashboardReducer,
  signup: signupReducer,
});
