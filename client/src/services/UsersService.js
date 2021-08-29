/* eslint-disable import/no-anonymous-default-export */
import Api from "./Api";
import { USERS } from "../utils/constants";

export default {
  getUsers() {
    return Api().get(USERS);
  },
  getUser(userId) {
    return Api().get(`${USERS}/${userId}`);
  },
  post(user) {
    return Api().post(USERS, user);
  },
};
