import Axios from "axios";
import toast from "react-hot-toast";

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
        toast("Please Login Again");
        localStorage.clear();
        window.location.href = "/";
        break;
      case 403:
        toast("You are not authorized to access the requested resource");
        break;
      case 404:
        toast("The requested resource was not found");
        break;
      case 500:
        toast("Internal Server Error");
        break;
      default:
        break;
    }
    return Promise.reject(error);
  }
);

export default axios;
