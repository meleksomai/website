import React from "react";

import { Atoms } from "../../atoms";
import { Box, BoxProps } from "../Box";

// inspired by den-gen design system
export const validStackComponents = [
  "a",
  "article",
  "div",
  "form",
  "header",
  "label",
  "li",
  "main",
  "section",
  "span",
] as const;

export interface StackProps {
  align?: BoxProps["alignItems"];
  as?: typeof validStackComponents[number];
  children?: React.ReactNode;
  direction?: Atoms["flexDirection"];
  display?: Atoms["display"];
  flex?: BoxProps["flex"];
  grow?: Atoms["flexGrow"];
  height?: BoxProps["height"];
  justify?: BoxProps["justifyContent"];
  shrink?: Atoms["flexShrink"];
  space?: BoxProps["gap"];
  width?: BoxProps["width"];
  wrap?: Atoms["flexWrap"];
}

export const Stack = React.forwardRef<HTMLElement, StackProps>(
  (
    {
      align = "center",
      as = "div",
      direction = "column",
      display = "flex",
      flex,
      grow,
      height,
      justify,
      shrink,
      space = "400",
      width,
      wrap,
      ...restProps
    },
    ref
  ) => {
    return (
      <Box
        as={as}
        ref={ref}
        display={display}
        flex={flex}
        flexDirection={direction}
        flexGrow={grow}
        flexShrink={shrink}
        flexWrap={wrap}
        alignItems={align}
        gap={space}
        justifyContent={justify}
        height={height}
        width={width}
        {...restProps}
      />
    );
  }
);

Stack.displayName = "Stack";
