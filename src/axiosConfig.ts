import axios from "axios";

/** Create a mock axios instance to handle requests to our mock JSON server */
const apiInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000 /** 10 seconds */,
  headers: {
    "Content-type": "application/json",
  },
});

// apiInstance.interceptors.request.use(
//   (request) => {
//     return request;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

apiInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default apiInstance;
