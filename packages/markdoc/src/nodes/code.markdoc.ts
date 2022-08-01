import type { Schema } from "@markdoc/markdoc";
import { Tag } from "@markdoc/markdoc";

import { generateID } from "../utils";

export default {
  attributes: {
    content: { required: true, type: String },
  },
  render: "InlineCode",
  transform(node: any, config: any) {
    const attributes = node.transformAttributes(config);
    const children = node.transformChildren(config);
    const id = generateID(children, attributes);
    return new Tag((this as any).render, { ...attributes, id }, children);
  },
} as unknown as Schema;
