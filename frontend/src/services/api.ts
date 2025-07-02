import Axios from "axios";
import { getToken } from "../data/auth/authStorage";

export const api = Axios.create({
  baseURL: "http://192.168.100.116:8080",
  withCredentials: true,
});

api.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;