import fs from "fs";
import path from "path";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { globby } from "globby";
import matter from "gray-matter";
import readingtime, { ReadTimeResults } from "reading-time";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export type Post = {
  content: string;
  meta: {
    [key: string]: any;
    excerpt: string;
    image: string;
    featured: boolean;
    publishedAt: {
      iso: string;
      relative: string;
      text: string;
      timestamp: number;
    };
    readingTime: ReadTimeResults;
    slug: string;
  };
};

export function getPostBySlug(slug: string): Post {
  const postsDirectory = path.join(process.cwd(), "content", "posts");
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Step 1: Gray matter
  const { data, content } = matter(fileContents);

  // Step 2: date
  const issuedDate = data.publishedAt;
  const publishedAt = {
    text: dayjs(issuedDate).format("MMMM, YYYY"),
    iso: dayjs(issuedDate).toISOString(),
    timestamp: dayjs(issuedDate).valueOf(),
    relative: dayjs(issuedDate).fromNow(),
  };

  // Step 3: word count and reading time
  // readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  const readingTime = readingtime(content);

  return {
    meta: {
      ...data,
      readingTime,
      publishedAt,
      slug: realSlug,
    } as any,
    content,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const paths = await globby(["content/posts/*.md"]);
  const files = paths.map((filePath) => path.parse(filePath).name);
  const papers = files.map((slug) => getPostBySlug(slug));
  return papers.sort((a, b) => {
    return b.meta.publishedAt.timestamp - a.meta.publishedAt.timestamp;
  });
}
