import { Analytics } from "@vercel/analytics/react";
import { NextSeo } from "next-seo";
import { Cinzel, Great_Vibes, Inter } from "next/font/google";
import React from "react";

import { Layout } from "@thugga/ui";

import Footer from "./footer";
import NavBar from "./navbar";
import { ThemeProvider } from "./theme.provider";

import { FancyBackground } from "../components/FancyBackground";
import globalStyles, { getCssText } from "../styles/globalStyles";

// https://github.com/modulz/stitches/issues/995
globalStyles();

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const vibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});
const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
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
      className={`${inter.variable} ${vibes.variable} ${cinzel.variable}`}
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
          This is for the Favicon configuration.
        */}
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
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
          <Layout css={{ padding: "$4" }}>
            <FancyBackground />
            <NavBar />
            {children}
            <Footer />
          </Layout>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
