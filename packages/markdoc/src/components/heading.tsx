import * as React from "react";

import { Heading } from "@thugga/ui";

const h1 = ({ children, ...props }: React.PropsWithChildren<any>) => (
  <Heading size="3" as="h1" css={{ pt: "$3" }} {...props}>
    {children}
  </Heading>
);

const h2 = ({ children, ...props }: React.PropsWithChildren<any>) => (
  <Heading size="2" as="h2" css={{ pt: "$2" }} {...props}>
    {children}
  </Heading>
);

const h3 = ({ children, ...props }: React.PropsWithChildren<any>) => (
  <Heading size="1" as="h3" css={{ pt: "$2" }} {...props}>
    {children}
  </Heading>
);

export default function HeadingMarkdoc({
  children,
  ...props
}: React.PropsWithChildren<any>) {
  switch (props.level) {
    case 1:
      return h1({ children, ...props });
    case 2:
      return h2({ children, ...props });
    case 3:
      return h3({ children, ...props });
    default:
      return null;
  }
}
