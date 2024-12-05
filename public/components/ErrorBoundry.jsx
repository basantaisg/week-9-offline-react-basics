const ErrorBoundry = () => {
  return (
    <div>
      <ErrorBoundary>
        <Card2 />
      </ErrorBoundary>
      <Card1 />
    </div>
  );
};

const Card1 = () => {
  return (
    <div style={{ background: 'red', borderRadius: '20px', padding: 20 }}>
      Yo Bitch
    </div>
  );
};

const Card2 = () => {
  throw new error('Something went wrong');
  return (
    <div
      style={{
        background: 'black',
        color: 'white',
        borderRadius: 20,
        padding: 20,
      }}
    >
      Yo mF
    </div>
  );
};

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Error caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
