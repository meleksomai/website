import createMDX from "@next/mdx";
import createWithVercelToolbar from "@vercel/toolbar/plugins/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      // Without options
      "remark-gfm",
      // With options
      ["remark-toc", { heading: "The Table" }],
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "metadata" }],
      "remark-reading-time",
      "remark-reading-time/mdx",
    ],
    rehypePlugins: [
      // Without options
      "rehype-slug",
      // With options
      ["rehype-katex", { strict: true, throwOnError: true }],
    ],
  },
});

const withVercelToolbar = createWithVercelToolbar();

// Merge MDX config with Next.js config
export default withMDX(withVercelToolbar(nextConfig));
