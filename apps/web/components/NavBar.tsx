import React from "react";

import { Text, Section, Heading, Button, Separator } from "@thugga/ui";

import { NextLink } from "./NextLink";

const DEFAULT_TAG = "div";

export const NavBar = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>
  //   NextLinkProps
>((props, forwardedRef) => {
  return (
    <Section css={{ py: "$6" }}>
      <NextLink css={{ mr: "$5" }} variant="simple" href="/papers">
        Publications
      </NextLink>
      <NextLink css={{ pr: "$5" }} variant="simple" href="https://twitter.com/meleksomai">
        Twitter
      </NextLink>
    </Section>
  );
});

NavBar.displayName = "NavBar";
