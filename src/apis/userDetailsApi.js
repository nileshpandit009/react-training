import { axiosClient, getAuthHeader } from "./apiHelper";

export const getUserDetails = () => {
  return axiosClient("/users/me", "GET", {}, getAuthHeader());
};
