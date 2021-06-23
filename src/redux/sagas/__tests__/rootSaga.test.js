import { fetchPostDetailsSaga, fetchPostsSaga } from "../dashboardSaga";
import { loginSaga } from "../loginSaga";
import rootSaga from "../rootSaga";
import { signupSaga } from "../signupSaga";
import { userDetailsSaga } from "../userDetailsSaga";

describe("Test root saga", () => {
  it("must combine all sagas into one", () => {
    const rootSagaItr = rootSaga();
    const allDescriptor = rootSagaItr.next().value;
    expect(allDescriptor.payload).toEqual([
      fetchPostsSaga(),
      fetchPostDetailsSaga(),
      loginSaga(),
      userDetailsSaga(),
      signupSaga(),
    ]);
  });
});
