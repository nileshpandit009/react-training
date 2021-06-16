import { SIGNUP_CONSTANTS } from "./actionTypes";

const { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } = SIGNUP_CONSTANTS;

export const signupRequest = (payload) => ({
  type: SIGNUP_REQUEST,
  payload,
});

export const signupSuccess = (payload) => ({
  type: SIGNUP_SUCCESS,
  payload,
});

export const signupFailure = (payload) => ({
  type: SIGNUP_FAILURE,
  payload,
});
