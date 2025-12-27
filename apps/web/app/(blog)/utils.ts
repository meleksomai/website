import fs from "node:fs";
import path from "node:path";
import type { JSX } from "react";

import { formatPublishedAt, parsePublishedAt } from "../../lib/date";

export type Metadata = {
  title: string;
  subtitle: string;
  featured: boolean;
  publishedAt: string;
  publishedAtFormatted: string;
  audio?: string;
  image?: string;
  category: string;
};

export type Essay = {
  slug: string;
  metadata: Metadata;
  readingTime: {
    text: string;
    minutes: number;
    words: number;
  };
  Essay: () => JSX.Element;
};

const mdxRegex = /\.mdx$/;

function getMDXSlugs(dir: string) {
  return fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".mdx")
    .map((file) => file.replace(mdxRegex, ""));
}

async function readMDXFile(slug: string): Promise<Essay> {
  const {
    // biome-ignore lint/nursery/noShadow: fine
    default: Essay,
    metadata,
    readingTime,
  } = await import(`@/app/(blog)/_content/${slug}.mdx`);

  const publishedAtDate = parsePublishedAt(metadata.publishedAt);
  const publishedAtFormatted = formatPublishedAt(publishedAtDate);

  return {
    slug,
    metadata: {
      ...metadata,
      publishedAt: metadata.publishedAt,
      publishedAtFormatted,
    },
    readingTime,
    Essay,
  };
}

function getMDXData(dir: string) {
  const slugs = getMDXSlugs(dir);
  const posts = Promise.all(slugs.map(async (slug) => await readMDXFile(slug)));
  return posts;
}

export async function getBlogEssays() {
  return (
    await getMDXData(path.join(process.cwd(), "app", "(blog)", "_content"))
  ).sort(
    (a, b) =>
      parsePublishedAt(b.metadata.publishedAt).getTime() -
      parsePublishedAt(a.metadata.publishedAt).getTime()
  );
}

export async function getBlogEssay(slug: string) {
  const posts = await getBlogEssays();
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }
  return post;
}
