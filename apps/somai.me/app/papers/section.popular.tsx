import React from "react";

import { Box, Grid, Heading, Link, Stack, Text } from "@thugga/ui";

import { getAllPapers } from "../../lib/papers";

export default async function MostPopularStack() {
  const publications = (await getAllPapers()).filter(
    (paper) => paper.meta.popular
  );
  return (
    <Stack space="800">
      <Heading size="h3">Most Popular</Heading>
      {publications.map((paper) => (
        <Stack space="200" key={paper.slug} align="flex-start">
          <Box>
            <Link size="large" bold href={`/paper/${paper.slug}`}>
              {paper.citation.title}
            </Link>
            <Text color="slate11" variant="small">
              Published in {paper.publisher} on {paper.publishedAt.text}
            </Text>
          </Box>
          <Text>{paper.meta.excerpt}</Text>
        </Stack>
      ))}
    </Stack>
  );
}
