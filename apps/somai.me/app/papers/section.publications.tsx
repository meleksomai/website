import React from "react";

import { Box, Grid, Heading, Stack, Text, Link } from "@thugga/ui";

import { getAllPapers } from "@/lib/papers";

export default async function PublicationsSection() {
  const publications = await getAllPapers();
  // Get years descending order
  const years = new Set(
    publications
      .map((a) => new Date(a.publishedAt.iso).getFullYear())
      .sort((a, b) => b - a)
  );
  return (
    <Stack space="1200">
      {Array.from(years.values()).map((year) => (
        <Stack key={year}>
          <Heading size="h3">{year}</Heading>
          <Stack space="800">
            {publications
              .filter((a) => new Date(a.publishedAt.iso).getFullYear() === year)
              .map((paper) => (
                <Box>
                  {/* <Separator size="2" /> */}
                  <Link size="large" bold href={`/paper/${paper.slug}`}>
                    {paper.citation.title}
                  </Link>
                  <Text variant="small" color="slate11">
                    Published by {paper.publisher} on {paper.publishedAt.text}
                  </Text>
                </Box>
              ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
