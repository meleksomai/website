import { GetStaticProps } from "next";
import React from "react";

import { Box, Grid, Heading, Paragraph, Section, Text } from "@thugga/ui";

import { NextLink, Seo } from "../components";
import { getAllPosts, Post } from "../lib/essays";

const DEFAULT_DESCRIPTION =
  "My goal of this space is to share thoughts and ideas that are sometime personal, sometime reflection of my current research, and in some occasions deviations from my current focus areas of expertise. This is a domain of reflection and none of the materials herein are meant to be pure logical or cohesive.";

type PostPageProps = {
  posts: Post[];
};

export default function PostPage({ posts }: PostPageProps) {
  return (
    <>
      <Seo
        title="Ideas and Thoughts about Medicine, Technology, and Public Health"
        description={DEFAULT_DESCRIPTION}
      />
      <Heading as="h1" size="4">
        Essays
      </Heading>
      <Heading as="h2" mono variant="contrast" size="1" css={{ pt: "$3" }}>
        {DEFAULT_DESCRIPTION}
      </Heading>
      <Section size="3">
        <Box>
          {/* <Heading as="h3" size="3" css={{ py: "$3" }}>
            Recent
          </Heading> */}
          <Grid gap="5" columns="1">
            {posts.map((post) => (
              <Box key={post.meta.slug}>
                {/* <Separator size="2" /> */}
                <Heading as="h4" size="2">
                  <NextLink href={`/essay/${post.meta.slug}`} variant="simple">
                    {post.meta.title}
                  </NextLink>
                  <Text size="4" mono variant="light">
                    {post.meta.subtitle}
                  </Text>
                </Heading>
                <Text size="2" variant="light">
                  Published {post.meta.publishedAt.text} /{" "}
                  {post.meta.readingTime.text}
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
