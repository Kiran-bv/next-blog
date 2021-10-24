function MyApp({ Component, pageProps }) {
    console.log("Component ::: ", Component);
    return <Component {...pageProps} />
  }
  
export default MyApp;