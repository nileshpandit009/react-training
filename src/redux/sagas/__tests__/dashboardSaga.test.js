import {
  fetchPosts,
  fetchPostDetails,
  fetchPostsSaga,
  fetchPostDetailsSaga,
} from "redux/sagas/dashboardSaga";
import { put, takeEvery } from "@redux-saga/core/effects";
import {
  fetchPostDetailsSuccess,
  fetchPostsError,
  fetchPostsSuccess,
  fetchPostDetails as fetchPostDetailsAction,
  fetchPostDetailsError,
} from "redux/actions/dashboardAction/actions";
import { DASHBOARD_CONSTANTS } from "redux/actions/dashboardAction/actionTypes";

describe("tests dashboard saga for fetchPosts", () => {
  let fetchPostsGenerator;
  beforeEach(() => {
    fetchPostsGenerator = fetchPosts();
    const callDescriptor = fetchPostsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it("must call fetchPostsSuccess action", () => {
    const expectedResponse = {
      data: [
        {
          id: 1,
          title: "abc",
          body: "abcabc",
        },
        {
          id: 2,
          title: "pqr",
          body: "pqrpqr",
        },
      ],
    };
    const putDescriptor = fetchPostsGenerator.next(expectedResponse).value;
    expect(putDescriptor).toEqual(
      put(fetchPostsSuccess({ posts: expectedResponse.data }))
    );

    expect(fetchPostsGenerator.next().done).toBeTruthy();
  });

  it("must call fetchPostsError action", () => {
    const errResponse = {
      status: 400,
      response: { data: "Some error message" },
    };
    const putDescriptor = fetchPostsGenerator.throw(errResponse).value;
    expect(putDescriptor).toEqual(
      put(fetchPostsError({ error: errResponse.response.data }))
    );

    expect(fetchPostsGenerator.next().done).toBeTruthy();
  });
});

describe("tests dashboard saga for fetchPostDetails", () => {
  let fetchPostDetailsGenerator;
  beforeEach(() => {
    fetchPostDetailsGenerator = fetchPostDetails(
      fetchPostDetailsAction({ id: 123 })
    );
    const callDescriptor = fetchPostDetailsGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it("must call fetchPostDetailsSuccess action", () => {
    const mockResponse = {
      data: {
        id: 1,
        title: "abc",
        body: "abcabc",
      },
    };

    const putDescriptor = fetchPostDetailsGenerator.next(mockResponse).value;
    expect(putDescriptor).toEqual(
      put(fetchPostDetailsSuccess({ postDetails: mockResponse.data }))
    );

    expect(fetchPostDetailsGenerator.next().done).toBeTruthy();
  });

  it("must call fetchPostDetailsError action", () => {
    const errResponse = {
      status: 400,
      response: { data: "Some error message" },
    };
    const putDescriptor = fetchPostDetailsGenerator.throw(errResponse).value;
    expect(putDescriptor).toEqual(
      put(fetchPostDetailsError({ error: errResponse.response.data }))
    );

    expect(fetchPostDetailsGenerator.next().done).toBeTruthy();
  });
});

describe("Test dashboard saga watchers", () => {
  let fetchPostsSagaItr;
  let fetchPostDetailsSagaItr;
  beforeAll(() => {
    fetchPostsSagaItr = fetchPostsSaga();
    fetchPostDetailsSagaItr = fetchPostDetailsSaga();
  });

  it("must start task to watch for fetchPosts action", () => {
    const takeEveryDescriptor = fetchPostsSagaItr.next().value;
    expect(takeEveryDescriptor).toEqual(
      takeEvery(DASHBOARD_CONSTANTS.FETCH_POSTS, fetchPosts)
    );

    expect(fetchPostsSagaItr.next().done).toBeTruthy();
  });

  it("must start task to watch for fetchPostDetails action", () => {
    const takeEveryDescriptor = fetchPostDetailsSagaItr.next().value;
    expect(takeEveryDescriptor).toEqual(
      takeEvery(DASHBOARD_CONSTANTS.FETCH_POST_DETAILS, fetchPostDetails)
    );

    expect(fetchPostDetailsSagaItr.next().done).toBeTruthy();
  });
});
