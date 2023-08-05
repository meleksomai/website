import React from "react";

import { Box, Heading, Link, Stack, Text } from "@thugga/ui";

import { Title } from "@/components/Title";

import { getAllPosts } from "../../lib/essays";

export default async function EssaysSection() {
  const posts = await getAllPosts();
  return (
    <Stack>
      <Box>
        <Stack space="1200">
          {posts.map((post) => (
            <Title
              key={post.meta.slug}
              href={`/essay/${post.meta.slug}`}
              title={post.meta.title}
              subtitle={post.meta.subtitle}
              info={`Published on ${post.meta.publishedAt.text}`}
              description={post.meta.excerpt}
            />
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}
