import React from "react";

import { Box, Grid, Heading, Paragraph, Section, Text } from "@thugga/ui";

import { NextLink } from "../../../components";
import { getAllPapers } from "../../../lib/papers";

export default async function MostPopularSection() {
  const publications = (await getAllPapers()).filter(
    (paper) => paper.meta.popular
  );
  return (
    <Section size="2">
      <Heading as="h3" size="2" css={{ pb: "$5" }}>
        Most Popular
      </Heading>
      <Grid gap="5" columns="1">
        {publications.map((paper) => (
          <Box key={paper.slug}>
            {/* <Separator size="2" /> */}
            <Heading as="h4" css={{ paddingBottom: "$2" }}>
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
    </Section>
  );
}
