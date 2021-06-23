import { USER_DETAILS_CONSTANTS } from "./actionTypes";

const {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE,
  RESET_USER_DETAILS,
} = USER_DETAILS_CONSTANTS;

export const fetchUserDetails = (payload) => ({
  type: USER_DETAILS_REQUEST,
  payload,
});

export const userDetailsSuccess = (payload) => ({
  type: USER_DETAILS_SUCCESS,
  payload,
});

export const userDetailsFailure = (payload) => ({
  type: USER_DETAILS_FAILURE,
  payload,
});

export const resetUserDetails = () => ({
  type: RESET_USER_DETAILS,
});
