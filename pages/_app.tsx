import "../styles/globals.css";
import App from "next/app";
import type { AppInitialProps } from "next/app";

class MyApp extends App {
  static async getInitialProps({
    Component,
    ctx,
  }: any): Promise<AppInitialProps> {
    const pageProps = { description: "This is the description from MyApp" };
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
