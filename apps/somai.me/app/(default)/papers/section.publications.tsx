import React from "react";

import { Box, Grid, Heading, Section, Text } from "@thugga/ui";

import { NextLink } from "../../../components";
import { getAllPapers } from "../../../lib/papers";

export default async function PublicationsSection() {
  const publications = await getAllPapers();
  return (
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
  );
}
