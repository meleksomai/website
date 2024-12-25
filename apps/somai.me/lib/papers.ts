import fs from "fs";
import path from "path";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import relativeTime from "dayjs/plugin/relativeTime.js";

// For some reason, the import statement is not working: https://github.com/sindresorhus/globby/issues/193
// eslint-disable-next-line @typescript-eslint/no-var-requires
const globby = require("globby");

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

export function getPaperBySlug(slug: string): Publication | undefined {
  const filepath = path.join(
    process.cwd(),
    "content",
    "papers",
    "cache",
    `${slug}.json`,
  );

  if (!fs.existsSync(filepath)) {
    return undefined;
  }

  return JSON.parse(fs.readFileSync(filepath, "utf-8"));
}

export async function getAllPapers(): Promise<Publication[]> {
  const paths = await globby(["content/papers/cache/*.json"]);
  const files = paths.map((filePath: string) => path.parse(filePath).name);
  const papers = files
    .map((slug: string) => getPaperBySlug(slug))
    .filter(
      (paper: Publication | undefined) => paper !== undefined,
    ) as Publication[];

  return papers.sort((a, b) => {
    return b.publishedAt.timestamp - a.publishedAt.timestamp;
  });
}
