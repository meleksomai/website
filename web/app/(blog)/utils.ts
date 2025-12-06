"use server";

import fs from "node:fs";
import path from "node:path";
import type { JSX } from "react";

export type Metadata = {
  title: string;
  subtitle: string;
  featured: boolean;
  publishedAt: string;
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

  const publishedAt = formatDate(metadata.publishedAt);

  return {
    slug,
    metadata: {
      ...metadata,
      publishedAt,
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
  return await getMDXData(
    path.join(process.cwd(), "app", "(blog)", "_content")
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

function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
