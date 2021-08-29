import { REGISTER_USER, LOGIN_USER, LOGOUT_USER } from "../constants";

const initialState = {};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER: {
      return state;
    }
    case LOGIN_USER: {
      return state;
    }
    case LOGOUT_USER: {
      return state;
    }
    default:
      return state;
  }
}
