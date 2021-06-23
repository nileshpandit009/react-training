export const initialErrors = {
  fullname: "",
  email: "",
  username: "",
  password: "",
  type: "",
  acceptTerms: "",
};

export const initialState = {
  fullname: "",
  email: "",
  username: "",
  password: "",
  type: "",
  acceptTerms: false,
  errors: initialErrors,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "fullname":
      return { ...state, fullname: payload };
    case "email":
      return { ...state, email: payload };
    case "username":
      return { ...state, username: payload };
    case "password":
      return { ...state, password: payload };
    case "type":
      return { ...state, type: payload };
    case "acceptTerms":
      return { ...state, acceptTerms: payload };
    case "fullnameErr":
      return { ...state, errors: { ...state.errors, fullname: payload } };
    case "emailErr":
      return { ...state, errors: { ...state.errors, email: payload } };
    case "usernameErr":
      return { ...state, errors: { ...state.errors, username: payload } };
    case "passwordErr":
      return { ...state, errors: { ...state.errors, password: payload } };
    case "typeErr":
      return { ...state, errors: { ...state.errors, type: payload } };
    case "acceptTermsErr":
      return { ...state, errors: { ...state.errors, acceptTerms: payload } };
    case "resetErrors":
      return { ...state, errors: initialErrors };
    default:
      return state;
  }
};

export default reducer;
