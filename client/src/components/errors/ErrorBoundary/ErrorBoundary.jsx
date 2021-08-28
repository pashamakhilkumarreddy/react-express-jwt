import { Component } from "react";
import PropTypes from "prop-types";
import Error from "./Error";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static propTypes = {
    fallback: PropTypes.string,
  };

  componentDidCatch = (err, errInfo) => {
    console.error(err, errInfo);
  };

  static getDerivedStateFromError(err) {
    console.error(err);
    return {
      hasError: true,
    };
  }
  
  render() {
    if (this.state.hasError) {
      return <Error msg={fallback} />;
    }
    return this.props.children;
  }
}

ErrorBoundary.defaultProps = {
  fallback: "Something went wrong!",
};

export default ErrorBoundary;
