import { DASHBOARD_CONSTANTS } from "../actions/dashboardAction/actionTypes";

const {
  RESET_POSTS,
  RESET_POST_DETAILS,

  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,

  FETCH_POST_DETAILS,
  FETCH_POST_DETAILS_SUCCESS,
  FETCH_POST_DETAILS_ERROR,
} = DASHBOARD_CONSTANTS;

export const dashboardInitialState = {
  postData: [],
  postDetails: {},
  loading: true,
  postsError: {},
  postDetailsError: {},
};

const dashboardReducer = (state = dashboardInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case RESET_POSTS:
      return { ...state, postData: payload };

    case RESET_POST_DETAILS:
      return { ...state, postDetails: payload };

    case FETCH_POSTS:
      return { ...state, loading: true };

    case FETCH_POSTS_SUCCESS:
      return { ...state, postData: payload.posts, loading: false };

    case FETCH_POSTS_ERROR:
      return { ...state, postsError: payload.error, loading: false };

    case FETCH_POST_DETAILS:
      return { ...state, loading: true };

    case FETCH_POST_DETAILS_SUCCESS:
      return { ...state, postDetails: payload.postDetails, loading: false };

    case FETCH_POST_DETAILS_ERROR:
      return { ...state, postDetailsError: payload.error, loading: false };

    default:
      return state;
  }
};

export default dashboardReducer;
