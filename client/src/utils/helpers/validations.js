/* eslint-disable no-useless-escape */

import { createContext } from "react";

const isValidEmail = (email) => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = emailRegex.test(email);
  if (email.trim() && isValid) {
    return {
      text: "Valid Email",
      match: isValid,
    };
  }
  return {
    text: "Invalid email! Please enter the format john@doe.com",
    match: isValid,
  };
};

const isValidPassword = (password) => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
  const isValid = passwordRegex.test(password);
  if (password.trim() && isValid) {
    return {
      text: "Valid Password",
      match: isValid,
    };
  }
  return {
    // eslint-disable-next-line no-multi-str
    text: "Invalid password. Password should be a minimum of 8 eight characters with atleast one capital letter, \
        one number and a special character",
    match: isValid,
  };
};

const startUserSession = (token, user) => {
  localStorage.setItem("Authorization", token);
  localStorage.setItem("user", user);
  localStorage.setItem("isLoggedIn", true);
};

const getUserName = () => {
  const userData = window.localStorage.getItem("user");
  if (userData) {
    const user = JSON.parse(userData);
    return (
      user.username.slice(0, 1).toUpperCase() +
      user.username.slice(1).toLowerCase()
    );
  }
};

const destroyUserSession = () => {
  localStorage.removeItem("Authorization");
  localStorage.removeItem("user");
  localStorage.removeItem("isLoggedIn");
};

const userContext = createContext({ user: {} });

export {
  isValidEmail,
  isValidPassword,
  startUserSession,
  getUserName,
  destroyUserSession,
  userContext,
};
