import Markdoc from "@markdoc/markdoc";
import React from "react";
import { RxArrowTopRight } from "react-icons/rx";

import { config, components } from "@thugga/markdoc";
import { Stack, Text, Link } from "@thugga/ui";

import { getAllPapers, getPaperBySlug } from "@/lib/papers";

import Title from "./title";

export default function PaperPage({ params }: { params: { slug: string } }) {
  const publication = getPaperBySlug(params?.slug as string);
  const ast = Markdoc.parse(publication.content);
  const content = Markdoc.transform(ast, config);
  const rendered = Markdoc.renderers.react(content, React, { components });

  return (
    <Stack align="flex-start" space="800">
      {/* @ts-expect-error Server Component */}
      <Title paper={publication} />
      <Text variant="small">
        {publication.publisher} / {publication.publishedAt.text}
      </Text>
      <Text variant="small">
        {publication.citation.author
          ?.map((author: any) => {
            return `${author.given} ${author.family}`;
          })
          .join(" / ")}
      </Text>
      <Link
        variant="secondary"
        suffix={<RxArrowTopRight size="20" />}
        href={publication.url}
        size="large"
      >
        Read original article
      </Link>
      <Text color="slate11" variant="large">
        {publication.meta.excerpt}
      </Text>
      <Stack>{rendered}</Stack>
    </Stack>
  );
}

export async function generateStaticParams() {
  const papers = await getAllPapers();
  return papers.map((paper) => ({
    slug: paper.slug,
  }));
}
