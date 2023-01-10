import Markdoc from "@markdoc/markdoc";
import React from "react";

import { config, components } from "@thugga/markdoc";
import { Paragraph, Section, Text } from "@thugga/ui";

import Title from "./title";

import { NextLink } from "../../components";
import { getAllPapers, getPaperBySlug } from "../../lib/papers";

function Author({ author }: any) {
  return (
    <Text
      as="span"
      css={{
        display: "inline",
        paddingInlineEnd: "$1",
      }}
      variant="light"
    >
      {author.given} {author.family} /
    </Text>
  );
}

export default function PaperPage({ params }: { params: { slug: string } }) {
  const publication = getPaperBySlug(params?.slug as string);
  const ast = Markdoc.parse(publication.content);
  const content = Markdoc.transform(ast, config);
  const rendered = Markdoc.renderers.react(content, React, { components });

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Title paper={publication} />
      <Section size="0">
        <Text size="2" variant="light">
          {publication.publisher} / {publication.publishedAt.text}
        </Text>
      </Section>
      <Section>
        <Text size="3">
          {publication.citation.author?.map((author: any) => {
            return <Author author={author} />;
          })}
        </Text>
      </Section>
      <Section>
        <NextLink href={publication.url} variant="simple" size="large">
          Read original article{" "}
        </NextLink>
      </Section>
      <Section>
        <Paragraph mono variant="light">
          {publication.meta.excerpt}
        </Paragraph>
      </Section>
      <Section>{rendered}</Section>
    </>
  );
}

export async function generateStaticParams() {
  const papers = await getAllPapers();
  return papers.map((paper) => ({
    slug: paper.slug,
  }));
}
