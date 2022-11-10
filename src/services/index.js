import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

axios.interceptors.request.use((request) => {
  const token = localStorage.getItem("token");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

axios.interceptors.response.use((response) => {
  switch (response.status) {
    case 401:
      console.log("Unauthorized");
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
  return response;
});

export default axios;
