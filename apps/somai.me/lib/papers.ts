import fs from "fs";
import path from "path";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { globby } from "globby";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export type Publication = {
  citation: any;
  content: any;
  doi: string;
  meta: any;
  publishedAt: {
    iso: string;
    relative: string;
    text: string;
    timestamp: number;
  };
  publisher: string;
  slug: string;
  url: string;
};

export function getPaperBySlug(slug: string): Publication {
  const filepath = path.join(
    process.cwd(),
    "content",
    "papers",
    "cache",
    `${slug}.json`,
  );
  return JSON.parse(fs.readFileSync(filepath, "utf-8"));
}

export async function getAllPapers(): Promise<Publication[]> {
  const paths = await globby(["content/papers/cache/*.json"]);
  const files = paths.map((filePath) => path.parse(filePath).name);
  const papers = files.map((slug) => getPaperBySlug(slug));
  return papers.sort((a, b) => {
    return b.publishedAt.timestamp - a.publishedAt.timestamp;
  });
}
