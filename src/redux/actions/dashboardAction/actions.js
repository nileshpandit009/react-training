import { DASHBOARD_CONSTANTS } from "./actionTypes";

const {
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,

  FETCH_POST_DETAILS,
  FETCH_POST_DETAILS_SUCCESS,
  FETCH_POST_DETAILS_ERROR,

  RESET_POSTS,
  RESET_POST_DETAILS,
} = DASHBOARD_CONSTANTS;

export const fetchPosts = (payload) => ({
  type: FETCH_POSTS,
  payload,
});

export const fetchPostsSuccess = (payload) => ({
  type: FETCH_POSTS_SUCCESS,
  payload,
});

export const fetchPostsError = (payload) => ({
  type: FETCH_POSTS_ERROR,
  payload,
});

export const fetchPostDetails = (payload) => ({
  type: FETCH_POST_DETAILS,
  payload,
});

export const fetchPostDetailsSuccess = (payload) => ({
  type: FETCH_POST_DETAILS_SUCCESS,
  payload,
});

export const fetchPostDetailsError = (payload) => ({
  type: FETCH_POST_DETAILS_ERROR,
  payload,
});

export const resetPosts = () => ({
  type: RESET_POSTS,
  payload: [],
});

export const resetPostDetails = () => ({
  type: RESET_POST_DETAILS,
  payload: {},
});
