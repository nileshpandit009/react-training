import dashboardReducer, { dashboardInitialState } from "../dashboardReducer";
import {
  fetchPostDetails,
  fetchPostDetailsError,
  fetchPostDetailsSuccess,
  fetchPosts,
  fetchPostsError,
  fetchPostsSuccess,
  resetPostDetails,
  resetPosts,
} from "redux/actions/dashboardAction/actions";

describe("Test dashboard reducer for posts", () => {
  let state;
  beforeEach(() => {
    state = dashboardInitialState;
  });

  it("must contain loading attribute as true", () => {
    const updatedState = { ...state, loading: true };
    expect(dashboardReducer(state, fetchPosts())).toEqual(updatedState);
  });

  it("must contain loading attribute as false and postData as payload", () => {
    const payload = { posts: [] };
    const updatedState = { ...state, postData: payload.posts, loading: false };
    expect(dashboardReducer(state, fetchPostsSuccess(payload))).toEqual(
      updatedState
    );
  });

  it("must contain loading attribute as false and postsError as string", () => {
    const payload = { error: "error message" };
    const updatedState = {
      ...state,
      postsError: payload.error,
      loading: false,
    };
    expect(dashboardReducer(state, fetchPostsError(payload))).toEqual(
      updatedState
    );
  });

  it("must contain postData equal to initial state", () => {
    expect(dashboardReducer(state, resetPosts())).toEqual(state);
  });
});

describe("Test dashboard reducer for post details", () => {
  let state;
  beforeEach(() => {
    state = dashboardInitialState;
  });

  it("must contain loading attribute as true", () => {
    const updatedState = { ...state, loading: true };
    expect(dashboardReducer(state, fetchPostDetails())).toEqual(updatedState);
  });

  it("must contain loading attribute as false and postDetails as payload.posts", () => {
    const payload = { postDetails: {} };
    const updatedState = {
      ...state,
      postDetails: payload.postDetails,
      loading: false,
    };
    expect(dashboardReducer(state, fetchPostDetailsSuccess(payload))).toEqual(
      updatedState
    );
  });

  it("must contain loading attribute as false and postDetailsError as string", () => {
    const payload = { error: "error message" };
    const updatedState = {
      ...state,
      postDetailsError: payload.error,
      loading: false,
    };
    expect(dashboardReducer(state, fetchPostDetailsError(payload))).toEqual(
      updatedState
    );
  });

  it("must contain postDetails equal to initial state", () => {
    expect(dashboardReducer(state, resetPostDetails())).toEqual(state);
  });
});

describe("Test for invalid action passed to reducer", () => {
  let state;
  beforeEach(() => {
    state = dashboardInitialState;
  });

  it("must get current state on invalid action", () => {
    expect(
      dashboardReducer(state, { type: "DUMMY_INVALID_ACTION", payload: {} })
    ).toEqual(state);
  });
});
