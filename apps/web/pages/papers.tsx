import { GetStaticProps } from "next";
import React from "react";

import { Box, Grid, Heading, Paragraph, Section, Text } from "@thugga/ui";

import { NextLink } from "../components";
import { getAllPublications, Publication } from "../papers";

type PapersPageProps = {
  publications: Publication[];
};

export default function PapersPage({ publications }: PapersPageProps) {
  return (
    <>
      <Heading as="h1" size="4">
        Publications
      </Heading>
      <Heading as="h2" mono variant="contrast" size="1" css={{ pt: "$3" }}>
        I have spent the last decade working at exploring the intricate
        socio-technical model of technology, medicine, and healthcare. This has
        led me to work with brilliant colleagues and publish work in areas
        ranging from Computing, Patient Remote Monitoring, Neuro-Epidemiology,
        to Blockchain.
      </Heading>
      <Section size="2">
        <Box>
          <Heading as="h3" size="3" css={{ py: "$3" }}>
            Most Popular
          </Heading>
          <Grid gap="5" columns="1">
            {publications
              .filter((paper) => paper.meta.popular)
              .map((paper) => (
                <Box key={paper.slug}>
                  {/* <Separator size="2" /> */}
                  <Heading as="h4" size="2" css={{ paddingBottom: "$2" }}>
                    <NextLink href={`/paper/${paper.slug}`} variant="simple">
                      {paper.citation.title}
                    </NextLink>
                  </Heading>
                  <Text size="2" variant="light">
                    Published in {paper.publisher} on {paper.publishedAt.text}
                  </Text>
                  <Paragraph>{paper.meta.excerpt}</Paragraph>
                </Box>
              ))}
          </Grid>
        </Box>
      </Section>
      <Section size="2">
        <Box>
          <Heading as="h3" size="3" css={{ py: "$3" }}>
            {" "}
            Academic Publications{" "}
          </Heading>
          <Grid gap="5" columns="1">
            {publications.map((paper) => (
              <Box key={paper.slug}>
                {/* <Separator size="2" /> */}
                <Heading as="h4" size="2" css={{ paddingBottom: "$2" }}>
                  <NextLink href={`/paper/${paper.slug}`} variant="simple">
                    {paper.citation.title}
                  </NextLink>
                </Heading>
                <Text size="2" variant="light">
                  Published by {paper.publisher} on {paper.publishedAt.text}
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
