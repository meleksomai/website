import fs from "fs";
import path from "path";

import { format as edtfFormat } from "@citation-js/date";
import Cite from "citation-js";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { globby } from "globby";
import matter from "gray-matter";

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

export function getPublicationBySlug(slug: string): Publication {
  const papersDirectory = path.join(process.cwd(), "papers");
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(papersDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Step 1: Gray matter
  const { data, content } = matter(fileContents);

  // Step 2: DOI Metadata
  const cite = new Cite(data.doi ?? data.paper);
  const items = cite.format("data", {
    format: "object",
    template: "apa",
    lang: "en-US",
  });
  // check if it is an array
  let article = null;
  if (Array.isArray(items)) {
    article = items[0];
  } else {
    article = items;
  }

  // Step 3: date
  const issuedDate = edtfFormat(article.issued);
  const publishedAt = {
    text: dayjs(issuedDate).format("LL"),
    iso: dayjs(issuedDate).toISOString(),
    timestamp: dayjs(issuedDate).valueOf(),
    relative: dayjs(issuedDate).fromNow(),
  };

  // Step 4: publisher
  const publisher = article["container-title"] || article.publisher;

  // Step 5: url
  const url = article.URL;

  return {
    doi: data.doi,
    slug: realSlug,
    meta: data,
    content,
    citation: article,
    publishedAt: publishedAt,
    publisher: publisher,
    url: url,
  };
}

export async function getAllPublications(): Promise<Publication[]> {
  const paths = await globby(["papers/*.md"]);
  const files = paths.map((filePath) => path.parse(filePath).name);
  const papers = files.map((slug) => getPublicationBySlug(slug));
  return papers.sort((a, b) => {
    return b.publishedAt.timestamp - a.publishedAt.timestamp;
  });
}
