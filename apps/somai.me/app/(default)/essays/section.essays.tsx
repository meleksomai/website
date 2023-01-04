import React from "react";

import { Box, Grid, Heading, Paragraph, Section, Text } from "@thugga/ui";

import { NextLink } from "../../../components";
import { getAllPosts } from "../../../lib/essays";

export default async function EssaysSection() {
  const posts = await getAllPosts();
  return (
    <Section size="2">
      <Box>
        <Grid gap="5" columns="1">
          {posts.map((post) => (
            <Box key={post.meta.slug}>
              {/* <Separator size="2" /> */}
              <Heading as="h4" css={{ pb: "0" }}>
                <NextLink href={`/essay/${post.meta.slug}`} variant="simple">
                  {post.meta.title}
                </NextLink>
              </Heading>
              <Paragraph css={{ pt: "0", pb: "$2" }} variant="light">
                {post.meta.subtitle}
              </Paragraph>
              <Text size="2" variant="light">
                Published {post.meta.publishedAt.text}
              </Text>
              <Paragraph>{post.meta.excerpt}</Paragraph>
            </Box>
          ))}
        </Grid>
      </Box>
    </Section>
  );
}
