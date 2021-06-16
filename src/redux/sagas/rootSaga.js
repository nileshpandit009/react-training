import { all } from "@redux-saga/core/effects";
import { fetchPostsSaga, fetchPostDetailsSaga } from "./dashboardSaga";
import { loginSaga } from "./loginSaga";
import { signupSaga } from "./signupSaga";
import { userDetailsSaga } from "./userDetailsSaga";

export default function* rootSaga() {
  yield all([
    fetchPostsSaga(),
    fetchPostDetailsSaga(),
    loginSaga(),
    userDetailsSaga(),
    signupSaga(),
  ]);
}
