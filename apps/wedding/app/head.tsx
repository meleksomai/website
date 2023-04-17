// app/head.js
import { NextSeo, NextSeoProps } from "next-seo";

import { NEXT_SEO_DEFAULT } from "../next-seo.config";

export default function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: "Wedding | Imen & Melek",
    description: "Our wedding event.",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://wedding.somai.me/",
      title: "Engagement Dinner | Imen & Melek",
      description:
        "Our engagement dinner is an intimate event that will bring family and close friends together to celebrate our engagement.",
      images: [
        {
          url: "https://somai.me/api/og?title=Wedding.&header=Melek Somai. Imen Ben Abid.",
          width: 800,
          height: 600,
          alt: "Wedding",
          type: "image/jpeg",
        },
      ],
      siteName: "Melek Somai",
    },
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
