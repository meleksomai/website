import type { NextSeoProps } from "next-seo";

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: "Rethink Health",
  description:
    "Leveraging clinical engineering, product design, and data science, we help healthcare organizations improve patient care, reduce costs, and increase efficiency. With our expertise and innovative approach, we are transforming the way healthcare is delivered.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.rethinkhealth.io/",
    title: "Rethink Health",
    description:
      "Leveraging clinical engineering, product design, and data science, we help healthcare organizations improve patient care, reduce costs, and increase efficiency. With our expertise and innovative approach, we are transforming the way healthcare is delivered.",
    images: [
      {
        url: "https://www.rethinkhealth.io/api/og",
        width: 800,
        height: 600,
        alt: "Rethink Health",
        type: "image/jpeg",
      },
    ],
    siteName: "Rethink Health",
  },
  twitter: {
    handle: "@rethinkhealth",
    cardType: "summary_large_image",
  },
};
