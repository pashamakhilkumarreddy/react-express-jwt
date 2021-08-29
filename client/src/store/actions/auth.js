import AuthService from "../../services/AuthenticationService";
import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../constants";

export const registerUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const result = AuthService.register({ email, password });
      dispatch({
        type: REGISTER_USER,
        payload: result,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const loginUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const result = AuthService.login({ email, password });
      dispatch({
        type: LOGIN_USER,
        payload: result,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const logoutUser = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const result = AuthService.login({ email, password });
      dispatch({
        type: LOGOUT_USER,
        payload: result,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
