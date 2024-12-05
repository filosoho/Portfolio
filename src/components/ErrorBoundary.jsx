import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, isSmallScreen: window.innerWidth <= 480 };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ isSmallScreen: window.innerWidth <= 480 });
  };

  render() {
    const { hasError, isSmallScreen } = this.state;

    if (hasError) {
      return (
        <div
          style={{
            textAlign: "center",
            padding: "120px 40px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px",
          }}
        >
          <h2>Something went wrong.</h2>
          <p style={{ marginTop: 5 }}>Please refresh the page.</p>
          <p style={{ marginTop: 20 }}>
            Or contact administrator: filosoho@gmail.com
          </p>
          {isSmallScreen && (
            <p style={{ marginTop: 40 }}>
              ⚠️ For the best experience, please view this website on a desktop.
              <br />
              Smaller devices might struggle with 3D rendering.
            </p>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
