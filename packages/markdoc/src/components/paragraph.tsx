import * as React from "react";

import { Paragraph } from "@thugga/ui";

function ParagraphMarkdoc({ children }: React.PropsWithChildren<any>) {
  return <Paragraph css={{ py: "$1" }}>{children}</Paragraph>;
}
ParagraphMarkdoc.displayName = "ParagraphMarkdoc";

export default ParagraphMarkdoc;
