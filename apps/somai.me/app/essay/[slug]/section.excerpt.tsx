"use client";

import { PropsWithChildren } from "react";

import { Paragraph, Section, Text } from "@thugga/ui";

import { Post } from "../../../lib/essays";

export interface TitleProps {
  post: Post;
}

export default async function Title(props: PropsWithChildren<TitleProps>) {
  const { post } = props;
  return (
    <>
      {post.meta.excerpt && (
        <Section>
          <Paragraph mono variant="light">
            {post.meta.excerpt}
          </Paragraph>
        </Section>
      )}
    </>
  );
}
