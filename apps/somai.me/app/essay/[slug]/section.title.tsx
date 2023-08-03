import { PropsWithChildren } from "react";

import { Heading, Stack } from "@thugga/ui";

import { Post } from "@/lib/essays";

export interface TitleProps {
  post: Post;
}

export default function Title(props: PropsWithChildren<TitleProps>) {
  const { post } = props;
  return (
    <Stack>
      <Heading size="h2">
        {post.meta.title}.{" "}
        <Heading size="h2" as="span" color="slate11">
          {post.meta.subtitle}
        </Heading>
      </Heading>
    </Stack>
  );
}
