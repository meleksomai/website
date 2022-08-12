import fs from "fs";
import path from "path";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { globby } from "globby";
import matter from "gray-matter";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export type Post = {
  content: any;
  meta: any;
  publishedAt: {
    iso: string;
    relative: string;
    text: string;
    timestamp: number;
  };
  slug: string;
};

export function getPostBySlug(slug: string): Post {
  const postsDirectory = path.join(process.cwd(), "posts");
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Step 1: Gray matter
  const { data, content } = matter(fileContents);

  // Step 2: date
  const issuedDate = data.publishedAt;
  const publishedAt = {
    text: dayjs(issuedDate).format("LL"),
    iso: dayjs(issuedDate).toISOString(),
    timestamp: dayjs(issuedDate).valueOf(),
    relative: dayjs(issuedDate).fromNow(),
  };

  return {
    slug: realSlug,
    meta: data,
    content,
    publishedAt: publishedAt,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const paths = await globby(["posts/*.md"]);
  const files = paths.map((filePath) => path.parse(filePath).name);
  const papers = files.map((slug) => getPostBySlug(slug));
  return papers.sort((a, b) => {
    return b.publishedAt.timestamp - a.publishedAt.timestamp;
  });
}
