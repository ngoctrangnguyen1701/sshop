import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { useEffect } from 'react';
import type { AppProps } from 'next/app'
import Head from "next/head";
import { store } from '../controller/redux/store/configureStore';
import { Provider } from 'react-redux'



function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    const body = document.getElementsByTagName('body')[0]
    body.style.backgroundColor = 'rgb(232, 248, 231)'
  }, [])

  return (
    <Provider store={store}>
      <Head>
        <meta
          httpEquiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps } />
    </Provider>
  )
}

export default MyApp

