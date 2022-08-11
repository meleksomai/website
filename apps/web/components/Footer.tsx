import React from "react";

import { Text, Section } from "@thugga/ui";

const DEFAULT_TAG = "div";

export const Footer = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>
  //   NextLinkProps
>((props, forwardedRef) => {
  return (
    <Section css={{ pt: "$8" }}>
      <Text size="1">Made with love from Wisconsin, Illinois, and Tunis.</Text>
    </Section>
  );
});

Footer.displayName = "Footer";
