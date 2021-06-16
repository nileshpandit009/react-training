import { axiosClient } from "./apiHelper";

export const doLogin = (email, password) => {
  return axiosClient("/auth", "POST", {
    username: email,
    password,
    type: "normal",
  });
};
