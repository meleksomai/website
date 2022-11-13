import { ThemeProvider } from "next-themes";
import { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import { GoogleAnalytics, usePageViews, event } from "nextjs-google-analytics";
import React from "react";

import { Layout, darkTheme } from "@thugga/ui";

import { Footer, NavBar } from "../components";
import globalStyles from "../styles/globalStyles";

// https://github.com/modulz/stitches/issues/995
globalStyles();

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  event(name, {
    category: label === "web-vital" ? "Web Vitals" : "Next.js custom metric",
    value: Math.round(name === "CLS" ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

function App({ Component, pageProps }: AppProps) {
  // Google Analytics
  // - page views
  usePageViews();

  return (
    <ThemeProvider
      // disableTransitionOnChange
      attribute="class"
      value={{ light: "light-theme", dark: darkTheme.className }}
      defaultTheme="system"
    >
      <GoogleAnalytics />
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
    </ThemeProvider>
  );
}

export default App;
