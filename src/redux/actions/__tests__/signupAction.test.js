import { SIGNUP_CONSTANTS } from "redux/actions/signupAction/actionTypes";
import {
  signupFailure,
  signupRequest,
  signupSuccess,
} from "redux/actions/signupAction/actions";

const { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } = SIGNUP_CONSTANTS;

describe("Test action creators for signup actions", () => {
  it("must return SIGNUP_REQUEST action", () => {
    const payload = {
      name: "some name",
      email: "someone@example.com",
      password: "password",
      acceptedTerms: true,
    };
    expect(signupRequest(payload)).toEqual({ type: SIGNUP_REQUEST, payload });
  });

  it("must return SIGNUP_SUCCESS action", () => {
    const payload = { data: {} };
    expect(signupSuccess(payload)).toEqual({ type: SIGNUP_SUCCESS, payload });
  });

  it("must return SIGNUP_FAILURE action", () => {
    const payload = { error: {} };
    expect(signupFailure(payload)).toEqual({ type: SIGNUP_FAILURE, payload });
  });
});
