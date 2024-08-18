import * as React from "react";

import * as styles from "./Button.css";

import { Box, BoxProps } from "../Box";
import { Stack } from "../Stack";
import { Text } from "../Text";

type BaseProps = {
  asChild?: BoxProps["asChild"];
  /** Centers text and reserves space for icon and spinner */
  center?: boolean;
  /** Shows loading spinner inside button */
  loading?: boolean;
  /** Constrains button to specific shape */
  // shape?: styles.Shape;
  /** Adds ReactNode before children */
  prefix?: React.ReactNode;
  /** Sets dimensions and layout  */
  size?: styles.Size;
  /** Adds ReactNode after children */
  suffix?: React.ReactNode;
  variant?: styles.Variant;
} & Pick<
  JSX.IntrinsicElements["button"],
  | "onClick"
  | "onMouseEnter"
  | "onMouseLeave"
  | "children"
  | "disabled"
  | "type"
  | "tabIndex"
> &
  Pick<BoxProps, "width" | "justifyContent" | "minWidth">;

type WithAnchor = {
  as?: "a";
} & Pick<JSX.IntrinsicElements["a"], "href" | "rel" | "target">;

type WithoutAnchor = {
  as?: "button";
};

export type ButtonProps = BaseProps & (WithAnchor | WithoutAnchor);

export const Button = React.forwardRef(
  (
    {
      asChild,
      center,
      children,
      prefix,
      loading,
      // shape,
      size = "base",
      suffix,
      // tone = "accent",
      variant = "primary",
      minWidth,
      ...boxProps
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    // if (shape) {
    //   childContent = loading ? <Spinner color="current" /> : labelContent;
    // } else {
    const childContent: React.ReactNode = (
      <Stack direction="row" space="100">
        {prefix && prefix}

        {children}

        {suffix && suffix}

        {/* {(loading || suffix) && (
            <Box {...getCenterProps(center, size, "right")}>
              {loading ? <Spinner color="current" /> : suffix}
            </Box>
          )} */}
      </Stack>
    );
    // }

    return (
      <Box
        className={styles.variants({
          center,
          disabled: boxProps.disabled,
          // shape,
          size,
          // tone,
          variant,
        })}
        ref={ref}
        // Passed-through boxProps.
        // Note: Default values for boxProps need to be
        // assigned after the {...boxProps} spread below
        {...boxProps}
        as={boxProps.as ?? "button"}
        justifyContent={boxProps.justifyContent ?? "center"}
        minWidth={minWidth}
        width={boxProps.width ?? "max"}
      >
        {childContent}
      </Box>
    );
  },
);

Button.displayName = "Button";
