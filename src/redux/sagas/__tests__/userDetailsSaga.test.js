import { put, takeEvery } from "@redux-saga/core/effects";
import {
  userDetailsFailure,
  userDetailsSuccess,
} from "redux/actions/userDetailsAction/actions";
import { USER_DETAILS_CONSTANTS } from "redux/actions/userDetailsAction/actionTypes";
import { userDetailsRequest, userDetailsSaga } from "../userDetailsSaga";

describe("Test user details saga", () => {
  let userDetailsRequestGenerator;
  beforeEach(() => {
    userDetailsRequestGenerator = userDetailsRequest();
    const callDescriptor = userDetailsRequestGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it("must call userDetailsSuccess action", () => {
    const response = {
      data: {},
    };

    const putDescriptor = userDetailsRequestGenerator.next(response).value;
    expect(putDescriptor).toEqual(
      put(userDetailsSuccess({ userDetails: response.data }))
    );
    expect(userDetailsRequestGenerator.next().done).toBeTruthy();
  });

  it("must call userDetailsFailure action", () => {
    const errResponse = { message: "some error message" };
    const putDescriptor = userDetailsRequestGenerator.throw(errResponse).value;
    expect(putDescriptor).toEqual(
      put(userDetailsFailure({ error: errResponse.message }))
    );

    expect(userDetailsRequestGenerator.next().done).toBeTruthy();
  });
});

describe("Test user details saga watchers", () => {
  let userDetailsSagaItr;
  beforeAll(() => {
    userDetailsSagaItr = userDetailsSaga();
  });

  it("must start task to watch for USER_DETAILS_REQUEST action", () => {
    const takeEveryDescriptor = userDetailsSagaItr.next().value;
    expect(takeEveryDescriptor).toEqual(
      takeEvery(USER_DETAILS_CONSTANTS.USER_DETAILS_REQUEST, userDetailsRequest)
    );
  });
});
