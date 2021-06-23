import { DASHBOARD_CONSTANTS } from "redux/actions/dashboardAction/actionTypes";
import {
  fetchPosts,
  fetchPostsSuccess,
  fetchPostsError,
  fetchPostDetails,
  fetchPostDetailsSuccess,
  fetchPostDetailsError,
  resetPosts,
  resetPostDetails,
} from "../dashboardAction/actions";

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

describe("Test action creators for dashboard actions", () => {
  it("must return FETCH_POSTS action", () => {
    expect(fetchPosts()).toEqual({ type: FETCH_POSTS, payload: undefined });
  });

  it("must return FETCH_POSTS_SUCCESS action", () => {
    const payload = { data: [] };
    expect(fetchPostsSuccess(payload)).toEqual({
      type: FETCH_POSTS_SUCCESS,
      payload,
    });
  });

  it("must return FETCH_POSTS_ERROR action", () => {
    const payload = { error: [] };
    expect(fetchPostsError(payload)).toEqual({
      type: FETCH_POSTS_ERROR,
      payload,
    });
  });

  it("must return FETCH_POST_DETAILS action", () => {
    const payload = { id: 1 };
    expect(fetchPostDetails(payload)).toEqual({
      type: FETCH_POST_DETAILS,
      payload,
    });
  });

  it("must return FETCH_POST_DETAILS_SUCCESS action", () => {
    const payload = { data: {} };
    expect(fetchPostDetailsSuccess(payload)).toEqual({
      type: FETCH_POST_DETAILS_SUCCESS,
      payload,
    });
  });

  it("must return FETCH_POST_DETAILS_ERROR action", () => {
    const payload = { error: {} };
    expect(fetchPostDetailsError(payload)).toEqual({
      type: FETCH_POST_DETAILS_ERROR,
      payload,
    });
  });

  it("must return RESET_POSTS action", () => {
    expect(resetPosts()).toEqual({ type: RESET_POSTS, payload: [] });
  });

  it("must return RESET_POST_DETAILS action", () => {
    expect(resetPostDetails()).toEqual({
      type: RESET_POST_DETAILS,
      payload: {},
    });
  });
});
