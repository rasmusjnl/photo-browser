import axios, { AxiosError } from "axios";
import { showToast } from "utils/toastUtils";

/** Create a mock axios instance to handle requests to our mock JSON server */
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000 /** 10 seconds */,
  headers: {
    "Content-type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (request) => {
    // TODO: maybe set a global loading property to TRUE?
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    // TODO: maybe set a global loading property to FALSE
    return response.data;
  },
  (error: Error | AxiosError) => {
    if (axios.isAxiosError(error)) {
      const title = error.code ?? error.name;
      const description = error.message;
      showToast({ title, description, status: "error" });
    } else {
      showToast({ title: error.name, description: error.message, status: "error" });
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
