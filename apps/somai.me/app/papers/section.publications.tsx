import React from "react";

import { Heading, Stack } from "@thugga/ui";

import { Title } from "@/components/Title";
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
                <Title
                  key={paper.slug}
                  href={`/paper/${paper.slug}`}
                  title={paper.citation.title}
                  // subtitle={paper.citation.author
                  //   ?.map((author: any) => {
                  //     return `${author.given} ${author.family}`;
                  //   })
                  //   .join(" / ")}
                  info={`Published in ${paper.publisher} on ${paper.publishedAt.text}`}
                  description={paper.meta.excerpt}
                />
              ))}
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
}
