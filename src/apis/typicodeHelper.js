import axios from "axios";

const typicodeBaseUrl = "https://jsonplaceholder.typicode.com";

export const typicodeClient = (path, method, data) => {
  return axios({
    url: `${typicodeBaseUrl}/${path}`,
    method,
    data,
  });
};

export const get = (path) => {
  return typicodeClient(path, "GET", {});
};
