import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

import { Layout } from "@thugga/ui";

import { Footer, NavBar } from "../components";
import globalStyles from "../styles/globalStyles";

// https://github.com/modulz/stitches/issues/995
globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout
        css={{
          // TODO: perhaps move this to a variants
          // backgroundColor: "$loContrast",
          padding: "$4",
        }}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
