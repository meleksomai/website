import Markdoc from "@markdoc/markdoc";
import React from "react";

import { config, components } from "@thugga/markdoc";
import { Avatar, Flex, Heading, Paragraph, Section, Text } from "@thugga/ui";

import HeroSection from "../../../components/Hero";
import { getAllPosts, getPostBySlug } from "../../../lib/essays";


export default function EssayPage({ params }: any) {
  const post = getPostBySlug(params?.slug as string);
  const ast = Markdoc.parse(post.content);
  const content = Markdoc.transform(ast, config);
  const rendered = Markdoc.renderers.react(content, React, { components });

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <HeroSection>| {post.meta.title}</HeroSection>
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

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.meta.slug,
  }));
}
