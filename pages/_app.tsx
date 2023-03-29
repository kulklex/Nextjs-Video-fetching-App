import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'




function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <Head>
      <title>Youtube-Clone App</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="A Youtube-Clone Web-App created using create-next-app" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />  
    </Head>

    <Component {...pageProps} />
</>)
}

export default MyApp
