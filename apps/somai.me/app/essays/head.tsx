// app/head.js
import { NextSeo, NextSeoProps } from "next-seo";

import { NEXT_SEO_DEFAULT } from "../../next-seo.config";

export default function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: "Essays",
    description:
      "A space to share thoughts and ideas that are often reflections on mycurrent research.",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.somai.me/",
      title: "Melek Somai",
      description:
        "A space to share thoughts and ideas that are often reflections on mycurrent research.",
      images: [
        {
          url: "https://somai.me/api/og?title=A space to share thoughts and ideas that are often reflections on mycurrent research.",
          width: 800,
          height: 600,
          alt: "Melek Somai Essays",
          type: "image/jpeg",
        },
      ],
      siteName: "Melek Somai",
    },
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
