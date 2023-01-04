// app/head.js
import { NextSeo, NextSeoProps } from "next-seo";

import { NEXT_SEO_DEFAULT } from "../../../next-seo.config";

export default function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: "About",
    description:
      "Born in Tunis. Studied in Boston. Worked in London and Wisconsin.",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.somai.me/",
      title: "Melek Somai | About",
      description:
        "Born in Tunis. Studied in Boston. Worked in London and Wisconsin.",
      images: [
        {
          url: "https://somai.me/api/og?title=Born in Tunis. Studied in Boston. Worked in London and Wisconsin.",
          width: 800,
          height: 600,
          alt: "Melek Somai About Page",
          type: "image/jpeg",
        },
      ],
      siteName: "Melek Somai",
    },
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
