const { axiosClient } = require("./apiHelper");

export const doSignup = (payload) => {
  const { email, fullname, username, password, acceptTerms, type } = payload;
  return axiosClient("/auth/register", "POST", {
    email: email,
    full_name: fullname,
    username: username,
    password: password,
    accepted_terms: acceptTerms,
    type: type,
  });
};
