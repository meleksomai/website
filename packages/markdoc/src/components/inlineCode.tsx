import * as React from "react";

import { Tag } from "@thugga/ui";

function InlineCode({ content }: React.PropsWithChildren<any>) {
  return (
    <Tag as="span" size="3" variant="violet" mono>
      {content}
    </Tag>
  );
}
InlineCode.displayName = "InlineCode";

export default InlineCode;
