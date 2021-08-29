import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Redirect } from "react-router-dom";
import { isValidEmail, isValidPassword } from "../../utils/helpers";
import { startUserSession } from "../../utils/helpers";
import AuthenticationService from "../../services/AuthenticationService";
import FormLayout from "../../components/FormLayout";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      rememberMe: true,
      emailValidation: {
        valid: true,
        text: "",
      },
      passwordValidation: {
        valid: true,
        text: "",
      },
      response: {
        error: true,
        text: "",
      },
      redirect: null,
    };
  }

  handleEmail = (e) => {
    const email = e.target.value;
    this.setState({
      email,
    });
    const { text, match } = isValidEmail(email);
    this.setState({
      emailValidation: {
        valid: match,
        text,
      },
    });
  };

  handlePassword = (e) => {
    const password = e.target.value;
    this.setState({
      password,
    });
    const { text, match } = isValidPassword(password);
    this.setState({
      passwordValidation: {
        valid: match,
        text,
      },
    });
  };

  handleRememberMe = (e) => {
    this.setState({
      rememberMe: e.target.checked,
    });
  };

  handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      if (this.state.email && this.state.password) {
        const response = await AuthenticationService.login({
          email: this.state.email,
          password: this.state.password,
        });
        const {
          data: { token, user },
        } = response;
        if (!response.data.err) {
          startUserSession(token, user);
          setTimeout(() => {
            this.setState({
              redirect: "/users",
            });
          }, 0);
        }
      }
    } catch (err) {
      console.error(err);
      this.setState({
        response: {
          error: true,
          text: err.response.data.message,
        },
      });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <>
        <Helmet>
          <title>Login | React Express App</title>
        </Helmet>
        <FormLayout>
          <form
            className={`auth-form login-form`}
            id="auth-login-form"
            name="loginForm"
            onSubmit={this.handleLoginSubmit}
          >
            <h1 className={`title is-2 has-text-centered`}>Login</h1>
            <div className={`field`} data-class="login-email">
              <label htmlFor="login-email" className={`label`}>
                Email
              </label>
              <div className={`control`}>
                <input
                  id="login-email"
                  className={`input`}
                  type="email"
                  name="loginEmail"
                  placeholder="Please enter your email"
                  autoComplete="off"
                  required
                  value={this.state.email}
                  onChange={this.handleEmail}
                />
              </div>
              {this.state.emailValidation.text && (
                <p
                  className={
                    "help " +
                    (this.state.emailValidation.valid
                      ? " is-success"
                      : "is-danger")
                  }
                >
                  {this.state.emailValidation.text}
                </p>
              )}
            </div>
            <div className={`field`} data-class="login-password">
              <label htmlFor="login-password" className={`label`}>
                Password
              </label>
              <div className={`control`}>
                <input
                  id="login-password"
                  className={`input`}
                  type="password"
                  name="loginPassword"
                  placeholder="Please enter your password"
                  autoComplete="off"
                  required
                  value={this.state.password}
                  onChange={this.handlePassword}
                />
              </div>
              {this.state.passwordValidation.text && (
                <p
                  className={
                    "help " +
                    (this.state.passwordValidation.valid
                      ? "is-success"
                      : "is-danger")
                  }
                >
                  {this.state.passwordValidation.text}
                </p>
              )}
            </div>
            <div className={`forgot-password-container`}>
              <div className={`field`} data-class="login-checkbox">
                <label htmlFor="login-checkbox" className={`checkbox`}>
                  <input
                    id="login-checkbox"
                    type="checkbox"
                    checked={this.state.rememberMe}
                    onChange={this.handleRememberMe}
                  />
                  Remember Me
                </label>
              </div>
              <div className={`field`}>
                Not yet with us?
                <Link to="/register" className={`btn btn-link`}>
                  &nbsp;Register
                </Link>
              </div>
            </div>
            {this.state.response.text && (
              <p
                className={
                  "help has-text-centered mb-2 " +
                  (this.state.response.error ? " is-danger" : "is-success")
                }
              >
                {this.state.response.text}
              </p>
            )}
            <div className={`field`} data-class="login-button">
              <button
                id="login-button"
                className={`button is-link is-fullwidth`}
                name="loginButton"
              >
                Login
              </button>
            </div>
            <div className={`field has-text-centered`}>
              <Link to="/forgot-password" className={`btn btn-link`}>
                Forgot your Password?
              </Link>
            </div>
          </form>
        </FormLayout>
      </>
    );
  }
}
