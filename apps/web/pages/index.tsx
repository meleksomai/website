import { GetStaticProps } from "next";
import * as React from "react";

import {
  Heading,
  Avatar,
  Section,
  Grid,
  Container,
  Text,
  Box,
  Flex,
  Paragraph,
} from "@thugga/ui";

import { NextLink, Seo } from "../components";
import { getAllPublications, Publication } from "../papers";
import { getAllPosts, Post } from "../posts";

interface WebProps {
  recentPosts?: Post[];
  recentPublications?: Publication[];
}

export default function Web({ recentPublications, recentPosts }: WebProps) {
  return (
    <>
      <Seo title="Assistant Professor Medicine and Chief Technology Officer" />
      <Section>
        <Flex direction={{ "@initial": "columnReverse", "@bp2": "row" }}>
          <Box css={{ mr: "$7" }}>
            <Heading size="4" css={{ paddingTop: "$3" }}>
              Melek Somai
            </Heading>
            <Heading as="h2" variant="light" size="1">
              Assistant Professor of Medicine at the Medical College of
              Wisconsin
              <br />
              Chief Technology Officer at Inception Health
            </Heading>
          </Box>
          <Flex align="center">
            <Avatar src="/images/profile.jpeg" alt="" fallback="MS" size="4" />
          </Flex>
        </Flex>
        <Section size="2">
          <Heading as="p" size="3" mono css={{ color: "$mauve9" }}>
            Operating at the intersection of{" "}
            <Heading inline as="span" size="3" mono>
              Healthcare Informatics
            </Heading>
            ,{" "}
            <Heading inline as="span" size="3" mono>
              Clinical Engineering
            </Heading>
            , and{" "}
            <Heading inline as="span" size="3" mono>
              Data Science
            </Heading>
            .
          </Heading>
        </Section>
      </Section>
      {recentPosts && recentPosts.length > 0 && (
        <Section size="1">
          <Heading as="h3" size="3" css={{ pb: "$5" }}>
            Recent Posts
          </Heading>
          <Box>
            <Grid gap="5" columns={{ "@initial": "1", "@bp2": "2" }}>
              {recentPosts.map((post) => (
                <Box key={post.meta.slug}>
                  <Heading as="h4" css={{ pb: "0" }}>
                    <NextLink href={`/post/${post.meta.slug}`} variant="simple">
                      {post.meta.title}
                    </NextLink>
                  </Heading>
                  <Paragraph css={{ pt: "0", pb: "$2" }} variant="light">
                    {post.meta.subtitle}
                  </Paragraph>
                  <Text size="2" variant="light">
                    Published {post.meta.publishedAt.text}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Box>
          <Container css={{ paddingTop: "$7" }}>
            <NextLink href="/posts">Check all posts</NextLink>
          </Container>
        </Section>
      )}
      {recentPublications && recentPublications.length > 0 && (
        <Section size="1">
          <Heading as="h3" size="3" css={{ pb: "$5" }}>
            Recent Publications
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
            <NextLink href="/papers">Check all publications</NextLink>
          </Container>
        </Section>
      )}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const papers = (await getAllPublications()).slice(0, 3);
  const posts = (await getAllPosts()).filter((post) => post.meta.featured);
  return {
    props: {
      recentPublications: papers,
      recentPosts: posts,
    },
  };
};
