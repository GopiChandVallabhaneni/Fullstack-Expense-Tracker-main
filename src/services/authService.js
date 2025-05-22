import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, { email, password });
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const googleLogin = async (googleToken) => {
  const response = await axios.post(`${API_URL}/oauth/google`, { token: googleToken });
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const githubLogin = async (githubCode) => {
  const response = await axios.post(`${API_URL}/oauth/github`, { code: githubCode });
  if (response.data.token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("user");
};
    