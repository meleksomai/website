import Markdoc from "@markdoc/markdoc";
import { GetStaticProps } from "next";
import React from "react";

// import { config, components } from "@thugga/markdoc";
import { Heading, Paragraph, Section, Text } from "@thugga/ui";

import { NextLink } from "../../components";
import {
  getAllPublications,
  getPublicationBySlug,
  Publication,
} from "../../papers";

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
    >
      {author.given} {author.family} /
    </Paragraph>
  );
}

export default function PaperPage({ publication }: PaperPageProps) {
  const ast = Markdoc.parse(publication.content);
  // const content = Markdoc.transform(ast, config);
  // const rendered = Markdoc.renderers.react(content, React, { components });

  return (
    <>
      <Heading as="h1" size="3">
        {publication.citation.title}
      </Heading>
      <Section size="0">
        <Text size="2">
          {publication.publisher} / {publication.publishedAt.text}
        </Text>
      </Section>
      <Section>
        <NextLink href={publication.url} variant="contrast">
          Read online
        </NextLink>
      </Section>
      <Section size="0">
        <Text size="3">
          {publication.citation.author?.map((author: any) => {
            return <Author author={author} />;
          })}
        </Text>
      </Section>
      <Section>
        <Paragraph mono>{publication.meta.excerpt}</Paragraph>
      </Section>
      {/* <Section>{rendered}</Section> */}
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
