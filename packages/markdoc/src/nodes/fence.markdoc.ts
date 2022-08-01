import type { Schema } from "@markdoc/markdoc";
import { Tag } from "@markdoc/markdoc";

import { generateID } from "../utils";

export default {
  attributes: {
    content: { type: String },
    description:
      "The programming language of the code block. Place it after the backticks.",
    language: {
      default: "typescript",
      required: true,
      type: String,
    },
  },
  render: "Code",
  // FIXME: review the type-safety of the transform
  transform(node: any, config: any) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const id = generateID(children, attributes);

    return new Tag((this as any).render, { ...attributes, id }, children);
  },
} as unknown as Schema;
