import { PropsWithChildren } from "react";

import { Heading, Avatar, Section, Box, Flex } from "@thugga/ui";

import { Post } from "../../../../lib/essays";

const TEXT_SIZE = "3";

export interface TitleProps {
  post: Post;
}

export default async function Title(props: PropsWithChildren<TitleProps>) {
  const { post } = props;
  return (
    <Section size="2">
      <Heading as="h1" size={TEXT_SIZE} inline>
        {post.meta.title}.{" "}
      </Heading>
      <Heading inline as="h2" size={TEXT_SIZE} css={{ color: "$slate10" }}>
        {post.meta.subtitle}
      </Heading>
    </Section>
  );
}
