import { RxArrowTopRight } from "react-icons/rx";

import { Heading, Grid, Box, Text, Link, Stack } from "@thugga/ui";

import { getAllPosts } from "../lib/essays";

export default async function EssaysSection() {
  const recentPosts = await getAllPosts();

  return (
    <>
      {recentPosts && recentPosts.length > 0 && (
        <Stack>
          <Heading size="h3">Recent Essays</Heading>
          <Box>
            <Grid columns={2} gap="800">
              {recentPosts.map((post) => (
                <Box key={post.meta.slug}>
                  <Heading size="h4">
                    <Link href={`/essay/${post.meta.slug}`}>
                      {post.meta.title}
                    </Link>
                  </Heading>
                  <Text color="slate11">{post.meta.subtitle}</Text>
                  <Text color="slate11" variant="small">
                    Published {post.meta.publishedAt.text}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Box>
          <Box>
            <Link suffix={<RxArrowTopRight />} href="/essays">
              Check all essays
            </Link>
          </Box>
        </Stack>
      )}
    </>
  );
}
