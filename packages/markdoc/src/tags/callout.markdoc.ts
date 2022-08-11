import type { Schema } from "@markdoc/markdoc";

export default {
  attributes: {
    title: {
      description: "The title displayed at the top of the callout",
      type: String,
    },
    type: {
      default: "note",
      description:
        'Controls the color and icon of the callout. Can be: "caution", "check", "note", "warning"',
      errorLevel: "critical",
      matches: ["caution", "check", "note", "warning"],
      type: String,
    },
  },
  children: ["paragraph", "tag", "list"],
  description: "Display the enclosed content in a callout box",
  render: "Callout",
} as unknown as Schema;
