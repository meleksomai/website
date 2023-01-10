import { Heading, Grid, Section, Box, Text, Container } from "@thugga/ui";

import { NextLink } from "../components";
import { getAllPapers } from "../lib/papers";

export default async function PapersSection() {
  const recentPublications = await (await getAllPapers()).slice(0, 3);

  return (
    <>
      {recentPublications && recentPublications.length > 0 && (
        <Section size="2">
          <Heading as="h3" size="2" css={{ pb: "$5" }}>
            Publications.
          </Heading>
          <Box>
            <Grid gap="5" columns="1">
              {recentPublications.map((paper) => (
                <Box key={paper.slug}>
                  {/* <Separator size="2" /> */}
                  <Heading as="h4" css={{ paddingBottom: "$2" }}>
                    <NextLink href={`/paper/${paper.slug}`} variant="simple">
                      {paper.citation.title}
                    </NextLink>
                  </Heading>
                  <Text size="2" variant="light">
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
            </Grid>
          </Box>
          <Container css={{ paddingTop: "$7" }}>
            <NextLink href="/papers">
              Check all publications{" "}
              {/* <ArrowRightIcon style={{ display: "inline" }} /> */}
            </NextLink>
          </Container>
        </Section>
      )}
    </>
  );
}
