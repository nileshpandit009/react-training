import { put, takeEvery } from "@redux-saga/core/effects";
import {
  signupFailure,
  signupRequest,
  signupSuccess,
} from "redux/actions/signupAction/actions";
import { SIGNUP_CONSTANTS } from "redux/actions/signupAction/actionTypes";
import { makeSignupRequest, signupSaga } from "../signupSaga";

describe("Test signup saga", () => {
  let makeSignupRequestGenerator;
  beforeEach(() => {
    const payload = {
      formData: {},
    };
    makeSignupRequestGenerator = makeSignupRequest(signupRequest(payload));
    const callDescriptor = makeSignupRequestGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it("must call signupSuccess action", () => {
    const response = {
      data: {
        success: "User registration successful!",
        uuid: "some uuid for user object",
      },
    };

    const putDescriptor = makeSignupRequestGenerator.next(response).value;

    expect(putDescriptor).toEqual(
      put(
        signupSuccess({
          success: "User registration successful!",
          uuid: response.data.uuid,
        })
      )
    );

    expect(makeSignupRequestGenerator.next().done).toBeTruthy();
  });

  it("must call signupFailure action", () => {
    const errResponse = {
      status: 400,
      response: {
        data: {
          _error_message: "some error message",
        },
      },
    };

    const putDescriptor = makeSignupRequestGenerator.throw(errResponse).value;
    expect(putDescriptor).toEqual(
      put(signupFailure({ error: errResponse.response.data._error_message }))
    );

    expect(makeSignupRequestGenerator.next().done).toBeTruthy();
  });
});

describe("Test signup saga watchers", () => {
  let signupSagaItr;
  beforeAll(() => {
    signupSagaItr = signupSaga();
  });

  it("must start task to watch for makeSignupRequest action", () => {
    const takeEveryDescriptor = signupSagaItr.next().value;
    expect(takeEveryDescriptor).toEqual(
      takeEvery(SIGNUP_CONSTANTS.SIGNUP_REQUEST, makeSignupRequest)
    );

    expect(signupSagaItr.next().done).toBeTruthy();
  });
});
