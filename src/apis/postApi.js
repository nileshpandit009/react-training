import { get } from "apis/typicodeHelper";

export const getAllPosts = () => {
  return get("posts");
};

export const getPostById = (id) => {
  return get(`posts/${id}`);
};
