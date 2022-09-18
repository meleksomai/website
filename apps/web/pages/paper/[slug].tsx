import Markdoc from "@markdoc/markdoc";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { GetStaticProps } from "next";
import React from "react";

import { config, components } from "@thugga/markdoc";
import { Box, Flex, Heading, Paragraph, Section, Text } from "@thugga/ui";

import { NextLink, Seo } from "../../components";
import {
  getAllPublications,
  getPublicationBySlug,
  Publication,
} from "../../lib/papers";

type PaperPageProps = {
  publication: Publication;
};

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

export default function PaperPage({ publication }: PaperPageProps) {
  const ast = Markdoc.parse(publication.content);
  const content = Markdoc.transform(ast, config);
  const rendered = Markdoc.renderers.react(content, React, { components });

  return (
    <>
      <Seo
        title={`${publication.citation.title}`}
        description={publication.meta.excerpt}
      />
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
          <ArrowTopRightIcon
            width={23}
            height={23}
            style={{ display: "inline" }}
          />
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

export async function getStaticPaths() {
  const papers = await getAllPublications();
  return {
    paths: papers.map((pub) => ({ params: { slug: pub.slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const doc = getPublicationBySlug(params?.slug as string);
  return {
    props: {
      publication: doc,
    },
  };
};
