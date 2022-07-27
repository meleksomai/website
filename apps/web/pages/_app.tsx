import { AppProps } from "next/app";
import React from "react";

import globalStyles from "../styles/globalStyles";

// https://github.com/modulz/stitches/issues/995
globalStyles();

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
