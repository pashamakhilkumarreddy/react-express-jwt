/* eslint-disable import/no-anonymous-default-export */
import Api from "./Api";
import { REGISTER, LOGIN, LOGOUT } from "../utils/constants";

export default {
  register({ email, password }) {
    return Api().post(REGISTER, { email, password });
  },
  login({ email, password }) {
    return Api().post(LOGIN, { email, password });
  },
  logout() {
    return Api().post(LOGOUT);
  },
};
