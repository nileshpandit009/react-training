import { DASHBOARD_CONSTANTS } from "./actionTypes";

export const resetPosts = (payload) => ({
  type: DASHBOARD_CONSTANTS.RESET_POSTS,
  payload: [],
});

export const resetPostDetails = () => ({
  type: DASHBOARD_CONSTANTS.RESET_POST_DETAILS,
  payload: {},
});
