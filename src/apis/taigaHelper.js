import axios from "axios";

const taigaBaseUrl = "https://api.taiga.io/api/v1";

export const taigaClient = (path, method, data, headers) => {
  return axios({
    url: `${taigaBaseUrl}/${path}`,
    method,
    data,
    headers,
  });
};

export const get = (path) => {
  return taigaClient(path, "GET", {}, getAuthHeader());
};

export const post = (path, data) => {
  return taigaClient(path, "POST", data, getAuthHeader());
};

export const getAuthHeader = () => {
  const loggedUser = localStorage.getItem("user");
  if (loggedUser) {
    const user = JSON.parse(loggedUser);
    return { Authorization: `Bearer ${user.auth_token}` };
  }
  console.log("master branch");
  return {};
};
