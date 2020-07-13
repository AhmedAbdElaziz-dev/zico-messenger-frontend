import axios from "axios";

const messegeEndPoint = (route) => `http://localhost:3000/messege/${route}`;
const token = localStorage.getItem("token");

const headers = {
  headers: {
    Authorization: token,
  },
};

export function getMessges() {
  return axios.get(messegeEndPoint(), headers);
}

export function addMessege(messegeBody) {
  return axios.post(messegeEndPoint("add-messege"), messegeBody);
}

export function deleteMessegeById(messegeId) {
  return axios.delete(messegeEndPoint(messegeId));
}
