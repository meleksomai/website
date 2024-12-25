import fs from "fs";
import path from "path";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
import matter from "gray-matter";
import readingtime, { ReadTimeResults } from "reading-time";

// For some reason, the import statement is not working: https://github.com/sindresorhus/globby/issues/193
// eslint-disable-next-line @typescript-eslint/no-var-requires
const globby = require("globby");

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export type Role = {
  content: any;
  meta: {
    active: boolean;
    isCurrent: boolean;
    organization: string;
    readingTime: ReadTimeResults;
    role: string;
    slug: string;
    startAt: {
      iso: string;
      relative: string;
      text: string;
      timestamp: number;
    };
    url: string;
  };
};

export function getRoleBySlug(slug: string): Role {
  const postsDirectory = path.join(process.cwd(), "content", "roles");
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Step 1: Gray matter
  const { data, content } = matter(fileContents);

  // Step 2: date
  const startDate = data.startAt;
  const startAt = {
    text: dayjs(startDate).format("MMMM, YYYY"),
    iso: dayjs(startDate).toISOString(),
    timestamp: dayjs(startDate).valueOf(),
    relative: dayjs(startDate).fromNow(),
  };

  // Step 3: word count and reading time
  // readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  const readingTime = readingtime(content);

  return {
    meta: {
      ...data,
      readingTime,
      startAt,
      slug: realSlug,
    } as any,
    content,
  };
}

export async function getAllRoles(): Promise<Role[]> {
  const paths = await globby(["content/roles/*.md"]);
  const files = paths.map((filePath: string) => path.parse(filePath).name);
  const papers = files.map((slug: string) => getRoleBySlug(slug));
  return papers
    .filter((a: Role) => a.meta.active)
    .sort((a: Role, b: Role) => {
      return b.meta.startAt.timestamp - a.meta.startAt.timestamp;
    });
}
