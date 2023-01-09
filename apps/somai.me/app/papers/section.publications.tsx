import React from "react";

import { Box, Grid, Heading, Section, Text } from "@thugga/ui";

import { NextLink } from "../../components";
import { getAllPapers } from "../../lib/papers";

export default async function PublicationsSection() {
  const publications = await getAllPapers();
  // Get years descending order
  const years = new Set(
    publications
      .map((a) => new Date(a.publishedAt.iso).getFullYear())
      .sort((a, b) => b - a)
  );
  return (
    <Box>
      {Array.from(years.values()).map((year) => (
        <Section size="1">
          <Heading as="h3" size="2" css={{ pb: "$5" }}>
            {year}
          </Heading>
          <Grid gap="5" columns="1">
            {publications
              .filter((a) => new Date(a.publishedAt.iso).getFullYear() === year)
              .map((paper) => (
                <Box key={paper.slug}>
                  {/* <Separator size="2" /> */}
                  <Heading as="h4" css={{ paddingBottom: "$2" }}>
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
        </Section>
      ))}
    </Box>
  );
}
