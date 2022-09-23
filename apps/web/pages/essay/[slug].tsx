import Markdoc from "@markdoc/markdoc";
import { GetStaticProps } from "next";
import React from "react";

import { config, components } from "@thugga/markdoc";
import {
  Avatar,
  Box,
  Flex,
  Heading,
  Paragraph,
  Section,
  Text,
} from "@thugga/ui";

import { Seo } from "../../components";
import { getAllPosts, getPostBySlug, Post } from "../../lib/essays";

type PostPageProps = {
  post: Post;
};

export default function PostPage({ post }: PostPageProps) {
  const ast = Markdoc.parse(post.content);
  const content = Markdoc.transform(ast, config);
  const rendered = Markdoc.renderers.react(content, React, { components });

  return (
    <>
      <Seo title={`${post.meta.title}`} description={post.meta.excerpt} />
      <Heading as="h1" size="4">
        {post.meta.title}
      </Heading>
      <Text size="6" variant="light">
        {post.meta.subtitle}
      </Text>
      <Section>
        <Flex
          justify="between"
          direction={{ "@initial": "columnReverse", "@bp1": "row" }}
          gap="2"
        >
          <Flex direction="row">
            <Flex align="center">
              <Avatar
                src="/images/profile.jpeg"
                alt=""
                fallback="MS"
                size="1"
              />
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
      {post.meta.excerpt && (
        <Section>
          <Paragraph mono variant="light">
            {post.meta.excerpt}
          </Paragraph>
        </Section>
      )}
      <Section>{rendered}</Section>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.meta.slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const doc = getPostBySlug(params?.slug as string);
  return {
    props: {
      post: doc,
    },
  };
};
