import * as React from "react";

import { Heading } from "@thugga/ui";

function Blockquote({ children }: React.PropsWithChildren<any>) {
  return (
    <Heading as="span" size="1" css={{ p: "$2" }} mono>
      {children}
    </Heading>
  );
}
Blockquote.displayName = "Blockquote";

export default Blockquote;
