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
  Flex,
} from "@thugga/ui";

import { NextLink } from "../components";
import { getAllPublications, Publication } from "../papers";
import Head from "next/head";

interface WebProps {
  recentBlogPosts?: any[];
  recentPublications?: Publication[];
}

export default function Web({ recentPublications, recentBlogPosts }: WebProps) {
  return (
    <>
      <Section>
        <Flex direction={{ "@initial": "columnReverse", "@bp2": "row" }}>
          <Box css={{ mr: "$7" }}>
            <Heading size="3" css={{ paddingTop: "$3" }}>
              Melek Somai
            </Heading>
            <Heading as="h2" variant="contrast" size="1">
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
          <Heading
            as="p"
            size="4"
            css={{
              lineHeight: "55px!important",
              "@bp2": {
                lineHeight: "85px!important",
              },
            }}
          >
            Operating at the intersection of{" "}
            <Heading
              inline
              as="span"
              size="4"
              css={{
                p: "$1",
                color: "$loContrast",
                backgroundColor: "$orange11",
              }}
            >
              Healthcare Informatics
            </Heading>
            ,{" "}
            <Heading
              inline
              as="span"
              size="4"
              css={{
                p: "$1",
                color: "$loContrast",
                backgroundColor: "$orange9",
              }}
            >
              Clinical Engineering
            </Heading>
            , and{" "}
            <Heading
              inline
              as="span"
              size="4"
              css={{
                p: "$1",
                color: "$loContrast",
                backgroundColor: "$orange8",
              }}
            >
              Data Science
            </Heading>
            .
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
