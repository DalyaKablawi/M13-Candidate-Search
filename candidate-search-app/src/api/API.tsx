import axios from "axios";

const API_URL = "https://api.github.com/users/";

export const getUserData = async (username: string) => {
  const token = import.meta.env.VITE_GITHUB_TOKEN;
  const response = await axios.get(`${API_URL}${username}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
