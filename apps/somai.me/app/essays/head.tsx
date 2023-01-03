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
      title: "Melek Somai | Essays",
      description:
        "A space to share thoughts and ideas that are often reflections on mycurrent research.",
      images: [
        {
          url: "https://me-git-feat-og-melek.vercel.app/api/og?title=A space to share thoughts and ideas that are often reflections on mycurrent research.",
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
