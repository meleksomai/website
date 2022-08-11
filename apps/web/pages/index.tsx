import { GetStaticProps } from "next";
import * as React from "react";

import {
  Paragraph,
  Heading,
  Avatar,
  Section,
  Grid,
  Container,
  Text,
  Box,
  Link,
} from "@thugga/ui";

import { NextLink } from "../components";
import { getAllPublications, Publication } from "../papers";

interface WebProps {
  recentBlogPosts?: any[];
  recentPublications?: Publication[];
}

export default function Web({ recentPublications, recentBlogPosts }: WebProps) {
  return (
    <>
      <Section>
        <Avatar src="/images/profile.jpeg" alt="" fallback="MS" size="3" />
        <Heading size="3" css={{ paddingTop: "$3" }}>
          Melek Somai
        </Heading>
        <Heading as="h2" variant="contrast" size="1" css={{ pt: "$3" }}>
          Assistant Professor of Medicine at the Medical College of Wisconsin
        </Heading>
        <Heading as="h2" variant="contrast">
          Chief Technology Officer at Inception Health
        </Heading>
        <Section size="2">
          <Heading as="p" size="4">
            Operating at the intersection of Healthcare Informatics, Clinical
            Engineering, and Data Science.
          </Heading>
        </Section>
      </Section>
      {recentPublications && recentPublications.length > 0 && (
        <Section size="1">
          <Heading as="h3" size="3">
            Recent Publications
          </Heading>
          <Box>
            <Grid gap="5" columns="1">
              {recentPublications.map((paper) => (
                <Box key={paper.slug}>
                  {/* <Separator size="2" /> */}
                  <Heading as="h4" css={{ paddingBottom: "$2" }}>
                    <NextLink href={`/paper/${paper.slug}`} variant="contrast">
                      {paper.citation.title}
                    </NextLink>
                  </Heading>
                  <Text size="2">
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
            <NextLink href="/papers">Check all publications</NextLink>
          </Container>
        </Section>
      )}
      {recentBlogPosts && recentBlogPosts.length > 0 && (
        <Section size="1">
          <Heading as="h3" size="3">
            Recent Posts
          </Heading>
        </Section>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const papers = (await getAllPublications()).slice(0, 3);
  return {
    props: {
      recentPublications: papers,
    },
  };
};
