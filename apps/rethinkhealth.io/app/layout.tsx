import { Inter, IBM_Plex_Mono } from "@next/font/google";
import { ServerThemeProvider } from "next-themes";
import React from "react";

import { Flex, Container } from "@thugga/ui";

import { Providers } from "./providers";

import { Footer, NavBar } from "../components";
import globalStyles, { darkTheme } from "../styles/globalStyles";

// https://github.com/modulz/stitches/issues/995
globalStyles();

const inter = Inter({ subsets: ["latin"] });
const ibmPlex = IBM_Plex_Mono({ weight: "400", subsets: ["latin"] });

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
            <Flex
              css={{
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                p: "$4",
                position: "absolute",
                zIndex: "-1",
              }}
            >
              <Container
                size="3"
                css={{
                  flex: 1,
                }}
              >
                <NavBar />
                {children}
                <Footer />
              </Container>
            </Flex>
          </Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
