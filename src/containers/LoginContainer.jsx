import React, { /* useContext, */ useEffect /* , useReducer */ } from "react";
import * as yup from "yup";
import Login from "components/Login";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  changeEmail,
  changePassword,
  changeEmailErr,
  changePasswordErr,
  resetLoginState,
  makeLoginRequest,
} from "redux/actions/loginAction/actions";
import LoadingIndicator from "components/LoadingIndicator";

const LoginContainer = () => {
  // Redux
  const loginState = useSelector((state) => state.login);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(resetLoginState());
    };
  }, [dispatch]);

  const { email, password, emailErr, passwordErr, loginErr, loading } =
    loginState;

  let schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().min(5).required(),
  });

  const validateInputs = () => {
    dispatch(changeEmailErr(""));
    dispatch(changePasswordErr(""));

    schema.isValid({ email: email, password: password }).then((valid) => {
      if (!valid) {
        schema
          .validate({ email: email, password: password }, { abortEarly: false })
          .catch((err) => {
            err.inner.forEach((el) => {
              if (el.path === "email") {
                dispatch(changeEmailErr(el.message));
              }
              if (el.path === "password") {
                dispatch(changePasswordErr(el.message));
              }
            });
          });
      } else {
        dispatch(makeLoginRequest({ email, password }));
      }
    });
  };

  const handleEmailChange = (e) => {
    dispatch(changeEmail(e.target.value));
  };
  const handlePasswordChange = (e) => {
    dispatch(changePassword(e.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    validateInputs();
  };

  if (localStorage.getItem("user")) {
    return <Redirect to="/dashboard" />;
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <Login
      email={email}
      password={password}
      handleEmailChange={handleEmailChange}
      handlePasswordChange={handlePasswordChange}
      handleSubmit={handleSubmit}
      validateInputs={validateInputs}
      emailErr={emailErr}
      passwordErr={passwordErr}
      loginErr={loginErr}
    />
  );
};

export default LoginContainer;
