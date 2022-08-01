import * as fs from "fs";
import * as path from "path";

import { globby } from "globby";
import matter from "gray-matter";
import { GetStaticProps } from "next";

import { Heading, Paragraph, Section } from "@thugga/ui";

type PaperPageProps = {
  authors?: [];
  publication: any;
};

export default function PaperPage({ authors, publication }: PaperPageProps) {
  return (
    <Section>
      <Heading as="h1">{publication.meta.title}</Heading>
      <Heading as="h2">doi {publication.meta.doi}</Heading>
      <Paragraph>{publication.content}</Paragraph>
    </Section>
  );
}

export async function getStaticPaths() {
  const paths = await globby(["papers/*.md"]);
  const files = paths.map((filePath) => path.parse(filePath).name);

  return {
    paths: files.map((pub) => ({ params: { slug: pub } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // FIXME: replace in another package
  function getDocBySlug(slug: string) {
    const papersDirectory = path.join(process.cwd(), "papers");
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = path.join(papersDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { slug: realSlug, meta: data, content };
  }

  const doc = getDocBySlug(params?.slug as string);
  return {
    props: {
      publication: doc,
    },
  };
};
