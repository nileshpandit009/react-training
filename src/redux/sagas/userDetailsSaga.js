import { call, put, takeEvery } from "@redux-saga/core/effects";
import { getUserDetails } from "apis/userDetailsApi";
import {
  userDetailsFailure,
  userDetailsSuccess,
} from "../actions/userDetailsAction/actions";
import { USER_DETAILS_CONSTANTS } from "../actions/userDetailsAction/actionTypes";

function* userDetailsRequest(action) {
  try {
    const response = yield call(getUserDetails);
    yield put(userDetailsSuccess({ userDetails: response.data }));
  } catch (e) {
    yield put(userDetailsFailure({ error: e.message }));
  }
}

export function* userDetailsSaga() {
  yield takeEvery(
    USER_DETAILS_CONSTANTS.USER_DETAILS_REQUEST,
    userDetailsRequest
  );
}
