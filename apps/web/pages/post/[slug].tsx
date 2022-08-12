import Markdoc from "@markdoc/markdoc";
import { GetStaticProps } from "next";
import React from "react";

import { config, components } from "@thugga/markdoc";
import { Heading, Paragraph, Section, Text } from "@thugga/ui";

import {
  getAllPosts,
  getPostBySlug,
  Post,
} from "../../posts";

type PostPageProps = {
  post: Post;
};

export default function PostPage({ post }: PostPageProps) {
  const ast = Markdoc.parse(post.content);
  const content = Markdoc.transform(ast, config);
  const rendered = Markdoc.renderers.react(content, React, { components });

  return (
    <>
      <Heading as="h1" size="3">
        {post.meta.title}
      </Heading>
      <Section size="0">
        <Text size="2">
          {post.publishedAt.text} / {post.publishedAt.relative}
        </Text>
      </Section>
      { post.meta.excerpt &&(
        <Section>
        <Paragraph mono>{post.meta.subtitle}</Paragraph>
        </Section>
      )}
      <Section>{rendered}</Section>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log(params)
  const doc = getPostBySlug(params?.slug as string);
  return {
    props: {
      post: doc,
    },
  };
};
