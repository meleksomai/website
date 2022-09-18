import NxLink from "next/link";
import React from "react";

import { Link, VariantProps, CSS } from "@thugga/ui";

const DEFAULT_TAG = "a";

type LinkVariants = VariantProps<typeof Link>;

// Heading Props
export type NextLinkProps = React.ComponentProps<typeof DEFAULT_TAG> &
  LinkVariants & { as?: any; css?: CSS };

export const NextLink = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  NextLinkProps
>((props, forwardedRef) => {
  return (
    <NxLink href={props.href as any} passHref={true}>
      <Link {...props} ref={forwardedRef}></Link>
    </NxLink>
  );
});

NextLink.displayName = "NextLink";
