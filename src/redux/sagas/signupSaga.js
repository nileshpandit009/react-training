import { call, put, takeEvery } from "@redux-saga/core/effects";
import { doSignup } from "apis/signupApi";
import {
  signupFailure,
  signupSuccess,
} from "redux/actions/signupAction/actions";
import { SIGNUP_CONSTANTS } from "redux/actions/signupAction/actionTypes";

function* makeSignupRequest(action) {
  const { formData } = action.payload;
  try {
    const response = yield call(doSignup, formData);
    yield put(
      signupSuccess({
        success: "User registration successful!",
        uuid: response.data.uuid,
      })
    );
  } catch (e) {
    const { response } = e;
    yield put(signupFailure({ error: response.data._error_message }));
  }
}

export function* signupSaga() {
  yield takeEvery(SIGNUP_CONSTANTS.SIGNUP_REQUEST, makeSignupRequest);
}
