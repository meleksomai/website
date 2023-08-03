// app/head.js
import { NextSeo, NextSeoProps } from "next-seo";

import { getPostBySlug } from "@/lib/essays";

import { NEXT_SEO_DEFAULT } from "../../../next-seo.config";

export default function Head({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params?.slug as string);

  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: post.meta.title,
    description: post.meta.excerpt,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.somai.me/",
      title: `${post.meta.title} - by Melek Somai`,
      description: post.meta.subtitle,
      images: [
        {
          url: `https://somai.me/api/og?title=${post.meta.title}.`,
          width: 800,
          height: 600,
          alt: `Melek Somai essay: ${post.meta.title}`,
          type: "image/jpeg",
        },
      ],
      siteName: "Melek Somai",
    },
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
