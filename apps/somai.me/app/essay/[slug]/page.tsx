import Markdoc from "@markdoc/markdoc";
import React from "react";

import { config, components } from "@thugga/markdoc";
import { Avatar, Flex, Heading, Paragraph, Section, Text } from "@thugga/ui";

import DetailsSection from "./details";
import Title from "./title";

import { getAllPosts, getPostBySlug } from "../../../lib/essays";

export default function EssayPage({ params }: any) {
  const post = getPostBySlug(params?.slug as string);
  const ast = Markdoc.parse(post.content);
  const content = Markdoc.transform(ast, config);
  const rendered = Markdoc.renderers.react(content, React, { components });

  return (
    <>
      {/* @ts-expect-error Server Component */}
      <Title post={post} />
      {/* @ts-expect-error Server Component */}
      <DetailsSection post={post} />
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
