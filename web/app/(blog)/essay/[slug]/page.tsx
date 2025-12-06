import { Heading1, Heading3 } from "@workspace/ui/blocks/headings";
import { getBlogEssay, getBlogEssays } from "../../utils";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { Essay, metadata, readingTime } = await getBlogEssay(slug);

  return (
    <div>
      <Heading1>{metadata.title}</Heading1>
      <Heading3 className="py-6 font-mono text-muted-foreground uppercase">
        / {metadata.subtitle}
      </Heading3>
      <p className="font-mono text-muted-foreground text-xs uppercase md:text-sm">
        / {metadata.publishedAt} / {readingTime.text} / {readingTime.words}{" "}
        words
      </p>
      <Essay />
    </div>
  );
}

export async function generateStaticParams() {
  const essays = await getBlogEssays();

  return essays.map((essay) => ({ slug: essay.slug }));
}

export const dynamicParams = false;
