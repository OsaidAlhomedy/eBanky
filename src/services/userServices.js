import axios from "./index";

// Authentication
export const login = (email, password) => {
  return axios.post("/login", {
    email,
    password,
  });
};

export const register = (data) => {
  return axios.post("/register", data);
};

//User Data
export const getUserData = (userId) => {
  return axios.get(`/users/${userId}`);
};
