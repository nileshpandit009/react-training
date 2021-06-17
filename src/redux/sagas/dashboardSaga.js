import { call, put, takeEvery } from "@redux-saga/core/effects";
// import { getAllPosts, getPostById } from "../../apis/postApi";
import { getAllPosts, getPostById } from "apis/postApi";
import {
  fetchPostDetailsError,
  fetchPostDetailsSuccess,
  fetchPostsError,
  fetchPostsSuccess,
} from "redux/actions/dashboardAction/actions";
import { DASHBOARD_CONSTANTS } from "../actions/dashboardAction/actionTypes";

// Worker saga will be fired on FETCH_POSTS actions
function* fetchPosts(action) {
  try {
    const dashboardData = yield call(getAllPosts);
    yield put(fetchPostsSuccess, { posts: dashboardData.data });
  } catch (e) {
    const { response } = e;
    yield put(fetchPostsError, { error: response.data });
  }
}

function* fetchPostDetails(action) {
  try {
    const postDetailsResponse = yield call(getPostById, action.payload.id);
    yield put(fetchPostDetailsSuccess, {
      postDetails: postDetailsResponse.data,
    });
  } catch (e) {
    const { response } = e;
    yield put(fetchPostDetailsError, { error: response.data });
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
