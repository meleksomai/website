import type { Config } from "@markdoc/markdoc";

import {
  Box,
  Callout,
  Code,
  Heading,
  type HeadingProps,
  Image,
  Link,
  Stack,
  Table,
  Tag,
  Text,
} from "@thugga/ui";

const config: Config = {
  nodes: {
    document: {
      render: "Document",
    },
    paragraph: {
      render: "Paragraph",
    },
    heading: {
      render: "Heading",
      attributes: {
        level: { type: String },
      },
    },
    code: {
      render: "InlineCode",
      attributes: {
        content: { type: String },
      },
    },
    blockquote: {
      render: "Blockquote",
    },
    link: {
      render: "Link",
      attributes: {
        href: { type: String },
      },
    },
    list: {
      render: "List",
      attributes: {
        ordered: { type: Boolean },
      },
    },
    fence: {
      render: "Fence",
      attributes: {
        language: { type: String },
        title: { type: String },
        copy: { type: Boolean, default: false },
        numberLines: { type: Boolean, default: true },
      },
    },
    // TABLE
    table: {
      render: "Table",
    },
    thead: {
      render: "Thead",
    },
    tbody: {
      render: "Tbody",
    },
    tr: {
      render: "Tr",
    },
    th: {
      render: "Th",
      attributes: {
        width: { type: String },
        center: { type: Boolean },
      },
    },
    td: {
      render: "Td",
      attributes: {
        center: { type: Boolean },
      },
    },
  },
  tags: {
    image: {
      render: "Image",
      attributes: {
        src: { type: String },
        alt: { type: String },
        width: { type: Number },
        height: { type: Number },
      },
    },
    callout: {
      render: "Callout",
      attributes: {
        title: {
          type: String,
          default: "",
        },
        variant: {
          type: String,
          default: "default",
        },
      },
    },
  },
};

const components = {
  Blockquote: ({ children }: any) => (
    <Box paddingY="500">
      <Text as="div" color="slate11" variant="large">
        {children.props.children}
      </Text>
    </Box>
  ),
  Document: ({ children }: any) => (
    <Stack align="flex-start" as="article" space="500">
      {children}
    </Stack>
  ),
  Paragraph: ({ children }: any) => (
    <Text as="p" variant="reading">
      {children}
    </Text>
  ),
  InlineCode: ({ content }: any) => (
    <Tag as="code" font="mono" variant="violet">
      {content}
    </Tag>
  ),
  Heading: ({ children, level }: any) => (
    <Heading
      bold={false}
      id={children}
      size={`h${level + 1}` as HeadingProps["size"]}
    >
      {children}
    </Heading>
  ),
  Fence: ({ children, ...props }: any) => <Code {...props}>{children}</Code>,
  Link: ({ children, ...props }: any) => (
    <Link variant="secondary" {...props}>
      {children}
    </Link>
  ),
  Callout,
  List: ({ children, ordered }: any) => (
    <Box>
      <Text as={ordered ? "ol" : "ul"}>{children}</Text>
    </Box>
  ),
  Image: ({ src, alt, width, height }: any) => (
    <Image alt={alt} height={height} src={src} width={width} />
  ),
  Table: Table.Root,
  Thead: Table.Thead,
  Tbody: Table.Tbody,
  Tr: Table.Tr,
  Th: Table.Th,
  Td: Table.Td,
};

export { config, components };
