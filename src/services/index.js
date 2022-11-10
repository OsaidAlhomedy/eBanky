import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

axios.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  if (token) {
    const parsedToken = JSON.parse(token);
    request.headers.Authorization = `Bearer ${parsedToken}`;
    request.headers["Content-Type"] = "application/json";
  }
  return request;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response.status);
    switch (error.response.status) {
      case 401:
        console.log("Unauthorized");
        // localStorage.clear();
        // window.location.href = "/";
        break;
      case 403:
        console.log("Forbidden");
        break;
      case 404:
        console.log("Not Found");
        break;
      case 500:
        console.log("Internal Server Error");
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default axios;
