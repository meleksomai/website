import { Inter } from "@next/font/google";
import { ServerThemeProvider } from "next-themes";
import React from "react";

import { Providers } from "./providers";

import { Footer, NavBar, Layout } from "../components";
import globalStyles, { darkTheme } from "../styles/globalStyles";

// https://github.com/modulz/stitches/issues/995
globalStyles();

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider
      disableTransitionOnChange
      defaultTheme="system"
      value={{ light: "light-theme", dark: darkTheme.className }}
      attribute="class"
    >
      <html
        lang="en"
        className={inter.className}
        // data-theme='dark'
        // style={htmlStyle}
      >
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta content="#ffffff" name="theme-color" />
          <meta content="#ffffff" name="msapplication-TileColor" />
          <meta
            content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
            name="robots"
          />
        </head>
        <body>
          <Providers>
            <Layout
              css={{
                // TODO: perhaps move this to a variants
                padding: "$4",
              }}
            >
              <NavBar />
              {children}
              <Footer />
            </Layout>
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
