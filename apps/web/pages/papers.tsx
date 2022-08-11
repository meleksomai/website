import { GetStaticProps } from "next";
import React from "react";

import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Paragraph,
  Section,
  Text,
} from "@thugga/ui";

import { NextLink } from "../components";
import { getAllPublications, Publication } from "../papers";

type PapersPageProps = {
  publications: Publication[];
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

export default function PapersPage({ publications }: PapersPageProps) {
  return (
    <>
      <Heading as="h1" size="3">
        Papers
      </Heading>
      <Section size="0">
        <Box>
          <Grid gap="5" columns="1">
            {publications.map((paper) => (
              <Box key={paper.slug}>
                {/* <Separator size="2" /> */}
                <Heading as="h4" css={{ paddingBottom: "$2" }}>
                  <NextLink href={`/paper/${paper.slug}`} variant="contrast">
                    {paper.citation.title}
                  </NextLink>
                </Heading>
                <Text size="2">
                  Published by{" "}
                  {paper.citation.author?.map((author: any) => (
                    <>
                      {author.given} {author.family},{"  "}
                    </>
                  ))}{" "}
                  {paper.publisher} on {paper.publishedAt.text}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const papers = await getAllPublications();
  return {
    props: {
      publications: papers,
    },
  };
};
