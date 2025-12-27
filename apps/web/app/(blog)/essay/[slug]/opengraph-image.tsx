import { GenerateImage } from "@/lib/og";
import { getBlogEssay } from "../../utils";

// Image metadata
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata } = await getBlogEssay(slug);

  return GenerateImage({
    size,
    title: metadata.title,
    subtitle: metadata.subtitle,
  });
}
