import type { Config } from "@markdoc/markdoc";

import { code, fence, heading, link, list } from "./nodes";
import { callout } from "./tags";

export const config: Config = {
  nodes: {
    code,
    fence,
    heading,
    link,
    list,
    paragraph: {
      render: "Paragraph",
    },
  },
  tags: {
    callout,
  },
};