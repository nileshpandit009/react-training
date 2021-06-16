import { LOGIN_CONSTANTS } from "./actionTypes";

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

export const changeEmail = (payload) => ({
  type: EMAIL,
  payload,
});

export const changePassword = (payload) => ({
  type: PASSWORD,
  payload,
});

export const changeEmailErr = (payload) => ({
  type: EMAIL_ERR,
  payload,
});

export const changePasswordErr = (payload) => ({
  type: PASSWORD_ERR,
  payload,
});

export const changeLoginErr = (payload) => ({
  type: LOGIN_ERR,
  payload,
});

export const resetLoginState = () => ({
  type: RESET_LOGIN,
});

export const makeLoginRequest = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});
