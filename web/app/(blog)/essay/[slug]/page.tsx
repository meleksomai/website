import { Heading1, Heading3 } from "@workspace/ui/blocks/headings";
import { getBlogEssay, getBlogEssays } from "../../utils";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { Essay, metadata, readingTime } = await getBlogEssay(slug);

  // console.log("TOC", tableOfContents);
  return (
    <article className="prose">
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <Heading1>{metadata.title}</Heading1>
          <Heading3 className="font-mono text-muted-foreground uppercase">
            {metadata.subtitle}
          </Heading3>
          <div className="py-8 font-mono text-muted-foreground text-xs uppercase md:text-sm">
            / {metadata.publishedAt} / {readingTime.text} / {readingTime.words}{" "}
            words
          </div>
        </div>
        <div>
          <Essay />
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const essays = await getBlogEssays();

  return essays.map((essay) => ({ slug: essay.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata } = await getBlogEssay(slug);

  return {
    title: `Melek Somai | ${metadata.title}`,
    description: metadata.subtitle,
    twitter: {
      card: "summary_large_image",
      title: `Melek Somai | ${metadata.title}`,
      description: metadata.subtitle,
      creator: "@meleksomai",
      site: "https://somai.me",
    },
  };
}
