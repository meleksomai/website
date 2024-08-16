import Markdoc from "@markdoc/markdoc";
import type { Metadata } from "next";
import React from "react";

import { config, components } from "@thugga/markdoc";
import { Stack } from "@thugga/ui";

import { getAllPosts, getPostBySlug } from "@/lib/essays";
import { Seo } from "@/lib/seo";

import DetailsSection from "./section.details";
import Excerpt from "./section.excerpt";
import Title from "./section.title";

type Props = {
  params: { slug: string };
};

export const revalidate = 0;

export default function EssayPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
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

export function generateMetadata({ params }: Props): Metadata {
  // read route params
  const id = params.slug;

  // fetch data
  const post = getPostBySlug(id);

  return Seo({
    title: post.meta.title,
    description: post.meta.excerpt,
    og: {
      title: post.meta.title,
      subtitle: post.meta.subtitle,
    },
  });
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.meta.slug,
  }));
}
