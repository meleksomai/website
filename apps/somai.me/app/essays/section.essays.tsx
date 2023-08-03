import React from "react";

import { Box, Heading, Link, Stack, Text } from "@thugga/ui";

import { getAllPosts } from "../../lib/essays";

export default async function EssaysSection() {
  const posts = await getAllPosts();
  return (
    <Stack>
      <Box>
        <Stack space="1200">
          {posts.map((post) => (
            <Stack key={post.meta.slug} align="flex-start" space="200">
              <Box>
                <Link size="large" bold href={`/essay/${post.meta.slug}`}>
                  {post.meta.title}
                </Link>
                <Text color="slate11">{post.meta.subtitle}</Text>
                <Text color="slate11" variant="small">
                  Published {post.meta.publishedAt.text}
                </Text>
              </Box>
              <Text>{post.meta.excerpt}</Text>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
