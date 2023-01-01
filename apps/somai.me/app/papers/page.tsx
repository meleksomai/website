import React from "react";

import { Box, Grid, Heading, Paragraph, Section, Text } from "@thugga/ui";

import MostPopularSection from "./section.popular";

import { NextLink } from "../../components";
import HeroSection from "../../components/Hero";
import { getAllPapers } from "../../lib/papers";

export default async function PapersPage() {
  const publications = await getAllPapers();
  return (
    <>
      {/* @ts-expect-error Server Component */}
      <HeroSection>
        I have spent the last decade working at exploring the intricate
        socio-technical model of technology, medicine, and healthcare.
        {/* This
          has led me to work with brilliant colleagues and publish work in areas
          ranging from Computing, Patient Remote Monitoring, Neuro-Epidemiology,
          to Blockchain. */}
      </HeroSection>
      {/* @ts-expect-error Server Component */}
      <MostPopularSection />
      <Section size="1">
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
