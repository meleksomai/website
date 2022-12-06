"use client";

import * as React from "react";

import { VariantProps, Flex, CSS, Container } from "@thugga/ui";

type LayoutVariants = React.ComponentProps<"div"> &
  VariantProps<typeof Flex> & { as?: any; css?: CSS };

export const Layout = React.forwardRef<React.ElementRef<"div">, LayoutVariants>(
  (props, forwardedRef) => {
    return (
      <Flex
        ref={forwardedRef}
        css={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          position: "absolute",
          zIndex: "-1",
          ...props.css,
        }}
      >
        <Container
          size="3"
          css={{
            flex: 1,
          }}
        >
          {props.children}
        </Container>
      </Flex>
    );
  }
);

Layout.displayName = "Layout";
