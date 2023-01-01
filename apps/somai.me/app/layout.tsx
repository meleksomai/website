import { Inter, Lora } from "@next/font/google";
import { ServerThemeProvider } from "next-themes";
import React from "react";

import { Flex, Container, Layout } from "@thugga/ui";

import Footer from "./footer";
import NavBar from "./navbar";
import { ThemeProvider } from "./theme.provider";

import globalStyles, { darkTheme, getCssText } from "../styles/globalStyles";

// https://github.com/modulz/stitches/issues/995
globalStyles();

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlex = Lora({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});

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
        className={`${inter.variable} ${ibmPlex.variable}`}
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
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </head>
        <body>
          <ThemeProvider>
            <Layout
              css={{
                // TODO: perhaps move this to a variants
                // backgroundColor: "$loContrast",
                padding: "$4",
              }}
            >
              <NavBar />
              {children}
              <Footer />
            </Layout>
          </ThemeProvider>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
