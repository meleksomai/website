/* eslint-disable @typescript-eslint/no-non-null-assertion */
import fs from "fs";
import path from "path";

import { format as edtfFormat } from "@citation-js/date";
import Cite from "citation-js";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat.js";
import relativeTime from "dayjs/plugin/relativeTime.js";
import { globby } from "globby";
import matter from "gray-matter";

import { Publication } from "./schema";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export function getPublication(filepath: string): Publication {
  const slug = path.parse(filepath).name;
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(filepath);
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
  let article = {} as any;
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

export async function listAllPublications(filepath: string = "papers", extension: string = "*.md"): Promise<string[]> {
  const paths = await globby([path.join(__dirname, filepath, extension)]);
  return paths.map((filepath) => path.parse(filepath).name);
}

// export async function getAllPublications(): Promise<Publication[]> {
//   const paths = await listAllPublications("papers/*.md");
//   const files = paths.map((filepath) => path.parse(filepath).name);
//   const papers = files.map((slug) => getPublicationBySlug(slug));
//   return papers.sort((a, b) => {
//     return b.publishedAt.timestamp - a.publishedAt.timestamp;
//   });
// }

export async function cacheAllPublications(filepath: string = "papers", extension: string = "*.md") {
  const paths = await globby([path.join(__dirname, filepath, extension)]);
  paths.map((file) => {
    console.log(file);
    const slug = path.parse(file).name;
    const publication = getPublication(file);
    // console.log(oub);
    fs.writeFileSync(
      path.join(`${path.dirname(file)}/cache`, `${slug}.json`),
      JSON.stringify(publication),
      "utf8"
    );
  });
}
