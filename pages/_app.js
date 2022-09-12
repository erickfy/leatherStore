import "../styles/globals.css";
import React from "react";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "redux/store";
import Layout from "components/layout"
import 'node_modules/bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [data, setData] = React.useState({view: true});
  
  const handlerBack = (e) => {
    setData(e)
  }
  return (
    <>
    <Layout data={data}>

      <Head>
        <title>Leather Store</title>
      </Head>
      <SessionProvider session={session}>
        <Provider store={store}>
            <Component {...pageProps}  handlerBack={handlerBack} data={data}/>
        </Provider>
      </SessionProvider>
    </Layout>
    </>
  );
}

export default MyApp;
