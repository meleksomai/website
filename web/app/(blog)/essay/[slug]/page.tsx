import { Heading1, Heading2 } from "@workspace/ui/blocks/headings";
import { globby } from "globby";

const mdxRegex = /\.mdx$/;

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post, metadata } = await import(
    `../../_content/${slug}.mdx`
  );

  return (
    <div>
      <Heading1>{metadata.title}</Heading1>
      <Heading2 className="py-6 font-mono text-foreground/60 uppercase">
        {metadata.subtitle}
      </Heading2>
      <Post />
    </div>
  );
}

export async function generateStaticParams() {
  const files = await globby("@/app/(blog)/_content/*.mdx");
  const slugs = files.map((file) => file.replace(mdxRegex, ""));

  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;
