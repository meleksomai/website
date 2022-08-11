import React from "react";

import { Banner, Box, Heading } from "@thugga/ui";

export interface CalloutProps {
  title: string;
  type?: "note" | "check" | "warning" | "caution";
}

function Callout({ title, type, children }: any) {
  let variant;
  switch (type) {
    case "note":
      variant = "blue";
      break;
    case "warning":
      variant = "yellow";
      break;
    case "caution":
      variant = "red";
      break;
    case "check":
      variant = "green";
      break;
    default:
      variant = "gray";
      break;
  }

  return (
    <Banner variant={variant as any} rounded css={{ my: "$2" }}>
      <Box css={{ py: "$2" }}>
        {title && (
          <Heading as="h4" size="1">
            {title}
          </Heading>
        )}
        {children}
      </Box>
    </Banner>
  );
}

export default Callout;
