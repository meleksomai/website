import Markdoc from "@markdoc/markdoc";
import React from "react";

import { config, components } from "@thugga/markdoc";
import { Heading, Paragraph, Section, Text } from "@thugga/ui";

import { NextLink } from "../../../components";
import { getAllPapers, getPaperBySlug } from "../../../lib/papers";

function Author({ author }: any) {
  return (
    <Paragraph
      css={{
        display: "inline",
        paddingInlineEnd: "$1",
      }}
      variant="light"
    >
      {author.given} {author.family} /
    </Paragraph>
  );
}

export default function PaperPage({ params }: any) {
  const publication = getPaperBySlug(params?.slug as string);
  const ast = Markdoc.parse(publication.content);
  const content = Markdoc.transform(ast, config);
  const rendered = Markdoc.renderers.react(content, React, { components });

  return (
    <>
      <Heading as="h1" size="4">
        {publication.citation.title}
      </Heading>
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
