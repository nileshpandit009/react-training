import { USER_DETAILS_CONSTANTS } from "../actions/userDetailsAction/actionTypes";

const {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE,
  RESET_USER_DETAILS,
} = USER_DETAILS_CONSTANTS;

export const initialState = {
  userDetails: null,
  loading: true,
  error: "",
};

const userDetailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };

    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        userDetails: payload.userDetails,
        error: "",
        loading: false,
      };

    case USER_DETAILS_FAILURE:
      return {
        ...state,
        userDetails: null,
        error: payload.error,
        loading: false,
      };

    case RESET_USER_DETAILS:
      return initialState;

    default:
      return state;
  }
};

export default userDetailsReducer;
