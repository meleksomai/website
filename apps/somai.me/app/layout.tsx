import { Inter, IBM_Plex_Mono } from "@next/font/google";
import React from "react";
import { NextSeo } from "next-seo";

import { Flex, Container, Layout } from "@thugga/ui";

import Footer from "./footer";
import NavBar from "./navbar";
import { ThemeProvider } from "./theme.provider";

import globalStyles, { darkTheme, getCssText } from "../styles/globalStyles";

// https://github.com/modulz/stitches/issues/995
globalStyles();

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlex = IBM_Plex_Mono({
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
    <html
      suppressHydrationWarning
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
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        {/* 
          Anything we add in layout will appear on EVERY PAGE. At present it can not be overridden lower down the tree.
          This can be useful for things like favicons, or other meta tags that are the same on every page.
        */}
        <NextSeo
          useAppDir={true}
          themeColor="hsl(206, 5.2%, 49.5%)"
          titleTemplate="%s | Melek Somai"
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
  );
}
