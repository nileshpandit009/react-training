import { post } from "apis/taigaHelper";

export const doLogin = (email, password) => {
  return post("/auth", {
    username: email,
    password,
    type: "normal",
  });
};
