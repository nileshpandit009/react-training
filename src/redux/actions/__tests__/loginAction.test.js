import { LOGIN_CONSTANTS } from "redux/actions/loginAction/actionTypes";
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

const {
  EMAIL,
  PASSWORD,
  EMAIL_ERR,
  PASSWORD_ERR,
  LOGIN_ERR,
  RESET_LOGIN,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} = LOGIN_CONSTANTS;

describe("Test action creators for login actions", () => {
  it("must return EMAIL action", () => {
    const payload = "email@example.com";
    expect(changeEmail(payload)).toEqual({ type: EMAIL, payload });
  });

  it("must return PASSWORD action", () => {
    const payload = "password";
    expect(changePassword(payload)).toEqual({ type: PASSWORD, payload });
  });

  it("must return EMAIL_ERR action", () => {
    const payload = "Email error message";
    expect(changeEmailErr(payload)).toEqual({ type: EMAIL_ERR, payload });
  });

  it("must return PASSWORD_ERR action", () => {
    const payload = "Password error message";
    expect(changePasswordErr(payload)).toEqual({ type: PASSWORD_ERR, payload });
  });

  it("must return LOGIN_ERR action", () => {
    const payload = "login error message";
    expect(changeLoginErr(payload)).toEqual({ type: LOGIN_ERR, payload });
  });

  it("must return LOGIN_REQUEST action", () => {
    const payload = { username: "test@email.com", password: "test@123" };
    expect(makeLoginRequest(payload)).toEqual({ type: LOGIN_REQUEST, payload });
  });

  it("must return LOGIN_SUCCESS action", () => {
    const payload = { authToken: "some_auth_token" };
    expect(loginSuccess(payload)).toEqual({ type: LOGIN_SUCCESS, payload });
  });

  it("must return LOGIN_FAILURE action", () => {
    const payload = { error: "login failure error message" };
    expect(loginFailure(payload)).toEqual({ type: LOGIN_FAILURE, payload });
  });

  it("must return RESET_LOGIN action", () => {
    expect(resetLoginState()).toEqual({ type: RESET_LOGIN });
  });
});
