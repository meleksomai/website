// import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Inter, Lora, JetBrains_Mono } from "next/font/google";
import React from "react";

import { Box, Stack } from "@thugga/ui";

import Footer from "./footer";
import NavBar from "./navbar";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const serif = Lora({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});
const mono = JetBrains_Mono({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const MetadataTitle = `Melek Somai, MD, MPH | Clinical Computing, Data Science, and Digital Health`;
const MetadataDescription = `Physician. Clinical Informatician. Data Scientist. Innovator. Works at the intersection of Healthcare Informatics, Clinical Computing, and Data Science.`;

export const metadata: Metadata = {
  title: MetadataTitle,
  description: MetadataDescription,
  keywords: [
    "digital transformation",
    "health systems",
    "healthcare",
    "healthcare consulting",
    "healthcare consulting firms",
    "healthcare consulting companies",
    "healthcare consulting services",
    "healthcare consulting firms in usa",
    "digital health",
    "global health technology",
    "healthcare technology",
  ],
  openGraph: {
    type: "website",
    title: MetadataTitle,
    description: MetadataDescription,
    locale: "en_US",
    url: "https://somai.me",
    siteName: "Rethink Health",
    images: `/og`,
  },
  twitter: {
    title: MetadataTitle,
    description: MetadataDescription,
    images: "/og",
    card: "summary",
    site: "@meleksomai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${serif.variable} ${mono.variable}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
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
      </head>
      <body>
        <Providers>
          <Box
            maxWidth="750px"
            margin="auto"
            paddingY="1200"
            paddingX={{
              desktop: "0",
              tablet: "400",
              mobile: "400",
            }}
          >
            <Stack space="1200">
              <NavBar />
              {children}
              <Footer />
            </Stack>
            {/* <Analytics /> */}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
