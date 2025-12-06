import { Heading1, Heading2 } from "@workspace/ui/blocks/headings";
import { getBlogPost, getBlogPosts } from "../../utils";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { Essay, metadata, readingTime } = await getBlogPost(slug);

  return (
    <div>
      <Heading1>{metadata.title}</Heading1>
      <Heading2 className="py-6 font-mono text-foreground/60 uppercase">
        {metadata.subtitle}
      </Heading2>
      <p className="font-mono text-foreground/60 text-xs uppercase md:text-sm">
        / {metadata.publishedAt} / {readingTime.text} / {readingTime.words}{" "}
        words
      </p>
      <Essay />
    </div>
  );
}

export async function generateStaticParams() {
  const essays = await getBlogPosts();

  return essays.map((essay) => ({ slug: essay.slug }));
}

export const dynamicParams = false;
