import { PropsWithChildren } from "react";

import { Avatar, Flex, Section, Text } from "@thugga/ui";

import { Post } from "../../../lib/essays";

export interface DetailsSectionProps {
  post: Post;
}

export default async function DetailsSection(
  props: PropsWithChildren<DetailsSectionProps>
) {
  const { post } = props;
  return (
    <Section>
      <Flex
        justify="between"
        direction={{ "@initial": "columnReverse", "@bp1": "row" }}
        gap="2"
      >
        <Flex direction="row">
          <Flex align="center">
            {/* <Avatar src="/images/profile.jpeg" alt="" fallback="MS" size="1" /> */}
          </Flex>
          <Flex align="center" css={{ pl: "$2" }}>
            <Text size="3">Melek Somai / {post.meta.publishedAt.text}</Text>
          </Flex>
        </Flex>
        <Flex align="center">
          <Text size="3">
            {post.meta.readingTime.words} words / {post.meta.readingTime.text}
          </Text>
        </Flex>
      </Flex>
    </Section>
  );
}
