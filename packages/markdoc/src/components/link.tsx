import * as React from "react";

import { Link } from "@thugga/ui";

function LinkMarkdoc({ children, href }: any) {
  // FIXME
  return (
    <Link as="span" variant="blue">
      {children}
    </Link>
  );
}
LinkMarkdoc.displayName = "Link";

export default LinkMarkdoc;
