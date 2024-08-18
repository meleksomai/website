import NextLink from "next/link";
import * as React from "react";

import * as styles from "./Link.css";

import { Box, BoxProps } from "../Box";
import { Stack } from "../Stack";
import { Text, TextProps } from "../Text";

export type LinkProps = {
  bold?: boolean;
  children?: React.ReactNode;
  /** Make the link external */
  external?: boolean;
  href: string;
  mono?: boolean;
  /** Use NextLink by default */
  nextLink?: boolean;
  /** Adds ReactNode before children */
  prefix?: React.ReactNode;
  size?: TextProps["variant"];
  /** Adds ReactNode after children */
  suffix?: React.ReactNode;
} & styles.Variants &
  Pick<JSX.IntrinsicElements["a"], "href">;

export const Link = React.forwardRef<HTMLElement, LinkProps>(
  (
    {
      variant,
      mono = false,
      bold = false,
      children,
      suffix,
      prefix,
      // className,
      external,
      underline,
      nextLink = true,
      disabled,
      size,
      ...restProps
    },
    ref,
  ) => {
    const labelContent = (
      <Text
        as="span"
        bold={bold}
        variant={size}
        color="inherit"
        font={mono ? "mono" : undefined}
        display="initial"
        ref={ref}
      >
        {children}
      </Text>
    );

    // if (shape) {
    //   childContent = loading ? <Spinner color="current" /> : labelContent;
    // } else {
    let childContent: React.ReactNode = labelContent;

    if (suffix || prefix) {
      childContent = (
        <Stack direction="row" space="100">
          {prefix}

          {labelContent}

          {suffix}

          {/* {(loading || suffix) && (
            <Box {...getCenterProps(center, size, "right")}>
              {loading ? <Spinner color="current" /> : suffix}
            </Box>
          )} */}
        </Stack>
      );
    }

    // FIXME: this is a hack to get around a bug in next.js
    // bug: https://github.com/vercel/next.js/issues/44295
    const StandardBox = ({ children, ...props }: BoxProps) => {
      return (
        <Box as="a" {...props}>
          {children}
        </Box>
      );
    };
    const CustomLink = nextLink ? NextLink : StandardBox;

    return (
      <CustomLink
        className={styles.variants({
          variant,
          underline,
          disabled,
        })}
        target={external ? "_blank" : undefined}
        {...restProps}
      >
        {childContent}
      </CustomLink>
    );
  },
);

Link.displayName = "Link";
