import * as React from "react";

import * as styles from "./Tag.css";

import { Box, BoxProps } from "../Box";

export type TagProps = {
  as?: BoxProps["as"];
  font?: BoxProps["fontFamily"];
  size?: BoxProps["fontSize"];
  weight?: BoxProps["fontWeight"];
} & styles.Variants;

export const Tag = React.forwardRef<
  HTMLElement,
  React.PropsWithChildren<TagProps>
>(
  (
    {
      as = "span",
      rounded,
      children,
      font,
      weight,
      variant,
      size,
      ...restProps
    },
    ref: React.Ref<HTMLElement>
  ) => {
    return (
      <Box
        as={as}
        fontFamily={font}
        fontWeight={weight}
        fontSize={size}
        width="fit"
        className={styles.variants({
          variant,
          rounded,
        })}
        ref={ref}
        {...restProps}
      >
        {children}
      </Box>
    );
  }
);

Tag.displayName = "Tag";
