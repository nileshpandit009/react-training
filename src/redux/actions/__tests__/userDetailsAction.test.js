import { USER_DETAILS_CONSTANTS } from "redux/actions/userDetailsAction/actionTypes";
import {
  fetchUserDetails,
  userDetailsSuccess,
  userDetailsFailure,
  resetUserDetails,
} from "redux/actions/userDetailsAction/actions";

const {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE,
  RESET_USER_DETAILS,
} = USER_DETAILS_CONSTANTS;

describe("Test action creators for signup actions", () => {
  it("must return USER_DETAILS_REQUEST action", () => {
    expect(fetchUserDetails({})).toEqual({
      type: USER_DETAILS_REQUEST,
      payload: {},
    });
  });

  it("must return USER_DETAILS_SUCCESS action", () => {
    const payload = { data: { id: 123 } };
    expect(userDetailsSuccess(payload)).toEqual({
      type: USER_DETAILS_SUCCESS,
      payload,
    });
  });

  it("must return USER_DETAILS_FAILURE action", () => {
    const payload = { error: "some error message" };
    expect(userDetailsFailure(payload)).toEqual({
      type: USER_DETAILS_FAILURE,
      payload,
    });
  });

  it("must return RESET_USER_DETAILS action", () => {
    expect(resetUserDetails()).toEqual({ type: RESET_USER_DETAILS });
  });
});
