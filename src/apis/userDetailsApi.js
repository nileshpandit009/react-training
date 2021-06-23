import { get } from "apis/taigaHelper";

export const getUserDetails = () => {
  return get("/users/me");
};
