import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error boundary caught an error:', error, errorInfo);
    this.setState({ error });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "#f9f6f0",
          border: "2px solid #d4c5a9",
          borderRadius: "8px",
          margin: "1rem"
        }}>
          <h2 style={{ color: "#c4a47c", fontFamily: "monospace" }}>
            ⚠️ Oops! Something went wrong
          </h2>
          <p style={{ color: "#6b5b73", fontFamily: "monospace" }}>
            Don't worry, just refresh the page and try again!
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#c4a47c",
              color: "#2c2c2c",
              border: "2px solid #a0845c",
              borderRadius: "0",
              cursor: "pointer",
              fontFamily: "monospace",
              fontWeight: "bold"
            }}
          >
            🔄 Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;