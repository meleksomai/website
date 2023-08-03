import { PropsWithChildren } from "react";

import { Stack, Text } from "@thugga/ui";

import { Post } from "../../../lib/essays";

export interface TitleProps {
  post: Post;
}

export default function Title(props: PropsWithChildren<TitleProps>) {
  const { post } = props;
  return (
    <>
      {post.meta.excerpt && (
        <Text color="slate11" variant="large">
          {post.meta.excerpt}
        </Text>
      )}
    </>
  );
}
