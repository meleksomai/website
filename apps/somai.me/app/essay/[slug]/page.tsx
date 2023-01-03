import Markdoc from "@markdoc/markdoc";
import React from "react";

import { config, components } from "@thugga/markdoc";
import { Section } from "@thugga/ui";

import DetailsSection from "./section.details";
import Title from "./section.title";
import Excerpt from "./section.excerpt";

import { getAllPosts, getPostBySlug } from "../../../lib/essays";

export default function EssayPage({ params }: { params: { slug: string } }) {
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
      {/* @ts-expect-error Server Component */}
      <Excerpt post={post} />
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
