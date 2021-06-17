import React, { useReducer } from "react";
import * as yup from "yup";
import SignUp from "components/SignUp";
import reducer, { initialState } from "reducers/signUpReducer";
import dispatchWrapper from "reducers/DispatchWrapper";
import { useDispatch, useSelector } from "react-redux";
import { signupRequest } from "redux/actions/signupAction/actions";

const requiredErrMsg = "This field is required";
const schema = yup.object().shape({
  fullname: yup.string().required(requiredErrMsg),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required(requiredErrMsg),
  username: yup.string().required(requiredErrMsg),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(16, "Password must be at most 16 characters")
    .required(requiredErrMsg),
  type: yup.string().required(requiredErrMsg),
  acceptTerms: yup
    .boolean()
    .isTrue("You must accept Terms and Conditions")
    .required(requiredErrMsg),
});

function SignUpContainer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    success: submitSuccess,
    error: submitError,
    loading,
  } = useSelector((state) => state.signup);
  const reduxDispatch = useDispatch();

  const { fullname, email, username, password, type, acceptTerms, errors } =
    state;
  const validationFields = {
    fullname,
    email,
    username,
    password,
    type,
    acceptTerms,
  };

  const validateAndSubmit = () => {
    dispatchWrapper(dispatch, "resetErrors");

    schema.isValid(validationFields).then((valid) => {
      if (!valid) {
        schema
          .validate(validationFields, { abortEarly: false })
          .catch((err) => {
            err.inner.forEach((field) => {
              dispatchWrapper(dispatch, `${field.path}Err`, field.message);
            });
          });
      } else {
        console.log("No errors");
        // API call here
        reduxDispatch(signupRequest({ formData: state }));
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateAndSubmit();
  };
  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      dispatchWrapper(dispatch, e.target.name, e.target.checked);
    } else {
      dispatchWrapper(dispatch, e.target.name, e.target.value);
    }
  };

  return (
    <SignUp
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
      submitError={submitError}
      submitSuccess={submitSuccess}
      loading={loading}
    />
  );
}

export default SignUpContainer;
