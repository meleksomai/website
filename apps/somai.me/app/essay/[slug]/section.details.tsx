import { PropsWithChildren } from "react";

import { Stack, Text } from "@thugga/ui";

import { Post } from "../../../lib/essays";

export interface DetailsSectionProps {
  post: Post;
}

export default function DetailsSection(
  props: PropsWithChildren<DetailsSectionProps>
) {
  const { post } = props;
  return (
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
      <Text variant="small">Melek Somai / {post.meta.publishedAt.text}</Text>
      <Text variant="small">
        {post.meta.readingTime.words} words / {post.meta.readingTime.text}
      </Text>
    </Stack>
  );
}
