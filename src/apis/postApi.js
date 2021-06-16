import axios from "axios";

export const getAllPosts = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const getPostById = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};
