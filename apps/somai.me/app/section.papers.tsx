import { RxArrowTopRight } from "react-icons/rx";

import { Heading, Grid, Box, Text, Link, Stack } from "@thugga/ui";

import { getAllPapers } from "../lib/papers";

export default async function PapersSection() {
  const recentPublications = await (await getAllPapers()).slice(0, 3);

  return (
    <>
      {recentPublications && recentPublications.length > 0 && (
        <Stack>
          <Heading size="h3">Recent Publications</Heading>
          <Box>
            <Stack space="800">
              {recentPublications.map((paper) => (
                <Box key={paper.slug}>
                  {/* <Separator size="2" /> */}
                  <Heading size="h4">
                    <Link href={`/paper/${paper.slug}`}>
                      {paper.citation.title}
                    </Link>
                  </Heading>
                  <Text color="slate11" variant="small">
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
            </Stack>
          </Box>
          <Box>
            <Link suffix={<RxArrowTopRight />} href="/papers">
              Check all publications{" "}
              {/* <ArrowRightIcon style={{ display: "inline" }} /> */}
            </Link>
          </Box>
        </Stack>
      )}
    </>
  );
}
