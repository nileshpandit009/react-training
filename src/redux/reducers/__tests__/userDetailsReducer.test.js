import userDetailsReducer, { initialState } from "../userDetailsReducer";
import {
  fetchUserDetails,
  userDetailsSuccess,
  userDetailsFailure,
  resetUserDetails,
} from "redux/actions/userDetailsAction/actions";

describe("Test user details reducer", () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it("must contain loading state as true", () => {
    const updatedState = { ...state, loading: true };
    expect(userDetailsReducer(state, fetchUserDetails({}))).toEqual(
      updatedState
    );
  });

  it("must contain loading state as false and userDetails as payload.userDetails", () => {
    const payload = { userDetails: {} };
    const updatedState = {
      ...state,
      userDetails: payload.userDetails,
      error: "",
      loading: false,
    };
    expect(userDetailsReducer(state, userDetailsSuccess(payload))).toEqual(
      updatedState
    );
  });

  it("must contain loading state as false, userDetails as null and error as payload.error", () => {
    const payload = { error: "error message string" };
    const updatedState = {
      ...state,
      userDetails: null,
      error: payload.error,
      loading: false,
    };
    expect(userDetailsReducer(state, userDetailsFailure(payload))).toEqual(
      updatedState
    );
  });

  it("must reset state to initial state", () => {
    expect(userDetailsReducer(state, resetUserDetails())).toEqual(state);
  });

  it("must return currect state on INVALID_ACTION", () => {
    expect(
      userDetailsReducer(state, { type: "DUMMY_INVALID_ACTION", payload: {} })
    ).toEqual(state);
  });
});
