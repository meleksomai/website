import {
  Heading,
  Grid,
  Section,
  Box,
  Paragraph,
  Text,
  Container,
} from "@thugga/ui";

import { NextLink } from "../components";
import { getAllPosts } from "../lib/essays";

export default async function EssaysSection() {
  const recentPosts = await getAllPosts();

  return (
    <>
      {recentPosts && recentPosts.length > 0 && (
        <Section size="2">
          <Heading as="h3" size="2" css={{ pb: "$5" }}>
            Recent Posts
          </Heading>
          <Box>
            <Grid gap="5" columns={{ "@initial": "1", "@bp2": "2" }}>
              {recentPosts.map((post) => (
                <Box key={post.meta.slug}>
                  <Heading as="h4" css={{ pb: "0" }}>
                    <NextLink
                      href={`/essay/${post.meta.slug}`}
                      variant="simple"
                    >
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
            <NextLink href="/essays">
              Check all essays
              {/* <ArrowRightIcon style={{ display: "inline" }} /> */}
            </NextLink>
          </Container>
        </Section>
      )}
    </>
  );
}
