// app/head.js
import { NextSeo, NextSeoProps } from "next-seo";

import { NEXT_SEO_DEFAULT } from "../../../../next-seo.config";
import { getPaperBySlug } from "../../../../lib/papers";

export default function Head({ params }: { params: { slug: string } }) {
  const paper = getPaperBySlug(params?.slug as string);

  const updateMeta: NextSeoProps = {
    ...NEXT_SEO_DEFAULT,
    title: paper.citation.title,
    description: paper.meta.excerpt,
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://www.somai.me/",
      title: paper.citation.title,
      description: paper.citation.subtitle,
      images: [
        {
          url: `https://somai.me/api/og?title=${paper.citation.title}.`,
          width: 800,
          height: 600,
          alt: `Melek Somai essay: ${paper.citation.title}`,
          type: "image/jpeg",
        },
      ],
      siteName: "Melek Somai",
    },
  };
  return <NextSeo {...updateMeta} useAppDir={true} />;
}
