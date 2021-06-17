import { post } from "apis/taigaHelper";

export const doSignup = (payload) => {
  const { email, fullname, username, password, acceptTerms, type } = payload;
  return post("/auth/register", {
    email: email,
    full_name: fullname,
    username: username,
    password: password,
    accepted_terms: acceptTerms,
    type: type,
  });
};
