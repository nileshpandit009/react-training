import axios from "axios";
const baseUrl = "https://api.taiga.io/api/v1";
export const axiosClient = (path, method, data, headers) => {
  return axios({
    url: `${baseUrl}/${path}`,
    method,
    data,
    headers,
  });
};

export const getAuthHeader = () => {
  const loggedUser = localStorage.getItem("user");
  if (loggedUser) {
    const user = JSON.parse(loggedUser);
    return { Authorization: `Bearer ${user.auth_token}` };
  }
  return {};
};
