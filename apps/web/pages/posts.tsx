import { GetStaticProps } from "next";
import React from "react";

import { Box, Grid, Heading, Paragraph, Section, Text } from "@thugga/ui";

import { NextLink } from "../components";
import { getAllPosts, Post } from "../posts";

type PostPageProps = {
  posts: Post[];
};

export default function PostPage({ posts }: PostPageProps) {
  return (
    <>
      <Heading as="h1" size="4">
        Thoughts and Ideas
      </Heading>
      <Heading as="h2" variant="contrast" size="1" css={{ pt: "$3" }}>
        My goal of this space is to share thoughts and ideas that are sometime
        personal, sometime reflection of my current research, and in some
        occasions deviations from my current focus areas of expertise. This is a
        domain of reflection and none of the materials herein are meant to be
        pure logical or cohesive.
      </Heading>
      <Section size="2">
        <Box>
          {/* <Heading as="h3" size="3" css={{ py: "$3" }}>
            Recent
          </Heading> */}
          <Grid gap="5" columns="1">
            {posts.map((post) => (
              <Box key={post.slug}>
                {/* <Separator size="2" /> */}
                <Heading as="h4" size="2">
                  <NextLink href={`/post/${post.slug}`} variant="simple">
                    {post.meta.title}
                  </NextLink>
                  <Text size="4" mono variant="light">
                    {post.meta.subtitle}
                  </Text>
                </Heading>
                <Text size="2" variant="light">
                  Published {post.publishedAt.text}
                </Text>
                <Paragraph>{post.meta.excerpt}</Paragraph>
              </Box>
            ))}
          </Grid>
        </Box>
      </Section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts: posts,
    },
  };
};