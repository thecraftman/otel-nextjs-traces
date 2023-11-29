import React from 'react';
import App from 'next/app';
import { register } from '../instrumentation'; // adjust the path if your instrumentation.ts is in a different directory

class MyApp extends App {
  componentDidMount() {
    // Registering OpenTelemetry only when the app is running in a Node.js environment
    if (typeof window === 'undefined') {
      register();
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;