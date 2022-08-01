import { AppProps } from "next/app";
import React from "react";

import { Layout } from "@thugga/ui";

import globalStyles from "../styles/globalStyles";

// https://github.com/modulz/stitches/issues/995
globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout
      css={{
        // TODO: perhaps move this to a variants
        // backgroundColor: "$loContrast",
        padding: "$4",
      }}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
