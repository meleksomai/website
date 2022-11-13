import { Head, Html, Main, NextScript } from "next/document";

import { getCssText } from "@thugga/ui";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Font optimization */}
        <link
          rel="preload"
          href="/fonts/ibm/IBMPlexMono-Regular.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/ibm/IBMPlexMono-Regular.woff"
          as="font"
          crossOrigin="anonymous"
          type="font/woff"
        />
        <link
          rel="preload"
          href="/fonts/ibm/IBMPlexMono-Medium.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/ibm/IBMPlexMono-Medium.woff"
          as="font"
          crossOrigin="anonymous"
          type="font/woff"
        />
        <link
          rel="preload"
          href="/fonts/ibm/IBMPlexMono-Bold.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/ibm/IBMPlexMono-Bold.woff"
          as="font"
          crossOrigin="anonymous"
          type="font/woff"
        />
        <link
          rel="preload"
          href="/fonts/ibm/IBMPlexMono-Light.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/ibm/IBMPlexMono-Light.woff"
          as="font"
          crossOrigin="anonymous"
          type="font/woff"
        />
        {/* HERE */}
        <link
          rel="preload"
          href="/fonts/inter/Inter-Regular.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Regular.woff"
          as="font"
          crossOrigin="anonymous"
          type="font/woff"
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Bold.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Bold.woff"
          as="font"
          crossOrigin="anonymous"
          type="font/woff"
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Medium.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Medium.woff"
          as="font"
          crossOrigin="anonymous"
          type="font/woff"
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Thin.woff2"
          as="font"
          crossOrigin="anonymous"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/inter/Inter-Thin.woff"
          as="font"
          crossOrigin="anonymous"
          type="font/woff"
        />
        {/* 
          To make sure the styles are server-side rendered,
          we took advantage of Stitches' getCssText function to do that. 
          */}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
        <meta content="#ffffff" name="theme-color" />
        <meta content="#ffffff" name="msapplication-TileColor" />
        {/* <meta
          content="/static/favicons/browserconfig.xml"
          name="msapplication-config"
        />
        <meta content="14d2e73487fa6c71" name="yandex-verification" />
        <meta
          content="eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw"
          name="google-site-verification"
        /> */}
        <meta
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          name="robots"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
