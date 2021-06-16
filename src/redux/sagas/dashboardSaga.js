import { call, put, takeEvery } from "@redux-saga/core/effects";
// import { getAllPosts, getPostById } from "../../apis/postApi";
import { getAllPosts, getPostById } from "apis/postApi";
import { DASHBOARD_CONSTANTS } from "../actions/dashboardAction/actionTypes";

// Worker saga will be fired on FETCH_POSTS actions
function* fetchPosts(action) {
  try {
    const dashboardData = yield call(getAllPosts);
    yield put({
      type: DASHBOARD_CONSTANTS.FETCH_POSTS_SUCCESS,
      payload: { posts: dashboardData.data },
    });
  } catch (e) {
    yield put({
      type: DASHBOARD_CONSTANTS.FETCH_POSTS_ERROR,
      payload: { error: e.message },
    });
  }
}

function* fetchPostDetails(action) {
  try {
    const postDetailsResponse = yield call(getPostById, action.payload.id);
    yield put({
      type: DASHBOARD_CONSTANTS.FETCH_POST_DETAILS_SUCCESS,
      payload: { postDetails: postDetailsResponse.data },
    });
  } catch (e) {
    yield put({
      type: DASHBOARD_CONSTANTS.FETCH_POST_DETAILS_ERROR,
      payload: { error: e.message },
    });
  }
}

// Starts fetchDashboardData on each dispatched FETCH_POSTS action
// Allows concurrent fetches of posts
export function* fetchPostsSaga() {
  yield takeEvery(DASHBOARD_CONSTANTS.FETCH_POSTS, fetchPosts);
}

export function* fetchPostDetailsSaga() {
  yield takeEvery(DASHBOARD_CONSTANTS.FETCH_POST_DETAILS, fetchPostDetails);
}
