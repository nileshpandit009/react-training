import { call, put, takeEvery } from "@redux-saga/core/effects";
import { doLogin } from "apis/loginApi";
import { loginFailure, loginSuccess } from "../actions/loginAction/actions";
import { LOGIN_CONSTANTS } from "../actions/loginAction/actionTypes";

function* makeLoginRequest(action) {
  const { email, password } = action.payload;
  try {
    const userData = yield call(doLogin, email, password);

    localStorage.setItem(
      "user",
      JSON.stringify({
        id: userData.data.id,
        auth_token: userData.data.auth_token,
      })
    );
    yield put(loginSuccess({ authToken: userData.data.auth_token }));
  } catch (e) {
    localStorage.removeItem("user");
    yield put(loginFailure({ error: e.message }));
  }
}

export function* loginSaga() {
  yield takeEvery(LOGIN_CONSTANTS.LOGIN_REQUEST, makeLoginRequest);
}
