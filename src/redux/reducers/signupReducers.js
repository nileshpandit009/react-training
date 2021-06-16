const { SIGNUP_CONSTANTS } = require("redux/actions/signupAction/actionTypes");

const { SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } = SIGNUP_CONSTANTS;

const initialState = {
  uuid: "",
  loading: true,
  success: "",
  error: "",
};

export const signupReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP_REQUEST:
      return { ...state, loading: true };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        uuid: payload.uuid,
        success: payload.success,
        loading: false,
      };

    case SIGNUP_FAILURE:
      return { ...state, error: payload.error, loading: false };

    default:
      return state;
  }
};
