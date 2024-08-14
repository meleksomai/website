import React from "react";

import { Box, Grid, Heading, Link, Stack, Text } from "@thugga/ui";

import { Title } from "@/components/Title";

import { getAllPapers } from "../../lib/papers";

export default async function MostPopularStack() {
  const publications = (await getAllPapers()).filter(
    (paper) => paper.meta.popular,
  );
  return (
    <Stack space="800">
      <Heading size="h3">Most Popular</Heading>
      {publications.map((paper) => (
        <Title
          key={paper.slug}
          href={`/paper/${paper.slug}`}
          title={paper.citation.title}
          info={`Published in ${paper.publisher} on ${paper.publishedAt.text}`}
          description={paper.meta.excerpt}
        />
      ))}
    </Stack>
  );
}
