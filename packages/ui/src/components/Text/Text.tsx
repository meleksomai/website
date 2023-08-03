import * as React from "react";

import * as styles from "./Text.css";

import { Box, BoxProps } from "../Box";

export type TextProps = {
  // align?: BoxProps["textAlign"];
  as?:
    | "code"
    | "div"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "label"
    | "p"
    | "span"
    | "ol"
    | "ul";
  bold?: boolean;
  color?: BoxProps["color"];
  display?: BoxProps["display"];
  font?: BoxProps["fontFamily"];
  underline?: boolean;
  weight?: BoxProps["fontWeight"];
} & styles.Variants;

export const Text = React.forwardRef<
  HTMLElement,
  React.PropsWithChildren<TextProps>
>(
  (
    {
      as = "div",
      bold = false,
      color,
      children,
      display,
      font = "sans",
      weight,
      underline,
      variant = "base",
    },
    ref: React.Ref<HTMLElement>
  ) => {
    return (
      <Box
        as={as}
        className={styles.variants({
          variant,
          // ellipsis: ellipsis ? true : undefined,
          underline: underline ? true : undefined,
          ul: as === "ul" ? true : undefined,
          ol: as === "ol" ? true : undefined,
        })}
        display={display}
        width="auto"
        color={color}
        fontFamily={font}
        fontWeight={bold ? "semiBold" : weight}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

Text.displayName = "Text";
