import signupReducer, { initialState } from "../signupReducer";
import {
  signupRequest,
  signupSuccess,
  signupFailure,
} from "redux/actions/signupAction/actions";

describe("Test signup reducer", () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it("must contain loading state as true", () => {
    const updatedState = { ...state, loading: true };
    expect(signupReducer(state, signupRequest({}))).toEqual(updatedState);
  });

  it("must contain loading state as false and uuid as payload.uuid and success as payload.success", () => {
    const payload = { uuid: "some_uuid_string", success: "success message" };
    const updatedState = {
      ...state,
      uuid: payload.uuid,
      success: payload.success,
      loading: false,
    };
    expect(signupReducer(state, signupSuccess(payload))).toEqual(updatedState);
  });

  it("must contain loading state as false and error as payload.error", () => {
    const payload = { error: "some error message" };
    const updatedState = { ...state, loading: false, error: payload.error };
    expect(signupReducer(state, signupFailure(payload))).toEqual(updatedState);
  });

  it("must get current state on invalid action", () => {
    expect(
      signupReducer(state, { type: "DUMMY_INVALID_ACTION", payload: {} })
    ).toEqual(state);
  });
});
