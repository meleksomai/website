import { PropsWithChildren } from "react";

import { Stack, Text } from "@thugga/ui";

import ViewsCounter from "./counter";

import { Post } from "../../../lib/essays";

export interface DetailsSectionProps {
  post: Post;
}

export default function DetailsSection(
  props: PropsWithChildren<DetailsSectionProps>,
) {
  const { post } = props;
  return (
    <Stack space="100">
      <Stack
        align="flex-start"
        direction={{
          desktop: "row",
          tablet: "row",
          mobile: "column",
        }}
        justify="space-between"
        space="200"
      >
        <Text variant="small">{post.meta.publishedAt.text}</Text>
        <Text variant="small">
          {post.meta.readingTime.words} words / {post.meta.readingTime.text}
        </Text>
      </Stack>
      <Stack
        align="flex-start"
        direction={{
          desktop: "row",
          tablet: "row",
          mobile: "column",
        }}
        justify="space-between"
        space="200"
      >
        <Text variant="small">By Melek Somai</Text>
        <ViewsCounter essay={post.meta.slug} />
      </Stack>
    </Stack>
  );
}
