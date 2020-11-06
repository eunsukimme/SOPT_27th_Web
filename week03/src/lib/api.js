import axios from "axios";

const client = axios.create({
  baseURL: "https://api.github.com",
});

export const getUserAPI = async (username) => {
  try {
    const { data } = await client.get(`/users/${username}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserReposAPI = async (username) => {
  try {
    const { data } = await client.get(`/users/${username}/repos`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const rateLimitAPI = async () => {
  try {
    const { data } = await client.get("/rate_limit");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
