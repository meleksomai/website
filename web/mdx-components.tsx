import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "@workspace/ui/blocks/headings";
import { cn } from "@workspace/ui/lib/utils";
import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ParagraphProps = ComponentPropsWithoutRef<"p">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;

const components = {
  // Allows customizing built-in components, e.g. to add styling.
  h1: ({ className, ...props }) => (
    <Heading1 className={cn("-ml-2.5", className)} {...props} />
  ),
  h2: ({ className, ...props }) => (
    <Heading2 className={cn("-ml-3.5 lg:-ml-4.5", className)} {...props} />
  ),
  h3: ({ className, ...props }) => (
    <Heading3 className={cn("-ml-3 lg:-ml-4", className)} {...props} />
  ),
  h4: ({ className, ...props }) => (
    <Heading4 className={cn("-ml-3 lg:-ml-4", className)} {...props} />
  ),
  h5: ({ className, ...props }) => (
    <Heading5 className={cn("-ml-3", className)} {...props} />
  ),
  h6: (props: ComponentPropsWithoutRef<"h6">) => (
    <Heading6 className={cn("-ml-3", "")} {...props} />
  ),
  p: (props: ParagraphProps) => <p className="my-6 leading-loose" {...props} />,
  a: ({ href, ...props }: AnchorProps) => {
    const className =
      "underline decoration-muted-foreground hover:text-muted-foreground ";
    if (href?.startsWith("/")) {
      return <Link className={className} href={href} {...props} />;
    }
    if (href?.startsWith("#")) {
      return <a className={className} href={href} {...props} />;
    }
    return (
      <a
        className={className}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        {...props}
      />
    );
  },
  ol: (props: ListProps) => (
    <ol
      className="my-6 list-decimal space-y-2 pl-5 text-gray-800 dark:text-zinc-300"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="my-6 list-disc space-y-1 pl-5 text-gray-800 dark:text-zinc-300"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="my-3 pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium italic" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold" {...props} />
  ),
  img: (props) => (
    <Image
      sizes="100vw"
      style={{ width: "100%", height: "auto" }}
      {...(props as ImageProps)}
    />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote className="mt-6 border-l-2 pl-6 italic" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => (
    <code
      className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm"
      {...props}
    />
  ),
} satisfies MDXComponents;

export function useMDXComponents(): MDXComponents {
  return components;
}
