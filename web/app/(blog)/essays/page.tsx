import { Heading2, Heading3 } from "@workspace/ui/blocks/headings";
import { getBlogPosts } from "../utils";

export default async function Page() {
  const posts = await getBlogPosts();
  console.log("posts", posts);
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <div className="flex flex-col gap-4" key={post.slug}>
          <Heading2 className="py-6 font-mono text-foreground/60 uppercase">
            {post.metadata.title}
          </Heading2>
          <Heading3 className="font-mono text-foreground/60 uppercase">
            {post.metadata.subtitle}
          </Heading3>
          <p className="font-mono text-foreground/60 text-xs uppercase md:text-sm">
            / {post.metadata.publishedAt} / {post.readingTime.text} /{" "}
            {post.readingTime.words} words
          </p>
        </div>
      ))}
    </div>
  );
}
