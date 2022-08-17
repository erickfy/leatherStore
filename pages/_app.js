import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { Provider } from "react-redux";
import store from "redux/store";
import Layout from '@/components/layout'

import 'node_modules/bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Leather Store</title>
      </Head>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </SessionProvider>
    </>
  );
}

export default MyApp;
