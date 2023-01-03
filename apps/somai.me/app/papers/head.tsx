// app/head.js
import { NextSeo, NextSeoProps } from "next-seo";

import { NEXT_SEO_DEFAULT } from "../../next-seo.config";

export default function Head() {
  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: "Academic Publications",
    description:
      "Research in areas ranging from Clinical Computing, Patient Remote Monitoring, Neuro-Epidemiology, to Blockchain.",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.somai.me/",
      title: "Melek Somai | Academic Publications",
      description:
        "Research in areas ranging from Clinical Computing, Patient Remote Monitoring, Neuro-Epidemiology, to Blockchain.",
      images: [
        {
          url: "https://me-git-feat-og-melek.vercel.app/api/og?title=Research in areas ranging from Clinical Computing, Patient Remote Monitoring, Neuro-Epidemiology, to Blockchain.",
          width: 800,
          height: 600,
          alt: "Melek Somai Academic Publications",
          type: "image/jpeg",
        },
      ],
      siteName: "Melek Somai",
    },
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
