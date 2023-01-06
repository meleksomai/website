import React from "react";

import { Banner, Box, Heading, Text } from "@thugga/ui";

export interface CalloutProps {
  title: string;
  type?: "note" | "check" | "warning" | "caution";
}

function Callout({ title, type, children }: any) {
  let variant = "gray";
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
          <Heading as="p" size="1" variant={variant as any}>
            {title}
          </Heading>
        )}
        <Text as="span" variant={variant as any}>
          {children}
        </Text>
      </Box>
    </Banner>
  );
}

export default Callout;
