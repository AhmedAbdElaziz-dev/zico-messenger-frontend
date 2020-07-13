import axios from "axios";

const userEndPoint = (route) => `http://localhost:3000/product/${route}`;
const token = localStorage.getItem("token");
const headers = {
  headers: {
    Authorization: token,
  },
};

export function login(signedUser) {
  return axios.post(userEndPoint("login"), signedUser, headers);
}

export function register(newUser) {
  return axios.post(userEndPoint("register"), newUser);
}
