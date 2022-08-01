import * as React from "react";

import { Link } from "@thugga/ui";

function LinkMarkdoc({ children, href }: any) {
  return (
    <Link href={href} variant="blue">
      {children}
    </Link>
  );
}
LinkMarkdoc.displayName = "Link";

export default LinkMarkdoc;
