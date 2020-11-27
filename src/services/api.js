import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://enigmatic-springs-21467.herokuapp.com:443/api/"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;