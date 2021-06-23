import loginReducer, { initialState } from "../loginReducer";
import {
  changeEmail,
  changePassword,
  changeEmailErr,
  changePasswordErr,
  changeLoginErr,
  resetLoginState,
  makeLoginRequest,
  loginSuccess,
  loginFailure,
} from "redux/actions/loginAction/actions";

describe("Test login reducer", () => {
  let state;
  beforeEach(() => {
    state = initialState;
  });

  it("must change email state to contents of payload", () => {
    const payload = "email@example.com";
    const updatedState = { ...state, email: payload };
    expect(loginReducer(state, changeEmail(payload))).toEqual(updatedState);
  });

  it("must change password state to contents of payload", () => {
    const payload = "password";
    const updatedState = { ...state, password: payload };
    expect(loginReducer(state, changePassword(payload))).toEqual(updatedState);
  });

  it("must change emailErr state to contents of payload", () => {
    const payload = "email error message";
    const updatedState = { ...state, emailErr: payload };
    expect(loginReducer(state, changeEmailErr(payload))).toEqual(updatedState);
  });

  it("must change passwordErr state to contents of payload", () => {
    const payload = "password error message";
    const updatedState = { ...state, passwordErr: payload };
    expect(loginReducer(state, changePasswordErr(payload))).toEqual(
      updatedState
    );
  });

  it("must change loginErr state to contents of payload", () => {
    const payload = "login error message";
    const updatedState = { ...state, loginErr: payload };
    expect(loginReducer(state, changeLoginErr(payload))).toEqual(updatedState);
  });

  it("must change loading state to true", () => {
    const updatedState = { ...state, loading: true };
    expect(loginReducer(state, makeLoginRequest())).toEqual(updatedState);
  });

  it("must change loading state to false and authToken to contents of payload and loginErr to empty string", () => {
    const payload = { authToken: "auth_token_string" };
    const updatedState = {
      ...state,
      authToken: payload.authToken,
      loginErr: "",
      loading: false,
    };
    expect(loginReducer(state, loginSuccess(payload))).toEqual(updatedState);
  });

  it("must change loading state to false and loginErr contents of payload.error", () => {
    const payload = { error: "login error message" };
    const updatedState = { ...state, loginErr: payload.error, loading: false };
    expect(loginReducer(state, loginFailure(payload))).toEqual(updatedState);
  });

  it("must reset the state to initial state", () => {
    expect(loginReducer(state, resetLoginState())).toEqual(state);
  });

  it("must get current state on invalid action", () => {
    expect(
      loginReducer(state, { type: "DUMMY_INVALID_ACTION", payload: {} })
    ).toEqual(state);
  });
});
