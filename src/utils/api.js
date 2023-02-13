import axios from "axios";

import { url, getLocalStorageItem } from "./helper";

const api = axios.create({
  baseURL: url,
  headers: {'X-Requested-With': 'XMLHttpRequest',
  "Access-Control-Allow-Headers": "X-Requested-With, content-type"},
  
});

api.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `Bearer ${getLocalStorageItem("token")}`;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      window.sessionStorage.removeItem("token");
      window.location.href = "/";
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default api;