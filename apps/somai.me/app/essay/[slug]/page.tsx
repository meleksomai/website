import Markdoc from "@markdoc/markdoc";
import React from "react";

import { config, components } from "@thugga/markdoc";
import { Stack } from "@thugga/ui";

import { getAllPosts, getPostBySlug } from "@/lib/essays";

import DetailsSection from "./section.details";
import Excerpt from "./section.excerpt";
import Title from "./section.title";

export default function EssayPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params?.slug as string);
  const ast = Markdoc.parse(post.content);
  const content = Markdoc.transform(ast, config);
  const rendered = Markdoc.renderers.react(content, React, { components });

  return (
    <Stack space="800">
      <Title post={post} />
      <DetailsSection post={post} />
      <Excerpt post={post} />
      <Stack>{rendered}</Stack>
    </Stack>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.meta.slug,
  }));
}
