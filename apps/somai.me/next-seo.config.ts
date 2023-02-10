import type { NextSeoProps } from "next-seo";

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  title: "Melek Somai",
  description:
    "Physician. Clinical Informatician. Data Scientist. Innovator. Works at the intersection of Healthcare Informatics, Clinical Computing, and Data Science.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.somai.me/",
    title: "Melek Somai",
    description: "Physician. Clinical Informatician. Data Scientist. Innovator. Works at the intersection of Healthcare Informatics, Clinical Computing, and Data Science.",
    images: [
      {
        url: "https://somai.me/api/og",
        width: 800,
        height: 600,
        alt: "Melek Somai",
        type: "image/jpeg",
      },
    ],
    siteName: "Melek Somai",
  },
  twitter: {
    handle: "@meleksomai",
    cardType: "summary_large_image",
  },
};
