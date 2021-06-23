import { combineReducers } from "redux";
import { rootReducer } from "..";
import dashboardReducer from "../dashboardReducer";
import loginReducer from "../loginReducer";
import signupReducer from "../signupReducer";
import userDetailsReducer from "../userDetailsReducer";

describe("Test combineReducer", () => {
  it("must return a combined reducer same as root reducer", () => {
    const combinedReducers = combineReducers({
      login: loginReducer,
      userDetails: userDetailsReducer,
      dashboard: dashboardReducer,
      signup: signupReducer,
    });

    expect(typeof combinedReducers).toBe(typeof rootReducer);
  });
});
