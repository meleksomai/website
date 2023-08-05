import * as React from "react";
import Balancer from "react-wrap-balancer";

import * as styles from "./Heading.css";

import { Box, BoxProps } from "../Box";

export type HeadingProps = {
  align?: BoxProps["textAlign"];
  as?:
    | "div"
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "legend"
    | "span";
  balance?: boolean;
  bold?: boolean;
  children?: React.ReactNode;
  color?: BoxProps["color"];
  id?: BoxProps["id"];
  inline?: boolean;
  mono?: boolean;
  responsive?: boolean;
  serif?: boolean;
  size?: styles.Size;
  transform?: BoxProps["textTransform"];
  wordBreak?: BoxProps["wordBreak"];
} & styles.Variants;

export const Heading = ({
  align,
  as,
  id,
  balance = false,
  bold = false,
  children,
  color,
  size = "h2",
  mono = false,
  inline = false,
  serif = false,
  responsive,
  transform,
  wordBreak,
}: HeadingProps) => {
  let content = children;
  if (balance) {
    content = <Balancer>{children}</Balancer>;
  }

  return (
    <Box
      as={as ?? (size === "hero" ? "h1" : size)}
      id={id}
      className={styles.variants({
        bold,
        mono,
        responsive,
        serif,
        size,
        inline,
      })}
      color={color}
      // id={id}
      textAlign={align}
      textTransform={transform}
      wordBreak={wordBreak}
    >
      {content}
    </Box>
  );
};
