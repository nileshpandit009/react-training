import { put, takeEvery } from "@redux-saga/core/effects";
import { loginSaga, makeLoginRequest } from "../loginSaga";
import {
  makeLoginRequest as makeLoginRequestAction,
  loginSuccess,
  loginFailure,
} from "redux/actions/loginAction/actions";
import { LOGIN_CONSTANTS } from "redux/actions/loginAction/actionTypes";

describe("Test login saga", () => {
  let makeLoginRequestGenerator;
  beforeEach(() => {
    const loginPayload = {
      email: "test@example.com",
      password: "test password",
    };
    makeLoginRequestGenerator = makeLoginRequest(
      makeLoginRequestAction(loginPayload)
    );
    const callDescriptor = makeLoginRequestGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it("must call loginSuccess action", () => {
    const response = {
      data: {
        id: 123,
        auth_token: "some auth token",
      },
    };

    const putDescriptor = makeLoginRequestGenerator.next(response).value;
    expect(putDescriptor).toEqual(
      put(loginSuccess({ authToken: response.data.auth_token }))
    );

    expect(makeLoginRequestGenerator.next().done).toBeTruthy();
  });

  it("must call loginFailure action", () => {
    const errResponse = {
      message: "some error message",
    };

    const putDescriptor = makeLoginRequestGenerator.throw(errResponse).value;
    expect(putDescriptor).toEqual(
      put(loginFailure({ error: errResponse.message }))
    );

    expect(makeLoginRequestGenerator.next().done).toBeTruthy();
  });
});

describe("Test login saga watchers", () => {
  let loginSagaItr;
  beforeAll(() => {
    loginSagaItr = loginSaga();
  });

  it("must start task to watch for makeLoginRequest action", () => {
    const takeEveryDescriptor = loginSagaItr.next().value;
    expect(takeEveryDescriptor).toEqual(
      takeEvery(LOGIN_CONSTANTS.LOGIN_REQUEST, makeLoginRequest)
    );
  });
});
