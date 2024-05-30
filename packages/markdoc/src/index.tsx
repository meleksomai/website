import { Config } from "@markdoc/markdoc";

import {
  Heading,
  Text,
  Box,
  Callout,
  Code,
  Link,
  Stack,
  HeadingProps,
  Tag,
  Table,
  Image,
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
  Blockquote: ({ children }: any) => {
    return (
      <Box paddingY="500">
        <Text as="div" color="slate11" variant="large">
          {children.props.children}
        </Text>
      </Box>
    );
  },
  Document: ({ children }: any) => {
    return (
      <Stack as="article" space="500" align="flex-start">
        {children}
      </Stack>
    );
  },
  Paragraph: ({ children }: any) => {
    return (
      <Text as="p" variant="reading">
        {children}
      </Text>
    );
  },
  InlineCode: ({ content }: any) => {
    return (
      <Tag as="code" variant="violet" font="mono">
        {content}
      </Tag>
    );
  },
  Heading: ({ children, level }: any) => {
    return (
      <Heading
        id={children}
        size={`h${level + 1}` as HeadingProps["size"]}
        bold={false}
      >
        {children}
      </Heading>
    );
  },
  Fence: ({ children, ...props }: any) => {
    return <Code {...props}>{children}</Code>;
  },
  Link: ({ children, ...props }: any) => {
    return (
      <Link variant="secondary" {...props}>
        {children}
      </Link>
    );
  },
  Callout: Callout,
  List: ({ children, ordered }: any) => {
    return (
      <Box>
        <Text as={ordered ? "ol" : "ul"}>{children}</Text>
      </Box>
    );
  },
  Image: ({ src, alt, width, height }: any) => {
    return <Image src={src} alt={alt} width={width} height={height} />;
  },
  Table: Table.Root,
  Thead: Table.Thead,
  Tbody: Table.Tbody,
  Tr: Table.Tr,
  Th: Table.Th,
  Td: Table.Td,
};

export { config, components };
