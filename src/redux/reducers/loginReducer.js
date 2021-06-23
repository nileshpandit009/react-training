import { LOGIN_CONSTANTS } from "../actions/loginAction/actionTypes";

const {
  EMAIL,
  PASSWORD,
  EMAIL_ERR,
  PASSWORD_ERR,
  RESET_LOGIN,
  LOGIN_ERR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} = LOGIN_CONSTANTS;

export const initialState = {
  email: "",
  password: "",
  emailErr: "",
  passwordErr: "",
  loginErr: "",
  authToken: "",
  loading: false,
};

const loginReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case EMAIL:
      return { ...state, email: payload };

    case PASSWORD:
      return { ...state, password: payload };

    case EMAIL_ERR:
      return { ...state, emailErr: payload };

    case PASSWORD_ERR:
      return { ...state, passwordErr: payload };

    case LOGIN_ERR:
      return { ...state, loginErr: payload };

    case LOGIN_REQUEST:
      return { ...state, loading: true };

    case LOGIN_SUCCESS:
      return {
        ...state,
        authToken: payload.authToken,
        loginErr: "",
        loading: false,
      };

    case LOGIN_FAILURE:
      return { ...state, loginErr: payload.error, loading: false };

    case RESET_LOGIN:
      // return {
      //   ...state,
      //   email: "",
      //   emailErr: "",
      //   password: "",
      //   passwordErr: "",
      //   loginErr: "",
      // };
      return initialState;

    default:
      return state;
  }
};

export default loginReducer;
